const emojis=["😪","🤭","🫢","🫣","🥸","🐫","🐖","😭","😟","🤑","🥵","😳","🤪"];
const face1=document.getElementById('face');
const buto=document.getElementById('button');
 buto.addEventListener("click",() => {

    let round = Math.floor(Math.random() * emojis.length);
    let result= emojis[round];
    face1.textContent =result;

 });
// face1.innerHTML="hello";