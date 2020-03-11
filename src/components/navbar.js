var m = require("mithril")
var Articles = require("../models/article")
Articles.loadList()

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
						m("a.btn.btn-outline-light.btn-sm.mr-2[href='#']","Home")
					),Articles.list.map(function(article) {
					return m("li.nav-item",
						m("a.btn.btn-outline-light.btn-sm.mr-2[href='#"+article.id+"']",article.navname)
					)}),
					m("li.nav-item",
						m("a.btn.btn-outline-light.btn-sm.mr-2[href='#contact']","Kontakt")
					)
				])
			])
		])
	}
}

module.exports = NavBar