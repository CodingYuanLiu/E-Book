export default {
    name: 'mytest',
    data() {
        return {
            book_info:[
            {
                name: '深入理解计算机基础',
                author:'作者：Bryant,Hallaron',
                remain:'库存：10 ISBN编号：000',
                price:'128￥'
            }
            ]
        }
    },
    props:['info'],
    mounted() {},
    computed: {},
    methods: {
    }
}