
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