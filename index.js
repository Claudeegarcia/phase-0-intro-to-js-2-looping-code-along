
function writeCards(name){ 
    let message = []
    for (let i = 0; i < name.length; i++){
        message.push(`Thank you, ${name[i]}, for the wonderful surprise gift!`);
    }
    return message;
}


function countDown(i){
    while(i >= 0) {
        console.log(i)
        i--;
    }
}

