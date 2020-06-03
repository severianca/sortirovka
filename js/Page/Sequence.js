define(['js/Base/Component.js', ''],
function(Component, Number){
    class Sequence extends Component {

        render({sequence}) {

            return `
                ${sequence.map((number) => this.childrens.create(Number, {number})).join('\n')}`;
        }
    }
    return Sequence;
});