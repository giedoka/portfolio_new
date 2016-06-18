var app = angular.module('portfolio', [ ]);

app.controller('skillsController', function() {
    this.skills = skills;
});

skills = [
    {
        name: 'HTML5',
        src: 'img/html5.png',
        info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et lobortis dolor, ut fringilla ligula. Suspendisse potenti. Nullam in nisi et orci venenatis eleifend.'
    },
    {
        name: 'CSS3',
        src: 'img/css3.png',
        info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et lobortis dolor, ut fringilla ligula. Suspendisse potenti. Nullam in nisi et orci venenatis eleifend.'
    },
    {
        name: 'JavaScript',
        src: 'img/js.png',
        info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et lobortis dolor, ut fringilla ligula. Suspendisse potenti. Nullam in nisi et orci venenatis eleifend.'
    },
    {
        name: 'jQuery',
        src: 'img/jquery.png',
        info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et lobortis dolor, ut fringilla ligula. Suspendisse potenti. Nullam in nisi et orci venenatis eleifend.'
    },
    {
        name: 'Sass',
        src: 'img/sass.png',
        info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et lobortis dolor, ut fringilla ligula. Suspendisse potenti. Nullam in nisi et orci venenatis eleifend.'
    },
    {
        name: 'Git',
        src: 'img/git.png',
        info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et lobortis dolor, ut fringilla ligula. Suspendisse potenti. Nullam in nisi et orci venenatis eleifend.'
    },
    {
        name: 'AngularJS',
        src: 'img/angular.png',
        info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et lobortis dolor, ut fringilla ligula. Suspendisse potenti. Nullam in nisi et orci venenatis eleifend.'
    },
    {
        name: 'RWD',
        src: 'img/rwd.png',
        info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et lobortis dolor, ut fringilla ligula. Suspendisse potenti. Nullam in nisi et orci venenatis eleifend.'
    }
]