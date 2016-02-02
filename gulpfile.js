'use strict';

var gulp = require('gulp');
var path = require('path');
var concat = require('gulp-concat');
var del = require('del');
var sourcemaps = require('gulp-sourcemaps');
var connect = require('gulp-connect');
// var seq = require('run-sequence');

var config = {
    'src'       : './src',
    'dist'      : './dist',
    'deploy'    : './server/public',
    'data'        : ['./src/data/**/*.*'],
    'jsSource'    : ['./src/js/TodoList.js', './src/js/app.js'],
    'html'        : ['./src/index.html'],
    'partials'    : ['./src/partials/**/*.html'],
    'styles'      : ['./src/styles/**/*.css'],
    'api'         : ['./src/api/**/*.json'],
    'superstatic' : ['./src/superstatic.json']
};

var dist = config.dist;

gulp.task('del', function () {
    return del(dist);
});

gulp.task('html', function () {
    gulp.src(config.html, {
            'base': config.src
        })
        .pipe(gulp.dest(dist))
        .pipe(connect.reload());
});

gulp.task('data', function () {
    gulp.src(config.data, {
            'base': config.src
        })
        .pipe(gulp.dest(dist))
        .pipe(connect.reload());
});

gulp.task('styles', function () {
    gulp.src(config.styles)
        .pipe(concat('app.css'))
        .pipe(gulp.dest(path.join(dist, 'styles')));
});


gulp.task('appjs', function () {
    gulp.src(config.jsSource)
        .pipe(sourcemaps.init())
        .pipe(concat('app.js'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(path.join(dist, 'js')))
        .pipe(connect.reload());
});

gulp.task('watch', function (cb) {
    gulp.watch(config.data, ['data']);
    gulp.watch(config.jsSource, ['appjs']);
    gulp.watch(config.html, ['html']);
    gulp.watch(config.styles, ['styles']);
});

gulp.task('connect', function (cb) {
    connect.server({
        root: 'dist',
        livereload: true,
        port: 8889
    });
});


gulp.task('default', [
    'html',
    'data',
    'styles',
    'appjs',
    'watch',
    'connect'
]);