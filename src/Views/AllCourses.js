import React, { useEffect, useState } from 'react';
import CourseTable from '../components/CourseTable';
import { CourseService } from '../Services/CourseService';

export default function AllCourses() {
    const [courses, setCourses] = useState([]);  // destructing array----内 can have diff type 
    // UseState 触发componentDidMount
    useEffect(() => {
        // AJAX
        // 1. Make XHR call
        CourseService.getAllCourses() // Promise
            .then(response => {
                // 2. Display result on the page
                // courses are fectched from response.data
                //SetCourse----会触发Render， 把
                setCourses(response.data);
            })
            .catch(error => console.error(error));
    }, []); //不加[] 就会在ComponentDidMOunt 里触发XX函数， 有一个死循环
    return (
        <div>
            <CourseTable courses={courses}/>
        </div>
    );
}
