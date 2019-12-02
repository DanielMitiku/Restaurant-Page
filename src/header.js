
const mainHeader = () => {
  const topHeader = document.createElement('h1');
  topHeader.textContent = 'Restaurant Page';
  topHeader.classList.add('text-white');
  return topHeader;
};

const navigation = () => {
  const ul = document.createElement('ul');
  const lists = ['Home', 'Menu', 'Contact'];
  ul.classList.add('nav', 'nav-tabs');
  for (let i = 0; i < 3; i += 1) {
    const li = document.createElement('li');
    li.classList.add('nav-item');
    const link = document.createElement('a');
    link.textContent = lists[i];
    link.setAttribute('id', lists[i]);
    link.setAttribute('href', '#');
    link.classList.add('nav-link');
    li.appendChild(link);
    ul.appendChild(li);
  }
  return ul;
};

export { mainHeader, navigation };