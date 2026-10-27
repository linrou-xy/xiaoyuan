document.addEventListener("DOMContentLoaded", function () {
    const filterButtons = document.querySelectorAll(".filter-button");
    const photos = document.querySelectorAll(".photo-item");
    const lightbox = document.querySelector("#lightbox");

    filterButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            const selected = button.dataset.filter;

            filterButtons.forEach(function (item) {
                item.classList.remove("active");
            });
            button.classList.add("active");

            photos.forEach(function (photo) {
                const shouldShow = selected === "all" || photo.dataset.season === selected;
                photo.classList.toggle("hidden", !shouldShow);
            });
        });
    });

    if (!lightbox) {
        return;
    }

    const previewImage = lightbox.querySelector("img");
    const previewText = lightbox.querySelector("p");
    const closeButton = lightbox.querySelector("button");

    function closeLightbox() {
        lightbox.classList.remove("open");
        lightbox.setAttribute("aria-hidden", "true");
        document.body.classList.remove("menu-open");
    }

    photos.forEach(function (photo) {
        photo.addEventListener("click", function () {
            const image = photo.querySelector("img");
            const caption = photo.querySelector("figcaption").textContent.trim();

            previewImage.src = image.src;
            previewImage.alt = image.alt;
            previewText.textContent = caption;
            lightbox.classList.add("open");
            lightbox.setAttribute("aria-hidden", "false");
            document.body.classList.add("menu-open");
        });
    });

    closeButton.addEventListener("click", closeLightbox);
    lightbox.addEventListener("click", function (event) {
        if (event.target === lightbox) {
            closeLightbox();
        }
    });
    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
            closeLightbox();
        }
    });
});
