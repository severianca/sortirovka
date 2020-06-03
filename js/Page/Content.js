define(['js/Base/Component.js'], 
function(Component){
    class Content extends Component {
        render() {
            return `
            <div class="content">
                <div class="content_int">Нажмите кнопку для генерации списка случайных чисел</div>
                <button class="content_button" id="button-generate">СГЕНЕРИРОВАТЬ</button>
                <div class="content_sequence"></div>
                <div class="content_int">для визуализации сортировки нажмите на кнопку</div>
                <button class="content_button" id="button-visualize">ВИЗУАЛИЗИРОВАТЬ</button>
            </div>`;
        }
    }
    return Content;
});