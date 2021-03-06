import React from 'react'
import footerImg from '../img/logo (1).png'

export default function Footer() {
  return (
    <div
      className="footer d__flex align__items__center justify__content__space__between pz-10"
      style={{ padding: "10px 20px", zIndex: "100" }}>
      
      <a href='/'>
        <img src={footerImg} alt="" className="footer__img pointer" />
      </a>
      <span
        className="copyright"
        style={{ color: "#c6c9d8", fontSize: "14px", opacity: "0.75" }}
      >
        Copyright © 2022 Programe Developer Kavisha Silva. All Rights Reserved.
      </span>
  </div>
  )
}
