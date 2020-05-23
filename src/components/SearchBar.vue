<template>
    <div class="searchbar">
        <div class="field has-addons"  v-if="!isSearching">
            <div class="control is-expanded">
                <input 
                    class="input has-text-black" 
                    id="query-input" type="text" 
                    placeholder="Search for Kanjis using Writing, Onyomi, Kunyomi, Meaning or Han-Viet"
                    @input="handleInput($event.target.value)"
                    @keyup.enter="lookup()"
                >
            </div>
            <div class="control">
                <a
                    class="button is-info" @click="lookup()">
                    Lookup
                </a>


            </div>

        </div>
        <progress v-else class="progress is-large is-info" max="100">60%</progress>

    </div>
</template>



<script>

    export default {
        name: 'SearchBar',
        components: {
        },
        props: {},
        data() {
            return {
                query: {
                    type: String,
                    default: ''
                },
                isSearching: false
            }
        },
        methods: {
            handleInput(input) {
                this.query = input
            },

            async lookup() {
                // Empty input
                this.isSearching = true
                const axios = require('axios').default
                let backendUrl = "https://fast-mountain-44592.herokuapp.com/search/"
                // let backendUrl = "http://localhost:3000/search/"

                let queryUrl = encodeURI(backendUrl + this.query)

                document.getElementById("query-input").value = null

                axios.get(queryUrl).then(resultBundle => {
                    this.isSearching = false
                    let results = resultBundle.data

                    this.$root.$emit('QueryResolved', results)
                }).catch(error => {
                    console.log(error)
                    this.$root.$emit('FetchingError')
                    this.isSearching = false
                })

            }
        }
    }
</script>

<style scoped>

</style>