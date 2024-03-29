let catalogLink = document.querySelector(".item-catalog");
let catalogListAll = document.querySelector(".list-navigation-catalog");
let buttonWriteUs = document.querySelector(".button-write-us");
let buttonCloseWriteUs = document.querySelector(".button-close-support");
let supportPopup = document.querySelector(".support-popup");
let buttonOpenMap = document.querySelector(".button-open-map");
let buttonCloseMap = document.querySelector(".button-close-map");
let mapPopup = document.querySelector(".map-popup");
let inputName = document.querySelector(".input-name");
let inputEmail = document.querySelector(".input-email");
let buttonSupport = document.querySelector(".button-support");
let blockServiceDelivery = document.querySelector(".service-button-1");
let blockServiceWarranty = document.querySelector(".service-button-2");
let blockServiceCredit = document.querySelector(".service-button-3");
let itemServiceDelivery = document.querySelector(".service-item-1");
let itemServiceWarranty = document.querySelector(".service-item-2");
let itemServiceCredit = document.querySelector(".service-item-3");

if (itemServiceDelivery) {
	itemServiceDelivery.addEventListener("click", function (evt) {
		itemServiceWarranty.classList.remove("active-list-service");
		itemServiceCredit.classList.remove("active-list-service");
		itemServiceDelivery.classList.add("active-list-service");
	});
}

if (itemServiceWarranty) {
	itemServiceWarranty.addEventListener("click", function (evt) {
		itemServiceDelivery.classList.remove("active-list-service");
		itemServiceCredit.classList.remove("active-list-service");
		itemServiceWarranty.classList.add("active-list-service");
	});
}

if (itemServiceCredit) {
	itemServiceCredit.addEventListener("click", function (evt) {
		itemServiceDelivery.classList.remove("active-list-service");
		itemServiceWarranty.classList.remove("active-list-service");
		itemServiceCredit.classList.add("active-list-service");
	});
}

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




