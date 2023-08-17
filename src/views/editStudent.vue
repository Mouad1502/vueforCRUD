<template>
    <div class="container mt-5">
        <div class="card">
            <div class="card-header">Edit Student</div>
            <div class="card-body">
                <div class="mb-3">
                    <label for="">First Name</label>
                    <input type="text" v-model="model.student.firstName" class="form-control"/>
                </div>
                <div class="mb-3">
                    <label for="">Last Name</label>
                    <input type="text" v-model="model.student.lastName" class="form-control"/>
                </div>
                <div class="mb-3">
                    <label for="">Email</label>
                    <input type="text" v-model="model.student.email" class="form-control"/>
                </div>
                <div class="mb-3">
                    <button type="button" @click="editStudent" class="btn btn-primary">Save</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import StudentService from '../services/StudentService.js'
import axios from 'axios'
    export default {
        name: 'EditStudents',
        data(){
            return{
                model:{
                    student:{
                        firstName:'',
                        lastName:'',
                        email:''
                    }
                }

            }
        },
        mounted(){
            this.getStudentData(this.$route.params.id);
        },
        methods: {
            getStudentData(studentID){
                StudentService.getStudentsbyId(studentID).then((res)=>{
                    console.log(res.data);
                    this.model.student=res.data;


                });
            },
            editStudent(){
                var mythis=this;
                StudentService.editStudents(this.model.student.id,this.model.student).then((res)=>{
                    console.log('profile changed');
                })
                .catch(function(error){
                    alert('error in the procedure');
                });
            }
        }
    }
</script>