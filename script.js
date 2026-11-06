
let block = document.querySelector('#block');



function  onMouseMove(event) {
   block.style.left = event.pageX+'px';
   block.style.top = event.pageY + 'px';
}


function onMousedown()
{
window.addEventListener('mousemove',onMouseMove);
}


function onMouseup()
{
    window.removeEventListener('mousemove',onMouseMove)
}


block.addEventListener('mousedown',onMousedown);
window.addEventListener('mouseup',onMouseup);







