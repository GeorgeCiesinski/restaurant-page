import copyright from './copyright';

// Creates primary website layout
const baseLayout = (function() {

    // Private function that creates navbar
    function _nav(domElement) {
        // Create unordered list and list items
        const linkList = document.createElement("ul");
        const linkHome = document.createElement("li");
        const linkMenu = document.createElement("li");
        const linkContact = document.createElement("li");
        // Add hyperlinks
        linkHome.innerHTML = '<a href="#">Home</a>';
        linkMenu.innerHTML = '<a href="#">Menu</a>';
        linkContact.innerHTML = '<a href="#">Contact</a>';
        // Append to ul
        linkList.appendChild(linkHome);
        linkList.appendChild(linkMenu);
        linkList.appendChild(linkContact);
        // Append to dom
        domElement.appendChild(linkList);
    }

    // Creates the header, content and footer sections of the site
    function create() {

        // Get body
        const body = document.body;
    
        // Create header
        const header = document.createElement("header");
        // Top Header
        const headerTop = document.createElement("div");
        headerTop.classList.add("top");
        const restaurantName = document.createElement("h1");
        restaurantName.textContent = "La Foodery Extraordinaire";
        headerTop.appendChild(restaurantName);
        header.appendChild(headerTop);
        // Bottom Header
        const headerBottom = document.createElement("div");
        headerBottom.classList.add("bottom");
        _nav(headerBottom);
        header.appendChild(headerBottom);
        body.appendChild(header);
    
        // Create content div
        const content = document.createElement("div"); 
        content.id = "content";
        body.appendChild(content);
    
        // Create footer
        const footer = document.createElement("footer");
        const copyrightMessage = document.createElement("h6");
        copyrightMessage.innerHTML = copyright.generate();
        footer.appendChild(copyrightMessage);
        body.appendChild(footer);
    }

    // Reveals public functions and variables
    return {
        create: create,
    }
    
})();

export default baseLayout;