define(['js/Base/Component.js'], 
function(Component){
    class Header extends Component {
        render({title}) {
            return `
            <header>
                <div class="header">
                    <div class="header_title">${title}</div>
                </div>
            </header>`;
        }
    }
    return Header;
});