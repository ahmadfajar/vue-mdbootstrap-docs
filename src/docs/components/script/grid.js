import { BsStore } from "vue-mdbootstrap";

export default {
    data: () => ({
        pagination: {
            messages: {
                display: 'Displaying: {0}-{1} of {2} items',
            },
            pageSize: 5,
            paging: [5, 10, 15, 25, [-1, 'All']]
        },
        source0: new BsStore({
            idProperty: 'name',
            dataProperty: 'data',
            totalProperty: 'total',
            pageSize: 10,
            remoteFilter: false,
            remotePaging: false,
            remoteSort: false,
            sorts: [{ property: 'name', direction: 'asc' }],
            restProxy: {
                browse: './data/deserts.json'
            }
        }),
        source1: new BsStore({
            idProperty: 'name',
            dataProperty: 'data',
            totalProperty: 'total',
            remoteFilter: false,
            remotePaging: false,
            remoteSort: false,
            sorts: [{ property: 'name', direction: 'asc' }],
            restProxy: {
                browse: './data/deserts.json'
            }
        }),
        source2: new BsStore({
            idProperty: 'name',
            dataProperty: 'data',
            totalProperty: 'total',
            pageSize: 10,
            remoteFilter: false,
            remotePaging: false,
            remoteSort: false,
            sorts: [{ property: 'name', direction: 'asc' }],
            restProxy: {
                browse: './data/deserts.json'
            }
        }),
        source3: new BsStore({
            idProperty: 'name',
            dataProperty: 'data',
            totalProperty: 'total',
            pageSize: 10,
            remoteFilter: false,
            remotePaging: false,
            remoteSort: false,
            sorts: [{ property: 'name', direction: 'asc' }],
            restProxy: {
                browse: './data/deserts.json'
            }
        }),
        source4: new BsStore({
            idProperty: 'name',
            dataProperty: 'data',
            totalProperty: 'total',
            pageSize: 10,
            remoteFilter: false,
            remotePaging: false,
            remoteSort: false,
            sorts: [{ property: 'name', direction: 'asc' }],
            restProxy: {
                browse: './data/deserts.json'
            }
        }),
        source5: new BsStore({
            idProperty: 'name',
            dataProperty: 'data',
            totalProperty: 'total',
            pageSize: 10,
            remoteFilter: false,
            remotePaging: false,
            remoteSort: false,
            sorts: [{ property: 'name', direction: 'asc' }],
            restProxy: {
                browse: './data/deserts.json'
            }
        }),
        stateSources0: new BsStore({
            idProperty: 'value',
            dataProperty: 'data',
            totalProperty: 'total',
            pageSize: 10,
            remoteFilter: false,
            remotePaging: false,
            remoteSort: false,
            sorts: [{property: 'text', direction: 'asc'}],
            restProxy: {
                browse: './data/states.json'
            }
        }),
        stateSources1: new BsStore({
            idProperty: 'value',
            dataProperty: 'data',
            totalProperty: 'total',
            pageSize: 10,
            remoteFilter: false,
            remotePaging: false,
            remoteSort: false,
            sorts: [{property: 'text', direction: 'asc'}],
            restProxy: {
                browse: './data/states.json'
            }
        }),
    }),
    beforeDestroy() {
        this.source0.destroy();
        this.source1.destroy();
        this.source2.destroy();
        this.source3.destroy();
        this.source4.destroy();
        this.source5.destroy();
        this.stateSources0.destroy();
        this.stateSources1.destroy();
        this.source0 = null;
        this.source1 = null;
        this.source2 = null;
        this.source3 = null;
        this.source4 = null;
        this.source5 = null;
        this.stateSources0 = null;
        this.stateSources1 = null;
    },
    methods: {
        btnClick(item, title) {
            this.$notification.info('Current item: ' + item.name, title);
        }
    }
}
