const header = document.querySelector('.header');
const choiceTabs = document.querySelectorAll('.choice__item');
const select = document.querySelector('.collect__dropdown');
const phoneInput = document.querySelector('#phone');
const dateSelectors = ['#date', '#datefrom'];

const handleScroll = () => {
  if (window.scrollY > 450) {
    header.classList.add('header_fixed');
  } else {
    header.classList.remove('header_fixed');
  }
};

const handleTabClick = (tab) => (e) => {
  e.preventDefault();
  choiceTabs.forEach(item => item.classList.remove('active'));
  tab.classList.add('active');
};

const handleSelectChange = () => {
  select.classList.add('collect__dropdown_selected');
};

const applyPhoneMask = () => {
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
};

const applyDateMasks = () => {
  const dateMask = new Inputmask({
    mask: '99.99.9999',
    placeholder: 'ДД.ММ.ГГГГ',
    showMaskOnHover: true,
    showMaskOnFocus: false,
    clearIncomplete: true
  });

  dateSelectors.forEach(selector => {
    const input = document.querySelector(selector);
    if (input) dateMask.mask(input);
  });
};

window.addEventListener('scroll', handleScroll);

choiceTabs.forEach(tab => {
  tab.addEventListener('click', handleTabClick(tab));
});

if (select) {
  select.addEventListener('change', handleSelectChange);
}

applyPhoneMask();
applyDateMasks();
