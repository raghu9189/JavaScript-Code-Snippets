function A(){
    setTimeout(()=>{
        A();
    },1000);
    console.log('A Called');
}
A();