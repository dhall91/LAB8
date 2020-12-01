var kickOut=7;
var star = document.getElementById("star");
var inputMsgElem = document.getElementById("inputMsg");


while(kickOut > 0)
{
    if (kickOut == 0) break;
    alert('Enter num between 0 and 7')
    var input = prompt("You have " + kickOut + " tries.");

    if (input > 0 && input <= 7 && input !== null){
        inputMsgElem.innerHTML = `You're a ${input} star general`;
        star.style.display = "inline";
        break;
    }
    
    kickOut--;  
    
}

if (typeof input !== "undefined"){
    for (let i = 0; i < input-1; i++) {
        var imageClone = star.cloneNode(true);
        document.getElementById("starContainer").appendChild(imageClone);                
    }
}

