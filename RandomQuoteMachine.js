var prevColor = 8;
var quote = "";
var twitterQuote = "";
var url = "https://api.chucknorris.io/jokes/random";


$(document).ready(function() {
    apiCall(); 
    $('#new-quote').click(function(){
        $("body").css("background-image","url(./images/chucknorrisdark.png)");
        apiCall();
    });
});

function apiCall(){
    $.ajax({
        type: "GET",
        url: url,
        success: function(data){
            $("body").css("background-image","url(./images/chucknorriswhitebackground.jpg)")
            quote = data["value"];
            $("#text").html("\""+ data["value"]+"\"");
            $("#author").html("-" + data["id"] + ": the Man's Mortal Voice");
            if (quote.length >= 131){
                twitterQuote =  "\"" + quote.substring(0,126) + "...\" -the Man";
            } else{
                twitterQuote =  "\"" + quote.substring(0,131) + "\" -the Man";
            }
            $("#tweet-quote").attr("href", "https://twitter.com/intent/tweet?text="+twitterQuote);
    }
    });
}



