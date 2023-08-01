<template>
    <div class="login-form-container container">
        <div class="row">
            <div @submit.prevent="login" class="col-md-6 offset-md-3">
                <form class="form">
                    <h3>Bejelentkezés</h3>
                    <div class="email-container">
                        <input v-model="email" type="email" class="form-control" placeholder="Email">
                    </div>
                    <div class="password-container">
                        <div class="input-group">
                            <input v-model="password" class="form-control" :type="hidePassword ? 'password' : 'text'" placeholder="Jelszó">
                            <button class="btn btn-outline-secondary" type="button" @click="showHidePassword">
                                <font-awesome-icon :icon="hidePassword ? 'eye' : 'eye-slash'"/>
                            </button>
                        </div>
                    </div>
                    <button type="submit" class="btn btn-outline-warning">Belép</button>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

export default {
    name: 'LoginForm',
    components: {
        FontAwesomeIcon
    },
    data: function() {
        return {
            hidePassword: true,
            email: '',
            password: ''
        }
    },
    methods: {
        showHidePassword: function() {
            this.hidePassword = !this.hidePassword
            console.log(this.hidePassword)
        },
        login: async function() {
            try {
                const res = await this.$axios.post('/login', {
                    email: this.email,
                    password: this.password
                })

                console.log(res)
            } catch (err) {
                console.log(err)
            }
        }
    }
}
</script>
<style scoped lang="scss">
.form {
    padding: 2rem;
}
.email-container {
    margin-bottom: 1rem;
}
.form-control:focus {
    box-shadow: 0 0 0 0.15rem goldenrod;;
}
.password-container {
    margin-bottom: 1rem;
}
.btn-outline-secondary {
    width: 15%;
    color: goldenrod;
    border: 0.05rem solid goldenrod;
}
.btn-outline-secondary:hover {
    background-color: goldenrod;
    color: #141B26;
    border: 0.05rem solid #141B26;
}
h3 {
  color: goldenrod;
  text-transform: uppercase;
  margin-bottom: 2rem;
}
</style>