const contact = () => {
  const contactDiv = document.createElement('div');
  const contactTitle = document.createElement('h3');
  contactTitle.classList.add('text-center', 'text-white', 'mt-5');
  contactTitle.textContent = 'Please come and contact us in the location shown below:';

  const contactPlace = document.createElement('h4');
  contactPlace.textContent = 'Ethiopia, Addis Ababa';   
  contactDiv.appendChild(contactTitle);
  contactDiv.appendChild(contactPlace);

  return contactDiv;
};

export default contact;