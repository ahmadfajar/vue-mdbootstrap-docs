export default {
    data() {
        return {
            passwordToggled: false
        }
    },
    computed: {
        inputType() {
            return this.passwordToggled ? 'text' : 'password';
        }
    },
}
