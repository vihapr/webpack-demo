
function component() {
    const element = document.createElement('div');
  
    const text = `привет из веб-пака 3`;
    element.innerHTML = text;
  
    return element;
  }
  
  document.body.appendChild(component());