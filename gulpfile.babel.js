import gulp from 'gulp'
import browserSync from 'browser-sync'

// js
import sourcemaps from 'gulp-sourcemaps'
import babel from 'gulp-babel'
import concat from 'gulp-concat'

// sass
import autoprefixer from 'gulp-autoprefixer'
import sass from 'gulp-sass'
import minifyCss from 'gulp-minify-css'

const baseDir = './'
const srcDir = `${baseDir}src`
const distDir = 'dist'
const optional = ["es7.decorators"]
const modules = 'system'

// intialize browserSync
browserSync.create()


gulp.task('build:server', () => {
    return gulp.src('./index.js')
        .pipe(babel({modules: 'common'}))
        .pipe(gulp.dest(distDir))
})

gulp.task('build:js', () => {
    return gulp.src(`${ srcDir }/**/*.js`)
        .pipe(sourcemaps.init())
        .pipe(babel({optional, modules}))
        .pipe(concat('all.js'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(distDir))
})

gulp.task('watch:js', ['build:js'], browserSync.reload)


gulp.task('build:sass', () => {
  return gulp.src(`${ srcDir }/**/*.scss`)
    .pipe(autoprefixer('last 2 versions'))
    .pipe(sass())
    .pipe(gulp.dest(distDir))
    .pipe(browserSync.stream())
})


gulp.task('serve', () => {
    browserSync.init({ server: { baseDir }})
    gulp.watch(`${ srcDir }/**/*.js`, ['watch:js'])
    gulp.watch(`${ srcDir }/**/*.scss`, ['build:sass'])
    gulp.watch('./**/*.html', browserSync.reload)
})

gulp.task('default', ['build:js', 'build:sass', 'serve'])
gulp.task('build', ['build:js', 'build:sass', 'build:server'])
