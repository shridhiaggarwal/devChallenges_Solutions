document.addEventListener("DOMContentLoaded", function () {
    let navItems = document.querySelectorAll('.navItem');
    let activeItem = document.querySelector('.navItemActive');
    let themeToggleBtn = document.getElementById("themeToggle");
    let sideThemeToggleBtn = document.getElementById("sideThemeToggle");
    let logoImage = document.getElementById("logoImage");
    let bannerByliner = document.getElementById("bannerByliner");
    let bannerHeading = document.getElementById("bannerHeading");

    // dark theme styling
    const handleDarkTheme = () => {
        document.body.classList.add("darkThemeBody");
        document.getElementById("sideMenu").classList.add("darkThemeBody");
        logoImage.src = "../../images/challenge5/alarado-icon-homepage-light.svg";
        activeItem.classList.add("darkThemeText");
        bannerByliner.classList.add("darkThemeText");
        bannerHeading.classList.add("darkThemeText");
    }

    //default styleing - light theme
    const handleLightTheme = () => {
        document.body.classList.remove("darkThemeBody");
        document.getElementById("sideMenu").classList.remove("darkThemeBody");
        logoImage.src = "../../images/challenge5/alarado-icon-homepage.svg";
        activeItem.classList.remove("darkThemeText");
        bannerByliner.classList.remove("darkThemeText");
        bannerHeading.classList.remove("darkThemeText");
    }

    const handleLightDarkTheme = (checked) => {
        if (checked) {
            handleDarkTheme();
        } else {
            handleLightTheme();
        }
    }

    navItems.forEach((item) => {
        item.addEventListener('click', () => {
            activeItem.classList.remove('navItemActive');
            if (themeToggleBtn.checked || sideThemeToggleBtn.checked) {
                activeItem.classList.remove("darkThemeText");
            }
            item.classList.add('navItemActive');
            if (themeToggleBtn.checked || sideThemeToggleBtn.checked) {
                item.classList.add("darkThemeText");
            }
            activeItem = item;
            setInitialTheme();
        })
    })

    themeToggleBtn.addEventListener('change', () => {
        handleLightDarkTheme(themeToggleBtn.checked);
    })

    sideThemeToggleBtn.addEventListener('change', () => {
        handleLightDarkTheme(sideThemeToggleBtn.checked);
    })
});

function openMenuClick() {
    document.getElementById("sideMenu").style.width = "400px";
    document.body.classList.add('sidebar-open');
}

function closeMenuClick() {
    document.getElementById("sideMenu").style.width = "0";
    document.body.classList.remove('sidebar-open');
}