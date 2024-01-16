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

const messageForm = document.getElementsByName ('leave_message')[0];
messageForm.addEventListener('submit',function(event) {
    event.preventDefault();
    const userName = event.target.userName.value;
    const userEmail = event.target.userEmail.value;
    const userMessage = event.target.userMessage.value;

    console.log(`Name: ${userName}`);
    console.log(`Email: ${userEmail}`);
    console.log(`Message: ${userMessage}`);

  const messageSection = document.getElementById('messages');
  const messageList = messageSection.querySelector('ul');
  const newMessage = document.createElement('li');
  
  newMessage.innerHTML =`
  <a href="mailto:${userEmail}">${userName}</a>
  <span>${userMessage}</span>
  `;
  
  const removeButton = document.createElement('button');
  removeButton.innerText = "Remove";
  removeButton.setAttribute("type","button");
  removeButton.addEventListener('click',function(event){
  const entry = event.target.parentNode;
  entry.remove();
  
 });

 newMessage.appendChild(removeButton);
 messageList.appendChild(newMessage); 
   messageForm.reset();
});
