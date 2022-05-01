import React, {useEffect, useState} from "react";
import Image from "next/image";
import { Link, animateScroll as scroll } from "react-scroll";

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

function openTechnologies() {
    if (typeof window !== "undefined") {
        var technologiesBox = document.getElementById('technologiesBox');
        var designBox = document.getElementById('designBox');
        var textDesignTab = document.getElementById('textDesignTab');
        var textTechnologieTab = document.getElementById('textTechnologieTab');
        textTechnologieTab.classList.add("active")
        textDesignTab.classList.remove("active")
        designBox.style.height = "0";
        technologiesBox.style.height = "max-content";
    }
}

function openDesigns() {
        var technologiesBox = document.getElementById('technologiesBox');
        var designBox = document.getElementById('designBox');
        var textDesignTab = document.getElementById('textDesignTab');
        var textTechnologieTab = document.getElementById('textTechnologieTab');
        textDesignTab.classList.add("active")
        textTechnologieTab.classList.remove("active")
        technologiesBox.style.height = "0";
        designBox.style.height = "max-content";
}


function Home() {
    const [technologiesJson, setTechnologiesJson] = useState([]);
    useEffect(() => {
        fetch("../database/technologies.json")
        .then(response => {
            return response.json();
        })
        .then(jsonData => {
            var arrayJson = []
            for(var i = 0; i < jsonData.Technologies.length; i++) {
                var jsonString = JSON.stringify(jsonData.Technologies[i]);
                arrayJson.push(JSON.parse(jsonString));
            }
            setTechnologiesJson(arrayJson);
        })
    });


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
                        <i onClick={openMenu} className="icon-menu bi bi-list"></i>
                    </div>
                    <div id="side-bar" className="container-fluid container-nav-bar nav-side-bar-mobile">
                        <i onClick={closeMenu} className="icon-close-menu bi bi-arrow-right-short"></i>
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
                                <Link 
                                id="linkAboutMe" 
                                className="nav-list-item" 
                                to="sectionAboutMe"
                                activeClass={"linkActive"} 
                                spy={true} 
                                smooth={true} 
                                duration={500} >SOBRE</Link>
                                <Link
                                activeClass={"linkActive"}
                                id="linkPortifolio" 
                                className="nav-list-item"
                                to="sectionProjects" 
                                spy={true} 
                                smooth={true} 
                                duration={500} >PORTIFOLIO</Link>
                                <Link
                                activeClass={"linkActive"}
                                id="linkTecnologiess" 
                                className="nav-list-item" 
                                to="sectionTechnologies" 
                                spy={true} 
                                smooth={true} 
                                duration={500} >TECNOLOGIAS</Link>  
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
                    <h3 className="subtitle-banner" >DESENVOLVEDOR FULL STACK</h3>
                    <h3 className="subtitle-banner" >Desenvolvendo soluções criativas e inovadoras</h3>
                </div>
            </section>
            <section id="sectionAboutMe" className="section-about-me container col-xxl-8 px-4 py-5">
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
                            Meu nome é Cesar Augusto, tenho 19 anos, sou programador junior, 
                            graduado em Análise e Desenvolvimento de Sistemas
                            na faculdade Bandtec(atual São Paulo Tech School, 2020-2021). 
                            Adquiri um amplo 
                            conhecimento técnico através de projetos 
                            acadêmicos com os principais conceitos 
                            trabalhados no mercado da tecnologia. 
                        </p>
                        <p className="paragraph-about-me lead">
                            Trabalhei como estagiário(Analista de suporte) na TIVIT desde Outubro de 2020 até Dezembro
                            de 2021 e atualmente estou a procura de uma nova oportunidade.
                            Meu objetivo profissional sempre estudar novas tecnologias, até ser proficiente nelas.
                            Também tenho interesse em lecionar programação futuramente.
                        </p>
                    </div>
                </div>
            </section>
            <section id="sectionTechnologies" className="section-technologies">
                <h2 className="technologies_title">Tecnologias e Designs de Software</h2>
                <nav className="technologies_nav nav nav-tabs">
                    <div onClick={openTechnologies} id="technologieTab" className="nav-item">
                        <span id="textTechnologieTab" className="technologies_nav_link active nav-link" aria-current="page">Technologias</span>
                    </div>
                    <div onClick={openDesigns} id="designTab" className="nav-item">
                        <div id="textDesignTab" className="technologies_nav_link nav-link">Designs de Software</div>
                    </div>
                </nav>
                <div id="technologiesBox" className="technologies_box">
                    {
                        technologiesJson.map((item) => {
                            return(
                                <div 
                                id="technologie" 
                                className="technologie" 
                                data-bs-toggle="tooltip" 
                                data-bs-html="true" 
                                title={item.time_experience}>
                                    <Image 
                                        src={item.icon_src}
                                        className="technologie_icon"
                                        width={item.icon_width}
                                        height={item.icon_height}  
                                    />
                                    <span className="technologie_name">{item.name}</span>
                                </div>
                            )
                        })
                    }
                </div>
                <div id="designBox" className="designs_box">
                    <ul className="designs_list">
                        <li className="designs_item" >Metodologia SCRUM</li>
                        <li className="designs_item" >Backlogs</li>
                        <li className="designs_item" >Product Backlogs</li>
                        <li className="designs_item" >Programação Orientada a Objetos(POO, OO)</li>
                        <li className="designs_item" >Programação funcional</li>
                        <li className="designs_item" >UX/UI</li>
                    </ul>
                    <ul className="designs_list">
                        <li className="designs_item" >Diagramas(Classes, DER, MER, BPMN)</li>
                        <li className="designs_item" >Design de Arquitetura</li>
                        <li className="designs_item" >Figma</li>
                        <li className="designs_item" >Wireframes</li>
                        <li className="designs_item" >HLD/LLD</li>
                        <li className="designs_item" >User Stories</li>
                    </ul>
                </div>
 
            </section>
            <section id="sectionProjects" className="section-projects">
                <h2 className="title-projects">
                    PORTIFOLIO
                </h2>
                <div className="projects-cards">
                    <a className="card" href="https://github.com/cesar-augusto-alves-barbosa/Mind6">
                        <div className="card-img-top">
                        <Image 
                            src="/Logo-DotControl-Tec-white.png"
                            className="card-project-img-controltech card-project-img"
                            width="170"
                            height="90"    
                        />
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">.CONTROLTEC</h5>
                            <p className="card-text">
                                Software de monitoração de componentes e aplicativos de computadores escolares. 
                            </p>
                            <div className="card-click">
                                <span className="card-subtitle-click">Saiba mais</span>
                                <i className="card-click-hand bi bi-hand-index-thumb"></i>
                            </div>
                        </div>
                    </a>
                    <a className="card" href="https://github.com/cesar-augusto-alves-barbosa/Tune-up">
                        <div className="card-img-top">
                        <Image 
                            src="/ems-tuneup-branco.svg"
                            className="card-project-img-controltech card-project-img"
                            width="220"
                            height="120"    
                        />
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">EMS</h5>
                            <p className="card-text">
                                Esse projeto apresenta o desenvolvimento de uma plataforma para utilização em oficinas mecânicas. 
                            </p>
                            <div className="card-click">
                                <span className="card-subtitle-click">Saiba mais</span>
                                <i className="card-click-hand bi bi-hand-index-thumb"></i>
                            </div>
                        </div>
                    </a>
                    <a className="card" href="https://github.com/cesar-augusto-alves-barbosa/godzilla-local-fIlms">
                        <div className="card-img-top">
                        <Image 
                            src="/Godzilla.png"
                            className="card-project-img-controltech card-project-img"
                            width="90"
                            height="130"    
                        />
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">Godzilla Local Films</h5>
                            <p className="card-text">
                            Projeto de desenvolvimento de uma API para uma empresa de locadora de filmes chamada Godzilla.
                            </p>
                            <div className="card-click">
                                <span className="card-subtitle-click">Saiba mais</span>
                                <i className="card-click-hand bi bi-hand-index-thumb"></i>
                            </div>
                        </div>
                    </a>
                </div>
            </section>
            <footer className="footer">
                <div className="footer-container-social-media">
                    <h4 className="footer-subtitle-social-media">REDES SOCIAIS</h4>
                    <div className="footer-container-icons-social-media">
                        <a className="footer_link_social_media" href="https://www.instagram.com/cesar.guga2013/" ><i 
                            className="footer-icon-social-media 
                            footer-icon-instagram bi bi-instagram"></i></a>
                        <a className="footer_link_social_media" href="https://github.com/cesar-augusto-alves-barbosa">
                            <i  
                            className="footer-icon-social-media 
                            footer-icon-github bi bi-github"></i>
                        </a>
                        <a className="footer_link_social_media" href="https://www.linkedin.com/in/cesar-augusto-b55b7b1a5/" > 
                            <i 
                            className="footer-icon-social-media 
                            footer-icon-linkedin bi bi-linkedin"></i>
                        </a>
                        
                        
                       
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