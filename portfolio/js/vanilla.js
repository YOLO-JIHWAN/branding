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