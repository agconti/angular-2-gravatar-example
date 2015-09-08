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
const publicDir = `${baseDir + distDir}/public`
const optional = ["es7.decorators"]
const modules = 'system'

// initialize browserSync
browserSync.create()


gulp.task('build:server', () => {
    return gulp.src(`${ srcDir }/index.js`)
        .pipe(babel({modules: 'common'}))
        .pipe(gulp.dest(__dirname))
})

gulp.task('build:js', () => {
    return gulp.src(`${ srcDir }/**/*.js`)
        .pipe(sourcemaps.init())
        .pipe(babel({optional, modules}))
        .pipe(concat('all.js'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(publicDir))
})

gulp.task('build:sass', () => {
  return gulp.src([`${ srcDir }/**/*.scss`, `!${ srcDir }/index.js`])
    .pipe(autoprefixer('last 2 versions'))
    .pipe(sass())
    .pipe(gulp.dest(publicDir))
    .pipe(browserSync.stream())
})

gulp.task('serve', () => {
    browserSync.init({ server: { baseDir }})
    gulp.watch(`${ srcDir }/**/*.js`, ['watch:js'])
    gulp.watch(`${ srcDir }/**/*.scss`, ['build:sass'])
    gulp.watch('./**/*.html', browserSync.reload)
})

gulp.task('watch:js', ['build:js'], browserSync.reload)
gulp.task('default', ['build:js', 'build:sass', 'serve'])
gulp.task('build', ['build:js', 'build:sass', 'build:server'])
