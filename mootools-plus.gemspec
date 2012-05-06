require File.expand_path('../lib/mootools-plus/version', __FILE__)

Gem::Specification.new do |s|
  s.name        = 'mootools-plus'
  s.version     = MootoolsPlus::VERSION
  s.authors     = ['caedes']
  s.homepage    = 'https://github.com/caedes/mootools-plus'
  s.summary     = 'mootools-plus provides Ruby methods to Javascript MooTools core classes and plus'

  s.files        = `git ls-files`.split("\n")

  s.add_dependency "railties", '>= 3.2.0', '< 5.0'

  s.require_path = 'lib'
end