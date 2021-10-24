window.onload = function(){
    let i = 0;
    let fullWidth = 0;
    while(i<250){
        let divclass = "d"+i;
        let backdivclass = "backd";
        const element = document.createElement('div');
        element.classList.add('d');
        element.style.left=i*0.4+"%";
        document.body.appendChild(element);
        
        
        const elementBackground = document.createElement('div');
        elementBackground.classList.add("backd");
        elementBackground .style.left=i*0.4+"%";
        document.body.appendChild(elementBackground);
        let divFunction = "move("+i+")";
        elementBackground.setAttribute("onmousemove", divFunction);
        i+=1;
    }
}

function move(divNum){
    divs=document.getElementsByClassName("d");
    let i=0;
    while(divs[i]){
        divs[i].style.height="100vh";
        i++;
    }
    cursorPosition = event.pageY;
    let next=1;
    let otherDivsHeight=cursorPosition;
    divs=document.getElementsByClassName("d");
    divs[divNum].style.height=cursorPosition+"px";

    while(otherDivsHeight<=window.innerHeight){
        if(divs[divNum-next])divs[divNum-next].style.height=otherDivsHeight+"px";
        if(divs[divNum+next])divs[divNum+next].style.height=otherDivsHeight+"px";
        next+=1;
        otherDivsHeight+=0.3*next;
    }
}

document.body.addEventListener("mouseleave", function(){
    divs=document.getElementsByClassName("d");
    let i=0;
    while(divs[i]){
        divs[i].style.height="100vh";
        i++;
    }
})