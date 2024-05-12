

// import logo from './logo.svg';
import './App.css';
import {useState} from 'react'
import studentList from './studentList';
import Table from './Components/Table';
import Input from './Components/Input';
import Edit from './Components/edit';
function App() {
  const [student, updateStudent] = useState(studentList);
    const [defaultBranch,updateBranch] = useState('all');
  const [updateDetail, setUpdateDetail]=useState(false);
  const [dataForUpdate, setDataForUpdate] = useState(null)



  const addStudent = (name,rollno,branch,mobile)=>{
    let newStudent = {name,rollno,branch,mobile};
    console.log(name,rollno,branch,mobile,newStudent);
    let studentdata = [...student,newStudent];
    updateStudent(studentdata);
  }
  
  const deleteRecord = (rollno)=>{
    let confirm = window.confirm("are you sure ?")
    if(confirm){
      let index = student.findIndex(data=>data.rollno===rollno);
      student.splice(index,1);
      let arr = [...student];
      updateStudent(arr);
    }
  }

  const addBranch = (branch)=>{
    updateDetail===true?setUpdateDetail(false):setUpdateDetail(false);
    updateBranch(branch);
  }

  const changes = (data)=>{
    setDataForUpdate(data)
    updateDetail===false?setUpdateDetail(true):setUpdateDetail(false);
  }
  return (<>
  <section className='position-relative'>

    <div className='container-fluid bg-danger position-sticky top-0'>
        <h1 className='text-white text-center'>Student List</h1>
    </div>
   <Input setUpdateDetail={setUpdateDetail} student = {student} defaultBranch = {defaultBranch} deleteRecord = {deleteRecord} addBranch = {addBranch} addStudent={addStudent}/>
    <div className='container mt-3'>
      {updateDetail && <Edit updateDetail={updateDetail} setUpdateDetail = {setUpdateDetail} updateStudent = {updateStudent} student = {student} dataForUpdate = {dataForUpdate}/>}
     {!updateDetail && <Table student = {student} defaultBranch = {defaultBranch} changes = {changes} deleteRecord = {deleteRecord}/>
}
    </div>
  </section>
  </>
  );
}

export default App;
