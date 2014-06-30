module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		sass: {
	      options: {
	        quiet: true,
	        precision: 5
	      },
	      dev: {
	        options: {
	          sourcemap: true,
	          style: 'expanded',
	          lineNumbers: true,
	          noCache: true
	        },
	        files: {
				'a/css/src/screen.css': 'a/sass/src/screen.scss', // Source
			}
	      },
	      prod: {
	        options: {
	          sourcemap: false,
	          style: 'compressed'
	        },
			files: {
				'a/css/src/screen.css': 'a/sass/src/screen.scss', // Source
			}
	      }
	    },

			// handlebars: {
			// 	compile: {
			// 		options: {
			// 			namespace: "PJ.templates",
			// 			processName: function(filePath) {
			// 				filePath = filePath.replace('a/js/tpl/','');
			// 				return filePath.replace('.hbs','');
			// 			}
			// 		},
			// 		files: {
			// 			'a/js/custom/templates.js': 'a/js/tpl/**/*.hbs'
			// 		}
			// 	}
			// },

		 //    uglify: {
		 //      dev: {
		 //        options: {
		 //          beautify: true,
		 //          mangle: false,
		 //          compress: false
		 //        },
		 //        files: {
			// 		'a/js/src/global.js':
			// 		[
		 //              // Include:
			// 		'a/js/src/plugins/*.js', // All JS in the 'src'-specific plugins folder
			// 		'a/js/src/custom/*.js'
		 //              // Exclude:
		 //              // '!/path'
		 //            ],
			// 		'a/js/main.min.js':
		 //            [
		 //              // Include:
			// 		'a/js/main.js'
		 //              // Exclude:
		 //              // '!/path'
		 //            ]
		 //        }
		 //      },
		 //      prod: {
		 //        options: {
		 //          beautify: false,
		 //          mangle: true,
		 //          compress: true
		 //        },
		 //        files: {
			// 		'a/js/src/global.js':
			// 		[
		 //              // Include:
			// 		'a/js/src/plugins/*.js', // All JS in the 'src'-specific plugins folder
			// 		'a/js/src/custom/*.js',
		 //              // Exclude:
		 //              '!a/js/src/plugins/livereload.js'
		 //            ],
			// 		'a/js/main.min.js':
		 //            [
		 //              // Include:
			// 		'a/js/main.js'
		 //              // Exclude:
		 //              // '!/path'
		 //            ]
		 //        }
		 //      }
		 //    },


			// grunticon: {
			// 	myIcons: {
			// 		files: [{
			// 			expand: true,
			// 			cwd: 'a/grunticon',
			// 			src: ['*.svg', '*.png'],
			// 			dest: "a/img/icons"
			// 		}],
			// 		options: {

			// 		}
			// 	}
			// },

			shell: {
				jekyllBuild: {
					command: 'jekyll build'
				}
			},

			watch: {
				options: {
					livereload: true,
				},
				any: {
					files: ['_posts/**/*.md','**/*.html','!**/_compiled/**','projects/**.md'],
					tasks: ['shell:jekyllBuild']
				},
				css: {
					files: ['a/**/*.scss','design/code/modules/**/*.scss','design/wireframes/**/*.scss'],
					tasks: ['sass:dev','shell:jekyllBuild']
				},
				js: {
					files: ['a/js/src/custom/*.js','a/js/**/*.js','design/code/modules/**/*.js','a/js/**/*.hbs'],
					tasks: ['handlebars','uglify:dev','shell:jekyllBuild']
				}
			}

		});

require('load-grunt-tasks')(grunt);

grunt.registerTask('default', ['sass:dev','shell','watch']);
};
