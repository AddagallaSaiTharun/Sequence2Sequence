const unrealSocket = new WebSocket('ws://localhost:8080');

unrealSocket.addEventListener('open', e => {
  console.log('Unreal WebSocket is connected');
});


function removePunctuation(word) {
  return word.replace(/[^\w\s]|_/g, "");
}
const messageInput = document.getElementById("word-input");
messageForm.addEventListener("click", asdfg);
function asdfg() {
  const message = messageInput.value;
}

// let transcribe_array=window.recordedTranscriptions;
// console.log("This is :",transcribe_array[0]);
const sendbutton=document.getElementById("cnfrm");
sendbutton.addEventListener("click",gfdsa);

const glosOutput = document.getElementById('gloss-output');
function gfdsa() {
  const transcribe_array = window.recordedTranscriptions;
  // const latestTranscription = transcribe_array[transcribe_array.length - 1];
  const latestTranscription = messageInput.value;
  const apiUrl = `http://127.0.0.1:5000/${encodeURIComponent(latestTranscription)}`;
  console.log(apiUrl);
  let atoms = ["HOW BE X-YOU", "PLEASE THANKS", "DESC-GOOD MORNING", "DESC-GOOD","DESC-SORRY", "HELP", "FAMILY", "DESC-SORRY", "DANGER", "BE", "SCARED", "POLICE","DESC-HUNGRY"];  
  const pattern = new RegExp(`(?:${atoms.join('|')}|\\S+)`, 'g');
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        const predict = data.predict.trim(); // Trim any leading/trailing spaces
        console.log("from api fetched: ",predict);
        glosOutput.value = predict;
        //const wordsArray = predict.toUpperCase().split(' ');
        const wordsArray = glosOutput.value.match(pattern);
        let index = 0;
        const sendWordWithDelay = () => {
          if (index < wordsArray.length) {
            const word = wordsArray[index];
            if (word=="BE"){
              unrealSocket.send("B");
              word_value.innerHTML="BE";
            }
            else{
              unrealSocket.send(word);
              word_value.innerHTML=word;
            }
            console.log('Sent word to Unreal:', word);
            index++;
            setTimeout(sendWordWithDelay, 4000); // 4 seconds delay
          }
        };
  
        sendWordWithDelay();
        // Assign the trimmed gloss to the HTML element
        // const glosOutput = document.getElementById('glos-output');
        // glosOutput.textContent = predict;
      })
      .catch((error) => {
        console.error('Error fetching prediction:', error);
      });
    //for sending to model translator below
    // unrealSocket.send((latestTranscription.toLowerCase()));
  }