const openingScreen = document.getElementById('openingScreen');
const mainContent = document.getElementById('mainContent');
const crushNameInput = document.getElementById('crushName');
const startButton = document.getElementById('startButton');
const displayName = document.getElementById('displayName');
const messageContainer = document.getElementById('messageContainer');
const nextPageButton = document.getElementById('nextPageButton');
const loveEffect = document.querySelector('.love-effect');

const messages = [
    "Happy Valentine's Day!",
    "Maaf yaa ngucapinnya terlambat.",
    "Di sini aku cuma mau bilang aku sayang banget sama kamu, I know kita memang gaada hubungan apa apa but bisa ga si kamu jangan pergi.",
    "Aku gamau kehilangan kamu, aku tau manusia itu juga gampang berubah ntah itu dari sikap maupun perasaan.",
    "Inget walaupun kita gaada hubungan apa apa kalo kamu cape inget ada aku disini yang selalu siap dengerin keluh kesah kamu.",
    "Aku bisa jadi sandaran buat kamu ya walaupun kita gaada hubungan apa', aku gapernah maksa kamu buat bales perasaan aku bahkan aku juga ga pernah nyuruh kamu buat jadi milik aku.",
    "Aku juga mau ngasi tau kamu satu hal yaa mungkin ini bukan hak aku because i'm not who you are, aku gasuka kamu deket deket sama orang lain selain aku..",
    "Aku tau aku ga berhak ngurusin hidup kamu, tapi aku emang sayang bgt sama kamu. jika kita ada status aku takut ada kata 'putus' walaupun hts ini menyakitkan dan bakal lost contact ataupun asing.."
    
];



let currentMessageIndex = 0;

function showMessageWithTypingAnimation() {
    if (currentMessageIndex < messages.length) {
        const text = messages[currentMessageIndex];
        const messageElement = document.createElement('p'); 
        messageElement.classList.add('message'); 
        messageContainer.appendChild(messageElement); 

        let charIndex = 0;
        const typingInterval = setInterval(() => {
            if (charIndex < text.length) {
                messageElement.textContent += text.charAt(charIndex);
                charIndex++;
            } else {
                clearInterval(typingInterval);
                currentMessageIndex++;
                if (currentMessageIndex < messages.length) {
                    setTimeout(showMessageWithTypingAnimation, 1000); 
                }
            }
        }, 100); 
    }
}

function createLoveEffect() {
    const emojis = ["💖", "😍", "💌", "🥰", "💕", "💘", "💓", "💞"];
    for (let i = 0; i < 50; i++) { 
        const span = document.createElement('span');
        span.textContent = emojis[Math.floor(Math.random() * emojis.length)];
        span.style.left = Math.random() * 100 + '%';
        span.style.animationDuration = Math.random() * 3 + 2 + 's';
        loveEffect.appendChild(span);
    }
}

function shakeButton() {
    startButton.classList.add('shake');
    setTimeout(() => {
        startButton.classList.remove('shake');
    }, 500);
}

startButton.addEventListener('click', () => {
    const name = crushNameInput.value.trim();
    if (name) {
        displayName.textContent = name;
        openingScreen.style.display = 'none';
        mainContent.style.display = 'block';
        currentMessageIndex = 0;
        messageContainer.innerHTML = ''; 
        showMessageWithTypingAnimation();
    } else {
        shakeButton();
        alert("enter your name!");
    }
});

nextPageButton.addEventListener('click', () => {
    window.location.href = 'Flower.html';
});

createLoveEffect();