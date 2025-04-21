import Image from "next/image";
import Link from "next/link";

const Banner = () => {
    return (
        <section className="pt-0 position-relative overflow-hidden h-700px h-sm-600px h-lg-700px rounded-top-4 mx-2 mx-md-4"
            style={{
                backgroundImage: "url('/images/hero.webp')",
                backgroundPosition: "center",
                backgroundSize: "cover"
            }}
        >
            <div className="bg-overlay bg-dark opacity-5"></div>
            <figure className="position-absolute bottom-0 left-0 w-100 d-md-block mb-n3 z-index-9">
                <svg className="fill-body" width="100%" height="150" viewBox="0 0 500 150" preserveAspectRatio="none">
                    <path d="M0,150 L0,40 Q250,150 500,40 L580,150 Z"></path>
                </svg>
            </figure>
            <figure className="position-absolute top-0 start-50 translate-middle-x z-index-9 mt-5">
                <svg width="29px" height="29px">
                    <path className="fill-orange" d="M29.004,14.502 C29.004,22.512 22.511,29.004 14.502,29.004 C6.492,29.004 -0.001,22.512 -0.001,14.502 C-0.001,6.492 6.492,-0.001 14.502,-0.001 C22.511,-0.001 29.004,6.492 29.004,14.502 Z"></path>
                </svg>
            </figure>

            <div className="container z-index-9 position-relative">
                <figure className="position-absolute bottom-0 end-0 z-index-9 ms-5 mb-5">
                    <svg width="23px" height="23px">
                        <path className="fill-primary" d="M23.003,11.501 C23.003,17.854 17.853,23.003 11.501,23.003 C5.149,23.003 -0.001,17.854 -0.001,11.501 C-0.001,5.149 5.149,-0.000 11.501,-0.000 C17.853,-0.000 23.003,5.149 23.003,11.501 Z"></path>
                    </svg>
                </figure>

                <div className="row py-0 py-md-5 align-items-center text-center text-sm-start">
                    <div className="col-sm-10 col-lg-8 col-xl-6 all-text-white my-5 mt-md-0">
                        <div className="py-0 py-md-5 my-5">

                            {/* <div className="d-inline-block bg-white px-3 py-2 rounded-pill mb-3">
                                <p className="mb-0 text-dark"><span className="badge bg-success rounded-pill me-1">New</span>	One to one video call using web browser</p>
                            </div> */}

                            <h1 className="text-white display-5">Start learning from <span className="text-warning">best institutions</span></h1>
                            <p className="text-white">Demesne far-hearted suppose venture excited see had has. Dependent on so extremely delivered by. Yet no jokes worse her why.</p>

                            <div className="d-sm-flex align-items-center mt-4">
                                <a href="#" className="btn btn-primary me-2 mb-4 mb-sm-0">Apply Now</a>
                                {/* <a data-glightbox="" data-gallery="office-tour" href="https://www.youtube.com/embed/tXHviS-4ygo" className="d-block ms-0 ms-sm-4">
                                    <div className="btn btn-round btn-white-shadow text-danger mb-0 me-3 align-middle d-inline-block"> <i className="fas fa-play"></i></div>
                                    <span className="mb-0 text-white">Watch video</span>
                                </a> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;
