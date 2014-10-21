/**
* Project - app, test yandex
* @author Yanovich Sergei
* last update 21-10-2014 
*/
var rating=function(){function a(){f.hover(b,c).click(d)}function b(){$(this).addClass(g).prevAll().addClass(g)}function c(){$(this).removeClass(g).prevAll().removeClass(g)}function d(){e(),h.text($(this).text())}function e(){f.off("hover click")}var f=$(".rating_i"),g="rating_i__active",h=$(".rating_count");return{bind:a}}();