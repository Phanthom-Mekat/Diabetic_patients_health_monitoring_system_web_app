document.addEventListener('DOMContentLoaded', () => {
    const chatList = document.getElementById('chatList');
    const chatMessages = document.getElementById('chatMessages');
    const profileInfo = document.getElementById('profileInfo');
    const chatWith = document.getElementById('chatWith');

    // Dummy data
    const chats = [
        { name: 'Dr. Aurora Sterling', lastMessage: 'Any thoughts regarding my issue?' },
        { name: 'Dr. John Smith', lastMessage: 'Working out a lot lately.' },
        { name: 'Dr. Emily Davis', lastMessage: 'Do you have time for a quick chat?' },
        { name: 'Dr. Michael Brown', lastMessage: 'I’ve been experiencing discomfort.' }
    ];

    const messages = {
        'Dr. Aurora Sterling': [
            { from: 'Patient', text: 'Hello, Dr. Sterling. Any thoughts regarding my issue?' },
            { from: 'Dr. Aurora Sterling', text: 'Hello! Yes, I believe it is patellar tendinitis.' }
        ],
        'Dr. John Smith': [
            { from: 'Patient', text: 'I’ve been working out a lot lately.' },
            { from: 'Dr. John Smith', text: 'Great! How can I assist you today?' }
        ]
    };

    const profiles = {
        'Dr. Aurora Sterling': {
            email: 'aurora.sterling@example.com',
            phone: '123-456-7890'
        },
        'Dr. John Smith': {
            email: 'john.smith@example.com',
            phone: '098-765-4321'
        }
    };

    // Load chat list
    chats.forEach(chat => {
        const li = document.createElement('li');
        li.textContent = `${chat.name} - ${chat.lastMessage}`;
        li.addEventListener('click', () => loadChat(chat.name));
        chatList.appendChild(li);
    });

    // Load chat
    function loadChat(name) {
        chatWith.textContent = `Chat with ${name}`;
        chatMessages.innerHTML = '';
        (messages[name] || []).forEach(message => {
            const div = document.createElement('div');
            div.textContent = `${message.from}: ${message.text}`;
            chatMessages.appendChild(div);
        });

        profileInfo.innerHTML = `
            <p>Email: ${profiles[name].email}</p>
            <p>Phone: ${profiles[name].phone}</p>
        `;
    }

    // Send message
    window.sendMessage = function () {
        const input = document.getElementById('chatInput');
        const message = input.value;
        if (message.trim() === '') return;

        const chatName = chatWith.textContent.replace('Chat with ', '');
        messages[chatName] = messages[chatName] || [];
        messages[chatName].push({ from: 'Patient', text: message });

        const div = document.createElement('div');
        div.textContent = `Patient: ${message}`;
        chatMessages.appendChild(div);
        input.value = '';
    }

    // Search chats
    window.filterChats = function () {
        const search = document.getElementById('search').value.toLowerCase();
        const filteredChats = chats.filter(chat => chat.name.toLowerCase().includes(search));
        chatList.innerHTML = '';
        filteredChats.forEach(chat => {
            const li = document.createElement('li');
            li.textContent = `${chat.name} - ${chat.lastMessage}`;
            li.addEventListener('click', () => loadChat(chat.name));
            chatList.appendChild(li);
        });
    }
});