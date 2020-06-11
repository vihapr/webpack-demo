
import createMenu from './menu.js';

const menu = createMenu(['главная', 'о нас', 'помощь'], 'main-menu');
console.log (menu);

function component() {
    const element = document.createElement('div');
  
    const text = `привет из веб-пака 4`;
    element.innerHTML = text;
  
    return element;
  }
  
  document.body.appendChild(menu);
  document.body.appendChild(component());