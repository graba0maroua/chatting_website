var audio = new Audio('assets/sentmessage.mp3');

function startFunction() {
    setLastSeen();
    waitAndResponce("intro");
}

function setLastSeen() {
    var date = new Date();
    var lastSeen = document.getElementById("lastseen");
    lastSeen.innerText = "last seen today at " + date.getHours() + ":" + date.getMinutes()
}
function openFullScreenDP() {
    var x = document.getElementById("fullScreenDP");
    if (x.style.display === 'flex') {
        x.style.display = 'none';
    } else {
        x.style.display = 'flex';
    }
}

function isEnter(event) {
    if (event.keyCode == 13) {//returns the neumeric code of the pressed value. This has been deprecated and we should use the key property instead.
        sendMsg();
    }
}

function sendMsg() {
    var input = document.getElementById("inputMSG");
    var ti = input.value;
    if (input.value == "") {
        return;
    }
    var date = new Date();
    var myLI = document.createElement("li");
    var myDiv = document.createElement("div");
    var greendiv = document.createElement("div");
    var dateLabel = document.createElement("label");
    dateLabel.innerText = date.getHours() + ":" + date.getMinutes();
    myDiv.setAttribute("class", "sent");
    greendiv.setAttribute("class", "green");
    dateLabel.setAttribute("class", "dateLabel");
    greendiv.innerText = input.value;
    myDiv.appendChild(greendiv);
    myLI.appendChild(myDiv);
    greendiv.appendChild(dateLabel);
    document.getElementById("listUL").appendChild(myLI);
    var s = document.getElementById("chatting");
    s.scrollTop = s.scrollHeight;//The scrollHeight value is equal to the minimum height the element would require in order to fit all the content in the viewport without using a vertical scrollbar
    setTimeout(function () { waitAndResponce(ti) }, 1500);//he setTimeout() method allows you to execute a piece of code after a certain amount of time has passed. You can think of the method as a way to set a timer to run JavaScript code at a certain time.
    //when we write something it will show us a message after 1.5 seconds
    input.value = "";
    playSound();
}

function waitAndResponce(inputText) {
    var lastSeen = document.getElementById("lastseen");
    lastSeen.innerText = "typing...";
    switch (inputText.toLowerCase().trim()) {
        case "intro":
            setTimeout(() => {
                sendTextMessage("Hello there 👋🏻,<br><br>We're <span class='bold'><a class='alink'> Graba Maroua and Midoune Imane</a>.</span><br><br> Computer science students at <span class='bold'>Algiers 1 university </span><br><br> we are passionate about <br><br>Send <span class='bold'>'more'</span> to know more about me.<br>");
            }, 2000);
            break;
        case "more":
            sendTextMessage("<span class='sk'>Send Keyword to get what you want to know about us...<br>e.g<br><span class='bold'>'major'</span> - to know my major<br><span class='bold'></span> <br><span class='bold'>'education'</span> - to get my education details<br><span class='bold'>'address'</span> - to get my address<br><span class='bold'>'contact'</span> - to get ways to connect with me<br><span class='bold'>'projects'</span> - to get details of my projects<br><span class='bold'>'clear'</span> - to clear conversation<br><span class='bold'>'about'</span> - to know about this site</span>");
            break;
        
        case "major":
            sendTextMessage("<span class='sk'> We are currently pursuing ISIL degree in Computer Science Engineering.<br><br>we can  can comfortably write a code in the following languages :<br><span class='bold'>Java<br>HTML<br>CSS<br>Java Script</span>");
            break;
        case "education":
            sendTextMessage("<span class='sk'>Third year in university</span>");
            break;
        case "address":
            sendTextMessage("<span class='sk'>Algiers</span>");
            break;
       
        case "contact":
            sendTextMessage("<span class='sk'>For imane's contact : <br> imanemaroua@gmail.com <br> For maroua's contact : <br> grabamaroua23@gmail.com </span>");
            break;

        case "clear":
            clearChat();
            break;
        case "about":
            sendTextMessage("💻 This website was built using HTML, CSS and JavaScript from SCRATCH! <br><br> Developed by><span class='bold'> Maroua & Imane </a></span>");
        default:
            setTimeout(() => {
                sendTextMessage("We couldn't  catch you...😢<br>Please Send 'more' to know more about usage.");
            }, 2000);
            break;
    }



}



function clearChat() {
    document.getElementById("listUL").innerHTML = "";
    waitAndResponce('intro');
}

function sendTextMessage(textToSend) {
    setTimeout(setLastSeen, 1000);
    var date = new Date();
    var myLI = document.createElement("li");
    var myDiv = document.createElement("div");
    var greendiv = document.createElement("div");
    var dateLabel = document.createElement("label");
    dateLabel.setAttribute("id", "sentlabel");
    dateLabel.id = "sentlabel";
    dateLabel.innerText = date.getHours() + ":" + date.getMinutes();
    myDiv.setAttribute("class", "received");
    greendiv.setAttribute("class", "grey");
    greendiv.innerHTML = textToSend;
    myDiv.appendChild(greendiv);
    myLI.appendChild(myDiv);
    greendiv.appendChild(dateLabel);
    document.getElementById("listUL").appendChild(myLI);
    var s = document.getElementById("chatting");
    s.scrollTop = s.scrollHeight;
    playSound();
}
function playSound() {
    audio.play();
}
