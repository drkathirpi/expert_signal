
$(document).ready(function(){
    $("#sticker").sticky({topSpacing:0, center:true, widthFromWrapper:true, zIndex:24});
    $('#sticker').on('sticky-start', ()=>{
        $('#sticker').css({'background':'white', "padding":"5px auto"});
        $('#sticker .logo h3 span:nth-child(2)').css('color','purple','');
        $('#sticker .menu-bar i').css('color', "black")
    })
    $('#sticker').on('sticky-end', ()=>{
        $('#sticker .menu-bar i').css('color', "")
        $('#sticker').css('background','transparent');
        $('#sticker .logo h3 span:nth-child(2)').css('color','whitesmoke')
    })
     
    $('.menu-bar').click(()=>{
       document.querySelector('.menu').classList.toggle('hide');

        if(document.querySelector('.menu-bar i').className === 'ri-menu-line'){
            document.querySelector('.menu-bar i').className = 'ri-close-line';
            document.querySelector('.menu-bar i').style.color="black";
        }
        else{
           document.querySelector('.menu-bar i').className ="ri-menu-line";
           document.querySelector('.menu-bar i').style.color='white';
        }
    })

    $('#readmebtn').click(()=>{
         $('.read_more').slideToggle('slow');
    })
  });


