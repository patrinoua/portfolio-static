
$('.menuItem').click(function(e){
    e.preventDefault();
    let navigationTarget = '#'+e.target.href.split("#").pop();
    let navigationTargetSelector=$(navigationTarget);
    console.log("this.hash",this.hash);

    $('html, body').animate({
        scrollTop: $(navigationTarget).offset().top
    }, "slow");
});

$(".projectSectionImg").inViewport(function(px){
    console.log('lalala');
    if(px) $(this).addClass("triggeredAnimation") ;
});
// navigationTargetSelector.css({backgroundColor:"red"})

// $(`html, body`).animate(
//         {
//             scrollTop: aTag.offset().top - offset
//         },
//         "slow"
//     );

// $('html, body').animate({
//     scrollTop: "300px"
// }, 2000);
