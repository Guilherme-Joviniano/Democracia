window.addEventListener('scroll', () => {
  const scrolled = window.scrollY;
  const scrollabe = document.documentElement.scrollHeight - window.innerHeight;
  console.log(scrolled)
  if(scrolled == 1024){
    var v = document.getElementById("animate1");
    v.className += "animation";
  }
});
function aparecer(){
  document.getElementById('main').style.display='block';
  window.scrollTo(0,900);
}