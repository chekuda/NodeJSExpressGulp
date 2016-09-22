var gulp = require('gulp');
var jshint = require('gulp-jshint');
var jscs = require('gulp-jscs');

var jsFiles = ['*.js', 'src/**/*.js'];

gulp.task('style', function () {
    //this is for all my jsfiles
    gulp.src(jsFiles)
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish', {
            verbose: true
        }))
        .pipe(jscs());
});

gulp.task('inject', function () {
    //inject the js files and css files automatically
    //To use this dont forget to add the comments on index.html
    //<!--bower:js-->
    //<!--endbower-->
    //<!--bower:css-->
    //<!--endbower-->
    //<!--inject:js-->
    //<!--endbower-->
    //<!--inject:css-->
    //<!--endbower-->
    var wiredep = require('wiredep').stream;//Used for libraries
    var inject = require('gulp-inject');//Use for my css and js files
    
    var injectSrc = gulp.src(['./public/css/*.css','./public/js/*.js'],{read:false});
    
    var injectOptions = {
        ignorePath:'/public'
    };
    
    var options = {
        //for example take the json file and get the packages from the lib where Im saving the files
        bowerJson: require('./bower.json'),
        directory: './public/lib',
        ignorePath: '../../public'
    };
    //This will inject the files thats typed on the options vars
    return gulp.src('./src/views/*.html') //this is going to pull in the html file
        .pipe(wiredep(options)) //wiredep take the options
        .pipe(inject(injectSrc, injectOptions))
        .pipe(gulp.dest('./src/views')); //paste the options into the views
});