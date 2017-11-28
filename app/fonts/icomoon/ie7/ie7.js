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
		'icon-calendar': '&#xe925;',
		'icon-group': '&#xe926;',
		'icon-vacancy': '&#xe919;',
		'icon-businessman2': '&#xe91c;',
		'icon-earth': '&#xe91a;',
		'icon-person-check': '&#xe91b;',
		'icon-statistics': '&#xe91d;',
		'icon-personal-mail': '&#xe91e;',
		'icon-edit-document': '&#xe91f;',
		'icon-document-3': '&#xe920;',
		'icon-demostration': '&#xe921;',
		'icon-curriculum': '&#xe922;',
		'icon-curriculum-1': '&#xe923;',
		'icon-bar-chart': '&#xe924;',
		'icon-work': '&#xe912;',
		'icon-document': '&#xe913;',
		'icon-question': '&#xe914;',
		'icon-graduate': '&#xe915;',
		'icon-document-1': '&#xe916;',
		'icon-businessman': '&#xe917;',
		'icon-businessman-1': '&#xe918;',
		'icon-envelope': '&#xe907;',
		'icon-phone': '&#xe908;',
		'icon-close': '&#xe904;',
		'icon-download': '&#xe905;',
		'icon-instagram': '&#xe906;',
		'icon-right-arrow': '&#xe903;',
		'icon-arrow-down': '&#xe909;',
		'icon-fb': '&#xe900;',
		'icon-home': '&#xe901;',
		'icon-search': '&#xe902;',
		'icon-atom': '&#xe90a;',
		'icon-electric': '&#xe90b;',
		'icon-gravity': '&#xe90c;',
		'icon-mechanics': '&#xe90d;',
		'icon-molecule': '&#xe90e;',
		'icon-momentum': '&#xe90f;',
		'icon-momentum1': '&#xe910;',
		'icon-optics': '&#xe911;',
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
