function toggleChatbox() {
    const chatbox = document.getElementById('chatbox');
    if (chatbox.style.display === 'none' || chatbox.style.display === '') {
        chatbox.style.display = 'block';
    } else {
        chatbox.style.display = 'none';
    }
}


function toggleOptions(){
    const options = document.getElementById('options');
    const chatboxbody = document.getElementById('chatbox-body');
    if(options.style.display === 'none'){
        options.style.display = 'block';
        chatboxbody.style.backgroundColor = "lightgray";
    } else{
        options.style.display = 'none';
        chatboxbody.style.backgroundColor = "";
    }
}



