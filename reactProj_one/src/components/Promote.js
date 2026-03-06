import { useState } from "react";

function Promote() {


    let [employees, setEmployees] = useState(['Pratiksha', 'Himesh', 'Madhuchandan', 'Vijay']);
    const [staff, setStaff] = useState(
        [
            {
                id: 1,
                name: 'Kiran',
                qualification: 'Engineer',
                pic: 'https://imgs.search.brave.com/t-2vH_rIcXtzjFhTFEw76LyHzcL3Q-m6S6XkqswsVik/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/YWxqYXplZXJhLmNv/bS93cC1jb250ZW50/L3VwbG9hZHMvMjAy/Ni8wMi9BRlBfXzIw/MjYwMjI1X185OFdV/NEw0X192MV9fSGln/aFJlc19fSXNyYWVs/SW5kaWFEaXBsb21h/Y3lfY3JvcHBlZC0x/NzcyMDUwNTQ0Lmpw/Zz9yZXNpemU9Nzcw/LDUxMyZxdWFsaXR5/PTgw',
                exp: '5 year experience in DevOps',
                desc: 'Kiran from K.M Doddi, joined Chirec in 2009'
            },
            {
                id: 2,
                name: 'Hanumantaraju',
                qualification: 'Senior Engineer',
                pic: 'https://imgs.search.brave.com/YacLMW3R0-JLMYVTx-R10vTJrh3GFPoilkoWdt7wqZI/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTEz/ODY2MjQyOS9waG90/by9hbWl0LXNoYWgt/bmF0aW9uYWwtcHJl/c2lkZW50LW9mLWJq/cC1zaG93aW5nLXZp/Y3Rvcnktc2luZ2gt/YS1wcmVzcy1jb25m/ZXJlbmNlLW9uLWFw/cmlsLTIyLTIwMTku/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PVNWdWZWaFY4dnQ0/QTYxVUk1SkxFUHhr/X2ZXRkNTVllDLU1W/UjVXcy1FcG89',
                exp: '15 year experience in DevOps',
                desc: 'Hanumantharaju from Chikkanayakanahalli, joined Chirec in 2009'
            },

            {
                id: 3,
                name: 'Himesh',
                qualification: 'Senior Engineer',
                pic: 'https://imgs.search.brave.com/qkTnOpR2G8Vtz9q4UkmC_eNBbC9oW84OJ-IiRvfMA2g/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMjEy/MzYyMzk1OS9waG90/by9ncmVhdGVyLW5v/aWRhLWluZGlhLXVw/LWNtLXlvZ2ktYWRp/dHlhbmF0aC1hdHRl/bmQtYS1wcm9ncmFt/LWF1ZGllbmNlLW9m/LWludGVsbGVjdHVh/bHMtYXQtZ2wuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPU9t/WTdVMmRoNlBxTFly/TXJycWthb0JselJs/UmN4NWJHZzRUMkhj/Zm9fZUE9',
                exp: '5 year experience in DevOps',
                desc: 'Himesh from Madhugiri, joined Chirec in 2008'
            }
        ]
    )
    return (
        <>
            <h1> Employee Promotion Module</h1>
            <table>
                <thead>
                    <th>Sl.No</th>
                    <th>Employee Name</th>
                    <th>Promote</th>
                </thead>

                <tbody>
                    {
                        employees.map((emp, index) => (
                            <tr>
                                <td>{index + 1}</td>
                                <td><strong>{emp}</strong></td>
                                <td>
                                    <button class='btn btn-warning'> Promote</button>
                                </td>
                            </tr>

                        ))
                    }
                </tbody>
            </table>

            {staff.map((item) => (
                <div class='carddiv'>
                    <div class="card">
                        <img src={item.pic} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">{item.name}</h5>
                            <p class="card-text">{item.desc},{item.qualification}, {item.exp}</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}

export default Promote;