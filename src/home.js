const home = () => {
  const homeDiv = document.createElement('div');
  const homeTitle = document.createElement('h3');
  homeTitle.classList.add('text-center', 'mt-5', 'text-white');
  homeTitle.textContent = 'Make yourself at home';
  const homeText = document.createElement('p');
  homeText.classList.add('text-center');
  homeText.textContent = 'Everything you need, we have.';
  homeDiv.appendChild(homeTitle);
  homeDiv.appendChild(homeText);
  return homeDiv;
};
export default home;
