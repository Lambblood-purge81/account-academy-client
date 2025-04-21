import Image from "next/image";
import Link from "next/link";

const Courses = () => {
    return (
        <section className="pt-0 pt-md-5">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 mb-4">
                        <h2 className="mb-0">Our <span className="text-warning">Practical Training</span> Programs</h2>
                        {/* <p className="mb-0">Check out most 🔥 courses in the market</p> */}
                    </div>
                </div>

                <div className="row g-4">
                    <div className="col-md-6 col-xl-4">
                        <div className="card p-2 shadow h-100">
                            <div className="rounded-top overflow-hidden">
                                <div className="card-overlay-hover">
                                    <img src="/images/courses/accounting.webp" className="card-img-top" alt="course image" />
                                </div>
                                <div className="card-img-overlay">
                                    <div className="card-element-hover d-flex justify-content-end">
                                        <a href="#" className="icon-md bg-white rounded-circle text-center">
                                            <i className="fas fa-shopping-cart text-danger"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body">
                              
                                <hr />
                                <h5 className="card-title"><a href="#">Bookkeeping, VAT Returns & Payroll</a></h5>
                                <div className="d-flex justify-content-between align-items-center mb-0">
                                    <a href="#" className="badge bg-info bg-opacity-10 text-info me-2"><i className="fas fa-circle small fw-bold"></i> Personal Development </a>
                                    <button className="btn btn-success-soft mb-0"><i className="fas fa-sign-in-alt me-2"></i>Read more</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 col-xl-4">
                        <div className="card p-2 shadow h-100">
                            <div className="rounded-top overflow-hidden">
                                <div className="card-overlay-hover">
                                    <img src="/images/courses/accounting.webp" className="card-img-top" alt="course image" />
                                </div>
                                <div className="card-img-overlay">
                                    <div className="card-element-hover d-flex justify-content-end">
                                        <a href="#" className="icon-md bg-white rounded-circle text-center">
                                            <i className="fas fa-shopping-cart text-danger"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body">
                              
                                <hr />
                                <h5 className="card-title"><a href="#">Bookkeeping, VAT Returns & Payroll</a></h5>
                                <div className="d-flex justify-content-between align-items-center mb-0">
                                    <a href="#" className="badge bg-info bg-opacity-10 text-info me-2"><i className="fas fa-circle small fw-bold"></i> Personal Development </a>
                                    <button className="btn btn-success-soft mb-0"><i className="fas fa-sign-in-alt me-2"></i>Read more</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-xl-4">
                        <div className="card p-2 shadow h-100">
                            <div className="rounded-top overflow-hidden">
                                <div className="card-overlay-hover">
                                    <img src="/images/courses/accounting.webp" className="card-img-top" alt="course image" />
                                </div>
                                <div className="card-img-overlay">
                                    <div className="card-element-hover d-flex justify-content-end">
                                        <a href="#" className="icon-md bg-white rounded-circle text-center">
                                            <i className="fas fa-shopping-cart text-danger"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body">
                              
                                <hr />
                                <h5 className="card-title"><a href="#">Bookkeeping, VAT Returns & Payroll</a></h5>
                                <div className="d-flex justify-content-between align-items-center mb-0">
                                    <a href="#" className="badge bg-info bg-opacity-10 text-info me-2"><i className="fas fa-circle small fw-bold"></i> Personal Development </a>
                                    <button className="btn btn-success-soft mb-0"><i className="fas fa-sign-in-alt me-2"></i>Read more</button>
                                </div>
                            </div>
                        </div>
                    </div>
                  

                </div>
            </div>
        </section>
    );
};

export default Courses;
