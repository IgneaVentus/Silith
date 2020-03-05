import 'bootstrap';
var m = require("mithril")
// Pasek nawigacyjny
var navbar = require("./components/navbar")
// Główna część dokumentu
var main = require("./components/main")
var root = document.body

m.render(root, [
	m(navbar),
	m(main)
])