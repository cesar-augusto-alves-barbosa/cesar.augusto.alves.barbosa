import React from "react";
import Image from "next/image";

if (typeof window !== "undefined") {
    window.addEventListener('scroll', () => {
        var nav = document.getElementById('nav-bar')
        nav.classList.toggle('sticky-nav', window.scrollY > 0)
    })
}

function closeMenu() {
    if (typeof window !== "undefined") {
        var nav = document.getElementById('side-bar')
        nav.style.display = "none"
    }
}

function openMenu() {
    if (typeof window !== "undefined") {
        var nav = document.getElementById('side-bar')
        nav.style.display = "flex"
    }
}

function Home() {
    return (
        <>  
        <nav id="nav-bar" className="navbar-transparent navbar fixed-top navbar-expand-lg">
                    <div className="container-fluid">
                        <a className="navbar-brand nav-bar-mobile nav-bar-mobile-brand" href="/">
                            <Image 
                                src="/logo_cesar_augusto.png" 
                                className="img-logo" 
                                width="63" 
                                height="62" 
                                alt="Logo Cesar Augusto" 
                            />
                            <div className="title-logo title-logo-mobile">CESAR AUGUSTO</div>
                        </a>
                        <i onClick={openMenu} class="icon-menu bi bi-list"></i>
                    </div>
                    <div id="side-bar" className="container-fluid container-nav-bar nav-side-bar-mobile">
                        <i onClick={closeMenu} class="icon-close-menu bi bi-arrow-right-short"></i>
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
            <section className="section-about-me container col-xxl-8 px-4 py-5">
                <div className="container-about-me row align-items-center g-5 py-5">
                    <div className="container-image-profile col-10 col-sm-8 col-lg-6">
                        <Image 
                            src="/perfil_cesar_augusto.png"
                            className="image-profile-about-me shadow-lg mx-lg-auto img-fluid"
                            width="300"
                            height="270"
                        />
                    </div>
                    <div className="container-paragraphs-about-me col-lg-6">
                        <h1 className="title-about-me display-5 fw-bold lh-1 mb-3">Sobre mim</h1>
                        <p className="paragraph-about-me lead">
                            Sou programador junior, graduado em Análise e Desenvolvimento de Sistemas
                            na faculdade Bandtec(atual São Paulo Tech School). 
                            Adquiri um amplo 
                            conhecimento técnico através de projetos 
                            acadêmicos com os principais conceitos 
                            trabalhados no mercado da tecnologia. 
                        </p>
                        <p className="paragraph-about-me lead">
                            Possuo conhecimentos 
                            em Metodologia ágil(SCRUM), Java, Spring Framework, 
                            NodeJS, React, Kotlin, Javascript, SQL Server, MySQL, 
                            Git, HTML e CSS. Também tenho interesse em outras 
                            tecnologias que ainda estudo, como React Native, C#, MongoDB.
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}


export default Home;