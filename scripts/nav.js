window.addEventListener('scroll', function() {

  if(pageYOffset > 80)
  {
    document.getElementById('hide').hidden =true;
    document.getElementById('right').style.justifyContent = "flex-end";
    document.getElementById('right').style.fontSize = "16px";
    document.getElementById('list').style.width = "30%";
    document.getElementById('left').style.width = "20%";
    document.getElementById('left').style.justifyContent = "flex-start";
    document.getElementById('left').style.fontSize = "26px";
    document.getElementById('border').style.height = "3.5rem";



  } else {
    document.getElementById('hide').hidden = false;
    document.getElementById('right').style.justifyContent = "center";
    document.getElementById('right').style.fontSize = "22px";
    document.getElementById('list').style.width = "50%";
    document.getElementById('left').style.width = "100%";
    document.getElementById('left').style.fontSize = "32px";
    document.getElementById('border').style.height = "7.5rem";
  }
});
