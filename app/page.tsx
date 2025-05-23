import StateManagementDemo from "@/components/StateManagementDemoLoader";

export default function Home() {
  return (
    <main className="prose dark:prose-invert prose-lg mx-auto max-w-[80ch] py-16 px-4">
      <h1>
        USE REACT, MEU AMIGO <br />
        <small className="text-sm font-bold font-sans">
          (OU QUALQUER FRAMEWORK MODERNO, ESPECIALMENTE PARA PROJETOS COMPLEXOS)
        </small>
      </h1>

      <ul className="sr-only">
        <li>
          <a href="#start">Conteúdo</a>
        </li>
        <li>
          <a href="#wtf">Qual é a ideia aqui?</a>
        </li>
        <li>
          <a href="#why">
            Por que considerar frameworks modernos em vez de HTML puro?
          </a>

          <ul>
            <li>
              <a href="#components">
                Componentes: construa uma vez, use em todo lugar
              </a>
            </li>
            <li>
              <a href="#ui">
                Atualizações de UI mais inteligentes e eficientes
              </a>
            </li>
            <li>
              <a href="#accessibility">
                Acessibilidade em escala: uma abordagem estruturada
              </a>
            </li>
            <li>
              <a href="#developer-experience">
                Experiência do desenvolvedor importa para produtividade
              </a>
            </li>
            <li>
              <a href="#performance">
                Performance vai além do carregamento inicial
              </a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#bloat">
            Mas e o &quot;bloat&quot;? O excesso de JavaScript? Meus usuários estão no dial-up!
          </a>
        </li>
        <li>
          <a href="#when">
            Quando usar React (ou um framework similar)?
          </a>
        </li>
        <li>
          <a href="#problem">
            O verdadeiro desafio não é o framework, mas como escolhemos nossas ferramentas
          </a>
        </li>
        <li>
          <a href="#footer">Rodapé</a>
        </li>
      </ul>
      <p id="start">
        Fala, dev! Tô aqui pra te contar uma história. Esse texto é uma adaptação do artigo do Kent C. Dodds, &quot;Just Use React&quot;, que por sua vez foi inspirado no site justfuckingusereact.com. O original era bem mais... digamos... colorido, mas o Kent fez uma versão mais amigável. E é isso que a gente quer aqui também!
      </p>
      <p>
        Sei que você já deve ter visto um monte de gente falando &quot;ah, usa HTML puro&quot;, &quot;mantém simples&quot;, ou &quot;minha página do GeoCities de 98 carrega mais rápido que seu SPA&quot;. E sabe o que? Eles não estão totalmente errados! Tem hora que o simples é realmente o melhor caminho.
      </p>
      <p>
        É tipo querer uma economia mais simples - parece bonito na teoria. Mas a web de hoje não é mais só um monte de páginas estáticas. É uma plataforma pra aplicações dinâmicas, espaços de trabalho colaborativos e experiências interativas. E pra isso, às vezes a gente precisa de ferramentas mais robustas que um simples botão bonito em HTML.
      </p>
      <h2 id="wtf">ENTÃO, QUAL É A IDEIA AQUI?</h2>
      <p>
        A ideia é simples: às vezes a complexidade não é uma escolha, é uma necessidade. Tentar fazer tudo com JavaScript puro e manipulação direta do DOM é tipo tentar construir um carro só com um martelo e uma chave de fenda. Até dá pra fazer, mas vai ser um pouco complicado!
      </p>
      <p>
        A gente tá aqui pra te mostrar as ferramentas que outros devs já criaram pra resolver problemas comuns. Assim você pode focar no que realmente importa: a lógica da sua aplicação e a experiência do usuário, em vez de ficar reinventando a roda.
      </p>
      <h2 id="why">
        POR QUE USAR FRAMEWORKS JAVASCRIPT EM VEZ DE HTML PURO?
      </h2>
      <p>
        Porque você provavelmente não tá fazendo só uma página estática. Você tá construindo algo interativo, dinâmico e que precisa funcionar bem - uma aplicação de verdade, não só um panfleto digital.
      </p>
      <p>
        Vou te mostrar por que React (ou Vue, Svelte, Angular, ou qualquer outro framework moderno) pode te ajudar, especialmente quando seu projeto começa a crescer:
      </p>

      <h3>
        HTML É LEGAL, MAS TEM LIMITES
      </h3>
      <p>
        &quot;Ah, mas HTML tem <code>&lt;details&gt;</code>, <code>&lt;dialog&gt;</code> e formulários!&quot; Sim, e são ótimos! Mas você já tentou fazer um editor colaborativo em tempo real ou um painel de trading só com isso? Vai ser um porre né?!
      </p>
      <p>
        O HTML te dá os tijolos básicos, mas frameworks te dão a estrutura toda pronta pra você construir algo mais complexo em cima.
      </p>
      <h3 id="state-management">GERENCIAR ESTADO É UM PARTE DA VIDA</h3>
      <p>
        Fazer um botão de &quot;curtir&quot; alternar uma classe é fácil. Agora imagina um painel com vários filtros, dados em tempo real de várias fontes, preferências do usuário e talvez até edição colaborativa. Com JavaScript puro, isso vira uma bagunça que nem você mesmo vai entender depois.
      </p>
      <p>
        Frameworks te dão jeitos mais organizados de lidar com isso. Sem eles, você vai acabar com variáveis globais espalhadas por todo lado, um código macarrônico e bugs que ninguém sabe de onde vêm.
      </p>
      <StateManagementDemo />
      <h3 id="components">COMPONENTES: FAZ UMA VEZ, USA EM TODO LUGAR</h3>
      <p>
        Lembra daquela vez que você copiou e colou aquele HTML da barra de navegação em várias páginas? E aí quando precisou adicionar um link novo, teve que atualizar em cada lugar? Que saco, né?
      </p>
      <p>
        Com frameworks como React, você faz um componente uma vez - com toda a estrutura, estilo e lógica dele - e depois é só usar onde precisar. Se precisar mudar algo, muda em um lugar só e pronto! Não é só uma questão de preguiça (que também é válida), é sobre manter o código organizado e consistente, especialmente quando você trabalha em equipe.
      </p>
      <h3 id="ui">
        ATUALIZAÇÕES DE INTERFACE MAIS ESPERTAS
      </h3>
      <p>
        Já tentou atualizar várias partes da página quando um dado muda? É tipo ter que dizer pra cada <code>&lt;span&gt;</code> e <code>&lt;div&gt;</code> o que fazer, e torcer pra não esquecer nenhum ou fazer a página inteira recarregar sem necessidade.
      </p>
      <p>
        Frameworks são mais espertos que isso. Você só diz como a interface deve ficar baseada nos dados, e ele se vira pra fazer as mudanças necessárias no DOM. É tipo ter um assistente que só repinta a parede que você mudou, em vez de redecorar a casa inteira.
      </p>
      <h3 id="accessibility">
        ACESSIBILIDADE SEM DOR DE CABEÇA
      </h3>
      <p>
        &quot;Só usa HTML semântico!&quot; - sim, isso é básico e importante. Mas e quando você precisa de algo mais complexo que as tags HTML padrão? Tipo uma tabela de dados com ordenação e filtros, ou um combobox que precisa ser acessível e ter autocomplete?
      </p>
      <p>
        Só colocar role=&quot;button&quot; em um <code>&lt;div&gt;</code> não resolve. Você precisa gerenciar atributos ARIA, foco, interações de teclado... É um trabalho chato e fácil de errar. Usando uma framework, você faz um componente acessível uma vez e reusa. Muito mais fácil manter tudo consistente e acessível assim, e vamos jogar a real? Devs são preguiçosos, quer coisa melhor que corrigir um bug que levaria horas usando apenas um minuto? Use o resto do tempo pra tomar café ou ler um artigo como este!
      </p>
      <h3 id="developer-experience">
        A EXPERIÊNCIA DO DEV TAMBÉM IMPORTA
      </h3>
      <p>
        Frases como &quot;Sem erros de hidratação! Sem tree-shaking!&quot; podem parecer legais, como se fossem complexidades que a gente deveria evitar. Mas na verdade, são soluções pra problemas reais que aparecem quando você tá construindo aplicações complexas.
      </p>
      <p>
        Tree-shaking, por exemplo, é tipo aquela limpeza que você faz no armário: em vez de levar todas as roupas quando vai viajar, você pega só o que vai usar. No código, é a mesma coisa - o bundler (como Webpack ou Rollup) analisa seu código e remove todo aquele JavaScript que você importou mas não está usando. É tipo ter um assistente faxineiro que limpa seu código automaticamente, deixando só o que realmente importa. Sem isso, você acaba enviando um monte de código morto pro navegador do usuário, deixando sua aplicação mais pesada sem necessidade.
      </p>
      <p>
        Ah, e o bundler? É tipo um organizador de festa: você tem várias coisas espalhadas (seus arquivos JavaScript, CSS, imagens...) e ele junta tudo de forma organizada, otimiza e entrega prontinho pro navegador. É como se você tivesse várias caixas de brinquedos espalhadas pela casa, e o bundler organiza tudo em uma única caixa, tirando o que não serve mais e deixando só o que você realmente usa. Webpack e Rollup são os bundlers mais populares, tipo os organizadores de festa mais conhecidos do mercado, os &quot;influencers&quot; de código! Rá!
      </p>
      <p>
        Não usar um framework não vai fazer esses problemas desaparecerem. Só significa que você vai ter que resolver tudo na mão - diffing de DOM, propagação de estado, code splitting... É tipo escolher construir cada parte de uma máquina complexa do zero, quando você poderia usar componentes prontos e otimizados. E olha só o que toda esta sopa de letrinha significa:
      </p>
      <ul>
        <li>
          <strong>Diffing de DOM:</strong> É tipo quando você tem duas versões de um documento e precisa marcar o que mudou. No React, é como ter um assistente que olha o que mudou na interface e atualiza só aquilo, em vez de recarregar tudo. É tipo quando você muda só uma foto no álbum, em vez de refazer o álbum inteiro.
        </li>
        <li>
          <strong>Propagação de estado:</strong> É como passar informações entre componentes. Tipo quando você tem um formulário e precisa que vários elementos saibam o que o usuário digitou. Sem um framework, é como tentar fazer várias pessoas se comunicarem sem WhatsApp - possível, mas trabalhoso e fácil de dar errado.
        </li>
        <li>
          <strong>Code splitting:</strong> É tipo dividir um livro grande em capítulos. Em vez de carregar todo o código de uma vez, você carrega só o que o usuário precisa naquele momento. É como entrar em um restaurante e pedir só o que você vai comer, em vez de trazer o cardápio inteiro pra mesa.
        </li>
      </ul>
      <p>
        É tipo escolher construir cada parte de uma máquina complexa do zero, quando você poderia usar componentes prontos e otimizados.
      </p>
      <h3 id="global-js-vars">
        VARIÁVEIS GLOBAIS DE JAVASCRIPT: UMA RELÍQUIA DO PASSADO
      </h3>
      <p>
        Sim, elementos HTML com id viram variáveis globais no JavaScript. Era uma &quot;funcionalidade&quot; da web antiga. Mas confiar nisso hoje em dia é pedir pra ter dor de cabeça.
      </p>
      <p>
        Isso polui o namespace global, pode causar conflitos de nomes difíceis de debugar, e deixa seu código mais frágil. E acredite, seu eu do futuro vai te agradecer por não ter feito isso.
      </p>
      <p>
        Frameworks te guiam pra padrões mais robustos: componentes com escopo próprio, fluxo de dados claro (como props), e soluções dedicadas pra gerenciar estado. Não é HTML &quot;precisando de muleta&quot;, é evitar armadilhas que existem na web desde sempre.
      </p>
      <h3 id="developer-experience">
        FERRAMENTAS BOAS = DEV FELIZ = CÓDIGO MELHOR
      </h3>
      <p>
        Pensa em coisas como Hot Module Replacement (ver mudanças instantaneamente sem perder o estado), TypeScript te avisando de erros antes de rodar, um monte de bibliotecas prontas pra tudo que você imaginar, e ferramentas de debug e formatação de código. Uma Disney World do programador!
      </p>
      <p>
        Frameworks, especialmente os mais maduros como React, vêm com um ecossistema que torna o desenvolvimento mais produtivo e até divertido. Isso geralmente significa construir aplicações melhores, mais rápido. Fingir que lidar com inconsistências de navegador e JavaScript antigo é mais &quot;virtuoso&quot; só vai te atrasar em projetos complexos.
      </p>
      <h3 id="performance">
        PERFORMANCE É MAIS QUE CARREGAMENTO RÁPIDO
      </h3>
      <p>
        &quot;Meu site HTML carrega em 50ms!&quot; Legal! Mas e quando você adiciona login, busca dinâmica, filtros, ordenação e atualizações em tempo real? Como fazer tudo isso sem a página travar ou ficar lenta?
      </p>
      <p>
        Frameworks, especialmente quando combinados com meta-frameworks como Next.js ou Remix, te dão ferramentas pra uma abordagem completa de performance. Isso inclui code-splitting (carregar só o JavaScript necessário), server-side rendering (SSR) ou static site generation (SSG) pra carregamentos rápidos, e navegação suave no cliente. O objetivo é construir uma aplicação que performa bem, não só uma página que carrega rápido mas não faz muita coisa.
      </p>
      <h2 id="bloat">
        MAS E TODO AQUELE JAVASCRIPT EXTRA?
      </h2>
      <p>
        É verdade: uma aplicação &quot;Hello World&quot; em um framework vai ter mais JavaScript que uma página HTML pura. Mas vamos ser sinceros: quantas aplicações reais são simples assim? Se você tá fazendo um site de 5 páginas que não muda nunca, então sim, HTML e CSS são mais que suficientes. Não precisa de uma escavadeira pra plantar uma flor.
      </p>
      <p>Mas se você tá fazendo:</p>
      <ul>
        <li>Uma plataforma SaaS</li>
        <li>Um e-commerce com carrinho complexo e contas de usuário</li>
        <li>Um feed de rede social que atualiza em tempo real</li>
        <li>Uma ferramenta de gestão de projetos com várias funcionalidades</li>
        <li>Um painel de dados interativo</li>
        <li>Qualquer coisa que precise de interatividade e estado que funcione direito e seja fácil de manter</li>
      </ul>
      <p>
        ...então aquele JavaScript extra do framework é tipo um investimento na infraestrutura que você vai precisar de qualquer jeito. Ferramentas modernas como tree-shaking, code-splitting e lazy loading ajudam muito a reduzir esse custo. É sobre usar a ferramenta certa pro trabalho, não ficar preso no que você já conhece quando algo mais especializado faria mais sentido.
      </p>
      <h2 id="when">
        ENTÃO, QUANDO VALE A PENA USAR REACT (OU ALGO PARECIDO)?
      </h2>
      <ul>
        <li>
          Quando você tem um monte de estado pra gerenciar na interface e não quer virar um maluco tentando controlar tudo na mão.
        </li>
        <li>
          Quando você tá cansado de copiar e colar o mesmo código em 50 lugares diferentes e depois ter que atualizar cada um deles.
        </li>
        <li>
          Quando você quer que sua aplicação se comporte como um app de verdade, sem aquela sensação de estar recarregando a página toda hora.
        </li>
        <li>
          Quando você trabalha em equipe e não quer que cada um faça as coisas do seu jeito, criando uma bagunça sem fim.
        </li>
        <li>
          Quando você olha pro código e pensa &quot;se eu fizer isso com JavaScript puro, vai virar um espaguete que nem eu mesmo vou entender amanhã&quot;.
        </li>
        <li>
          Quando você quer usar um monte de ferramentas legais que já foram testadas e aprovadas por milhares de devs.
        </li>
        <li>
          Quando você precisa entregar algo complexo rápido e não tem tempo pra reinventar a roda.
        </li>
      </ul>
      <h2 id="problem">
        O PROBLEMA NÃO É O FRAMEWORK, É A GENTE MESMO!
      </h2>
      <p>
        Olha só, às vezes a gente complica o que é simples. É tipo usar um trator pra plantar uma flor no jardim - exagero total! Tem hora que HTML e CSS puro são mais que suficientes.
      </p>
      <p>
        Mas não vamos jogar fora as ferramentas boas só porque tem gente usando elas errado. React e outros frameworks são tipo aquelas ferramentas que todo marceneiro bom tem na caixa - não é porque tem gente que não sabe usar que a ferramenta é ruim.
      </p>
      <p>
        Então, na próxima vez que você for fazer uma aplicação web que precisa de mais do que mostrar um texto bonito, DÁ UMA CHANCE PRO REACT (OU ALGO PARECIDO). Não é sobre ser purista, é sobre usar o que funciona melhor. Seus usuários vão agradecer, e seu eu do futuro que vai ter que manter o código também!
      </p>
      <p>
        Agora vai lá e faz algo legal! Usa as ferramentas certas pro seu projeto, sem complicar o que é simples, mas também sem simplificar o que é complexo.
      </p>
      <h2 id="footer" className="sr-only">
        RODAPÉ
      </h2>
      <p>
        <strong>Criado por:</strong>
        <br />
        <span>
          Omercan (
          <a
            href="https://github.com/obsfx"
            target="_blank"
            rel="noopener noreferrer"
            title="Ver perfil do GitHub do Omercan"
          >
            GitHub
          </a>{" "}
          /
          <a
            href="https://x.com/obsfx"
            target="_blank"
            rel="noopener noreferrer"
            title="Ver perfil do X do Omercan"
          >
            Twitter
          </a>{" "}
          /
          <a
            href="https://bsky.app/profile/omercan.io"
            target="_blank"
            rel="noopener noreferrer"
            title="Ver perfil do Bluesky do Omercan"
          >
            Bluesky
          </a>
          )
        </span>
        <br />
        <span>
          Burak (
          <a
            href="https://github.com/burakcan"
            target="_blank"
            rel="noopener noreferrer"
            title="Ver perfil do GitHub do Burak"
          >
            GitHub
          </a>{" "}
          /
          <a
            href="https://x.com/neoberg"
            target="_blank"
            rel="noopener noreferrer"
            title="Ver perfil do X do Burak"
          >
            Twitter
          </a>{" "}
          /
          <a
            href="https://bsky.app/profile/burakcan.me"
            target="_blank"
            rel="noopener noreferrer"
            title="Ver perfil do Bluesky do Burak"
          >
            Bluesky
          </a>
          )
        </span>
      </p>
      <p>
      <strong>Traduzido por:</strong>
        <br />
        <span>
          Rudwolf (Rodolfo Rodrigues) (
          <a
            href="https://github.com/rudwolf"
            target="_blank"
            rel="noopener noreferrer"
            title="Ver meu perfil do GitHub"
          >
            GitHub
          </a>{" "}
          /
          <a
            href="https://x.com/rudwolf"
            target="_blank"
            rel="noopener noreferrer"
            title="Ver meu perfil do X"
          >
            Twitter
          </a>)
        </span>
        <br />
      </p>
      <p>
        Inspirado por{" "}
        <a
          href="https://justfuckingusehtml.com/"
          target="_blank"
          rel="noopener noreferrer"
          title="Ver justfuckingusehtml.com"
        >
          justfuckingusehtml.com
        </a>
      </p>
      <p>
        <strong>
          <a
            href="https://github.com/rudwolf/just-fucking-use-react-pt_br"
            target="_blank"
            rel="noopener noreferrer"
            title="Ver o código fonte no GitHub"
          >
            Ver o código fonte no GitHub da minha versão
          </a>
        </strong>
      </p>
      <p>
        <strong>
          <a
            href="https://github.com/burakcan/just-fucking-use-react"
            target="_blank"
            rel="noopener noreferrer"
            title="Ver o código fonte no GitHub"
          >
            Ver o código fonte original do burakcan no GitHub
          </a>
        </strong>
      </p>
    </main>
  );
}


