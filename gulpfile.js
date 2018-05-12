// including plugins
var gulp = require('gulp');
var minifyCSS = require('gulp-minify-css');
var autoprefixer = require('gulp-autoprefixer');
var gp_concat = require('gulp-concat');
var gp_rename = require('gulp-rename');
var gp_uglify = require('gulp-uglify');
var path = require('path');

gulp.task('css-main', function() {
  return gulp
    .src([
      './public/css/bootstrap.min.css',
      './public/css/icons.css',
      './public/css/metismenu.min.css',
      './public/css/style.css'
    ])
    .pipe(minifyCSS())
    .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9'))
    .pipe(gp_concat('style.min.css'))
    .pipe(gulp.dest('./public/dist/css/'));
});

gulp.task('css-home', function() {
  return gulp
    .src([
      './public/plugins/datatables/dataTables.bootstrap4.min.css',
      './public/plugins/datatables/responsive.bootstrap4.min.css'
    ])
    .pipe(minifyCSS())
    .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9'))
    .pipe(gp_concat('home.min.css'))
    .pipe(gulp.dest('./public/dist/pages/home/css/'));
});

gulp.task('copy-fonts', function() {
  return gulp
    .src(['./public/fonts/**'])
    .pipe(gulp.dest('./public/dist/fonts/'));
});

gulp.task('style', ['css-main', 'copy-fonts', 'css-home'], function() {});

gulp.task('css-vendor', function() {
  return gulp
    .src([
      './public/vendor/bootstrap/css/bootstrap.min.css',
      './public/vendor/revolution/css/layers.css',
      './public/vendor/revolution/css/navigation.css',
      './public/vendor/revolution/css/settings.css',
      './public/vendor/css-hamburgers/hamburgers.min.css',
      './public/vendor/select2/select2.min.css',
      './public/vendor/daterangepicker-bootstrap/daterangepicker.css',
      './public/vendor/animsition/dist/css/animsition.min.css'
    ])
    .pipe(minifyCSS())
    .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9'))
    .pipe(gp_concat('vendor.min.css'))
    .pipe(gulp.dest('./public/dist/css/'));
});

gulp.task('js-vendor', function() {
  return gulp
    .src([
      './public/js/jquery.min.js',
      './public/js/popper.min.js',
      './public/js/bootstrap.min.js',
      './public/js/metisMenu.min.js',
      './public/js/waves.js',
      './public/js/jquery.slimscroll.js'
    ])
    .pipe(gp_concat('vendor.min.js'))
    .pipe(gulp.dest('./public/dist/js/'))
    .pipe(gp_rename('vendor.min.js'))
    .pipe(gp_uglify())
    .pipe(gulp.dest('./public/dist/js/'));
});

gulp.task('js-app', function() {
  return gulp
    .src(['./public/js/jquery.core.js', './public/js/jquery.app.js'])
    .pipe(gp_concat('app.min.js'))
    .pipe(gulp.dest('./public/dist/js/'))
    .pipe(gp_rename('app.min.js'))
    .pipe(gp_uglify())
    .pipe(gulp.dest('./public/dist/js/'));
});

gulp.task('js-page-dashboard', function() {
  return gulp
    .src([
      './public/plugins/flot-chart/jquery.flot.min.js',
      './public/plugins/flot-chart/jquery.flot.time.js',
      './public/plugins/flot-chart/jquery.flot.tooltip.min.js',
      './public/plugins/flot-chart/jquery.flot.tooltip.min.js',
      './public/plugins/flot-chart/jquery.flot.resize.js',
      './public/plugins/flot-chart/jquery.flot.pie.js',
      './public/plugins/flot-chart/jquery.flot.crosshair.js',
      './public/plugins/flot-chart/curvedLines.js',
      './public/plugins/flot-chart/jquery.flot.axislabels.js',
      './public/plugins/jquery-knob/excanvas.js',
      './public/plugins/jquery-knob/jquery.knob.js',
      './public/pages/jquery.dashboard.init.js'
    ])
    .pipe(gp_concat('dashboard.min.js'))
    .pipe(gulp.dest('./public/dist/pages/dashboard/js/'))
    .pipe(gp_rename('dashboard.min.js'))
    .pipe(gp_uglify())
    .pipe(gulp.dest('./public/dist/pages/dashboard/js/'));
});

gulp.task('js-page-home', function() {
  return gulp
    .src([
      './public/plugins/datatables/jquery.dataTables.min.js',
      './public/plugins/datatables/dataTables.bootstrap4.min.js',
      './public/plugins/datatables/dataTables.responsive.min.js'
    ])
    .pipe(gp_concat('home.min.js'))
    .pipe(gulp.dest('./public/dist/pages/home/js/'))
    .pipe(gp_rename('home.min.js'))
    .pipe(gp_uglify())
    .pipe(gulp.dest('./public/dist/pages/home/js/'));
});

gulp.task(
  'js',
  ['js-vendor', 'js-app', 'js-page-dashboard', 'js-page-home'],
  function() {}
);

gulp.task('prod', ['style', 'js'], function() {});
gulp.task('default', ['style', 'js'], function() {});
