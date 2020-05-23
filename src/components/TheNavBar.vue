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
                        <header class="modal-card-head">
                            <p class="modal-card-title">Mini Dictionary for Vietnamese Japanese-learners</p>
                            <button class="delete" aria-label="close" @click="closeModal()"></button>
                        </header>

                        <section class="modal-card-body">
                            Lorem Ipsum                            
                        </section>
                    </div>
                </div>
                <a class="navbar-item" @click="launchModal()">
                    About
                </a>
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