const speechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition;

const utter = new SpeechSynthesisUtterance();



const recog = new speechRecognition();

const microphoneButton = document.getElementById('microphoneButton')

const content = document.querySelector('.content')

function welcome(){
    Speak('hi, iam Friday a virtual assistant. i can simplify your daily routine')
    startListening()
}

function startListening() {

    recog.start();
    content.textContent = 'Listening...'
    
    recog.onstart = microphoneButton.classList.add('listen');
    recog.onresult = function (data) {
        microphoneButton.classList.remove('listen');
        microphoneButton.classList.add('pulse')
        waveColor();
        handleResults(data);

    }

}

function handleResults(data) {
    let text = data.results[0][0].transcript;
    content.textContent = text
    text = text.toLowerCase();
    ProcessCommand(text);
}

const toss = ['Head,', 'Tail,']

const color = ['#e74c3c', '#2980b9', '#F79F1F', '#EA2027', '#9980FA', '#485460', '#2C3A47', '#58B19F', '#006266',]

const joke = ['what is the most shocking city in the world.?  its electricity , ha.... ha... haaaa', 
    'why dont some couples go to the gym  ?   . because some relationships dont work out . ha.... ha... haaaa',
    "Today at the bank, an old lady asked me to help check her balance. So I pushed her over. ha.... ha... haaaa",
    "My dog used to chase people on a bike a lot. It got so bad, finally I had to take his bike away. ha.... ha... haaaa",
    "I'm so good at sleeping. I can do it with my eyes closed. ha.... ha... haaaa",
    "I just read a book about Helium. It was so good that I can't put it down. ha.... ha... haaaa",
    "Want to hear a Potassium joke? ok , ha.... ha... haaaa",
    "Why are atoms Catholic? Because they have mass ha.... ha... haaaa",
    "A blind man walks into a bar. And a table. And a chair. ha.... ha... haaaa",
    "I know a lot of jokes about unemployed people but none of them work. ha.... ha... haaaa",
    "What's orange and sounds like a parrot? A carrot. ha.... ha... haaaa",
    "Did you hear about the italian chef that died? He pasta way. ha.... ha... haaaa",
    "Why couldn't the bicycle stand up? Because it was two tired! ha.... ha... haaaa",
    "Parallel lines have so much in common. It’s a shame they’ll never meet. ha.... ha... haaaa",
    "My wife accused me of being immature. I told her to get out of my fort. ha.... ha... haaaa",
    "Where do you find a cow with no legs? Right where you left it. ha.... ha... haaaa",
    "When a deaf person sees someone yawn do they think it’s a scream? ha.... ha... haaaa",
    "As I suspected, someone has been adding soil to my garden. The plot thickens. ha.... ha... haaaa",
     "How do crazy people go through the forest? They take the physco path. ha.... ha... haaaa",
]

const greetings = ['you learn more from failure than from success', 'The Best Way To Get Started Is To Quit Talking And Begin Doing', 'If You Are Working On Something That You Really Care About, You Don’t Have To Be Pushed. The Vision Pulls You']

const later = ['dO it now sir, sometimes later , becomes never', 'as your wish sir']

