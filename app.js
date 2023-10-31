// const textarea = document.querySelector("textarea");
// textarea.addEventListener("keyup", e =>{
//   textarea.style.height = "63px";
//   let scHeight = e.target.scrollHeight;
//   textarea.style.height = `${scHeight}px`;
// });

const textarea = document.querySelector("textarea");
// let wrapper = document.getElementById("wrapper");

textarea.addEventListener('input',count)

function count(e) {
     
    var c = e.target.value
    var char = c.split('')
    console.log(char.length)
    console.log(char)
    if(char && char.length > 45){
        textarea.style.height = '49px'
        textarea.style.backgroundColor = 'yellow'
        
    }else{
        textarea.style.height = '29px'
        textarea.style.backgroundColor = 'white'
    }

    if(char && char.length > 90){
        textarea.style.height = '69px'
        textarea.style.backgroundColor = 'blue'
    }
    if(char && char.length > 135){
        textarea.style.height = '89px'
        textarea.style.backgroundColor = 'wheat'
    }

    if(char && char.length > 180){
        textarea.style.height = '109px'
        textarea.style.backgroundColor = 'grey'
    }
}
