if (window.MooTools) {
  Array.implement({
    getFirst: function(n){
      return (n || n === 0) ? this.slice(0, n) : this[0]
    },

    getLast: function(n){
      if (n >= this.length) return this
      return (n || n === 0) ? this.slice(this.length - n, this.length) : this[this.length - 1]
    },

    compact: function() {
      for (var i = 0, length = this.length; i < length; i++) {
        var el = this.shift()
        if (el != undefined && el != null && el != '' || el == 0) this.push(el)
      }
      return this
    },

    deleteIf: function(fn){
      for (var i = 0, length = this.length; i < length; i++) {
        var el = this.shift()
        if (!fn.call(el)) this.push(el)
      }
      return this
    }
  })

  Array.alias('first', 'getFirst')
  Array.alias('last', 'getFirst')
}
else {
  if (console && console.error) console.error('Mootools is not yet installed.')
}
