export default {
    data: () => ({
        offsetTop: 0,
    }),
    methods: {
        onScroll(el, e) {
            this.offsetTop = e.target.scrollTop;
        }
    }
}
