const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
const aboutLink = document.querySelector('.about-link');
const priceLink = document.querySelector('.prices-link');
const appLink = document.querySelector('.app-link');
const galleryLink = document.querySelector('.gallery-link');
const galleryBtn = document.querySelector('.gallery-btn');
const exitMenu = document.querySelector('.exit-menu');
const exitPopup = document.getElementById('exit-popup');
const exitFormPopup = document.getElementById('exit-form-popup');
const exitCarouselPopup = document.getElementById('exit-carousel-popup');
const logo2 = document.querySelector('.logo2');
const priceItem = document.querySelectorAll('.price-item');
const main = document.querySelector('.main');
const priceModal = document.querySelector('.price-popup');
const itemTitle = document.getElementById('item-title');
const itemPrice = document.getElementById('item-price');
const itemDesc = document.getElementById('item-desc');
const scheduleApp = document.querySelector('.schedule-app');
const formPopup = document.querySelector('.form-popup');
const name = document.getElementById('name');
const phone = document.getElementById('phone');
const submitInfo = document.getElementById('submit-info');
const carouselContainer = document.querySelector('.carousel-container');
const nextSlide = document.getElementById('next-slide');
const previousSlide = document.getElementById('previous-slide');

const images = [
  document.getElementById('img-1'),
  document.getElementById('img-2')
];

let imageNum = 0;

hamburger.addEventListener('click', toggleMenu);
exitMenu.addEventListener('click', toggleExit);
aboutLink.addEventListener('click', toggleExit);
priceLink.addEventListener('click', toggleExit);
appLink.addEventListener('click', toggleExit);
galleryLink.addEventListener('click', toggleExit);
galleryBtn.addEventListener('click', openCarousel);
exitPopup.addEventListener('click', exitModal);
exitFormPopup.addEventListener('click', exitFormModal);
exitCarouselPopup.addEventListener('click', exitCarousel);
scheduleApp.addEventListener('click', openFormModal);
submitInfo.addEventListener('click', sendInfo);
name.addEventListener('keyup', nameChange);
phone.addEventListener('keyup', phoneChange);
nextSlide.addEventListener('click', nextImg);
previousSlide.addEventListener('click', previousImg);

priceItem.forEach(i => {
  i.addEventListener('click', pricePopup);
});

function pricePopup(e) {
  priceModal.style.display = 'block';
  main.style.backgroundColor = 'rgba(249, 249, 249, 0.5)';
  galleryBtn.classList.add('dis');
  scheduleApp.classList.add('dis');
  priceItem.forEach(i => i.classList.add('dis'));
  if (e.target.id === 'full') {
    itemTitle.innerText = 'Complete Touch Up';
    itemPrice.innerText = 'Price - $85';
    itemDesc.innerText =
      'For $85, We will go around the entire car filling in every rock chip.';
  }
  if (e.target.id === 'front') {
    itemTitle.innerText = 'Front Touch Up';
    itemPrice.innerText = 'Price - $65';
    itemDesc.innerText =
      'Front touch up includes our process on the front bumper, hood to the windshield pillers and mirrors.';
  }
  if (e.target.id === 'spot') {
    itemTitle.innerText = 'Spot Touch Up';
    itemPrice.innerText = 'Price - $35';
    itemDesc.innerText =
      'For one area of damaging that is concerning you. We will remove that damage(this does not include body work.. we do not specialize in body damage).';
  }
  if (e.target.id === 'full-truck') {
    itemTitle.innerText = 'Complete Touch Up (Truck)';
    itemPrice.innerText = 'Price - $125';
    itemDesc.innerText =
      'For $125, we offer our Complete Touch up process on a trucks and large vans';
  }
}

function exitModal() {
  priceModal.style.display = 'none';
  main.style.backgroundColor = '#FFF';
  galleryBtn.classList.remove('dis');
  scheduleApp.classList.remove('dis');
  priceItem.forEach(i => i.classList.remove('dis'));
}

function toggleMenu(e) {
  menu.style.display = 'flex';
  menu.style.zIndex = '1';
  document.body.style.backgroundColor = 'rgba(0,0,0,0.4)';
}

function toggleExit(e) {
  menu.style.display = 'none';
  menu.style.zIndex = '0';
  document.body.style.backgroundColor = 'rgba(0,0,0,0)';
}

function openFormModal() {
  formPopup.style.display = 'block';
  main.style.backgroundColor = 'rgba(249, 249, 249, 0.5)';
  priceItem.forEach(i => i.classList.add('dis'));
  galleryBtn.classList.add('dis');
}

function exitFormModal() {
  formPopup.style.display = 'none';
  main.style.backgroundColor = '#FFF';
  priceItem.forEach(i => i.classList.remove('dis'));
  galleryBtn.classList.remove('dis');
}

function openCarousel() {
  carouselContainer.style.display = 'block';
  main.style.backgroundColor = 'rgba(249, 249, 249, 0.5)';
  priceItem.forEach(i => i.classList.add('dis'));
  scheduleApp.classList.add('dis');
}

function exitCarousel() {
  carouselContainer.style.display = 'none';
  main.style.backgroundColor = '#FFF';
  priceItem.forEach(i => i.classList.remove('dis'));
  scheduleApp.classList.remove('dis');
}

function nextImg() {
  if (imageNum < images.length - 1) {
    imageNum++;
  } else {
    imageNum = 0;
  }
  images.map((i, index) => {
    if (index === imageNum) {
      i.classList.add('active');
      i.classList.remove('inactive');
    } else {
      i.classList.remove('active');
      i.classList.add('inactive');
    }
  });
}

function previousImg() {
  if (imageNum > 0) {
    imageNum--;
  } else {
    imageNum = images.length - 1;
  }
  console.log(imageNum);
  images.map((i, index) => {
    if (index === imageNum) {
      i.classList.add('active');
      i.classList.remove('inactive');
    } else {
      i.classList.remove('active');
      i.classList.add('inactive');
    }
  });
}

function nameChange(e) {
  name.name = e.target.value;
}

function phoneChange(e) {
  phone.name = e.target.value;
}

function sendInfo() {
  submitInfo.value = `Info Sent!`;
  setTimeout(() => {
    formPopup.style.display = 'none';
    main.style.backgroundColor = '#FFF';
    submitInfo.value = `Send`;
  }, 2000);
  console.log(infoSent);
}

setInterval(() => {
  if (!logo2.classList.contains('show')) {
    setInterval(() => {
      logo2.classList.add('show');
      logo2.classList.remove('hide');
    }, 1000);
  }
  if (logo2.classList.contains('show')) {
    setInterval(() => {
      logo2.classList.remove('show');
      logo2.classList.add('hide');
    }, 1000);
  }
}, 1000);

// JQUERY SMOOTH SCROLL
const scrollLink = $('.scroll');

scrollLink.click(function(e) {
  e.preventDefault();
  $('body,html').animate(
    {
      scrollTop: $(this.hash).offset().top
    },
    700
  );
});

const scrollLinkFast = $('.scroll-fast');

scrollLinkFast.click(function(e) {
  e.preventDefault();
  $('body,html').animate(
    {
      scrollTop: $(this.hash).offset().top
    },
    300
  );
});

const scrollLinkSlow = $('.scroll-slow');

scrollLinkSlow.click(function(e) {
  e.preventDefault();
  $('body,html').animate(
    {
      scrollTop: $(this.hash).offset().top
    },
    1000
  );
});
