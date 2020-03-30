import 'bootstrap';
var m = require("mithril")
// Pasek nawigacyjny
var navbar = require("./components/navbar")
// Karuzela
var carousel = require("./components/carousel")
// Główna część dokumentu
var main = require("./components/main")
// Adresowa część dokumentu
var address = require("./components/address")
// Kontaktowa część dokumentu
var contact = require("./components/contact")
var root = document.body

m.render(root, [
	m(navbar),
	m(carousel),
	m(main),
	m(address),
	m(contact)
])