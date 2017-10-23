/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'icomoon\'">' + entity + '</span>' + html;
	}
	var icons = {
		'icon-atom': '&#xe90a;',
		'icon-electric': '&#xe90b;',
		'icon-gravity': '&#xe90c;',
		'icon-mechanics': '&#xe90d;',
		'icon-molecule': '&#xe90e;',
		'icon-momentum': '&#xe90f;',
		'icon-momentum1': '&#xe910;',
		'icon-optics': '&#xe911;',
		'icon-arrow-down': '&#xe909;',
		'icon-fb': '&#xe900;',
		'icon-home': '&#xe901;',
		'icon-search': '&#xe902;',
		'icon-envelope': '&#xe907;',
		'icon-phone': '&#xe908;',
		'icon-close': '&#xe904;',
		'icon-download': '&#xe905;',
		'icon-instagram': '&#xe906;',
		'icon-right-arrow': '&#xe903;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
