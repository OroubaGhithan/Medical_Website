//1- Scroll reveal animation

const sr = ScrollReveal({
    origin: 'bottom',
    distance: '60px',
    duration: '2500',
    delay: 400,
    reset: true  /* Animation repeat */
})

sr.reveal(`.content`, { origin: 'right'});
sr.reveal(`.image`, { origin: 'left' }) 


sr.reveal(`.landing .content-text h2`);
sr.reveal(`.landing .content-text p`, { delay: 500 });
sr.reveal(`.landing .content-text div`, { delay: 600 });

sr.reveal(`.testimonials .row .box:nth-child(1)`)
sr.reveal(`.testimonials .row .box:nth-child(2)`, {delay: 500})
sr.reveal(`.testimonials .row .box:nth-child(3)`, { delay: 600 })


var delay = 200;
for (let i = 1; i <= 9 ; i++) 
{
    sr.reveal(`.why-choose-us .box:nth-child(${i})` , {delay: delay })
    delay += 200;
}
delay = 200; 

for (let i = 1; i <= 6; i++) {
    sr.reveal(`.our-services .box:nth-child(${i})` , {delay: delay })
    delay += 200;
}
delay = 200; 

for (let i = 1; i <= 4; i++) {
    sr.reveal(`.price-top .box:nth-child(${i})` , {delay: delay })
    delay += 200;
}
delay = 200;
for (let i = 1; i <= 4; i++) {
    sr.reveal(`.price-bottom .card:nth-child(${i})` , {delay: delay })
    delay += 200;
}


var del_foot = 200;
for (let i = 1; i <= 4 ; i++) 
{
    sr.reveal(`.footer .box:nth-child(${i})` , {delay: del_foot ,origin:'left' })
    del_foot += 200;
}

sr.reveal(`.feeling-convinced .container`);

sr.reveal(`.contact .contact-form`, {origin: 'left'})
sr.reveal(`.contact .contact-information` , { origin: 'right'})
//2- Scroll to Top Bottom

let up = document.querySelector(".up");

window.onscroll = function () {
    this.scrollY >= 200 ? up.classList.add("show") :
        up.classList.remove("show");
};

up.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}

//3- Active page

const currentLocation = location.href;
console.log(currentLocation);
const menuItem = document.querySelectorAll('header .header-2 .container nav ul li a');
for (let i = 0; i < menuItem.length; i++) {
    if (menuItem[i].href === currentLocation) {
        menuItem[i].className = "active";
    }
} 
//4- Increase Numbers On Scrolling

let nums = document.querySelectorAll(".status .number");
let status_section = document.querySelector(".status");
let started_index = false; // Function Started ? No

window.onscroll = function () {
    if (window.scrollY >= status_section.offsetTop - 500) {
      if (!started_index) {
          nums.forEach((el) => {
            let goal = el.dataset.goal;
            let count = setInterval(() => {
              el.textContent++;
              if (el.textContent == goal) {
                clearInterval(count);
              }
            }, 2000 / goal);
        });
      }
      started_index = true;
    }
};

// 5- search bar
// Don't work.. need some edit
document.querySelector('.search-icon-parent').onclick = () => {
    document.querySelector('#nav-search-form').classList.toggle('active');
}
window.onscroll = () => {
    document.querySelector('#nav-search-form').classList.remove('active');
}

document.querySelector('#close').onclick = () => {
    console.log('222');
    document.querySelector('#nav-search-form').classList.remove('active');
}
// ////////////////////////////////////////////////////////////////////