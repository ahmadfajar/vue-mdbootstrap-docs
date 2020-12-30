export default {
    data() {
        return {
            dismissSecs: 10,
            dismissCountDown: 0,
            showDismissibleAlert: false,
            timerInterval: null,
        }
    },
    computed: {
        percentProgress() {
            return (this.dismissCountDown / this.dismissSecs) * 100;
        }
    },
    watch: {
        dismissCountDown(newValue) {
            if (newValue < 1) {
                clearInterval(this.timerInterval);
            }
        }
    },
    methods: {
        showAlert() {
            this.dismissCountDown = this.dismissSecs;
            this.startTimer();
        },
        startTimer() {
            this.timerInterval = setInterval(() => (this.dismissCountDown -= 1), 1000);
        },
        toggleAlert() {
            this.showDismissibleAlert = !this.showDismissibleAlert;
        }
    }
}
