var gulp = require('gulp');
var babel = require('gulp-babel');
var clean = require('gulp-clean');
var webpack = require('gulp-webpack');
var sequence = require('run-sequence');

gulp.task('clean', function() { 
	return gulp.src(['lib', 'src/main/resources/static', 'target/classes/static/'])
		.pipe(clean());
})

gulp.task('babel', function() {
	return gulp.src(['src/main/resources/META-INF/**/*.jsx'])
	.pipe(babel())
	.pipe(gulp.dest('src/main/resources/static'));
})

gulp.task('copyAngular', function () {
	return gulp.src('src/main/resources/META-INF/angular/**/*')
    	.pipe(gulp.dest('src/main/resources/static'));

})

gulp.task('copyBabelifiedReactJSfiles', function () {
	return gulp.src('src/main/resources/META-INF/**/*.js')
    	.pipe(gulp.dest('src/main/resources/static'));
})

gulp.task('deleteAngularFilesCaughtUpInTheBabelifiedCopy', function () { 
	// hack
	return gulp.src(['src/main/resources/static/angular']).pipe(clean({force:true})); 
})

gulp.task('webpack', function() {
	return gulp.src(['lib/**/*.js'])
	.pipe(webpack( require('./webpack.config.js') ))
	.pipe(gulp.dest('src/main/resources/static/webpack'));
})

gulp.task('default', function (done) {
    sequence('clean', 'babel', 'copyAngular', 'copyBabelifiedReactJSfiles', 'deleteAngularFilesCaughtUpInTheBabelifiedCopy', 'webpack', done);
})