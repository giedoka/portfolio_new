$(document).ready(function() {
    openNav();
    avatarMove();
    showSkillInfo();
    closeSkillInfo();
    mobileHover();
});

var hamburger = $('.hamburger');
var topLine = $('.top-line');
var middleLine = $('.middle-line');
var bottomLine = $('.bottom-line');

function openNav() {
    hamburger.click(function() {
        topLine.toggleClass('top-line-close');
        middleLine.toggleClass('middle-line-close');
        bottomLine.toggleClass('bottom-line-close');
        $('header nav ul').toggleClass('nav-open');
    });
}

/*function stopSkillsAnimation() {
    $('.dots').hover(function(){
        $('.dots .icon').attr('class', 'icon');      
    });
}*/

function avatarMove() {
    var topOfOthDiv = $("header").offset().top + $("header").height();
    console.log(topOfOthDiv);
    $(window).scroll(function() {
        if($(window).scrollTop() > topOfOthDiv) {
            $("header img").addClass('move');
        }
        else {
            $("header img").removeClass('move');
        }
    });
}

function showSkillInfo() {
    var skill = $('.dots>div');
    skill.click(function() {
        var skillImgSrc = $(this).find($('img')).attr('src');
        var skillName = $(this).find($('img')).attr('alt');
        
        $('.skill-info img').attr('src', skillImgSrc);
        console.log(skillName);
        $('.skill-info h4').text(skillName);
        $('.skill-info').addClass('show');
        $('body').addClass('noScroll');
    });
}
function closeSkillInfo() {
    var closeBtn = $('.skill-info .close-btn');
    closeBtn.click(function() {
        $('.skill-info').removeClass('show');
        $('body').removeClass('noScroll');
    });
}

function mobileHover() {
    var icon = $('.dots .icon');
    var svg = $('svg');
    icon.on("touchstart",function(){
    });
    svg.on("touchstart",function(){
    });
}