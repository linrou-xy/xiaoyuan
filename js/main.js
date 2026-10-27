document.addEventListener("DOMContentLoaded", function () {
    const body = document.body;
    const currentPage = body.dataset.page;
    const menuButton = document.querySelector(".menu-button");
    const navigation = document.querySelector(".site-nav");
    const backTop = document.querySelector(".back-top");

    document.querySelectorAll("[data-nav]").forEach(function (link) {
        if (link.dataset.nav === currentPage) {
            link.classList.add("active");
            link.setAttribute("aria-current", "page");
        }
    });

    if (menuButton && navigation) {
        menuButton.addEventListener("click", function () {
            const isOpen = navigation.classList.toggle("open");
            body.classList.toggle("menu-open", isOpen);
            menuButton.setAttribute("aria-expanded", String(isOpen));
            menuButton.textContent = isOpen ? "关闭" : "菜单";
        });

        navigation.querySelectorAll("a").forEach(function (link) {
            link.addEventListener("click", function () {
                navigation.classList.remove("open");
                body.classList.remove("menu-open");
            });
        });
    }

    const revealItems = document.querySelectorAll(".reveal");
    if ("IntersectionObserver" in window) {
        const observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.12 });

        revealItems.forEach(function (item) {
            observer.observe(item);
        });
    } else {
        revealItems.forEach(function (item) {
            item.classList.add("visible");
        });
    }

    function updateBackTop() {
        if (window.scrollY > 500) {
            backTop.classList.add("show");
        } else {
            backTop.classList.remove("show");
        }
    }

    if (backTop) {
        window.addEventListener("scroll", updateBackTop, { passive: true });
        backTop.addEventListener("click", function () {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }

    const dayNote = document.querySelector("#day-note");
    if (dayNote) {
        const hour = new Date().getHours();
        let sentence = "今天也从津静路26号出发。";

        if (hour < 10) {
            sentence = "早上好，教学楼前的第一束光已经到了。";
        } else if (hour < 17) {
            sentence = "午后好，去中心湖边走一小段路吧。";
        } else {
            sentence = "晚上好，晚课后的校园正慢慢亮起来。";
        }

        dayNote.textContent = sentence;
    }
});
