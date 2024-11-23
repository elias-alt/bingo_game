const cards = document.querySelectorAll('.selectnum');  

cards.forEach(card => {  
    card.addEventListener('click', () => {  
        card.classList.toggle('selected');  
    });  
});  