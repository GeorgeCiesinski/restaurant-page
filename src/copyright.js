const copyright = (function() {

    // Generates the innerHTML for copyright message at the bottom of the page
    function generate() {
        const currentYear = new Date().getFullYear();
        return `Copyright &copy ${currentYear} George Ciesinski`;
    }

    return {
        generate: generate,
    }
    
})();

export default copyright;