new Vue({
    el: '#app',
    data: {
        quotes,
        currentQuote: quotes[0]
    },
    methods: {
        newQuote: function() {
            const num = Math.floor(Math.random() * quotes.length)
            this.currentQuote = quotes[num]
        }
    }
});