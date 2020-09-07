export default {
    data() {
        return {
            active: false,
            popup1: false,
            popup2: false,
            enableMessage: false,
            enableHints: true,
        }
    },
    methods: {
        onClick() {
            this.active = !this.active;
        }
    },
}
