
  document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    const resultMessage = document.getElementById('resultMessage');
  
    form.addEventListener('submit', async (event) => {
      event.preventDefault(); // Empêche le rechargement de la page
  
      // Récupérer les données du formulaire
      const formData = new FormData(form);
  
      // Si l'option "Recevoir une copie" est cochée, ajouter le champ _cc
      const sendCopyChecked = document.getElementById('sendCopy').checked;
      if (sendCopyChecked) {
        const email = document.getElementById('email').value;
        formData.append('_cc', email);
      }
  
      try {
        const response = await fetch('https://formspree.io/f/xyzepwdd', {  // Remplacez abc123 par votre identifiant Formspree
          method: 'POST',
          headers: {
            'Accept': 'application/json'
          },
          body: formData
        });
  
        if (response.ok) {
          resultMessage.innerHTML = `<div class="alert alert-success">Votre message a été envoyé avec succès !</div>`;
          form.reset(); // Réinitialise le formulaire après l'envoi
        } else {
          resultMessage.innerHTML = `<div class="alert alert-danger">Une erreur s'est produite. Veuillez réessayer plus tard ou nous envoyer un email directement à l'adresse info@renovo-suisse.ch.</div>`;
        }
      } catch (error) {
        resultMessage.innerHTML = `<div class="alert alert-danger">Erreur réseau. Veuillez vérifier votre connexion.</div>`;
        console.error('Erreur:', error);
      }
    });
  });
  