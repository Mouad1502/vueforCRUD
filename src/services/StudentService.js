import axios from 'axios'

const Student_API_BASE_URL = 'http://localhost:8081/api/v1/students'


class StudentService{
    getStudents(){
        return axios.get(Student_API_BASE_URL);
    }
    getStudentsbyId(id){
        return axios.get(Student_API_BASE_URL+'/'+id);
    }
    addStudents(data){
        return axios.post(Student_API_BASE_URL,data);
    }
    deleteStudents(id){
        return axios.delete(Student_API_BASE_URL+'/'+id);
    }
    editStudents(id,data){
        return axios.put(Student_API_BASE_URL+'/'+id,data);
    }
}

export default new StudentService()