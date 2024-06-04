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
       skills: ['Distribution', 'Communication', 'Shot-stopping'],
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
       skills: ['Pinpoint Crosses', 'Dribbling', 'Versatility'],
       foot: 'Right Footed',
       biography: "Reece James, a versatile and formidable right-back known for his defensive solidity, attacking flair, and contributions to Chelsea's successes"
    } , 
    {
       name: 'Ibrahima Konate',
       img: 'konate.png',
       age: 25,
       position: 'defense',
       currentTeam: 'Liverpool FC',
       location: 'Right Center Defense',
       strength: 'Physicality',
       skills: ['Tackling', 'Intercepting Passes', 'Positional Awareness'],
       foot: 'Right Footed',
       biography: "Ibrahim Konate, the promising French center-back, has earned recognition for his commanding performances at the back and his potential to become a defensive stalwart for both club and country."
    } ,
    {
       name: 'Virgil Van Dijk',
       img: 'virgil.webp',
       age: 36,
       position: 'defense',
       currentTeam: 'Liverpool FC',
       location: 'Left Center Defense',
       strength: 'Aerial Dominance',
       skills: ['Headers', 'Passing', 'Composure'],
       foot: 'Right Footed',
       biography: "Virgil van Dijk, the Dutch defensive maestro, rose to prominence as one of the world's best center-backs, leading Liverpool to unprecedented defensive stability and glory in both domestic and European competitions."
    } , 
    {
       name: 'Josko Gvardiol',
       img: 'gvardiol.png',
       age: 22,
       position: 'defense',
       currentTeam: 'Manchester City FC',
       location: 'Left Defense',
       strength: 'Positioning',
       skills: ['Tackling', 'Passing', 'Composure'],
       foot: 'Left Footed',
       biography: "Josko Gvardiol, a talented left-footed defender known for his impeccable positioning and precise passing, has quickly risen through the ranks to become a formidable presence on the pitch."
    } ,
    {
        name: 'Phil Foden',
        img: 'foden.png',
        age: 24,
        position: 'midfield',
        currentTeam: 'Manchester City FC',
        location: 'Right Defensive Center Midfield',
        strength: 'Dribbling',
        skills: ['Finishing', 'Vision', 'Decision-making'],
        foot: 'Left Footed',
        biography: "Phil Foden, the prodigious left-footed midfielder renowned for his mesmerizing dribbling skills and innate creativity, has emerged as one of England's brightest talents on the football stage."
    } , 
    {
        name: 'Kevin De Bruyne',
        img: 'kevin.png',
        age: 32,
        position: 'midfield',
        currentTeam: 'Manchester City FC',
        location: 'Center Attacking Midfield',
        strength: 'Through Balls',
        skills: ['Crossing', 'Vision', 'Tacticals'],
        foot: 'Right Footed',
        biography: "Kevin De Bruyne, the versatile right-footed midfielder celebrated for his breathtaking passes and game-changing contributions, has solidified his place as one of football's premier playmakers." 
    } , 
    {
        name: 'Enzo Fernandez',
        img: 'enzo.png',
        age: 29,
        position: 'midfield',
        currentTeam: 'Chelsea FC',
        location: 'Left Center Defensive Midfield',
        strength: 'Vision',
        skills: ['Passing', 'Precision', 'Control'],
        foot: 'Right Footed',
        biography: "Enzo Fernandez, the right-footed midfield maestro celebrated for his visionary passing and tactical astuteness, has carved out a distinguished career marked by his integral role in orchestrating play for his teams"
    } ,
    {
        name: 'Mohamed Salah',
        img: 'salah.png',
        age: 32,
        position: 'forward',
        currentTeam: 'Liverpool FC',
        location: 'Right Wing',
        strength: 'Speed',
        skills: ['Finishing', 'Dribbling', 'Tacticals'],
        foot: 'Left Footed',
        biography: "Mohamed Salah, the left-footed Egyptian sensation renowned for his lightning speed and deadly precision in front of goal, has become a global icon through his remarkable performances for club and country."
    } ,
    {
        name: 'Erling Haaland',
        img: 'haaland.png',
        age: 23,
        position: 'forward',
        currentTeam: 'Manchester City FC',
        location: 'Striker',
        strength: 'Aerial Ability',
        skills: ['Finishing', 'Speed', 'Strength'],
        foot: 'Right Footed',
        biography: "Erling Haaland, the towering right-footed striker known for his lethal combination of speed, power, and goal-scoring prowess, has taken the football world by storm with his incredible talent and scoring records."
    } , 
    {
        name: 'Diogo Jota',
        img: 'jota.png',
        age: 27,
        position: 'forward',
        currentTeam: 'Liverpool FC',
        location: 'Left Wing',
        strength: 'Versatility',
        skills: ['Finishing', 'Dribbling', 'Tacticals'],
        foot: 'Right Footed',
        biography: "Diogo Jota, the right-footed Portuguese forward known for his lethal finishing and versatility in the attack, has rapidly risen through the ranks to establish himself as a key player for both club and country."
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
   
           card.classList.add('col-3')
   
           //style BG color of card on position
           let backgroundColor = ''
   
           switch(member.currentTeam) {
               case 'Liverpool FC': 
                   backgroundColor = '#cc0000'
                   break
               case 'Chelsea FC': 
                   backgroundColor = '#191970'
                   break
                case 'Manchester City FC':
                    backgroundColor = '#48d1cc'
                    break
           }

   
   
           card.innerHTML = `
        <div class="card h-100">
            <div class = "card-header text-black text-center">
                <img class="img-fluid" src="${member.img}"></img>
                <h4 class="caramel">${member.name}</h4>
            </div>
            <div class = "card-body text-center text-white caramel" style = "background-color:${backgroundColor};">
                <p><strong>Position</strong> <br> ${member.location}</p>
                <p><strong>Age</strong> <br> ${member.age}</p>
                <p><strong>Current Team</strong> <br> ${member.currentTeam}</p>
                <p><strong>Dominant Foot</strong> <br> ${member.foot}</p>
                <p><strong>Strength</strong> <br> ${member.strength}</p>
                <p><strong>Skills</strong> <br> ${member.skills.map(skill => `<li>${skill}</li>`).join('')}</p>
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