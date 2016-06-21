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