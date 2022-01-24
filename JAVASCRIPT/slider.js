// VAR's ///
var sliderContainer = document.querySelector('.ab-slider-container');
var sliderList = document.querySelector('.ab-slider-list');
var sliderItem = document.querySelectorAll('.ab-slider-item');
const sliderCounter = sliderItem.length ;
 var itemPrev = document.querySelector ('.item-prev');
 var itemNext =document.querySelector ('.item-next');
 var sliderListWidth = null ;
 var SliderPos = 0 ;
var currentSlider = document.querySelector ('.ab-current-slider');
var lastSlider = document.querySelector ('.ab-last-slider');
var currentCounter = 1 ;
var navItems = document.querySelectorAll('.ab-item-navigator a');
var navCounter = document.querySelector('.ab-item-counter span');


//Capturando larguras individuais
var containerWidth = sliderContainer.parentElement.offsetWidth;
 //DYNAMIC-COUNTER//
var dynamicFormater = function (n){
   if (n<10) {
    return '0' + n ;    
   } else {
     return n ;
   }     
}

// - larguras dinamicas - //
sliderContainer.style.width = containerWidth + 'px' ;

 for( var p = 0 ; p< sliderItem.length; p ++ ) {
   sliderItem[p].style.width = containerWidth + 'px' ;
 
   var sliderItemWidth = sliderItem[p].offsetWidth;

   sliderListWidth += sliderItemWidth ;
  sliderList.style.width = sliderListWidth + 'px' ;
 }
//CLICK's ANIME//
var itemNextAnim = function () {
 var lastItem = sliderListWidth - containerWidth ;
      if ( (-1*(SliderPos) === lastItem) ) {                          //transformando de negativo para positivo para comparação funcionar//
        return;
      }
      
      SliderPos -=  containerWidth ;
      
      anime({
      targets: sliderList ,
      translateX: SliderPos
    });
}
var itemPrevAnim = function (){
 if (SliderPos === 0 ) {                          //transformando de negativo para positivo para comparação funcionar//
        return;
      }
      
      SliderPos +=  containerWidth ;
      anime({
      targets: sliderList ,
      translateX: SliderPos
    });
  
}

 itemNext.addEventListener('click',function(){
     itemNextAnim ();
     counterAdd () ;
     changeActive();
 });
  itemPrev.addEventListener('click',function(){
     itemPrevAnim();
     counterRemove();
     changeActive();
 });
 //COUNTER ADD// REMOVE //
 var counterAdd = function () {
   if ( (currentCounter >= 0) && ( currentCounter < sliderCounter) ){
            currentCounter ++ ;  
           currentSlider.innerHTML = dynamicFormater(currentCounter) ;
           navCounter.innerHTML = dynamicFormater(currentCounter);
   }}

    var counterRemove = function () {
   if ( (currentCounter >1) && ( currentCounter <= sliderCounter) ){
            currentCounter -- ;  
           currentSlider.innerHTML = dynamicFormater(currentCounter) ;
           navCounter.innerHTML = dynamicFormater(currentCounter);
   }}
    lastSlider.innerHTML = dynamicFormater(sliderCounter);
    // SET-ACTIVE-NAV //
  
    
    var setActiveNav = function() {
      for (var nv=0 ; nv < navItems.length ; nv ++) {
        let myNavNum = parseInt( navItems[nv].getAttribute('data-nav') ); 
                                  // *ParseInt convertendo 'S' em Num//
        
        if (myNavNum === currentCounter) {
         navItems[nv].classList.add('.ab-item-active');
          anime ({
          targets:navItems[nv] ,
          width: 90
    });
        }
      }
    } 
              anime ({
          targets: '.ab-item-active',
          width: 90
    });

    var changeActive = function (){
      for (var rm = 0 ; rm <navItems.length; rm ++) {
       navItems[rm].classList.remove('.ab-item-active');
                     anime ({
          targets: navItems[rm],
          width: 20
    });
      }
      setActiveNav();
    }

  

