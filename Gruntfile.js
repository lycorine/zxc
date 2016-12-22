module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      main: {
        src: ['dev/_js/**/*.js', '!dev/_js/vendor/*.js'],
        options: {
          bitwise: true,
          browser: true,
          curly: true,
          eqeqeq: true,
          forin: true,
          latedef: true,
          noarg: true,
          nonew: true,
          globals: {
            '$': false,
            'jQuery': false,
          }
        },
      }
    },
    uglify: {
      script: {
        expand: true,
        cwd: 'dev/_js',
        src: ['**/*.js', '!**/*.min.js', '!vendor/*.js'],
        dest: 'dist/content/js',
        ext: '.min.js',
        extDot: 'last'
      },
      vendor: {
        expand: true,
        cwd: 'dev/_js/vendor',
        src: ['**/*.js', '!**/*.min.js'],
        dest: 'dist/scripts/vendor',
        ext: '.min.js',
        extDot: 'last'
      }
    },
    sass: {
      options: {
        sourceMap: true,
        outputStyle: 'compressed'
      },
      dist: {
        files: {
          'dist/content/css/build.min.css': 'dev/_css/main.scss'
        }
      }
    },
    postcss: {
      options: {
          map: false,
          processors: [
            require('pixrem')({
              rootValue: 16,
              replace: false,
              atrules: true,
              html: true,
              browsers: 'ie >= 9',
              unitPrecision: 5
            }),
            require('autoprefixer')({
              browsers: ['> 2%', 'Explorer >= 9']
            }),
          ]
      },
      dist: {
          src: 'dist/content/css/build.min.css'
      }
    },
    imagemin: {
      all: {
        options: {
          optimizationLevel: 5,
          progressive: true,
          interlaced: true
        },
        files: [{
          expand: true,
          cwd: 'dev/_img/',
          src: ['**/*.{png,jpg,gif,svg}'],
          dest: 'dist/content/img/'
        }]
      }
    },
    watch: {
      javascript: {
        files: 'dev/_js/**/*.js',
        tasks: 'js'
      },
      sass: {
        files: 'dev/_css/**/*.scss',
        tasks: 'css'
      }
    },
    copy: {
      fonts: {
        expand: true,
        cwd: 'dev/_fonts/',
        src: '**/*',
        dest: 'dist/content/fonts/',
      },
      js: {
        expand: true,
        cwd: 'dev/_js/',
        src: ['**/*.min.js', '!vendor/*.js'],
        dest: 'dist/content/js/',
      },
      vendor: {
        expand: true,
        cwd: 'dev/_js/',
        src: 'vendor/*.min.js',
        dest: 'dist/scripts/',
      },
    },
  });

  // Load the plugins.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-postcss');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-newer');
  grunt.loadNpmTasks('grunt-contrib-copy');

  // Tasks.
  grunt.registerTask('default', ['uglify', 'sass', 'postcss', 'imagemin:all']);
  grunt.registerTask('js', ['jshint', 'uglify', 'copy:js', 'copy:vendor']);
  grunt.registerTask('css', ['sass', 'postcss']);
  grunt.registerTask('image', ['newer:imagemin:all']);
  grunt.registerTask('font', ['newer:copy:fonts']);

};
