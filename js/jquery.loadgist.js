;(function($) {

  // plugin name
  var pluginName = 'loadGist';

  // default options
  var defaults = {
    selector: ''
  };

  // cache for <head>
  var $head = $('head');

  // load css if not exist
  function loadCSS(src) {
    if ($head.find('link[rel="stylesheet"][href="' + src + '"]').length < 1) {
      $head.append('<link rel="stylesheet" href="'+ src +'">');
    }
  }

  $.fn[pluginName] = function(options) {
    options = $.extend({}, defaults, options);

    if (typeof options.selector !== 'string') {
      options.selector = '';
    }
    
    // find embed gists
    var $gists = this.find('script' + options.selector + '[src^="https://gist.github.com/"]');

    return $gists.each(function() {
      var $this = $(this);
      // make json request url
      var src = $this.attr('src') + 'on?callback=?';

      $.getJSON(src, function(data) {
        $this.replaceWith(data.div);

        loadCSS(data.stylesheet);
      });
    });
  };

  $.fn[pluginName].defaults = defaults;

})(jQuery);
