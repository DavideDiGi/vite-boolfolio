<script>
export default {
    name: 'AppHeader',
    data() {
        return {
            menuItems: [
                {
                    routeName: 'home',
                    label: 'Home'
                },
                {
                    routeName: 'portfolio',
                    label: 'Portfolio'
                },
            ]
        };
    }
}
</script>

<template>
    <header class="w-100 text-bg-dark">

        <div class="container h-100 mx-auto">
            <nav class="d-flex align-items-center h-100 p-3">
                <ul class=" d-flex justify-content-center w-25 list-unstyled mx-auto">
                    <li class="px-3" v-for="menuItem in menuItems">
                        <router-link :to="{ name: menuItem.routeName }" class="nav-link">
                            {{ menuItem.label }}
                        </router-link>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
</template>

<style scoped lang="scss">
// header {
//     height: 50px;
// }
</style>