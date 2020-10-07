$(document).ready(function(){   

$('.js--project1').waypoints(function(direction)
{
    if (direction = "down")
    {
        $('nav').addClass('sticky');
    }
    else
    {
        $('nav').removeClass('sticky');
    }
},{
offset : '60px;'
})

});