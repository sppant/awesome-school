$(document).ready(function () {
  $(".option").on("click", function () {
    // Remove active class from all options
    $(".option").removeClass("active");
    // Add active class to the clicked option
    $(this).addClass("active");

    // Hide all forms
    $("form").removeClass("active").hide();
    // Show the form associated with the clicked option
    var targetForm = $(this).data("target");
    $(targetForm).addClass("active").show();
  });

  $("#burger").click(function () {
    $("#menuOptions").toggleClass("active");
  });

  $(".n-link").click(function () {
    $("#menuOptions").removeClass("active");
  });

  $(document).click(function (event) {
    var target = $(event.target);
    if (
      !target.closest("#burger").length &&
      !target.closest("#menuOptions").length
    ) {
      if ($("#menuOptions").hasClass("active")) {
        $("#menuOptions").removeClass("active");
      }
    }
  });
});
