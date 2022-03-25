$(document).ready(function() {
    console.log("This is also the first Jquery Code");

    $("#btn1").click(function () {
        //btn click
        console.log("Btn clicked");
       // $("#container").hide();
       $("#container").fadeOut(2000,function () {
           alert("Gone...")
       });
    })
    $("#btn2").click(function () {
        //btn click
        console.log("Btn clicked");
        //$("#container").show();
        $("#container").fadeIn();
    })
    $("#btn3").click(function () {
        $("#container").fadeToggle();
    })
    $("#btn4").click(function () {
        $("#container").fadeTo(250,0.5);
    })
    //------------------------------------------
    //SlideDown SlideUp SlideToggle
    $("btn5").click(function(){
        $('#container').slideDown();
    })
    $('#btn6').click(function(){
        $('#container').slideUp(3000,function () {
            alert("Done..")
        });
    })
    $('#btn7').click(function() {
        $('#container').slideToggle();
    })
    //--------------------------------------------------------
    //animate
    $('#btn8').click(function(){
        $('#container').animate({width:"400",height:"400",opacity:"0.5"},2000,function(){
            $('#container').animate({borderRadius:"50",width:"200",height:"200",opacity:"1"},2000)
        })
    })

    //DOM manipulation
    $("#btn9").click(function(){
        //Set Value 
        //$('#f').val("Value Setted");
        //Get Vlaue
        let v=$("#f").val();
        console.log("Value is "+v);
        //Text(), html(), attr() functions 
    })
})
     

//Jquery Effects