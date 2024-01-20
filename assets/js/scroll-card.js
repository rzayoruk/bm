const scrollArea = document.getElementById('scroll-area');
const prevIcon = document.querySelector('.prev-btn');
const nextIcon = document.querySelector('.next-btn');
const iconCont = document.querySelector('.bttn-cont');

//console.log(scrollArea.parentNode)



function isScrollEnd(scrollArea) {
    return scrollArea.scrollLeft + scrollArea.offsetWidth == scrollArea.scrollWidth;
}

function isScrollStart(scrollArea) {
    return scrollArea.scrollLeft == 0;
}

function hasHorizontalScroll(scrollArea) {
    return scrollArea.scrollWidth > scrollArea.offsetWidth
}



scrollArea.addEventListener('scroll',scrollControl);

function scrollControl(){




    if(hasHorizontalScroll(scrollArea)){
        iconCont.classList.add('active')

        if(isScrollStart(scrollArea)){
            //console.log('scrollenbaşta')
            prevIcon.classList.remove('active')
            nextIcon.classList.add('active')
        }
        else{
            //console.log('scrollbaşta değil')
            prevIcon.classList.add('active')
        }

        if(isScrollEnd(scrollArea)){
            //console.log('scrollensonda')
            prevIcon.classList.add('active')
            nextIcon.classList.remove('active')
        }
        else{
            //console.log('scrollensonda değil')
            nextIcon.classList.add('active')
        }
    }
    else{
        iconCont.classList.remove('active')
    }

    
}

nextIcon.addEventListener('click', () => {
    scrollArea.scrollLeft += scrollArea.offsetWidth / 5;
});

prevIcon.addEventListener('click', () => {
    scrollArea.scrollLeft -= scrollArea.offsetWidth / 5;
});

