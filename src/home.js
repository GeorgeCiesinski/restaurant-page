import baseLayout from './baseLayout';
import frenchCuisine from './assets/img/french-cuisine.jpg';

// Home content
const home = (function() {

    function generate() {
        
        baseLayout.clearContent();  // Clear content children

        const contentCard = document.createElement("div");
        contentCard.classList.add("content-card");

        // Figure
        const figure = document.createElement("figure");
        const blockquote = document.createElement("blockquote");
        blockquote.textContent = "The #1 most French restaurant on Earth";
        blockquote.setAttribute("cite", "#");  // Citation
        figure.appendChild(blockquote);
        const figcaption = document.createElement("figcaption");
        figcaption.textContent = "Owner of Un Restaurant Français Extraordinaire";
        figure.appendChild(figcaption);
        contentCard.appendChild(figure);

        // Image
        const image = new Image();
        image.src = frenchCuisine;
        contentCard.appendChild(image);

        // Paragraph
        const paragraph2 = document.createElement("p");
        paragraph2.textContent = "Established in 1791";
        contentCard.appendChild(paragraph2);
        
        this.appendChild(contentCard);
    }

    return {
        generate: generate
    }
})();

export default home;