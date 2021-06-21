const speechRecognition = window.webkitSpeechRecognition ||
    window.SpeechRecognition;

const content = document.querySelector('.content')


function startListening() {
    const recog = new speechRecognition();
    recog.start();
    recog.onstart =  microphoneButton.classList.add('listen');

    recog.onresult = function (data) {
        microphoneButton.classList.remove('listen');
        handleResults(data);
       
    }
    
}



function handleResults(data) {
    let text = data.results[0][0].transcript;
    content.textContent = text
    text = text.toLowerCase();


    if (text.includes('andrea')) {
        andrea()
    }else{
        
    }
    


}

const greetings = ['i think worlds best scientist dont need a motivation',]
const later = ['dO it now sir, sometimes later , becomes never','as your wish sir']

function andrea(){
    ProcessCommand(UserText)
}


function ProcessCommand(UserText) {
    if (UserText.includes('hello')) {
        Speak('welcome , mister Shaabil')
    }
    else if (UserText.includes('Andrea')) {
        Speak('hi boss, how are you')
    }
    else if (UserText.includes('hi')) {
        Speak('hi boss, how are you')
    }
    else if (UserText.includes('you up')) {
        Speak('for you sir, always')
    }else if(UserText.includes('fine')){
        Speak('Great!')
    }
    else if (UserText.includes('instagram')) {
        Speak('opening instagram in a new tab');
        window.open('https://www.instagram.com')
    }
    else if (UserText.includes('facebook')) {
        Speak('opening facebook in a new tab');
        window.open('https://www.facebook.com')
    }
    else if (UserText.includes('whatsapp')) {
        Speak('Opening whatsapp in a new tab');
        window.open('https://web.whatsapp.com')
    }
    else if (UserText.includes('social media')) {
        Speak('Opening Your various social media accounts');
        window.open('https://web.whatsapp.com')
        window.open('https://www.facebook.com')
        window.open('https://www.instagram.com')
    }
    else if (UserText.includes('g mail')) {
        window.open('https://mail.google.com/mail/u/0/?tab=rm&ogbl')
    }
    else if (UserText.includes('classroom')) {
        window.open('https://classroom.google.com/u/0/h')
    }
    else if (UserText.includes('time')) {
        Speak('the time is :' + getCurrentTime());
    }
    else if (UserText.includes('how are you')) {
        Speak('Im good , what about you sir');
    }
    else if (UserText.includes("good") ) {
        Speak('thank you boss, then lets start our work ')
    }
    else if (UserText.includes('your boss')) {
        Speak('my boss is , mister Shaabil , and who created me , he is seventeen year old boy he working as a full stack web developer and last but not least he is a brilliant guy')
    }
    else if (UserText.includes("who are you") ) {
        Speak('iam darla a personal voice assistant ,iam a prototype ,mister shabil created me ')
    }
    else if (UserText.includes('jarvis')){
        Speak('jarvis is my brother, he is now working for mister Tony satrk , and im working for mister shaabil')
    }
    else if(UserText.includes('motivation')){
        const finalText = greetings[Math.floor(Math.random() * greetings.length)];
        Speak(finalText)
    }
    else if(UserText.includes('motivate')){
        const finalText = greetings[Math.floor(Math.random() * greetings.length)];
        Speak(finalText)
    }
    else if (UserText.includes('later')) {
        const finalText = later[Math.floor(Math.random() * later.length)];
        Speak(finalText)
    }
    else if (UserText.includes('alexa')) {
        Speak('boss im Dhrla . not alexa ! , i hate her')
    }
    else if(UserText.includes('sorry')){
        Speak('its ok sir')
    }
    else if(UserText.includes('date')){
        Speak('date is' + date());
    }
    else {
        Speak('i cant catch you sir');
    }

}



function getCurrentTime(){
    const date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();

    return `${hour} ${minute}`;
}

function date(){
    const date = new Date();
    let day = date.getDay();
    let month = date.getMonth();

    if (day == 1) {
        day= 'monday'
    }else if (day == 2) {
        day ='thuesday'
    }
    else if (day == 3) {
        day ='wednesday'
    }
    else if (day == 4) {
        day ='thursday'
    }
    else if (day == 5) {
        day ='friday'
    }
    else if (day == 6) {
        day ='saturday'
    }
    else{
        day ='sunday'
    }

    if (month ==1) {
        month = 'january' 
    }
    else if(month == 2){
        month = "february"
    }
    else if(month == 3){
        month = "march"
    }
    else if(month == 4){
        month = "april"
    }
    else if(month == 5){
        month = "may"
    }
    else if(month == 6){
        month = "June"
    }
    else if(month == 7){
        month = "july"
    }
    else if(month == 8){
        month = "August"
    }
    else if(month == 9){
        month = "september"
    }
    else if(month == 10){
        month = "october"
    }
    else if(month == 11){
        month = "november"
    }
    else{
        month = "december"
    }

    console.log(day);

    return `${day} ${month}`;
}

function Speak(TEXT){
    const utter = new SpeechSynthesisUtterance();
    utter.rate = 0.9
    utter.volume = 1
    utter.pitch = 1
    utter.text = TEXT;

    window.speechSynthesis.speak(utter);

}





microphoneButton.addEventListener('click', startListening);
