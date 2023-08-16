import axios from 'axios'

const Student_API_BASE_URL = 'http://localhost:8081/api/v1/students'


class StudentService{
    getStudents(){
        return axios.get(Student_API_BASE_URL);
    }
}

export default new StudentService()