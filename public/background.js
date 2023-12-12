let i = 0
   
let color = [`#1B4242`, `#092635`, `#6B240C`, `#994D1C`]


setInterval(() => {
    document.body.style.backgroundColor = color[i];
    document.body.style.transition = `3s`
    i++;
    if(i>=color.length){
        i=0;  
    }
}
, 2000);
