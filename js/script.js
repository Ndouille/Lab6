/**
 * Created by ndouille on 21/02/14.
 */

$(document).ready(function () {
    console.log("ready!");
    var username = $('#usernameInput').val();
    var password = $('#password').val();
    console.log(username);
    $('#salope').click(function(e){
        e.preventDefault();
        var username = $('#usernameInput').val();
        var password = $('#password').val();

        $.ajax({

            url: "http://localhost:5000/authorize",
            contentType:"application/json",
            dataType:"json",
            data:JSON.stringify({username:username,password: $.base64.btoa(password)}),
            type:"POST",
            success: function(msg){
                $.cookie('user_profile_cookie',msg.token,{path:'/'});
                console.log("ok");
            },
            error: function(XHTMLRequest, textStatus, errorThrown){

            }
        });
    });

});
