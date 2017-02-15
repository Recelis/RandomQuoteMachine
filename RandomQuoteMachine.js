$(document).ready(function() {
    var url = "http://quotes.rest/qod.json?category=inspire";
    $('#randQuote').click(function(){
        $.ajax({
            type: "GET",
            // dataType: "json",
            url: url,
        success: function(data){
            console.log(data);
            console.log(data["contents"].quotes[0].author);
        }
        });
        alert("Testing 1 2 3... please remove");
    });
});

