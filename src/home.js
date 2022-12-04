import baseLayout from './baseLayout';

// Home content
const home = (function() {

    function generate() {
        // Get content element
        baseLayout.clearContent();
        const _content = document.getElementById("content");
        const contentCard = document.createElement("div");
        contentCard.classList.add("content-card");
        const firstParagraph = document.createElement("p");
        firstParagraph.textContent = "We are the #1 best french restaurant in the world";
        contentCard.appendChild(firstParagraph);
        _content.appendChild(contentCard);
    }

    return {
        generate: generate
    }
})();

export default home;