'use_strict';

var gulp = require('gulp'),
	cleanCSS = require('gulp-clean-css'),
	concat = require('gulp-concat'),
	filter = require('gulp-filter'),
	mainBowerFiles = require('main-bower-files'),
	notify = require('gulp-notify'),
	order = require('gulp-order'),
	prefixer = require('gulp-autoprefixer'),
	rename = require('gulp-rename'),
	sass = require('gulp-sass'),
	wiredep = require('wiredep').stream;


gulp.task('css:dev', function() {
	return gulp.src('static/sass/*.sass')
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('static/css/'))
		.pipe(notify('CSS in dev Success!'));
});


gulp.task('default', function() {
	gulp.start('css:dev');
});


gulp.task('watch', function() {
	gulp.watch('static/sass/*.sass', ['default']);
})