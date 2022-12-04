import baseLayout from './baseLayout';

// Contact content
const contact = (function() {

    function generate() {
        // Get content element
        baseLayout.clearContent();
        const _content = document.getElementById("content");
        const contentCard = document.createElement("div");
        contentCard.classList.add("content-card");
        const firstParagraph = document.createElement("p");
        firstParagraph.textContent = "Contact";
        contentCard.appendChild(firstParagraph);
        _content.appendChild(contentCard);
    }

    return {
        generate: generate
    }
})();

export default contact;