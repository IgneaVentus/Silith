import 'bootstrap';
var m = require("mithril")
// Pasek nawigacyjny
var navbar = require("./components/navbar")
// Główna część dokumentu
var main = require("./components/main")
// Kontaktowa część dokumentu
var contact = require("./components/contact")
var root = document.body

m.render(root, [
	m(navbar),
	m(main),
	m(contact)
])