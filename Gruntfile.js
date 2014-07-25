/* globals module, require */

module.exports = function(grunt) {

  "use strict";

  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),

    sass: {
      options: {
        quiet: true,
        precision: 5
      },
      yourMom: {
        options: {
          sourcemap: true,
          style: "compressed"
        },
        files: {
          "_site/css/global.css": "scss/global.scss"
        }
      }
    },

    autoprefixer: {
      options: {
        // Task-specific options go here.
      },
      yourMom: {
        src: "src/css/file.css",
        dest: "dest/css/file.css"
      }
    },

    shell: {
      jekyllBuild: {
        command: "jekyll build"
      }
    },

    watch: {
      options: {
        livereload: true
      },
      any: {
        files: ["_posts/*.md","index.html","projects/**.md"],
        tasks: ["shell:jekyllBuild"]
      },
      css: {
        files: ["scss/*.scss"],
        tasks: ["sass:yourMom"]
      },
      js: {
        files: ["a/js/src/custom/*.js","a/js/**/*.js","design/code/modules/**/*.js","a/js/**/*.hbs"],
        tasks: ["handlebars","uglify:dev","shell:jekyllBuild"]
      }
    }

  });

  require("load-grunt-tasks")(grunt);

  grunt.registerTask("default", ["sass:yourMom", "shell", "watch"]);

};
