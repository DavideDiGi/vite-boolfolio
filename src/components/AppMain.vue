<!--
    Per passare da Composition API a Options API dobbiamo:
    1. Rimuovere l'attributo setup da <script>
    2. Aggiungere l'export default {}
    3. Aggiungere la proprietà name nell'oggetto esportato che avrà come valore il nome del componente (opzionale, ma buona pratica)
-->
<script>
import axios from 'axios';

export default {
    name: "AppMain",
    data() {
        return {
        };
    },
    created() {
        axios
            .get('http://127.0.0.1:8000/api/projects')
            .then(response => {
                console.log(response.data)
            })
    }
};
</script>

<template>
    <main>
        <h1>Vite - Boolfolio</h1>
    </main>
</template>

<style scoped></style>
