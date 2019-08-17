window.addEventListener('scroll', function() {

  if(pageYOffset > 80)
  {
    document.getElementById('hide').hidden =true;
    document.getElementById('right').style.margin = "25px -250px 0px 0px";
    document.getElementById('left').style.margin = "10px -20px 5px -25px";
    document.getElementById('left').style.width = "20%";
    document.getElementById('name').style.margin = "0px 0px 5px 0px";
    document.getElementById('left').style.fontSize = "26px";
    document.getElementById('right').style.fontSize = "16px";
    document.getElementById('right').style.width = "75%";
    document.getElementById('right').style.float = "right";
    document.getElementById('border').style.height = "60px";
    document.getElementById('right').style.padding = "5px 0px 0px 0px";


  } else {
    document.getElementById('hide').hidden = false;
    document.getElementById('right').style.margin = "0px 0px 0px 0px";
    document.getElementById('left').style.margin = "0px 0px 0px 0px";
    document.getElementById('left').style.width = "100%";
    document.getElementById('left').style.fontSize = "32px";
    document.getElementById('right').style.width = "100%";
    document.getElementById('border').style.height = "120px";
    document.getElementById('right').style.fontSize = "22px";
    document.getElementById('name').style.margin = "40px 1% 10px 0px";
    document.getElementById('right').style.padding = "0px";

  }
});
