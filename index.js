const list = document.querySelector('.list');

// fetch('https://randomuser.me/api/?results=10&nat=us')
//   .then(response => response.json())
//   .then(data => updateLeaderBoard(data.results));


// fetch('data.json')  // Update the path to point to your local data.json file
//   .then(response => response.json())
//   .then(data => updateLeaderBoard(data.results))
//   .catch(error => console.error('Error fetching data:', error));


// Assuming the JSON file is named 'data.json'
fetch('data2.json')
  .then(response => response.json())
  .then(data => {
    data.people.forEach(person => {
      console.log('Name:', person.name);
      console.log('Score:', person.score);
      console.log('Image Name:', person['image-name']);
      insertPerson(person.name, person['image-name'], person.score);
    });
  })
  .catch(error => {
    console.error('Error reading JSON file:', error);
  });

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
