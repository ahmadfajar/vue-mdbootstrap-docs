export default {
    data() {
        return {
            open: false,
            trigger: null,
            enableMessage: false,
            enableHints: true,
        }
    },
    mounted() {
        this.trigger = this.$refs.activator.$el;
    }
}
