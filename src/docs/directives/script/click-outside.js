export default {
    data: () => ({
        active: false,
    }),
    methods: {
        onClickOutside() {
            this.active = false;
        }
    }
}
