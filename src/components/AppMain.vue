<!--
    Per passare da Composition API a Options API dobbiamo:
    1. Rimuovere l'attributo setup da <script>
    2. Aggiungere l'export default {}
    3. Aggiungere la proprietà name nell'oggetto esportato che avrà come valore il nome del componente (opzionale, ma buona pratica)
-->
<script>
// import axios from 'axios';

export default {
    name: "AppMain",
    data() {
        return {
            // projects: []
        };
    },
    // created() {
    //     axios
    //         .get('http://127.0.0.1:8000/api/projects')
    //         .then(response => {
    //             console.log(response.data);

    //             this.projects = response.data.projects;
    //         })
    // }
};
</script>

<template>
    <!-- <main>
            <h1>Vite - Boolfolio</h1>
            <div class="card-container">
                <div class="card" v-for="project in projects">
                    <div>
                        <h2 style="display: inline-block;">{{ project.id }}: </h2>
                        <h2 style="display: inline-block; margin-left: 10px;">{{ project.title }}</h2>
                    </div>
                    <div>
                        <h3 style="display: inline-block;">Tipo progetto:</h3>
                        {{ project.type ? project.type.name : 'Nessun tipo selezionato' }}
                    </div>
                    <ul v-if="project.technologies.length > 0" style="padding-left:0;">
                        <h3 style="display: inline-block; ">Tecnologie utilizzate:</h3>
                        <li v-for="technology in project.technologies" style="display: inline-block; margin-right:10px">
                            | {{ technology.name }} |
                        </li>
                    </ul>
                    <div>
                        <img style="height: 200px;" :src="project.full_img_path" alt="">
                    </div>
                    <p>
                        {{ project.content }}
                    </p>
                    <hr style="margin-top: 10px; margin-bottom: 10px;">
                </div>
            </div>
        </main> -->
</template>

<style scoped></style>
