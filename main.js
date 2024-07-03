const menu = document.getElementById('menu')
const active = document.getElementById('active')
const remove = document.getElementById('remove')
const img1 = document.getElementById('profile1')
const removeImg = document.getElementById('remove-img')
const imageViewer = document.getElementById('image-viewer')


menu.addEventListener('click',function(){
    active.style.display = 'flex'
})
remove.addEventListener('click',function(){
    active.style.display = 'none'
})

img1.addEventListener('click',function(){
    imageViewer.style.display = 'flex'
})

removeImg.addEventListener('click',function(){
    imageViewer.style.display = 'none';
})