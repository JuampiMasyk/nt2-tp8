import Vue from "vue";
import vuex from 'vuex'
import axios from 'axios'

Vue.use(vuex)

export default new vuex.Store({
    state : {
        url : 'https://634271f73f83935a78433ad7.mockapi.io/personas',
        usuarios: [],
        formData : {
            nombre : null,
            edad : null,
            email : null
        }
    },
    actions : {
         async enviarFormulario({commit}){
            try {
                await axios.post(this.state.url, this.state.formData)
                commit('resetFormData')
            } catch (error) {
                console.warn(error);
            }            
        },
        async getUsuarios({commit}){
            try {
                let {data} = await axios(this.state.url)
                commit('getUsuarios', data)
            } catch (error) {
                console.warn(error);
            }
        }
    }, 
    mutations : {
        getUsuarios(state, usuarios){
            state.usuarios = usuarios
        },
        resetFormData(state){
            state.formData = {
                nombre : null,
                edad : null,
                email : null
            }
        }

    }
})