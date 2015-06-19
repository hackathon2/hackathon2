var gulp = require("gulp");
var sass = require("gulp-sass");

gulp.task('sass', function() {
    return gulp.src('public/scss/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('public/css/'));
});
gulp.watch('public/scss/**/*.scss', ['sass']);

