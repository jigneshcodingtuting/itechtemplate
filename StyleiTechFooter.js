/* Code by CodingTuting.Com */
function footerToggle(footerBtn) {
    $(footerBtn).toggleClass("btnActive");
    $(footerBtn).next().toggleClass("active");
    $(footerBtn).next().$("li a").toggleClass("auto-pointer");
}