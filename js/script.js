/*========== menu icon navbar ==========*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');




window.onscroll =() =>{
    sections.forEach(sec =>{
        let top = window.scrollY;
        console.log('Top is :',top)
        let offset = sec.offsetTop-150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach (links =>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');

            });

        };

    });
};

window.onscroll = () => {       
    /*========== sticky navbar ==========*/
    let header = document.querySelector('.header');
    header.classList.toggle('sticky',window.scrollY > 100);
    /*========== scroll sections active link ==========*/
    let sections = document.querySelectorAll('section');
    let navLinks = document.querySelectorAll('header nav a');
     sections.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop-150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');


        if(top >= offset && top < offset + height){
            navLinks.forEach (links =>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');

            });

        };

    });


    

    /*========== remove menu icon navbar when click navbar link (scroll) ==========*/

};


/*========== swiper ==========*/


/*========== dark light mode ==========*/


/*========== scroll reveal ==========*/


