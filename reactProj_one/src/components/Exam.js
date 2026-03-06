import React from 'react'

function Exam(props) {
    return (
        <>


            <div className='container' style={{ backgroundColor: "lightgoldenrodyellow", borderRadius: "10px", width: "60%" }}>
                <div class="jumbotron" style={{ backgroundColor: "lightgrey", borderRadius: "10px", width: "100%", }}>
                    <h1 class="display-4">Hello, {props.name}!!!</h1>
                    <p class="lead">Exam Details coming from Edutainer School</p>
                    <hr class="my-4" />
                    <p>All the Best for your Exams!!</p>
                    <p class="lead">
                        <table>
                            <thead>
                                <th><strong>SUBJECT</strong></th>
                                <th><strong>DATE</strong></th>
                            </thead>
                            <tr>
                                <td>{props.subject}</td>
                                <td>{props.date}</td>
                            </tr>
                        </table>
                        <a class="btn btn-primary btn-lg" href="#" role="button">Download Hall Ticket</a>
                    </p>
                </div>
            </div>



        </>
    )
}

export default Exam