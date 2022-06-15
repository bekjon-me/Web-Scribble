const hamburgerBtn = document.getElementById('hamburger');
const hamburgerIcon = hamburgerBtn.getElementsByTagName('i')[0];
const mobileNav = document.getElementById('mobile-nav');
const topbar = document.getElementsByClassName('topbar')[0];
const linkList = document.getElementsByClassName('nav-link');
const searchBtn = document.getElementById('searchBtn');
const searchDiv = document.getElementsByClassName('searchDiv')[0];
const searchInput = document.getElementById('searchInput');

searchBtn.addEventListener('click', () => {
  searchDiv.classList.toggle('shown');
  searchInput.focus();
});

let hamburgerIsClick = false;

hamburgerBtn.addEventListener('click', () => {
  mobileNav.classList.toggle('marginLeft0');
  topbar.classList.toggle('marginLeft275');
  if (hamburgerIsClick) {
    hamburgerIcon.className = 'fa-solid fa-bars';
  } else {
    hamburgerIcon.className = 'fa-solid fa-xmark';
  }
  hamburgerIsClick = !hamburgerIsClick;
});

for (let k = 0; k < linkList.length; k += 1) {
  const element = linkList[k].getElementsByTagName('span')[0];
  linkList[k].scrollIntoView();

  if (element) {
    element.addEventListener('click', () => {
      if (window.innerWidth > 960) {
        for (let i = 0; i < linkList.length; i += 1) {
          if (linkList[i].childNodes[3]) {
            if (i !== k) {
              linkList[i].childNodes[3].classList.add('none');
              linkList[i].childNodes[3].classList.remove('displayNone');
            }
          }
        }
        if (linkList[k].childNodes[3].classList[0] === 'displayNone') {
          linkList[k].childNodes[3].classList.remove('displayNone');
        } else {
          linkList[k].childNodes[3].classList.add('displayNone');
        }
        linkList[k].childNodes[3].classList.remove('none');
      } else {
        for (let i = 0; i < linkList.length; i += 1) {
          if (linkList[i].childNodes[3]) {
            if (i !== k) {
              linkList[i].childNodes[3].classList.remove('displayNone');
              linkList[i].childNodes[3].parentElement.classList.remove(
                'bgOrange',
              );
            }
          }
        }
        if (linkList[k].childNodes[3].classList[0] === 'displayNone') {
          linkList[k].childNodes[3].classList.remove('displayNone');
          linkList[k].childNodes[3].parentElement.classList.remove('bgOrange');
        } else {
          linkList[k].childNodes[3].classList.add('displayNone');
          linkList[k].childNodes[3].parentElement.classList.add('bgOrange');
        }
      }
    });
  }
}
