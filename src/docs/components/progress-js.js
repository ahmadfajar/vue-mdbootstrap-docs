export default {
    data() {
        return {
            amount1: 75,
            amount2: 25,
            buffer: 50,
            linear: 10,
            spinner: 10,
        }
    },
    created() {
        this.timer = setInterval(() => {
            this.linear += 10;
            this.spinner += 10;
            if (this.linear > 100) {
                this.linear = 0;
                this.spinner = 0;
            }
        }, 1000);
    },
    beforeDestroy() {
        if (this.timer) {
            clearInterval(this.timer);
        }
    }
}
