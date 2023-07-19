Array.from(document.getElementsByTagName('input')).forEach((e,i)=>{
    e.addEventListener('keyup',(e1)=>{
        if (e.value.length>0) {
            document.getElementsByClassName('bi-caret-down-fill')[i].style.transform = "rotate(180deg)";
        } else {
            document.getElementsByClassName('bi-caret-down-fill')[i].style.transform = "rotate(0deg)";
        }
    })
})

let menu_btn = document.getElementsByClassName('bi-three-dots')[0];
let menu_bx = document.getElementById('menu_bx')

menu_btn.addEventListener('click', ()=>{
    menu_bx.classList.toggle('ul_active');
})

let availableKeywords = [
    'India' ,
    'Russia' ,
    'USA' ,
    'Dubai' ,
];
const resultsBox = document.querySelector(".result-box");
const inputBox = document.getElementById("input-box")

inputBox.onkeyup = function(){
    let result = [];
    let input = inputBox.value;
    if(input.length){
        result = availableKeywords.filter((keyword)=>{
          return keyword.toLocaleLowerCase().includes(input.toLocaleLowerCase());
        });
        console.log(result);
    }
    display(result);

    if(!result.length){
        resultsBox.innerHTML = '';
    }
}

function display(result){
    const content = result.map((list)=>{
        return "<li onclick=selectInput(this)>" + list + "</li>";
    });

    resultsBox.innerHTML = "<ul>" + content.join('') + "</ul>";
}

function selectInput(list){
    inputBox.value = list.innerHTML;
    resultsBox.innerHTML = '';
}
var card = document.
querySelectorAll('.card');
var btn=document.querySelector
('.btn');
var currenting=4
btn.addEventListener('click',function(){
    for(var i=currenting; i<currenting+4;i++){
        if(card[i]){
            card[i].style.display='inline-block';
        }
    }
    currenting+=4;
})