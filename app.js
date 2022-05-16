
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