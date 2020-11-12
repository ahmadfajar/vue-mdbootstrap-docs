const viewResolver = (name) => require('./docs/' + name).default;

const navs = [{
    title: "Getting Started",
    icon: "bs-apps",
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
    icon: "bs-folder",
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
        title: "Data Grid",
        children: [{
            title: "Grid",
            view: viewResolver("components/grid"),
            route: "/components/grid"
        }, {
            title: "TreeGrid",
            // view: viewResolver("components/treegrid"),
            route: "/components/treegrid"
        }]
    }, {
        title: "DateTime Picker",
        view: viewResolver("components/datetime-picker"),
        route: "/components/datetime-picker"
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
        title: "Input Controls",
        children: [{
            title: "Checkbox",
            view: viewResolver("components/checkbox"),
            route: "/components/input/checkbox"
        }, {
            title: "Combobox",
            view: viewResolver("components/combobox"),
            route: "/components/input/combobox"
        }, {
            title: "Radio",
            view: viewResolver("components/radio"),
            route: "/components/input/radio"
        }, {
            title: "Switch",
            view: viewResolver("components/switch"),
            route: "/components/input/switch"
        }, {
            title: "Text Area",
            view: viewResolver("components/text-area"),
            route: "/components/input/text-area"
        }, {
            title: "Text Field",
            view: viewResolver("components/text-field"),
            route: "/components/input/text-field"
        }, {
            title: "DateTime Field",
            view: viewResolver("components/datetime-field"),
            route: "/components/input/datetime-field"
        }, {
            title: "Number Field",
            // view: viewResolver("components/image-holder"),
            route: "/components/input/number-field"
        }, {
            title: "Search Field",
            // view: viewResolver("components/image-holder"),
            route: "/components/input/search-field"
        }, {
            title: "Toggle Field",
            // view: viewResolver("components/image-holder"),
            route: "/components/input/toggle-field"
        // }, {
        //     title: "Field Test",
        //     view: viewResolver("components/text-field-test"),
        //     route: "/components/input/field-test"
        }]
    }, {
        title: "Lightbox",
        // view: viewResolver("components/lightbox"),
        route: "/components/lightbox"
    }, {
        title: "Lists",
        children: [{
            title: "List Tile",
            view: viewResolver("components/list-tile"),
            route: "/components/lists/tile"
        }, {
            title: "Navigation",
            view: viewResolver("components/list-navigation"),
            route: "/components/lists/navigation"
        }]
    }, {
        title: "Modal",
        // view: viewResolver("components/modal"),
        route: "/components/modal"
    }, {
        title: "Menu",
        view: viewResolver("components/menu"),
        route: "/components/menu"
    }, {
        title: "Progress Control",
        view: viewResolver("components/progress"),
        route: "/components/progress-control"
    }, {
        title: "Subheader",
        view: viewResolver("components/subheader"),
        route: "/components/subheader"
    }, {
        title: "Tabs",
        // view: viewResolver("components/tabs"),
        route: "/components/tabs"
    }, {
        title: "Tooltip",
        view: viewResolver("components/tooltip"),
        route: "/components/tooltip"
    }]
}, {
    title: "Reference",
    icon: "leaf",
    children: [{
        title: "Color Variants",
        view: viewResolver("reference/colors"),
        route: "/reference/colors"
    }, {
        title: "Notification",
        // view: viewResolver("components/notification"),
        route: "/components/notification"
    }, {
        title: "Shadows",
        view: viewResolver("reference/shadows"),
        route: "/reference/shadows"
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

export default navs;
