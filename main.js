const menu = document.getElementById('menu')
const active = document.getElementById('active')
const remove = document.getElementById('remove')
const img1 = document.getElementById('profile1')

menu.addEventListener('click',function(){
    active.style.display = 'flex'
})
remove.addEventListener('click',function(){
    active.style.display = 'none'
})
