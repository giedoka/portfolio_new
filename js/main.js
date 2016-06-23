$(document).ready(function() {
    openNav();
    avatarMove();
    showSkillInfo();
    closeSkillInfo();
    mobileHover();
    openAvatarNav();
    //loadSkills();
    //loadPortfolio();
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
    $(window).scroll(function() {
        if($(window).scrollTop() > topOfOthDiv) {
            $(".avatar-nav").addClass('move');
            $('.header-img>img').hide();
        }
        else {
            $(".avatar-nav").removeClass('move');
            $(".header-img>img").show();
        }
    });
}

function openAvatarNav() {
    $('.avatar-nav .hamburger').click(function() {
        if($('.avatar-nav .hamburger .top-line').hasClass('top-line-close')) {
            $('.avatar-nav').animate({
                top: 0
            },400);
        }
        else {
            $('.avatar-nav').animate({
                top: -160
            },400);
        }
    });
}

function loadSkills() {
    var topOfAbout = $(".about").offset().top;
    var skills = $('.skills');
    $(window).scroll(function() {
        if($(window).scrollTop() > topOfAbout) {
            skills.load('skills.html');
        }
    });
}

function loadPortfolio() {
    var topOfSkills = $(".skills").offset().top;
    var portfolio = $('.portfolio');
    $(window).scroll(function() {
        if($(window).scrollTop() > topOfSkills) {
            portfolio.load('projects.html');
        }
    });
}

function showSkillInfo() {
    var skill = $('.dots>div');
    skill.click(function() {
        var skillImgSrc = $(this).find($('img')).attr('src');
        var skillName = $(this).find($('img')).attr('alt');
        var levelImg = $(this).find($('.stars img')).attr('src');
        $('.skill-info .img-container img').attr('src', skillImgSrc);
        console.log(skillName);
        $('.skill-info h4').text(skillName);
        $('.skill-info').addClass('show');
        $('body').addClass('noScroll');
        if(skillName == 'HTML5'){
            setStars(4);
        }
        else if(skillName == 'CSS3'){
            setStars(4);
        }
        else if(skillName == 'JavaScript'){
            setStars(3);
        }
        else if(skillName == 'jQuery'){
            setStars(3);
        }
        else if(skillName == 'RWD'){
            setStars(4);
        }
        else if(skillName == 'Sass'){
            setStars(4);
        }
        else if(skillName == 'Git'){
            setStars(2);
        }
        else if(skillName == 'AngularJS'){
            setStars(1);
        }
    });
}
function setStars(starNum) {
    for(var i = 1; i <= 5; i++) {
        $('.stars img:nth-of-type(' + i + ')').attr('src', 'img/star_filled.png');
        for(var j = starNum+1; j <= 5; j++) {
            $('.stars img:nth-of-type(' + j + ')').attr('src', 'img/star_not_filled.png');
        }
    }
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