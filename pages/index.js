import React from "react";
import Image from 'next/image';
import ImgProfile from '../images//perfil_cesar_augusto.png';

function Home() {
    return (
        <>
            <head className="head_banner_code">
                <figure className="wrapper_profile_img">
                    <Image src={ImgProfile} className="rounded-full" alt="Imagem de perfil de cesar augusto" />
                </figure>
                <div className="box_txt_banner_code">
                    <h1 className="name_banner_code">
                        Cesar Augusto Alves Barbosa
                    </h1>
                    <h2 className="title_banner_code">
                        Desenvolvedor Full Stack Júnior
                    </h2>
                    <h3 className="sub_title_banner_code">
                        desenvolvendo soluções criativas e inovadoras
                    </h3>
                </div>
            </head>
            <main className="main_container_index" >
                <h2 className="main_container_index" >
                    Content
                </h2>
            </main>
        </>
    )
}

export default Home;