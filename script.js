function toggleImage(id) {
  const img = document.getElementById(id);
  img.style.display = img.style.display === 'block' ? 'none' : 'block';
}

function showCert(id) {
  document.querySelectorAll('.cert-image').forEach((img) => {
    img.style.display = 'none';
  });
  document.getElementById(id).style.display = 'block';
}

const header=document.querySelector('.header')
window.addEventListener('scroll',()=>{
  if(window.scrollY>20){
    header.classList.add('scrolled')
  }else{
    header.classList.remove('scrolled')
  }
})