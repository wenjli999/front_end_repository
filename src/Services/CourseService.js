import axios from 'axios';
export const CourseService ={ 
    getAllCourses : function(){
        
        return axios.get('http://54.185.8.83:8080/courses');
    }
};

