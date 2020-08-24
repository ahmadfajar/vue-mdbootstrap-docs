const viewResolver = (name) => require('./docs/' + name).default;

const navs = [{
    title: "Getting Started",
    children: [{
        title: "About",
        view: viewResolver("about"),
        route: "/about",
    }, {
        title: "Usage",
        view: viewResolver("usage"),
        route: "/usage"
    }]
}, {
    title: "Components",
    children: [{
        title: "Alert",
        view: viewResolver("components/alert"),
        route: "/components/alert"
    }, {
        title: "Avatar",
        view: viewResolver("components/avatar"),
        route: "/components/avatar"
    }, {
        title: "Badge",
        view: viewResolver("components/badge"),
        route: "/components/badge"
    }, {
        title: "Icon",
        view: viewResolver("components/icon"),
        route: "/components/icon"
    }]
}, {
    title: "Reference",
    children: [{
        title: "Color Variants",
        view: viewResolver("reference/colors"),
        route: "/reference/colors"
    }, {
        title: "Shadows",
        view: viewResolver("reference/shadows"),
        route: "/reference/shadows"
    }]
}];

export default navs;
