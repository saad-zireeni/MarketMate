import market_mate_logo from './image/market_mate_logo.png'
import { AiFillLinkedin } from "react-icons/ai";
import { BsTelephoneFill } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import { Link } from "react-router-dom";
const Footer = () => {
    return (
        <footer footer aria-label="Site Footer" >
            <div className="mx-auto max-w-screen-xl px-4 pb-6 pt-16 sm:px-6 lg:px-8 lg:pt-24">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                    <div>
                        <div className="flex justify-start text-teal-600 sm:justify-start">
                            <img src={market_mate_logo} className="w-40" alt='logo' />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:col-span-2">
                        <div className="text-left sm:text-left">
                            <p className="text-xl font-medium text-gray-900">Quick links</p>

                            <nav aria-label="Footer About Nav" className="mt-8">
                                <ul className="space-y-4 text-sm">
                                    <li>
                                        <Link to="/"
                                            className="transition hover:text-amber-500">
                                            Home
                                        </Link>
                                    </li>

                                    <li>
                                        <Link to="products"
                                            className="transition hover:text-amber-500">
                                            All products
                                        </Link>
                                    </li>

                                    <li>
                                        <Link to="About"
                                            className="transition hover:text-amber-5005">
                                            About
                                        </Link>
                                    </li>

                                    <li>
                                        <Link to="Contact"
                                            className="transition hover:text-amber-500">
                                            Contact
                                        </Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>

                        <div className="text-left sm:text-left">
                            <p className="text-xl font-medium text-gray-900">Our products</p>

                            <nav aria-label="Footer Services Nav" className="mt-8">
                                <ul className="space-y-4 text-sm">
                                    <li>
                                        <Link to="Vegetables"
                                            className="transition hover:text-amber-500">
                                            Vegetables
                                        </Link>
                                    </li>

                                    <li>
                                        <Link to="Fruits"
                                            className="transition hover:text-amber-500">
                                            Fruits
                                        </Link>
                                    </li>

                                    <li>
                                        <Link to="Meats"
                                            className="transition hover:text-amber-500">
                                            Meats
                                        </Link>
                                    </li>

                                    <li>
                                        <Link to='Bakery'
                                            className="transition hover:text-amber-500">
                                            Bakery
                                        </Link>
                                    </li>

                                    <li>
                                        <Link to='Frozen'
                                            className="transition hover:text-amber-500">
                                            Frozen
                                        </Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div className="text-left sm:text-left w-60">
                            <p className="text-xl font-medium text-gray-900">Our vision</p>
                            <p className="mt-6 max-w-md leading-relaxed sm:max-w-xs sm:text-left">
                                Esay shopping and make all requirements for you
                            </p>

                        </div>
                    </div>
                </div>

                <div className="mt-12 pt-6">
                    <div className="flex justify-center">
                        <p className="mt-4 text-sm text-black sm:order-first sm:mt-0">
                            &copy; 2023 market mate team
                        </p>
                    </div>
                </div>
            </div>
        </footer>

    );
}

export default Footer;