// import copyright from './copyright';

// Creates primary website layout
const baseLayout = (function() {

    // console.log("From createLayout");

    // // Get body
    // const body = document.body;

    // // Create header
    // const header = document.createElement("header");
    // const restaurantName = document.createElement("h1");
    // restaurantName.textContent = "La Foodery Extraordinaire";
    // header.appendChild(restaurantName);
    // body.appendChild(header);

    // // Create content div
    // const content = document.createElement("div");
    // body.appendChild(content);

    // // Create footer
    // const footer = document.createElement("footer");
    // const copyRight = document.createElement("h4");
    // copyRight.textContent = generateCopyright();
    // body.appendChild(footer);

    function displayAlert() {
        alert("Working");
    }

    return {
        displayAlert: displayAlert
    }
    
})();

export default baseLayout;