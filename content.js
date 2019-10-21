new WOW().init();

$(window).scroll(() => {
  let sticky = $("header");

  if ($(window).scrollTop() > 100) {
    sticky.addClass("fixed");
    const a = $("header ul li a");
    a.addClass("visible");
  } else {
    sticky.removeClass("fixed");
  }
});

/*Icon animations*/

// const chargeBatteryStart = () =>{
//     document.querySelectorAll('.batteryStart').forEach(el=>{
//         el.innerHTML = '&#xf244';

//             setTimeout(() =>{
//                 el.innerHTML = '&#xf243'
//             },1000)

//             setTimeout(() =>{
//                 el.innerHTML = '&#xf242'
//             },2000)

//             setTimeout(() =>{
//                 el.innerHTML = '&#xf241'
//             },3000)

//             setTimeout(() =>{
//                 el.innerHTML = '&#xf240'
//             },4000)

//     })

// }

//setInterval(chargeBatteryStart, 5000)

// run animation
//chargeBatteryStart();

const chargeBatteryHalf = () => {
  document.querySelectorAll(".batteryHalf").forEach(el => {
    el.innerHTML = "&#xf244";

    setTimeout(() => {
      el.innerHTML = "&#xf243";
    }, 1000);

    setTimeout(() => {
      el.innerHTML = "&#xf242";
    }, 2000);
  });
};

setInterval(chargeBatteryHalf, 3000);

// run animation
chargeBatteryHalf();

const chargeBatteryQuarter = () => {
  document.querySelectorAll(".batteryQuarter").forEach(el => {
    el.innerHTML = "&#xf244";

    setTimeout(() => {
      el.innerHTML = "&#xf243";
    }, 1000);
  });
};

setInterval(chargeBatteryQuarter, 2000);

// run animation
chargeBatteryQuarter();

// Typewriter Effect

class TypeWriter {
  constructor(txtEl, words, wait = 3000) {
    this.txtEl = txtEl;
    this.words = words;
    this.txt = "";
    this.wordIndex = 0;
    this.wait = parseInt(wait, 10);
    this.type();
    this.isDeleting = false;
  }

  type() {
    // current indec of word

    const current = this.wordIndex % this.words.length;

    // Get full text of current word

    const fulltxt = this.words[current];

    // Check if deleting

    if (this.isDeleting) {
      // remove char
      this.txt = fulltxt.substring(0, this.txt.length - 1);
    } else {
      // add a char

      this.txt = fulltxt.substring(0, this.txt.length + 1);
    }

    // Insert text in the element

    this.txtEl.innerHTML = `<span class="txt">${this.txt}</span>`;

    // Type Speed

    let typeSpeed = 100;

    if (this.isDeleting) {
      typeSpeed /= 2;
    }

    // Check if the word is complete

    if (!this.isDeleting && this.txt === fulltxt) {
      // Make a pause at End
      typeSpeed = this.wait;
      // Set delete to true
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === "") {
      this.isDeleting = false;
      // Move to the next word

      this.wordIndex++;

      // pause before start typing

      typeSpeed = 500;
    }

    setTimeout(() => {
      this.type();
    }, typeSpeed);
  }
}

const init = function() {
  const txtEl = document.querySelector(".txt-type");
  const words = JSON.parse(txtEl.getAttribute("data-words")); // To be able to use the attr as an Array
  const wait = txtEl.getAttribute("data-wait");

  // init TypeWriter

  new TypeWriter(txtEl, words, wait);
};

document.addEventListener("DOMContentLoaded", init);

/*NAV BAR MOBILE*/

const close = document.querySelector("#close");
const open = document.querySelector("#open");
const nav = document.querySelector(".nav");

const openNav = () => {
  open.style.display = "none";
  nav.style.width = "100%";
};

const closeNav = () => {
  nav.style.width = "0%";
  open.style.display = "block";
};

open.addEventListener("click", () => {
  openNav();
});

close.addEventListener("click", () => {
  closeNav();
});

document.querySelectorAll("#nav a:not(:first-child)").forEach(el => {
  el.addEventListener("click", () => {
    closeNav();
  });
});
