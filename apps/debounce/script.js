const btn = document.querySelector('.increment_btn')
const btnPress = document.querySelector('.pressed_count')
const count = document.querySelector('.trigger_count')

var pressedCount = 0;
var triggeredCount = 0;

const myDebounce = (cb, d)=>{
    let timer;
    return function (...args){
        if (timer) clearTimeout(timer);
        timer = setTimeout(()=>{
            cb(...args);
        }, d);
    }
}

// const debouncedValue = _.debounce(()=>{
//     count.innerHTML = ++triggeredCount;
// }, 800);

const debouncedValue = myDebounce(()=>{
    count.innerHTML = ++triggeredCount;
}, 800);

btn.addEventListener('click', ()=>{
    btnPress.innerHTML = ++pressedCount;
    debouncedValue()
})
