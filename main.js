const diceBtn = document.querySelector('#diceBtn');
const advice = document.querySelector('#advice');
const adviceId = document.querySelector('#adviceId');
getAdvice()

diceBtn.addEventListener('click', async () => {
    getAdvice()
})

function getAdvice() {
    //generar un id aleatorio
    const id = Math.floor(Math.random() * 100) + 1;
    //llamar api
    fetch(`https://api.adviceslip.com/advice/${id}`)
        .then(resp => resp.json())
        .then(data => {
            //mostrar el valor
            const adviceMsg = data.slip.advice;
            advice.innerText = adviceMsg;
            adviceId.innerText = data.slip.id;
        })
        .catch(err => getAdvice())
}

/*
SEGUNDA OPCION
const res = await fetch(`https://api.adviceslip.com/advice/20`)
const data = await res.json()
console.log(data.slip.advice); */