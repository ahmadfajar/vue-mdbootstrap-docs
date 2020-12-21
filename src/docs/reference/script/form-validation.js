import { validationMixin } from "vuelidate";
import { required, email, minLength } from "vuelidate/lib/validators";
import { BsArrayStore, BsModel } from "vue-mdbootstrap";

const userValidator = {
    fullName: { required, minLength: minLength(5) },
    email: { required, email },
    education: { required },
    address: { required },
    country: { required },
}

export default {
    mixins: [validationMixin],
    data: () => ({
        user: new BsModel({
            schema: {
                uid: null,
                fullName: null,
                email: null,
                education: null,
                address: null,
                country: null
            },
            proxy: {
                save: { url: './api/users', method: 'post' },
                update: { url: './api/users', method: 'put' },
                delete: { url: './api/users', method: 'delete' },
                fetch: './api/users/{id}',
            },
        }, null, 'uid'),
        educations: [
            { value: 'High School', label: 'High School' },
            { value: 'University', label: 'University' },
            { value: 'S2', label: 'Master Degree' },
        ],
        countrySrc: {
            proxy: new BsArrayStore([
                { id: 'US', name: 'USA' },
                { id: 'CA', name: 'CANADA' },
            ], {
                idProperty: 'id'
            }),
            schema: { displayField: 'name', valueField: 'id' }
        },
        requiredErrorMsg: 'This field is required',
        emailErrorMsg: 'Please enter valid email address',
        minLengthErrorMsg: 'This field must at least have 5 characters',
    }),
    validations: {
        user: userValidator
    },
    beforeDestroy() {
        this.countrySrc.proxy.destroy();
        this.countrySrc.proxy = null;

        this.user.destroy();
        this.user = null;

        this.educations = null;
    },
    computed: {
        emailValidator() {
            return {
                hasError: this.$v.user.email.$error,
                messages: { required: this.requiredErrorMsg, email: this.emailErrorMsg },
                dirty: this.$v.user.email.$dirty,
                validators: { required: this.$v.user.email.required, email: this.$v.user.email.email }
            }
        },
        fullNameValidator() {
            return {
                hasError: this.$v.user.fullName.$error,
                messages: { required: this.requiredErrorMsg, minLength: this.minLengthErrorMsg },
                dirty: this.$v.user.fullName.$dirty,
                validators: {
                    required: this.$v.user.fullName.required,
                    minLength: this.$v.user.fullName.minLength
                }
            }
        },
        educationValidator() {
            return {
                hasError: this.$v.user.education.$error,
                messages: { required: this.requiredErrorMsg },
                dirty: this.$v.user.education.$dirty,
                validators: { required: this.$v.user.education.required }
            }
        },
        addressValidator() {
            return {
                hasError: this.$v.user.address.$error,
                messages: { required: this.requiredErrorMsg },
                dirty: this.$v.user.address.$dirty,
                validators: { required: this.$v.user.address.required }
            }
        },
        countryValidator() {
            return {
                hasError: this.$v.user.country.$error,
                messages: { required: this.requiredErrorMsg },
                dirty: this.$v.user.country.$dirty,
                validators: { required: this.$v.user.country.required }
            }
        },
    },
    methods: {
        doReset() {
            this.$refs.myform.reset();
            this.user.reset();
            this.$v.$reset();
        },
        doSave() {
            this.$v.$touch();

            if (!this.$v.$error) {
                // Use code below, if you have fully working Backend API
                // this.user.save();

                // Dummy procedure
                setTimeout(this.showNotification, 1000);
            }
        },
        showNotification() {
            this.$notification.success('Record has been saved.');
        }
    }
}
