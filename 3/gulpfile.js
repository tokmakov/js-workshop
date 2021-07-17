'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const webpack = require('webpack-stream');
const browsersync = require('browser-sync');

const dist = './dist/';

/*
 * ЗАДАЧА COPY-HTML. Копирует html-файлы из директории src в
 * директорию dist и обновляет текущую страницу в браузере
 */
gulp.task('copy-html', () => {
    return gulp.src('./src/*.html')
                .pipe(gulp.dest(dist))
                .pipe(browsersync.stream());
});

/*
 * ЗАДАЧА BUILD-JS. Транспиляция исходных js-файлов + минификация js-кода +
 * создание source-map и создание файла dist/script.js для dev-сервера
 */
gulp.task('build-js', () => {
    return gulp.src('./src/js/main.js')
                .pipe(webpack({
                    mode: 'development',
                    output: {
                        filename: 'script.js'
                    },
                    watch: false,
                    devtool: 'source-map',
                    module: {
                        rules: [
                          {
                            test: /\.m?js$/,
                            exclude: /(node_modules|bower_components)/,
                            use: {
                              loader: 'babel-loader',
                              options: {
                                presets: [['@babel/preset-env', {
                                    debug: true,
                                    corejs: 3,
                                    useBuiltIns: 'usage'
                                }]]
                              }
                            }
                          }
                        ]
                      }
                }))
                .pipe(gulp.dest(dist))
                .on('end', browsersync.reload);
});

/*
 * ЗАДАЧА BUILD-CSS. Создание css-файла на основе sass-файлов
 */
gulp.task('build-css', function () {
    return gulp.src('./src/assets/sass/*.sass')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./src/assets/css'))
        .on('end', browsersync.reload);
});

/*
 * ЗАДАЧА COPY-ASSETS. Копирует файлы из директории src/assets в
 * директорию dist/assets и обновляет страницу в браузере
 */
gulp.task('copy-assets', () => {
    return gulp.src('./src/assets/**/*.*')
        .pipe(gulp.dest(dist + '/assets'))
        .on('end', browsersync.reload);
});

/*
 * ЗАДАЧА WATCH. Запускает веб-сервер browsersync на порту 400, чтобы он
 * обслуживал директорию dist. При изменении файла index.html, файлов из
 * assets или js — запустить задачи copy-html, copy-assets, build-js
 */
gulp.task('watch', () => {
    browsersync.init({
        server: {
            baseDir: './dist/',
            serveStaticOptions: {
                extensions: ['html']
            }
        },
        port: 4000,
        notify: true
    });
    
    gulp.watch('./src/*.html', gulp.parallel('copy-html'));
    gulp.watch('./src/assets/sass/*.sass', gulp.parallel('build-css'));
    gulp.watch('./src/js/**/*.js', gulp.parallel('build-js'));
    gulp.watch('./src/assets/**/*.*', gulp.parallel('copy-assets'));
});

/*
 * ЗАДАЧА BUILD. Запускает задачи copy-html, copy-assets, build-js
 */
gulp.task('build', gulp.parallel('copy-html', 'copy-assets', 'build-js'));

/*
 * ЗАДАЧА BUILD-PROD-JS. Транспиляция исходных js-файлов + минификация
 * js-кода и создание файла dist/script.js для production-сервера
 */
gulp.task('build-prod-js', () => {
    return gulp.src('./src/js/main.js')
                .pipe(webpack({
                    mode: 'production',
                    output: {
                        filename: 'script.js'
                    },
                    module: {
                        rules: [
                            {
                                test: /\.m?js$/,
                                exclude: /(node_modules|bower_components)/,
                                use: {
                                    loader: 'babel-loader',
                                    options: {
                                        presets: [['@babel/preset-env', {
                                            corejs: 3,
                                            useBuiltIns: 'usage'
                                        }]]
                                    }
                                }
                            }
                        ]
                    }
                }))
                .pipe(gulp.dest(dist));
});

/*
 * ЗАДАЧА DEFAULT (по умолчанию, если задача не указана)
 */
gulp.task('default', gulp.parallel('watch', 'build'));
