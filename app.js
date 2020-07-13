 const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li'); 

    burger.addEventListener('click', ()=>{                      /* event listener - on click */
        // Toggle Nav
        nav.classList.toggle('nav-active');                     

        // Animate Links
        navLinks.forEach((link, index)=>{                       
            if(link.style.animation){                           /* to ensure the animation restarts */
                link.style.animation = '';
            }
            else{
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 5 + 0.3}s`;
            }
        });
        
        // Burger animation
        burger.classList.toggle('toggle');

    });
 }

 // calling the function
 navSlide();