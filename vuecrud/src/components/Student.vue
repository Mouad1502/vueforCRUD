<template>
    <div class = 'container'>
        <h1 class="text-center"> Students List </h1>
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
                </tr>
            </tbody>
        </table>
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
