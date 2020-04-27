/* eslint-disable import/no-extraneous-dependencies */
const assemble = require('assemble');

const nmd = 'node_modules';
const vnd = 'public/assets/vendor';

const app = assemble();

/**
 * run the code
 * assemble copy
 */
app.task('copy', ['copy-*']);

app.task('copy-lib', () => app.copy('src/scripts/**/*.*', `${vnd}`));

/**
 * copy from node_modules
 */

app.task('copy-jqueryui', () => app.copy(`${nmd}/components-jqueryui/*.js`, `${vnd}/jquery-ui`));

app.task('copy-counterup', () => app.copy(`${nmd}/counterup/*.js`, `${vnd}/counterup`));

app.task('copy-knob', () => app.copy([
  `${nmd}/jquery-knob/js/*.*`, `${nmd}/jquery-knob/dist/*.*`,
], `${vnd}/jquery-knob`));

app.task('copy-jquery-validation', () => app.copy(`${nmd}/jquery-validation/dist/*.*`, `${vnd}/jquery-validation`));

app.task('copy-flot', () => app.copy(`${nmd}/flot/dist/es5/jquery.*.js`, `${vnd}/flot`));

app.task('copy-datatables', () => app.copy(`${nmd}/datatables/media/**/*.*`, `${vnd}/datatables`));

app.task('copy-bootstrap-touchspin', () => app.copy(`${nmd}/bootstrap-touchspin/dist/*.*`, `${vnd}/bootstrap-touchspin`));

app.task('copy-screenfull', () => app.copy(`${nmd}/screenfull/dist/*.js`, `${vnd}/screenfull`));

app.task('copy-onoffcanvas', () => app.copy(`${nmd}/onoffcanvas/dist/onoffcanvas.*`, `${vnd}/onoffcanvas`));

app.task('copy-push.js', () => app.copy(`${nmd}/push.js/{push,push.min}.js`, `${vnd}/push.js`));

app.task('copy-loaders.css', () => app.copy(`${nmd}/loaders.css/*.{css,js}`, `${vnd}/loaders.css`));

app.task('copy-waypoints', () => app.copy(`${nmd}/waypoints/lib/**/*.js`, `${vnd}/waypoints`));

app.task('copy-ion-rangeslider', () => app.copy(`${nmd}/ion-rangeslider/{js,css,img}/*.*`, `${vnd}/ion-rangeslider`));

app.task('copy-bootstrap-slider', () => app.copy(`${nmd}/bootstrap-slider/dist/**/*.*`, `${vnd}/bootstrap-slider`));

app.task('copy-jqvmap', () => app.copy(`${nmd}/jqvmap/dist/**/*.*`, `${vnd}/jqvmap`));

app.task('copy-jqvmap-sample', () => app.copy(`${nmd}/jqvmap/examples/js/*.*`, `${vnd}/jqvmap`));

app.task('copy-metis-canvas', () => app.copy(`${nmd}/metis-canvas/dist/*.*`, `${vnd}/metis-canvas`));

app.task('copy-animate', () => app.copy(`${nmd}/animate.css/*.css`, `${vnd}/animate.css`));

app.task('copy-autosize', () => app.copy(`${nmd}/autosize/dist/*.*`, `${vnd}/autosize`));

app.task('copy-countdown', () => app.copy(`${nmd}/jquery-countdown/dist/*.*`, `${vnd}/countdown`));

app.task('copy-bootstrap', () => app.copy(`${nmd}/bootstrap/dist/**/*.*`, `${vnd}/bootstrap`));

app.task('copy-bootstrap-colorpicker', () => app.copy(`${nmd}/bootstrap-colorpicker/dist/**/*.*`, `${vnd}/bootstrap-colorpicker`));

app.task('copy-bootstrap-duallistbox', () => app.copy(`${nmd}/bootstrap-duallistbox/dist/**/*.*`, `${vnd}/bootstrap-duallistbox`));

app.task('copy-bootstrap-wysiwyg', () => app.copy(`${nmd}/bootstrap-wysiwyg/{js,css}/*.*`, `${vnd}/bootstrap-wysiwyg`));

app.task('copy-chart.js', () => app.copy(`${nmd}/chart.js/dist/**/*.*`, `${vnd}/chart.js`));

app.task('copy-cleave.js', () => app.copy(`${nmd}/cleave.js/dist/**/*.*`, `${vnd}/cleave.js`));

app.task('copy-clipboard', () => app.copy(`${nmd}/clipboard/dist/**/*.*`, `${vnd}/clipboard`));

