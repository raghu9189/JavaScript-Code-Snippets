const btn = document.querySelector('.increment_btn')
const btnPress = document.querySelector('.pressed_count')
const count = document.querySelector('.trigger_count')

var pressedCount = 0;
var triggeredCount = 0;

const throttleValue = _.throttle(()=>{
    count.innerHTML = ++triggeredCount;
}, 800);

btn.addEventListener('click', ()=>{
    btnPress.innerHTML = ++pressedCount;
    throttleValue()
})