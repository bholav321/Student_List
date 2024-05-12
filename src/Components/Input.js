import { useRef } from 'react';

function Input(props) {
  const { student, addStudent, addBranch } = props;
  const nameValue = useRef(null);
  const rollValue = useRef(null);
  const branchValue = useRef(null);
  const mobileValue = useRef(null);

  const handleAddStudent = () => {
    // Check if all form fields are valid
    const form = document.getElementById('studentForm');
    if (!(nameValue.current.value && rollValue.current.value && branchValue.current.value && mobileValue.current.value)) {
      alert("Please fill in all fields");
      return;
    }
    addStudent(
      nameValue.current.value,
      rollValue.current.value,
      branchValue.current.value,
      mobileValue.current.value
    );

    // Reset form fields after adding student
    form.reset();
  };

  return (
    <>
      <div className='container form-group'>
        <form id="studentForm">
          <div className='row'>
            <div className='col-md-6'>
              <input
                ref={nameValue}
                required
                pattern="[A-Za-z\s]+"
                title="Please enter only alphabetic characters"
                className='form-control m-1'
                placeholder='Enter your name'
              />
              <span style={{ color: 'red', display: nameValue.current && nameValue.current.validity.patternMismatch ? 'block' : 'none' }}>Please enter only alphabetic characters</span>
            </div>
            <div className='col-md-6'>
              <input
                ref={rollValue}
                required
                type='number'
                pattern="[0-9]+"
                title="Please enter only numeric characters"
                className='form-control m-1'
                placeholder='Enter your roll no'
              />
              <span style={{ color: 'red', display: rollValue.current && rollValue.current.validity.patternMismatch ? 'block' : 'none' }}>Please enter only numeric characters</span>
            </div>
          </div>
          <div className='row'>
            <div className='col-md-6'>
              <select
                ref={branchValue}
                required
                className='form-control m-1'
              >
                <option value="">Select Branch</option>
                <option>CS</option>
                <option>MECH</option>
                <option>EC</option>
                <option>CIVIL</option>
                <option>IT</option>
              </select>
            </div>
            <div className='col-md-6'>
              <input
                ref={mobileValue}
                required
                type='number'
                pattern="[0-9]{10}"
                title="Please enter a 10-digit mobile number"
                className='form-control m-1'
                placeholder='Enter your mobile no'
              />
              <span style={{ color: 'red', display: mobileValue.current && mobileValue.current.validity.patternMismatch ? 'block' : 'none' }}>Please enter a 10-digit mobile number</span>
            </div>
          </div>
          <button
            type="button"
            onClick={handleAddStudent}
            className='btn btn-success mt-2'
          >
            ADD
          </button>
        </form>
      </div>
      <div className='container mt-2'>
        <button
          onClick={() => addBranch('CS')}
          className='btn btn-primary'
        >
          CS ({student.filter(data => data.branch === 'CS').length})
        </button>
        <button
          onClick={() => addBranch('CIVIL')}
          className='btn btn-info m-2'
        >
          CIVIL ({student.filter(data => data.branch === 'CIVIL').length})
        </button>
        <button
          onClick={() => addBranch('EC')}
          className='btn btn-success m-2'
        >
          EC ({student.filter(data => data.branch === 'EC').length})
        </button>
        <button
          onClick={() => addBranch('MECH')}
          className='btn btn-danger m-2'
        >
          MECH ({student.filter(data => data.branch === 'MECH').length})
        </button>
        <button
          onClick={() => addBranch('IT')}
          className='btn btn-dark m-2'
        >
          IT ({student.filter(data => data.branch === 'IT').length})
        </button>
        <button
          onClick={() => addBranch('all')}
          className='btn btn-secondary m-2'
        >
          Total ({student.length})
        </button>
      </div>
    </>
  );
}

export default Input;
