var m = require("mithril")
var Articles = require("../models/article")
Articles.loadList()

var NavBar = {
	view: function() {
		return m("nav.navbar.navbar-expand-lg.navbar-dark.bg-dark.sticky-top", [
			m("a.navbar-brand[href='#'][id='brand']"),
			m("button.navbar-toggler[type='button'][data-toggle='collapse'][data-target='#navbarSupportedContent'][aria-expanded='false'][aria-label='Toggle navigation']",
				m("span.navbar-toggler-icon")
			),
			m(".collapse.navbar-collapse[id='navbarSupportedContent']",[
				m("ul.navbar-nav.ml-auto",[
					m("li.nav-item",
						m("a.nav-link.mr-2[href='#']","Home")
					),
					//Filling navbar with custom buttons
					Articles.list.map(function(article) {
						return m("li.nav-item",
							m("a.nav-link.mr-2[href='#"+article.id+"']",article.navname)
						)
					}),
					m("li.nav-item",
						m("a.nav-link.mr-2[href='#contact']","Contact")
					)
				])
			])
		])
	}
}

module.exports = NavBar