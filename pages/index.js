import React from "react";
import Image from "next/image";

if (typeof window !== "undefined") {
    window.addEventListener('scroll', () => {
        var nav = document.getElementById('nav-bar')
        nav.classList.toggle('sticky-nav', window.scrollY > 0)
    })
  }

function Home() {
    return (
        <>  
        <nav id="nav-bar" className="navbar-transparent navbar fixed-top navbar-expand-lg">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="/">
                            <Image 
                                src="/logo_cesar_augusto.png" 
                                className="img-logo" 
                                width="63" 
                                height="62" 
                                alt="Logo Cesar Augusto" 
                            />
                            <span className="title-logo">CESAR AUGUSTO</span>
                        </a>

                        <li className="nav-list">
                                <a className="nav-list-item" href="#">SOBRE</a>
                                <a className="nav-list-item" href="#">PORTIFOLIO</a>
                                <a className="nav-list-item" href="#">TECNOLOGIAS</a>  
                        </li>
                    </div>   
                </nav> 
            <div className="banner-home">
                <Image 
                    src="/banner-home.png" 
                    className="img-background-banner" 
                    layout="fill"
                    alt="Logo Cesar Augusto" 
                />
                <div
                    className="img-logo-banner" 
                    alt="Logo Cesar Augusto" 
                ></div>
                <div className="container-titles-banner">
                    <h1 className="title-banner" >CESAR AUGUSTO</h1>
                    <h3 className="title-banner" >DESENVOLVEDOR FULL STACK</h3>
                    <h3 className="title-banner subtitle-banner" >Desenvolvendo soluções criativas e inovadoras</h3>
                </div>
            </div>
            <section className="section-about-me">

            </section>
        </>
    )
}


export default Home;