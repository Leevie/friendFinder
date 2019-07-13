
// Button Click
$("#submit").on("click", function(event) {
    event.preventDefault();
    var answerData = {
        name: $("#name").val(),
        pic: $("#friendpic").val(),
        scores: [
            $("#quest1").val(),
            $("#quest2").val(),
            $("#quest3").val(),
            $("#quest4").val(),
            $("#quest5").val(),
            $("#quest6").val(),
            $("#quest7").val(),
            $("#quest8").val(),
            $("#quest9").val(),
            $("#quest10").val()
        ]
    };
    
    console.log(answerData);


    // Clear out Fields
    $("#name").val(""),
    $("#friendpic").val(""),
    $("#quest1").val(""),
    $("#quest2").val(""),
    $("#quest3").val(""),
    $("#quest4").val(""),
    $("#quest5").val(""),
    $("#quest6").val(""),
    $("#quest7").val(""),
    $("#quest8").val(""),
    $("#quest9").val(""),
    $("#quest10").val("")

    console.log("before modal");

    $.post("/api/friends", answerData, function(data) {
        $("#friend-name").text(data.name);
        $("#friendimg").attr("src", data.pic)
        console.log("Got here!")
        $("#ffinder-modal").modal("toggle");
    })
    



})

