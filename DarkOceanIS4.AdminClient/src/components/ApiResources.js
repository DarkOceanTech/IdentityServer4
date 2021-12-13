import React from 'react';

const ApiResources = () => {
    return (
        <div className="position-absolute top-50 start-50 translate-middle login-bg">
            <h1 className="pb-5 text-secondary">Api Resources</h1>
            <form className="border border-1 border-secondary p-3 rounded login-form">
                <div class="mb-3">
                    <label class="">Name</label>
                    <div class="">
                        <input type="text" class="form-control" id="inputEmail3"/>
                    </div>
                </div>
                <div class="mb-3">
                    <label class="">Display Name</label>
                    <div class="">
                        <input type="password" class="form-control" id="inputPassword3"/>
                    </div>
                </div>
                <div class="mb-3">
                    <label class="">Description</label>
                    <div class="">
                        <input type="text" class="form-control" id="inputDescription3" />
                    </div>
                </div>
                <div class="form-check form-switch">
                    <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault"/>
                        <label class="form-check-label" >Show in Discovery Documentt</label>
                </div>
                <div class="form-check form-switch pb-3">
                    <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked"/>
                        <label class="form-check-label">Enable this resource</label>
                </div>
                <button type="submit" class="btn btn-danger w-100">Add/Update</button>
            </form>
        </div>
    )
}

export default ApiResources;
