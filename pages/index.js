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
                    <div className="container-navbar-mobile container-fluid">
                        <a className="navbar-brand nav-bar-mobile nav-bar-mobile-brand" href="/">
                            <Image 
                                src="/logo_cesar_augusto.png" 
                                className="img-logo img-logo-nav-mobile" 
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
            <section className="banner-home">
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
            </section>
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
                            Meu nome é Cesar Augusto, tenho 19 anos, sou programador junior, graduado em Análise e Desenvolvimento de Sistemas
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
            <footer className="footer">
                <div className="footer-container-social-media">
                    <h4 className="footer-subtitle-social-media">REDES SOCIAIS</h4>
                    <div className="footer-container-icons-social-media">
                        <i class="footer-icon-social-media 
                        footer-icon-instagram bi bi-instagram"></i>
                        <i class="footer-icon-social-media 
                        footer-icon-instagram bi bi-github"></i>
                        <i class="footer-icon-social-media 
                        footer-icon-linkedin bi bi-linkedin"></i>
                    </div>
                </div>
                <div className="footer-container-brand">
                    <Image 
                        src="/logo_cesar_augusto.png" 
                        className="img-logo" 
                        width="43" 
                        height="42" 
                        alt="Logo Cesar Augusto" 
                    />
                    <h4 className="footer-subtitle-brand">CESAR AUGUSTO</h4>
                </div>
                <div className="footer-container-contact">
                    <h4 className="footer-subtitle-contact">Contato</h4>
                    <ul className="footer-list-contact">
                        <li className="footer-item-contact">Telefone/Whatsapp: 55(11)951700736</li>
                        <li className="footer-item-contact">Email: cesar.guga2013@gmail.com</li>
                    </ul>
                </div>
            </footer>
        </>
    )
}


export default Home;