<template>

  <section class="src-componentes-usuarios">
    <div class="jumbotron">
      <h2>Usuarios Ingresados</h2>
      <br>

      <div v-if="this.$store.state.usuarios.length" class="table-responsive">
        <table class="table table-dark">
          <tr>
            <th>Nombre</th>
            <th>Edad</th>
            <th>Email</th>

          </tr>
          <tr v-for="(usuario,index) in this.$store.state.usuarios" :key="index">
                   <td>{{ usuario.nombre }}</td>
                  <td>{{ usuario.edad }}</td>
                  <td>{{ usuario.email }}</td>
                
              </tr>
        </table>
      </div>
      <h4 v-else class="alert alert-warning text-center">No hay usuarios disponibles</h4>

    </div>
  </section>

</template>

<script>

  export default  {
    name: 'src-componentes-usuarios',
    props: [],
    mounted () {

    },
    created () {
      this.getUsuarios()
    },
    data () {
      return {
        url: 'https://634271f73f83935a78433ad7.mockapi.io/personas',
      }
    },
    methods: {
      async getUsuarios(){
        this.$store.dispatch('getUsuarios')
      }
    },
    computed: {

    }
}

</script>

<style scoped lang="css">
  .jumbotron{
    background-color: red;
    color: black;
  }
</style>