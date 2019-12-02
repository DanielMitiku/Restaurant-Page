const menu = () => {
  const menuDiv = document.createElement('div');
  const menuTitle = document.createElement('h3');
  menuTitle.classList.add('text-center', 'text-white', 'mt-5');
  menuTitle.textContent = 'Here is a list of our Menu';
  const menuList = document.createElement('ul');
  menuList.classList.add('list-group');
  const menuArray = ['Pizza', 'Burger', 'Chicken', 'Fish', 'Salad', 'Lasagna', 'Beef', 'Sishu', 'Rice'];

  for (let i = 0; i < 9; i += 1) {
    const menuItem = document.createElement('li');
    menuItem.classList.add('list-group-item');
    menuItem.textContent = menuArray[i];
    menuItem.classList.add('menu-items');
    menuList.appendChild(menuItem);
  }

  menuDiv.appendChild(menuTitle);
  menuDiv.appendChild(menuList);
  return menuDiv;
};
export default menu;
