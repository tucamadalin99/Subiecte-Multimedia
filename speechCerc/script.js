// Scrieti aplicatia HTML5 si codul Javascript care deseneaza un cerc albastru la primirea unei comenzi vocale. 
//Raza cercului va fi inclusa in comanda.Demonstrati functionalitatea.
window.onload = () => {
    var recognition = new webkitSpeechRecognition();
    var rezult;
    var recunoastere = false;
    var i = 0;

    recognition.lang = 'ro';
    recognition.continuous = true;
    recognition.maxAlternatives = 1;
    var recBtn = document.getElementById('rec-btn');
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');

    recBtn.addEventListener('click', (e) => {
        e.preventDefault();
        if(recunoastere)
                {
                    recognition.stop();
                    recunoastere = false;
                    recBtn.innerHTML = "Incepe ascultarea";
                    i=0;
                }
                else
                {
                    recognition.start();
                    recunoastere=true;
                    recBtn.innerHTML = "Opreste ascultarea";
                }
    })

    recognition.onresult = function (e) {
        rezult = e.results[i][0].transcript.trim();
        console.log(rezult);
        i++;
        let comenzi = rezult.split(' ');
        if (comenzi[0] === 'circle' || comenzi[0] === 'Circle' && (comenzi[1] > 1 && comenzi[1] < canvas.clientHeight)) {
            ctx.clearRect(canvas.clientWidth / 2, canvas.clientHeight / 2, canvas.clientWidth, canvas.clientHeight);
            ctx.arc(canvas.clientWidth / 2, canvas.clientHeight / 2, comenzi[1], 0, 2 * Math.PI);
            ctx.fillStyle = 'blue';
            ctx.fill();
            ctx.stroke();
        }
    }
}