import React from 'react';
import ReactDOM from 'react-dom/client';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<h1> Maneira atual </h1>);



// const page = (
//   <main>
//   <section>
//     <h1>Estou Aprendendo React</h1>
//     <p> O desafio agora é criar um objeto com mais elementos dentro; pelo menos 4</p>
//   </section>
//   <article>
//     <h2>Metodologia de Ensino</h2>
//     <p> Reamente é impressionante como isto muda a maneira de absorvermos um conteudo, talvez o professor de ontem seja muito bom, porém com uma linguagem voltada para pessoas com mas bagagem.</p>
//   </article>
//   <aside>
//     <h3>Será que é ele reconhece formulários?</h3>
//     <p>Vou adicionar um formulario abaixo para ver o que acontece...</p>
//     <form>
//       <label for="imsg">Deixe a Sua Mensagem:</label>
//       <input type="text" name="msg" id="imsg" placeholder="deixe a qui a sua msg!"/>
//     </form>
//   </aside>
// </main>
// )

// ReactDOM.createRoot(document.querySelector("#root")).render(page);


//DESAFIO DE CRIAR A PRIMEIRA PAGINA CLONE DO PROFESSOR.

// const page =(
//   <main>    
//   <img src="../react-logo.png" alt="logo React"/>
//   <h1>Fun facts about React</h1>
//   <ul>
//     <li>Was first released in 2013</li>
//     <li>Was originally created by Jordan Walke</li>
//     <li>Has Well over 100K stars on Github</li>
//     <li>is maintained by Facebook</li>
//     <li>Powers thousands of enterpise apps, including mobile apps</li>
//   </ul>  
// </main>
// )

// const root =(
//   ReactDOM.createRoot(document.querySelector("#root")))
//   root.render(page)

//ENTENDENDO AS FUNÇÕES COMO TIPO DE VARIAVEIS
function Page(){
  return (
    <div>
      <h1>Hoje eu vou</h1>
      <p>Teste como variaveis e funções</p>
    </div>
  )
}
ReactDOM.createRoot(document.querySelector("#root")).render(<Page />)