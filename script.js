$(function() {
   
    $('.question-list-item').click(function() {
        var $active = $(this).find(".question-answer");
        if($active.hasClass("question-active")) {
            $active.removeClass("question-active");
            $active.slideUp();
        }else {
            $active.addClass("question-active");
            $active.slideDown();
        }
        
       
    });  

    $
});
