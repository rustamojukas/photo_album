'use strict';
global.$ = {
  package: require('./package.json'),
  config: require('./gulp/config'),
  path: {
    task: require('./gulp/paths/tasks.js'),
    jsFoundation: require('./gulp/paths/js.foundation.js'),
    cssFoundation: require('./gulp/paths/css.foundation.js'),
    app: require('./gulp/paths/app.js')
  },
  gulp: require('gulp'),
  rimraf: require('rimraf'),
  browserSync: require('browser-sync').create(),
  gp: require('gulp-load-plugins')()
};

$.path.task.forEach(function(taskPath) {
  require(taskPath)();
});

$.gulp.task('default', $.gulp.series(
  'clean',
  $.gulp.parallel(
    'sass',
    'sass.lint',
    'pug',
    'js:foundation',
    'js:process',
    'js:lint',
    'copy:image',
    'css:foundation',
    'sprite:svg',
    'sprite:png',
    'fonts',
    'frontend.jade'
  ),
  $.gulp.parallel(
    'watch',
    'serve'
  )
));

$.gulp.task('dist', $.gulp.parallel(
  'dist.sass',
  'dist.js:foundation',
  'dist.js:process',
  'dist.css:foundation',
  'dist.sprite:svg',
  'dist.image',
  'dist.fonts',
  'dist.frontend.pug'
));


$.gulp.task('dev', $.gulp.parallel('watch:ivan','serve'));

$.gulp.task('dw', $.gulp.parallel('watch.dist:ivan','watch:ivan'));
