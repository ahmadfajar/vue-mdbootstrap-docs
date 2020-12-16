const viewResolver = (name) => require('./docs/' + name).default;

export const menuNavs = [{
    title: "Getting Started",
    icon: "bs-apps",
    children: [{
        title: "About",
        route: "/about",
        view: viewResolver("about"),
    }, {
        title: "Usage",
        route: "/usage",
        view: viewResolver("usage"),
    }]
}, {
    title: "Components",
    icon: "bs-folder",
    children: [{
        title: "Alert",
        route: "/components/alert",
        view: viewResolver("components/alert"),
    }, {
        title: "Avatar",
        route: "/components/avatar",
        view: viewResolver("components/avatar"),
    }, {
        title: "Badge",
        route: "/components/badge",
        view: viewResolver("components/badge"),
    }, {
        title: "Button",
        route: "/components/button",
        view: viewResolver("components/button"),
    }, {
        title: "Button Toggle",
        route: "/components/button-toggle",
        view: viewResolver("components/button-toggle"),
    }, {
        title: "Card",
        route: "/components/card",
        view: viewResolver("components/card"),
    }, {
        title: "Data Grid",
        children: [{
            title: "Grid",
            route: "/components/grid",
            view: viewResolver("components/grid"),
        }, {
            title: "TreeGrid",
            route: "/components/treegrid",
            // view: viewResolver("components/treegrid"),
        }]
    }, {
        title: "DateTime Picker",
        route: "/components/datetime-picker",
        view: viewResolver("components/datetime-picker"),
    }, {
        title: "Divider",
        route: "/components/divider",
        view: viewResolver("components/divider"),
    }, {
        title: "Icon",
        route: "/components/icon",
        view: viewResolver("components/icon"),
    }, {
        title: "Icon Toggle",
        route: "/components/icon-toggle",
        view: viewResolver("components/icon-toggle"),
    }, {
        title: "Image Holder",
        route: "/components/image-holder",
        view: viewResolver("components/image-holder"),
    }, {
        title: "Input Controls",
        children: [{
            title: "Checkbox",
            route: "/components/input/checkbox",
            view: viewResolver("components/checkbox"),
        }, {
            title: "Combobox",
            route: "/components/input/combobox",
            view: viewResolver("components/combobox"),
        }, {
            title: "Radio",
            route: "/components/input/radio",
            view: viewResolver("components/radio"),
        }, {
            title: "Switch",
            route: "/components/input/switch",
            view: viewResolver("components/switch"),
        }, {
            title: "Text Area",
            route: "/components/input/text-area",
            view: viewResolver("components/text-area"),
        }, {
            title: "Text Field",
            route: "/components/input/text-field",
            view: viewResolver("components/text-field"),
        }, {
            title: "DateTime Field",
            route: "/components/input/datetime-field",
            view: viewResolver("components/datetime-field"),
        }, {
            title: "Number Field",
            route: "/components/input/number-field",
            // view: viewResolver("components/image-holder"),
        }, {
            title: "Search Field",
            route: "/components/input/search-field",
            // view: viewResolver("components/image-holder"),
        }, {
            title: "Toggle Field",
            route: "/components/input/toggle-field",
            // view: viewResolver("components/image-holder"),
        // }, {
        //     title: "Field Test",
        //     route: "/components/input/field-test",
        //     view: viewResolver("components/text-field-test"),
        }]
    }, {
        title: "Lightbox",
        route: "/components/lightbox",
        view: viewResolver("components/lightbox"),
    }, {
        title: "Lists",
        children: [{
            title: "List Tile",
            route: "/components/lists/tile",
            view: viewResolver("components/list-tile"),
        }, {
            title: "Navigation",
            route: "/components/lists/navigation",
            view: viewResolver("components/list-navigation"),
        }]
    }, {
        title: "Modal",
        route: "/components/modal",
        view: viewResolver("components/modal"),
    }, {
        title: "Menu",
        route: "/components/menu",
        view: viewResolver("components/menu"),
    }, {
        title: "Progress Control",
        route: "/components/progress-control",
        view: viewResolver("components/progress"),
    }, {
        title: "Subheader",
        route: "/components/subheader",
        view: viewResolver("components/subheader"),
    }, {
        title: "Tabs",
        route: "/components/tabs",
        view: viewResolver("components/tabs"),
    }, {
        title: "Tooltip",
        route: "/components/tooltip",
        view: viewResolver("components/tooltip"),
    }]
}, {
    title: "Reference",
    icon: "leaf",
    children: [{
        title: "Color Variants",
        route: "/reference/colors",
        view: viewResolver("reference/colors"),
    }, {
        title: "Notification",
        route: "/components/notification",
        // view: viewResolver("components/notification"),
    }, {
        title: "Shadows",
        route: "/reference/shadows",
        view: viewResolver("reference/shadows"),
    }]
// }, {
//     title: "Test 1",
//     route: "/test-1",
//     icon: "bs-outline-info"
// }, {
//     title: "Test 2",
//     route: "/test-2",
//     icon: "bs-outline-info"
}];

export const navs = [{
    path: '/',
    redirect: '/about'
}, {
    path: '/components',
    component: viewResolver('components'),
    meta: {title: 'Components'}
}, {
    path: '/reference',
    component: viewResolver('references')
}];
