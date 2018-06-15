(function(){
    var current = 0;
    var max = 0;
    var container;
    var interval;

    function init(){
        container = jQuery(".slide ul");
        max = container.children().length;
        events();
        
        interval = setInterval(next, 3000);
    }
    function events(){
        jQuery("button.prev").on("click", prev);
        jQuery("button.next").on("click", next);
    }
    function prev(e){
        current--;
        if(current < 0) current = max-1;
        animate();
    }
    function next(e){
        current++;
        if(current > max-1) current = 0;
        animate();
    }
    function animate(){
        var moveX = current*1000 + 40;
        TweenMax.to(container, 0.8, {marginLeft:-moveX, ease:Expo.easeOut});

        clearInterval(interval);
        interval = setInterval(next, 3000);
    }
    jQuery(document).ready(init);
})();