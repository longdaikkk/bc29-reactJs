import React from 'react'
import './index.scss'

export default function Footer() {
  return (
    <div className="bg-light footer">
      <div className='container py-2'>
      <div className="row">
        <div className="col-lg-6 col-md-6 logo mt-6">
          <a className="navbar-brand" href="#">
            <h3><i className="fa-solid fa-align-right text-info" />
              Cinema</h3>
          </a>
          <p>Lorem ipsum viverra feugiat. Pellen tesque libero ut justo, ultrices in ligula. Semper at tempufddfel. Lorem ipsum dolor sit amet Semper at elit team advisors.</p>
          <i className="fa-brands fa-facebook-f mx-2" />
          <i className="fa-brands fa-twitter  mx-2" />
          <i className="fa-brands fa-instagram  mx-2" />
          <i className="fa-brands fa-linkedin-in  mx-2" />
        </div>
        <div className="col-lg-6 col-md-6 mt-6">
          <h4>CONTACT INFO</h4>
          <p>Address : Ho Chi Minh City, Viet Nam</p>
          <p>Phone Number : 0586058049</p>
          <p>Email : <a href className="text-muted link">holongdai@gmail.com</a></p>
        </div>
      </div>
    </div>
    </div>

  )
}
