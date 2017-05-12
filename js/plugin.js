//--------------------------------------DOM BOM (presentation #22)--------------------------------------
// // Задание 1
// document.addEventListener('DOMContentLoaded', function () {
//     var parent = document.body.children[0];
//     var child = document.querySelector('mark');
//     if ( parent = child) {
//         console.log(true);
//     } else {
//         console.log(false);
//     }
// });

// // Задание 2
// var count = document.getElementsByTagName('a');
//
// for (var i = 0; i <= count.length; i++){
//     if (!count[i].matches('ul li a')) {
//         console.log(count[i]);
//     }
// }

// // Задание 3
// var ulTag = document.querySelector('ul');
// console.log(`Следующий элемент:`, ulTag.nextElementSibling);
// console.log(`Предыдущий элемент:`, ulTag.previousElementSibling);

// // Задание 4
// var liTags = document.getElementsByTagName('li');
// console.log(liTags, liTags.length);

//--------------------------------------DOM nodes (presentation #23)--------------------------------------
// // Задание 1
// var text = document.querySelector('p');
// console.log(text.textContent);

// // Задание 2
// function infoNode() {
//     var element = document.querySelector('p');
//     console.log(element.nodeType);
//     console.log(element.innerHTML);
// }
// console.log(infoNode());

// // Задание 3
// var ulTag = document.getElementsByTagName('li');
// for (var i = 0; i <= ulTag.length; i++) {
//     var arr = [];
//     arr.push(ulTag[i].textContent);
//     console.log(arr);
// }

// // Задание 4
// var p = document.querySelector('p');
// p.textContent = '-text-';
// console.log(p.outerHTML);

// ----------Part2----------
// // Задание 1
// var ul = document.querySelector('ul');
// ul.classList.add('list');
// console.log(ul.outerHTML);

// // Задание 2
// var ul = document.getElementsByTagName('ul')[0];
// var li = ul.getElementsByTagName('li')[0];
// var a = li.getElementsByTagName('a')[0];
// a.classList.add('link');
// console.log(a);

// // Задание 3
// var ulTag = document.querySelectorAll('li');
// for (var i = 0; i <= ulTag.length; i+=2) {
//     ulTag[i].classList.add('item');
// }

// // Задание 4
// var a = document.getElementsByTagName('a');
// for (var i = 0; i <= a.length; i++){
//     a[i].classList.add('custom-link');
// }

//--------------------------------------Манипуляция содержимым--------------------------------------
// // Задание 1
// var parent = document.querySelector('ul');
// var newLi = document.createElement('li');
//
// newLi.className = 'new-item';
// newLi.textContent = 'Item5';
//
// parent.appendChild(newLi);

// // Задание 2
// var count = document.getElementsByTagName('a');
// var strong = document.createElement('strong');
// for (var i = 0; i <= count.length; i++){
//     if (count[i].matches('ul li a')) {
//         count[i].insertAdjacentElement('beforeend', strong);
//         console.log(count[i]);
//     }
// }

// // Задание 3
// var img = document.createElement('img');
// img.setAttribute('src', 'img/snegow.jpg');
// img.setAttribute('alt', 'picture');
// document.body.insertBefore(img, document.body.firstChild);

// // Задание 4
// var mark = document.querySelector('mark');
// var text = ' green';
// mark.className = 'green';
// mark.insertAdjacentText('beforeend', text);

// // Задание 5
// var li = document.querySelector('li');
// var newLi = li.textContent;
// var str = '';
//
// for (var i = newLi.length ; i >= 0; i--) {
//     str += newLi[i];
// }
// console.log(str);

//--------------------------------------Style & Size--------------------------------------
// // Задание 1, 2
// var mark = document.querySelector('mark');
// console.log(mark.style.background = 'blue');

// // Задание 3
// var a = document.getElementsByTagName('a')[0];
// console.log(a.style.color);

// // Задание 4
// var p = getComputedStyle(document.querySelector('p')).font;
// console.log(p);

// // Задание 5
// var count = document.getElementsByTagName('a');
// for (var i = 0; i <= count.length; i++){
//     if (count[i].matches('ul li a')) {
//         count[i].style.color = 'red';
//         console.log(count[i]);
//     }
// }

// // Задание 6
// var a = document.getElementsByTagName('a')[5];
// a.style.display = "none";

// ----------Part2----------
// // Задание 1
// var ul = document.querySelector('ul');
// var ulH = parseInt(getComputedStyle(ul).height);
// console.log(`Высота с паддингами = ${ul.clientHeight}`);
// console.log(ulH);

// // Задание 2-3
// var elem = document.querySelector('mark');
// function getCoords() {
//
//     var coords = elem.getBoundingClientRect();
//     return {
//         top: coords.top + pageYOffset + "px",
//         left: coords.left + pageXOffset + "px",
//         bottom: coords.bottom + pageYOffset + "px",
//         right: coords.right + pageXOffset + "px"
//     };
// }

// Задание 4
var module = (function () {
    var elem = document.querySelector('mark');

    function innerHeight() {
        var heightWithout = parseInt(getComputedStyle(elem).height);
        return heightWithout;
    }
    
    function height() {
        return elem.clientHeight;
    }

    function outerHeight() {
        return elem.offsetHeight;
    }

    function innerWidth() {
        var widthWithout = parseInt(getComputedStyle(elem).width);
        return widthWithout;
    }

    function width() {
        return elem.clientWidth;
    }

    function outerWidth() {
        return elem.offsetWidth;
    }

    function getPosition() {
        var coords = elem.getBoundingClientRect();
        return {
            top: coords.top + pageYOffset + "px",
            left: coords.left + pageXOffset + "px",
            bottom: coords.bottom + pageYOffset + "px",
            right: coords.right + pageXOffset + "px"
        };
    }

    function style(property) {
        return elem.style.color;
    }

    function backToTop() {
        return window.scrollTo(0, 0);
    }

    return {
        innerHeight,
        height,
        outerHeight,
        innerWidth,
        width,
        outerWidth,
        getPosition,
        style,
        backToTop
    }
})();
console.log(module.innerHeight());
console.log(module.height());
console.log(module.outerHeight());
console.log(module.innerWidth());
console.log(module.width());
console.log(module.outerWidth());
console.log(module.getPosition());
console.log(module.style());
console.log(module.backToTop());
