var gulp = require('gulp');
var concat = require('gulp-concat');
var imagemin = require('gulp-imagemin');
var jshint = require('gulp-jshint');
var uglify = require('gulp-uglify');
var watch = require('gulp-watch');
var webpack = require('webpack-stream');

//lint js files
gulp.task('jshint', function(){
  return gulp.src('js/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});



//enable webpack as a gulp task
gulp.task('webpack', function(){
  return gulp.src('js/app.js')
    .pipe(webpack(require('./webpack.config.js')))
    .pipe(gulp.dest('build/js'))
});
