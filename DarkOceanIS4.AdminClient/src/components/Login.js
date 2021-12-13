import React, { useSate, useState } from 'react'

const Login = ({ login }) => {
    const [email, setUsername] = useState();
    const [password, setPassword] = useState();
    const [isValidated, setIsValidated] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        login();

        darkMoonValidateForm();      
    }

    const darkMoonValidateForm = () => {
        setIsValidated(true);
    }

    return (
        <div className="position-absolute top-50 start-50 translate-middle login-bg">
            <h1 className="pb-5 text-secondary">Dark Moon Security Portal</h1>
            <form className="border border-1 border-secondary p-3 rounded login-form" noValidate onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="visually-hidden">Email</label>
                    <div className="input-group">
                        <div className="input-group-text"><i className="fas fa-user"></i></div>
                        <input type="email" className="form-control" placeholder="Enter your email..." required onChange={e => setUsername(e.target.value)}/>
                        <div className={isValidated ? "error-message" : "hidden"}>
                            Please enter a valid email.
                        </div>
                    </div>
                </div>
                <div className="mb-3">
                    <label className="visually-hidden">Password</label>
                    <div className="input-group">
                        <div className="input-group-text"><i className="fas fa-lock"></i></div>
                        <input type="text" className="form-control" placeholder="Enter your password..." required onChange={e => setPassword(e.target.value)}/>
                        <div className={isValidated ? "error-message" : "hidden"}>
                            Please enter a valid password.
                        </div>
                    </div>
                </div>
                {/*<button type="submit" className="btn btn-danger w-100" disabled={!email || !password}>Sign in</button>*/}
                <button type="submit" className="btn btn-danger w-100">Sign in</button>
            </form>
        </div>
    )
}

export default Login