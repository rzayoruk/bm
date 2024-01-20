function isScrollEnd(scrollArea) {
    return scrollArea.scrollLeft + scrollArea.offsetWidth == scrollArea.scrollWidth;
}

function isScrollStart(scrollArea) {
    return scrollArea.scrollLeft == 0;
}

function hasHorizontalScroll(scrollArea) {
    return scrollArea.scrollWidth > scrollArea.offsetWidth
}

function scrollControl(scrollArea) {
    var iconCont = scrollArea.previousElementSibling.querySelector('.bttn-cont');

    if (hasHorizontalScroll(scrollArea)) {
        iconCont.classList.add('active')

        if (isScrollStart(scrollArea)) {
            //console.log('scrollenbaşta')
            iconCont.querySelector('.prev-btn').classList.remove('active')
            iconCont.querySelector('.next-btn').classList.add('active')

        }
        else {
            //console.log('scrollbaşta değil')
            iconCont.querySelector('.prev-btn').classList.add('active')
        }

        if (isScrollEnd(scrollArea)) {
            //console.log('scrollensonda')
            iconCont.querySelector('.prev-btn').classList.add('active')
            iconCont.querySelector('.next-btn').classList.remove('active')

        }
        else {
            //console.log('scrollensonda değil')
            iconCont.querySelector('.next-btn').classList.add('active')
        }
    }
    else {
        iconCont.classList.remove('active')
    }
}

const scrollAreas = document.querySelectorAll('.scroll-area');

scrollAreas.forEach(scrollArea => {
    //console.log(element.previousElementSibling)
    //console.log(scrollArea)
    iconCont = scrollArea.previousElementSibling.querySelector('.bttn-cont')
    nextIcon = iconCont.querySelector('.next-btn')
    prevIcon = iconCont.querySelector('.prev-btn')


    nextIcon.addEventListener('click', () => {
        scrollArea.scrollLeft += scrollArea.offsetWidth / 4 + 24;
    });

    prevIcon.addEventListener('click', () => {
        scrollArea.scrollLeft -= scrollArea.offsetWidth / 4 - 24;
    });

    scrollControl(scrollArea, prevIcon, nextIcon, iconCont)

    scrollArea.addEventListener('scroll', () => scrollControl(scrollArea));

    new ResizeObserver(() => scrollControl(scrollArea)).observe(scrollArea);

});



