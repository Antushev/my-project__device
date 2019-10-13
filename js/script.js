let catalogLink = document.querySelector(".item-catalog");
let catalogListAll = document.querySelector(".list-navigation-catalog");
let buttonWriteUs = document.querySelector(".button-write-us");
let buttonCloseWriteUs = document.querySelector(".button-close-support");
let supportPopup = document.querySelector(".support-popup");
let buttonOpenMap = document.querySelector(".button-open-map");
let buttonCloseMap = document.querySelector(".button-close-map");
let mapPopup = document.querySelector(".map-popup");

catalogLink.addEventListener("mouseover", function () {
	catalogListAll.classList.add("show-catalog-all");
});

catalogLink.addEventListener("mouseout", function () {
	catalogListAll.classList.remove("show-catalog-all");
});

buttonWriteUs.addEventListener("click", function () {
	supportPopup.classList.add("show-support-popup");
});

buttonCloseWriteUs.addEventListener("click", function () {
	supportPopup.classList.remove("show-support-popup");
});

buttonOpenMap.addEventListener("click", function (evt) {
	evt.preventDefault();
	mapPopup.classList.add("show-map-popup");
});

buttonCloseMap.addEventListener("click", function() {
	mapPopup.classList.remove("show-map-popup");
});


