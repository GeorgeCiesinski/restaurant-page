import baseLayout from './baseLayout';
import Menu from './menu.json';

// Menu content
const menu = (function() {

    function generate() {
        baseLayout.clearContent();  // Clear content children

        console.log(Menu.menu);

        const contentCard = document.createElement("div");
        contentCard.classList.add("content-card");

        const menuHeader = document.createElement("h4");
        menuHeader.textContent = "Menu";
        contentCard.appendChild(menuHeader);

        Menu.menu.forEach(function(item) {
            const card = document.createElement("div");
            const itemName = document.createElement("h6");
            itemName.textContent = item.name;
            card.appendChild(itemName);
            contentCard.appendChild(card);
        });


        this.appendChild(contentCard);
    }

    return {
        generate: generate
    }
})();

export default menu;