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
		el.innerHTML = '<span style="font-family: \'iconThai\'">' + entity + '</span>' + html;
	}
	var icons = {
		'iconThai-bhumibhol-bridge': '&#xe900;',
		'iconThai-biyoke': '&#xe901;',
		'iconThai-buddah-head': '&#xe902;',
		'iconThai-buddah-montol': '&#xe903;',
		'iconThai-democracy-monument': '&#xe904;',
		'iconThai-doi-suthep': '&#xe905;',
		'iconThai-golden-mount': '&#xe906;',
		'iconThai-hualamphong': '&#xe907;',
		'iconThai-mahanakorn': '&#xe908;',
		'iconThai-monk': '&#xe909;',
		'iconThai-myanmar-style-temple': '&#xe90a;',
		'iconThai-pang-leela': '&#xe90b;',
		'iconThai-pang-marnwichai': '&#xe90c;',
		'iconThai-pathomjade': '&#xe90d;',
		'iconThai-rama5': '&#xe90e;',
		'iconThai-rama8-bridge': '&#xe90f;',
		'iconThai-temple': '&#xe910;',
		'iconThai-thammasat': '&#xe911;',
		'iconThai-tuktuk': '&#xe912;',
		'iconThai-victory-monument': '&#xe913;',
		'iconThai-wat-arun': '&#xe914;',
		'iconThai-wat-prakaew': '&#xe915;',
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
		c = c.match(/iconThai-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
