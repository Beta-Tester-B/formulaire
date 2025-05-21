 

  document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('.navbar-collapse a');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    const navbarToggler = document.querySelector('.navbar-toggler');
    
    // Ferme le menu lorsque l'on clique sur un lien
    navLinks.forEach(function(link) {
      link.addEventListener('click', function () {
        const collapseInstance = bootstrap.Collapse.getInstance(navbarCollapse);
        if (collapseInstance) {
          collapseInstance.hide();
        }
      });
    });
    
    // Ajoute un écouteur sur le bouton toggler pour s'assurer qu'il fonctionne
    navbarToggler.addEventListener('click', function () {
      const collapseInstance = bootstrap.Collapse.getInstance(navbarCollapse);
      if (collapseInstance) {
        collapseInstance.toggle();
      }
    });
  });
  