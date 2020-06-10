
function component() {
    const element = document.createElement('div');
  
    const text = `привет из веб-пака`;
    element.innerHTML = text;
  
    return element;
  }
  
  document.body.appendChild(component());