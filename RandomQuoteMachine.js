$(document).ready(function() {
    var url = "http://quotes.rest/qod.json?category=inspire";
    $('#randQuote').click(function(){
        $.ajax({
            type: "GET",
            // dataType: "json",
            url: url,
        success: function(data){
            console.log(data);
        }
        });
        alert("NOOOOOOOOOOO!");
    });
});

