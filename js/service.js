/*-- function scrollAppear() {
    var serviceText =document.querySelector('.service');
    var introPosition = serviceText.getBoundingClientRect().top;
    var screenPosition = window.innerHeight ;



    if( introPosition < screenPosition){
        serviceText.classList.add('service-appear');
    }
}

window.addEventListener(scroll,scrollAppear);



function scrollAppear() {
    var designText =document.querySelector('.design');
    var introPosition = designText.getBoundingClientRect().top;
    var screenPosition = window.innerHeight;



    if( introPosition < screenPosition){
        designText.classList.add('design-appear');
    }
}

window.addEventListener(scroll,scrollAppear); --*/



//form
var myInput =  document.getElementById('mad')

myInput.onfocus=function () {

    'use strict';

    //store placeholder Attribute in Backup Attribute 

    this.setAttribute('data-place', this.getAttribute('placeholder'));

    //Empty placeholder Attribute

    this.setAttribute('placeholder','');

};

myInput.onblur = function () {

    'use strict';

    //get placeholder Attribute from  Backup Attribute

    this.setAttribute('placeholder', this.getAttribute('data-place'));

    //Empty Backup Attribute

    this.setAttribute('data-place','');

};