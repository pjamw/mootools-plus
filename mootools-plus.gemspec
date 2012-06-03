require File.expand_path('../lib/mootools-plus/rails/version', __FILE__)

Gem::Specification.new do |s|
  s.name        = 'mootools-plus'
  s.version     = MootoolsPlus::Rails::VERSION
  s.authors     = ['caedes']
  s.email       = ['laurentromain@gmail.com']
  s.homepage    = 'https://github.com/caedes/mootools-plus'
  s.summary     = 'mootools-plus provides helpers and Ruby-like methods to Javascript MooTools core classes and plus'
  s.description = s.summary

  s.files        = `git ls-files`.split("\n")

  s.add_dependency 'railties', '>= 3.1.0', '< 5.0'

  s.require_path = 'lib'
end
