$.fn.toggleDarkMode = function() {
    if (this.find("html").getAttr("data-bs-theme") === "dark" ) {
        this.attr( "data-bs-theme", "light" );
    } else{
        this.attr( "data-bs-theme", "dark" );
    }
};