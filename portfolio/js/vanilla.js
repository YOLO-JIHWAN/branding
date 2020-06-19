//sort menu
/*
const elNav = document.querySelector(".sort");
const elLinks = elNav.querySelectorAll("ul li");
elNav.style.setPropery("--total", elLinks.length);
elLinks.forEach( (elLink, i) => {
    elLink.addEventListener("click", () => {
        elLinks.forEach( l => delete l.dataset.active );
        elLink.dataset.active = true;
        elNav.style.setPropery("--active", i);
    });
});

elLinks[0].dataset.active = true;
elNav.style.setPropery("--active", 0);
*/
//clipboard (email)
function clipboard() {
    const copyEmail = document.querySelector("#copyEmail");
    const btnEmailCopy = document.querySelector(".copy-email");
    btnEmailCopy.addEventListener("click", copyToEmail);
    function copyToEmail(email) {
        copyEmail.select();
        copyEmail.setSelectionRange(0, 99999); /* For mobile */
        document.execCommand("copy");
        alert("복사되었습니다.");
    }
}
clipboard();