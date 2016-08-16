var gulp = require('gulp');
var less = require('gulp-less');
var minify = require('gulp-minify-css');


gulp.task('build', function() {
    gulp.src(['./less/style.less'])
    .pipe(less())
    .pipe(minify())
    .pipe(gulp.dest('./css/'))
});