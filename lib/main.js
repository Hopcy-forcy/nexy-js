"use strict"
/**
 * param
 */
const style = document.createElement("style");
style.textContent = "@layer flexy {*,::after,::before{margin:0px;padding:0px;box-sizing: border-box;font-family:sans-serif}}";
document.head.appendChild(style);


// const addProps = (element, props) => {
//     for (const prop in props) {
//         element[prop] = props[prop]
//     }
// };

const addProps = (element, props) => {
    if (typeof props === 'object' && props !== null) {
        Object.keys(props).forEach(prop => {
            element[prop] = props[prop];
        });
    }
};


const addStyle = (element, styles) => {
    if (styles) {
        for (const css in styles) {
            element.style[css] = `${styles[css]}`

        }
    }
};
const createElement = (type) => document.createElement(type);
const addChildren = (parent, children) => {
    if (children) {
        const newChildren = [...children];
        for (const element of newChildren) {
            parent.appendChild(element);
        }
    }
};
const addChild = (parent, child) => {
    if (child) {
        parent.appendChild(child);
    }
};

const TYPE_BUTTON = {
    link: "a",
    button: "button",
    submit: "submit",
    reset: "reset",
    menu: "menu",
};
const TYPE_MEDIA = {
    image: "img",
    audio: "audio",
    video: "video",
    frame: "iframe",
    object: "object",
    embed: "embed",
};
const TYPE_TEXT = {
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    h4: 'h4',
    h5: 'h5',
    h6: 'h6',
    p: 'p',
    b: 'b',
    i: 'i',
    em: 'em',
    label: 'label',
};
const TYPE_CONTAINER = {
    section: "section",
    aside: "aside",
    detail: "detail",
    select: "select",
    form: "form",
    nav: "nav",
    ul: "ul",
    ol: "ol",
    article: "article",
};
const TYPE_INPUT = {
    color: "color",
    date: "date",
    checkbox: "checkbox",
    radio: "radio",
    number: "number",
    multiline: "textarea",
};

const Root = ({ style, ref, header, body, footer, ...args }) => {
    const app = ref ? document.getElementById(ref) : document.body;
    const props = { ...args }
    if (header) {
        app.appendChild(header)
    }
    if (body) {
        app.appendChild(body)
    }
    if (footer) {
        app.appendChild(footer)
    }
    addProps(app, props);
    addStyle(app, style);
    app.classList.add("FlexyApp");
};

const Header = ({ style, child, children, ...args }) => {
    const props = { ...args }
    const header = createElement('header');
    if (child) { addChild(header, child) }
    if (child && children) alert("erreur")
    addChildren(header, children)
    addProps(header, props);
    addStyle(header, style);
    header.classList.add("Header");
    return header;
};

const Main = ({ style, children, ...args }) => {
    const main = createElement('main');
    const props = { ...args }
    addStyle(main, style);
    addProps(main, props);
    addChildren(main, children);
    main.classList.add("Main");
    return main;
}
const Text = ({ style, type, text, children, ...args }) => {
    let font;
    let props = { ...args }
    if (type in TYPE_TEXT) {
        font = createElement(TYPE_TEXT[type]);
    } else {
        font = createElement('span');
    }

    font.textContent = text;
    addChildren(font, children);
    addProps(font, props);
    addStyle(font, style);

    font.classList.add("Text");

    return font;
}
const Input = ({ style, type, ...args }) => {
    let input = createElement('input');
    let props = { ...args }
    if (type in TYPE_INPUT) {
        switch (type) {
            case "multiline":
                input = createElement(TYPE_INPUT[type]);
                break;
            default:
                input.type = type
                break;
        }
    } else {
        input.type = "text";
    }

    addProps(input, props);
    addStyle(input, style);
    input.classList.add("Input");

    return input;
}

const Button = ({ type, style, text, children, ...args }) => {
    let tagName;
    const props = { ...args }
    if (type in TYPE_BUTTON) {
        switch (type) {
            case "link":
                tagName = createElement(TYPE_BUTTON[type]);
                break;

            default:
                tagName = createElement('button');
                tagName.type = TYPE_BUTTON[type];
                break;
        }
    } else {
        tagName = createElement("button");
        tagName.type = "button";
    }
    tagName.textContent = text;
    tagName.style.cursor = "pointer";
    addChildren(tagName, children);
    addProps(tagName, props);
    addStyle(tagName, style);
    console.dir(tagName);
    tagName.classList.add("Button");
    return tagName;
};
const Container = ({ type, style, children, ...args }) => {
    let tagName;
    const props = { ...args }
    if (type in TYPE_CONTAINER) {
        tagName = createElement(TYPE_CONTAINER[type]);
    } else {
        tagName = createElement('div');
    }
    addChildren(tagName, children);
    addProps(tagName, props);
    addStyle(tagName, style);
    tagName.classList.add('Container');
    return tagName;
};
const Dialog = ({ children, style, ...args }) => { };
const Media = ({ style, type, ...args }) => {

    const props = { ...args }
    let media, tagName;
    if (type in TYPE_MEDIA) {
        tagName = TYPE_MEDIA[type];
    }
    else {
        tagName = "img";
    }
    media = createElement(tagName);
    addStyle(media, style);
    addProps(media, props);
    media.classList.add("Media");
    return media;
}



const find = (e) => document.querySelector(e);
const fintAll = (e) => document.querySelectorAll(e);
export {
    Root,
    Header,
    Main,
    Text,
    Input,
    Button,
    Dialog,
    Container,
    Media,
    //
    find,
    fintAll
}
