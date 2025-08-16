function A(){
    setTimeout(()=>{
        B();
    },1000);
    console.log('A Called');
    
}

function B(){
    setTimeout(()=>{
        A();
    },1000);
    console.log('B Called');
    
}
A();