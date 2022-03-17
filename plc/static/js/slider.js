$(document).ready(function(){
    // $('.slider').slick({
    //     infinite:false,
    //     dots:true,
    //     centerMode:false
    // });
    $('#slider').slick({
        dots:true,
        arrows:true,
        slidesToShow:3,
        centerMode:false,
        infinite:false,
        variableWidth:false,
        responsive:[
            {
                
                breakpoint:960,
                settings:{
                    slidesToShow:2,
                    centerMode:false,                   
                    infinite:false,
                    centerPadding:'0px',                     
                    variableWidth:false
                }
            },
            {
                
                breakpoint:769,
                settings:{
                    slidesToShow:1,
                    centerMode:true,                   
                    infinite:false,
                    centerPadding:'0px',                     
                    variableWidth:false
                }
            },{
                breakpoint:500,
                settings:{
                    slidesToShow:1,
                    centerMode:true, 
                    centerPadding:'0px',                  
                    infinite:false,                    
                    variableWidth:false
                }
            }
        ]
        
    });
});