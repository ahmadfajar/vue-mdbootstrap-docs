export default {
    data: () => ({
        chats1: [
            {active: true, fullname: 'Jason Oner', avatar: 'img/1.jpg'},
            {active: true, fullname: 'Ranee Carlson', avatar: 'img/2.jpg'},
            {active: false, fullname: 'Cindy Baker', avatar: 'img/3.jpg'},
            {active: false, fullname: 'Ali Connors', avatar: 'img/4.jpg'}
        ],
        chats2: [
            {fullname: 'Travis Howard', avatar: 'img/5.jpg'}
        ],
        cardItems: [
            {
                avatar: 'img/1.jpg',
                title: 'Brunch this weekend?',
                subtitle: "<b>Ali Connors</b> &#8212; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?"
            },
            {
                avatar: 'img/2.jpg',
                title: 'Summer BBQ',
                subtitle: "<b>to Alex, Scott, Jennifer</b> &mdash; Wish I could come, but I'm out of town this weekend."
            },
            {
                avatar: 'img/3.jpg',
                title: 'Oui oui',
                subtitle: "<b>Sandra Adams</b> &mdash; Do you have Paris recommendations? Have you ever been?"
            },
            {
                avatar: 'img/4.jpg',
                title: 'Birthday gift',
                subtitle: "<b>Trevor Hansen</b> &mdash; Have any ideas about what we should get Heidi for her birthday?"
            }
        ],
        recipes: [{
            url: "img/crunchy-croissants.jpg",
            title: "Crunchy Croissants",
            desc: "Buttery, flaky pastry named for its crescent shaped."
        }, {
            url: "img/grilled-eggplant.jpg",
            title: "Grilled Eggplant",
            desc: "Tender with a rich, complex flavor when cooked."
        }, {
            url: "img/tangerine-salad.jpg",
            title: "Tangerine Salad",
            desc: "Peak tangerine season lasts from autumn to spring."
        }, {
            url: "img/pomegranate-juice.jpg",
            title: "Pomegranate Juice",
            desc: "A superfood for good skin, hair and health."
        }, {
            url: "img/simple-salsa.jpg",
            title: "Chili Salsa",
            desc: "Heat up any taco night with minimal preparation."
        }, {
            url: "img/flour-scratch.jpg",
            title: "Flour from scratch",
            desc: "Grind grains, nuts, or beans in your coffee grinder."
        }],
        enableFiltering: false,
        enablePassword: false,
        enableNotification: false,
        enableSound: false,
        enableWidget: false,
    }),
    methods: {
        updateEnableNotification() {
            this.enableNotification = !this.enableNotification;
        },
        updateEnableSound() {
            this.enableSound = !this.enableSound;
        },
        updateEnableWidget() {
            this.enableWidget = !this.enableWidget;
        },
    },
}
