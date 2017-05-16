module.exports = function(grunt) {
  'use strict'

  require('load-grunt-tasks')(grunt)
  require('time-grunt')(grunt)

  // project configuration
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    postcss: {
      options: {
        map: false,
        processors: [
          require('autoprefixer')({
            browsers: [
              'Android 2.3',
              'Android >= 4',
              'Chrome >= 35',
              'Edge >= 12',
              'Explorer >= 10',
              'Firefox >= 38',
              'iOS >= 8',
              'Opera >= 12',
              'Safari >= 8'
            ]
          })
        ]
      },
      common: {
        src: 'common/common.css'
      },
      desktop: {
        src: 'desktop/desktop.css'
      },
      mobile: {
        src: 'mobile/mobile.css'
      }
    },

    sass: {
      options: {
        precision: 6,
        sourcemap: 'none',
        style: 'expanded'
      },
      common: {
        dest: 'common/common.css',
        src: 'scss/common.scss'
      },
      desktop: {
        dest: 'desktop/desktop.css',
        src: 'scss/desktop.scss'
      },
      mobile: {
        dest: 'mobile/mobile.css',
        src: 'scss/mobile.scss'
      }
    },

    scsslint: {
      options: {
        config: 'scss/.scss-lint.yml'
      },
      project: ['scss/**/*.scss']
    },

    // update package.json packages
    devUpdate: {
      default: {
        options: {
          semver: false,
          updateType: 'prompt'
        }
      }
    }
  })

  // task registration
  grunt.registerTask(
    'default',
    [
      'sass',
      'postcss'
    ]
  )
}
