$(function () {
    $(".show-toolbar").click(function () {
        $(".show-toolbar").hide();
        $("#other-sites").css({
            top: -$("#other-sites").outerHeight()
        }).show().animate({
            top: "40px"
        });
    });

    $("#other-sites .hide").live("click", function () {
        $("#other-sites").animate({
            top: -$("#other-sites").outerHeight()
        }, function () {
            $(".show-toolbar").show();
        });
    });

    $("#theme-selector").val(SOChrome.getOption('theme'))
        .change(function () {
            SOChrome.setOption('theme', $(this).val());
            SOChrome.setTheme($(this).val());
        });
});