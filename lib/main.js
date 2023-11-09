"use strict"

const style = document.createElement("style");
style.textContent = "@layer flexy {*,::after,::before{margin:0px;padding:0px;box-sizing: border-box;font-family:sans-serif}}";
document.head.appendChild(style);
document.querySelector("html").setAttribute('use','nexy')


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
    source: "source"
};
const TYPE_TEXT = {
    b: 'b',
    bold: 'b',
    bdi: 'bdi',
    bdo: 'bdo',
    cite: 'cite',
    code: 'code',
    data: 'data',
    dd: 'dd',
    dt: 'dt',
    del: 'del',
    dfn: 'dfn',
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    h4: 'h4',
    h5: 'h5',
    h6: 'h6',
    p: 'p',
    b: 'b',
    i: 'i',
    ins: 'ins',
    em: 'em',
    label: 'label',
    legend: 'legend',
    kbd: 'kbd',
    option:'option',
    pre:"pre",
    li:"li",
    sup:"sup",
    sub:"sub",
    figcaption:"figcaption",
    summary:"summary",
    mark:"mark",
    q:"q",
    rt:"rt",
    rp:"rp",
    s:"s",
    samp:"samp",
    small:"small",
    th:"th",
    td:"td",
    time:"time",
    u:"u",
    var:"var",
    wbr:"wbr",

};
const TYPE_CONTAINER = {
    area:"area",
    abbr:"abbr",
    address:"address",
    blockquote:"blockquote",
    caption:"caption",
    datalist:"datalist",
    details: "details",
    dl:"dl",
    hgroup:"hgroup",
    section: "section",
    aside: "aside",
    select: "select",
    form: "form",
    nav: "nav",
    ul: "ul",
    ol: "ol",
    menu: "menu",
    article: "article",
    template: "template",
    figure: "figure",
    fieldset: "fieldset",
    audiogroup:"audio",
    footer:"footer",
    header:"header",
    colgroup :"colgroup",
    col: "col",
    map: "map",
    optgroup: "optgroup",
    picture: "pictue",
    ruby: "ruby",
    search: "search",
};
const TYPE_INPUT = {
    color: "color",
    url: "url",
    range: "range",
    week: "week",
    week: "week",
    file: "file",
    image: "image",
    password: "password",
    email: "email",
    tel: "tel",
    submit: "submit",
    reset: "reset",
    date: "date",
    datetime:"date-time",
    time: "time",
    week: "week",
    month: "month",
    checkbox: "checkbox",
    radio: "radio",
    number: "number",
    multiline: "textarea",
    hidden: "hidden",
    search: "search",
};

/**
 * The Root Component is by default the body element in an HTML page.
 * If you want to change this, use the `ref` prop to specify the desired element.
 *
 * @param {string} ref The ID of the element to use as the root element.
 * @param {object} style The CSS style object to apply to the root element.
 * @param {object} [top] The top child element to append to the root element.
 * @param {object} [body] The main child element to append to the root element.
 * @param {object} [bottom] The bottom child element to append to the root element.
 * @param {...object} [rest] Any additional props to pass to the root element.
 * 
 * Version Française
 * 
 * Le composant Root est par défaut l'élément body d'une page HTML.
 * Si vous souhaitez modifier cet élément, utilisez le prop `ref` pour spécifier l'élément souhaité.
 *
 * @param {string} ref L'ID de l'élément à utiliser comme élément racine.
 * @param {object} style L'objet de style CSS à appliquer à l'élément racine.
 * @param {object} [top] L'élément enfant supérieur à ajouter à l'élément racine.
 * @param {object} [body] L'élément enfant principal à ajouter à l'élément racine.
 * @param {object} [bottom] L'élément enfant inférieur à ajouter à l'élément racine.
 *
 * Tous les attributs `HTML` que peuvent prendre l'élément ciblé seront prise en charge supplémentaires à transmettre à l'élément racine.
 * 
 * @author Hopcy Forcy 
 * @copyright Luilka
 */


const Root = ({ style, ref, top, body, bottom, ...rest }) => {
    const app = ref ? document.getElementById(ref) : document.body;
    const props = { ...rest }
    if (top) {
        app.appendChild(top)
    }
    if (body) {
        app.appendChild(body)
    }
    if (bottom) {
        app.appendChild(bottom)
    }
    addProps(app, props);
    addStyle(app, style);
    app.classList.add("Root");
};

const Top = ({ style, child, children, ...rest }) => {
    const props = { ...rest }
    const header = createElement('header');
    if (child) { addChild(header, child) }
    if (child && children) alert("erreur")
    addChildren(header, children)
    addProps(header, props);
    addStyle(header, style);
    header.classList.add("Header");
    return header;
};

const Main = ({ style, children, ...rest }) => {
    const main = createElement('main');
    const props = { ...rest }
    addStyle(main, style);
    addProps(main, props);
    addChildren(main, children);
    main.classList.add("Main");
    return main;
}
const Text = ({ style, type, text, children, ...rest }) => {
    let font;
    let props = { ...rest }
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
const Input = ({ style, type, ...rest }) => {
    let input = createElement('input');
    let props = { ...rest }
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

const Button = ({ type, style, text, children, ...rest }) => {
    let tagName;
    const props = { ...rest }
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
const Container = ({ type, style, children, ...rest }) => {
    let tagName;
    const props = { ...rest }
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
const Media = ({ style, type, ...rest }) => {

    const props = { ...rest }
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

const Head = ({title,meta : [],link,lang/* <html lang="fr">*/}) => {};
const Canvas = ({}) => {};
const Table = ({top,body,bottom}) => {};
const Row = ({}) => {};
const Column = ({}) => {};
const Bottom = ({}) => {{}};
const Dialog = ({ children, style, ...rest }) => { };

const TYPE_OUTPUT = {
    meter : "meter",
    progress : "progress",
}

const Output = ({}) => {};

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
