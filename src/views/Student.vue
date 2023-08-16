<template>
    <div class = 'container'>
        <h1 class="display-1 text-center"> Students List </h1><br>
        <div class="card">
                <table class="table table-striped">
                    <thead>
                        <th>StudentID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                    </thead>
                    <tbody>
                        <tr v-for="student in students" v-bind:key="student.id">
                            <td>{{ student.id }}</td>
                            <td>{{ student.firstName }}</td>
                            <td>{{ student.lastName }}</td>
                            <td>{{ student.email }}</td>
                            <td>
                                <router-link to="/" class="btn btn-primary">
                                    Edit
                                </router-link>
                                <button type="button" class="btn btn-danger">
                                    Delete
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
        </div>
        <br>
        <router-link to="/" class="btn btn-success">
            Add Student
        </router-link>
    </div>
</template>
<script>
    import StudentService from '../services/StudentService'
    export default{
        name: 'getStudents',
        data(){
            return {
                students : []
            }
        },
        methods:{
            getStudents(){
                StudentService.getStudents().then((response) =>{
                    this.students = response.data;
                })
            }
        },
        created(){
            this.getStudents()
        }
    }
</script>
