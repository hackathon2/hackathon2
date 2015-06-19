'use strict';

var gulp = require('gulp'),
gutil = require('gulp-util'),
sass = require('gulp-sass'),
compass = require('gulp-compass'),
concat = require('gulp-concat')

var sassSources = ['components/sass/style.scss'];
gulp.task('log', function() {
  //gutil.log("TEST LOG");
});

gulp.task('sass', function () {
  gulp.src(sassSources)
  .pipe(compass({
    sass: 'components/sass',
    images: 'public/images',
    style: 'expanded'
  }))
  .on('error', gutil.log)
  .pipe(gulp.dest('public/css'));

});

gulp.task('sass:watch', function () {
  gulp.watch(sassSources, ['sass']);
});

