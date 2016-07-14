var gulp = require('gulp'),
	less = require('gulp-less'),
	autoprefixer = require('gulp-autoprefixer'),
	cssmin = require('gulp-cssmin'),
	webserver = require('gulp-webserver');

gulp.task('styles', function () {
	return gulp.src('src/less/**/*.less')
		.pipe(less())
    	.pipe(autoprefixer({
			browsers: ['last 2 versions'],
			cascade: false
		}))
		.pipe(cssmin())
    	.pipe(gulp.dest('dist/css'));
});

gulp.task('fonts', function () {
	return gulp.src('src/fonts/**/*.*')
		.pipe(gulp.dest('dist/fonts'));
});

gulp.task('images', function() {
  return gulp.src('src/images/**/*.*')
      .pipe(gulp.dest('dist/images'));
});

gulp.task('html', function() {
  return gulp.src('src/**/*.html')
      .pipe(gulp.dest('dist'));
});
gulp.task('font-css', function() {
  return gulp.src('src/**/*.css')
      .pipe(gulp.dest('dist'));
});

// gulp.task('js', function() {
//   return gulp.src('src/**/*.js')
//       .pipe(gulp.dest('dist'));
// });
gulp.task('watch', function() {
   gulp.watch('./src/**/*.*html', ['html']);
   gulp.watch('./src/**/*.less', ['styles']);
});

gulp.task('webserver', function() {
  gulp.src('dist')
    .pipe(webserver({
      livereload: true,
      open: true
    }));
});
gulp.task('default', ['styles', 'fonts', 'images', 'html', 'font-css', 'watch', 'webserver']);