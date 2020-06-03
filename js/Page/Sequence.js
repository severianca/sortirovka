define(['js/Base/Component.js', 'js/Page/Number.js'],
function(Component, Number){
    class Sequence extends Component {

        render({condition}) {

            let sequence = new Array(10);
            for (let i=0; i<10; i++){
                sequence[i]=0;
            }
            return `
                ${sequence.map((number) => this.childrens.create(Number, {number, condition})).join('\n')}`;
        }
    }
    return Sequence;
});