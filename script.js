//https://www.mediawiki.org/wiki/API:Main_page


//};
$(document).ready(function(){
  $('#recherche').click(function(){
   var searchTerm = $('#userInput').val();
   
    document.getElementById('userInput').onkeydown =   function(e){
    if(e.keyCode == 13){
    } 
    }
var wikiURL = "https://en.wikipedia.org/w/api.php?action=opensearch&search="+ searchTerm +"&format=json&callback=?";

$.ajax({
  type:"GET",
  url:wikiURL,
    async:false, //try success without
  dataType: "json",
   success: function(data){
     $('#fluke').html('')
     for (var i=0; i < data[1].length ; i++){
       var tutle = data[1][i];
       var lunk = data[3][i];
       var tuxt = data[2][i];
       var contint = "<h2>" + tutle + "<a href='" + lunk + "' target= '_blank'>" + "</h1><p2>" + tuxt + "</p>";  
       $('#fluke').append(contint)
     };
  },
  error: function(errorMessage){
    alert("No can do!")
  }

});
  });
  
 });

