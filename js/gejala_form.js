function Show(e){
    // console.log(e.id + " is clicked");
    if(e.id != null) {
        
        // Toggle rotation class for the chevron icon
        let id_header = "chevron_" + e.id;
        let chevronIcon = document.getElementById(id_header);
        chevronIcon.name === 'chevron-up' ? (chevronIcon.name = 'chevron-down') : (chevronIcon.name = 'chevron-up');
        //console.log(chevronIcon.className);

        // Toggle class for the gejala_mata div
        let id_content = "gejala_" + e.id;
        let gejalaDiv = document.getElementById(id_content);

        // console.log(gejalaDiv.className);

        if(gejalaDiv.className === "p-0 grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4 pointer-events-none border-x-0 static w-full h-0 opacity-0"){
            gejalaDiv.className = "p-5 grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4 pointer-events-auto border-x-2 static w-full h-auto opacity-100";
        }else{
            gejalaDiv.className = "p-0 grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4 pointer-events-none border-x-0 static w-full h-0 opacity-0";

        }
        
    }
}

fetchDataSymptoms();

async function fetchDataSymptoms() {
            try {
                // API endpoint
                const apiUrl = 'https://diagnese-be-3ppnq3acna-et.a.run.app/predict/';

                // Make a GET request using the fetch API
                const response = await fetch(apiUrl);

                // Check if the response status is OK (status code 200)
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                // Parse the response body as JSON
                const data = await response.json();

                // Handle the data from the API
                console.log('API Response:', data);

                // Move data.data to dataSymptoms
                const dataSymptoms = data.data;

                createForm (dataSymptoms);
                
            } catch (error) {
                console.error('Error:', error);
                // Handle errors here
            }
        }

        function createForm (dataSymptoms) {
            localStorage.clear();
            // console.log(dataSymptoms);

            // Get the container element
            var formInput = document.getElementById('predict-form');

            // Clear existing content
            formInput.innerHTML = '';

            // Accumulate HTML content in a variable
            var htmlContent = '';

            // Object to store selected symptoms
            var selectedSymptoms = {};

            // Loop through each category in dataSymptoms
            Object.keys(dataSymptoms).forEach((category, index) => {
                // Create HTML for category div
                htmlContent += `
                    <div class="flex items-center justify-between border-2 ${index === 0 ? 'rounded-t-lg' : ''} px-5 py-2 bg-gray-50 cursor-pointer active:bg-gray-100" id="${category}" onclick="Show(this)">
                        <span class="text-2xl">${category}</span>
                        <span class="text-2xl">
                            <ion-icon name="chevron-down" id="chevron_${category}"></ion-icon>
                        </span>
                    </div>
                `;

                // Create HTML for checkboxes div
                htmlContent += `
                    <div id="gejala_${category.toLowerCase().replace(' ', '_')}" class="p-0 grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4 pointer-events-none border-x-0 static w-full h-0 opacity-0">
                        ${Object.keys(dataSymptoms[category]).map((symptom) => `
                            <div class="grid grid-cols-5">
                                <input type="checkbox" class="col-span-1 h-4 mt-1" id="checkbox_${category.toLowerCase().replace(' ', '_')}_${symptom.toLowerCase().replace(' ', '_')}">
                                <label class="col-span-4 cursor-pointer hover:text-sky-600" for="checkbox_${category.toLowerCase().replace(' ', '_')}_${symptom.toLowerCase().replace(' ', '_')}" class="ml-2 cursor-pointer hover:text-sky-600">
                                    ${symptom.replace(/_/g, ' ')}
                                </label>
                            </div>
                        `).join('')}
                    </div>
                `;
            });

            // Create HTML for submit button
            htmlContent += `
                <button type="submit" class="flex items-center justify-center w-full border-2 rounded-b-lg bg-gray-50 px-5 py-2 cursor-pointer active:bg-gray-100" id="submit">
                    <span class="text-2xl">Submit</span>
                </button>
            `;

            // Set the accumulated HTML content to the formInput container
            formInput.innerHTML = htmlContent;

            handleSubmit (dataSymptoms);
        }


        function handleSubmit (dataSymptoms) {
            // Initialize an object to store combined symptoms
            let combinedSymptoms = {};

            // Add event listener to the submit button
            document.getElementById('submit').addEventListener('click', function () {
                // Iterate through checkboxes and save selected symptoms
                Object.keys(dataSymptoms).forEach((category) => {
                    Object.keys(dataSymptoms[category]).forEach((symptom) => {
                        var checkboxId = `checkbox_${category.toLowerCase().replace(' ', '_')}_${symptom.toLowerCase().replace(' ', '_')}`;
                        var checkbox = document.getElementById(checkboxId);

                        // Check if the checkbox is checked
                        if (checkbox.checked) {
                            // Combine selected symptoms into a single object
                            combinedSymptoms[`${symptom}`] = 1;
                        }
                    });
                });


                // console.log(combinedSymptoms);
            
                // Extract keys and create a new array
                const keysArray = Object.keys(combinedSymptoms);

                // Remove each corresponding value
                const inputGejala = keysArray.map(key => key);

                // Post data to the specified URL
                postData('https://diagnese-be-3ppnq3acna-et.a.run.app/predict/', combinedSymptoms);

                localStorage.setItem('gejala', JSON.stringify(inputGejala));
            });
        }

        function postData(url, data) {
            return fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            })
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((responseData) => {
                // Handle the response data
                console.log('API Response:', responseData);
                localStorage.setItem('prognosis', JSON.stringify(responseData.data.prognosis));
                localStorage.setItem('deskripsi', JSON.stringify(responseData.data.deskripsi));
                localStorage.setItem('spesialis', JSON.stringify(responseData.data.spesialis));
                // Perform actions with the response data if needed

                // MOVE TO RESULT PAGE
                window.location.href = 'hasilDiagnosis.html';
            })
            .catch((error) => {
                console.error('Error:', error);
                // Handle errors here
            });
        }