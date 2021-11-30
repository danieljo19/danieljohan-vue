<template>
    <div>
        <layout-main>
            <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 class="h2">Users</h1>
            </div>
            <div class="row row-cols-1 row-cols-md-4 row-cols-sm-2 g-3">
                <div v-for="user in datausers" :key="user.id" class="col card">
                    <img src="/img/profile.png" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">{{user.company.name}}</h5>
                        <address>
                            <strong>{{user.name}}</strong>
                            <br>
                                {{user.address.street}}, {{user.address.street}} <br>
                                {{user.address.city}}, {{user.address.zipcode}} <br>
                                <abbr title="phone">{{user.phone}}</abbr><br>
                            <strong>{{user.username}}</strong><br>
                            {{user.email}}
                        </address>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
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
            datausers: null,
            data2 : null,
            data3: ""
        }
    },
    methods: {
        getUsers(){
            fetch("https://jsonplaceholder.typicode.com/users")
                .then(response => response.json())  //then pertama, set response sebagai json
                .then(json => {
                    this.datausers = json;
                })   //then kedua, ambil respon json dan set sebagai data
                .catch(error => {
                    console.log(error);
                })
        },
        fungsi2()
        {
            
        },
        fungsi3()
        {

        }
    },
    mounted() {
        console.log("Hallo");
        this.getUsers();
    }
}
</script>