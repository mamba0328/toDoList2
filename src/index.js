const addATaskButton = document.getElementById('addATask'); 
addATaskButton.addEventListener('mouseover', (e) => {
    e.target.style.backgroundColor = 'rgb(36, 163, 26)';
})
addATaskButton.addEventListener('mouseleave', (e) => {
    e.target.style.backgroundColor = 'rgb(26, 153, 26)'
})


addATaskButton.addEventListener('click', () => {
    openModal();
})

const overlay = document.getElementById('overlay') 
overlay.addEventListener('click', () => {
    closeModal();
})

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
}