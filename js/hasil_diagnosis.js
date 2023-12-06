getResult ();


function getResult () {
    // Retrieve data from localStorage
    const spesialis = localStorage.getItem('spesialis');
    const prognosis = localStorage.getItem('prognosis');
    const deskripsi = localStorage.getItem('deskripsi');
    const gejala = localStorage.getItem('gejala');

    // Parse the JSON strings to JavaScript objects
    const parsedSpesialis = JSON.parse(spesialis);
    const parsedPrognosis = JSON.parse(prognosis);
    const parsedDeskripsi = JSON.parse(deskripsi);
    const parsedGejala = JSON.parse(gejala);

    // Create the data object
    const data = {
        spesialis: parsedSpesialis,
        prognosis: parsedPrognosis,
        deskripsi: parsedDeskripsi,
        gejala: parsedGejala
    };

    // console.log('prognosis', parsedPrognosis);
    // console.log('deskripsi', parsedDeskripsi);
    // console.log('spesialis', parsedSpesialis);
    // console.log('gejala', parsedGejala);

    createResultContent(data);
}


function createResultContent (data) {
    // console.log(dataSymptoms);

    // Get the container element
    var resultHtml = document.getElementById('prediction-result');

    // Clear existing content
    resultHtml.innerHTML = '';

    // Accumulate HTML content in a variable
    var htmlContent = '';


    htmlContent += `
        <h1 class="text-5xl text-center mb-16"><b>Hasil Diagnosa</b></h1>
        <hr class="h-px my-8 bg-gray-1000 border-0 dark:bg-gray-700">
        <h1 class="text-3xl text-center mb-16"><b>Penyakit yang anda alami adalah <mark class="px-2 text-white bg-blue-800 rounded dark:bg-blue-500">${data.prognosis}</mark> </b></h1>

        <div class="flex justify-center items-center mb-16">
            <div class="w-full max-w-5xl bg-white rounded-lg shadow-lg p-8">
              <h2 class="text-xl font-bold mb-4">Gejala Yang Dialami</h2>
              <ul class="list-none">
    `;

    data.gejala.forEach((gejala) => {
        // Convert underscores to spaces and capitalize words
        const formattedGejala = gejala
          .split('_')
          .map(word => word.charAt(0).toUpperCase() + word.slice(1))
          .join(' ');
      
        // Create HTML for category div
        htmlContent += `
          <li class="max-w-md space-y-1 list-disc list-inside">   
            <span class="text-lg">${formattedGejala}</span>
          </li>
        `;
    });

    htmlContent += `
    <hr class="w-48 h-1 mx-auto my-4 bg-black border-0 rounded md:my-10">
    <div class="mb-16">
        <h1 class="text-3xl text-center mb-16"><b>Deskripsi</b></h1>
        <p>${data.deskripsi}</p>
    </div>
    <hr class="w-48 h-1 mx-auto my-4 bg-black border-0 rounded md:my-10">
    <div class="flex flex-col items-center justify-center">
            <div class="w-full max-w-md bg-white rounded-lg shadow-lg p-8 mb-20">
              <h2 class="text-3xl text-center font-bold mb-8">Rekomendasi Spesialis</h2>
              <div class="flex flex-wrap justify-center p-10">
                <img class="object-scale-down w-fit justify-self-center mb-8" src="../img/${data.spesialis}.png">
                <div class="w-full md:w-1/2 mb-4">
                  <h3 class="text-center font-medium text-lg">${data.spesialis}</h3>
                </div>
              </div>
            </div>
          </div>
    `;

    // Set the accumulated HTML content to the resultHtml container
    resultHtml.innerHTML = htmlContent;
}
