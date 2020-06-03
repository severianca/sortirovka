define(['js/Base/Component.js'],
function(Component) {

    class Number extends Component {
        render({number}) {
            return `
                <div class="number">${number}</div>`;
        }
    }
    return Number;
});