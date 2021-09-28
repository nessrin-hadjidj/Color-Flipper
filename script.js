window.onload=function(){

// Selectors 
const colors = ['green', 'blue', 'red', 'pink', 'yellow', 'orange', 'purple', 'violet', 'brown', 'hotpink'];
const btn = document.getElementById('btn');
const color = document.querySelector('.color')

// Event Listeners 
btn.addEventListener('click', function colorChange(){
    const randomNumber = getRandomNumber();
    console.log(randomNumber);
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});


//Functions
const getRandomNumber = () => {
    return Math.floor(Math.random()*colors.length);
}

/* 
function colorChange(){
    console.log('hello');
    return 'hi';
    const randomNumber = 2;
    document.body.style.backgroundColor = color[randomNumber];
    color.textContent = color[randomNumber]; */
    
}
