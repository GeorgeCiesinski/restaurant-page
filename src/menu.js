import baseLayout from './baseLayout';

// Menu content
const menu = (function() {

    function generate() {
        // Get content element
        baseLayout.clearContent();
        const _content = document.getElementById("content");
        const contentCard = document.createElement("div");
        contentCard.classList.add("content-card");
        const firstParagraph = document.createElement("p");
        firstParagraph.textContent = "Menu";
        contentCard.appendChild(firstParagraph);
        _content.appendChild(contentCard);
    }

    return {
        generate: generate
    }
})();

export default menu;