/**
 * Created by ndouille on 14/03/14.
 */
$(document).ready(function () {
    console.log("ready!");
    var cookie = $.cookie('user_profile_cookie');
    $.ajax({

        url: "http://localhost:5000/userprofile",
        contentType:"application/json",
        dataType:"json",
        data:JSON.stringify({token:cookie}),
        type:"POST",
        success: function(msg){
            console.log (msg);
        },
        error: function(XHTMLRequest, textStatus,errorThrown){

        }


    } );

});