'use strict';
var assemble = require('assemble');
var extname = require('gulp-extname');
var browserSync = require('browser-sync').create();
var basewatch = require('base-watch');
var less = require('gulp-less');
var rtlcss = require('gulp-rtlcss');
var autoprefixer = require('gulp-autoprefixer');
var cssnano = require('gulp-cssnano');
var path = require('path');
var concat = require('gulp-concat');
var babel = require('gulp-babel');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var header = require('gulp-header');
var gulpif = require('gulp-if');
var helpers = require('handlebars-helpers');
var prettify = require('gulp-prettify');
var htmlmin = require('gulp-htmlmin');
var pkg = require('./package.json');
var bower = require('./bower.json');
var assets = require('./assets');

var nmd = 'node_modules';
var bcd = 'bower_components';
var vnd = 'public/assets/vendor';

var banner = [
  '/**',
  ' * <%= pkg.name %> - <%= pkg.description %>',
  ' * @version v<%= pkg.version %>',
  ' * @author <%= pkg.author %>',
  ' */',
  ''
].join('\n');

var app = assemble();
app.create('home');
app.use(basewatch());

var markdown = require('helper-markdown');

app.task('init', function(cb) {
  var demo = app.options.demo;
  var projectName = 'Acme';
  var imgExt = 'svg';

  if (!demo) {
    imgExt = 'jpg';
    projectName = pkg.name;
  }
  app.data({
    topNav: false
  });
  app.data('rtl', app.options.rtl);
  app.data('demo', demo);
  app.data('hasColumn', false);
  app.data('imgExt', imgExt);
  app.data('projectName', projectName);
  app.data('prod', app.options.prod);
  app.option('layout', 'first');
  app.helper('math', helpers.math());
  app.helper('number', helpers.number());
  app.helper('date', helpers.date());
  app.helper('html', helpers.html());
  app.helper('object', helpers.object());
  app.helper('compare', helpers.comparison());
  app.helper('markdown', markdown);
  app.helper('md', require('helper-md').sync);
  app.data(['./templates/data/**/*.json']);
  app.data('pkg', pkg);
  app.data('bower', bower);
  app.layouts(path.join(__dirname, './templates/layouts/**/*.hbs'));
  app.partials(path.join(__dirname, './templates/includes/**/*.hbs'));
  app.pages(path.join(__dirname, './content/**/*.hbs'));
  app.home(path.join(__dirname, './home.hbs'));
  cb();
});


function contentBuild(dest) {
  return app.toStream('pages')
    .pipe(app.renderFile())
    .on('err', console.error)
    .pipe(app.options.prod ?
      htmlmin({
        collapseWhitespace: true,
        removeComments: true,
        removeOptionalTags: true,
        removeAttributeQuotes: true,
        minifyJS: true,
        useShortDoctype: true
      }) :
      prettify({
        indent_inner_html: false,
        preserve_newlines: true,
        end_with_newline: true,
        extra_liners: ['head', 'body']
      }))
    .pipe(extname())
    .pipe(app.dest(path.join(__dirname, './public/' + dest))).pipe(browserSync.stream());
}

app.task('home', ['init'], function() {
  var homeImageExt;
  if (app.options.prod) {
    homeImageExt = 'png';
  } else {
    homeImageExt = 'svg';
  }
  app.data('homeImageExt', homeImageExt);

  return app.toStream('home')
    .pipe(app.renderFile())
    .on('err', console.error)
    .pipe(app.options.prod ?
      htmlmin({
        collapseWhitespace: true,
        removeComments: true,
        removeOptionalTags: true,
        removeAttributeQuotes: true,
        minifyJS: true,
        useShortDoctype: true
      }) :
      prettify({
        indent_inner_html: false,
        preserve_newlines: true,
        end_with_newline: true,
        extra_liners: ['head', 'body']
      }))
    .pipe(extname())
    .pipe(rename('index.html'))
    .pipe(app.dest(path.join(__dirname, './public')))
    .pipe(browserSync.stream());
});

app.task('content-first', ['init'], function() {
  app.option('layout', 'first');
  app.data('lay', 'first');
  return contentBuild('first');
});

app.task('content-second', ['init'], function() {
  app.option('layout', 'second');
  app.data('lay', 'second');
  return contentBuild('second');
});

app.task('content-third', ['init'], function() {
  app.option('layout', 'third');
  app.data('lay', 'third');
  app.data({
    topNav: true
  });
  return contentBuild('third');
});

app.task('content-firstrtl', ['init'], function() {
  app.option('layout', 'first');
  app.data('lay', 'first');
  app.data('rtl', true);
  return contentBuild('firstrtl');
});

app.task('content-secondrtl', ['init'], function() {
  app.option('layout', 'second');
  app.data('lay', 'second');
  app.data('rtl', true);
  return contentBuild('secondrtl');
});

app.task('content-thirdrtl', ['init'], function() {
  app.option('layout', 'third');
  app.data('lay', 'third');
  app.data({
    topNav: true
  });
  app.data('rtl', true);
  return contentBuild('thirdrtl');
});

app.task('content', ['content-*']);

