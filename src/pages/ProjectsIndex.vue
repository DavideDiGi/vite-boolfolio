<!--
    Per passare da Composition API a Options API dobbiamo:
    1. Rimuovere l'attributo setup da <script>
    2. Aggiungere l'export default {}
    3. Aggiungere la proprietà name nell'oggetto esportato che avrà come valore il nome del componente (opzionale, ma buona pratica)
-->
<script>
import axios from 'axios';

export default {
    name: "ProjectsIndex",
    data() {
        return {
            projects: [],
            defaultImg: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cG9ydGZvbGlvfGVufDB8fDB8fA%3D%3D&w=1000&q=80'

        };
    },
    created() {
        axios
            .get('http://127.0.0.1:8000/api/projects')
            .then(response => {
                console.log(response.data);

                this.projects = response.data.projects;
            })
    },
    // computed: {
    //     shortContent() {
    //         let shortContent = this.project.content;

    //         if (shortContent.length > 100) {
    //             shortContent = shortContent.substr(0, 100) + '...';
    //         }
    //         return shortContent;
    //     }

    // }
};
</script>

<template>
    <div class="container mx-auto">
        <h1 class="text-center">Vite - Boolfolio</h1>
        <div class="row">
            <div class="col">
                <div class=" d-flex flex-wrap">
                    <div class="card mx-5 mt-5" v-for="project in projects" style="width: 21rem;">
                        <img id="cover" :src="project.full_img_path ?? defaultImg" :alt="project.title">
                        <div class="card-body p-2">
                            <h4 class="card-title d-inline">{{ project.id }} -</h4>
                            <h4 class="d-inline ms-1">{{ project.title }}</h4>
                            <hr class="my-2">
                            <div>
                                <h5 style="display: inline-block;">Tipo progetto:</h5>
                                <span class="fs-5 ms-2">{{ project.type ? project.type.name : 'Nessun tipo selezionato'
                                }}</span>
                            </div>
                            <ul class="mt-2" v-if="project.technologies.length > 0" style="padding-left:0;">
                                <h5 style="display: inline-block; ">Tecnologie utilizzate:</h5>
                                <li class="fs-6 ms-2" v-for="technology in project.technologies"
                                    style="display: inline-block;">
                                    <span class="badge text-bg-warning p-1">{{ technology.name }} </span>
                                </li>
                            </ul>
                            <hr class="mt-3">
                            <p class="card-text mt-3 fs-5 pb-2">{{ project.content }}</p>
                            <!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->
                            <router-link :to="{ name: 'projects-show', params: { slug: project.slug } }"
                                class="btn btn-primary p-2">Mostra di più</router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
#cover {
    min-height: 370px;
    max-height: 370px;
}
</style>
