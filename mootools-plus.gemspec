$:.push File.expand_path('../lib', __FILE__)

# Maintain your gem's version:
require 'mootools-plus/version'

# Describe your gem and declare its dependencies:
Gem::Specification.new do |s|
  s.name        = 'mootools-plus'
  s.version     = MootoolsPlus::VERSION
  s.authors     = ['caedes']
  s.homepage    = 'https://github.com/caedes/mootools-plus'
  s.summary     = 'mootools-plus provides Ruby methods to Javascript MooTools core classes and plus'

  s.files = Dir["{app,config,db,lib}/**/*"] + ['MIT-LICENSE', 'Rakefile', 'README.md']
  s.test_files = Dir['test/**/*']

  s.add_dependency 'rails', '~> 3.2.3'

  s.add_development_dependency 'sqlite3'
end
