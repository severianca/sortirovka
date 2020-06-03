'use strict';

define(['js/Base/Component.js', 'js/Page/Page.js'],
function(Component, Page) {

    Component.prototype.generateId = function() {
        return Math.random().toString(32).slice(2);
        };

    const page = factory.create(Page, {
        title: 'Сортировка пузырьком'
    });
    page.mount(document.body);

    var button_generate = document.getElementById('button-generate');
    button_generate.addEventListener('click', onButtonGenerateClick);

    var sequence_static = document.getElementsByName("number_static");
    var sequence_sort = document.getElementsByName("number_sort");

    let sequence = new Array(10);

    function onButtonGenerateClick(event){
        for (let i=0;i<10;i++){
            sequence[i]= getRandomNumber(0, 100);
            sequence_static[i].innerHTML = sequence[i];
            sequence_sort[i].innerHTML = sequence[i];
        }

        sequence_static.forEach(number => {
            number.style.color = "blue";
        });
        sequence_sort.forEach(number => {
            number.style.color = "blue";
        });

    }

    function getRandomNumber(min, max){
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

});