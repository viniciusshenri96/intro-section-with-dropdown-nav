export default function showDropdown(e) {
  let dropdownButton;
  let currentDropdown;
  const classActive = "active";
  dropdownButton = e.target.matches("[data-dropdown-button]");

  if (!dropdownButton && e.target.closest("[data-dropdown]")) return;

  if (dropdownButton) {
    currentDropdown = e.target.closest("[data-dropdown]");
    dropdownButton = e.target.closest("[data-dropdown-button]");

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

  document.querySelectorAll("[data-dropdown-button].active").forEach((menu) => {
    if (dropdownButton === menu) return;
    menu.classList.remove(classActive);
  });
}

document.addEventListener("click", showDropdown);
