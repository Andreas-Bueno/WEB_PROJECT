//VAR
var btnContact = document.querySelector(".ab-btn-contact");
var toggleModal=document.querySelectorAll('.ab-toggle-modal');
var btnContact = document.querySelector('.ab-btn-contact');
btnContact.addEventListener ( 'click' , function() {
var boxContact = document.querySelector('.ab-btn-contactinfo');
boxContact.classList.toggle("ab-is-open");
this.classList.toggle('ab-change-icon');
});

    //openModal orçamento
    
    for(var  i = 0 ; i < toggleModal.length; i++) {
    toggleModal [i].addEventListener('click' , function () {
    var overlay = document.querySelector('.ab-overlay');
    var modal = document.querySelector('#modal-js');
    
    overlay.classList.toggle('ab-is-open');
    modal.classList.toggle('ab-is-open');
    modal.classList.toggle('modal-box-move');
     })
  } 
  // ANIMANDO ELEMENTO SCROLL WITH WAYPOINTS
var MyScrollDown = document.querySelector('.ab-scroll-down');
var waypoint = new Waypoint({
                element: MyScrollDown ,
                handler: function() {
    MyScrollDown.classList.toggle('ab-fade-out');
  },
  offset: '80%' 
});