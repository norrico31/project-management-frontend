import { useEffect, useState, useRef, useMemo } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { IoIosArrowBack } from "react-icons/io";
import { SlSettings } from "react-icons/sl";
import { AiOutlineAppstore } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { TbReportAnalytics } from "react-icons/tb";
import { RiBuilding3Line } from "react-icons/ri";
import { IoIosArrowDown } from "react-icons/io";
import { RiAdminLine } from "react-icons/ri";

function SubMenu({ data }: { data: typeof subMenusList[0] }) {
    const { pathname } = useLocation();
    const [subMenuOpen, setSubMenuOpen] = useState(pathname.includes(data.name) ? true : false);
    // console.log(pathname)
    console.log(data.name)
    return (
        <>
            <li
                className={`link ${pathname.includes(data.name) && "text-blue-600"}`}
                onClick={() => setSubMenuOpen(!subMenuOpen)}
            >
                <data.icon size={23} className="min-w-max" />
                <p className="flex-1 capitalize">{data.name}</p>
                <IoIosArrowDown
                    className={` ${subMenuOpen && "rotate-180"} duration-200 `}
                />
            </li>
            <motion.ul
                animate={
                    subMenuOpen ? {
                        height: "fit-content",
                    } : {
                        height: 0,
                    }
                }
                className="flex h-0 flex-col pl-14 text-[0.8rem] font-normal overflow-hidden"
            >
                {data.menus?.map((menu) => (
                    <li key={menu}>
                        <NavLink
                            to={`/${data.name}/${menu}`}
                            className="link capitalize"
                        >
                            {menu}
                        </NavLink>
                    </li>
                ))}
            </motion.ul>
        </>
    );
}

const subMenusList = [
    {
        name: "system settings",
        icon: SlSettings,
        menus: ["auth", "app settings", "storage", "hosting"],
    },
    {
        name: "admin settings",
        icon: RiAdminLine,
        menus: ["dashboard", "realtime", "events"],
    },
]

type Props = {
    isTabletMid: boolean;
    open: boolean
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Sidebar({ isTabletMid, open, setOpen }: Props) {
    const sidebarRef = useRef(null);
    const { pathname } = useLocation();

    useEffect(() => {
        if (isTabletMid) {
            setOpen(false);
        } else {
            setOpen(true);
        }
    }, [isTabletMid]);

    useEffect(() => {
        isTabletMid && setOpen(false);
    }, [pathname]);

    const Nav_animation = useMemo(() => isTabletMid ? {
        open: {
            x: 0,
            width: "16rem",
            transition: {
                damping: 40,
            },
        },
        closed: {
            x: -250,
            width: 0,
            transition: {
                damping: 40,
                delay: 0.15,
            },
        },
    }
        : {
            open: {
                width: "16rem",
                transition: {
                    damping: 40,
                },
            },
            closed: {
                width: "4rem",
                transition: {
                    damping: 40,
                },
            },
        }, [isTabletMid])

    return (
        <div className=''>
            <div
                onClick={() => setOpen(false)}
                className={`md:hidden fixed inset-0 max-h-screen z-[998] ${open ? "block" : "hidden"
                    } `}
            ></div>
            <motion.div
                ref={sidebarRef}
                variants={Nav_animation}
                initial={{ x: isTabletMid ? -250 : 0 }}
                animate={open ? "open" : "closed"}
                className="bg-white dark:bg-neutral-900 dark:text-white text-gray shadow-xl z-[999] overflow-hidden md:relative fixed h-screen "
            >
                <div className="flex items-center gap-2.5 font-medium border-b py-3 border-slate-300  mx-3">
                    {/* <img
                        src="https://img.icons8.com/color/512/firebase.png"
                        width={45}
                        alt=""
                    /> */}
                    <span className="text-xl whitespace-pre">Bricksoft</span>
                </div>
                {isTabletMid && (

                    <motion.div
                        onClick={() => {
                            setOpen(!open);
                        }}
                        animate={
                            open
                                ? {
                                    x: 0,
                                    y: 0,
                                    rotate: 0,
                                }
                                : {
                                    x: -10,
                                    y: -200,
                                    rotate: 180,
                                }
                        }
                        transition={{ duration: 0 }}
                        className="absolute w-fit h-fit md:block z-50 right-2 top-3 cursor-pointer"
                    >
                        <IoIosArrowBack size={25} />
                    </motion.div>
                )}

                <div className="flex flex-col  h-full">
                    <ul className="whitespace-pre px-2.5 text-[0.9rem] py-5 flex flex-col gap-1  font-medium overflow-x-hidden scrollbar-thin scrollbar-track-white scrollbar-thumb-slate-100  md:h-[68%] h-[70%]">
                        <li>
                            <NavLink to={"/"} className="link">
                                <AiOutlineAppstore size={23} className="min-w-max" />
                                Projects
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={"/authentication"} className="link">
                                <RiBuilding3Line size={23} className="min-w-max" />
                                Backlogs
                            </NavLink>
                        </li>
                        {/* <li>
                            <NavLink to={"/storage"} className="link">
                                <HiOutlineDatabase size={23} className="min-w-max" />
                                storage
                            </NavLink>
                        </li> */}

                        {(open || isTabletMid) && (
                            <div className="border-y py-5 border-slate-300 ">
                                <small className="pl-3 text-slate-500 inline-block mb-2">
                                    Settings
                                </small>
                                {subMenusList?.map((menu) => (
                                    <div key={menu.name} className="flex flex-col gap-1">
                                        <SubMenu data={menu} />
                                    </div>
                                ))}
                            </div>
                        )}
                        <li>
                            <NavLink to={"/settings"} className="link">
                                {/* <SlSettings size={23} className="min-w-max" /> */}
                                <BsPerson size={23} className="min-w-max" />
                                Profile
                            </NavLink>
                        </li>
                    </ul>
                    {/* {open && (
                        <div className="flex-1 text-sm z-50  max-h-48 my-auto  whitespace-pre   w-full  font-medium  ">
                            <div className="flex border-y border-slate-300 p-4 items-center justify-between">
                                <div>
                                    <p>Spark</p>
                                    <small>No-cost $0/month</small>
                                </div>
                                <p className="text-teal-500 py-1.5 px-3 text-xs bg-teal-50 rounded-xl">
                                    Upgrade
                                </p>
                            </div>
                        </div>
                    )} */}
                </div>
                {/* <motion.div
                    onClick={() => {
                        setOpen(!open);
                    }}
                    animate={
                        open
                            ? {
                                x: 0,
                                y: 0,
                                rotate: 0,
                            }
                            : {
                                x: -10,
                                y: -200,
                                rotate: 180,
                            }
                    }
                    transition={{ duration: 0 }}
                    className="absolute w-fit h-fit md:block z-50 hidden right-2 bottom-3 cursor-pointer"
                >
                    <IoIosArrowBack size={25} />
                </motion.div> */}
            </motion.div>

        </div>
    );
}