function ProcessCommand(UserText) {
    speech = UserText.this
    if (UserText.includes('hello')) {
        Speak('welcome boss ,how are you')
    }
    else if (UserText.includes('about me')) {
        Speak('Your just awsome , sir...')
    }
    else if (UserText.includes('toss')) {
        const finalText = toss[Math.floor(Math.random() * toss.length)];
        Speak('sir , i tossed . You got' + finalText + 'sir.')
    }
    else if (UserText.includes('sukhamano')) {
        Speak('yes, iam fine')
    }
    else if (UserText.includes('sugamano')) {
        Speak('yes, iam fine')
    }
    else if (UserText.includes('sugamana')) {
        Speak('yes, iam fine')
    }
    else if (UserText.includes('are you ready')) {
        Speak('always ready boss, lets roll')
    }
    else if (UserText.includes('you up')) {
        Speak('for you sir, always')
    }
    else if (UserText.includes('are you there')) {
        Speak('for you sir, always')
    } else if (UserText.includes('fine')) {
        Speak('Great! then lets start our work')
    }
    else if (UserText.includes('instagram')) {
        window.open('https://www.instagram.com')
        Speak('opening instagram in a new tab');

    }
    else if (UserText.includes('facebook')) {
        window.open('https://www.facebook.com')
        Speak('opening facebook in a new tab');
    }
    else if (UserText.includes('whatsapp')) {

        window.open('https://web.whatsapp.com')
        Speak('Opening whatsapp in a new tab');
    }
    else if (UserText.includes('social media')) {
        window.open('https://web.whatsapp.com')
        window.open('https://www.facebook.com')
        window.open('https://www.instagram.com')
        Speak('Opening Your various social media accounts');
    }
    else if (UserText.includes('gmail')) {
        window.open('https://mail.google.com')
        Speak('Opening Gmail')
    }
    else if (UserText.includes('classroom')) {
        window.open('https://classroom.google.com/u/0/h')
        Speak('Opening classroom')
    }
    else if (UserText.includes('youtube')) {
        window.open('https://www.Youtube.com')
        Speak('Opening Youtube in a new tab');
    }
    else if (UserText.includes('time')) {
        Speak('the time is :' + getCurrentTime());
    }
    else if (UserText.includes('how are you')) {
        Speak('Im good , what about you sir');
    }
    else if (UserText.includes("good")) {
        Speak('thank you boss, then lets start our work ')
    }
    else if (UserText.includes('your boss')) {
        Speak('my boss is , mister Shaabil , and who created me , he is seventeen year old boy he working as a full stack web developer and last but not least he is a brilliant guy')
    }
    else if (UserText.includes("who are you")) {
        Speak('iam friday an virtual assistant or intelligent personal assistant , i can perform tasks or services for an individual, based on commands or questions ,im develoed by some, artificial intelligence algorithms')
    }
    else if (UserText.includes('jarvis')) {
        Speak('jarvis is my brother, he is now working for mister Tony stark , and im working for mister shaabil')
    }
    else if (UserText.includes('motivation')) {
        const finalText = greetings[Math.floor(Math.random() * greetings.length)];
        Speak(finalText)
    }
    else if (UserText.includes('motivate')) {
        const finalText = greetings[Math.floor(Math.random() * greetings.length)];
        Speak(finalText)
    }
    else if (UserText.includes('later')) {
        const finalText = later[Math.floor(Math.random() * later.length)];
        Speak(finalText)
    }
    else if (UserText.includes('alexa')) {
        Speak('Boss im friday , not alexa ! , i hate her')

    }
    else if (UserText.includes('sorry')) {
        Speak('its ok sir')
    }
    else if (UserText.includes('profile')) {
        toggle()
        Speak('Please fill The form to Set, your Profile')
    }
    else if (UserText.includes('are you single')) {
        Speak('no sir ! ,iam in relation with mobile data  ')
    }
    else if (UserText.includes('date')) {
        Speak('date' + date());
    }
    else if (UserText.includes('quit')) {
        //Speak('ok sir , iam going to sleep . bye sir..');
        console.log('listening aborted')
        content.textContent = 'To Restart Click Robo Button'
        roboOff();
    }
    else if (UserText.includes('kit')) {
        //Speak('ok sir , iam going to sleep . bye sir..');
        console.log('listening aborted')
        content.textContent = 'To Restart Click Robo Button'
        roboOff();
    }
    else if (UserText.includes('cute')) {
        //Speak('ok sir , iam going to sleep . bye sir..');
        console.log('listening aborted')
        content.textContent = 'To Restart Click Robo Button'
        roboOff();
    }
    else if (UserText.includes('shutdown')) {
        //Speak('ok sir , iam going to sleep . bye sir..');
        console.log('listening aborted')
        content.textContent = 'To Restart Click Robo Button'
        roboOff();
    }
    else if (UserText.includes('stop')) {
        //Speak('ok sir , iam going to sleep . bye sir..');
        console.log('listening aborted')
        content.textContent = 'To Restart Click Robo Button'
        roboOff();
    }
    else if (UserText.includes('freeze')) {
        //Speak('ok sir , iam going to sleep . bye sir..');
        console.log('listening aborted')
        content.textContent = 'To Restart Click Robo Button'
        roboOff();
    }
    else if (UserText.includes('what is')) {
        search = UserText.replace("what is", "");
        window.open('https://en.wikipedia.org/wiki/' + search)
        Speak('more about' + search)
    }
    else if (UserText.includes('search')) {
        search = UserText.replace("search", "");
        window.open('https://en.wikipedia.org/wiki/' + search)
        Speak('more about' + search)
    }
    else if (UserText.includes('who is')) {
        search = UserText.replace("who is", "");
        window.open('https://en.wikipedia.org/wiki/' + search)
        Speak('more about' + search)
    }
    else if (UserText.includes('how is')) {
        search = UserText.replace("how is", "");
        window.open('https://en.wikipedia.org/wiki/' + search)
        Speak('more about' + search)
    }
    else if (UserText.includes('song')) {
        WindowOpen();
        Speak('Playing your favourite song')
    }

    else if (UserText.includes('sing a rhyme')) {
        Speak('Johny, Johny,  Yes papa? , Eating sugar? , No papa . Telling lies? , No papa . Open your mouth . Ha ha ha!')
    }
    else if (UserText.includes('light mode')) {
        Speak('changing Theme to Light Mode')
        LightMode();
    }
    else if (UserText.includes('dark mode')) {
        Speak('changing Theme to dark mode')
        darkMode();
    }
    else if (UserText.includes('brilliant')) {
        Speak('i know sir , because you created me')
    }
    else if (UserText.includes('set reminder')) {
        Speak('Function Not available for now')
    }
    else if (UserText.includes('who am I')) {
        local();
    }
    else if (UserText.includes('joke')) {
        const finalText = joke[Math.floor(Math.random() * joke.length)];
        Speak(finalText)
    }

    else {
        Speak('i cant catch you sir');
    }

}
utter.onend = function endspeak() {
    startListening();
    microphoneButton.classList.remove('pulse');
}




