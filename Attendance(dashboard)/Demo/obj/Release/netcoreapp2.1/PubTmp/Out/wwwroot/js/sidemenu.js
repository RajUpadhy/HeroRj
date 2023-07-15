    function generateMenuItems(data) {
        let activeSubmenu = null;
    const menuItemsContainer = $("#menuItems");
        data.forEach(item => {
            const menuItem = $("<li></li>");
            const link = $("<a></a>").addClass("crose").text(item.label).attr("href", item.url);
    menuItem.append(link);
            if (item.submenus && item.submenus.length > 0) {
                const submenu = $("<ul></ul>").addClass("submenu").hide();
                item.submenus.forEach(submenuItemData => {
                    const submenuItem = $("<li></li>");

                    const submenuLink = $("<a></a>").text(submenuItemData.label).attr("href", submenuItemData.url);
    submenuItem.append(submenuLink);
    submenu.append(submenuItem);
                }); menuItem.addClass("has-submenu");
                const arrowIcon = $("<span></span>").addClass("submenu-arrow fa-solid fa-chevron-right");
                menuItem.append(arrowIcon);

                menuItem.on("click", (e) => {
                    if (activeSubmenu !== submenu) {
                        if (activeSubmenu) {
                            activeSubmenu.slideUp();
                            activeSubmenu.siblings(".has-submenu").removeClass("active");
                            activeSubmenu.siblings(".has-submenu").find(".submenu-arrow").removeClass("arrow-down");
                        }
                        submenu.slideToggle();
                        activeSubmenu = submenu;
                        menuItem.addClass("active");
                        arrowIcon.addClass("arrow-down");
                    } else {
                        submenu.slideUp();
                        activeSubmenu = null;
                        menuItem.removeClass("active");
                        arrowIcon.removeClass("arrow-down");
                    }
                });
                menuItem.append(submenu);
}
menuItemsContainer.append(menuItem);
});
}

function addicon() {
    var list = document.querySelectorAll('li');
    
    list.forEach((item) => {
        var link = item.querySelector("a");

        var labelHeading = document.createElement("label"); 
        labelHeading.innerText = link.innerText;
        link.innerHTML = '';
        link.appendChild(labelHeading);

        var icon = document.createElement("span");

        if (link.innerText === 'chart') {
            icon.className = "fa fa-bar-chart";
        } else if (link.innerText === 'Advance Search') {
            icon.className = "fa-solid fa-magnifying-glass ";
        } else if (link.innerText === 'Grid') {
            icon.className = "fa fa-calendar";

        } else if (link.innerText === 'sidemenu 1') {
            icon.className = "fa fa-calendar";

        } else if (link.innerText === 'Menu 1' || link.innerText === 'Menu 2') {
            icon.className = "fa-solid fa-table-cells-large";
        }
        else if (link.innerText === 'submenu 1' || link.innerText === 'submenu 2') {
            icon.className = "fa-solid fa-credit-card";
        }
        if (icon.className !== "") {
            link.insertBefore(icon, link.firstChild);
        }
         
    });
}
$(document).ready(function () {
    generateMenuItems(menuData);
    addicon();
    $("#toggleButton").click(function () {
        $("#sideMenu").toggleClass("collaps");
    });
});
