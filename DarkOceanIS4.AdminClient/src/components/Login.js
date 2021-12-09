import React from 'react'

const Login = ({ login }) => {

    // Example starter JavaScript for disabling form submissions if there are invalid fields
    const handleSubmit = () => {

        login();

        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        //var forms = document.querySelectorAll('.needs-validation')

        //// Loop over them and prevent submission
        //Array.prototype.slice.call(forms)
        //    .forEach(function (form) {
        //        form.addEventListener('submit', function (event) {
        //            if (!form.checkValidity()) {
        //                event.preventDefault()
        //                event.stopPropagation()
        //            }

        //            form.classList.add('was-validated')
        //        }, false)
        //    })


    }

    return (
        <div className="position-absolute top-50 start-50 translate-middle">
            <h1 className="pb-2">Dark Moon Security Admin</h1>
            <form className="border border-1 border-dark p-3 needs-validation" noValidate onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="visually-hidden">Email</label>
                    <div className="input-group has-validation">
                        <div className="input-group-text"><i className="fas fa-user"></i></div>
                        <input type="email" className="form-control" placeholder="Enter your email..." required />
                        <div className="invalid-feedback">
                            Please enter a valid email.
                        </div>
                    </div>
                </div>
                <div className="mb-3">
                    <label className="visually-hidden">Password</label>
                    <div className="input-group has-validation">
                        <div className="input-group-text"><i className="fas fa-lock"></i></div>
                        <input type="text" className="form-control" placeholder="Enter your password..." required />
                        <div className="invalid-feedback">
                            Please enter a valid password.
                        </div>
                    </div>
                </div>
                <button type="submit" className="btn btn-danger w-100">Sign in</button>
            </form>
        </div>
    )
}

export default Login