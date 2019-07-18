class DOMNodeCollection{
  constructor(htmlNodes){
    this.htmlNodes = htmlNodes;
  }

  html(string){
    if(string){
      this.htmlNodes.forEach(el => el.innerHTML = string)
    } else{
      return this.htmlNodes[0].innerHTML;
    }
  }

  empty(){
    this.htmlNodes.map(el => el.innerHTML = "");
  }
  
  append(el){
    if(typeof el === 'string'){
      this.htmlNodes.forEach(node => node.innerHTML += el);
    } else{
      this.htmlNodes.forEach(node => node.innerHTML += (el.htmlNodes[0].outerHTML));
    }
  }

  attr(atts, val){
    if(val){
      this.htmlNodes.forEach(node => node.setAttribute(atts, val))
    } else{
      this.htmlNodes.forEach(node => {
        if(node.getAttribute(atts)) node.getAttribute(atts)
      });
    }
  }

  addClass(claw) {
    this.htmlNodes.forEach(node => {
      node.setAttribute('class', claw)
    });
  }
  removeClass(){
    this.htmlNodes.forEach(node =>{
      node.removeAttribute('class');
    });
  }

  children(){
    let msChilds = [];
    this.htmlNodes.forEach(node => {
      msChilds.push(node.children);
    })

    return new DOMNodeCollection(msChilds);
  }

  parent(){
    let papaNode = [];
    this.htmlNodes.forEach(node =>{
      papaNode.push(node.parentNode);
    });
    return new DOMNodeCollection(papaNode);
  }

  find(selectyboi) {
    let selects = []
    selectyboi.querySelectorAll(this.htmlNodes);
    return new DOMNodeCollection(selects)
  }

  remove(){
    this.htmlNodes.forEach(node =>{
      node.innerHTML = "";
    });
  }

  on(action, cb){
    this.htmlNodes.forEach(node =>{
      node.addEventListener(action, cb);
    });
    this.callback = cb;
  }
  off(action){
    this.htmlNodes.forEach(node =>{
      node.removeEventListener(action, this.callback);
    });
  }
}

module.exports = DOMNodeCollection;

