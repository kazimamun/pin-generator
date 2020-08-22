//hide notification 
document.querySelector("#matched").style.display = 'none';
document.querySelector("#not-matched").style.display = 'none';
document.querySelector("#try-again").style.display = 'none';

//generate random number
const pinGenerate = document.querySelector('#pin-btn');
pinGenerate.addEventListener('click',()=>{
    const random =  Math.floor(Math.random() * (9999-1000)) + 1000;
    document.querySelector('#pin-monitor').value = random;
    //second time generate new number after getting result and also below work done
    document.getElementById('try').innerText = 3;
    document.querySelector("#matched").style.display = 'none';
document.querySelector("#not-matched").style.display = 'none';
    document.querySelector('#monitor').value = '';
})

//matching and show notification
const submitBtn = document.getElementById('submit');
submitBtn.addEventListener('click',function(){
    const pinMonitor = document.querySelector('#pin-monitor').value;
    const inputMonitor = document.querySelector('#monitor').value;

    let countdown = parseInt(document.getElementById('try').innerText);
    if(pinMonitor == inputMonitor){
        document.querySelector("#matched").style.display = 'block';
        document.querySelector('#not-matched').style.display = 'none';
    }else{
        document.querySelector('#not-matched').style.display = 'block';
        document.querySelector("#matched").style.display = 'none';

        if(countdown < 1){
            document.getElementById('submit').disabled  = true;
            document.querySelector('#not-matched').style.display = 'none';
            document.querySelector("#try-again").style.display = 'block';
        }else{
            document.getElementById('try').innerText = countdown - 1;
        }     
    }
})