app.task('copy-dragula', () => app.copy(`${nmd}/dragula/dist/**/*.*`, `${vnd}/dragula`));

app.task('copy-dropzone', () => app.copy([
  `${nmd}/dropzone/dist/min/*.*`, `${nmd}/dropzone/dist/*.{css,js}`,
], `${vnd}/dropzone`));

app.task('copy-flatpickr', () => app.copy(`${nmd}/flatpickr/dist/**/*.*`, `${vnd}/flatpickr`));

app.task('copy-font-awesome', () => app.copy(`${nmd}/font-awesome/{css,fonts}/**/*.*`, `${vnd}/font-awesome`));

app.task('copy-gmaps', () => app.copy(`${nmd}/gmaps/gmaps*.*`, `${vnd}/gmaps`));

app.task('copy-highlight', () => app.copy('src/scripts/highlight/**/*.*', `${vnd}/highlight`));

app.task('copy-insignia', () => app.copy(`${nmd}/insignia/dist/*.*`, `${vnd}/insignia`));

app.task('copy-jquery', () => app.copy(`${nmd}/jquery/dist/*.*`, `${vnd}/jquery`));

app.task('copy-jquery-mousewheel', () => app.copy(`${nmd}/jquery-mousewheel/*.js`, `${vnd}/jquery-mousewheel`));

app.task('copy-jquery-steps', () => app.copy([
  `${nmd}/jquery-steps/demo/css/jquery.steps*.{css,js}`, `${nmd}/jquery-steps/build/**/jquery.steps*.{css,js}`,
], `${vnd}/jquery-steps`));

app.task('copy-jquery.hotkeys', () => app.copy(`${nmd}/jquery.hotkeys/jquery.hotkeys.*`, `${vnd}/jquery.hotkeys`));

app.task('copy-jump.js', () => app.copy(`${nmd}/jump.js/dist/jump.*`, `${vnd}/jump.js`));

app.task('copy-lightgallery', () => app.copy(`${nmd}/lightgallery/dist/**/*.*`, `${vnd}/lightgallery`));

app.task('copy-lightgallery', () => app.copy(`${nmd}/lightgallery/dist/**/*.*`, `${vnd}/lightgallery`));

app.task('copy-metismenu', () => app.copy(`${nmd}/metismenu/dist/**/*.*`, `${vnd}/metismenu`));

app.task('copy-moment', () => app.copy([
  `${nmd}/moment/moment.js`, `${nmd}/moment/min/**/*.*`,
], `${vnd}/moment`));

app.task('copy-moment-locale', () => app.copy(`${nmd}/moment/locale/**/*.*`, `${vnd}/moment/locale`));

app.task('copy-noty', () => app.copy(`${nmd}/noty/js/noty/packaged/*.*`, `${vnd}/noty`));

app.task('copy-pace', () => app.copy(`${nmd}/pace-progress/pace*.js`, `${vnd}/pace`));

app.task('copy-pace-themes', () => app.copy(`${nmd}/pace-progress/themes/**/*.*`, `${vnd}/pace/themes`));

app.task('copy-perfect-scrollbar', () => app.copy([
  `${nmd}/perfect-scrollbar/dist/js/*.*`, `${nmd}/perfect-scrollbar/dist/css/*.*`,
], `${vnd}/perfect-scrollbar`));

app.task('copy-quill', () => app.copy(`${nmd}/quill/dist/*.*`, `${vnd}/quill`));

app.task('copy-select2', () => app.copy(`${nmd}/select2/dist/**/*.*`, `${vnd}/select2`));


app.task('copy-in-view', () => app.copy(`${nmd}/in-view/dist/*.*`, `${vnd}/in-view`));

app.task('copy-summernote', () => app.copy([
  `${nmd}/summernote/dist/*.{js,css}`, `${nmd}/summernote/dist/{font,lang,plugin}/**/*.*`,
], `${vnd}/summernote`));

app.task('copy-tablesorter', () => app.copy(`${nmd}/tablesorter/dist/**/*.*`, `${vnd}/tablesorter`));

app.task('copy-morris', () => app.copy(`${nmd}/morris.js/morris*.{js,css}`, `${vnd}/morris.js`));

app.task('copy-raphael', () => app.copy(`${nmd}/raphael/raphael*.js`, `${vnd}/raphael`));

app.task('copy-sparkline', () => app.copy(`${nmd}/jquery-sparkline/*sparkline*.js`, `${vnd}/jquery-sparkline`));

app.task('copy-fullcalendar', () => app.copy(`${nmd}/fullcalendar/dist/**/*.*`, `${vnd}/fullcalendar`));

module.exports = app;
