
    // Get all FAQ question elements
    const faqItems = document.querySelectorAll('.faq-item');

    // Add click event listeners to toggle answer visibility
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
    
    
   
    

   
    // function toggleInfo(cardId) {
    //     const card = document.getElementById(cardId);
    //     const infoCard = card.querySelector('.info-card');
        
    //     if (infoCard.style.display === 'block') {
    //         infoCard.style.display = 'none';
    //     } else {
    //         infoCard.style.display = 'block';
    //     }
    // }

    

