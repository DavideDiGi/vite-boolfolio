<!--
    Per passare da Composition API a Options API dobbiamo:
    1. Rimuovere l'attributo setup da <script>
    2. Aggiungere l'export default {}
    3. Aggiungere la proprietà name nell'oggetto esportato che avrà come valore il nome del componente (opzionale, ma buona pratica)
-->
<script>
import AppMain from './components/AppMain.vue';
import ProjectCard from './components/ProjectCard.vue';
import { store } from './store';

export default {
    name: "App",
    data() {
        return {
            store
        }
    },
    // 2. Registrazione
    components: {
        AppMain,
        ProjectCard
    },
    methods: {

    }
};
</script>

<template>
    <AppMain />
    <ProjectCard />
</template>

<style lang="scss">
// Qui possiamo anche importare dei file .scss (attenzione al percorso)
@import './styles/main';
</style>
