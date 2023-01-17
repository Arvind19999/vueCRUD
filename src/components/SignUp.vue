<template>
    <h1>Sign Up</h1>
    <label for="name">Name</label>
    <input type="text" name="name" id="name" v-model="name">
    <br /><br />
    <label for="email">E-mail</label>
    <input type="email" name="email" id="email" v-model="email">
    <br /><br />
    <label for="password">Password</label>
    <input type="password" name="password" id="password" v-model="password">
    <br /><br />
    <button v-on:click="signUp()">Sign Up</button>
<br>
    <router-link to="log-in"> Already Have an Account</router-link>

</template>

<script>
import axios from 'axios'
export default {
    name : 'SignUp',
    data(){
        return{
            name:'',
            email:'',
            password:''
        }
    },
    methods:{
        async signUp(){
             let results = await axios.post("http://localhost:3000/user",{
                name:this.name,
                email:this.email,
                password : this.password 
            });
            console.log(results);
            if(results.status == 201){
                // alert("signUp Successfully");
                localStorage.setItem("user-info",JSON.stringify(results.data));
                this.$router.push({name:'HomePage'})
            }
           
        }
    },
    mounted(){
        let user = localStorage.getItem('user-info');
        if(user){
            this.$router.push({name:'HomePage'}) 
        }
    }
}
</script>