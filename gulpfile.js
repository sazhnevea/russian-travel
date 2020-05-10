'use strict';

var gulp = require('gulp');
var server = require('browser-sync').create();

gulp.task('serve', function() {
    server.init({
        server: {
            baseDir: "./"
        }
    });
});

gulp.task('watch', function() {
  return gulp.watch(['index.html', 'pages/*.css', 'blocks/**/*.css']).on('change', server.reload);
});

gulp.task('default', gulp.series(
  gulp.parallel('watch', 'serve'),
  ));