createNavBar();

function Menu(e){
    let list = document.querySelector('ul');

    console.log(list.className);

    e.name === 'menu' ? (e.name = 'close', list.classList.add('top-[80px]'), list.classList.add('opacity-100')) : (e.name = 'menu', list.classList.remove('top-[80px'), list.classList.remove('opacity-100'))
}

function createNavBar(){
    var navInput = document.getElementById('navbar');

    navInput.innerHTML = `
        <div class="flex justify-between items-center ">
            <span class="text-2xl font-[Poppins] cursor-pointer">
                <a href="index.html"><img class="h-10 inline" src="../img/diagnese_logo.png"></a>
            </span>

            <span class="text-4xl cursor-pointer md:hidden block">
                <ion-icon name="menu" onclick="Menu(this)"></ion-icon>
            </span>
        </div>

        <ul class="md:flex md:items-center z-[100] md:z-auto md:static absolute 
        bg-white w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 
        opacity-0 top-[-400px] transition-all ease-in duration-300">
            <li class="mx-5 my-6 md:my-0">
                <a href="index.html" class="text-x1 hover:text-cyan-500 duration-500">Beranda</a>
            </li>
            <li class="mx-5 my-6 md:my-0">
                <a href="articlePage.html" class="text-x1 hover:text-cyan-500 duration-500">Artikel</a>
            </li>
            <li class="mx-5 my-6 md:my-0">
                <a href="about.html" class="text-x1 hover:text-cyan-500 duration-500">Tentang Kami</a>
            </li>

            <a class="bg-sky-500 text-white duration-500 px-6 py-2 mx-5 hover:bg-sky-600 rounded" href="gejala_form.html"><strong>Diagnosa</strong></a>
        </ul>
    `;
}