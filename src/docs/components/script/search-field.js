import { BsArrayStore } from "vue-mdbootstrap";

export default {
    data: () => ({
        srchvalue0: null,
        srchvalue1: null,
        srchvalue2: null,
        showOptions: false,
        fullname: null,
        bornDate: null,
        dateOperator: 'gt',
        dateOperators: {
            proxy: new BsArrayStore([
                { id: 'gt', name: 'Greater than' },
                { id: 'lt', name: 'Less than' },
            ], {
                idProperty: 'id'
            }),
            schema: { displayField: 'name', valueField: 'id' }
        },
    }),
    methods: {
        doCustomSearch() {
            this.showOptions = false
        },
        onSearch() {
            // do something here...
        },
        updateShowOptions(value) {
            this.showOptions = value;
        }
    }
}
