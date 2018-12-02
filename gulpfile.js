const { series, src, dest } = require('gulp');
const del = require('del');


async function cleanVendorFiles(cb){
    
        await del(['./assets/vendor']);
    
        cb();    
}

async function copyVendorFiles(cb){
    src([
        './node_modules/bootstrap/dist/**/*',
        '!./node_modules/bootstrap/dist/css/bootstrap-grid*',
        '!./node_modules/bootstrap/dist/css/bootstrap-reboot*'
      ])
      .pipe(dest('./assets/vendor/bootstrap'))
  
    // Font Awesome
    src([
        './node_modules/@fortawesome/**/css/all*',
        './node_modules/@fortawesome/**/webfonts/*'
      ])
      .pipe(dest('./assets/vendor/fontawesome'))
  
    // jQuery
    src([
        './node_modules/jquery/dist/*',
        '!./node_modules/jquery/dist/core.js'
      ])
      .pipe(dest('./assets/vendor/jquery'))

      // CleanBlog
    src([
        './node_modules/startbootstrap-clean-blog/**/css/*',
        './node_modules/startbootstrap-clean-blog/**/js/*',
        '!./node_modules/startbootstrap-clean-blog/**/js/contact*',
        '!./node_modules/startbootstrap-clean-blog/**/js/jqBootstrap*',
        '!./node_modules/startbootstrap-clean-blog/vendor/**',
      ])
      .pipe(dest('./assets/vendor/clean-blog'))



    cb();

}


exports.default = series(cleanVendorFiles, copyVendorFiles);