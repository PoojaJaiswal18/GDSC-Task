const faqItems = document.querySelectorAll('.faq-item');  
      
faqItems.forEach((faqItem) => {
    const arrowIcon = faqItem.querySelector('.faq-arrow');
    const answer = faqItem.querySelector('.faq-answer');

    arrowIcon.addEventListener('click', () => {
        answer.classList.toggle('show-answer');
    });
});

function toggleInfo(cardNumber) {
    const infoCard = document.getElementById(`info-card-${cardNumber}`);
    if (infoCard.style.display === 'none' || infoCard.style.display === '') {
        infoCard.style.display = 'block';
    } else {
        infoCard.style.display = 'none';
    }
}

const toggleDarkMode = () => {
    const body = document.querySelector('body');
    body.classList.toggle('dark-mode');
};

const darkModeButton = document.querySelector('#dark-mode-button');
darkModeButton.addEventListener('click', toggleDarkMode);

    
    
    
   
    

  
    

