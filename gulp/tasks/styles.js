const gulp = require('gulp')
const postcss = require('gulp-postcss')
const autoprefixer = require('autoprefixer')
const cssvars = require('postcss-simple-vars')
const nested = require('postcss-nested')
const cssImport = require('postcss-import')
const mixins = require('postcss-mixins')
const hexrgba = require('postcss-hexrgba')

gulp.task('styles', (done) =>
  gulp.src('./app/assets/styles/styles.css')
    .pipe(
      postcss(
        [
          cssImport,
          mixins,
          cssvars,
          nested,
          hexrgba,
          autoprefixer
        ]
    ))
    .on('error', done)
    .pipe(
      gulp.dest('./app/temp/styles')
    )
)
