import React from 'react'

const Footer = () => {

    return (
        <div className='p-4 bg-red-meli  text-footer' style={{ minHeight: '25vh' }}>
            <div className='d-flex justify-content-evenly gap-5 m-auto'>
                <div>
                    <h2 style={{ fontWeight: '600' }}>E-Store App</h2>
                    <h6>©2022 All Rights Reserved.</h6>
                    <h6>Powered by <span>React</span><span>, Router</span> and <span>Redux</span>.</h6>
                </div>
                <div className='text-center'>
                    <h2 style={{ fontWeight: '600' }}>Contact</h2>
                    <a target='_blank' href="https://www.linkedin.com/in/andres-botello/">
                        <i className="fa-brands fa-linkedin buttons-footer"></i>
                    </a> <br />
                    <a target='_blank' href="https://github.com/razielzx/">
                        <i className="fa-brands fa-github buttons-footer"></i>
                    </a><br />
                    <a target='_blank' href="mailto:andres.botello95@gmail.com">
                        <i className="fa-solid fa-envelope buttons-footer"></i>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Footer