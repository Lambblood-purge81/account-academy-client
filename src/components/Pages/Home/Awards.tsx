import Image from "next/image";
import Link from "next/link";
import "@/styles/tiny-slider/tiny-slider.js";

const Awards = () => {
    return (
        <section className="pb-0 pb-md-5">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-12">
                    <div className="tiny-slider">
                        <div className="tiny-slider-inner" data-arrow="false" data-dots="false" data-gutter="80" data-items-xl="6" data-items-lg="5" data-items-md="4" data-items-sm="3" data-items-xs="2" data-autoplay="2000">
                            <div className="item"> <Image className="grayscale" src={"/images/logo.webp"} alt="client-logo" /> </div>
                            <div className="item"> <Image className="grayscale" src="/images/awards/android.svg" alt="client-logo" /> </div>
                            <div className="item"> <Image className="grayscale" src="/images/awards/envato.svg" alt="client-logo" /> </div>
                            <div className="item"> <Image className="grayscale" src="/images/awards/microsoft.svg" alt="client-logo" /> </div>
                            <div className="item"> <Image className="grayscale" src="/images/awards/netflix.svg" alt="client-logo" /> </div>
                            <div className="item"> <Image className="grayscale" src="/images/awards/google.svg" alt="client-logo" /> </div>
                            <div className="item"> <Image className="grayscale" src="/images/awards/linkedin.svg" alt="client-logo" /> </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
};

export default Awards;
