import copyright from './copyright';
import home from './home';
import menu from './menu';
import contact from './contact';

// Creates primary website layout
const baseLayout = (function() {

    // Create content in local scope
    let _content = document.createElement("div");
    const _title = "Un Restaurant Français Extraordinaire";

    // Creates the main body of the page (public)
    function create() {

        // Get body
        const body = document.body;

        const background = document.createElement("div");
        background.classList.add("background");
        body.appendChild(background);
    
        _appendHeader(body);
        _appendContent(body);
        _appendFooter(body);
    }

    // Creates header, header top, and header bottom
    function _appendHeader(body) {
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
    }

    // Creates nav buttons and binds callback function to content element
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

    // Appends content which acts as a parent element in other page modules
    function _appendContent(body) {
        _content.id = "content";
        body.appendChild(_content);
    }

    function _appendFooter(body) {
        const footer = document.createElement("footer");
        const copyrightMessage = document.createElement("h3");
        copyrightMessage.innerHTML = copyright.generate();
        footer.appendChild(copyrightMessage);
        body.appendChild(footer);
    }

    // Generates home page on first launch (public)
    function homePage() {
        home.generate.bind(_content)();
    }

    // Clears _content element (public)
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