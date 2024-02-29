function getcolour(){
    let val1 = Math.ceil(0+Math.random()*255);
    let val2 =  Math.ceil(0+Math.random()*255);
    let val3 =  Math.ceil(0+Math.random()*255);
    return `rgb(${val1},${val2},${val3})`;
}
function colorTheBox(){
    let boxs = document.getElementsByClassName("box");
   
    Array.from(boxs).forEach(e=>{

        e.style.backgroundColor = getcolour();
        e.style.color = getcolour();
        document.querySelector(".container").style.backgroundColor = getcolour();
        document.querySelector(".container").style.border ="30px solid red";
        document.querySelector(".container").style.borderColor=getcolour()
    })
    setTimeout(colorTheBox,2000);
}

colorTheBox();

 
