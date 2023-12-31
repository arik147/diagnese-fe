createNavBar();

function Menu(e){
    let list = document.querySelector('ul');

    console.log(list.className);

    e.name === 'menu' ? (e.name = 'close', list.classList.add('top-[80px]'), list.classList.add('opacity-100')) : (e.name = 'menu', list.classList.remove('top-[80px'), list.classList.remove('opacity-100'))
}

function createNavBar(){
    var navInput = document.getElementById('navbar');

    navInput.innerHTML = `
    <div class="max-w-screen-xl flex flex-wrap justify-between items-center mx-auto p-4">
          <a href="index.html" class="flex items-center space-x-3 rtl:space-x-reverse">
              <img src="../img/diagnese_logo.png" class="h-8" alt="Diagnese Logo" />
              
          </a>
          <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 dark:bg-transparent focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-700 dark:hover:bg-gray-100 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
              <span class="sr-only">Open main menu</span>
              <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
              </svg>
          </button>
          <div class="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-white md:dark:bg-white dark:border-gray-700">
              <li>
                <a href="index.html" class="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Home</a>
              </li>
              <li>
                <a href="about.html" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-900 md:dark:hover:text-blue-500 dark:hover:bg-gray-400 dark:hover:text-white md:dark:hover:bg-transparent">About</a>
              </li>
              <li>
                <a href="gejala_form.html" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-900 md:dark:hover:text-blue-500 dark:hover:bg-gray-400 dark:hover:text-white md:dark:hover:bg-transparent">Diagnosa</a>
              </li>
              <li>
                <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" class="flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded hover:bg-blue-700 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-gray-900 md:dark:hover:text-blue-500 dark:focus:text-blue-500 dark:border-gray-700 dark:hover:bg-blue-700 md:dark:hover:bg-transparent">Info Kesehatan <svg class="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                  </svg></button>
                  <!-- Dropdown menu -->
                  <div id="dropdownNavbar" class="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-white dark:divide-gray-600">
                    <ul class="py-2 text-sm text-gray-700 dark:text-gray-700" aria-labelledby="dropdownLargeButton">
                      <li>
                        <a href="glosariumPage.html" class="block px-4 py-2 hover:bg-blue-700 dark:hover:bg-blue-700 dark:hover:text-white">Penyakit A-Z</a>
                      </li>
                      <li>
                        <a href="articlePage.html" class="block px-4 py-2 hover:bg-blue-700 dark:hover:bg-blue-700 dark:hover:text-white">Artikel Kesehatan</a>
                      </li>
                    </ul>
                </div>          
              </li>
            </ul>
          </div>
        </div>
    `;
}