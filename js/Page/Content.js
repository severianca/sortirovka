define(['js/Base/Component.js', 'js/Page/Sequence.js'], 
function(Component, Sequence){
    class Content extends Component {
        render() {
            return `
            <div class="content">
                <div class="content_hint" name="content_hint">Нажмите кнопку для генерации списка случайных чисел</div>
                <button class="content_button" id="button-generate">СГЕНЕРИРОВАТЬ</button>
                <div class="content_sequence">
                    ${this.childrens.create(Sequence,{
                        condition: 'static'
                    })}
                </div>
                <div class="content_hint" name="content_hint">для визуализации сортировки нажмите на кнопку</div>
                <button class="content_button" id="button-visualize">ВИЗУАЛИЗИРОВАТЬ</button>
                <div class="content_sequence">
                    ${this.childrens.create(Sequence, {
                        condition: 'sort'
                    })}
                </div>
                <div class="content_hint" name="content_hint">при нажатии на кнопку "сгенерировать" сгенерируется новая последовательность</div>
                <div class="content_hint" name="content_hint">для её визуализации нажмите "визуализировать"</div>
            </div>`;
        }
    }
    return Content;
});