$(document).ready(function() {
    var url = "http://api.icndb.com/jokes/random?limitTo=[nerdy]"; 
    $('#randQuote').click(function(){
        $.ajax({
            type: "GET",
            // dataType: "json",
            url: url,
            success: function(data){
            console.log(data);
            console.log(data["value"].joke);
            // console.log(data["contents"].quotes[0].quote);
            // http://www.icndb.com/api/
        }
        });
        alert("Testing 1 2 3... please remove");
    });
});

