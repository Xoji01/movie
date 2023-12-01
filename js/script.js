/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const del = document.querySelectorAll('.promo__adv img');

del.forEach(function (i) {
    i.remove();
});


let drama =  document.querySelector('.promo__genre')
let qq = document.querySelector('.promo__bg')


drama.innerHTML = 'драма';  

qq.style.backgroundImage = `url("img/bg.jpg")`

movieDB.movies.sort();
const Films = document.querySelectorAll(".promo__interactive-list li");

Films.forEach((item, i) => {
   item.innerHTML = (i + 1) + ". " + movieDB.movies [i]
});

var elements = document.querySelectorAll('.promo__interactive-list li');

elements.forEach((element) => {
  element.addEventListener('click', function() {
    element.remove();
  });
});
