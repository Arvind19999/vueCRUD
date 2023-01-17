<template>
    <HeaderPage />
    <h1>Hi {{ userName }} here you can add Restro</h1>
<form action="POST">
    <label for="name">Name</label>
    <input type="text" name="name" id="name" v-model="resturant.name">
    <br><br>
    <label for="address">Address</label>
    <input type="text" name="address" id="address" v-model="resturant.address">
    <br><br>
    <label for="contact">Contact</label>
    <input type="text" name="contact" id="contact" v-model="resturant.contact">
    <br><br>
    <button type="button" v-on:click="addRestro()">Add Resturant</button>
</form>
</template>

<script>
import HeaderPage from './HeaderPage.vue';
import axios from 'axios';
export default {
    name : 'AddResto',
    components:{
        HeaderPage
    },
    data(){
            return{
                userName:'',
                resturant:{
                    name:'',
                    address:'',
                    contact:''
                }
            }
    },
    methods:{
       async addRestro(){
            let results = await axios.post("http://localhost:3000/resturant",{
                name:this.resturant.name,
                address:this.resturant.address,
                contact:this.resturant.contact
            })
            console.log(results)
            if(results.status == 201){
                alert("Data added successfully")
            }
        }
    },
mounted(){
        let user = localStorage.getItem('user-info');
        this.userName = JSON.parse(user).name;
        if(!user){
            this.$router.push({name:'SignUp'}) 
        }
        
    }
}
</script>