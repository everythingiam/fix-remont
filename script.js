var scrollToFooterButton = document.querySelector('.scroll');
scrollToFooterButton.addEventListener('click', function () {
    var footer = document.querySelector('footer');
    var footerOffset = footer.offsetTop;
    window.scrollTo({
        top: footerOffset,
        behavior: 'smooth'
    });
});

var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    keyboard: true,
    loop: true,
});

document.querySelector('.subs').addEventListener('click', function() {
    var inputSection = document.querySelector('.input-section');
    if (inputSection) {
        var h1Element = inputSection.querySelector('h1');
        inputSection.innerHTML = ''; 
        var img = document.createElement('img'); 
        img.src = 'img/yes.svg'; 
        inputSection.appendChild(img); 
        var text = document.createElement('p'); 
        text.textContent = 'СПАСИБО! МЫ БУДЕМ ДЕРЖАТЬ ВАС В КУРСЕ ОБНОВЛЕНИЙ'; 
        text.classList.add("yes-p");

        inputSection.setAttribute('style', 'justify-content: center'); 
        inputSection.appendChild(text);
        if (h1Element) {
            inputSection.appendChild(h1Element); 
          }
    }
  });

  document.querySelector('.red-btn').addEventListener('click', function() {
    var inputSection = document.querySelector('.input-section');
    if (inputSection) {
      var h1Element = inputSection.querySelector('h1');
      inputSection.innerHTML = ''; 
      if (h1Element) {
        inputSection.appendChild(h1Element); 
      }
    }
  });

    