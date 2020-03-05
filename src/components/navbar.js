var m = require("mithril")

var NavBar = {
	view: function() {
		return m("nav.navbar.navbar-expand-lg.navbar-dark.bg-dark.sticky-top", [
			m("a.navbar-brand[href='#']","Silith"),
			m("button.navbar-toggler[type='button'][data-toggle='collapse'][data-target='#navbarSupportedContent'][aria-expanded='false'][aria-label='Toggle navigation']",
				m("span.navbar-toggler-icon")
			),
			m(".collapse.navbar-collapse[id='navbarSupportedContent']",[
				m("ul.navbar-nav.mr-auto",[
					//Główne przyciski
					m("li.nav-item",
						m("a.btn.btn-outline-light.btn-sm.mr-2[href='#welc']","Home")
					),
					m("li.nav-item",
						m("a.btn.btn-outline-light.btn-sm.mr-2[href='#navdesc']","Nawigacja")
					),
					m("li.nav-item",
						m("a.btn.btn-outline-light.btn-sm.mr-2[href='#']","Button2")
					)
				])
			])
		])
	}
}

module.exports = NavBar