
// select-state-city
$(document).ready(function () {
    $("#state").on('change', function () {
        var stateID = $(this).val();
        $.ajax({
            method: "POST",
            url: "ajax_get_city_data.php",
            data: 'state_id=' + stateID,
            // data: {state_id:stateID},
            success: function (data) {
                $("#city").html(data);
            }
        });
    });
});

// insert
$(document).on("submit", "#teachar_form", function (e) {

    e.preventDefault();
    $.ajax({
        method: "POST",
        url: "ajax_form_insert.php",
        data: $(this).serialize(),
        success: function (data) {
            $("#msg").html(data),
                $("#teachar_form").find("input");
        }
    });
});

//display
$(document).ready(function () {
    $.ajax({
        url: "ajax_display_data.php",
        method: "POST",
        cache: false,
        success: function (data) {
            $("#table").html(data);
        }
    });
});

//select-state-city-update

$(document).ready(function () {
    $.ajax({
        url: "ajax_get_state_data.php",
        type: "POST",
        success: function (data) {
            $("#state_dropdown").append(data);
            $("#state_dropdown").find();
            jQuery("#state_id").val();
            var state_id = $("#state_id").val();
            $("#state_dropdown").val(state_id);
        }
    });
});

$(document).ready(function(){
    $.ajax({
        url: "ajax_get_city_data.php",
        type: "POST",
        success: function(data){
            $("#city_dropdown").append(data);
            $("#city_dropdown").find();
            jQuery("#city_id").val();
            var city_id = $("#city_id").val();
            $("#city_dropdown").val(city_id);
        }
    });
});

// $(document).ready(function(){
//     $("#state_dropdown").change(function(){
//         var stateID = $(this).val();
//         $.ajax({
//             method: "POST",
//             url: "ajax_get_city_data2.php",
//             data: 'state_id=' + stateID,
//             // data: {state_id:stateID},
//             success: function (data) {
//                 $("#city_dropdown").html(data);
//             }
//         });
//     })
// });