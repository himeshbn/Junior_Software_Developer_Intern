import { useRef, useState } from 'react';
import Exam from './Exam';

function Student() {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const nameRef = useRef(null); 

    const [students] = useState([
        { id: 1, name: "Himesh", subject: "Maths", date: "20-06-2024" },
        { id: 2, name: "Pratiksha", subject: "Science", date: "20-06-2024" },
        { id: 3, name: "Vijay", subject: "Social Studies", date: "20-06-2024" },
        { id: 4, name: "Madhuchandan", subject: "English", date: "20-06-2024" },
    ]);

    function clearText() {
        setName("");
        setPhone("");
        if (nameRef.current) {
            nameRef.current.focus();
            nameRef.current.style.color = "black";
            nameRef.current.disabled = false; // Re-enable on clear
        }
    }

    function handleChangeText() {
        if (nameRef.current) {
            nameRef.current.style.color = "red";
            nameRef.current.style.fontWeight = "bold";
            nameRef.current.disabled = true; // Corrected spelling: disabled
        }
    }

    function handleInput() {
        if (nameRef.current) {
            nameRef.current.disabled = false; 
            nameRef.current.style.color = "black"; 
            nameRef.current.style.fontWeight = "normal";
        }
    } // Added the missing closing brace here!

    return (
        <div className='container' style={{ padding: '20px' }}>
            <div>
                <label>Enter your name: </label>
                <input 
                    ref={nameRef} 
                    type='text' 
                    value={name} 
                    placeholder="Enter Name..."
                    onChange={(e) => setName(e.target.value)} 
                />
                <br /><br />

                <label>Enter your Phone: </label>
                <input 
                    type='text' 
                    value={phone} 
                    placeholder="Enter Phone..."
                    onChange={(e) => setPhone(e.target.value)} 
                />
                <br />

                <button 
                    className='btn btn-primary' 
                    style={{ marginLeft: '20px', marginTop: '12px' }} 
                    onClick={clearText}
                >
                    Clear
                </button>

                <button 
                    className='btn btn-danger' 
                    style={{ marginLeft: '10px', marginTop: '12px' }} 
                    onClick={handleChangeText}
                >
                    Lock & Style
                </button>

                <button 
                    className='btn btn-success' 
                    style={{ marginLeft: '10px', marginTop: '12px' }} 
                    onClick={handleInput}
                >
                    Enable Input
                </button>
            </div>

            <hr />

            <h3>Exam Schedule</h3>
            {students.map((stud) => (
                <Exam key={stud.id} name={stud.name} subject={stud.subject} date={stud.date} />
            ))}
        </div>
    );
}

export default Student;