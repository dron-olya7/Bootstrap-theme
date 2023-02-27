const navigation = document.querySelector(".sidebar");
const navToggle = document.querySelector(".arrow-button");

navToggle.addEventListener("click", () => {
    navigation.classList.toggle("expand");
});