var prevColor = 8;
var quote = "";
 var twitterQuote = "";

$(document).ready(function() {
    var url = "http://api.icndb.com/jokes/random?limitTo=[nerdy]";
    var colorJSON = {
        "red": "#FF0000",
        "blue": "#0000FF",
        "green": "#008000",
        "yellow": "#bebe08",
        "purple": "#800080",
        "magenta": "#ff00ff",
        "cyan": "#05c9c9",
        "pink": "#d4909c",
        "black": "#000000",
    };
     $.ajax({
            type: "GET",
            // dataType: "json",
            url: url,
            success: function(data){
            console.log(data);
            console.log(data["value"].joke);
            quote = data["value"].joke;
            $(".quote").html("\""+ data["value"].joke+"\""); // can affect text in html, here emphasis
            // console.log(data["contents"].quotes[0].quote);
            // http://www.icndb.com/api/
            if (quote.length >= 131){
                twitterQuote =  "\"" + quote.substring(0,126) + "...\" -the Man";
            } else{
                twitterQuote =  "\"" + quote.substring(0,131) + "\" -the Man";
            }
            $("a").attr("href", "https://twitter.com/intent/tweet?text="+twitterQuote);
            console.log("the NEW " + twitterQuote);
        }
        });
    
    $('#randQuote').click(function(){
        $.ajax({
            type: "GET",
            // dataType: "json",
            url: url,
            success: function(data){
            console.log(data);
            console.log(data["value"].joke);
            $("#box").hide().fadeIn(800);
            $(".title").hide().fadeIn(800);
            quote = data["value"].joke;
            $(".quote").html("\""+ data["value"].joke+"\""); // can affect text in html, here emphasis
            if (quote.length >= 131){
                twitterQuote =  "\"" + quote.substring(0,126) + "...\" -the Man";
            } else{
                twitterQuote =  "\"" + quote.substring(0,131) + "\" -the Man";
            }
            // $(".tweet").html(twitterQuote);
            $("a").attr("href", "https://twitter.com/intent/tweet?text="+twitterQuote);
            var size = Object.keys(colorJSON).length;
            var randomColorIndex = prevColor;
            while (randomColorIndex == prevColor){
                randomColorIndex = Math.floor(Math.random() * size);
                console.log("try again");
            }
            prevColor = randomColorIndex;
            var colorKeysArr = Object.keys(colorJSON); // get colors in Array from colorJSON
            $("#box").css("background-color", colorJSON[colorKeysArr[randomColorIndex]]);
            $(".title").css("color", colorJSON[colorKeysArr[randomColorIndex]]);
            console.log("the index is " + randomColorIndex + " color is " + colorKeysArr[randomColorIndex]);
            // http://www.icndb.com/api/
            }
        });
        // alert("Testing 1 2 3... please remove");
    });
    
});



