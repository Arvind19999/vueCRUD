<template>
    <HeaderPage />
    <h1>This is the home page, WelCome {{userName}}</h1>
    <p>Here is the list of the tabel</p>
    <table>
        <tr>
            <td>Id</td>
            <td>Name</td>
            <td>Address</td>
            <td>Contact</td>
            <td>Action</td>
        </tr>
        <tr v-for="items in restroDetails" :key="items.id">
            <td>{{ items["id"] }}</td>
            <td>{{ items["name"] }}</td>
            <td>{{ items["address"] }}</td>
            <td>{{ items["contact"] }}</td>
            <td> <router-link :to="'/update-resto/'+items.id"> Edit </router-link> 
            <button v-on:click="deleteItems(items.id)">Delete</button>
            </td>
        
        </tr>

    </table>
</template>

<script>
import axios from 'axios';
import HeaderPage from './HeaderPage.vue';
export default {
    name : 'HomePage',
    components:{
        HeaderPage
    },
    data(){
        return{
            userName : '',
            restroDetails:[]
        }
    },
    methods:{
        async deleteItems(id){
            // console.log("The item is deleted" + id);
            let datas = await axios.delete("http://localhost:3000/resturant/"+id);
            if(datas.status == 200){
                alert("Data deleted Successfully");
                this.loadData();
            }

        },
        async loadData(){
            let user = localStorage.getItem('user-info');
        this.userName = JSON.parse(user).name;
        // console.log(this.userName.name);
        if(!user){
            this.$router.push({name:'SignUp'}) 
        }
        let results = await axios.get("http://localhost:3000/resturant");
        this.restroDetails = results.data
        console.log(this.restroDetails)

        }
    },


    mounted(){
        this.loadData();
    }
}
</script>