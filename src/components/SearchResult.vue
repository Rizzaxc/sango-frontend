<template>
    <div class="columns">
        <KanjiCard
            class="column is-three-quarters"
            id="result"
            :kanji="currentKanji"
            :showFull="true"/>
        <div class="column">
            <div class="tile is-ancestor">
                <div class="tile is-parent">
                    <div class="tile is-child has-text-centered">
                        <p class="heading">Discard</p>
                        <span class="icon is-large">
                            <a @click="deleteKanji()"><i class="fas fa-trash fa-2x"></i></a>
                        </span>
                    </div>
                </div>

                <div class="tile is-parent">
                    <div class="tile is-child has-text-centered">
                        <p class="heading">Previous</p>
                        <span class="icon is-large">
                            <a @click="previousKanji()"><i class="fas fa-chevron-circle-left fa-2x"></i></a>
                        </span> 
                    </div>
                </div>

                <div class="tile is-parent">
                    <div class="tile is-child has-text-centered">
                        <p class="heading">Next</p>
                        <span class="icon is-large">
                            <a @click="nextKanji()"><i class="fas fa-chevron-circle-right fa-2x"></i></a>
                        </span>
                    </div>
                </div>

                <div class="tile is-parent">
                    <div class="tile is-child has-text-centered">
                        <p class="heading">Save</p>
                        <span class="icon is-large">
                            <a @click="saveKanji()"><i class="fas fa-bookmark fa-2x"></i></a>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
    import KanjiCard from "./KanjiCard.vue";
    export default {
        name: "SearchResult",
        components: {
            KanjiCard
        },
        props: {
            data: {
                type: Array,
                required: true
            },

        },
        data() {
            return {
                currentIndex: 0
            }
        },
        methods: {
            deleteKanji() {
                this.data.splice(this.currentIndex, 1)
                this.previousKanji()
            },

            previousKanji() {
                this.currentIndex--
                if (this.currentIndex < 0) this.currentIndex = this.totalKanjis - 1
            },

            nextKanji() {
                this.currentIndex++;
                this.currentIndex %= this.totalKanjis;
            },

            saveKanji() {
                let bundle = this.currentKanji
                this.$root.$emit('UpdateHistory', bundle)

            }
        },
        computed: {
            totalKanjis() {
                return this.data.length
            },
            currentKanji() {
                let kanji = {
                    onyomi: this.data[this.currentIndex].Onyomi,
                    kunyomi: this.data[this.currentIndex].Kunyomi,
                    meaning: this.data[this.currentIndex].Meaning,
                    hanViet: this.data[this.currentIndex].AmHanViet,
                    writing: this.data[this.currentIndex].Writing
                }
                return kanji
            },
        }
    }
</script>


<style scoped>

</style>