//How do I get my form to submit data without an ajax request on my button.
//How do I get to use a submit option instead of a click option

$(document).ready(function() {

  $.ajax({
    url: 'https://bb-election-api.herokuapp.com/',
    method: 'GET',
    dataType: 'JSON'
  }).done(function(data){

    $.each(data.candidates, function(){

      var candidateInfo = this.name +": " + this.votes
      var li = $('<li class="list-item">')
      var form = $('<form>', {
                     url: 'https://bb-election-api.herokuapp.com/vote',
                     method: 'POST',
                     data: { "name" : this.name }
                  })
      var button = $('<input>', {
                    value: "Vote for: " + this.name,
                    type: "button",
                    class: "vote-button",
                    name: this.name
                 })

      $('#candidate-list').append(li);
      li.append(candidateInfo);
      form.append(button);
      li.append(form);
    });

    $('.vote-button').on('click', function(){
       $.ajax({
         url: 'https://bb-election-api.herokuapp.com/vote',
         method: 'POST',
         data: { "name" : this.name }
       }).done(function(){
        //  location.reload();
        $(".vote-button").remove();
      });
    });
  });
    // $('#update').on('click', function(){
    //   location.reload();
    //   });

    $('#update').on('click', function(){
      $.ajax({
        url: 'https://bb-election-api.herokuapp.com/',
        method: 'GET',
        dataType: 'JSON'
      }).done(function(data){
        $('.list-item').remove()
        $.each(data.candidates, function(){
          var candidateInfo = this.name +": " + this.votes
          var li = $('<li class="list-item">')
          var form = $('<form>', {
                         url: 'https://bb-election-api.herokuapp.com/vote',
                         method: 'POST',
                         data: { "name" : this.name }
                      })
          var button = $('<input>', {
                        value: "Vote for: " + this.name,
                        type: "button",
                        class: "vote-button",
                        name: this.name
                     })


          $('#candidate-list').append(li);
          li.append(candidateInfo);
          // form.append(button);
          li.append(form);
        });

        $('.vote-button').on('click', function(){
           $.ajax({
             url: 'https://bb-election-api.herokuapp.com/vote',
             method: 'POST',
             data: { "name" : this.name }
          }).done(function(){
            //  location.reload();
          });
        });
      });
    });
});
