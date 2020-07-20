import gulp from 'gulp';
import sass from 'gulp-sass';
import autoprefixer from 'gulp-autoprefixer';
import minifyCSS from "gulp-csso";
import del from "del";
import browserify from "gulp-browserify";
import babel from "babelify";

sass.compiler = require("node-sass");

const paths = {
    styles: {
        src: "assets/scss/styles.scss",
        dest: "src/static/styles",
        watch: "assets/scss/**/*.scss" 
    },
    js: {
        src: "assets/js/main.js", // 결국 수정하고 싶은 파일은 오직 하나(import -> 다른 파일 변화 영향)
        dest: "src/static/js",
        watch: "assets/js/**/*.js" 
    }	  
};

/* 항상 return 필요 */
const clean = () => del("src/static"); // 해당 경로 파일 삭제

const js = () =>
  gulp
    .src(paths.js.src)
    .pipe(
        browserify({
          transform: [
            babel.configure({
              presets: ["@babel/preset-env"]
            })
          ]
        })
    )
    .pipe(gulp.dest(paths.js.dest));

const styles = () =>
    gulp
    .src(paths.styles.src)
    .pipe(sass())
    .pipe(autoprefixer({
        cascade: false
    }))
    .pipe(minifyCSS())
    .pipe(gulp.dest(paths.styles.dest));

function watchFiles(){
    // 해당 폴더 확장자 같은 어떤 것이든 변경 -> 즉각적으로 그 파일 하나만 컴파일
    gulp.watch(paths.styles.watch, styles); 
    gulp.watch(paths.js.watch, js);
}

const dev = gulp.series([clean, styles, js, watchFiles]); // 차례대로 수행

export const build = gulp.series(clean, styles, js);

export default dev; // 하나의 명령어로도 작동가능하게