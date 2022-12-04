const copyright = (function() {

    // Generates the innerHTML for copyright message at the bottom of the page
    function generate() {
        const currentYear = new Date().getFullYear();
        // Link and font awesome icon
        const githubLink = '<a href="https://github.com/GeorgeCiesinski"><i class="fa-brands github-link fa-github"></i></a>';
        const copyrightInner = `Copyright &copy ${currentYear} George Ciesinski ${githubLink}`;
        return copyrightInner;
    }

    return {
        generate: generate,
    }
    
})();

export default copyright;