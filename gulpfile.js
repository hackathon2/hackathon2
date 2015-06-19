var gulp = require("gulp");
var sass = require("gulp-sass");
var concat = require('gulp-concat');
var autoprefixer = require('autoprefixer-core');
var postcss = require('gulp-postcss');

gulp.task('sass', function() {
    return gulp.src('public/scss/**/*.scss')
        .pipe(sass())
        .pipe(postcss([autoprefixer({
            browsers: ['last 2 versions']
        })]))
        .pipe(gulp.dest('public/css/'));
        //.pipe(concat('style.css'))
        //.pipe(gulp.dest('public/css'));
});
gulp.watch('public/scss/**/*.scss', ['sass']);

