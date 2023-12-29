import {useState} from "react";

const Employee = () => {
    const [emp,setEmp] = useState({empid:201,name:"Bhushan",city:"Vengurla",hobbie:"Cricket"})

    function objectHandle(){
        setEmp ({empid:202,name:"Raghav",city:"Sawantwadi",hobbie:"Cricket"})
    }

    const [stu,setStu]=useState ({rollno:21,name:"sayali",city:"Mumbai",hobbie:"Dancing"})

    function stuHandler(){
        setStu({...stu, rollno:29,name:"pinkey"})
    }

    return(
        <>
        <h2>I Am Employee Comp</h2>
        <h3>
            {emp.empid} - {emp.name} - {emp.city} - {emp.hobbie}
        </h3>
        <button onClick={objectHandle}>Click Now</button>
        <h2>
            {stu.rollno} - {stu.name} -{stu.city} -{stu.hobbie}       </h2>

            <button onClick={stuHandler}>Click Me</button>
        </>
    )
}

export default Employee;