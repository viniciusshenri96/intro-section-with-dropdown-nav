export default function clickOutside(element, events, callback) {
  const html = document.querySelector("html");
  const outside = "data-outside";

  // Só vai acontecer por causa do efeito bubble
  if (!element.hasAttribute(outside)) {
    setTimeout(() => {
      html.addEventListener(events, handleOutsideClick);
    });
    element.setAttribute(outside, "");
  }
  // element.setAttribute(outside, '')
  function handleOutsideClick(event) {
    console.log(element.contains(event.target));
    if (!element.contains(event.target)) {
      element.removeAttribute(outside);
      setTimeout(() => {
        // Removendo o evento de click do html, para ele ocorrer apenas uma vez
        html.removeEventListener(events, handleOutsideClick);
      });
      callback();
    }
  }
}
