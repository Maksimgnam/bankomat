
$('.form').hide(0)
$('.btns').hide(0)
$('.balance__block').hide(0)
// $('.btn__screen').hide(0)
$('.alert').hide(0)
$('.alerte').hide(0)



$('.btn__screen').click(function(){
    $('.btn__screen').hide(0)
    $('.form').show(100)
})



$('#nextBtn').click(function(){
    if(inp.value = ''){
        $('.form').hide(0)
    }
    else{
        $('.form').hide(0)
        $('.btns').show(0)
    }
    


   
 


 
})
$('.balance').click(function(){

$('.btns').hide(0)
$('.balance__block').show(0)



})
$('#ok').click(function(){
    $('.alert').hide(300)

})
$('#oke').click(function(){
    $('.alerte').hide(300)

})


let add = document.getElementById('add')
let remove = document.getElementById('minus')

let int = document.getElementById('number')
let num  = 0;




add.addEventListener('click', function(){

    num += 50;
    int.innerHTML = num;
    $('.alert').show(300)
    

  


})
remove.addEventListener('click', function(){

    num -= 50;
    int.innerHTML = num;
    $('.alerte').show(300)
    

  


})
tippy('#add', {
    content: 'Поповнити рахунок',
    placement: 'top',
});
tippy('#minus', {
    content: 'Зняти  гроші',
    placement: 'top',
    color: 'white'
});





