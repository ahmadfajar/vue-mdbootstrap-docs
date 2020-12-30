import { BsArrayStore, BsStore } from "vue-mdbootstrap";

export default {
    data: () => ({
        employee0: null,
        employee1: 2,
        employee2: 3,
        employee3: null,
        employee4: null,
        employee5: null,
        employee6: null,
        employee7: null,
        employee8: null,
        states0: [],
        states1: [],
        caState0: null,
        caState1: null,
        caState2: null,
        caState3: null,
        caState4: null,
        caState5: null,
        caState6: null,
        caState7: null,
        caState8: null,
        caState9: null,
        caState10: null,
        caState11: null,
        caState12: null,
        caState13: null,
        selectedProduct: null,
        product0: null,
        product1: null,
        product2: null,
        product3: null,
        product4: null,
        product5: null,
        product6: 3,
        product7: 43,
        peopleSrc: {
            proxy: new BsArrayStore([
                { id: 1, name: 'Sandra Adams', avatar: 'img/1.jpg' },
                { id: 2, name: 'Ali Connors', avatar: 'img/2.jpg' },
                { id: 3, name: 'Trevor Hansen', avatar: 'img/3.jpg' },
                { id: 4, name: 'Tucker Smith', avatar: 'img/4.jpg' },
                { id: 5, name: 'Britta Holt', avatar: 'img/5.jpg' },
                { id: 6, name: 'Jane Smith', avatar: 'img/3.jpg' },
                { id: 7, name: 'John Smith', avatar: 'img/2.jpg' },
                { id: 8, name: 'Sandra Williams', avatar: 'img/4.jpg' }
            ], {
                idProperty: 'id',
            }),
            schema: { displayField: 'name', valueField: 'id', imageField: 'avatar' }
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
            schema: { displayField: 'ProductName', valueField: 'ProductID' }
        },
        statesUS: {
            proxy: new BsStore({
                idProperty: 'value',
                dataProperty: 'data',
                totalProperty: 'total',
                remoteSort: false,
                remoteFilter: false,
                filters: [{ property: 'country', value: 'US', operator: 'eq' }],
                restProxy: {
                    browse: './data/states.json'
                }
            })
        },
        statesCA: {
            proxy: new BsStore({
                idProperty: 'value',
                dataProperty: 'data',
                totalProperty: 'total',
                remoteSort: false,
                remoteFilter: false,
                filters: [{ property: 'country', value: 'CA', operator: 'eq' }],
                restProxy: {
                    browse: './data/states.json'
                }
            })
        },
    }),
    beforeDestroy() {
        this.peopleSrc.proxy.destroy();
        this.products.proxy.destroy();
        this.statesUS.proxy.destroy();
        this.statesCA.proxy.destroy();
        this.peopleSrc = null;
        this.products = null;
        this.statesUS = null;
        this.statesCA = null;
    }
}
