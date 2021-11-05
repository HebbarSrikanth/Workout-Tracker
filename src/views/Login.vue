<template>
  <div class="max-w-screen-sm mx-auto py-10 px-5">
    <div v-if="errorMessage" class="bg-red-200 rounded p-2">
      {{errorMessage}}
    </div>
    <form @submit.prevent="login" class="mt-5 shadow-xl rounded  bg-light-grey py-10 px-5">
      <h1 class="text-3xl text-at-light-green text-center">Login</h1>
      <div class="flex flex-col mb-2">
        <label for="email" class="text-at-light-green">Email</label>
        <input type="text" id="email" v-model="email" />
      </div>
      <div class="flex flex-col mb-2">
        <label for="password" class="text-at-light-green">Password</label>
        <input type="password" id="password" v-model="password"/>
      </div>
      <div>
        <button class="
            mt-4
            bg-at-light-green
            p-2
            rounded
            text-white
            transition
            duration-500
            ease-in-out
            hover:bg-white hover:text-at-light-green
            transform
            hover:scale-110 hover:-translate-y-1 hover:border-at-light-green
          " type="submit">LogIn</button>
      </div>
      <p class="text-center">Dont have an account ? <router-link to="/register" class="text-at-light-green">Register</router-link></p>
    </form>
  </div>
</template>

<script>
import {ref} from 'vue'
import {supabase} from '../supabase'
import {useRouter} from 'vue-router'

export default {
  name: "login",
  setup() {
    // Create data / vars
    const email=ref("")
    const password=ref('')
    const errorMessage=ref(null)
    const router=useRouter()
    // Login function
    const login=async ()=>{
      if(password.value.trim()==='' || email.value.trim()===''){
        setError('Error : Email & Password is required')
        return
      }
      try {
        const response=await supabase.auth.signIn({
          email:email.value,
          password:password.value
        })
        console.log(response)
        if(response.error) throw response.error
        router.push('/')
      } catch (error) {
        console.log(error)
        setError(`Error : ${error.message}`)
      }

    }

    const setError=(msg)=>{
      errorMessage.value=msg
      setTimeout(()=>{
        errorMessage.value=''
      },5000)
    }

    return {email,password,errorMessage,login};
  },
};
</script>
