'use strict';
var assemble = require('assemble');

var pkg = require('./package.json');

var nmd = 'node_modules';
var bcd = 'bower_components';
var vnd = 'public/assets/vendor';

var app = assemble();

/**
 * run the code
 * assemble copy
 */
app.task('copy', ['copy-*']);

app.task('copy-lib', function() {
  return app.copy(`src/scripts/**/*.*`, `${vnd}`);
});

/**
 * copy from bower_components
 */

app.task('copy-bootstrap-touchspin', function() {
  return app.copy(`${bcd}/bootstrap-touchspin/dist/*.*`, `${vnd}/bootstrap-touchspin`);
});

app.task('copy-datatables', function() {
  return app.copy(`${bcd}/datatables/media/**/*.*`, `${vnd}/datatables`);
});

app.task('copy-flot', function() {
  return app.copy(`${bcd}/flot/jquery.*.js`, `${vnd}/flot`);
});

app.task('copy-screenfull', function() {
  return app.copy(`${bcd}/screenfull/dist/*.*`, `${vnd}/screenfull`);
});

app.task('copy-jquery-validation', function() {
  return app.copy(`${bcd}/jquery-validation/dist/*.*`, `${vnd}/jquery-validation`);
});

app.task('copy-knob', function() {
  return app.copy([
    `${bcd}/jquery-knob/js/*.*`, `${bcd}/jquery-knob/dist/*.*`
  ], `${vnd}/jquery-knob`);
});

app.task('copy-counterup', function() {
  return app.copy(`${bcd}/counterup/*.js`, `${vnd}/counterup`);
});

/**
 * copy from node_modules
 */

app.task('copy-push.js', function() {
  return app.copy(`${nmd}/push.js/{push,push.min}.js`, `${vnd}/push.js`);
});

app.task('copy-loaders.css', function() {
  return app.copy(`${nmd}/loaders.css/*.{css,js}`, `${vnd}/loaders.css`);
});

app.task('copy-waypoints', function() {
  return app.copy(`${nmd}/waypoints/lib/**/*.js`, `${vnd}/waypoints`);
});

app.task('copy-ion-rangeslider', function() {
  return app.copy(`${nmd}/ion-rangeslider/{js,css,img}/*.*`, `${vnd}/ion-rangeslider`);
});

app.task('copy-bootstrap-slider', function() {
  return app.copy(`${nmd}/bootstrap-slider/dist/**/*.*`, `${vnd}/bootstrap-slider`);
});

app.task('copy-jqvmap', function() {
  return app.copy(`${nmd}/jqvmap/dist/**/*.*`, `${vnd}/jqvmap`);
});

app.task('copy-jqvmap-sample', function() {
  return app.copy(`${nmd}/jqvmap/examples/js/*.*`, `${vnd}/jqvmap`);
});

app.task('copy-metis-canvas', function() {
  return app.copy(`${nmd}/metis-canvas/dist/*.*`, `${vnd}/metis-canvas`);
});

app.task('copy-animate', function() {
  return app.copy(`${nmd}/animate.css/*.css`, `${vnd}/animate.css`);
});

app.task('copy-autosize', function() {
  return app.copy(`${nmd}/autosize/dist/*.*`, `${vnd}/autosize`);
});

app.task('copy-countdown', function() {
  return app.copy(`${nmd}/jquery-countdown/dist/*.*`, `${vnd}/countdown`);
});

app.task('copy-bootstrap', function() {
  return app.copy(`${nmd}/bootstrap/dist/**/*.*`, `${vnd}/bootstrap`);
});

app.task('copy-bootstrap-colorpicker', function() {
  return app.copy(`${nmd}/bootstrap-colorpicker/dist/**/*.*`, `${vnd}/bootstrap-colorpicker`);
});

app.task('copy-bootstrap-duallistbox', function() {
  return app.copy(`${nmd}/bootstrap-duallistbox/dist/**/*.*`, `${vnd}/bootstrap-duallistbox`);
});

app.task('copy-bootstrap-wysiwyg', function() {
  return app.copy(`${nmd}/bootstrap-wysiwyg/{js,css}/*.*`, `${vnd}/bootstrap-wysiwyg`);
});

app.task('copy-chart.js', function() {
  return app.copy(`${nmd}/chart.js/dist/**/*.*`, `${vnd}/chart.js`);
});

app.task('copy-cleave.js', function() {
  return app.copy(`${nmd}/cleave.js/dist/**/*.*`, `${vnd}/cleave.js`);
});

app.task('copy-clipboard', function() {
  return app.copy(`${nmd}/clipboard/dist/**/*.*`, `${vnd}/clipboard`);
});

app.task('copy-dragula', function() {
  return app.copy(`${nmd}/dragula/dist/**/*.*`, `${vnd}/dragula`);
});

