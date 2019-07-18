const DOMNodeCollection = require('./dom_node_collection');
document.addEventListener('DOMContentLoaded', () =>{
  queue.forEach(func =>{
    func();
  });
});
const queue = [];
function $l(selector) {
  if (typeof selector === 'string') {
    let nodeList = document.querySelectorAll(selector);
    const nodeListArr = Array.from(nodeList);
    return new DOMNodeCollection(nodeListArr);
  } else if (selector instanceof HTMLElement) {
    const selectorArr = [selector];
    return new DOMNodeCollection(selectorArr);
  } else if (selector instanceof Function) {
    if (document.readyState === 'complete') {
      selector();
    } else {
      queue.push(selector);
    }
  }
}
$l.prototype.ajax = function (options) {
  let type = options[type];
  let url = options[url];
}
window.$l = $l;
