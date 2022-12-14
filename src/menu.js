import baseLayout from './baseLayout';
import Menu from './data/menu.json';

// Menu content
const menu = (function() {

    function generate() {
        baseLayout.clearContent();  // Clear content children

        const contentCard = document.createElement("div");
        contentCard.classList.add("content-card");

        _appendHeader(contentCard);
        _appendCourses(contentCard);
        this.appendChild(contentCard);

        // Update Buttons
        baseLayout.updateButtons("menu-button");
    }

    function _appendHeader(contentCard) {
        const menuHeader = document.createElement("h2");  // Menu Header
        menuHeader.textContent = "Menu";
        contentCard.appendChild(menuHeader);
    }

    function _appendCourses(contentCard) {
        // Courses Section
        const menuCards = document.createElement("div");
        menuCards.classList.add("menu");
        Menu.menu.forEach(function(menuItem) {
            // New Course
            const course = document.createElement("div");
            course.classList.add("course");
            const courseHeader = document.createElement("h3");  // Course Header
            courseHeader.textContent = menuItem.course;
            course.appendChild(courseHeader);
            _courseItems(course, menuItem.items);  // Add items to course
            menuCards.appendChild(course);
        });
        contentCard.appendChild(menuCards);
    }

    // Iterate through items array and build course item elements
    function _courseItems(course, items) {
        items.forEach(function(courseItem){
            // New Menu Item
            const itemDiv = document.createElement("div");
            itemDiv.classList.add("course-item");
            // Item Name
            const itemName = document.createElement("h4");
            itemName.classList.add("item-name");
            itemName.textContent = courseItem.name;
            itemDiv.appendChild(itemName);
            // Item Description
            const itemDescription = document.createElement("h5");
            itemDescription.classList.add("item-description");
            itemDescription.textContent = courseItem.description;
            itemDiv.appendChild(itemDescription);
            // Item Price
            const itemPrice = document.createElement("h4");
            itemPrice.classList.add("item-price");
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