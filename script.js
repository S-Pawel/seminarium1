function showSection(sectionId) {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        if (section.id === sectionId) {
            section.classList.add('active');
        } else {
            section.classList.remove('active');
        }
    });
    const layersDropdown = document.getElementById('submenuLayers');
    const underlayDropdown = document.getElementById('submenuUnderlay');

    if (sectionId === 'photosSection' || sectionId === 'aboutSection') {
        layersDropdown.style.display = 'none';
        underlayDropdown.style.display = 'none';
    } else {
        layersDropdown.style.display = 'block';
        underlayDropdown.style.display = 'block';
    }


}