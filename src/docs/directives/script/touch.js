export default {
    data: () => ({
        swipeDirection: 'None',
    }),
    methods: {
        swipe(dir) {
            this.swipeDirection = dir;
        }
    }
}
