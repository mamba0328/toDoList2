function makeBtnsFunctional() { 
    const buttons = Array.from(document.getElementsByClassName('completeCircle'));
    const button = buttons[buttons.length-1];
 
        button.addEventListener('mouseover', (e) => { 
            e.target.style.border = '2px solid green'
        })

        button.addEventListener('mouseleave', (e) => { 
            e.target.style.border = '1.99px solid black'
        })

        button.addEventListener('click', (e) => { 
            e.target.parentElement.remove();
        })
}

export default makeBtnsFunctional;