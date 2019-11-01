const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.less('resources/less/_master.less', 'public/css/master.css')
    .js('resources/js/_master.js', 'public/js/master.js')
    .browserSync('avtoelectrikminsk.by.local');
