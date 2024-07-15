// let signupbtn = document.querySelector(".signupbtn");
// let signipbtn = document.querySelector(".signinbtn");
// let namefield = document.querySelector(".namefield");
// let title = document.querySelector(".title");
// let underline = document.querySelector(".underline");



// signinbtn.addEventListener('click', ()=>{
//     nameField.style.maxHeight ='0';
// });


let signUpBtn = document.querySelector('.signupbtn');
let signInBtn = document.querySelector('.signinbtn');
let nameField = document.querySelector('.namefield');
let title = document.querySelector('.title');
let underline = document.querySelector('.underline');
let text =document.querySelector('.text');

signInBtn.addEventListener('click',()=>{
nameField.style.maxHeight = '0';
title.innerHTML = 'Sign In';
text.innerHTML = 'Forgot Password';
signUpBtn.classList.add('disable');
signInBtn.classList.remove('disable');
underline.style.transform = 'translateX(35px)';
});


signUpBtn.addEventListener('click',()=>{
nameField.style.maxHeight = '60px';
title.innerHTML = 'Sign Up';
text.innerHTML = 'Password Suggestions';
signUpBtn.classList.remove('disable');
signInBtn.classList.add('disable');
underline.style.transform = 'translateX(-35px)';
});

