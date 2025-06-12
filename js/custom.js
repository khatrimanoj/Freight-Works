 // tabs
 jQuery('#business-form #tab-freight').click(function () {

     jQuery('#business-form').fadeToggle();
     jQuery(".form-background").animate({
            marginLeft: '500px'
        },
         "fast",
         function () {
             jQuery('#freight-form').toggle();
         });
 });

 jQuery('#freight-form #tab-business').click(function () {

     jQuery('#freight-form ').fadeToggle();
     jQuery(".form-background").animate({
             marginLef: '-500px'
         },
         "fast",
         function () {
             jQuery('#business-form').toggle();
         });
 });


 /**********left menu***********/
 $(document).ready(function () {
     $(".menu-btn").click(function (event) {
         event.preventDefault();
         $(".left-panel").toggleClass("menushow");
         $(".main-content").toggleClass("large-content");

     });
 });
