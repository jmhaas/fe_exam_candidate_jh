var dogContainer = document.getElementById("image");
var btn = document.getElementById("btn");

btn.addEventListener("click", function () {
	var req = new XMLHttpRequest();
	req.open('GET', 'https://dog.ceo/api/breeds/image/random');
	req.onload = function () {
		var getDog = JSON.parse(req.responseText);
		newHTML(getDog);
	};
	req.send();
});

function newHTML(data) {
	var htmlString = "this is a test";
	dogContainer.insertAdjacentHTML('beforeend', htmlString);
}
