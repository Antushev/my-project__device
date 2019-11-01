let catalogLink = document.querySelector(".item-catalog");
let catalogListAll = document.querySelector(".list-navigation-catalog");
let buttonWriteUs = document.querySelector(".button-write-us");
let buttonCloseWriteUs = document.querySelector(".button-close-support");
let supportPopup = document.querySelector(".support-popup");
let buttonOpenMap = document.querySelector(".button-open-map");
let buttonCloseMap = document.querySelector(".button-close-map");
let mapPopup = document.querySelector(".map-popup");
let inputName = document.querySelector('.input-name');
let inputEmail = document.querySelector('.input-email');
let buttonSupport = document.querySelector('.button-support');

catalogLink.addEventListener("mouseover", function () {
	catalogListAll.classList.add("show-catalog-all");
});

catalogLink.addEventListener("mouseout", function () {
	catalogListAll.classList.remove("show-catalog-all");
});

if (buttonWriteUs) {
	buttonWriteUs.addEventListener("click", function (evt) {
		evt.preventDefault();
		supportPopup.classList.remove("hide-popup");
		supportPopup.classList.add("show-popup");
	});	
}

if (buttonCloseWriteUs) {
	buttonCloseWriteUs.addEventListener("click", function () {
		supportPopup.classList.remove("show-popup");
		supportPopup.classList.add("hide-popup");
	});
}	

if (buttonOpenMap) {
	buttonOpenMap.addEventListener("click", function (evt) {
		evt.preventDefault();
		mapPopup.classList.remove("hide-popup");
		mapPopup.classList.add("show-popup");
	});
}

if (buttonCloseMap) {
	buttonCloseMap.addEventListener("click", function () {
		mapPopup.classList.remove("show-popup");
		mapPopup.classList.add("hide-popup");
	});
}

if (buttonSupport) {
	buttonSupport.addEventListener("click", function (evt) {
		if (!inputName.value) {
			evt.preventDefault();
			inputName.classList.add("error-field");
		}

		if (!inputEmail.value) {
			evt.preventDefault();
			inputEmail.classList.add("error-field");
		}
	});
}




