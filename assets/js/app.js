var firebaseConfig = {
    apiKey: "AIzaSyC2Ge6Bkxgh7O7UlWr4g_sHcrCRsYKo3yo",
    authDomain: "expert-signals-website.firebaseapp.com",
    projectId: "expert-signals-website",
    storageBucket: "expert-signals-website.appspot.com",
    messagingSenderId: "475756382920",
    appId: "1:475756382920:web:32c8c011cc0a744621b3fd",
    measurementId: "G-91GNBL8VXW"
  };

  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

//Jquery web animations

$(document).ready(function(){
    $("#sticker").sticky({topSpacing:0, center:true, widthFromWrapper:true, zIndex:24});
    $('#sticker').on('sticky-start', ()=>{
        $('#sticker').css({'background':'rgb(17, 7, 46)', "padding":"5px auto"});
        $('#sticker .logo h3 span:nth-child(2)').css('color','white','');
        $('#sticker .menu-bar i').css('color', "white")
    })
    $('#sticker').on('sticky-end', ()=>{
        $('#sticker .menu-bar i').css('color', "")
        $('#sticker').css('background','transparent');
        $('#sticker .logo h3 span:nth-child(2)').css('color','whitesmoke')
    })
     
    $('.menu-bar').click(()=>{
       document.querySelector('.menu').classList.toggle('hide');
       $('body').toggleClass('hide')

        if(document.querySelector('.menu-bar i').className === 'ri-menu-line'){
            document.querySelector('.menu-bar i').className = 'ri-close-line';
            document.querySelector('.menu-bar i').style.color="white";
        }
        else{
           document.querySelector('.menu-bar i').className ="ri-menu-line";
           document.querySelector('.menu-bar i').style.color='white';
        }
    })

  });


