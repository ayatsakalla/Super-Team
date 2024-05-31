// Team Member Data

const teamMembers = [
    {
       name: 'Alisson Becker',
       img: 'becker.png',
       age: 31,
       position: 'goalie', 
       location: 'Goalie', 
       currentTeam: 'Liverpool FC',
       strength: 'Shot-stopping prowess',
       skills: ['Distribution, Communication, Shot-stopping'],
       foot: 'Right Footed',
       biography: "Alisson Becker, the Brazilian goalkeeper renowned for his remarkable shot-stopping abilities, commanding presence in the box, and pivotal role in Liverpool's triumphs on both domestic and international stages."
    } ,
    {
       name: 'Reece James',
       img: 'james.png',
       age: 24,
       position: 'defense',
       currentTeam: 'Chelsea FC',
       location: 'Right Defense',
       strength: 'Tackling',
       skills: ['Pinpoint Crosses, Dribbling, Versatility'],
       foot: 'Right Footed',
       biography: "Reece James, a versatile and formidable right-back known for his defensive solidity, attacking flair, and contributions to Chelsea's successes"
    } , 
    {
       name: 'Virgil Van Dijk',
       img: 'virgil.webp',
       age: 36,
       position: 'defense',
       currentTeam: 'Liverpool FC',
       location: 'Left Center Defense',
       strength: 'Aerial Dominance',
       skills: ['Headers, Passing, Composure'],
       foot: 'Right Footed',
       biography: "Virgil van Dijk, the Dutch defensive maestro, rose to prominence as one of the world's best center-backs, leading Liverpool to unprecedented defensive stability and glory in both domestic and European competitions."
    } , 
    {
       name: 'Ibrahima Konate',
       img: 'konate.webp',
       age: 25,
       position: 'defense',
       currentTeam: 'Liverpool FC',
       location: 'Right Center Defense',
       strength: 'Physicality',
       skills: ['Tackling, Intercepts Passes, Positional Awareness'],
       foot: 'Right Footed',
       biography: "Ibrahim Konaté, the promising French center-back, has earned recognition for his commanding performances at the back and his potential to become a defensive stalwart for both club and country."
    }

   ]
   
   function generateTeamCards() {
       const goalieContainer = document.querySelector('#goalie')
       const defenderContainer = document.querySelector('#defender')
       const midfieldContainer = document.querySelector('#midfield')
       const forwardContainer = document.querySelector('#forward')
       const managerContainer = document.querySelector('#manager')
   
       teamMembers.forEach(member => {
   
           const card = document.createElement('div')
   
           card.classList.add('col-md-3')
   
           //style BG color of card on position
           let backgroundColor = ''
   
           switch(member.position.toLowerCase()) {
               case 'forward': 
                   backgroundColor = 'red'
                   break
               case 'midfield': 
                   backgroundColor = 'green'
                   break
               case 'defense': 
                   backgroundColor = 'blue'
                   break
               case 'manager': 
                   backgroundColor = 'grey'
                   break
                case 'goalie':
                    backgroundColor = 'pink'
                    break
           }

   
   
           card.innerHTML = `
        <div class="card">
            <div class = "card-header text-black text-center">
                <img class="img-fluid" src="${member.img}"></img>
                <h4>${member.name}</h4>
            </div>
            <div class = "card-body text-center" style = "background-color:${backgroundColor};">
                <p><strong>Position</strong> <br> ${member.location}</p>
                <p><strong>Age</strong> <br> ${member.age}</p>
                <p><strong>Current Team</strong> <br> ${member.currentTeam}</p>
                <p><strong>Dominant Foot</strong> <br> ${member.foot}</p>
                <p><strong>Strength</strong> <br> ${member.strength}</p>
                <p><strong>Skills</strong> <br> ${member.skills}</p>
                <p><strong>Dominant Foot</strong> <br> ${member.foot}</p>
                <p>${member.biography}</p>



            </div>
        </div>
        `

           for(let i = 1; i<card.children.length; i++ ) {
               card.children[i].style.backgroundColor = backgroundColor;
           }
   
           if (member.position === 'defense') {
            defenderContainer.appendChild(card);
           } else if(member.position === 'midfield') {
            midfieldContainer.appendChild(card);
           } else if(member.position === 'forward') {
            forwardContainer.appendChild(card);
           } else if (member.position === 'goalie') {
            goalieContainer.appendChild(card);
           } else {
            managerContainer.appendChild(card);
           }
           
       });
   }
   
   window.onload = generateTeamCards;