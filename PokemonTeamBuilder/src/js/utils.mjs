// render html list with a template function
export function renderListWithTemplate(templateFn, parentElement, list, position = "beforeend", clear = false) {
  const targetElement = document.querySelector(parentElement);

  if (clear) {
    targetElement.innerHTML = ""; // Clear out the contents if clear is true
  }

  const htmlStrings = list.map(templateFn);
  targetElement.insertAdjacentHTML(position, htmlStrings.join(''));
}
// render html with a template function
export function renderCardWithTemplate(templateFn, parentElement, data, position = "beforeend", clear = false) {
  const targetElement = document.querySelector(parentElement);

  if (clear) {
    targetElement.innerHTML = ""; // Clear out the contents if clear is true
  }
  targetElement.insertAdjacentHTML(position, templateFn(data));
}
// get pokemon from query string
export function getParam(param) {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const data = urlParams.get(param)
  return data
}