var gulp = require("gulp");
var sass = require("gulp-sass");
var concat = require('gulp-concat');
var autoprefixer = require('autoprefixer-core');
var postcss = require('gulp-postcss');
var livereload = require('gulp-livereload');


gulp.task('sass', function() {
    return gulp.src('public/scss/**/*.scss')
        .pipe(sass())
        .pipe(postcss([autoprefixer({
            browsers: ['last 2 versions']
        })]))
        .pipe(gulp.dest('public/css/'))
        .pipe(livereload());
        //.pipe(concat('style.css'))
        //.pipe(gulp.dest('public/css'));
});
gulp.task('watch', function(){
    livereload.listen();
    gulp.watch('public/scss/**/*.scss', ['sass']);
    //gulp.watch('public/css/**/*.css',['reload']);
    
});

gulp.task('default', ['sass', 'watch']);