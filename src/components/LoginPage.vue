<template>
<h1>
    Login Page
</h1>
<label for="email">E-mail</label>
<input type="email" name="email" id="email" v-model="email">
<br /><br />
<label for="password">Password</label>
<input type="password" name="password" id="password" v-model="password">
<br /><br />
<button v-on:click="logIn()">Login</button>
<br>
<router-link to="sign-up">Creat an Account</router-link>
</template>

<script>
import axios from 'axios';
export default {
    name :"LoginPage",
    data(){
        return{
            email:'',
            password:''
        }
    },
    methods:{
        async logIn(){
            let result = await axios.get(`http://localhost:3000/user?email=${this.email}&password=${this.password}`);
            console.log(result);
            if(result.status == 200 && result.data.length>0){
                localStorage.setItem("user-info",JSON.stringify(result.data[0]));
                this.$router.push({name:'HomePage'});

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