<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no, minimal-ui">
    <title>react</title>
    <script type="text/javascript">
		(function () {
		    init();
		    window.onresize = function() {
		        init();
		    };

		    function init() {

		        var w = document.documentElement.clientWidth||document.body.clientWidth;
		        if (w > 750) {
		            document.documentElement.style.fontSize = 100+'px'
		        } else {
		            var size = w * 100 / 750;
		            document.documentElement.style.fontSize = size+'px';
		        }
		    }
		})();
 	</script>
    </head>
  <body>
  <div id="app" class="wrap"></div>
</html>