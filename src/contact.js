import baseLayout from './baseLayout';

// Contact content
const contact = (function() {

    function generate() {
        baseLayout.clearContent();  // Clear content children

        const contentCard = document.createElement("div");
        contentCard.classList.add("content-card");

        // Header
        const contactHeader = document.createElement("h2");
        contactHeader.textContent = "Contact";
        contentCard.appendChild(contactHeader);

        // Embed Map
        const mapDiv = document.createElement("div");
        // Random google map address
        mapDiv.innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d250231.53021077602!2d-90.3397240556525!3d75.43219560738548!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4e27617cd8fd32fb%3A0xb74527db2b1f08d0!2sFlashline%20Mars%20Arctic%20Research%20Station!5e0!3m2!1sen!2sca!4v1670358353922!5m2!1sen!2sca" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';
        mapDiv.classList.add("map");
        contentCard.appendChild(mapDiv);

        const mapMessage = document.createElement("p");
        mapMessage.textContent = 'We are located in the Mars Arctic Research base. These scientists just stay inside their fancy domes for months at a time, and only stop by at this restaurant once every week or two when they go out on their missions - and to make matters worse, they wear full astronaut suits. This restaurant will go under if we don\'t get more business soon!';
        contentCard.appendChild(mapMessage);

        const address = document.createElement("h5");
        address.textContent = 

        this.appendChild(contentCard);
    }

    return {
        generate: generate
    }
})();

export default contact;