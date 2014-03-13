/**
 * Created by ndouille on 21/02/14.
 */

$(document).ready(function () {
    console.log("ready!");
    function loginuser(){
        $(".addbutton").click(function(){
                $.ajax({
                    url: "http://localhost:5000/authorize",
                    contentType:"application/json",
                    dataType:"json",
                    data:JSON.stringify({task : $('.newtaskfield').val()}),
                    type:"POST"
                }).done(function(data) {


                    });}

        );

    }
    addtask();
});