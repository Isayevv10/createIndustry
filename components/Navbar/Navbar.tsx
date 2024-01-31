"use client";

import React, { useState } from "react";
import Logo from "../Logo/Logo";
import Link from "next/link";
import "@/styles/components/_navbar.scss";
import { Search } from "../Search/Search";
import Image from "next/image";
import { MdArrowDropDown } from "react-icons/md";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isOpenDropDown, setIsOpenDropDown] = useState<boolean>(false);

  const openSideMenu = () => {
    setIsOpen((prev: boolean) => !prev);
    console.log(isOpen);
  };

  const openDropDown = () => {
    setIsOpenDropDown((prev: boolean) => !prev);
  };

  return (
    <>
      <div className="navbar">
        {/* RES NAV  STARTS*/}
        {isOpen ? (
          <div className="sidemenu__navbar">
            <div
              style={{
                textAlign: "right",
              }}
            >
              <span onClick={openSideMenu} className="closeSidebar">
                X
              </span>
            </div>
            <ul className="sidemenu__links">
              <li>
                <Link href="/">Ana səhifə</Link>
              </li>
              <li>
                <div className="dropdown" onClick={openDropDown}>
                  <Link href="#">
                    Məhsullar
                    <span>
                      {" "}
                      <MdArrowDropDown style={{ margin: "0" }} size={20} />{" "}
                    </span>{" "}
                  </Link>
                  {isOpenDropDown ? (
                    <div className="dropdown-content">
                      <Link href="/shoes">Ayaqqabılar</Link>
                      <Link href="/">
                        Fərdi mühafizə <span className="spann">vasitələri</span>
                      </Link>
                      <Link href="/">Xüsusi geyimler</Link>
                    </div>
                  ) : (
                    <></>
                  )}
                </div>
              </li>
              <li>
                <Link href="/about">Haqqımızda</Link>
              </li>
              <li>
                <Link href="/contact">Əlaqə</Link>
              </li>
            </ul>
          </div>
        ) : (
          <></>
        )}

        {/* RES NAVBAR ENDS */}

        <div className="navbar__logo">
          <Logo />
        </div>
        <div className="navbar__link">
          <ul className="links">
            <li>
              <Link href="/">Ana səhifə</Link>
            </li>
            <li>
              <div className="dropdown">
                <Link href="/">Məhsullar</Link>
                <div className="dropdown-content">
                  <Link href="/shoes">Ayaqqabılar</Link>
                  <Link href="/">
                    Fərdi mühafizə <span className="spann">vasitələri</span>
                  </Link>
                  <Link href="/">Xüsusi geyimler</Link>
                </div>
              </div>
            </li>
            <li>
              <Link href="/about">Haqqımızda</Link>
            </li>
            <li>
              <Link href="/contact">Əlaqə</Link>
            </li>
          </ul>
          <Search />
        </div>
        <div className="hamburger" onClick={openSideMenu}>
          {isOpen ? (
            <>X</>
          ) : (
            <button className="hamburger__bar">
              <Image
                src="/icons/hamburger.png"
                alt="navbar"
                width={32}
                height={32}
              />
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;