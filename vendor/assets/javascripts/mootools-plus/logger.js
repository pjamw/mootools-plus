if (window.MooTools) {
  var Logger = new Class()

  Logger.log = function(param){
    Logger.trace(param, 'log')
  }

  Logger.info = function(param){
   Logger.trace(param, 'info')
  }

  Logger.error = function(param){
   Logger.trace(param, 'error')
  }

  Logger.warning = function(param){
    Logger.trace(param, 'warning')
  }

  Logger.warn = Logger.warning

  Logger.trace = function(param, level){
    if (console != undefined) {
      switch (level) {
        case 'log':
          if (console.log != undefined) console.log(param)
          break
        case 'warning':
          if (console.warn != undefined) console.warn(param)
          break
        case 'info':
          if (console.info != undefined) console.info(param)
          break
        case 'error':
          if (console.error != undefined) console.error(param)
          break
      }
    }
  }
}
else {
  if (console && console.error) console.error('Mootools is not yet installed.')
}
