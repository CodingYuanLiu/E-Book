import { mapState } from 'vuex';
export default {
    data() {
        return {
            salestatistic: [],
            Orders: null,
            timerange: ['', ''],
            books: null
        }
    },
    computed: {
        ...mapState({
            userid: state => state.user.userid
        }),
        filterdata: function () {
            let data = [];
            let salesnum = [];
            if (this.books != null && this.Orders != null) {
                for (var i = 0; i < this.books.length; i++) {

                    salesnum.push(0);
                    for (var j = 0; j < this.Orders.length; j++) {
                        if (this.timerange[0] == '' && this.timerange[1] == '') {
                            if (this.books[i].bnum == this.Orders[j].book.bnum) {
                                salesnum[i] += this.Orders[j].num;
                            }
                        }
                        else {
                            if (this.books[i].bnum == this.Orders[j].book.bnum
                                && this.Orders[j].order.time < this.timerange[1] && this.Orders[j].order.time > this.timerange[0]) {
                                salesnum[i] += this.Orders[j].num;
                            }
                        }

                    }
                    data.push({
                        name: this.books[i].name,
                        author: this.books[i].author,
                        bnum: this.books[i].bnum,
                        pic: this.books[i].pic,
                        totalnum: salesnum[i],
                    })
                }
            }

            return data;

        }
    },
    created: function () {
        this.$http.post('http://localhost:8080/orders', {
            userid: this.userid
        }).then((res) => {
            this.Orders = res.body;
        });
        this.$http.post('http://localhost:8080/scanning', {
        }).then((res) => {
            this.books = res.body;
        });

        //return salestatistic;
    }

}