// Viene fornito un layout di base in cui è presente una card di esempio inserita staticamente 
// nell’html. Questa card serve solo come timbro del markup necessario per ottenere il 
// risultato finale e dovrà quindi essere rimossa dall’html.
// Aggiungere un file js in cui definire un array di oggetti che rappresentano i membri 
// del team. Ogni membro ha le informazioni necessarie per stampare 
// la relativa card: Nome, Ruolo e Foto.
// Una volta definita la struttura dati, prendendo come riferimento la card 
// di esempio presente nell'html, stampare dinamicamente una card per ogni membro del team.

// // START

// SELEZIONO DA HTML DIV IN CUI STAMPARE LE CARDS
const cardContain = document.querySelector('.team-container');
console.log(cardContain)

// genero un array ourTeam che conterrà oggetti con info membri
const userData = [
    {
        // ESEMPIO OGGETTO CON INFO MEMBRO
        img : 'wayne-barnett-founder-ceo.jpg',
        username : 'Wayne Barnett',
        job : 'Founder & CEO',
    },
    {
        img : 'angela-caroll-chief-editor.jpg',
        username : 'Angela Caroll',
        job : 'Chief Editor',
    },
    {
        img : 'walter-gordon-office-manager.jpg',
        username : 'Walter Gordon',
        job : 'Office Manager',
    },
    {
        img : 'angela-lopez-social-media-manager.jpg',
        username : 'Angela Lopez',
        job : 'Social Media Manager',
    },
    {
        img : 'scott-estrada-developer.jpg',
        username : 'Scott Estrada',
        job : 'Developer',
    },
    {
        img : 'barbara-ramos-graphic-designer.jpg',
        username : 'Barbara Ramos',
        job : 'Grapfic Designer',
    }
]

// PARTE LOGICA
// uso un ciclo for per stampare gli oggetti contenuti nell'array
// il ciclo prosegue fin tutta la lunghezza dell'array

for(let i = 0; i < userData.length; i++) {
    let thisUser = userData[i];
    const classDraw = `
    <div class="team-card">
            <div class="card-image">
                <div class="card-image">
                <img
                src="img/${thisUser.img}"
                alt="${thisUser.username}"
                />
            </div>
            <div class="card-text">
              <h3>${thisUser.username}</h3>
              <p>${thisUser.job}</p>
            </div>
          </div>
    `
    cardContain.innerHTML += classDraw
}

// BONUS:
// Utilizzare gli input presenti nella pagina per permettere all'utente di aggiungere 
// nuovi membri del team: cliccando sul pulsante "add" viene creato un nuovo oggetto, 
// il quale viene inserito nell'array iniziale e viene stampata una nuova card con 
// tutte le informazioni inserite dall'utente.