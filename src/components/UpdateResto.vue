<template>
    <HeaderPage />
    <h1>Hi here you can update Restro</h1>
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
        <button type="button" v-on:click="updateRestro()">Update Resturant</button>
    </form>
</template>

<script>
import axios from 'axios';
import HeaderPage from './HeaderPage.vue';
export default {
    name : 'UpdateResto',
    components:{
        HeaderPage
    },
    data(){
        return{
            resturant:{
                name:'',
                contact:'',
                address:''
            }
        }
    },
    methods:{
        async updateRestro(){
            let results = await axios.put("http://localhost:3000/resturant/"+this.$route.params.id,{
                name:this.resturant.name,
                address:this.resturant.address,
                contact:this.resturant.contact
            })
            console.log(results)
            if(results.status == 200){
                alert("Data updated successfully successfully")
                this.$router.push({name:'HomePage'})
            }
        }
    },
   async  mounted(){
      let result = await axios.get("http://localhost:3000/resturant/"+this.$route.params.id);
    //   this.resturant.name = result.data.name
    //   this.resturant.address = result.data.address
    //   this.resturant.contact = result.data.contact
    this.resturant = result.data;
        let user = localStorage.getItem('user-info');
        if(!user){
            this.$router.push({name:'SignUp'}) 
        }
    }
}
</script>