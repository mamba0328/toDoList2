function openModal() { 
    const modal = document.getElementById('modalWindow');
    const overlay = document.getElementById('overlay')
    modal.classList.add('active');
    overlay.classList.add('active');
}

function closeModal() { 
    const modal = document.getElementById('modalWindow');
    const overlay = document.getElementById('overlay')
    modal.classList.remove('active');
    overlay.classList.remove('active');
    const textArea = document.getElementById('notes');
    textArea.value = '';
    const input = document.getElementById('modalTaskName');
    input.value = '';
}

export {openModal, 
closeModal} 