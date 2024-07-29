import React, { useEffect, useState } from "react";
import Image from "next/future/image";
import Job from "../components/Job.js";
import { RiRocketFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa6";
import { Link } from "react-scroll";
import { useInView } from "react-intersection-observer";
import ProjectCard from '../components/ProjectCard';

if (typeof window !== "undefined") {
    window.addEventListener('scroll', () => {
        var nav = document.getElementById('nav-bar');
        nav.classList.toggle('sticky-nav', window.scrollY > 200);
    });
}

function closeMenu() {
    if (typeof window !== "undefined") {
        var nav = document.getElementById('side-bar');
        nav.style.display = "none";
    }
}

function openMenu() {
    if (typeof window !== "undefined") {
        var nav = document.getElementById('side-bar');
        nav.style.display = "flex";
    }
}

function Home() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [jobs, setJobs] = useState([]);
    const [expandedIndex, setExpandedIndex] = useState(null);
    const [projects, setProjects] = useState([]);

    const { ref: containerExperienceRef, inView: containerExperienceInView } = useInView({
        threshold: 0.3,
        triggerOnce: true,
    });

    const { ref: sectionAboutMeRef, inView: sectionAboutMeInView } = useInView({
        threshold: 0.3,
        triggerOnce: true,
    });

    useEffect(() => {
        const createStars = () => {
            let count = 20;
            let scene = document.getElementById('sceneStars');
            let i = 0;
            while (i < count) {
                let star = document.createElement('div');
                star.classList.add('star');
                let x = Math.floor(Math.random() * scene.offsetWidth);
                let duration = Math.random();
                let h = Math.random() * 100;
                star.style.left = x + 'px';
                star.style.width = 1 + 'px';
                star.style.height = h + 'px';
                star.style.position = 'absolute';
                star.style.backgroundColor = '#333';
                star.style.animationDuration = duration + 's';
                
                scene.appendChild(star);
                i++;
            }
        };

        createStars();
    }, []);

    useEffect(() => {
        fetch("../database/jobs.json")
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro ao consultar tecnologias');
            }
            return response.json();
        })
        .then(jsonData => {
            var arrayJson = [];
            for (var i = 0; i < jsonData.jobs.length; i++) {
                var jsonString = JSON.stringify(jsonData.jobs[i]);
                arrayJson.push(JSON.parse(jsonString));
            }
            setJobs(arrayJson);
        })
        .catch(e => {
            console.log("Exceção: " + e);
        });
    }, []);

    useEffect(() => {
        fetch("../database/projects.json")
          .then(response => {
            if (!response.ok) {
              throw new Error('Erro ao consultar projetos');
            }
            return response.json();
          })
          .then(jsonData => {
            setProjects(jsonData.projects);
          })
          .catch(e => {
            console.log("Exceção: " + e);
          });
      }, []);

    useEffect(() => {
        if (containerExperienceInView) {
            const container = document.getElementById('containterExperience');
            container.classList.remove('no-animations');
        }
    }, [containerExperienceInView]);

    useEffect(() => {
        if (sectionAboutMeInView) {
            const container = document.getElementById('sectionAboutMe');
            container.classList.remove('no-animations');
        }
    }, [sectionAboutMeInView]);

    const handleClick = (index) => {
        setCurrentIndex(index);
    };

    const handleExpand = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };
    return (
        <>  
            <div className="home">
                <nav id="nav-bar" className="navbar-transparent navbar fixed-top navbar-expand-lg">
                    <div className="container-navbar-mobile container-fluid">
                        <a className="navbar-brand nav-bar-mobile nav-bar-mobile-brand" href="/">
                            <Image 
                                src="/images/logo_cesar_augusto.png" 
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
                                src="/images/logo_cesar_augusto.png" 
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
                                id="linkTrajetoria" 
                                className="nav-list-item"
                                to="sectionExperience" 
                                spy={true} 
                                smooth={true} 
                                duration={500} >TRAJETORIA</Link>
                            <Link
                                activeClass={"linkActive"}
                                id="linkTecnologies" 
                                className="nav-list-item" 
                                to="sectionProjects" 
                                spy={true} 
                                smooth={true} 
                                duration={500} >PROJETOS</Link>  
                        </li>
                    </div>   
                </nav> 
                <section className="banner-home">
                    <div className="blob-box">
                        <Image 
                            src="/images/iconsvg1.svg" 
                            className="img-blob-banner-home-left" 
                            width="350" 
                            height="229" 
                            alt="imagem de pontos circulares" 
                            priority={true}
                        />
                        <Image 
                            src="/images/iconsvg1.svg" 
                            className="img-blob-banner-home-right" 
                            width="350" 
                            height="229" 
                            alt="imagem de pontos circulares" 
                            priority={true}
                        />
                    </div>
                    <div
                        className="img-logo-banner" 
                        alt="Logo Cesar Augusto" 
                    ></div>
                    <div className="container-titles-banner">
                        <h1 className="title-banner" >CESAR AUGUSTO</h1>
                        <h3 className="subtitle-banner" >Desenvolvedor e Analista de Software</h3>
                        <h3 className="subtitle-banner" >Desenvolvendo soluções criativas e inovadoras</h3>
                    </div>
                    <div className="buttons-banner">
                        <a href="/documents/Cesar_Augusto_Alves_Barbosa.pdf" download>
                            <button className="dowloadcv-button-banner">Baixar CV</button>
                        </a>
                    </div>
                </section>
                <section id="sectionAboutMe" className={`section-about-me  ${sectionAboutMeInView ? 'section-about-me-visible' : 'no-animations'}`} ref={sectionAboutMeRef} >
                    <div className="blob-box-about">
                        <Image 
                            src="/images/iconsvg2.svg" 
                            className="img-blob-about-home-left" 
                            width="350" 
                            height="229" 
                            alt="imagem de pontos circulares" 
                        />
                        <Image 
                            src="/images/iconsvg2.svg" 
                            className="img-blob-about-home-right" 
                            width="350" 
                            height="229" 
                            alt="imagem de pontos circulares" 
                        />
                    </div>
                    <div className="container-about-blobs">
                        <div className="container-about-me row align-items-center g-5 py-5">
                            <div className="container-image-profile col-10 col-sm-8 col-lg-6">
                                <Image 
                                    src="/images/perfil_cesar_augusto.png"
                                    className="image-profile-about-me shadow-lg mx-lg-auto img-fluid"
                                    width="300"
                                    height="270"
                                    alt="Eu Cesar Augusto"
                                />
                            </div>
                            <div className="container-paragraphs-about-me col-lg-6">
                                <h1 className="title-about-me display-5 fw-bold lh-1 mb-3">Sobre mim</h1>
                                <p className="paragraph-about-me lead">
                                    Graduado aos 19 anos, tenho desenvolvido uma sólida base técnica ao participar ativamente de 
                                    projetos acadêmicos focados em conceitos essenciais do mercado de tecnologia. 
                                    Possuo conhecimentos e experiência prática em uma variedade de tecnologias, incluindo Java, JavaScript, Spring Boot e PLSQL (Oracle). 
                                    Além disso, estou constantemente expandindo meu repertório técnico e atualmente estudo outras tecnologias emergentes, como 
                                    React, React Native e Next.js, para me manter na vanguarda das inovações no desenvolvimento de software. 
                                </p>
                            </div>
                        </div>               
                    </div>
                </section>
                <section id="sectionExperience" className="section-experience">
                    <h2 className="experience_title">Trajetória</h2>
                    
                    <div id="containterExperience" className={`container-experience ${containerExperienceInView ? 'container-experience-visible' : 'no-animations'}`} ref={containerExperienceRef}>
                        <div className="rocket-conteiner-scene">
                            <div id="sceneStars" className="scene-stars">
                            </div>
                            <div className="rocket-conteiner">
                                <div className="rocket-box">
                                    <RiRocketFill alt="foguete" className="experience-rocket" />
                                </div>
                            </div> 
                        </div>
                        <div className="experiences-box">
                            <div className="carousel">
                                {jobs.map((job, index) => (
                                    <Job
                                        key={index}
                                        job={job}
                                        isActive={index === currentIndex}
                                        isExpanded={index === expandedIndex}
                                        onClick={() => handleClick(index)}
                                        onExpand={() => handleExpand(index)}
                                        className={`job ${index === currentIndex ? 'active' : ''} ${index === expandedIndex ? 'expanded' : ''}`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
                <section id="sectionProjects" className="section-projects">
                    <h2 className="title-projects">
                        Projetos
                    </h2>
                    <div className="projects-cards">
                        {projects.map(project => (
                            <ProjectCard
                            key={project.id}
                            title={project.title}
                            description={project.description}
                            imageUrl={project.imageUrl}
                            technologies={project.technologies}
                            width={project.width}
                            height={project.height}
                            />
                        ))}
                    </div>
                </section>
            </div>
            <footer id="footer" className="footer">
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
                        src="/images/logo_cesar_augusto.png" 
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
                        <li className="footer-item-contact">Email: dev.cesar.augusto.alves@gmail.com</li>
                    </ul>
                </div>
            </footer>
        </>
    )
}

export default Home;