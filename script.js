// Team Member Data

const teamMembers = [
    {
       name: 'Lionel Messi',
       age: 36,
       activePlayer: true,
       position: 'forward',
       strengths: 'Ball Control',
       skills: ['Dribbling', 'Finishing', 'Playmaking'],
       foot: 'Left Footed',
       biography: 'Messi oh where do I begin ever since Ive seen you cut in on that magical left foot I knew you were my king. The way you gracefully fry your defenders and leave them in the dust with your excellent ball control and vision of the game. You revolutionized the game and are truly the best of all time. My King. The man who shook hands with paradise. The little boy from Rosario. Leo Messi <33'
    } ,
    {
       name: 'Lionel Messi Jr',
       age: 36,
       activePlayer: true,
       position: 'midfielder',
       strengths: 'Ball Control',
       skills: ['Dribbling', 'Finishing', 'Playmaking'],
       foot: 'Left Footed',
       biography: 'Messi oh where do I begin ever since Ive seen you cut in on that magical left foot I knew you were my king. The way you gracefully fry your defenders and leave them in the dust with your excellent ball control and vision of the game. You revolutionized the game and are truly the best of all time. My King. The man who shook hands with paradise. The little boy from Rosario. Leo Messi <33'
    }   ,
    {
       name: 'Lionel Messi',
       age: 36,
       activePlayer: true,
       position: 'defender',
       strengths: 'Ball Control',
       skills: ['Dribbling', 'Finishing', 'Playmaking'],
       foot: 'Left Footed',
       biography: 'Messi oh where do I begin ever since Ive seen you cut in on that magical left foot I knew you were my king. The way you gracefully fry your defenders and leave them in the dust with your excellent ball control and vision of the game. You revolutionized the game and are truly the best of all time. My King. The man who shook hands with paradise. The little boy from Rosario. Leo Messi <33'
    }   
   ]
   
   function generateTeamCards() {
       const teamCardsContainer = document.querySelector('#teamCard')
   
       teamMembers.forEach(member => {
   
           const card = document.createElement('div')
   
           card.classList.add('col-md-4')
   
           //style BG color of card on position
           let backgroundColor = ''
   
           switch(member.position.toLowerCase()) {
               case 'forward': 
                   backgroundColor = 'red'
                   break
               case 'midfielder': 
                   backgroundColor = 'green'
                   break
               case 'defender': 
                   backgroundColor = 'blue'
                   break
               case 'forward': 
                   backgroundColor = 'grey'
                   break
           }
   
           card.style.backgroundColor = backgroundColor;
   
           card.innerHTML = `
           <div class="card">
               <div class="card-header">
                   ${member.name}
               </div>
           </div>
   
           
   
   
   
           `
           for(let i = 1; i<card.children.length; i++ ) {
               card.children[i].style.backgroundColor = backgroundColor
           }
   
           teamCardsContainer.appendChild(card)
   
           
       });
   }
   
   window.onload = generateTeamCards;