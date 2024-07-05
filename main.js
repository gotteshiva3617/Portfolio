const menu = document.getElementById('menu')
const active = document.getElementById('active')
const remove = document.getElementById('remove')

menu.addEventListener('click',function(){
    active.style.display = 'flex';
})
remove.addEventListener('click',function(){
    active.style.display = 'none';
})
active.addEventListener('click',function(){
    active.style.display = 'none';
})