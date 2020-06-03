define(['js/Base/Component.js'],
function(Component) {

    class Number extends Component {
        render({number, condition}) {
            return `
                <div class="number" name="number_${condition}">${number}</div>`;
        }
    }
    return Number;
});