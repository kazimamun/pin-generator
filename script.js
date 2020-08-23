hideFromDisplay("#not-matched", "#matched", "#try-again")

const numberBtn = document.querySelectorAll('.button');
for(let i=0; i<numberBtn.length; i++){
    const number = numberBtn[i];
    number.addEventListener('click',()=>{
        document.getElementById('monitor').value += number.id;
    })
}

//generate random number
const pinGenerate = document.querySelector('#pin-btn');
pinGenerate.addEventListener('click',()=>{
    const random =  Math.floor(Math.random() * (9999-1000)) + 1000;
    document.querySelector('#pin-monitor').value = random;
    //second time generate new number after getting result and also below work done
    document.getElementById('try').innerText = 3;
    hideFromDisplay("#not-matched", "#matched", "#try-again")
    document.querySelector('#monitor').value = '';    
    document.getElementById('submit').disabled  = false;
})

//matching and show notification
const submitBtn = document.getElementById('submit');
submitBtn.addEventListener('click',function(){
    const pinMonitor = document.querySelector('#pin-monitor').value;
    const inputMonitor = document.querySelector('#monitor').value;

    let countdown = parseInt(document.getElementById('try').innerText);
    if(pinMonitor == inputMonitor){
        blockDisplay("#matched");
        hideFromDisplay('#not-matched');
    }else{
        blockDisplay('#not-matched');
        hideFromDisplay("#matched");

        if(countdown <= 0){
            document.getElementById('submit').disabled  = true;
            blockDisplay("#try-again");
            hideFromDisplay('#not-matched');
        }else{
            document.getElementById('try').innerText = countdown - 1;
        }     
    }
})

//hide notification function
function hideFromDisplay(){
    const args = [...arguments];
    args.map(arg => {
        document.querySelector(arg).style.display = 'none';
    })
}

//display block
function blockDisplay(id){
    document.querySelector(id).style.display = 'block';
}
