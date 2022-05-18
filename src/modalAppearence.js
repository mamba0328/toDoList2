function openModal(lightTheTag, chosenTags) { 
    chosenTags = [];
    lightTheTag(chosenTags);
    const modal = document.getElementById('modalWindow');
    const overlay = document.getElementById('overlay')
    modal.classList.add('active');
    overlay.classList.add('active');
    const deadlines = Array.from(document.getElementsByClassName('deadline'));
    deadlines.forEach(deadline => { 
        deadline.style.color = 'rgb(78,78,78)'
    })
}

function closeModal() { 
    const modal = document.getElementById('modalWindow');
    const overlay = document.getElementById('overlay');
    modal.classList.remove('active');
    overlay.classList.remove('active');
    const textArea = document.getElementById('notes');
    textArea.value = '';
    const input = document.getElementById('modalTaskName');
    input.value = '';
}

export {openModal, 
closeModal} 