app.task('css:ltr', function() {

  return app.src(['./less/elektron.less', './less/theme-*.less'])
    .pipe(less())
    .pipe(autoprefixer())
    .pipe(header(banner, {
      pkg
    }))
    .pipe(app.dest('./public/assets/css'))
    .pipe(cssnano({
      zindex: false
    }))
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(header(banner, {
      pkg
    }))
    .pipe(app.dest('./public/assets/css'));

});

app.task('css:rtl', function() {

  return app.src(['./less/elektron.less', './less/theme-*.less'])
    .pipe(less())
    .pipe(rtlcss())
    .pipe(autoprefixer())
    .pipe(header(banner, {
      pkg
    }))
    .pipe(rename({
      suffix: '-rtl'
    }))
    .pipe(app.dest('./public/assets/css'))
    .pipe(cssnano({
      zindex: false
    }))
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(header(banner, {
      pkg
    }))
    .pipe(app.dest('./public/assets/css'));

});

app.task('css:bs-rtl', function() {
  return app.src(['./node_modules/bootstrap/dist/css/bootstrap.css'])
    .pipe(rtlcss())
    .pipe(rename('bootstrap-rtl.css'))
    .pipe(app.dest('./public/assets/vendor/bootstrap/css/'));
});
app.task('css:bs-rtl-min', function() {
  return app.src(['./node_modules/bootstrap/dist/css/bootstrap.min.css'])
    .pipe(rtlcss())
    .pipe(rename('bootstrap-rtl.min.css'))
    .pipe(app.dest('./public/assets/vendor/bootstrap/css/'));
});

app.task('css', ['css:ltr', 'css:rtl', 'css:bs-*']);

app.task('js', function() {
  return app.src(['./js/*.js'])
    .pipe(babel())
    .pipe(header(banner, {
      pkg
    }))
    .pipe(app.dest('public/assets/js'))
    .pipe(uglify())
    .pipe(header(banner, {
      pkg
    }))
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(app.dest('public/assets/js'));
});


app.task('vendor-css', function() {
  return app.src([
      `${vnd}/bootstrap/css/bootstrap.min.css`,
      `${vnd}/font-awesome/css/font-awesome.min.css`,
      `${vnd}/animate.css/animate.min.css`,
      `${vnd}/metismenu/metisMenu.min.css`,
      `${vnd}/onoffcanvas/onoffcanvas.min.css`,
      `${vnd}/loaders.css/loaders.min.css`
    ])
    .pipe(concat('vendor.css'))
    .pipe(app.dest('public/assets/css'));
});

app.task('vendor-css-rtl', function() {
  return app.src([
      `${vnd}/bootstrap/css/bootstrap-rtl.min.css`,
      `${vnd}/font-awesome/css/font-awesome.min.css`,
      `${vnd}/animate.css/animate.min.css`,
      `${vnd}/metismenu/metisMenu.min.css`,
      `${vnd}/onoffcanvas/onoffcanvas.min.css`,
      `${vnd}/loaders.css/loaders.min.css`
    ])
    .pipe(concat('vendor-rtl.css'))
    .pipe(app.dest('public/assets/css'));
});

app.task('vendor-js', function() {
  return app.src([
      `${vnd}/jquery/jquery.min.js`,
      `${vnd}/bootstrap/js/bootstrap.min.js`,
      `${vnd}/moment/moment.min.js`,
      `${vnd}/metismenu/metisMenu.min.js`,
      `${vnd}/onoffcanvas/onoffcanvas.min.js`,
      `${vnd}/screenfull/screenfull.min.js`,
      `${vnd}/loaders.css/loaders.css.js`,
      `${vnd}/in-view/in-view.min.js`
    ])
    .pipe(concat('vendor.js'))
    .pipe(gulpif(app.options.prod, uglify()))
    .pipe(app.dest('public/assets/js'));
});

app.task('vendor-fonts', function() {
  return app.copy([
      `${vnd}/bootstrap/fonts/*.*`,
      `${vnd}/font-awesome/fonts/*.*`
    ],
    'public/assets/fonts');
});

app.task('vendor', ['vendor-*']);

app.task('serve', function() {
  browserSync.init({
    server: {
      baseDir: path.join(__dirname, './public')
    }
  });

  browserSync.watch('./public/assets/css/*.css', function(event, file) {
    if (event === 'change') {
      browserSync.reload('*.css');
    }
  });

  browserSync.watch('./public/assets/js/*.js', function(event, file) {
    if (event === 'change') {
      browserSync.reload('*.js');
    }
  });
  watch();
});

app.task('copy', function() {
  assets.build('copy', function(err) {
    if (err) {
      console.error('ERROR', err);
    }
  });
});

app.task('build', ['home' ,'content', 'css', 'js', 'vendor'], function() {});

app.task('default', [
  'build', 'serve'
], function() {});

app.task('watch', function() {
  watch();
});

function watch() {
  app.watch(path.join(__dirname, './home.hbs'), ['home']);
  app.watch(path.join(__dirname, './content/**/*.hbs'), ['content']);
  app.watch(path.join(__dirname, './less/**/*.less'), ['css:ltr', 'css:rtl']);
  app.watch(path.join(__dirname, './js/*.js'), ['js']);
}

module.exports = app;
