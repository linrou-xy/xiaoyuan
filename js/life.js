document.addEventListener("DOMContentLoaded", function () {
    const moments = {
        morning: {
            label: "08:00 / 教学楼",
            title: "带着早餐的香气赶到教室",
            text: "早八总有一点匆忙。推开教室门，熟悉的铃声响起，今天的学习就正式开始了。",
            image: "../images/education-center.jpg",
            alt: "早晨的教学楼"
        },
        noon: {
            label: "12:20 / 中心湖",
            title: "午饭后，让脚步慢下来",
            text: "绕着湖边走一小圈，聊聊上午的课，也想想下午的安排。短暂放空以后，再继续出发。",
            image: "../images/central-lake.jpg",
            alt: "午后的中心湖"
        },
        afternoon: {
            label: "16:40 / 体育场",
            title: "在晚饭前跑两圈",
            text: "有人训练，有人散步，也有人坐在看台上等朋友。操场把不同的节奏放在了一起。",
            image: "../images/stadium.jpg",
            alt: "傍晚的体育场"
        },
        evening: {
            label: "20:30 / 校园广场",
            title: "晚课结束，灯还亮着",
            text: "回宿舍的路不算长。一路聊着没说完的话，路灯把熟悉的校园照成了另一种样子。",
            image: "../images/night-campus.jpg",
            alt: "夜晚的校园广场"
        }
    };

    const tabs = document.querySelectorAll(".day-tab");
    const image = document.querySelector("#day-image");
    const label = document.querySelector("#day-label");
    const title = document.querySelector("#day-title");
    const text = document.querySelector("#day-text");

    tabs.forEach(function (tab) {
        tab.addEventListener("click", function () {
            const moment = moments[tab.dataset.time];

            tabs.forEach(function (item) {
                item.classList.remove("active");
                item.setAttribute("aria-selected", "false");
            });

            tab.classList.add("active");
            tab.setAttribute("aria-selected", "true");
            image.src = moment.image;
            image.alt = moment.alt;
            label.textContent = moment.label;
            title.textContent = moment.title;
            text.textContent = moment.text;
        });
    });
});
