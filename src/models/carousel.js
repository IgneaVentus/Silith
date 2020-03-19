var m = require("mithril")

var Carousel = {
    list: [],
    loadList: function() {
		this.list = Array.from(require("../data/data.json").carousel)
		console.log("Carousel data loaded")
    },
}

module.exports = Carousel