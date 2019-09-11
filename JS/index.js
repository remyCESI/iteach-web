

$(window).scroll(function(){
    if (document.querySelector('#textProjet').getBoundingClientRect().y > 0) {

const element = document.querySelector('.TE')
element.classList.add('animated', 'fadeInLeft')
const element2 = document.querySelector('.TE2')
element2.classList.add('animated', 'fadeInLeft')



}



if (document.querySelector('#accueil').getBoundingClientRect().y< 0) {

    document.querySelector('.navbar').classList.add('bg-light');

    $('.nav-link').css('color','black');

    $('#bouttonResp').removeClass('border-white text-white')

    $('#bouttonResp').addClass('border-dark text-black')
    

    
}
else if(document.querySelector('#accueil').getBoundingClientRect().y== 0)
{
    
    $('.nav-link').css('color','white');

    $('.navbar').removeClass('bg-light');


    $('#bouttonResp').addClass('border-white text-white')
    

}
})


$(document).ready(function(){

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        dots:false,
        pagination: false,
        responsive:{
            320:{
                items:1
            },
            400:{
                items:1
            },
            640:{
                items:1
            },
            1000:{
                items:1
            },

            1024:{
                items:1
            },

            1080:{items:2}
        }
    })

    if($( window ).width()<782)
{
    $('.card').removeClass('col-5');

   
}
   
  
$('.textCard').width($('.card').width());
   
})


    $(window).resize(function(){
        $('.textCard').width($('.card').width());
    })


    $('.js-scrollTo').on('click', function() { // Au clic sur un élément
    
    var page = $(this).attr('href'); // Page cible
    
    var speed = 750; // Durée de l'animation (en ms)
    
    $('html, body').animate( { scrollTop: $(page).offset().top -100 }, speed ); // Go
    
    return false;
    
    });
    
 










