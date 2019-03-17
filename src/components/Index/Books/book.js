export default {
    name: 'mytest',
    data() {
        return {
            display: true
        }
    },
    mounted() {},
    computed: {},
    methods: {
        changecolor: function(){
            this.display=!this.display;
        }
    }
}