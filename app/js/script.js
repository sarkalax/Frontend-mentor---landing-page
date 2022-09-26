let btnHamburger = document.getElementById('hamburger'),
    body = document.body;
    header = document.querySelector('.header'),
    overlay = document.querySelector('.overlay'),
    fadeElems = document.querySelectorAll('.has-fade'), //zapsat
    openMenu = document.querySelector('.open_menu');

btnHamburger.addEventListener('click', function(){
    console.log('čus') ;

    if (header.classList.contains('open')) { // close hamburger menu
        body.classList.remove('no-scroll');  //zapsat
        
        header.classList.remove('open');

        fadeElems.forEach(function (element) { //zapsat, element v () důležitý
            element.classList.remove('fade-in');
            element.classList.add('fade-out');
        })
    }

    else {                                  // open hamburger menu
        body.classList.add('no-scroll');

        header.classList.add('open');
    
        fadeElems.forEach( function(element) {
            element.classList.remove('fade-out');
            element.classList.add('fade-in');
        })
    }
})
