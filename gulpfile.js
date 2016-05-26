var gulp = require('gulp'),
	debug = require('gulp-debug'),
	sass = require('gulp-sass'),
	autoprefixer = require('gulp-autoprefixer'),
	uglify = require('gulp-uglify'),
	cleanCSS = require('gulp-clean-css'),
	rename = require('gulp-rename'),
	concat = require('gulp-concat'),
	notify = require('gulp-notify'),
	cache = require('gulp-cache'),
	del = require('del');

//minify css file
gulp.task('minify-css', function() {
	return gulp.src('css/style.css')
		.pipe(cleanCSS({compatibility: 'ie8'}))
		.pipe(rename({
			suffix: '.min',
			extname: '.css'
		}))
		.pipe(gulp.dest('css/'))
		.pipe(notify({
			message: 'Source CSS minified!'
		}));
});

//uglify js src files
gulp.task('uglify-js', function() {
	return gulp.src('js/src/*.js')
		.pipe(uglify({
			preserveComments : 'some'
		}))
		.pipe(rename({
			suffix: '-ugl',
			extname: '.js'
		}))
		.pipe(gulp.dest('js/dist/'))
		.pipe(notify({
			message: 'Source JS uglified!'
		}));
});

//uglify js lib files
gulp.task('uglify-lib', function() {
	return gulp.src(['js/lib/**/*.js', '!js/lib/**/*.min.js'])
		.pipe(uglify({
			preserveComments : 'some'
		}))
		.pipe(rename({
			suffix: '.min',
			extname: '.js'
		}))
		.pipe(gulp.dest('js/lib/'))
		.pipe(notify({
			message: 'Third-party JS uglified!'
		}));
});

//concat and uglify js files (src and lib)
gulp.task('concat-js', ['uglify-js', 'uglify-lib'], function() {
	return gulp.src(['js/lib/jquery/*.min.js', 'js/lib/**/*.min.js', 'js/dist/*-ugl.js'], { base : 'js/'})
		.pipe(concat('app.min.js'))
		.pipe(gulp.dest('js/dist'))
		.pipe(notify({
			message : 'All JavaScript uglified and concatenated!'
		})
		.on('end', function() {
			del('js/dist/*-ugl.js');
		}));
});

//run all major tasks when just `gulp` is run.
gulp.task('default', function() {
	gulp.start('minify-css', 'concat-js');
});

//watch and run tasks if files are modified
gulp.task('watch', function() {
	gulp.watch('js/src/*', ['concat-js']);
	gulp.watch('js/lib/*', ['concat-js']);
});
