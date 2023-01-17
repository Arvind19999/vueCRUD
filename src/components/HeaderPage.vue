<template>
<h1>Header</h1>
<div class="nav">
    <router-link to="/">Home</router-link>
<router-link to="/add-resto">Add Resturant</router-link>
<router-link to="/update-resto">Update Resturant</router-link>
<router-link v-on:click="logOut()" to="/#">Log Out</router-link>
</div>
<!-- <h1>Header</h1> -->
</template>

<script>
export default {
    name:'HeaderPage',
    methods:{
        logOut(){

            localStorage.clear();
            this.$router.push({name:'LoginPage'})
        }
    }
}
</script>

<style>
.nav{
    background-color: #333;
    overflow: hidden;
}
.nav a{
    float: left;
    color : #f2f2f2;
    text-align: center;
    padding : 10px 14px;
    text-decoration : none;
    font-size: 14px;
    margin-right: 4px;
}

.nav a:hover{
    background-color: #ddd;
    color : #222
}
</style>