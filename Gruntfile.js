module.exports = function(grunt) {
	    grunt.initConfig({
                    pkg: grunt.file.readJSON('package.json'),
					 uglify: {
					            //文件头部输出信息
					            options: {
					                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
					            },
					            my_target: {
					                files: [
					                    {
					                        expand: true,
					                        //相对路径
					                        cwd: 'src/sxl-wx/js/',
					                        src: '*.js',
					                        dest: 'build/sxl-wx/js/',
					                        ext: '.js'
					                    }
					                ]
					            }
					        },
									       
//				       对指定js文件的语法进行检查,看是否有误,并提示检查结果信息
//					  jshint: {
//					    options: {    /*参数设置,若不设置，则使用默认值*/
//					      curly: true,
//					      eqeqeq: true,
//					      eqnull: true,
//					      browser: true,
//					      globals: {
//					        jQuery: true
//					      },
//					    },
//					    uses_defaults: ['src/sxl-wx/js/*.js', 'src/sxl-wx/js/*.js'],   /*要检查的js文件路径*/
//					  },		
					    jshint: {
					        all: [
					            'src/sxl-wx/js/*.js'
					             ],
					        options: {
					            browser: true,            
					            devel: true               
					            }
					    },
					  

			        imagemin: {
			            dist: {
			                options: {
			                    optimizationLevel: 1 
			                },
			                files: [{
			                    expand: true,
			                    cwd: 'src/sxl-wx/img/',
			                    src: ['*.{jpg,png,jpeg,gif}'], 
			                    dest: 'build/sxl-wx/img/' 
			                }]
			            }
			        },
			        

				      watch: {
				          options: {   
				              livereload: true
				          },
				          scripts: {  
				              files: ['src/sxl-wx/js/*.js'],
				              tasks: ['jshint']         
				          },     
				          html: {    
				              files: ['src/sxl-wx/*.html']
				          }, 
						 css: {    
							    files: ['src/sxl-wx/css/*.css'],
							    options: {
							        livereload: 35729
					              }
                        }    
				    },
					cssmin: {
					  minify: {
					    expand: true,       
					    cwd: 'src/sxl-wx/css/',    
					    src: ['*.css'],   
					    dest: 'build/sxl-wx/css/',   
					    ext: '.css'       
					  }
					},
					copy: {
					    html: {expand: true, cwd: 'src/sxl-wx', src: '*.html', dest: 'build/sxl-wx'}
					},
					compress: {
					  main: {
					    options: {
					      archive: 'compress/sxl-wx.zip'
					    },
					    files: [
					      {
					      		cwd: 'build/',
						      expand: true,
						      src: [ '**' ]
					      	},  ]
					  }
					},
				    sass: {
				        dist: {
				            files: [{
				                expand: true,
				                cwd: 'src/sxl-wx/scss/',
				                src: ['*.scss'],
				                dest: 'src/sxl-wx/scss/',
				                ext: '.css'
				            }]
				        }
				    },
					concat : {
			            css : {
			                src: ['src/sxl-wx/css/style.css','src/sxl-wx/scss/style.css'],
			                dest:'src/sxl-wx/css/style.css'
			            }
			        },
	    }); 
	    

    grunt.loadNpmTasks('grunt-contrib-imagemin'); 
    grunt.loadNpmTasks('grunt-contrib-jshint'); 
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-cssmin'); 
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-compress');
    grunt.loadNpmTasks('grunt-contrib-sass');


//	grunt.event.on('watch', function(action, filepath, target) {
//		grunt.log.writeln(target + ': ' + filepath + ' has ' + action);
//	});
    grunt.registerTask('watch',['watch']);                                  
    grunt.registerTask('default', ['imagemin','cssmin','jshint','uglify','copy','compress']);  

} 
  
