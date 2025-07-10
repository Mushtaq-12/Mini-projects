let val=document.querySelectorAll(".drum");
val.forEach((value)=>{
    if(value.innerText=='w'){
        value.addEventListener("click",()=>{
        value.style.color="white";
        var audio =new Audio('./sounds/tom-1.mp3');
        audio.play() ;
        value.style.color="#DA0463";
        });   
    }
    else if(value.innerText=='a'){

        value.addEventListener("click",()=>{
        var audio= new Audio('./sounds/tom-2.mp3');
        audio.play();
        });
    }
    else if(value.innerText=='s'){
        value.addEventListener("click",()=>{
        var audio= new Audio('./sounds/tom-3.mp3');
        audio.play();
        });
    }
    else if(value.innerText=='d'){
        value.addEventListener("click",()=>{
        var audio= new Audio('./sounds/tom-4.mp3');
        audio.play();
        });
    }
    else if(value.innerText=='j'){
        value.addEventListener("click",()=>{
        var audio= new Audio('./sounds/snare.mp3');
        audio.play();
        });
    }
    else if(value.innerText=='k'){
        value.addEventListener("click",()=>{
        var audio= new Audio('./sounds/crash.mp3');
        audio.play();
        });
    }
    else{
        value.addEventListener("click",()=>{
        var audio= new Audio('./sounds/kick-bass.mp3');
        audio.play();
        });
    }
}); 



// var audio =new Audio('./sounds/tom-1.mp3');
//         audio.play()


//keyboard events


let keyboard = addEventListener("keypress",(event)=>{
if(event.key=="w"){
    var audio =new Audio('./sounds/tom-1.mp3');
    audio.play();
    
}
else if(event.key=="a"){
    var audio=new Audio('./sounds/tom-2.mp3');
    audio.play();
}
else if(event.key=="s"){
    var audio= new Audio('./sounds/tom-3.mp3');
    audio.play();
}
else if(event.key=="d"){
    var audio= new Audio('./sounds/tom-4.mp3');
    audio.play();
}
else if(event.key=="j"){
    var audio= new Audio('./sounds/snare.mp3');
    audio.play();
}
else if(event.key=="k"){
    var audio= new Audio('./sounds/crash.mp3');
    audio.play();
}
else if(event.key=="l"){
    var audio= new Audio('./sounds/kick-bass.mp3');
    audio.play();
}
});

