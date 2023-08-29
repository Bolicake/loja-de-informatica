import React from "react";
import Head from "next/head";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function Home() {
    return <div>
        <Head>
            <meta charset="UTF-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <title>Loja de Informática do Obama</title>
            <link rel="shortcut icon" href="../public/images/MicrosoftTeams-image.png" type="image/x-icon"/>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
            <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,700;1,600;1,700&display=swap" rel="stylesheet"/>
        </Head>
        <header class="cabecalho">
        <h1 class="logo"><a href="http://" tittle="Loja de informática do Obama">Loja de informática do Obama</a></h1>
        <form action="" method="post">
            <input type="text" name="pesquisa" id="pesquisa" placeholder="Faça uma busca"/>
            <button type="button"><FontAwesomeIcon icon={faSearch} /></button>

        </form>
    </header>
    <nav class="menu">
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Produtos</a></li>
            <li><a href="#">Serviços</a></li>
            <li><a href="#">Contato</a></li>
        </ul>
        <div class="social-icons">
            <a href="#" class="btn-facebook"><i class="fa-brands fa-facebook-f"></i></a>
            <a href="#" class="btn-x-twitter"><i class="fa-brands fa-x-twitter"></i></a>
            <a href="#" class="btn-google"><i class="fa-brands fa-google"></i></a>
        </div>
    </nav>
    <main class="principal">
        <article class="sobre">
            <h2>Sobre Nós</h2>
            <Image src='/images/couple.png' 
            width={300} 
            height={300} 
            alt="Casal dormado por homem e mulher de cor calcasiana, ambos de estatura mediana, homem com cabelo preto e camisa social azul clara e mulher loira com camisa social azul clara e saia cinza. Ambos estão abraçados, próximos de uma bancada com diversos computadores. Em frente encontra-se um vendedor de cor branca, com cabelo grisalho e camisa branca."  type="image/x-icon" 
            />
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet ut earum, repellat neque vero laudantium rerum error esse aliquam cupiditate quod tenetur dolores totam dolor harum labore quae nemo eaque.</p>
            <p>Sunt, accusantium earum! Harum accusantium quod dicta aperiam aliquam assumenda nulla molestias alias maxime at sint fugit molestiae culpa, consequatur nostrum quasi, odit eos temporibus quis unde vel dolorum veritatis!</p>
            <p>Similique quis, dolores qui quas voluptates ipsa eveniet quia laborum. Optio vitae in fugiat ducimus perspiciatis exercitationem aut neque vero dolorem quidem. Provident consequatur exercitationem ipsa. Asperiores temporibus quo quae!</p>
            <p>Officia doloremque maxime similique quos sint quo dolores, beatae nostrum, rerum officiis expedita culpa tempora dolorem sequi asperiores optio, repellendus deserunt eaque ea eveniet illo. Nesciunt inventore quis temporibus necessitatibus!</p>
            <p>Iste error sapiente commodi quasi nisi sed temporibus voluptatem repellat, aut dolores. Facere, qui non nesciunt, pariatur facilis, voluptas veniam dignissimos sapiente tempore commodi iste dolorum ratione nam dolore illum.</p>
            <p>Voluptates unde molestiae corporis necessitatibus, rem soluta vel aliquam ex explicabo autem ad nobis assumenda itaque, doloribus cumque quo? Illum deserunt animi beatae distinctio corrupti eius modi et molestias sequi.</p>
            <p>Reiciendis vel nihil quis tenetur asperiores ad voluptates quia, vero iusto, accusantium unde eaque rem quas, tempore perspiciatis. Nisi architecto consequuntur dignissimos excepturi. Minus tempora, provident id molestias mollitia perspiciatis.</p>
        </article>
        <aside class="onde-estamos">
            <h2>Onde Estamos</h2>
            <p>Rua: Tito, 54 - Pompéia - São Paulo</p>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.122705982707!2d-46.69439032547243!3d-23.528088660369043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cef8775663b04f%3A0x923835e9005f8309!2sSenac%20Lapa%20Tito!5e0!3m2!1spt-BR!2sbr!4v1692633602523!5m2!1spt-BR!2sbr" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </aside>
    </main>
    </div>
}

export default Home;