'use strict';

$(document).ready(init);

function init(){
    $('#saveChange').on('click',saveChange);
    $('#cancel').on('click',cancel);
}

function cancel(){
  window.location.replace('/profile');
}

function saveChange(){

    var edit = {};
    var name = $('#name').val();
    var email = $('#email').val();
    var id = document.cookie.split(' ')[2].slice(7);
    
    edit.username = name;
    edit.email = email;
    edit._id = id;

    $.ajax({
        type: 'PUT',
        url: '/profile',
        data: edit,
        success: function(data){
            console.log(data);

        }
    })

}






