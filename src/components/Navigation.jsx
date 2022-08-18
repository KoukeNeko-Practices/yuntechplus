import React from "react";
import { Link } from "react-router-dom";
import { Spin as Hamburger } from "hamburger-react";

function Navigation() {
    const [navShow, setNavShow] = React.useState("");
    const [screenWidth, setScreenWidth] = React.useState(window.innerWidth);
    const [isOpen, setOpen] = React.useState(false);
    const [isMobile, setIsMobile] = React.useState(false);

    React.useEffect(() => {
        window.addEventListener("resize", () => {
            setScreenWidth(window.innerWidth);
            if (screenWidth > 768) {
                setIsMobile(true);
            } else {
                setIsMobile(false);
            }
        });
    }, []);

    return (
        <nav className="w-screen h-14 bg-primary flex flex-row flex-wrap content-center select-none sticky">
            <Link to="/">
                <img src="/assets/images/Yuntech.png" className="h-10 ml-6" />
            </Link>
            <ul className="md:flex md:flex-row md:ml-9 md:gap-3 mr-auto">
                <li className="content-center flex flex-wrap hover:bg-hover hover:text-white hover:cursor-pointer px-3 ">
                    最新資訊
                </li>
                <li
                    className="content-center flex flex-wrap hover:bg-hover hover:text-white hover:cursor-pointer px-3 "
                    onMouseEnter={() => {
                        setNavShow("營隊宗旨");
                        console.log("Enter");
                    }}
                >
                    營隊宗旨
                </li>
                {/* <!-- Dropdown menu --> */}
                {navShow === "營隊宗旨" && (
                    <div
                        onMouseLeave={() => {
                            setNavShow("");
                        }}
                        className=" animate-navbar-custom absolute top-14 left-0 bg-primary w-screen flex flex-warp content-center "
                    >
                        <ul className="flex flex-wrap flex-row pl-52 divide-x">
                            <li className="px-3 hover:bg-hover hover:text-white my-1">
                                <Link to="/02營隊宗旨/principle">校長的話</Link>
                            </li>
                            <li className="px-3 hover:bg-hover hover:text-white my-1">
                                <Link to="/02營隊宗旨/intro">營隊介紹</Link>
                            </li>
                            <li className="px-3 hover:bg-hover hover:text-white my-1">
                                <Link to="/02營隊宗旨/purpose">營隊目的</Link>
                            </li>
                            <li className="px-3 hover:bg-hover hover:text-white my-1">
                                <Link to="/02營隊宗旨/agreement">營隊公約</Link>
                            </li>
                            <li className="px-3 hover:bg-hover hover:text-white my-1">
                                <Link to="/02營隊宗旨/clothes">服裝儀容</Link>
                            </li>
                            <li className="px-3 hover:bg-hover hover:text-white my-1">
                                <Link to="/02營隊宗旨/song">營歌 MV</Link>
                            </li>
                            <li className="px-3 hover:bg-hover hover:text-white my-1">
                                <Link to="/file/新生信2022.pdf">新生一封信</Link>
                            </li>
                        </ul>
                    </div>
                )}

                <li
                    className="content-center flex flex-wrap hover:bg-hover hover:text-white hover:cursor-pointer px-3 "
                    onMouseEnter={() => {
                        setNavShow("營隊組織");
                        console.log("Enter");
                    }}
                >
                    營隊組織
                </li>
                {/* <!-- Dropdown menu --> */}
                {navShow === "營隊組織" && (
                    <div
                        onMouseLeave={(event) => {
                            
                            setNavShow("");
                        }}
                        className="animate-navbar-custom absolute top-14 left-0 bg-primary w-screen flex flex-warp content-center"
                    >
                        <ul className="flex flex-wrap flex-row pl-52 divide-x">
                            <li className="px-3 hover:bg-hover hover:text-white my-1">
                                <Link to="/03營隊組織/executiveteam">執行團隊</Link>
                            </li>
                            <li className="px-3 hover:bg-hover hover:text-white my-1">
                                <Link to="/03營隊組織/team">各系隊伍</Link>
                            </li>
                        </ul>
                    </div>
                )}
                <li
                    className="content-center flex flex-wrap hover:bg-hover hover:text-white hover:cursor-pointer px-3 "
                    onMouseEnter={() => {
                        setNavShow("社團簡介");
                        console.log("Enter");
                    }}
                >
                    社團簡介
                </li>
                {/* <!-- Dropdown menu --> */}
                {navShow === "社團簡介" && (
                    <div
                        onMouseLeave={() => {
                            setNavShow("");
                        }}
                        className="animate-navbar-custom absolute top-14 left-0 bg-primary w-screen flex flex-warp content-center"
                    >
                        <ul className="flex flex-wrap flex-row pl-52 divide-x">
                            <li className="px-3 hover:bg-hover hover:text-white my-1">
                                <Link to="/04社團簡介/autonomy">自治性社團</Link>
                            </li>
                            <li className="px-3 hover:bg-hover hover:text-white my-1">
                                <Link to="/03營隊組織/team">康樂性社團</Link>
                            </li>
                            <li className="px-3 hover:bg-hover hover:text-white my-1">
                                <Link to="/03營隊組織/team">服務性社團</Link>
                            </li>
                            <li className="px-3 hover:bg-hover hover:text-white my-1">
                                <Link to="/03營隊組織/team">學藝性社團</Link>
                            </li>
                            <li className="px-3 hover:bg-hover hover:text-white my-1">
                                <Link to="/03營隊組織/team">服務性社團</Link>
                            </li>
                        </ul>
                    </div>
                )}
                <li className="content-center flex flex-wrap hover:bg-hover hover:text-white hover:cursor-pointer px-3 ">
                    <a>相關連結</a>
                </li>
            </ul>
            {isMobile && <Hamburger toggled={isOpen} toggle={setOpen} size={20} />}
        </nav>
    );
}

export default Navigation;
