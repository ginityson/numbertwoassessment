$(document).ready(function () {
    var array = [];

    getAnimals();

  //event listeners
  $('#census').on('submit', function (event) {
event.preventDefault();
});
// clear out inputs
  $('#census').find('input[type=text]').val('');

  function getAnimals(){
    $.ajax({
      type: 'GET',
      url: '/zoo',
      success: function (zoo) {
        appendDom(zoo);

      }
    });
  }
  function appendDom(census) {
      $('#corral').append('<div class="animal"></div>');
      var $el = $('#corral').children().last();

      $el.append('<p>' + 'Animal Type: ' + census[0].animal_type + '</p>');
      $el.append('<p>' + 'Last Name: ' + census[0].animal_inventory + '</p>');
      $el.append('<p>' + 'ID Number: ' + census[0].animal_id + '</p>');

      $el.append('<button class="removeAnimal" data-id="' + (array.length-1) + '">Remove</button');
    }
});
