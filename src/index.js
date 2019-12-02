import './styles.css';
import { mainHeader, navigation } from './header';
import home from './home';
import menu from './menu';
import contact from './contact';

const topDiv = document.querySelector('#content');
topDiv.classList.add('container', 'text-center', 'mt-4', 'text-black');
topDiv.appendChild(mainHeader());
topDiv.appendChild(navigation());
const insideDiv = document.createElement('div');
topDiv.appendChild(insideDiv);
insideDiv.appendChild(home());

const homeTab = document.querySelector('#Home');
homeTab.addEventListener('click', () => {
  insideDiv.textContent = '';
  insideDiv.appendChild(home());
});

const menuTab = document.querySelector('#Menu');
menuTab.addEventListener('click', () => {
  insideDiv.textContent = '';
  insideDiv.appendChild(menu());
});

const contactTab = document.querySelector('#Contact');
contactTab.addEventListener('click', () => {
  insideDiv.textContent = '';
  insideDiv.appendChild(contact());
});