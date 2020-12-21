export default {
    data: () => ({
        windowSize: { width: 0, height: 0 },
    }),
    mounted() {
        this.onResize();
    },
    methods: {
        onResize() {
            this.windowSize = { width: window.innerWidth, height: window.innerHeight };
        }
    }
}
