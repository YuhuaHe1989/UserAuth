'use strict';

$(document).ready(init);

function init(){
  var id = document.cookie.split(' ')[1].slice(7);
  
  var username = $('#username').text();
  var email = $('#email').text();
  
  var update = {};
  update.username = username;
  update.email = email;
  update._id = id;

  $.ajax({
    type: 'POST',
    url: '/profile',
    data: update,
    success: function(data){
      $('#username').text(data.username);
      $('#email').text(data.email);
    }
  })
  
}






