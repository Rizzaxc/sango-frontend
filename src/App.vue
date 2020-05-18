<template>
  <div id="app">
    <TheNavBar />
    <div class="columns is-centered">
      <div class="column is-half">
        <SearchBar />


        <SearchResult 
          v-if="this.results.length > 0"
          :data="this.results" />

        <div class="search-history"
            v-if="searchHistory.length > 0"
        >
          <KanjiCard
            id="savedQueries"
            v-for="(pastKanji, index) in searchHistory"
            :key="index"
            :kanji="pastKanji"
            :index="index"
            :showFull="false"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TheNavBar from "./components/TheNavBar.vue";
import SearchBar from "./components/SearchBar.vue";
import SearchResult from "./components/SearchResult.vue";
import KanjiCard from "./components/KanjiCard.vue";

export default {
  name: "App",
  created() {
    this.$root.$on("QueryResolved", this.updateResults); // Emitted from SearchBar
    this.$root.$on("FetchingError", this.showFetchingErrorAlert); // Emitted from SearchBar when error occurs
    this.$root.$on("AddToHistory", this.addToSearchHistory); // Emitted from SearchResult
    this.$root.$on("DeleteFromHistory", this.deleteFromSearchHistory); // Emitted from KanjiCard

    document.title = "Sango - Trilingual Mini Dictionary";
  },
  beforeDestroy() {
    this.$root.$off("QueryResolved", this.updateResults);
    this.$root.$off("FetchingError", this.showFetchingErrorAlert);
    this.$root.$off("AddToHistory", this.addToSearchHistory);
    this.$root.$off("DeleteFromHistory", this.deleteFromSearchHistory); 

  },
  data() {
    return {
      searchHistory: [],
      results: [],
    };
  },
  components: {
    TheNavBar,
    SearchBar,
    SearchResult,
    KanjiCard
  },
  methods: {
    showFetchingErrorAlert() {
      //TODO
    },

    // Input: An array of JavaScript objects
    updateResults(results) {
      this.results = results
    },

    addToSearchHistory(kanji) {
      this.searchHistory.unshift(kanji) // Push the requested Kanji to the front
      
      if (this.searchHistory.length > 6) {
          this.searchHistory.pop()
      }
    },
    deleteFromSearchHistory(index) {
      this.searchHistory.splice(index, 1)
    }
  },
  computed: {
    
  }
};
</script>

<style scoped>
#savedQueries {
    width: 49%;

}

.searchbar {
  margin-top: 10%;
  margin-bottom: 3%;
}

.search-history {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: space-evenly;
  justify-content: space-between;
  height: 80%;
  margin-top: 2px;
}
</style>
