<template>
    <div>
        <header class="navbar navbar-expand navbar-dark bg-primary flex-column flex-md-row bd-navbar">
            <nuxt-link :to="{name: 'index'}" class="logo d-flex align-items-center navbar-brand mr-0 mr-md-2">
                <img src="~static/images/logo.png" alt="" class="img-fluid">
            </nuxt-link>
            <div class="navbar-nav-scroll ml-2">
                <ul class="navbar-nav bd-navbar-nav flex-row">
                    <li class="nav-item active">
                        <nuxt-link class="nav-link" :to="{name: 'course-slug', params: {slug: 'course-name-here' }}" >Course Name Goes Here</nuxt-link>
                    </li>
                </ul>
            </div>
            <ul class="navbar-nav ml-md-auto">
                <li class="nav-item" v-if="!auth.loggedIn">
                    <nuxt-link :to="{name: 'login'}" class="btn btn-warning d-none d-lg-inline-block text-dark ml-auto mb-3 mb-md-0 ml-md-3">
                        <font-awesome-icon  class="mr-2" :icon="['fas', 'user']" />
                        Login
                    </nuxt-link>
                </li>
                <li class="nav-item" v-else>
                    <nuxt-link :to="{name: 'account'}" class="btn btn-warning d-none d-lg-inline-block text-dark ml-auto mb-3 mb-md-0 ml-md-3">
                        <font-awesome-icon  class="mr-2" :icon="['fas', 'user']" />
                        {{ auth.user.name }}
                    </nuxt-link>
                </li>
            </ul>
        </header>
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-3 col-lg-3 d-md-block bg-light sidebar collapse py-3">
                    <h4 class="mb-3 text-secondary">Course Module</h4>
                    <module-dropdown :section="{}" />
                </div>
                <div class="col-md-9 ml-sm-auto col-lg-9 px-md-4">
                    <div class="p-4">
                        <iframe width="100%" height="615" src="https://www.youtube.com/embed/eR21ynDHwH8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    <div class="mt-4 p-4">
                        <h3>Description</h3>
                        <hr>

                        <div class="table-responsive">
                            <table class="table table-striped table-sm">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Header</th>
                                        <th>Header</th>
                                        <th>Header</th>
                                        <th>Header</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1,001</td>
                                        <td>Lorem</td>
                                        <td>ipsum</td>
                                        <td>dolor</td>
                                        <td>sit</td>
                                    </tr>
                                    <tr>
                                        <td>1,002</td>
                                        <td>amet</td>
                                        <td>consectetur</td>
                                        <td>adipiscing</td>
                                        <td>elit</td>
                                    </tr>
                                    <tr>
                                        <td>1,003</td>
                                        <td>Integer</td>
                                        <td>nec</td>
                                        <td>odio</td>
                                        <td>Praesent</td>
                                    </tr>
                                    <tr>
                                        <td>1,003</td>
                                        <td>libero</td>
                                        <td>Sed</td>
                                        <td>cursus</td>
                                        <td>ante</td>
                                    </tr>
                                    <tr>
                                        <td>1,004</td>
                                        <td>dapibus</td>
                                        <td>diam</td>
                                        <td>Sed</td>
                                        <td>nisi</td>
                                    </tr>
                                    <tr>
                                        <td>1,005</td>
                                        <td>Nulla</td>
                                        <td>quis</td>
                                        <td>sem</td>
                                        <td>at</td>
                                    </tr>
                                    <tr>
                                        <td>1,006</td>
                                        <td>nibh</td>
                                        <td>elementum</td>
                                        <td>imperdiet</td>
                                        <td>Duis</td>
                                    </tr>
                                    <tr>
                                        <td>1,007</td>
                                        <td>sagittis</td>
                                        <td>ipsum</td>
                                        <td>Praesent</td>
                                        <td>mauris</td>
                                    </tr>
                                    <tr>
                                        <td>1,008</td>
                                        <td>Fusce</td>
                                        <td>nec</td>
                                        <td>tellus</td>
                                        <td>sed</td>
                                    </tr>
                                    <tr>
                                        <td>1,009</td>
                                        <td>augue</td>
                                        <td>semper</td>
                                        <td>porta</td>
                                        <td>Mauris</td>
                                    </tr>
                                    <tr>
                                        <td>1,010</td>
                                        <td>massa</td>
                                        <td>Vestibulum</td>
                                        <td>lacinia</td>
                                        <td>arcu</td>
                                    </tr>
                                    <tr>
                                        <td>1,011</td>
                                        <td>eget</td>
                                        <td>nulla</td>
                                        <td>Class</td>
                                        <td>aptent</td>
                                    </tr>
                                    <tr>
                                        <td>1,012</td>
                                        <td>taciti</td>
                                        <td>sociosqu</td>
                                        <td>ad</td>
                                        <td>litora</td>
                                    </tr>
                                    <tr>
                                        <td>1,013</td>
                                        <td>torquent</td>
                                        <td>per</td>
                                        <td>conubia</td>
                                        <td>nostra</td>
                                    </tr>
                                    <tr>
                                        <td>1,014</td>
                                        <td>per</td>
                                        <td>inceptos</td>
                                        <td>himenaeos</td>
                                        <td>Curabitur</td>
                                    </tr>
                                    <tr>
                                        <td>1,015</td>
                                        <td>sodales</td>
                                        <td>ligula</td>
                                        <td>in</td>
                                        <td>libero</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <h3> Comments </h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus deleniti, iusto debitis neque beatae dolor. Eum quisquam officia delectus. Veniam laudantium et inventore! Vitae deleniti maiores inventore molestiae quaerat voluptatum.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ModuleDropdown from '@/components/course/ModuleDropdown'
export default {
    layout: 'lesson',
    // middleware: 'auth',
    components: {
        'module-dropdown': ModuleDropdown
    },
    computed: {
        auth(){
            return this.$store.state.auth;
        }
    }
}
</script>

<style lang="scss" scoped>
    header .logo {
        max-width: 40px;
        margin-right: 10px;
    }
</style>