<template>
    <div>
        <layout-main>
            <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 class="h2">Users</h1>
                <router-link 
                        :to="{name:'createuser'}" 
                        class="btn btn-success">Create User</router-link>
            </div>
            <div class="row row-cols-4 g-3">
                <div v-for="user in datausers" :key="user" class="card col mr-1">
                    <img src="/img/profile.png" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">{{ user.name }}</h5>
                        <h6>{{user.username}}</h6>
                        <p class="card-text">
                            Company : {{ user.company.name }}
                        </p>
                        <router-link 
                        :to="{name:'detailuser', 
                        params: { id: user.id, username: user.username }}" 
                        class="btn btn-primary">Detail User</router-link>
                    </div>
                </div>
            </div>
        </layout-main>
    </div>
</template>

<script>
import LayoutMain from "@/views/LayoutMain"
export default {
    components: {
        LayoutMain
    }, 
    data() {
        return {
            datausers: null
        }
    },
    methods: {
        loadUsers(){
            fetch("https://jsonplaceholder.typicode.com/users")
                .then(response => response.json())  //then 1, set response sebagai json
                .then(json => {
                    this.datausers = json;
                })   //then 2, ambil respon json dan set sebagai data
                .catch(error => {
                    console.log(error);
                })
        }
    },
    mounted() {
        this.loadUsers();
    }
}
</script>