class View {
    constructor() {
        this._root = document.getElementById('root');

        this.init();
    }

    init = () => {
        const wrapper = this.createDiv({class: 'wrapper'});
        const wrapperUp = this.createDiv({class: 'wrapper_up'});
        const wrapperDown = this.createDiv({class: 'wrapper_down'});
        const title = this.createDiv({class: 'wrapper_up__title'});
        const wrapperUpMenu = this.createDiv({class: 'up_wrapper'});
        const menuInput = this.createInput({class: 'up_wrapper__input', placeholder: 'Input text...'});
        const menuButton = this.createButton({class: 'up_wrapper__button', text: 'Add'});
        //const wrapperDownBlocks = 

        wrapperUpMenu.append(menuButton);
        wrapperUpMenu.append(menuInput);
        wrapperUp.append(wrapperUpMenu);
        wrapperUp.append(title);
        wrapper.append(wrapperDown);
        wrapper.append(wrapperUp);
        this._root.append(wrapper);
    }

    createDiv = attribute => {
        const element = document.createElement('div');
        element.classList.add(attribute.class);

        return element;
    }

    createInput = attribute => {
        const input = document.createElement('input');
        input.setAttribute('type', 'text');
        attribute.id && (input.id = attribute.id);
        attribute.class && (input.classList.add(attribute.class));
        attribute.placeholder && (input.setAttribute('placeholder', attribute.placeholder));

        return input;
    }

    createButton = attribute => {
        const button = document.createElement('button');
        button.setAttribute('type', 'submit');
        attribute.id && (button.id = attribute.id);
        attribute.class && (button.classList.add(attribute.class));
        attribute.text && (button.innerText = attribute.text);

        return button;
    }
}

export default View;