// index.js
var m = require("mithril")
var root = document.body

// Pasek nawigacyjny
var NavBar = { 
	view: function() {
		return m("nav.navbar.navbar-expand-lg.navbar-dark.bg-dark", [
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

// Wzór artykułu

// m("article[id='']",[
					// m("h2",""),
					// m("p","")
				// ]),

//Część główna strony
var Main = {
	view: function() {
		return m(".main", [
			m(".container",[
				// Główne artykuły
				m("article[id='welc']",[
					m("h2","Witaj na mojej skromnej stronie!"),
					m("p","Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer rhoncus facilisis consectetur. Etiam consectetur feugiat nisi nec suscipit. Nunc vitae tempor risus. Duis vel erat tempor, facilisis velit in, imperdiet quam. Praesent vitae ligula lorem. Suspendisse porta euismod dui a dignissim. Vestibulum finibus blandit sollicitudin. Suspendisse pulvinar imperdiet ex sed lacinia. Praesent felis erat, gravida a nisi quis, tristique pretium nibh. Nullam tortor eros, porta non luctus ornare, porttitor molestie ex. Praesent auctor leo libero, id blandit ligula dignissim ac. Ut congue risus eros. Maecenas vitae ipsum a dolor placerat tincidunt. Phasellus non euismod elit. Pellentesque condimentum est odio, sit amet ornare magna rutrum id. Nullam eget eros at risus fringilla euismod ac ut elit. Praesent ipsum elit, viverra sit amet magna vel, tempor accumsan felis. Fusce velit leo, suscipit eget dui eget, dapibus viverra nisl. Sed quis massa orci. Cras efficitur, diam vel egestas rhoncus, lectus est imperdiet magna, at commodo elit justo ac ligula. Sed maximus euismod tristique. Nulla eget ligula pellentesque, accumsan enim a, vestibulum nunc. In enim augue, porta ac tincidunt in, tempor ac nisl. Etiam nibh nibh, auctor id laoreet eget, commodo eget mauris. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas quis tempor lectus, at molestie lacus. Sed commodo dolor sed purus lacinia, ut condimentum lorem condimentum. Phasellus eget molestie erat. Nam pretium ligula et varius ornare. In id felis nisl. Integer varius urna justo, in egestas nibh blandit eget. Sed volutpat risus turpis, non iaculis massa posuere a. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nam condimentum quam dictum enim aliquet, a tempus tellus mattis. Mauris feugiat est quis varius tristique. Sed non sapien est. Vivamus congue lobortis ipsum pellentesque facilisis. Donec ac neque sit amet urna sollicitudin tincidunt. Vestibulum sollicitudin, mauris vitae porta dictum, nisi turpis iaculis nibh, a mollis turpis augue vitae odio. Etiam consequat lorem non porttitor venenatis. Suspendisse nec tellus sit amet libero consequat luctus et a felis. Donec sodales, magna efficitur rhoncus eleifend, enim metus dapibus mi, nec tristique turpis orci eget neque. Cras ullamcorper consequat volutpat. Donec aliquam luctus augue vitae accumsan. Morbi tempus massa metus, eu condimentum quam malesuada ut. Aliquam erat volutpat. Cras eu dui interdum, tristique ante eu, suscipit orci. Vestibulum at convallis turpis, tincidunt blandit est.")
				]),
				m("article[id='navdesc']",[
					m("h2","Nawigacja strony"),
					m("p","Nulla et urna tincidunt, auctor tortor vitae, pharetra nibh. Praesent tempus eu mi non placerat. Nullam in augue sit amet turpis mattis tincidunt non eget lectus. Quisque blandit magna ut lorem dapibus condimentum. Fusce pulvinar felis a sapien convallis, feugiat rutrum elit sollicitudin. Donec dapibus ipsum ut libero consequat, ut efficitur est auctor. Cras tincidunt mollis tortor vitae facilisis. Nam vitae nibh faucibus, dictum augue hendrerit, blandit erat. Nulla facilisis sagittis tristique. Etiam turpis purus, ornare non fermentum nec, scelerisque quis mauris. Vivamus et ultrices ante. Morbi eu elit vitae nunc consequat elementum. Maecenas at suscipit tellus. Sed pulvinar tincidunt volutpat. Curabitur tempus nibh sed mi tristique, at tincidunt ipsum condimentum. Etiam tempus massa dui. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas quis erat nisi. Sed facilisis ex elit, ac venenatis justo rhoncus eget. Maecenas magna lorem, bibendum ut sem ut, porttitor venenatis nunc. Donec vel ex sapien. Praesent dolor velit, pharetra et sapien id, viverra dignissim metus. Integer egestas, risus vulputate volutpat venenatis, tortor sapien sollicitudin neque, non semper lectus eros vel metus. Integer suscipit facilisis ex, non tempor enim convallis tincidunt. In pellentesque eleifend maximus. Fusce posuere magna odio, nec euismod libero feugiat ac. Donec pellentesque varius imperdiet. Pellentesque sit amet blandit erat. Fusce sed tristique erat, quis interdum ipsum. Sed tristique congue venenatis. Nam fringilla, dolor et condimentum ultrices, augue velit lobortis lacus, id ullamcorper mauris sem quis orci. Vivamus rhoncus erat id imperdiet accumsan. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla non ipsum non tortor tempor accumsan. Quisque vehicula ipsum sit amet commodo eleifend. Sed vitae risus vel nisi eleifend porttitor. Aliquam in imperdiet urna. Mauris ultrices fermentum velit vitae elementum. Fusce dolor tellus, elementum id eleifend facilisis, porta nec nunc. Donec et vestibulum ipsum. Mauris eget efficitur nulla. Nunc sed tellus ligula. Suspendisse vulputate nisl eget sapien dictum maximus. Nunc quis ullamcorper lacus, at sollicitudin dui. Ut id metus sed velit dictum luctus a vitae felis.")
				]),
			])
		])
	}
}

m.render(root, [
	m(NavBar),
	m(Main)
])