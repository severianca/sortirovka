'use strict';

define(['js/Base/Component.js', 'js/Page/Page.js'],
function(Component, Page) {

    let background_color = "#c0c0c0";
    let base_number_color = "blue";

    Component.prototype.generateId = function() {
        return Math.random().toString(32).slice(2);
        };

    const page = factory.create(Page, {
        title: 'Сортировка пузырьком'
    });
    page.mount(document.body);

    var button_generate = document.getElementById('button-generate');
    button_generate.addEventListener('click', onButtonGenerateClick);

    var button_visualize = document.getElementById('button-visualize');

    var sequence_static = document.getElementsByName("number_static");
    var sequence_sort = document.getElementsByName("number_sort");

    let sequence = new Array(10);

    let index = [];
    for (let i=0; i<10; i++){
        index[i] = i;
    }

    function onButtonGenerateClick(){
        //получаем случайную последовательность
        for (let i=0;i<10;i++){
            sequence[i]= getRandomNumber(10, 99);
            sequence_static[i].innerHTML = sequence[i];
            sequence_sort[i].innerHTML = sequence[i];
        }

        sequence_static.forEach(number => {
            number.style.color = base_number_color;
        });
        sequence_sort.forEach(number => {
            number.style.color = base_number_color;
        });

        button_visualize.addEventListener('click', onButtonVisualizeClick);
    }

    function onButtonVisualizeClick(){
        //начинаем визуализировать сортировку
        sort(0,0);
    }

    function getRandomNumber(min, max){
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    /**
    * сортировка пузырьком
    * i,j - идексы массива, элементы которого нужно сравнить
    */
    function sort(i,j){
        let start = Date.now();
        let timer = setInterval(function() {
            let timePassed = Date.now() - start;
          
            sequence_sort[index[j]].style.color = "black";
            sequence_sort[index[j+1]].style.color = "black";
            if (sequence[j] > sequence[j + 1]){
                move(j);
            }

            if (timePassed >= 4240) {

                if (sequence[j] > sequence[j + 1]){
                    let temp = sequence[j];
                    sequence[j] = sequence[j + 1];
                    sequence[j + 1] = temp;
                    let temp_index = index[j];
                    index[j] = index[j+1];
                    index[j+1] = temp_index;
                }

                if (i == 9){
                    numberPaintBaseColor(j);
                    sequence_sort[index[j]].style.background = background_color;
                    return;
                }

                if (j < 8-i){
                    numberPaintBaseColor(j);
                    j++;
                    clearInterval(timer);
                    sort(i,j);
                }
                else {
                    clearInterval(timer);
                    numberPaintBaseColor(j);
                    sequence_sort[index[j+1]].style.background = background_color;
                    j = 0;
                    i++;
                    sort(i,j);
                }

            }
        }, 20);
    }

    /**
    * 
    */
    function move(j){
        let currentLeftJ = window.getComputedStyle(sequence_sort[index[j]]).left;
        let currentLeftJPlusOne = window.getComputedStyle(sequence_sort[index[j+1]]).left;
        currentLeftJ = Number(currentLeftJ.replace('px',''));
        currentLeftJPlusOne = Number(currentLeftJPlusOne.replace('px',''));
        sequence_sort[index[j]].style.left = currentLeftJ + 15 / 50 + 'px';
        sequence_sort[index[j+1]].style.left = currentLeftJPlusOne - 15 / 50 + 'px';
    }

    /**
    * Перекрашивает j и j+1 элементы массива в базовый цвет
    */
    function numberPaintBaseColor(j){
        sequence_sort[index[j]].style.color = base_number_color;
        sequence_sort[index[j+1]].style.color = base_number_color;
    }
});