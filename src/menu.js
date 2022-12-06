import baseLayout from './baseLayout';
import Menu from './menu.json';

// Menu content
const menu = (function() {

    function generate() {
        baseLayout.clearContent();  // Clear content children

        console.log(Menu.menu);

        const contentCard = document.createElement("div");
        contentCard.classList.add("content-card");

        // Menu
        const menuHeader = document.createElement("h2");
        menuHeader.textContent = "Menu";
        contentCard.appendChild(menuHeader);

        // Courses Section
        const menuCards = document.createElement("div");
        menuCards.classList.add("menu");
        Menu.menu.forEach(function(menuItem) {
            // New Course
            const card = document.createElement("div");
            card.classList.add("menu-card");
            const course = document.createElement("h3");
            course.textContent = menuItem.course;
            _courseItems(course, menuItem.items)
            card.appendChild(course);
            menuCards.appendChild(card);
        });

        contentCard.appendChild(menuCards);

        this.appendChild(contentCard);
    }

    function _courseItems(course, items) {
        items.forEach(function(courseItem){
            // New Menu Item
            const itemDiv = document.createElement("div");
            itemDiv.classList.add("menu-item");
            // Item Name
            const itemName = document.createElement("h4");
            itemName.textContent = courseItem.name;
            itemDiv.appendChild(itemName);
            // Item Description
            const itemDescription = document.createElement("h5");
            itemDescription.textContent = courseItem.description;
            itemDiv.appendChild(itemDescription);
            // Item Price
            const itemPrice = document.createElement("h4");
            itemPrice.textContent = courseItem.price;
            itemDiv.appendChild(itemPrice);
            // Append to course
            course.appendChild(itemDiv);
        });
    }

    return {
        generate: generate
    }
})();

export default menu;