app.task('copy-dropzone', function() {
  return app.copy([
    `${nmd}/dropzone/dist/min/*.*`, `${nmd}/dropzone/dist/*.{css,js}`
  ], `${vnd}/dropzone`);
});

app.task('copy-flatpickr', function() {
  return app.copy(`${nmd}/flatpickr/dist/**/*.*`, `${vnd}/flatpickr`);
});

app.task('copy-font-awesome', function() {
  return app.copy(`${nmd}/font-awesome/{css,fonts}/**/*.*`, `${vnd}/font-awesome`);
});

app.task('copy-gmaps', function() {
  return app.copy(`${nmd}/gmaps/gmaps*.*`, `${vnd}/gmaps`);
});

app.task('copy-highlight', function() {
  return app.copy(`src/scripts/highlight/**/*.*`, `${vnd}/highlight`);
});

app.task('copy-insignia', function() {
  return app.copy(`${nmd}/insignia/dist/*.*`, `${vnd}/insignia`);
});

app.task('copy-jquery', function() {
  return app.copy(`${nmd}/jquery/dist/*.*`, `${vnd}/jquery`);
});

app.task('copy-jquery-mousewheel', function() {
  return app.copy(`${nmd}/jquery-mousewheel/*.js`, `${vnd}/jquery-mousewheel`);
});

app.task('copy-jquery-steps', function() {
  return app.copy([
    `${nmd}/jquery-steps/demo/css/jquery.steps*.{css,js}`, `${nmd}/jquery-steps/build/**/jquery.steps*.{css,js}`
  ], `${vnd}/jquery-steps`);
});

app.task('copy-jquery.hotkeys', function() {
  return app.copy(`${nmd}/jquery.hotkeys/jquery.hotkeys.*`, `${vnd}/jquery.hotkeys`);
});

app.task('copy-jump.js', function() {
  return app.copy(`${nmd}/jump.js/dist/jump.*`, `${vnd}/jump.js`);
});

app.task('copy-lightgallery', function() {
  return app.copy(`${nmd}/lightgallery/dist/**/*.*`, `${vnd}/lightgallery`);
});

app.task('copy-lightgallery', function() {
  return app.copy(`${nmd}/lightgallery/dist/**/*.*`, `${vnd}/lightgallery`);
});

app.task('copy-metismenu', function() {
  return app.copy(`${nmd}/metismenu/dist/**/*.*`, `${vnd}/metismenu`);
});

app.task('copy-moment', function() {
  return app.copy([
    `${nmd}/moment/moment.js`, `${nmd}/moment/min/**/*.*`
  ], `${vnd}/moment`);
});

app.task('copy-moment-locale', function() {
  return app.copy(`${nmd}/moment/locale/**/*.*`, `${vnd}/moment/locale`);
});

app.task('copy-noty', function() {
  return app.copy(`${nmd}/noty/js/noty/packaged/*.*`, `${vnd}/noty`);
});

app.task('copy-pace', function() {
  return app.copy(`${nmd}/pace-progress/pace*.js`, `${vnd}/pace`);
});

app.task('copy-pace-themes', function() {
  return app.copy(`${nmd}/pace-progress/themes/**/*.*`, `${vnd}/pace/themes`);
});

app.task('copy-perfect-scrollbar', function() {
  return app.copy([
    `${nmd}/perfect-scrollbar/dist/js/*.*`, `${nmd}/perfect-scrollbar/dist/css/*.*`
  ], `${vnd}/perfect-scrollbar`);
});

app.task('copy-quill', function() {
  return app.copy(`${nmd}/quill/dist/*.*`, `${vnd}/quill`);
});

app.task('copy-select2', function() {
  return app.copy(`${nmd}/select2/dist/**/*.*`, `${vnd}/select2`);
});


app.task('copy-in-view', function() {
  return app.copy(`${nmd}/in-view/dist/*.*`, `${vnd}/in-view`);
});

app.task('copy-summernote', function() {
  return app.copy([
    `${nmd}/summernote/dist/*.{js,css}`, `${nmd}/summernote/dist/{font,lang,plugin}/**/*.*`
  ], `${vnd}/summernote`);
});

app.task('copy-tablesorter', function() {
  return app.copy(`${nmd}/tablesorter/dist/**/*.*`, `${vnd}/tablesorter`);
});

app.task('copy-morris', function() {
  return app.copy(`${nmd}/morris.js/morris*.{js,css}`, `${vnd}/morris.js`);
});

app.task('copy-raphael', function() {
  return app.copy(`${nmd}/raphael/raphael*.js`, `${vnd}/raphael`);
});

app.task('copy-sparkline', function() {
  return app.copy(`${nmd}/jquery-sparkline/*sparkline*.js`, `${vnd}/jquery-sparkline`);
});

app.task('copy-fullcalendar', function() {
  return app.copy(`${nmd}/fullcalendar/dist/**/*.*`, `${vnd}/fullcalendar`);
});

module.exports = app;
