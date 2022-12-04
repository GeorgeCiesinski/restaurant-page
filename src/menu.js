import baseLayout from './baseLayout';

// Menu content
const menu = (function() {

    function generate() {
        baseLayout.clearContent();  // Clear content children
        const contentCard = document.createElement("div");
        contentCard.classList.add("content-card");
        const firstParagraph = document.createElement("p");
        firstParagraph.textContent = "Menu";
        contentCard.appendChild(firstParagraph);
        this.appendChild(contentCard);
    }

    return {
        generate: generate
    }
})();

export default menu;