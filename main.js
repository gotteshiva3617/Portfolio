console.log('connected');
const btn= document.querySelector('.btn');
const show = document.querySelector('.show')
const modal = document.querySelector('.modal')
const cross = document.querySelector('.cross')

btn.addEventListener('click', function(){
    console.log('clicked');
    modal.classList.remove('show')
})
cross.addEventListener('click', function(){
    console.log('connected');
    modal.classList.add('show');
})