fetchDataArticle();

async function fetchDataArticle(){
    try {
        // API endpoint
        //const apiUrl = 'https://newsapi.org/v2/top-headlines?country=id&category=health&apiKey=d3eff7469af34ed6b7a923f3fa99876f';
        const apiUrl = 'https://newsapi.ai/api/v1/article/getArticles?query=%7B%22%24query%22%3A%7B%22%24and%22%3A%5B%7B%22%24or%22%3A%5B%7B%22conceptUri%22%3A%22http%3A%2F%2Fid.wikipedia.org%2Fwiki%2FKesehatan%22%7D%2C%7B%22conceptUri%22%3A%22http%3A%2F%2Fen.wikipedia.org%2Fwiki%2FHealth%22%7D%5D%7D%2C%7B%22categoryUri%22%3A%22news%2FHealth%22%7D%2C%7B%22locationUri%22%3A%22http%3A%2F%2Fen.wikipedia.org%2Fwiki%2FIndonesia%22%7D%2C%7B%22lang%22%3A%22ind%22%7D%5D%7D%2C%22%24filter%22%3A%7B%22forceMaxDataTimeWindow%22%3A%2231%22%7D%7D&resultType=articles&articlesSortBy=rel&includeArticleConcepts=true&includeArticleCategories=true&includeArticleImage=true&apiKey=bf4a1803-7437-45df-9885-345e448c988f';
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

        // Move data.articles to dataArticles
        const dataArticles = data.articles;

        createArticleList(dataArticles);


    }catch(error){
        console.error('Error:', error);

    }
}


function createArticleList(dataArticles){
    //console.log(dataArticles);

    var htmlContent = '<h1 class="text-4xl text-center mb-16">Artikel Kesehatan</h1>';

    // Get the container element
    var articlesInput = document.getElementById('articles');

    var paginationCount = 1;

    articlesInput.innerHTML = '';

    Object.keys(dataArticles.results).slice(0, 25).forEach((index) => {
        //console.log(dataArticles.results[index].title + ' | ' + index);

        htmlContent += `
            <a href="${dataArticles.results[index].url}" class="md:mx-20 mx-0 md:mb-10 mb-10 grid grid-flow-row grid-cols-1 md:p-10 p-0 shadow rounded-xl hover:shadow-lg active:bg-gray-100">
                <article class="mb-6">
                    <img src="${dataArticles.results[index].image}" class="mb-3 rounded-t-lg tr-lg w-full h-40 object-cover"/>
                    <p class="mx-2">${dateConversion(dataArticles.results[index].dateTime.slice(0,10))}</p>
                    <h2 class="mb-3 mx-2 text-2xl font-bold">${dataArticles.results[index].title}</h2>
                    <p class="line-clamp-[8] mx-2">
                        ${dataArticles.results[index].body}
                    </p>
                </article>
            </a>
        `;
    });

    articlesInput.innerHTML = htmlContent;

    /*articlesInput.innerHTML += `
        <div class="mt-20 flex flex-col items-center" id="paginationContainer">
            <a class="bg-sky-500 text-white text-xl duration-500 px-12 py-4 hover:bg-sky-600 text-center rounded-full" onclick="Pagination(${JSON.stringify(dataArticles)}, ${paginationCount})"><strong>Artikel</strong></a>
        </div>
    `;*/
}

function dateConversion(date){
    let year = date.slice(0,4);
    let month = date.slice(5,7);
    let day = date.slice(8, 10);
    
    switch(month){
        case '01':
            month = 'Januari';
            break;
        case '02':
            month = 'Februari';
            break;
        case '03':
            month = 'Maret';
            break;
        case '04':
            month = 'April';
            break;
        case '05':
            month = 'Mei';
            break;
        case '06':
            month = 'Juni';
            break;
        case '07':
            month = 'Juli';
            break;
        case '08':
            month = 'Agustus';
            break;
        case '09':
            month = 'September';
            break;
        case '10':
            month = 'Oktober';
            break;
        case '11':
            month = 'November';
            break;
        case '12':
            month = 'Desember';
            break;
    }

    let new_date = day + ' ' + month + ' ' + year;
    return new_date;
}


function Pagination(dataArticles, paginationCount){

    //var dataArticles = JSON.parse(dataArticlesString);

    var target = document.getElementById('paginationContainer');


    var articlesInput = document.getElementById('articles');

    /*Object.keys(dataArticles.results).slice(paginationCount*10, (paginationCount*10)+10).forEach((index) => {
        //console.log(dataArticles.results[index].title + ' | ' + index);

        articlesInput.innerHTML += `
            <a href="${dataArticles.results[index].url}" class="md:mx-20 mx-0 md:mb-10 mb-10 grid grid-flow-row grid-cols-1 md:p-10 p-0 shadow rounded-xl hover:shadow-lg active:bg-gray-100">
                <article class="mb-6">
                    <img src="${dataArticles.results[index].image}" class="mb-3 rounded-t-lg tr-lg w-full h-40 object-cover"/>
                    <p class="mx-2">${dateConversion(dataArticles.results[index].dateTime.slice(0,10))}</p>
                    <h2 class="mb-3 mx-2 text-2xl font-bold">${dataArticles.results[index].title}</h2>
                    <p class="line-clamp-[8] mx-2">
                        ${dataArticles.results[index].body}
                    </p>
                </article>
            </a>
        `;
    });

    

    articlesInput.innerHTML += `
        <div class="mt-20 flex flex-col items-center" id="pagination">
            <a class="bg-sky-500 text-white text-xl duration-500 px-12 py-4 hover:bg-sky-600 text-center rounded-full" onclick="pagination(${dataArticles}, ${paginationCount})"><strong>Artikel</strong></a> 
        </div>
    `;*/
    
    paginationCount += 1;

    console.log(`Pagination count: ${paginationCount}`);
}