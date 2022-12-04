import copyright from './copyright';
import home from './home';
import menu from './menu';
import contact from './contact';

// Creates primary website layout
const baseLayout = (function() {

    // Public content element variable - assigned when baseLayout is created
    let _content = null;

    // Creates the header, content and footer sections of the site
    function create() {

        // Get body
        const body = document.body;
    
        /* Header */
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
    
        /* Content */
        _content = document.createElement("div"); 
        _content.id = "content";
        body.appendChild(_content);
    
        /* Footer */
        const footer = document.createElement("footer");
        const copyrightMessage = document.createElement("h6");
        copyrightMessage.innerHTML = copyright.generate();
        footer.appendChild(copyrightMessage);
        body.appendChild(footer);
    }

    // Private navbar generator
    function _nav(domElement) {
        const navigation = document.createElement("div");
        navigation.setAttribute("role", "navigation");
        // Button name and function call
        const navElements = [
            {
                "name": "home",
                "function": home.generate
            },
            {
                "name": "menu",
                "function": menu.generate
            },
            {
                "name": "contact",
                "function": contact.generate
            }
        ];
        // Creates a button for every navElement specified above
        navElements.forEach(function(item) {
            const newButton = document.createElement("button");
            newButton.addEventListener("click", item["function"]);
            newButton.textContent = item["name"];
            navigation.append(newButton);
        });
        // Appends to the provided dom element
        domElement.append(navigation);
    }

    function clearContent() {
        while (_content.firstChild) {
            _content.removeChild(_content.lastChild);
        }
    }

    // Reveals public functions and variables
    return {
        create: create,
        clearContent: clearContent
    }
    
})();

export default baseLayout;