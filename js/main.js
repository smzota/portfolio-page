$(document).ready(()=>{
    $('.header').height($(window).height())
})
$(".navbar a").click(()=>{
    $("body,html").animate({
        scrollTop:$("#"+$(this).data('data-value')).offset().top
    }, 1000)
})