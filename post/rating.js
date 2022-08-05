const clearRatingStars = () => {
	const stars = Array.from(document.getElementById("set-rating").children);
	stars.forEach((star) => {
		star.classList.remove("text-yellow-400");
		star.classList.remove("fa-solid");
		star.classList.add("fa-regular");
	});
};

const setRatingStars = (length) => {
	const stars = Array.from(document.getElementById("set-rating").children);
	stars.forEach((star, index) => {
		if (index > length) return false;
		star.classList.remove("fa-regular");
		star.classList.add("fa-solid");
		star.classList.add("text-yellow-400");
	});
	document
		.getElementById("rating-value")
		.setAttribute("value", String(Number(length) + 1));
};

const handleSetRating = (event) => {
	if (event.target.tagName === "I") {
		const requestedRating = event.target.getAttribute("data-index") ?? 0;
		clearRatingStars();
		setRatingStars(requestedRating);
	}
};
