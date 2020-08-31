const viewResolver = (name) => require('./docs/' + name).default;

const navs = [{
    title: "Getting Started",
    icon: "home",
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
    icon: "cog",
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
        title: "Button",
        view: viewResolver("components/button"),
        route: "/components/button"
    }, {
        title: "Button Toggle",
        view: viewResolver("components/button-toggle"),
        route: "/components/button-toggle"
    }, {
        title: "Card",
        view: viewResolver("components/card"),
        route: "/components/card"
    }, {
        title: "Divider",
        view: viewResolver("components/divider"),
        route: "/components/divider"
    }, {
        title: "Icon",
        view: viewResolver("components/icon"),
        route: "/components/icon"
    }, {
        title: "Icon Toggle",
        view: viewResolver("components/icon-toggle"),
        route: "/components/icon-toggle"
    }, {
        title: "Image Holder",
        view: viewResolver("components/image-holder"),
        route: "/components/image-holder"
    }, {
        title: "Subheader",
        view: viewResolver("components/subheader"),
        route: "/components/subheader"
    }]
}, {
    title: "Reference",
    icon: "leaf",
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
