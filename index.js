const list = document.querySelector('.list');

fetch('https://randomuser.me/api/?results=10&nat=us')
  .then(response => response.json())
  .then(data => updateLeaderBoard(data.results));

function updateLeaderBoard(persons) {
  persons.forEach((person, index) => {
    let fullName = `${person.name.first} ${person.name.last}`;
    insertPerson(fullName, person.picture.medium, randomizedScore(index));
  });
}

function insertPerson(name, pictureUrl, index) {
  let nameSpan = document.createElement('span');
  nameSpan.classList.add('name');
  nameSpan.appendChild(document.createTextNode(name));
  
  let scoreSpan = document.createElement('span');
  scoreSpan.classList.add('score');
  scoreSpan.appendChild(document.createTextNode(index));
  
  let img = document.createElement('img');
  img.src = pictureUrl;
    
  let personNode = document.createElement('li');
  personNode.appendChild(img);
  personNode.appendChild(nameSpan);
  personNode.appendChild(scoreSpan);
  
  list.appendChild(personNode);
}

function randomizedScore(index) {
  return 100 - index * 10;
}
