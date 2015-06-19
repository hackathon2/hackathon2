'use strict';

var gulp = require('gulp'),
gutil = require('gulp-util'),
sass = require('gulp-sass'),
compass = require('gulp-compass'),
livereload = require('gulp-livereload'),
concat = require('gulp-concat'),
autoprefixer = require('gulp-autoprefixer');

var sassSources = ['components/sass/style.scss'];

gulp.task('sass', function () {
  gulp.src(sassSources)
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(compass({
      sass: 'components/sass',
      images: 'public/images',
      style: 'expanded'
    }))
    .on('error', gutil.log)
    .pipe(gulp.dest('public/css'))
    .pipe(livereload());
});

gulp.task('sass:watch', function () {
  livereload.listen();
  gulp.watch(sassSources, ['sass']);
});

gulp.task('watch', function() {
  livereload.listen();
  gulp.watch(sassSources, ['sass']);
});

gulp.task('default', ['watch', 'sass']);
