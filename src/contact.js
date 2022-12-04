import baseLayout from './baseLayout';

// Contact content
const contact = (function() {

    function generate() {
        baseLayout.clearContent();  // Clear content children
        const contentCard = document.createElement("div");
        contentCard.classList.add("content-card");
        const firstParagraph = document.createElement("p");
        firstParagraph.textContent = "Contact";
        contentCard.appendChild(firstParagraph);
        this.appendChild(contentCard);
    }

    return {
        generate: generate
    }
})();

export default contact;