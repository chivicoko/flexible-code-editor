// alert("his good");

// $("#htmlToggle").hover(function(){
//     $("#htmlToggle").css("background-color", "red");
// });


$("#htmlToggle").click(function(){
    if($("#htmlArea").css("display", "none")){
        $("#htmlArea").css("display", "block");
    }else{
        $("#htmlArea").css("display", "none");
    }
});


$("#cssToggle").click(function(){
    if($("#cssArea").css("display", "block")){
        $("#cssArea").css("display", "none");
    }
});


$("#jsToggle").click(function(){
    if($("#jsArea").css("display", "block")){
        $("#jsArea").css("display", "none");
    }
});


$("#outputToggle").click(function(){
    if($("#outputArea").css("display", "block")){
        $("#outputArea").css("display", "none");
    }
});




// // toggle buttons' hover effect (in place of css hover effect, if need be)

// $(".toggleBtn").hover(function(){
//     $(this).css("background-color", "grey");
// }, function(){
//     $(this).css("background", "lightgrey");
// });

// // a better way
$(".toggleBtn").hover(function(){
    $(this).addClass("highLightedBtn");
}, function(){
    $(this).removeClass("highLightedBtn");
});
// // ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;


// for toggling the active class
$(".toggleBtn").click(function(){
    $(this).toggleClass("active");
    $(this).removeClass("highLightedBtn");

    var areaId = $(this).attr("id") + "Area";
    $("#" + areaId).toggleClass("hidden");
    // better still (instead of the above)
    // $("#" + areaId).toggle();        // the jquery function, toggle() displays or hides an element
    var unhiddenAreas = $(".area").length - $(".hidden").length;   // no. of elements with class 'area' minus the number of elements currently with the class 'hidden'
    $(".area").width(($(window).width() / unhiddenAreas) - 3);
});
// ;;;;;;;;;;;;;;;;;



// textarea height and width
$(".area").height($(window).height() - $("nav").height() - 7);
$(".area").width(($(window).width() / 2) - 3);


function outputUpdate(){
    $("iframe").contents().find("html").html(
        "<html><head><style type='text/css'>"
        + $("#cssArea").val()             // css code gotten from the cssArea(the textarea), and processed to live code
        + "</style></head><body>"
        + $("#htmlArea").val()
        // + "<script type='text/javascript'>"
        // + $("#jsArea").val()
        // + "</script>"
        + "</body></html>"
    );       // get the content of the textarea(processed as code or as is) into the iframe(output)
    document.getElementById("outputArea").contentWindow.eval($("#jsArea").val());   // js code gotten from the jsArea(the textarea), and processed to live code
}


outputUpdate();


// displaying html in the iframe
$("textarea").on("change keyup paste", function(){                 // on change/keyup/paste event, perform the function
    outputUpdate();
});


/*
NB:
iframe doesn't take on the styles that has been set by you. it's good so that the user of the app(the editor) can use it also to then set their
own styles whichever way they want
*/