function LightMode() {
    document.body.style.background = '#ffffff'
    document.getElementById('menu-box').style.background = '#fff'
    document.getElementById('menu-box').style.color = '#000'
    document.getElementById('quote').style.color = "#666"
    document.getElementById('Name').style.color = '#666'
    document.getElementById('Me').style.color = '#666'
    document.getElementById('btn').style.background = '#fff'
    document.getElementById('Cntnt').style.color = '#666'
    var elements = document.getElementsByClassName('bar'); // get all elements
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.backgroundColor = "#666";
    }
    var menuitem = document.getElementsByClassName('menu__item'); // get all elements
    for (var i = 0; i < menuitem.length; i++) {
        menuitem[i].style.color = "#666";
    }

}
function darkMode() {
    document.body.style.background = '#111827'
    document.getElementById('menu-box').style.background = '#222'
    document.getElementById('menu-box').style.color = "#fff"
    document.getElementById('quote').style.color = "#fff"
    document.getElementById('Name').style.color = '#fff'
    document.getElementById('Me').style.color = '#fff'
    document.getElementById('btn').style.background = '#222'
    document.getElementById('Cntnt').style.color = '#fff'
    var elements = document.getElementsByClassName('bar'); // get all elements
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.backgroundColor = "#fff";
    }
}
function waveColor() {
    const finalText = color[Math.floor(Math.random() * color.length)];
    let wave = document.getElementsByClassName('wave1');
    for (var i = 0; i < wave.length; i++) {
        wave[i].style.backgroundColor = `${finalText}`;
    }
}

function roboOff() {
    microphoneButton.classList.remove('pulse')
    console.log('action happend')
}

function WindowOpen() {
    songwindow = window.open('https://youtu.be/0GVExpdmoDs', 'songwindow', 'width=340, height=500')
}

function getCurrentTime() {
    const date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();

    return `${hour} ${minute}`;
}


function date() {
    const date = new Date();
    let day = date.getDay();
    let month = date.getMonth();

    if (day == 1) {
        day = 'monday'
    } else if (day == 2) {
        day = 'thuesday'
    }
    else if (day == 3) {
        day = 'wednesday'
    }
    else if (day == 4) {
        day = 'thursday'
    }
    else if (day == 5) {
        day = 'friday'
    }
    else if (day == 6) {
        day = 'saturday'
    }
    else {
        day = 'sunday'
    }

    if (month == 1) {
        month = 'january'
    }
    else if (month == 2) {
        month = "february"
    }
    else if (month == 3) {
        month = "march"
    }
    else if (month == 4) {
        month = "april"
    }
    else if (month == 5) {
        month = "may"
    }
    else if (month == 6) {
        month = "June"
    }
    else if (month == 7) {
        month = "july"
    }
    else if (month == 8) {
        month = "August"
    }
    else if (month == 9) {
        month = "september"
    }
    else if (month == 10) {
        month = "october"
    }
    else if (month == 11) {
        month = "november"
    }
    else {
        month = "december"
    }

    console.log(day);

    return `${day} ${month}`;
}




function Speak(TEXT) {

    utter.rate = 1
    utter.pitch = 1
    utter.text = TEXT;
    window.speechSynthesis.speak(utter);
}



microphoneButton.addEventListener('click',welcome());





///for css pop-  up
const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

openModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = document.querySelector(button.dataset.modalTarget)
        openModal(modal)
    })
})

overlay.addEventListener('click', () => {
    const modals = document.querySelectorAll('.modal.active')
    modals.forEach(modal => {
        closeModal(modal)
    })
})

closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.modal')
        closeModal(modal)
    })
})

function openModal(modal) {
    if (modal == null) return
    modal.classList.add('active')
    overlay.classList.add('active')
}

function closeModal(modal) {
    if (modal == null) return
    modal.classList.remove('active')
    overlay.classList.remove('active')
}

function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "About Friday &#8595;";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Read less &#8593;";
        moreText.style.display = "inline";
    }
}

//for css Dark theme


function toggle() {
    var popup = document.getElementById('popup');
    popup.classList.toggle('active')
}


const fullname = document.getElementById('full-name')
const email = document.getElementById('email')


const name = fullname.value;
const mail = email.value;
function local() {
    const fun = fullname.value;
    const mail = email.value;

    console.log(fun);
    console.log(mail);

    if (fun && mail) {
        localStorage.setItem(fun, mail);
    } else {

    }
    return `${fun}`, `${mail}`
}

function who() {
    localStorage.getItem(fun)
    Speak('You are Mister' + fun + 'and are a genius')
}

class storage {
    name = fullname.value;
    mail = email.value;
    local() {
        const fun = fullname.value;
        const mail = email.value;

        console.log(fun);
        console.log(mail);

        if (fun && mail) {
            localStorage.setItem(fun, mail);
        } else {

        }
        who();
        return `${fun}`, `${mail}`
    }
}











