import {BsArrayStore, BsStore} from "vue-mdbootstrap";

export default {
    data: () => ({
        selectedPeople: null,
        employee: null,
        employee1: 2,
        employee2: 3,
        employee3: null,
        selectedProduct: null,
        selectedStates: [],
        peopleSrc: {
            proxy: new BsArrayStore([
                    {id: 1, name: 'Sandra Adams', avatar: 'img/1.jpg'},
                    {id: 2, name: 'Ali Connors', avatar: 'img/2.jpg'},
                    {id: 3, name: 'Trevor Hansen', avatar: 'img/3.jpg'},
                    {id: 4, name: 'Tucker Smith', avatar: 'img/4.jpg'},
                    {id: 5, name: 'Britta Holt', avatar: 'img/5.jpg'},
                    {id: 6, name: 'Jane Smith', avatar: 'img/3.jpg'},
                    {id: 7, name: 'John Smith', avatar: 'img/2.jpg'},
                    {id: 8, name: 'Sandra Williams', avatar: 'img/4.jpg'}
                ], {
                    idProperty: 'id',
                }
            ),
            schema: {displayField: 'name', valueField: 'id', imageField: 'avatar'}
        },
        products: {
            proxy: new BsStore({
                idProperty: 'ProductID',
                dataProperty: 'data',
                totalProperty: 'total',
                remoteSort: false,
                restProxy: {
                    browse: './data/product.json'
                }
            }),
            schema: {displayField: 'ProductName', valueField: 'ProductID'}
        },
        states: {
            proxy: new BsStore({
                idProperty: 'value',
                dataProperty: 'data',
                totalProperty: 'total',
                remoteSort: false,
                remoteFilter: false,
                filters: [{property: 'country', value: 'US', operator: 'eq'}],
                restProxy: {
                    browse: './data/states.json'
                }
            })
        },
    }),
    beforeDestroy() {
        this.peopleSrc.proxy.destroy();
        this.products.proxy.destroy();
        this.states.proxy.destroy();
        this.peopleSrc = null;
        this.products = null;
        this.states = null;
    }
}
