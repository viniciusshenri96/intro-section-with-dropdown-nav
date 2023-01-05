export default function dropDownMenuFunction() {
  function showDropdown(e) {
    if (e.type === "touchstart") {
      document.removeEventListener("click", showDropdown);
    }
    let dropdownButton;
    let currentDropdown;
    const classActive = "active";
    dropdownButton = e.target.matches("[data-dropdown-button]");
    dropdownButton = e.target.closest("[data-dropdown-button]");
    currentDropdown = e.target.closest("[data-dropdown]");

    if (!dropdownButton && e.target.closest("[data-dropdown]")) return;

    if (dropdownButton) {
      currentDropdown.classList.toggle(classActive);
      dropdownButton.classList.toggle(classActive);
      if (!currentDropdown.classList.contains(classActive)) {
        return currentDropdown.setAttribute("aria-expanded", "false");
      }
      currentDropdown.setAttribute("aria-expanded", "true");
    }

    document.querySelectorAll("[data-dropdown].active").forEach((dropdown) => {
      if (dropdown === currentDropdown) return;
      dropdown.classList.remove(classActive);
    });

    document
      .querySelectorAll("[data-dropdown-button].active")
      .forEach((menu) => {
        if (dropdownButton === menu) return;
        menu.classList.remove(classActive);
      });
  }

  window.addEventListener("resize", function () {
    if (window.matchMedia("min-widh: 1400px")) {
      document.addEventListener("click", showDropdown);
    }
  });

  document.addEventListener("touchstart", showDropdown);
  document.addEventListener("click", showDropdown);
}
