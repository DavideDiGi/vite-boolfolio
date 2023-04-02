<script>
// import axios from 'axios';

export default {
    name: "ProjectCard",
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
    <!-- <h1>Vite - Boolfolio</h1> -->
<!-- <div class="card-container">
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
        </div> -->
</template>

<style scoped></style>
