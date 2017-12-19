$(function(){
    var carouselList = $("#carousel ul");
    var carouselItem = carouselList.find("li");
    var carouselIndicators = $("#indicators");
    var arrowRight = $("#js-arrowRight");
    var arrowLeft = $('#js-arrowLeft');

    var interval = setInterval(moveCarousel, 3000);

    const mq = window.matchMedia( "(max-width: 767px)" );

    //Funkcja zerująca interval 
    function newInterval(){
        clearInterval(interval);
        interval = setInterval(moveCarousel, 3000);
    }
    //Funcja zmieniająca slajd i kółka
    function changeSlide(target){
        carouselItem.removeClass("active").eq(target).addClass("active");
        if (mq.matches) {
            carouselList.animate({"marginLeft":-300 * target}, 500);
        } else {
            carouselList.animate({"marginLeft":-400 * target}, 500);
        }
               
    }
    //Funkcja przesuwająca karuzelę do przodu
    function moveCarousel(){
        var activeItem = carouselList.find("li.active");
        var nextItem = activeItem.next();
        var nextItemIndex = carouselItem.index(nextItem);
        var slideNumber = "0" + (nextItemIndex+1) +"/05";
        
        if (nextItemIndex >= 0) {
            changeSlide(nextItemIndex);
            carouselIndicators.text(slideNumber);
        } else {
            changeSlide(0);
            carouselIndicators.text("01/05");
        }
    }
    //Strzałka przesuwająca karuzelę do przodu
    arrowRight.click(function() {
        moveCarousel();        
        newInterval();
    });    
    //Strzałka przesuwająca karuzelę do tyłu
    arrowLeft.click(function(){
        var activeItem = carouselList.find("li.active");
        var prevItem = activeItem.prev();
        var prevItemIndex = carouselItem.index(prevItem);
        var slideNumber = "0" + (prevItemIndex+1) +"/05";

        if (prevItemIndex >= 0) {
            changeSlide(prevItemIndex);
            carouselIndicators.text(slideNumber);
        } else {
            changeSlide(4);
            carouselIndicators.text("05/05");
        }
        newInterval();
    });
    //Funkcja do klikania w kółka   
    carouselIndicatorsItem.click(function(){
        const target = $(this).index();
        changeSlide(target);
        newInterval();
    });
});