// Team Member Data

const teamMembers = [
    {
       name: 'Lionel Messi',
       age: 36,
       currentTeam: true,
       position: 'forward',
       strengths: 'Ball Control',
       skills: ['Dribbling', 'Finishing', 'Playmaking'],
       foot: 'Left Footed',
       biography: 'Messi oh where do I begin ever since Ive seen you cut in on that magical left foot I knew you were my king. The way you gracefully fry your defenders and leave them in the dust with your excellent ball control and vision of the game. You revolutionized the game and are truly the best of all time. My King. The man who shook hands with paradise. The little boy from Rosario. Leo Messi <33'
    } ,
    {
       name: 'Cristiano Ronaldo',
       age: 36,
       currentTeam: true,
       position: 'midfielder',
       strengths: 'Ball Control',
       skills: ['Dribbling', 'Finishing', 'Playmaking'],
       foot: 'Left Footed',
       biography: 'Messi oh where do I begin ever since Ive seen you cut in on that magical left foot I knew you were my king. The way you gracefully fry your defenders and leave them in the dust with your excellent ball control and vision of the game. You revolutionized the game and are truly the best of all time. My King. The man who shook hands with paradise. The little boy from Rosario. Leo Messi <33'
    }   ,
    {
       name: 'Lamine Yamal',
       age: 36,
       currentTeam: true,
       position: 'defender',
       strengths: 'Ball Control',
       skills: ['Dribbling', 'Finishing', 'Playmaking'],
       foot: 'Left Footed',
       biography: 'Messi oh where do I begin ever since Ive seen you cut in on that magical left foot I knew you were my king. The way you gracefully fry your defenders and leave them in the dust with your excellent ball control and vision of the game. You revolutionized the game and are truly the best of all time. My King. The man who shook hands with paradise. The little boy from Rosario. Leo Messi <33'
    } , 
    {
       name: 'Enzo Fernandez',
       age: 36,
       currentTeam: true,
       position: 'defender',
       strengths: 'Ball Control',
       skills: ['Dribbling', 'Finishing', 'Playmaking'],
       foot: 'Left Footed',
       biography: 'Messi oh where do I begin ever since Ive seen you cut in on that magical left foot I knew you were my king. The way you gracefully fry your defenders and leave them in the dust with your excellent ball control and vision of the game. You revolutionized the game and are truly the best of all time. My King. The man who shook hands with paradise. The little boy from Rosario. Leo Messi <33'
    }  , 
    {
       name: 'Virgil Van Dyke',
       age: 36,
       currentTeam: true,
       position: 'defender',
       strengths: 'Ball Control',
       skills: ['Dribbling', 'Finishing', 'Playmaking'],
       foot: 'Left Footed',
       biography: 'Messi oh where do I begin ever since Ive seen you cut in on that magical left foot I knew you were my king. The way you gracefully fry your defenders and leave them in the dust with your excellent ball control and vision of the game. You revolutionized the game and are truly the best of all time. My King. The man who shook hands with paradise. The little boy from Rosario. Leo Messi <33'
    } , 
    {
       name: 'Mohamed Salah',
       age: 36,
       currentTeam: true,
       position: 'defender',
       strengths: 'Ball Control',
       skills: ['Dribbling', 'Finishing', 'Playmaking'],
       foot: 'Left Footed',
       biography: 'Messi oh where do I begin ever since Ive seen you cut in on that magical left foot I knew you were my king. The way you gracefully fry your defenders and leave them in the dust with your excellent ball control and vision of the game. You revolutionized the game and are truly the best of all time. My King. The man who shook hands with paradise. The little boy from Rosario. Leo Messi <33'
    } , 
    {
       name: 'Kevin De Bruyne',
       age: 36,
       currentTeam: true,
       position: 'defender',
       strengths: 'Ball Control',
       skills: ['Dribbling', 'Finishing', 'Playmaking'],
       foot: 'Left Footed',
       biography: 'Messi oh where do I begin ever since Ive seen you cut in on that magical left foot I knew you were my king. The way you gracefully fry your defenders and leave them in the dust with your excellent ball control and vision of the game. You revolutionized the game and are truly the best of all time. My King. The man who shook hands with paradise. The little boy from Rosario. Leo Messi <33'
    } , 
    {
       name: 'Roberto Firmino',
       age: 36,
       currentTeam: true,
       position: 'defender',
       strengths: 'Ball Control',
       skills: ['Dribbling', 'Finishing', 'Playmaking'],
       foot: 'Left Footed',
       biography: 'Messi oh where do I begin ever since Ive seen you cut in on that magical left foot I knew you were my king. The way you gracefully fry your defenders and leave them in the dust with your excellent ball control and vision of the game. You revolutionized the game and are truly the best of all time. My King. The man who shook hands with paradise. The little boy from Rosario. Leo Messi <33'
    } , 
    {
       name: 'Alisson Becker',
       age: 36,
       currentTeam: true,
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
   
   
           card.innerHTML = `
        <div class="card m-3">
            <div class = "card-header text-black text-center">
                ${member.name}
            </div>
            <div class = "card-body text-white text-center" style = "background-color:${backgroundColor};">
                <p><strong>Position:</strong> ${member.position}</p>
                <p><strong>Age:</strong> ${member.age}</p>
            </div>
        </div>
        `

           for(let i = 1; i<card.children.length; i++ ) {
               card.children[i].style.backgroundColor = backgroundColor;
           }
   
           teamCardsContainer.appendChild(card)
   
           
       });
   }
   
   window.onload = generateTeamCards;