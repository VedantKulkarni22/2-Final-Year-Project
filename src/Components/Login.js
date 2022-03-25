import React from 'react'
import '../Styles/Login.css';



export default function Login() {


    return (
        <>
            <div id="Login" className="w-50 shadow p-3 mb-5 bg-body mx-auto my-5 " style={{ height: "30rem", display: "flex" }}>
                <img id="loginImage" src="Images/login.jpg" width="50%" alt="" />
                <div className='container mx-3 my-3'>
                    <div className='fs-5 text-center'>Login</div>
                    <hr />
                    <form action="">
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Username</label>
                            <input type="email" class="form-control" placeholder="username" />
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Email</label>
                            <input type="email" class="form-control" placeholder="abc@gmail.com" />
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Password</label>
                            <input type="password" class="form-control" placeholder="password" />
                        </div>
                        <div className='text-center'>
                            <button id="loginBtn" type="submit" class="btn btn-primary" style={{ "alignSelf": "center" }}>Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

{/* <div className='d-flex mx-auto'>
<div>
    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-person-badge-fill" viewBox="0 0 16 16">
        <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm4.5 0a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3zM8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm5 2.755C12.146 12.825 10.623 12 8 12s-4.146.826-5 1.755V14a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-.245z" />
    </svg>
</div>
<h5 className="card-title">Login</h5>
</div>
<form action="">
<div className="mb-3">
    <label for="exampleFormControlInput1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
</div>
<div className="mb-3">
    <label for="exampleFormControlInput1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleFormControlInput1" placeholder="password" />
</div>
<button type="submit" href="#" className="btn btn-primary">Login</button>
</form> */}
