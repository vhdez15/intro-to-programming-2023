const today = new Date();
const thisYear = today.getFullYear();
const footer = document.querySelector('footer');
const copyright = document.createElement ('p');
copyright.innerHTML = ' Vale Hdez' + thisYear;
footer.appendChild(copyright);
const skills = ['fluent in spanish','Works well with others','Adaptable','JavaScript'];
const skillsSection = document.getElementById('skills');
const skillsList = skillsSection.querySelector('ul')
for (let i=0; i< skills.length; i++){
let listItem = document.createElement('li');
listItem.innerText = skills[i];
skillsList.appendChild(listItem);
};