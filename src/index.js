// index.js
var m = require("mithril")
var root = document.body

// Pasek nawigacyjny
var NavBar = { 
	view: function() {
		return m("nav.navbar.navbar-expand-lg.navbar-dark.bg-dark.mb-2", [
			m("a.navbar-brand[href='#']","Silith"),
			m("button.navbar-toggler[type='button'][data-toggle='collapse'][data-target='#navbarSupportedContent'][aria-expanded='false'][aria-label='Toggle navigation']",
				m("span.navbar-toggler-icon")
			),
			m(".collapse.navbar-collapse[id='navbarSupportedContent']",[
				m("ul.navbar-nav.mr-auto",[
					//Główne przyciski
					m("li.nav-item",
						m("a.btn.btn-outline-light.btn-sm.mr-2[href='#']","Home")
					),
					m("li.nav-item",
						m("a.btn.btn-outline-light.btn-sm.mr-2[href='#']","Button1")
					),
					m("li.nav-item",
						m("a.btn.btn-outline-light.btn-sm.mr-2[href='#']","Button2")
					)
				])
			])
		])
	}
}
	
//Część główna strony
var Main = {
	view: function() {
		return m(".main", [
			m(".container",[
				// Główne artykuły
				m("article[id='welc']",[
					m("h2","Witaj na mojej skromnej stronie!"),
					m("p","Witaj na mojej skromnej stronie napisanej w frameworku Mithril! Jest to strona napisana jako OnePage w połączeniu z niektórymi aspektami Single Page Application. Przedstawia ona samą siebie, jest to strona-sprawozdanie!")
				])
			])
		])
	}
}

m.render(root, [
	m(NavBar),
	m(Main)
])