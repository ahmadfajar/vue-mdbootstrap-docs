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
        title: "Appbar",
        route: "/components/appbar",
        view: viewResolver("components/appbar"),
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
    // }, {
    //     title: "Data Grid",
    //     children: [{
    //         title: "Grid",
    //         route: "/components/grid",
    //         view: viewResolver("components/grid"),
    //     }, {
    //         title: "TreeGrid",
    //         route: "/components/treegrid",
    //         view: viewResolver("components/treegrid"),
    //     }]
    }, {
        title: "DateTime Picker",
        route: "/components/datetime-picker",
        view: viewResolver("components/datetime-picker"),
    }, {
        title: "Divider",
        route: "/components/divider",
        view: viewResolver("components/divider"),
    }, {
        title: "Grid",
        route: "/components/grid",
        view: viewResolver("components/grid"),
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
            title: "Text Field",
            route: "/components/input/text-field",
            view: viewResolver("components/text-field"),
        }, {
            title: "TextArea Field",
            route: "/components/input/text-area",
            view: viewResolver("components/text-area"),
        }, {
            title: "DateTime Field",
            route: "/components/input/datetime-field",
            view: viewResolver("components/datetime-field"),
        // }, {
        //     title: "Number Field",
        //     route: "/components/input/number-field",
        //     view: viewResolver("components/image-holder"),
        }, {
            title: "Search Field",
            route: "/components/input/search-field",
            view: viewResolver("components/search-field"),
        }, {
            title: "Toggle Field",
            route: "/components/input/toggle-field",
            view: viewResolver("components/toggle-field"),
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
        title: "Menu",
        route: "/components/menu",
        view: viewResolver("components/menu"),
    }, {
        title: "Modal",
        route: "/components/modal",
        view: viewResolver("components/modal"),
    }, {
        title: "Popover",
        route: "/components/popover",
        view: viewResolver("components/popover"),
    }, {
        title: "Progress Control",
        children: [{
            title: "Mask Loader",
            route: "/components/progress-control/mask-loader",
            view: viewResolver("components/mask-loader")
        }, {
            title: "Progress",
            route: "/components/progress-control/progress",
            view: viewResolver("components/progress")
        }]
    }, {
        title: "Ripple",
        route: "/components/ripple",
        view: viewResolver("components/ripple"),
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
    title: "Directives",
    icon: "bolt",
    children: [{
        title: "Click Outside",
        route: "/directives/click-outside",
        view: viewResolver("directives/click-outside"),
    }, {
        title: "Resize",
        route: "/directives/resize",
        view: viewResolver("directives/window-resize"),
    }, {
        title: "Scroll",
        route: "/directives/scroll",
        view: viewResolver("directives/scroll"),
    }, {
        title: "Tooltip",
        route: "/directives/tooltip",
        view: viewResolver("directives/tooltip"),
    }, {
        title: "Touch",
        route: "/directives/touch",
        view: viewResolver("directives/touch"),
    }]
}, {
    title: "Reference",
    icon: "leaf",
    children: [{
        title: "Axios Plugin",
        route: "/reference/axios-plugin",
        view: viewResolver("reference/axios-plugin"),
    }, {
        title: "Changelog",
        route: "/reference/changelog",
        view: viewResolver("reference/changelog"),
    }, {
        title: "Color Variants",
        route: "/reference/colors",
        view: viewResolver("reference/colors"),
    }, {
        title: "Data Models",
        children: [{
            title: "BsModel",
            route: "/reference/data-model/bs-model",
            view: viewResolver("reference/bs-model"),
        }, {
            title: "BsStore",
            route: "/reference/data-model/bs-store",
            view: viewResolver("reference/bs-store"),
        }, {
            title: "BsArrayStore",
            route: "/reference/data-model/bs-array-store",
            view: viewResolver("reference/bs-array-store"),
        }]
    }, {
        title: "Form Validation",
        route: "/reference/form-validation",
        view: viewResolver("reference/form-validation"),
    }, {
        title: "Notification",
        route: "/reference/notification",
        view: viewResolver("reference/notification"),
    }, {
        title: "Shadows",
        route: "/reference/shadows",
        view: viewResolver("reference/shadows"),
    }, {
        title: "Transitions",
        route: "/reference/transitions",
        view: viewResolver("reference/transition"),
    }]
}];

export const navs = [{
    path: '/',
    redirect: '/about'
}, {
    path: '/components',
    component: viewResolver('components'),
    meta: {title: 'Components'}
}, {
    path: '/directives',
    component: viewResolver('directives'),
    meta: {title: 'Directives'}
}, {
    path: '/reference',
    component: viewResolver('references'),
    meta: {title: 'Reference'}
}];
