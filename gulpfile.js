const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

const styles = () => {
  return gulp.src('src/styles/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('src/styles'));
};

const watchStyles = () => {
  gulp.watch('src/app/components/**/*.scss', styles);
};

exports.styles = styles;
exports.watchStyles = watchStyles;
