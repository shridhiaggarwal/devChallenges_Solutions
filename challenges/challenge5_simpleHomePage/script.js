document.addEventListener("DOMContentLoaded", function () {
    let navItems = document.querySelectorAll('.navItem');
    let activeItem = document.querySelector('.navItemActive');
    let themeToggleBtn = document.getElementById("themeToggle");
    let logoImage = document.getElementById("logoImage");
    let bannerByliner = document.getElementById("bannerByliner");
    let bannerHeading = document.getElementById("bannerHeading");

    // console.log("themeToggleBtn.checked", themeToggleBtn.checked);

    navItems.forEach((item) => {
        item.addEventListener('click', () => {
            activeItem.classList.remove('navItemActive');
            if (themeToggleBtn.checked) {
                activeItem.classList.remove("darkThemeText");
            }
            item.classList.add('navItemActive');
            if (themeToggleBtn.checked) {
                item.classList.add("darkThemeText");
            }
            activeItem = item;
        })
    })

    themeToggleBtn.addEventListener('change', () => {
        if (themeToggleBtn.checked) {
            // dark theme styling
            this.body.classList.add("darkThemeBody");
            logoImage.src = "../../images/challenge5/alarado-icon-homepage-light.svg";
            activeItem.classList.add("darkThemeText");
            bannerByliner.classList.add("darkThemeText");
            bannerHeading.classList.add("darkThemeText");
        } else {
            //default styleing - light theme
            this.body.classList.remove("darkThemeBody");
            logoImage.src = "../../images/challenge5/alarado-icon-homepage.svg";
            activeItem.classList.remove("darkThemeText");
            bannerByliner.classList.remove("darkThemeText");
            bannerHeading.classList.remove("darkThemeText");
        }
    })
});

