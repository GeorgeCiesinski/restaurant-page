import copyright from './copyright';
import home from './home';
import menu from './menu';
import contact from './contact';

// Creates primary website layout
const baseLayout = (function() {

    let _content = document.createElement("div");
    const _title = "Un Restaurant Français Extraordinaire";

    // Creates the header, content and footer sections of the site
    function create() {

        // Get body
        const body = document.body;

        const background = document.createElement("div");
        background.classList.add("background");
        body.appendChild(background);
    
        /* Header */
        const header = document.createElement("header");
        // Top Header
        const headerTop = document.createElement("div");
        headerTop.classList.add("top");
        const restaurantName = document.createElement("h1");
        restaurantName.textContent = _title;
        headerTop.appendChild(restaurantName);
        header.appendChild(headerTop);
        // Bottom Header
        const headerBottom = document.createElement("div");
        headerBottom.classList.add("bottom");
        _nav(headerBottom);
        header.appendChild(headerBottom);
        body.appendChild(header);
    
        /* Content */
        _content.id = "content";
        body.appendChild(_content);
    
        /* Footer */
        const footer = document.createElement("footer");
        const copyrightMessage = document.createElement("h4");
        copyrightMessage.innerHTML = copyright.generate();
        footer.appendChild(copyrightMessage);
        body.appendChild(footer);
    }

    // Private navbar generator
    function _nav(domElement) {
        const navigation = document.createElement("div");
        navigation.setAttribute("role", "navigation");
        navigation.id = "nav";
        // Button name and function call
        const navElements = [
            {
                "name": "HOME",
                "function": home.generate,
                "class": "button-blue"
            },
            {
                "name": "MENU",
                "function": menu.generate,
                "class": "button-white"
            },
            {
                "name": "CONTACT",
                "function": contact.generate,
                "class": "button-red"
            }
        ];
        // Creates a button for every navElement specified above
        navElements.forEach(function(item) {
            const newButton = document.createElement("button");
            newButton.classList.add(item["class"]);
            newButton.addEventListener("click", item["function"].bind(_content));  // Binds _content to 'this' keyword
            newButton.textContent = item["name"];
            navigation.append(newButton);
        });
        // Appends to the provided dom element
        domElement.append(navigation);
    }

    // Generates home page on first launch
    function homePage() {
        home.generate.bind(_content)();
    }

    // Clears _content element
    function clearContent() {
        while (_content.firstChild) {
            _content.removeChild(_content.lastChild);
        }
    }

    // Reveals public functions and variables
    return {
        create: create,
        homePage: homePage,
        clearContent: clearContent
    }
    
})();

export default baseLayout;