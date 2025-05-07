// const header = document.querySelector('.header');
// 	window.addEventListener('scroll', () => {
// 		if (window.pageYOffset > 450) {
// 			header.classList.add('header_fixed');
// 		} else {
// 			header.classList.remove('header_fixed');}
// });

// const choiceTabs = document.querySelectorAll('.choice__item');

// 	choiceTabs.forEach((tab) => {
// 			tab.addEventListener('click', (e) => {
// 					e.preventDefault();
// 					choiceTabs.forEach((item) => {
// 							item.classList.remove('active');
// 					});
// 					tab.classList.add('active');
// 			});
// });

// let select = document.querySelector(".collect__dropdown");
//       select.addEventListener("change", () => {
//         select.classList.add("collect__dropdown_selected");
// });


// $(document).ready(function(){
//     $("#phone").inputmask({
//         mask: "+ 7 ( 999) 999- 99- 99",  
//         showMaskOnHover: true,   
//         showMaskOnFocus: false,   
//         placeholder: "_",        
//         greedy: false,           
//         autoUnmask: false,       
//         insertMode: true,        
//         definitions: { 
//             "9": { 
//                 validator: "[0-9]",  
//                 placeholder: "_ "   
//             	}
//         	}
//     	});
// });

// document.addEventListener("DOMContentLoaded", function () {
//     Inputmask({
//         mask: "99.99.9999", 
//         placeholder: "ДД.ММ.ГГГГ", 
//         showMaskOnHover: true,  
//         showMaskOnFocus: false,  
//         clearIncomplete: true  
//    			 }).mask("#date, #datefrom"); 
// });
// document.addEventListener("DOMContentLoaded", function () {
//     Inputmask({
//         mask: "99.99.9999", 
//         placeholder: "ДД.ММ.ГГГГ", 
//         showMaskOnHover: true,  
//         showMaskOnFocus: false,  
//         clearIncomplete: true  
//    			 }).mask("#datefrom"); 
// });
const header = document.querySelector('.header');

window.addEventListener('scroll', function () {
  if (window.scrollY > 450) {
    header.classList.add('header_fixed');
  } else {
    header.classList.remove('header_fixed');
  }
});


const choiceTabs = document.querySelectorAll('.choice__item');

choiceTabs.forEach(function (tab) {
  tab.addEventListener('click', function (e) {
    e.preventDefault();
    choiceTabs.forEach(function (item) {
      item.classList.remove('active');
    });
    tab.classList.add('active');
  });
});


const select = document.querySelector('.collect__dropdown');
if (select) {
  select.addEventListener('change', function () {
    select.classList.add('collect__dropdown_selected');
  });
}


window.addEventListener('DOMContentLoaded', function () {
  const phoneInput = document.querySelector('#phone');
  if (phoneInput) {
    Inputmask({
      mask: '+ 7 ( 999) 999- 99- 99',
      showMaskOnHover: true,
      showMaskOnFocus: false,
      placeholder: '_',
      greedy: false,
      autoUnmask: false,
      insertMode: true,
      definitions: {
        '9': {
          validator: '[0-9]',
          placeholder: '_ '
        }
      }
    }).mask(phoneInput);
  }
});
document.addEventListener("DOMContentLoaded", function () {
    const dateMask = new Inputmask({
      mask: "99.99.9999",
      placeholder: "ДД.ММ.ГГГГ",
      showMaskOnHover: true,
      showMaskOnFocus: false,
      clearIncomplete: true
    });
  
    ["#date", "#datefrom"].forEach(selector => {
      const input = document.querySelector(selector);
      if (input) dateMask.mask(input);
    });
  });
  
