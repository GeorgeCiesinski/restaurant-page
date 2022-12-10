import baseLayout from './baseLayout';
import FrenchCuisine from './assets/img/french-cuisine.jpg';

// Home content
const home = (function() {

    function generate() {
        
        baseLayout.clearContent();  // Clear content children

        const contentCard = document.createElement("div");
        contentCard.classList.add("content-card");

        // Append Elements
        _appendFigure(contentCard);
        _appendImage(contentCard);
        _appendP1(contentCard);
        _appendP2(contentCard);
        this.appendChild(contentCard);

        // Update Buttons
        baseLayout.updateButtons("home-button");
    }

    function _appendFigure(contentCard) {
        const figure = document.createElement("figure");
        const blockquote = document.createElement("blockquote");
        blockquote.textContent = "The #1 most French restaurant on Earth";
        blockquote.setAttribute("cite", "#");  // Citation
        figure.appendChild(blockquote);
        const figcaption = document.createElement("figcaption");
        figcaption.textContent = "Owner of Un Restaurant Français Extraordinaire";
        figure.appendChild(figcaption);
        contentCard.appendChild(figure);
    }

    function _appendImage(contentCard) {
        const image = new Image();
        image.src = FrenchCuisine;
        contentCard.appendChild(image);
    }

    function _appendP1(contentCard) {
        const paragraph1 = document.createElement("h4");
        paragraph1.textContent = "Established in 1791";
        contentCard.appendChild(paragraph1);
    }

    function _appendP2(contentCard) {
        const paragraph2 = document.createElement("h4");
        paragraph2.textContent = "Taste the streets of France";
        contentCard.appendChild(paragraph2);
    }

    return {
        generate: generate
    }
})();

export default home;