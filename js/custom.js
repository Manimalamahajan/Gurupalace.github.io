






$(document).ready(function() {
$(".coloblack a").each(function() {
    
    if ((window.location.pathname.indexOf($(this).attr('href'))) > -1) {
        $(this).addClass('active1');
    }
});
});
 
 

