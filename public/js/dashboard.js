
const freeTrial = document.querySelector('#freeT');
const conTinue = document.querySelector('#continue');
freeTrial.addEventListener('click', ()=>{
    if(!conTinue.classList.contains('checked')){
        conTinue.classList.add('checked')

        var  continueButton = document.querySelector('.checked');
        
continueButton.addEventListener('click', (e)=>{
    e.preventDefault;
    document.querySelector('.prompt').style.display = "none";
});
    }
    else{
        conTinue.classList.remove('checked') 
    }
       
  
});


//handling menu
const menuButton = document.querySelector('.menu-icon');
const menuArea = document.querySelector('.menu-area');
menuButton.addEventListener('click', ()=>{
  menuArea.style.display = 'block';
})


