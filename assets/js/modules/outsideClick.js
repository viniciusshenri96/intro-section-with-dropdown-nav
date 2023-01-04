export default function clickOutside(element, callback) {
  const html = document.querySelector("html");
  const outside = "data-outside";

  if (!element.hasAttribute(outside)) {
    setTimeout(() => {
      html.addEventListener("click", handleOutsideClick);
    });
    element.setAttribute(outside, "");
  }
  function handleOutsideClick(event) {
    if (!element.contains(event.target)) {
      element.removeAttribute(outside);
      setTimeout(() => {
        html.removeEventListener("click", handleOutsideClick);
      });
      callback();
    }
  }
}
