<template>
    <div class="ePonto-Container">
        <div class="ePonto-login">
            <v-card-title>
                <h2 style="color: #ff2f2f;">Login</h2>
            </v-card-title>
            <v-text-field
                label="E-mail"
                outlined
                v-model="email"
            ></v-text-field>
            <v-text-field
                label="Senha"
                outlined
                type="password"
                v-model="password"
            ></v-text-field>
            <div>
                <small style="color: #ff2f2f;">{{ error }}</small>
            </div>
            <v-btn
                class="loginButton"
                block
                elevation="3"
                @click="login()"
            >Acessar</v-btn>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import { baseURL } from '../lib/api'
export default {
    data(){
        return{
            email: '',
            password: '',
            error: ''
        }
    },
    methods: {
        async login(){
            const obj = {
                email: this.email,
                password: this.password
            }
            try {
                const result = await axios.post(`${baseURL}/user/login`, obj);
                const token = result.data.token;
                localStorage.setItem('JWT_TOKEN', token);
                this.$router.push({name: 'dashboard'})
            } catch (err) {
                this.error = err.response.data.message
                console.log(err);
            }
        }
    }
}
</script>

<style>
    .ePonto-Container{
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
        background: #e1e1e1;
    }
    .ePonto-login{
        width: 700px;
        background: white;
        padding: 20px;
        border-radius: 15px;
    }
    .loginButton{
        background: #ff2f2f !important;
        color: white !important ;
    }
</style>