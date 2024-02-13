//  Afficher les sections sélectionnées

function afficherSection(sectionId) {
    // Masquer toutes les sections
    let sections = document.querySelectorAll('.contenaire section');
    sections.forEach(function(section) {
        section.classList.add('hidden');
    });

    // Afficher la section correspondante
    let selectedSection = document.getElementById(sectionId);
    selectedSection.classList.remove('hidden');
}