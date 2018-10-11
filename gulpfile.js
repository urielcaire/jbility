var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var pump = require('pump');
var del = require('del');

var paths = {
    in: {
        js: 'src/js/*.js',
        css: 'src/css/*.css',
        img: 'src/img/**/*',
        example: 'src/example/**/*'
    },
    out: {
        js: 'dist/jbility/js',
        css: 'dist/jbility/css',
        img: 'dist/jbility/img',
        example: 'dist/example'
    }
};

gulp.task('clean', () => {
    return del(['dist']);
});

gulp.task('minify-js', cb => {
    pump([
        gulp.src(paths.in.js),
        gulp.dest(paths.out.js),
        uglify(),
        rename({suffix: '.min'}),
        gulp.dest(paths.out.js)
    ], cb);
});

gulp.task('minify-css', cb => {
    pump([
        gulp.src(paths.in.css),
        gulp.dest(paths.out.css),
        cleanCSS({compatibility: 'ie8'}),
        rename({suffix: '.min'}),
        gulp.dest(paths.out.css)
    ], cb);
});

gulp.task('copy-images', cb => {
    pump([
        gulp.src(paths.in.img),
        gulp.dest(paths.out.img)
    ], cb);
});

gulp.task('copy-example', cb => {
    pump([
        gulp.src(paths.in.example),
        gulp.dest(paths.out.example)
    ], cb);
})

gulp.task('watch', () => {
    gulp.watch(paths.in.js, ['minify-js']);
    gulp.watch(paths.in.css, ['minify-css']);
    gulp.watch(paths.in.image, ['copy-images']);
    gulp.watch(paths.in.example, ['copy-example']);
})

gulp.task('all', ['minify-js', 'minify-css', 'copy-images', 'copy-example']);
gulp.task('build', ['all']);
gulp.task('default', ['watch', 'all']);