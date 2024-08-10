// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.

// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.

let submit_button = document.getElementById('submit-button');
let contact_page = document.getElementById('contact-page');

function handleSubmit() {
    let thank_you_message = document.createElement('p');
    thank_you_message.text_content = 'Thank you for your message';
    
    thank_you_message.style.font_size = '24px'; 

    contact_page.innerHTML = '';
    contact_page.appendChild(thank_you_message);
}

submit_button.addEventListener('click', handleSubmit);
