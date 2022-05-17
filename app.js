
//SEARCH FORM 
let searchForm = document.querySelector('.search-form');
document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
}

//LOGIN FORM
    let loginForm = document.querySelector('.login-form-container');
    document.querySelector('#login-btn').onclick = () =>{
        loginForm.classList.toggle('ative');
    }
    document.querySelector('#close-login-btn').onclick = () =>{
        loginForm.classList.remove('.active');
    }



    let swiper = new Swiper(".mySwiper", {
        slidesPerView: 3,
        spaceBetween: 30,
        freeMode: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });
    indow.onload = () =>{

        if(window.scrollY > 80){
            document.querySelector('.header .header-2').classList.add('active');
        }else{
            document.querySelector('.header .header-2').classList.remove('active');
        }
        
        fadeOut();
        
    }

        function loader(){
            document.querySelector('.loader-container').classList.add('active');
        }
        
        function fadeOut(){
        setTimeout(loader, 4000);
    }
