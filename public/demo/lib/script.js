// Code goes here


$(document).ready(function() {
  $(".login-button").click(function() {
    // alert("fsf");

    var user = {
      "user": $("#name").val(),
      "password": $("#password").val()
    };

    var request = $.ajax({
      type: "POST",
      url: "/login",
      data: user,
      'Content-Type': 'application/x-www-form-urlencoded',
    });
	
	request.done(function( msg ) {
		loginSuccess();
		$("#tabContainer").show();
		$(".main-login").hide();
	});
	
	request.fail(function( jqXHR, textStatus ) {
		$(".main-login").show();
		$("#messageError").show();
	});

  });
  $("#logout").click(function() {

    $.ajax({
      type: "GET",
      url: "/logout",
      success: function(data) {
        location.reload(true);
      },

    });

  });

  $("#message_submit").click(function() {

    $("#messageError").hide();
    if (!($("#message").val() && $("#phone_number").val())) {
      $("#messageError").show();
      return;
    }

    var message = {
      "phone": $("#phone_number").val(),
      "message": $("#message").val()
    };
    $.ajax({
      type: "POST",
      url: "/write",
      data: message,
      'Content-Type': 'application/x-www-form-urlencoded',
      success: function(data) {
        $("#profileTbody").empty();
        for (var id in data) {
          var element = '<tr><td>' + data[id].user + '</td><td>' + data[id].phone + '</td><td>' + data[id].message + '</td></tr>';

          $("#profileTbody").append(element);
        }
      },

    });

  });


  $("#stateSort,#Limt,#Offset").keyup(function() {
    $("#maxlimit").hide();
    if ($('#Limt').val() > 10) {
      $("#maxlimit").show();
      $('#Limt').val(10);
    }
    loginSuccess();
  });
  $("#stateSort").change(function() {
    loginSuccess();
  });

  function loginSuccess() {
    $("#stateForm")[0].reset();
    $("#homeUl").empty();

    var data = {
      "sort": $('#stateSort option:selected').val(),
      "offset": $('#Offset').val(),
      "limit": $('#Limt').val()
    };
    $.ajax({
      type: "GET",
      url: "/states",
      data: data,
      'Content-Type': 'application/x-www-form-urlencoded',
      success: function(data) {
        for (var id in data) {
          var element = ' <li class="list-group-item"  data-abb=' + data[id].abbreviation + '>' + data[id].name + '</li>';
          $("#homeUl").append(element);
        }
        if (data[0])
          $("#homeUl li")[0].click();
      },

    });

  }
  $('#homeUl').on('click', 'li', function() {
    $("#homeUl li").removeClass('active');
    var abb = $(this).attr("data-abb");
    $(this).addClass('active');
    $.ajax({
      type: "GET",
      url: "/states/" + abb,
      'Content-Type': 'application/x-www-form-urlencoded',
      success: function(data) {
        $("#stname").val(data.name);
        $("#capital").val(data.capital);
        $("#abbreviation").val(data.abbreviation);
        $("#dst").val(data.dst);
        $("#most-populous-city").val(data["most-populous-city"]);
        $("#population").val(data.population);
        $("#square-miles").val(data["square-miles"]);
        $("#time-zone-1").val(data["time-zone-1"]);
        $("#time-zone-2").val(data["time-zone-2"]);
      },
    });
  });
  $("#homeTab").click(function() {

    $("#homeContainer").show();
    $("#profileContainer").hide();
    $("#homeTab").parent().addClass("active");
    $("#profileTab").parent().removeClass("active");
    loginSuccess();
  });

  $("#profileTab").click(function() {
    $("#profileTab").parent().addClass("active");
    $("#homeTab").parent().removeClass("active");
    $("#homeContainer").hide();
    $("#profileContainer").show();

    readSuccess();

  });
});

function readSuccess() {
  $("#profileTbody").empty();
  $.ajax({
    type: "GET",
    url: "/read",
    'Content-Type': 'application/x-www-form-urlencoded',
    success: function(data) {
      for (var id in data) {
        var element = '<tr><td>' + data[id].user + '</td><td>' + data[id].phone + '</td><td>' + data[id].message + '</td></tr>';

        $("#profileTbody").append(element);
      }
    },
  });

}