function toggleChatbox() {
    const chatbox = document.getElementById('chatbox');
    chatbox.style.display = (chatbox.style.display === 'block') ? 'none' : 'block';
}

function toggleOptions() {
    const overlay = document.getElementById("overlay");
    overlay.classList.toggle("show");
    const slideup = document.querySelector(".options");
    if (slideup.style.height === '0px' || slideup.style.height === '') {
        slideup.style.height = '260px';
    } else {
        slideup.style.height = '0px';
    }
}



function toggleChange() {
    const chatbox = document.querySelector('.chatbox');

    if (chatbox.style.width === '350px' || chatbox.style.width === '') {
        chatbox.style.width = '500px';
    } else {
        chatbox.style.width = '350px';
    }
}






