window.onscroll = ()=> {
    var scrollCalculate = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (scrollCalculate / height) * 100;
    document.querySelector(".progress-bar").style.width = scrolled + "%";
}


$(document).ready(function(){
    $("#sticker").sticky({topSpacing:0, center:true});
    $('#sticker').on('sticky-start', ()=>{
        $('#sticker').css({'background':'white', "padding":"5px auto"});
        $('#sticker .logo h3 span:nth-child(2)').css('color','#8624c3','')
    })
    $('#sticker').on('sticky-end', ()=>{
        $('#sticker').css('background','transparent');
        $('#sticker .logo h3 span:nth-child(2)').css('color','whitesmoke')
    })
     
    $('.menu-bar').click(()=>{
        $('.menu').slideToggle();

        if(document.querySelector('.menu-bar i').className === 'ri-menu-line'){
            document.querySelector('.menu-bar i').className = 'ri-close-line';
        }
        else{
           document.querySelector('.menu-bar i').className ="ri-menu-line";
        }
    })

    $('#readmebtn').click(()=>{
         $('.read_more').slideToggle();
    })
  });


