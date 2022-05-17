
//SEARCH FORM 
let searchForm = document.querySelector('.search-form');
document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
}

//LOGIN FORM
    const loginForm = document.querySelector('.login-form-container');
    document.querySelector('#login-btn').onclick = () =>{
        loginForm.classList.toggle('active');
    }
    document.querySelector('#close-login-btn').onclick = () =>{
        loginForm.classList.remove('active');
    }

    window.onscroll = () =>{

        searchForm.classList.remove('active');
    
        if(window.scrollY > 80){
            document.querySelector('.header .header-2').classList.add('active');
        }else{
            document.querySelector('.header .header-2').classList.remove('active');
        }
    
    }

    window.onload = () =>{

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


    let swiper = new Swiper(".mySwiper", {
        slidesPerView: 3,
        spaceBetween: 30,
        freeMode: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });

