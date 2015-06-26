"use strict";

var gulp = require('gulp'),
    babel = require('gulp-babel'),
    watch = require('gulp-watch'),

path = {
    src: {
        js: 'src/*.js'
    },
    dist: {
        js: "dist/"
    }
};

gulp.task('6to5', function () {
    gulp.src(path.src.js)
        .pipe(babel())
        .pipe(gulp.dest(path.dist.js));
});

gulp.task('watch', ['6to5'], function (){
    gulp.watch([path.src.js], [babel]);
});

gulp.task('default', ['watch']);