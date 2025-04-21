"use client"
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";


export const NAVLINKS = [
    {
        title: "Home",
        href: "/",
    },
    {
        title: "About Us",
        href: "/scripture/what-is-solo-scriptura",
    },
    {
        title: "Courses",
        href: "/about",
    },
    {
        title: "Accounting Services",
        href: "/contact",
    },
    {
        title: "Blog",
        href: '/',
    },
    {
        title: "Contact",
        href: '/',
    },


];

const menuItems = [
    { label: "Home", href: "/" },
    { label: "About us", href: "/about" },
    {
        label: "Courses",
        dropdown: [
            {
                category: "Development",
                links: [
                    { label: "Web Development", href: "/courses/web-development" },
                    { label: "Mobile Development", href: "/courses/mobile-development" },
                ],
            },
            {
                category: "Design",
                links: [
                    { label: "UI/UX Design", href: "/courses/ui-ux-design" },
                    { label: "Graphic Design", href: "/courses/graphic-design" },
                ],
            },
        ],
    },
    { label: "Accounting Services", href: "/about" },
    { label: "Blog", href: "/about" },
    { label: "Contact", href: "/contact" },
]

export function Navbar() {
    // const token = useAppSelector((state: any) => state.auth.token);
    // const user = useAppSelector((state: any) => state.auth.user);

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <header className="navbar-light navbar-sticky header-static">
            <nav className="navbar navbar-expand-xl">
                <div className="container px-3 px-xl-5">
                    {/* <a className="navbar-brand" href="index.html"> */}
                    <Link href="/">
                        <Image
                            className="dark:hidden"
                            src={"/images/logo.webp"}
                            alt="Logo"
                            width={140}
                            height={42}
                        />
                    </Link>
                    {/* </a> */}
                    <button className="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-animation">
                            <span></span>
                            <span></span>
                            <span></span>
                        </span>
                    </button>

                    <div className="navbar-collapse w-100 collapse" id="navbarCollapse">

                        <ul className="navbar-nav navbar-nav-scroll me-auto">
                            <li className="nav-item dropdown">
                                <a className="nav-link active" href="#" id="demoMenu" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Home</a>
                            </li>

                            <li className="nav-item dropdown">
                                <a className="nav-link" href="#" id="pagesMenu" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">About us</a>

                            </li>

                            <li className="nav-item dropdown dropdown-fullwidth">
                                <a className="nav-link" href="#" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Courses
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down"><path d="m6 9 6 6 6-6"/></svg>
                                    {/* <svg
                                        className={`fill-current duration-200 ease-in rotate-180`}
                                        width="20"
                                        height="20"
                                        viewBox="0 0 20 20"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M3.6921 7.09327C3.91674 6.83119 4.3113 6.80084 4.57338 7.02548L9.99997 11.6768L15.4266 7.02548C15.6886 6.80084 16.0832 6.83119 16.3078 7.09327C16.5325 7.35535 16.5021 7.74991 16.24 7.97455L10.4067 12.9745C10.1727 13.1752 9.82728 13.1752 9.59322 12.9745L3.75989 7.97455C3.49781 7.74991 3.46746 7.35535 3.6921 7.09327Z"
                                            fill=""
                                        />
                                    </svg> */}

                                </a>
                                <div className="dropdown-menu dropdown-menu-end pb-0" data-bs-popper="none">
                                    <div className="row p-4 g-4">
                                        <div className="col-xl-6 col-xxl-3">
                                            <h6 className="mb-0">Practical Training Programs</h6>
                                            <hr />
                                            <ul className="list-unstyled">
                                                <li> <a className="dropdown-item" href="#">Market research</a> </li>
                                                <li> <a className="dropdown-item" href="#">Advertising</a> </li>
                                                <li> <a className="dropdown-item" href="#">Consumer behavior</a> </li>
                                                <li> <a className="dropdown-item" href="#">Digital marketing</a> </li>
                                                <li> <a className="dropdown-item" href="#">Marketing ethics</a> </li>

                                            </ul>
                                        </div>

                                        <div className="col-xl-6 col-xxl-3">
                                            <h6 className="mb-0">Practical Training Programs</h6>
                                            <hr />
                                            <ul className="list-unstyled">
                                                <li> <a className="dropdown-item" href="#">Market research</a> </li>
                                                <li> <a className="dropdown-item" href="#">Advertising</a> </li>
                                                <li> <a className="dropdown-item" href="#">Consumer behavior</a> </li>
                                                <li> <a className="dropdown-item" href="#">Digital marketing</a> </li>
                                                <li> <a className="dropdown-item" href="#">Marketing ethics</a> </li>

                                            </ul>
                                        </div>

                                        <div className="col-xl-6 col-xxl-3">
                                            <h6 className="mb-0">Practical Training Programs</h6>
                                            <hr />
                                            <ul className="list-unstyled">
                                                <li> <a className="dropdown-item" href="#">Market research</a> </li>
                                                <li> <a className="dropdown-item" href="#">Advertising</a> </li>
                                                <li> <a className="dropdown-item" href="#">Consumer behavior</a> </li>
                                                <li> <a className="dropdown-item" href="#">Digital marketing</a> </li>
                                                <li> <a className="dropdown-item" href="#">Marketing ethics</a> </li>

                                            </ul>
                                        </div>

                                        <div className="col-xl-6 col-xxl-3">
                                            <h6 className="mb-0">Practical Training Programs</h6>
                                            <hr />
                                            <ul className="list-unstyled">
                                                <li> <a className="dropdown-item" href="#">Market research</a> </li>
                                                <li> <a className="dropdown-item" href="#">Advertising</a> </li>
                                                <li> <a className="dropdown-item" href="#">Consumer behavior</a> </li>
                                                <li> <a className="dropdown-item" href="#">Digital marketing</a> </li>
                                                <li> <a className="dropdown-item" href="#">Marketing ethics</a> </li>

                                            </ul>
                                        </div>


                                    </div>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link" href="#" id="demoMenu" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Accounting Services</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link" href="#" id="demoMenu" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Blog</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link " href="#" id="demoMenu" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Contact</a>
                            </li>


                        </ul>

                        <div className="navbar-nav d-none d-lg-inline-block">
                            <button className="btn btn-primary-soft mb-0">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-log-in"><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/><polyline points="10 17 15 12 10 7"/><line x1="15" x2="3" y1="12" y2="12"/></svg>
                                Student Portal</button>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}

