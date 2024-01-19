
// console.log(buttons);

function toggleActive(element){

    const buttons= document.querySelectorAll('.toggle');

    buttons.forEach(function(el) {
        el.classList.remove('active');
    });

    element.classList.add('active');


}
