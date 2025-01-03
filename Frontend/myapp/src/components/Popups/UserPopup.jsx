import React from "react";

const UserPopup = () => {
    return (
        <>
            <div
                className="modal fade"
                id="registerModal"
                tabIndex="-1"
                aria-labelledby="registerModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header border-0">
                            <h5 className="modal-title" id="registerModalLabel">Register</h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="mb-3">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="firstName"
                                        placeholder="First name"
                                    />
                                </div>
                                <div className="mb-3">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="lastName"
                                        placeholder="Last name"
                                    />
                                </div>
                                <div className="mb-3">
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="email"
                                        placeholder="Email"
                                    />
                                </div>
                                <div className="mb-3">
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="password"
                                        placeholder="Password"
                                    />
                                </div>

                                <button type="submit" className="btn btn-dark w-100">
                                    Register
                                </button>
                            </form>
                        </div>
                        <div className="modal-footer justify-content-center border-0">
                            <p>
                                Already have an account?{" "}
                                <a
                                    href="#"
                                    className="text-dark"
                                    data-bs-toggle="modal"
                                    data-bs-target="#loginModal"
                                    data-bs-dismiss="modal"
                                >
                                    Log in here <span>&#8594;</span>
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className="modal fade "
                id="loginModal"
                tabIndex="-1"
                aria-labelledby="loginModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header border-0">
                            <h5 className="modal-title" id="loginModalLabel">
                                Log in
                            </h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <input type="email" className="form-control mb-3" placeholder="Email" />
                                <input type="password" className="form-control mb-3" placeholder="Password" />
                                <p>
                                    <a
                                        href="#"
                                        className=" text-secondary"
                                        data-bs-toggle="modal"
                                        data-bs-target="#resetPasswordModal"
                                        data-bs-dismiss="modal">
                                        Forgot your password?
                                    </a>
                                </p>
                                <button className="btn btn-dark w-100">Log in</button>
                            </form>
                        </div>
                        <div className="modal-footer justify-content-center border-0">
                            <p>
                                New customer?{" "}
                                <a
                                    href="#"
                                    className="text-dark"
                                    data-bs-toggle="modal"
                                    data-bs-target="#registerModal"
                                    data-bs-dismiss="modal">
                                    Create your account <span>&#8594;</span>
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className="modal fade "
                id="resetPasswordModal"
                tabIndex="-1"
                aria-labelledby="resetPasswordModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content p-3">
                        <div className="modal-header border-0">
                            <h5 className="modal-title" id="resetPasswordModalLabel">
                                Reset your password
                            </h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="modal-body">
                            <p>
                                Sign up for early Sale access plus tailored new arrivals, trends and promotions. To opt out, click unsubscribe in our emails</p>
                            <form>
                                <input type="email" className="form-control mb-3" placeholder="Email" />

                                <p>
                                    <a href="#" className=" text-secondary"
                                        data-bs-toggle="modal"
                                        data-bs-target="#loginModal"
                                        data-bs-dismiss="modal">
                                        Cancel
                                    </a>
                                </p>
                                <button className="btn btn-dark w-100 mb-2">Reset password</button>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default UserPopup;
