import baseLayout from './baseLayout';

// Contact content
const contact = (function() {

    function generate() {
        baseLayout.clearContent();  // Clear content children

        // Content Card
        const contentCard = document.createElement("div");
        contentCard.classList.add("content-card");

        // Append Elements
        _appendHeader(contentCard);
        _appendMap(contentCard);
        _appendMessage(contentCard);
        _appendAddress(contentCard);
        _appendPhone(contentCard);
        _appendEmail(contentCard);
        this.appendChild(contentCard);
    }

    function _appendHeader(contentCard) {
        const contactHeader = document.createElement("h2");
        contactHeader.textContent = "Contact";
        contentCard.appendChild(contactHeader);
    }

    function _appendMap(contentCard) {
        const mapDiv = document.createElement("div");
        const mapLink = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d250231.53021077602!2d-90.3397240556525!3d75.43219560738548!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4e27617cd8fd32fb%3A0xb74527db2b1f08d0!2sFlashline%20Mars%20Arctic%20Research%20Station!5e0!3m2!1sen!2sca!4v1670358353922!5m2!1sen!2sca" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';
        mapDiv.innerHTML = mapLink;
        mapDiv.classList.add("map");
        contentCard.appendChild(mapDiv);
    }

    function _appendMessage(contentCard) {
        const mapMessage = document.createElement("p");
        mapMessage.textContent = 'We are located in the Mars Arctic Research base. These scientists just stay inside their fancy domes for months at a time, and only stop by at this restaurant once every week or two so we could use the business!';
        contentCard.appendChild(mapMessage);
    }

    function _appendAddress(contentCard) {
        const addressDiv = document.createElement("div");  
        const addressHeader = document.createElement("h3");  // Header
        addressHeader.textContent = "Address:"
        addressDiv.appendChild(addressHeader);
        const address = document.createElement("h4");  // Address Info
        address.textContent = "#2 Qikiqtaaluk Region, NU X0A 0J0";
        addressDiv.appendChild(address);
        contentCard.appendChild(addressDiv);
    }

    function _appendPhone(contentCard) {
        const phoneDiv = document.createElement("div");
        const phoneHeader = document.createElement("h3");
        phoneHeader.textContent = "Phone:"
        phoneDiv.appendChild(phoneHeader);
        const phone = document.createElement("h4");
        phone.textContent = "867-EAT-FOOD";
        phoneDiv.appendChild(phone);
        contentCard.appendChild(phoneDiv);
    }

    function _appendEmail(contentCard) {
        const emailDiv = document.createElement("div");
        const emailHeader = document.createElement("h3");
        emailHeader.textContent = "E-mail:"
        emailDiv.appendChild(emailHeader);
        const email = document.createElement("h4");
        const emailAddress = "eat@restaurantfrancais.fr";
        email.innerHTML = `<a href = "mailto: ${emailAddress}">${emailAddress}</a>`;
        emailDiv.appendChild(email);
        contentCard.appendChild(emailDiv);
    }

    return {
        generate: generate
    }
})();

export default contact;