import { RepositoryItem } from "./RepositoryItem";
import '../styles/repositories.scss';
import { useState, useEffect } from "react";

/** useEffect serve para disparar uma 
 * função quando algo acontecer na aplicação */

/**Ele declara um variável state. Nossa
 * variável é chamada de count mas poderíamos 
 * chamar de qualquer coisa, como banana. Esta 
 * é uma maneira de “preservar” alguns valores 
 * entre as chamadas de funções — useState é 
 * uma nova maneira de usar as mesmas capacidades 
 * que o this.state tem em uma classe. Normalmente, 
 * variáveis “desaparecem” quando a função sai mas 
 * variáveis de state são preservadas pelo React. */

// https://api.github.com/orgs/rocketseat/repos

/* React Hook é uma feature que permite
   que você use estado e outras features
   do React sem ter a necessidade de escrever
   uma classe. Com React Hook você vai poder:
   Utilizar estado em funções que são componentes.
   Executar funções quando o componente é montado
   e quando ele vai desmontar. e sempre iniciam por "use"*/

export function RepositoryList() {
    const [repositories, setRepositories] = useState([])

/** A API Fetch fornece uma interface 
 * JavaScript para acessar e manipular 
 * partes do pipeline HTTP, tais como os 
 * pedidos e respostas. Ela também fornece o 
 * método global fetch() (en-US) que fornece uma 
 * maneira fácil e lógica para buscar recursos de 
 * forma assíncrona através da rede. */

    useEffect(() => {
        fetch('https://api.github.com/orgs/rocketseat/repos')
        .then(response => response.json())
        .then(data => setRepositories(data))
    }, []);/** "[nesses colchetes]" vão as dependencias, ou seja, 
                            quais são as informações que quando mudarem o 
                            "useEffect" vai executar de novo. */

//**NUNCA deixar de passar o segundo parametro.** caso isso ocorra, o useEffect entra em Looping.

    return(
        <section className="repository-list">
            <h1>Lista de Repositorios</h1>

            <ul>
            {repositories.map(repository => {
                return <RepositoryItem key={repository.name} repository={repository}/>
            })}
            
            </ul>
        </section>
    );
}