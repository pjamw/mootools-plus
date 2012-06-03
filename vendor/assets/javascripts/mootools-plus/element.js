if (window.MooTools) {
  Element.implement({
    hasElement: function(tag){
      return (tag == undefined) ? (this.getChildren().length > 0) : (this.getElement(tag) != null)
    },

    hasElements: function(tag){
      return (tag == undefined) ? (this.getChildren().length > 0) : (this.getElements(tag).length > 1)
    },

    hasEvent: function(eventType, fn){
      var myEvents = this.retrieve('events')
      return myEvents && myEvents[eventType] && (fn == undefined || myEvents[eventType].keys.contains(fn))
    },

    hasParent: function(tag){
      return (tag == undefined) ? (this.getParent().length > 0) : (this.getParent(tag) != null)
    },

    disable: function(){
      this.set('disabled', true)
      return this
    },

    enable: function(){
      this.set('disabled', false)
      return this
    }
  })
}
else {
  if (console && console.error) console.error('Mootools is not yet installed.')
}
