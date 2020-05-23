<template>
    <nav class="navbar is-success" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
            <figure class="image is-64x64">
                <img src="../assets/logo.svg">
            </figure>
        </div>

        <div class="navbar-menu">
            <div class="navbar-start">
                <a class="navbar-item" href="/">
                    <strong>Kanji</strong>
                </a>
            </div>

            <div class="navbar-end">

                <div class="modal" id="about-modal">
                    <div class="modal-background" @click="closeModal()"></div>
                    <div class="modal-card">
                        <article class="message is-medium">
                            <div class="message-header">
                                <p>Kanji Dictionary for Vietnamese learning English & Japanese</p>
                                <button class="delete" aria-label="delete" @click="closeModal()"></button>
                            </div>
                            <div class="message-body">
                                This (mini) dictionary includes over 2000 Kanjis with readings in both Japanese and Vietnamese, along with the meanings in English. 
                                This is useful for Vietnamese learning the other two languages (or speakers of any combination of the three) since association is a lot quicker with Hán Việt, and sometimes the Onyomi readings very closely resemble the Vietnamese counterparts.
                            </div>
                        </article>
                    </div>
                </div>
                <a class="navbar-item" @click="launchModal()">
                    <strong>About</strong>
                </a>
                <div class="navbar-item">
                    <a id="github" href="https://github.com/Rizzaxc?tab=repositories">
                        <i class="fab fa-github fa-2x"></i>
                    </a>
                </div>
            </div>
        </div>
    </nav>
</template>


<script>
    export default {
        name: 'TheNavBar',
        props: {},
        methods: {
            launchModal() {
                document.getElementById('about-modal').classList.add('is-active')
            },
            closeModal() {
                document.getElementById('about-modal').classList.remove('is-active')

            }
        }
    }
</script>

<style scoped>
    a#github {
        color: inherit;
    };
</style>