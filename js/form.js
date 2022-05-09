let nom = document.getElementById('nom');
let prenom = document.getElementById('prenom');
let objet = document.getElementById('objet');
let commentaire = document.getElementById('commentaire');
let rgpd = document.getElementById('rgpd');
let button = document.getElementById('submit');
let video = document.getElementById('video');
let message = document.getElementById('message');
let messageContent
let valide = false;


//gestion du click sur le bouton
button.addEventListener('click',traiterFormulaire);

function traiterFormulaire(){
    let nomVal = nom.value;
    let prenomVal = prenom.value;
    let objetVal = objet.value;
    let commentaireVal = commentaire.value;
    
    if(prenom.value.toLowerCase() === "giga" && nom.value.toLowerCase() === "chad"){
        video.play();
        document.getElementById("video").className = "video";
    }

    if (nomVal === '') {
        messageContent = 'Le champ nom est vide'
        genererMessage(messageContent)
      } else if (prenomVal === '') {
        messageContent = 'Le champ prénom est vide'
        genererMessage(messageContent)
      } else if (objetVal === '0') {
        messageContent = "Vous n'avez pas sélectionné d'objet"
        genererMessage(messageContent)
      } else if (commentaireVal === '') {
        messageContent = "Vous n'avez pas saisi de message"
        genererMessage(messageContent)
      } else {
        if (!rgpd.checked){ 
          messageContent = 'La validation du RGPD est obligatoire'
          genererMessage(messageContent)
        } else {
            messageContent = 'Votre formulaire a été envoyé'
        valide = true
        genererMessage(messageContent)
        }
      }
    }
    
    function genererMessage (messageContent) {
      message.textContent = messageContent  
      if (valide) {
        message.classList.add('success')
        message.classList.remove('error')
        message.style.display ='block'
      } else {
        message.classList.add('error')
        message.classList.remove('success')
        message.style.display='block'
      }
    }


