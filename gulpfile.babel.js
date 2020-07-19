import gulp from 'gulp';
import sass from 'gulp-sass';
import autoprefixer from 'gulp-autoprefixer';
import minifyCSS from "gulp-csso";

sass.compiler = require("node-sass");

const paths = {
    styles: {
        src: "assets/scss/styles.scss",
        dest: "src/static/styles",
        watch: "assets/scss/**/*.scss" 
    }
};

function styles(){
    return gulp
    .src(paths.styles.src)
    .pipe(sass())
    .pipe(autoprefixer({
        cascade: false
    }))
    .pipe(minifyCSS())
    .pipe(gulp.dest(paths.styles.dest)); 
}

function watchFiles(){
    // 해당 폴더 확장자 같은 어떤 것이든 변경 -> 즉각적으로 그 파일 하나만 컴파일
    gulp.watch(paths.styles.watch, styles); 
}

const dev = gulp.series([styles, watchFiles]); // 차례대로 수행

export default dev; // 하나의 명령어로도 작동가능하게