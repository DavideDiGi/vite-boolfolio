<!--
    Per passare da Composition API a Options API dobbiamo:
    1. Rimuovere l'attributo setup da <script>
    2. Aggiungere l'export default {}
    3. Aggiungere la proprietà name nell'oggetto esportato che avrà come valore il nome del componente (opzionale, ma buona pratica)
-->
<script>
import AppHeader from './components/AppHeader.vue';
// import AppMain from './components/AppMain.vue';
import AppFooter from './components/AppFooter.vue';
import ProjectsIndex from './pages/ProjectsIndex.vue';
import ProjectsShow from './pages/ProjectsShow.vue';
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
        AppHeader,
        AppFooter,
        ProjectsIndex,
        ProjectsShow
    },
    methods: {

    }
};
</script>

<template>
    <AppHeader />
    <main class="min-vh-100 text-bg-secondary py-4">
        <router-view></router-view>
    </main>
    <AppFooter />
    <!-- <ProjectsIndex /> -->
</template>

<style lang="scss">
// Qui possiamo anche importare dei file .scss (attenzione al percorso)
@import './styles/main';
</style>
