//opening and closing the menu bar

window.onscroll = ()=> {
    var scrollCalculate = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (scrollCalculate / height) * 100;
    document.querySelector(".progress-bar").style.width = scrolled + "%";
}

$(document).ready(function(){

    $('.menu-bar i').click(()=>{
        $('.menu').slideToggle();
    });
  
  });


