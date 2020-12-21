export default {
    methods: {
        showDefaultNotification() {
            this.$notification.add({message: 'I am notification message.'});
        },
        showSuccessNotification() {
            // this.$notification.success({message: 'I am notification message.', title: 'Success', progressBar: true, progressBarValue: null});
            this.$notification.success('I am success notification message.', 'Success');
        },
        showInfoNotification() {
            // this.$notification.info({message: 'I am notification message.', title: 'Info', progressBar: true, progressBarValue: null});
            this.$notification.info('I am info notification message.', 'Info');
        },
        showWarningNotification() {
            // this.$notification.warning({message: 'I am notification message.', title: 'Warning', progressBar: true, progressBarValue: null});
            this.$notification.warning('I am warning notification message.', 'Warning');
        },
        showErrorNotification() {
            // this.$notification.error({message: 'I am notification message.', title: 'Error', progressBar: true, progressBarValue: null});
            this.$notification.error('I am error notification message.', 'Error');
        },
        showCustomNotification(position) {
            let options = {
                position: position,
                message: 'I am notification message...'
            };
            this.$notification.info(options, 'Info');
        },
        showDefaultNotificationProgress(title) {
            let options = {
                message: 'I am notification message...',
                title: title,
                progressBar: true,
                progressBarValue: null
            };
            this.$notification.add(options);
        },
        showNotificationProgress(variant, title) {
            let options = {
                message: 'I am notification message...',
                progressBar: true,
                progressBarValue: null
            };
            this.$notification[variant](options, title);
        }
    }
}
