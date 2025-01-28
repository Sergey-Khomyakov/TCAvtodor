import dialogMeneger from './../../../modules/dialogMeneger.mjs'
import { preloadImages } from './../../../libs/gsap/utils.js';

$(function() { 
    dialogMeneger();

    scroll();
    // accordion();
    // select();

});


// // Function to handle scroll-triggered animations
// const scroll = () => {
//     const content = document.querySelector('.wrap');
//     const contentElements = document.querySelectorAll('.content--sticky');
    
//     contentElements.forEach((el, index) => {
//         if (index === 0) {
//             gsap.to(el, {
//                 scrollTrigger: {
//                     trigger: content,
//                     start: "top top",
//                     end: "bottom top",
//                     scrub: true,
//                     pin: true, // Фиксация первой карточки
//                 }
//             });
//         } else {
//             gsap.fromTo(el, {y: '0px'}, {
//                 y: `-${el.offsetHeight}px`, // Двигаем элементы по оси Y
//                 scrollTrigger: {
//                     trigger: content,
//                     start: "top top",
//                     end: "bottom bottom",
//                     pin: true,
//                     scrub: true,
//                 }
//             });
//         }
//     });
// };