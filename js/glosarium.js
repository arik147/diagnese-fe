fetchDataGlossary();

async function fetchDataGlossary(){
    try {
        // API endpoint
        const apiUrl = 'https://diagnese-be-3ppnq3acna-et.a.run.app/glosarium/';

        // make a GET request using the fetch API
        const response = await fetch(apiUrl);

        // check if the response status is OK (status code 200)
        if(!response.ok){
            throw new Error('Network response was not OK');
        }

        // Parse the response body as JSON
        const data = await response.json();

        // Handle the data from the API
        console.log('API Response:', data);

        // Move data.data to dataSymptoms
        const dataGlossary = data.data;

        createGlossary(dataGlossary);


    }catch(error){
        console.error('Error:', error);

    }

}

function createGlossary(dataGlossary){
    console.log(dataGlossary);

    // Sort the Glossary data
    var sortedData = dataGlossary.slice().sort((a, b) => {
        prognosisA = a.prognosis.toLowerCase();
        prognosisB = b.prognosis.toLowerCase();
      
        if (prognosisA < prognosisB) return -1;
        if (prognosisA > prognosisB) return 1;
        return 0;
    });

    var htmlContent = '';

    // Get the container element
    var glossaryInput = document.getElementById('glossary');

    glossaryInput.innerHTML = '';

    Object.keys(sortedData).forEach((index) => {
        console.log(sortedData[index].prognosis + ' | ' + index);

        htmlContent += `
                    <li class="mb-8">
                        <span class="text-xl">${sortedData[index].prognosis}</span>
                        <p>${sortedData[index].deskripsi}</p>
                    </li>
                `;
    });

    glossaryInput.innerHTML = htmlContent;
}