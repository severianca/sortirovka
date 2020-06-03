define(['js/Base/Component.js', 'js/Page/Header.js', 'js/Page/Content.js'],
function(Component, Header, Content) {
    /**
     * класс страницы
     */
    class Page extends Component {
        render({title}) {
            return `
                <div class="wraper">
                    ${this.childrens.create(Header, {
                        title
                    })}
                    ${this.childrens.create(Content)}
                </div>`;
        }
    }
    return Page;
});