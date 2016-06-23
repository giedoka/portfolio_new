var app = angular.module('portfolio', [ ]);

app.controller('portfolioController', function() {
    this.projects = projects;
});

var projects = [
    {
        name: 'aMoney',
        link: 'http://www.amoney.pl',
        images: [
            'img/projects/amoney/1.png',
            'img/projects/amoney/2.png',
            'img/projects/amoney/3.png'
        ],
        info: 'Mój pierwszy komercyjny projekt. Przy jego tworzeniu współpracowałem z programistą zajmującym się back-endem za pośrednictwem systemu kontroli wersji - github.'
    },
    {
        name: 'Kappe',
        link: 'http://giedoka.github.io/kappe/',
        images: [
            'img/projects/kappe/1.png',
            'img/projects/kappe/2.png',
            'img/projects/kappe/3.png'
        ],
        info: 'Jeden z zakodowanych przeze mnie szablonów PSD.'
    },
    {
        name: 'System ekspercki',
        link: 'http://giedoka.github.io/system-ekspercki/',
        images: [
            'img/projects/system-ekspercki/1.png',
            'img/projects/system-ekspercki/2.png'
        ],
        info: 'Projekt stworzony jeszcze na początku nauki technologii webowych. Zaprojektowany na potrzebę zajęć na studiach. Jest to prosty system ekspercki, który doradza co zjeść.'
    }
]

/*app.controller('skillInfoController', ['$scope', function($scope) {
    $scope.skillInfos = [
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
}]);*/
