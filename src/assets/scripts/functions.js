$(function(){
    $('[data-toggle="tooltip"]').tooltip()
    // bind change event to select
    $('#select_ss').on('change', function () {
        var url = $(this).val(); // get selected value
        if (url) { // require a URL
            window.location = url; // redirect
        }
        return false;
    });

    $('input[type="radio"]').click(function(){
        var inputValue = $(this).attr("value");
        var targetBox = $("." + inputValue);
        $(".radioContainer").not(targetBox).hide();
        $(targetBox).show();
    });

  });