/* Java Script */

 /* Проверка устройства */
const isMobile = {
	Android: function () {
		return navigator.userAgent.match(/Android/i);
	},
	BlackBerry: function () {
		return navigator.userAgent.match(/BlackBerry/i);
	},
	iOS: function () {
		return navigator.userAgent.match(/iPhone|iPad|iPod/i);
	},
	Opera: function () {
		return navigator.userAgent.match(/Opera Mini/i);
	},
	Windows: function () {
		return navigator.userAgent.match(/IEMobile/i);
	},
	any: function () {
		return (
			isMobile.Android() ||
			isMobile.BlackBerry() ||
			isMobile.iOS() ||
			isMobile.Opera() ||
			isMobile.Windows());
	}
};
  if (isMobile.any()) {/* Phone */} 
  else {/* PC */}
/* ------------------------------------- */

/*  Создание вкладок с помощь data-атрибута  */

  const btn = document.querySelectorAll(".button");
  const desc = document.querySelectorAll(".description");

  btn.forEach(item=>{
    item.addEventListener("click", (e)=>{
      /*  Переключения статьи(Описания)  */
      const buttons = item.dataset.btn; /* btn - название дата data-атрибута */
      dec.forEach(items=>{
        if(buttons === items.dataset.description) { /* description - это data атрибуд внутриннего контента */ 
          items.classList.remove("hide");
        }else {
          items.classList.add("hide");
        }
      });
     /*   Переключение кнопки(Заголовка)  */
      btn.forEach(btnItems =>{
        if(btnItems === e.target) {
          btnItems.classList.add("active");
        }else {
          btnItem.classList.remove("active");
        }
      });
    });
  });
/* ------------------------------------- */

 /* Аккордеон */

  const title = document.querySelectorAll('.title'); 

  title.forEach(item=>{
    item.addEventListener('click',(e)=>{
          title.forEach((items) => {
            items.nextElementSibling.classList.add("hide");  /* Подменю */
            items.classList.remove("active"); /* Поворот стрелки */
          });
          item.nextElementSibling.classList.toggle("hide");
          item.classList.toggle("active");
    });
  });
/* ------------------------------------- */

/* Фиксация header при скролле */

/*  Старт функции meFunction при скролле страницы  */
window.onscroll = function () {myFunction();};
/*  Получение header  */
const header = document.querySelector(".header");
/*  Получение смещения позиции header  */
let sticky = header.offsetTop;
/*  Добавление класса при скролле к header  */
function myFunction() {
  if (window.pageYOffset >= sticky) {
    header.classList.add("headers");
  } else {
    header.classList.remove("headers");
  }
}
/* ------------------------------------- */

/* Скрытие header при скролле вниз */

const headers = document.querySelector('.header');
let prevScrollpos = window.pageYOffset;

window.onscroll = function () {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    headers.style.top = "0";
  } else {
    headers.style.top = "-70px";
  }
  prevScrollpos = currentScrollPos;
};
/* ------------------------------------- */

/*  Scroll Seamless-Scroll-Polyfill */

/*  Библиотека для поддержки скрола на маках  */
<script src="https://cdn.jsdelivr.net/npm/seamless-scroll-polyfill@latest/lib/bundle.min.js"></script>
/*  Отмена стандартных функций и поиск элемента, удаление хеша (#) */
  e.preventDefault();
  const href = link.getAttribute('href').substring(1);
  const sect = document.getElementById(href);
/*  Работа со скролом при помощи библиотеки */
  seamless.scrollIntoView(sect, {  /* sect - путь с # до елемента скролла, querySelector('#item-1') */
    behavior: "smooth",
    block: "center",
    inline: "center",
  });
/*  Работа без библиотеки(На маках нет поддерки плавного скролла)  */
  sect.scrollIntoView ({
    block: 'start',
     behavior: 'smooth',
   });
   /* ------------------------------------- */

    /* Плавный скролл с помощью scrollTo  */

  const btns = document.querySelector(".button");
  const wrapp = document.querySelector(".wrapper").offsetTop;

  btns.addEventListener('click',(e)=>{
     window.scrollTo({
       top: wrapp,
       behavior: "smooth",
     });
  });

/* ------------------------------------- */

   /*  Появление кнопки скролла к top 0  */

  window.onscroll = function () {
    top();
  };

  function top() {
    const scroll = document.querySelector(".scroll");
    if (window.pageYOffset >= innerHeight) {
      scroll.classList.add("scroll-active");
    } else {
      scroll.classList.remove("scroll-active");
    }
  }
  document.querySelector(".scroll").onclick = () => {
    document.querySelector(".wrapper").scrollIntoView({ behavior: "smooth" });
  };
/*   ------------------------------------- */

 /* Анимация  */

const btnC = document.querySelector('.button');

btnC.onclick = function () {
  let start = Date.now();

  let timer = setInterval(function () {
    let timePassed = Date.now() - start;

    btnC.style.left = timePassed / 5 + "px";

    if (timePassed > 2000) clearInterval(timer);
  }, 20);
}

/* ------------------------------------- */

 /* Следование за курсором  */
function down(e, X, Y, item) {
  e.preventDefault();
  work = true;
  posit.x1 = X;
  posit.y1 = Y;
  posit.x3 = posit.x1 - item.offsetLeft;
  posit.y3 = posit.y1 - item.offsetTop;
}
function move(e, X, Y, item) {
  if (work) {
    posit.x2 = X - posit.x1 - posit.x3;
    posit.y2 = Y - posit.y1 - posit.y3;
    posit.resultX = posit.x2 + posit.x1;
    posit.resultY = posit.y2 + posit.y1;
    item.style.left = `${posit.resultX}px`;
    item.style.top = `${posit.resultY}px`;
  }
}
function up() {
  work = false;
}
/* ------------------------------------- */

// <!-- Английский алфавит -->
//  <!-- Два массива: один из строчных, а второй из заглавных букв: -->
    let arr_en = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let arr_EN = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

//<!-- Русский алфавит -->
//  <!-- Массивы без 'ь' и 'ъ'-знаков, а так же без буквы 'ы': -->
    let arrRu = ['а', 'б', 'в', 'г', 'д', 'е', 'ё', 'ж', 'з', 'и', 'й', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'э', 'ю', 'я'];
    let arrRU = ['А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ё', 'Ж', 'З', 'И', 'Й', 'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Э', 'Ю', 'Я'];
//  <!-- Русский алфавит полностью: -->
    let arr_ru = ['а', 'б', 'в', 'г', 'д', 'е', 'ё', 'ж', 'з', 'и', 'й', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ь', 'ы', 'ъ', 'э', 'ю', 'я'];
    let arr_RU = ['А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ё', 'Ж', 'З', 'И', 'Й', 'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Ь', 'Ы', 'Ъ', 'Э', 'Ю', 'Я'];

//<!-- Цифровой массив: -->
  let arr_num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

//<!-- Массив из спецсимволов: -->
  let arr_symb = ['!', '@', '#', '$', '%', '&', '?', '-', '+', '=', '~'];
//<!------------------------------------->
