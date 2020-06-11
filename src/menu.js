export default function createMenu(menuItems, menuClass){
    const menu = document.createElement('ul');
    menu.className = menuClass;
    const h2 = document.createElement('h2');
    h2.innerText = 'Главное меню из js';
    menu.appendChild(h2);

    menuItems.map( (i)=>{
        let li = document.createElement('li');
        li.innerText = i;
        menu.appendChild(li);
    });

    return menu
}