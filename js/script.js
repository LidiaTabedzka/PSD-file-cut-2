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

    /////////////////////////////////////////////////////////////////////////////////////////

    //druga karuzela
    var carousel2List = $("#carousel2 ul");
    var carousel2Item = carousel2List.find("li");
    var arrow2Right = $("#js-arrow2Right");
    var arrow2Left = $('#js-arrow2Left');

    var interval2 = setInterval(moveCarousel2, 3000);

    const mq2 = window.matchMedia( "(max-width: 991px)" );

    //Funkcja zerująca interval 
    function newInterval2(){
        clearInterval(interval2);
        interval2 = setInterval(moveCarousel2, 3000);
    }
    //Funcja zmieniająca slajd i kółka
    function changeSlide2(target){
        carousel2Item.removeClass("active").eq(target).addClass("active");
        if (mq2.matches) {
            carousel2List.animate({"marginLeft":-300 * target}, 500);
        } else {
            carousel2List.animate({"marginLeft":-375 * target}, 500);
        }
    }
    //Funkcja przesuwająca karuzelę do przodu
    function moveCarousel2(){
        var activeItem = carousel2List.find("li.active");
        var nextItem = activeItem.next();
        var nextItemIndex = carousel2Item.index(nextItem);
        
        if ((nextItemIndex >= 0) && (((nextItemIndex < 5) && !mq2.matches) || mq2.matches)) {
            changeSlide2(nextItemIndex);
        } else {
            changeSlide2(0);
        }
    }
    //Strzałka przesuwająca karuzelę do przodu
    arrow2Right.click(function() {
        moveCarousel2();        
        newInterval2();
    });    
    //Strzałka przesuwająca karuzelę do tyłu
    arrow2Left.click(function(){
        var activeItem = carousel2List.find("li.active");
        var prevItem = activeItem.prev();
        var prevItemIndex = carousel2Item.index(prevItem);

        if ((prevItemIndex < 0) && (!mq2.matches)) {
            changeSlide2(4);
        } else if ((prevItemIndex < 0) && (mq2.matches)) {
            changeSlide2(5);
        } else {
            changeSlide2(prevItemIndex);
        }
        newInterval2();
    });
});