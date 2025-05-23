import StateManagementDemo from "@/components/StateManagementDemoLoader";

export default function Home() {
  return (
    <main className="prose dark:prose-invert prose-lg mx-auto max-w-[80ch] py-16 px-4">
      <h1>
        USE REACT, MEU AMIGO <br />
        <small className="text-xs font-bold font-sans">
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
            Mas e o "bloat"? O excesso de JavaScript? Meus usuários estão no dial-up!
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
        Adaptado livremente do artigo de Kent C. Dodds, “Just Use React”, para o contexto dos desenvolvedores de front end do Brasil, com uma linguagem mais próxima do nosso dia a dia. Que por sua vez foi adaptado também do artigo no site justf***ingusereact.com. O original usa linguagem forte para dar ênfase ao humor (e palavrões), porém Kent C. Dodds o refez para uma versão mais amigável. Esse é realmente o ponto principal.
      </p>
      <p>
        Dito isso, há pontos interessantes na postagem, portanto, esta versão visa a transmitir a mensagem principal sem palavrões ou linguagem grosseira. Basicamente, apenas entreguei o original à IA e pedi que o tornasse mais agradável. Estou publicando-a aqui em parte como uma piada e também porque ler palavrões me dói a cabeça.
      </p>
      <p>
        Entendo sua preocupação. Você provavelmente já viu discussões defendendo "HTML puro", "mantenha simples", ou comentários como "Minha página do GeoCities de 98 ainda carrega mais rápido que seu SPA". São pontos válidos em muitos contextos, e o desejo por simplicidade é louvável.
      </p>
      <p>
        É um sentimento bonito, como desejar sistemas econômicos mais simples. No entanto, a web hoje frequentemente hospeda mais do que apenas páginas informativas estáticas. É uma plataforma para aplicações dinâmicas, espaços de trabalho colaborativos e experiências interativas ricas. Estes geralmente exigem um conjunto diferente de ferramentas e abordagens do que um "botão muito bonito" em uma página estática.
      </p>
      <h2 id="wtf">ENTÃO, QUAL É A IDEIA AQUI?</h2>
      <p>
        A ideia é reconhecer que às vezes, a complexidade em um projeto não é uma escolha arbitrária, mas um requisito genuíno das funcionalidades sendo construídas. Quando esses requisitos complexos surgem, tentar gerenciar tudo com manipulação direta do DOM e arquivos JavaScript independentes pode se tornar como construir uma máquina sofisticada apenas com as ferramentas manuais mais básicas. Você pode até conseguir, mas o processo pode ser desafiador e o resultado mais difícil de manter ou escalar.
      </p>
      <p>
        Este é um convite para considerar as poderosas ferramentas desenvolvidas por muitos engenheiros talentosos. Estas ferramentas são projetadas para lidar com complexidades comuns, permitindo que equipes de desenvolvimento se concentrem na lógica única da aplicação e na experiência do usuário, em vez de resolver repetidamente problemas fundamentais.
      </p>
      <h2 id="why">
        POR QUE CONSIDERAR MUDAR DE "HTML PURO" PARA FRAMEWORKS JAVASCRIPT?
      </h2>
      <p>
        Porque frequentemente, o objetivo é construir mais do que um documento estático. Você está procurando criar algo interativo, dinâmico e amigável ao usuário - uma aplicação que oferece uma experiência rica, não apenas um panfleto digital.
      </p>
      <p>
        Aqui está por que usar React (ou Vue, Svelte, Angular, ou um framework moderno similar) pode ser benéfico, especialmente à medida que a complexidade do projeto cresce:
      </p>

      <h3>
        A INTERATIVIDADE NATIVA DO HTML É UM ÓTIMO PONTO DE PARTIDA, MAS PODE NÃO SER SUFICIENTE PARA APLICAÇÕES RICAS
      </h3>
      <p>
        "Mas HTML tem <code>&lt;details&gt;</code>, <code>&lt;dialog&gt;</code> e formulários!" Absolutamente, e estes são fantásticos para muitos casos de uso. São blocos de construção essenciais. No entanto, eles são sempre suficientes para um editor colaborativo em tempo real, um painel de trading dinâmico, ou uma ferramenta de gerenciamento de projetos de nível empresarial?
      </p>
      <p>
        Ao construir tais aplicações, os elementos interativos nativos do HTML, mesmo com JavaScript vanilla, podem exigir uma quantidade significativa de código personalizado para orquestrar fluxos de trabalho complexos e gerenciar estado. O que o HTML fornece são os elementos fundamentais; frameworks frequentemente fornecem a estrutura e maquinaria para construir sistemas mais elaborados sobre esses fundamentos.
      </p>
      <h3 id="state-management">GERENCIAMENTO EFETIVO DE ESTADO É FUNDAMENTAL</h3>
      <p>
        Gerenciar o estado de um simples botão "curtir" alternando uma classe é direto. Mas considere um painel com múltiplos filtros, dados em tempo real de várias fontes, preferências específicas do usuário, e talvez até recursos de edição colaborativa. Uma abordagem JavaScript "simples" aqui pode rapidamente levar a uma teia emaranhada de lógica interconectada que é difícil de debugar e manter. Frameworks oferecem maneiras estruturadas e frequentemente mais intuitivas de gerenciar este tipo de estado de aplicação. Sem eles, desenvolvedores podem se encontrar navegando por um caminho complicado, esperando evitar conflitos de variáveis globais ou bugs difíceis de rastrear.
      </p>
      <StateManagementDemo />
      <h3 id="components">COMPONENTES: CONSTRUA UMA VEZ, USE EM TODO LUGAR</h3>
      <p>
        Lembra das vezes que você pode ter copiado e colado HTML para uma barra de navegação em muitas páginas, apenas para atualizar cada instância quando um novo link era necessário? É uma abordagem inicial comum, e compreensível na época.
      </p>
      <p>
        Frameworks como React encorajam (ou forçam) pensar em termos de componentes reutilizáveis e encapsulados. Um botão, um campo de formulário, ou um cartão de perfil de usuário inteiro pode ser construído uma vez - sua estrutura, estilo e lógica definidos em um lugar - e então reutilizado onde for necessário. Uma mudança na definição do componente o atualiza em todos os lugares. Isso não é apenas sobre conveniência; é sobre manutenibilidade, consistência e sanidade, especialmente à medida que as aplicações crescem ou são trabalhadas por equipes.
      </p>
      <h3 id="ui">
        ATUALIZAÇÕES DE UI MAIS INTELIGENTES E EFICIENTES
      </h3>
      <p>
        Atualizar manualmente muitas partes de uma página quando um único pedaço de dados muda pode ser propenso a erros. Você pode se encontrar meticulosamente dizendo a cada <code>&lt;span&gt;</code> e <code>&lt;div&gt;</code> para atualizar, esperando não perder nada ou causar re-renderizações ineficientes de toda a página.
      </p>
      <p>
        Frameworks são projetados para serem inteligentes sobre atualizações de UI. Você declara como a UI deve parecer baseada nos dados atuais (estado). Quando esses dados mudam, o framework determina eficientemente o conjunto mínimo de mudanças necessárias no DOM real. É como ter um assistente altamente otimizado que apenas repinta as partes necessárias, em vez de redecorar a casa inteira quando uma foto é movida. Esta abordagem declarativa frequentemente leva a código mais limpo e melhor performance.
      </p>
      <h3 id="accessibility">
        ACESSIBILIDADE EM ESCALA: UMA ABORDAGEM ESTRUTURADA
      </h3>
      <p>
        "Apenas use HTML semântico!" é um excelente conselho e um pilar do desenvolvimento web. Isso é Web Dev 101.
      </p>
      <p>
        Mas e quanto a elementos de UI complexos e personalizados que vão além das tags HTML padrão? Considere grades de dados personalizadas com ordenação e filtragem, comboboxes acessíveis com recursos de digitação antecipada, ou visualizações em árvore navegáveis. Simplesmente adicionar role="button" a um <code>&lt;div&gt;</code> é um começo, mas a verdadeira acessibilidade para tais componentes envolve o gerenciamento cuidadoso de atributos ARIA, foco e interações de teclado. Implementar isso corretamente e consistentemente em muitas instâncias com JavaScript vanilla pode ser uma tarefa significativa.
      </p>
      <p>
        Frameworks permitem que você construa um componente acessível uma vez, encapsulando todos os atributos e comportamentos ARIA necessários. Este componente pode então ser reutilizado, promovendo consistência e tornando mais fácil manter altos padrões de acessibilidade. Você preferiria gerenciar manualmente aria-expanded e estados relacionados em 50 instâncias diferentes de acordeão, ou defini-lo uma vez em um componente reutilizável? Para UIs complexas, confiar apenas em HTML básico pode às vezes inadvertidamente levar a experiências que não são totalmente acessíveis a todos os usuários.
      </p>
      <h3 id="developer-experience">
        A FACHADA "SIMPLE"(SIMPLES) DO HTML PODE ÀS VEZES ESCONDER MUITO TRABALHO MANUAL DE JAVASCRIPT
      </h3>
      <p>
        Frases como "Sem erros de hidratação! Sem tree-shaking!" podem soar atraentes, enquadrando estes como complexidades a serem evitadas. No entanto, estes são frequentemente soluções sofisticadas para problemas reais que surgem ao construir aplicações client-side substanciais.
      </p>
      <p>
        Optar por não usar um framework não faz estes problemas desaparecerem se os requisitos da aplicação inerentemente os envolvem. Frequentemente significa que o desenvolvedor ou equipe é agora responsável por implementar manualmente soluções para diffing de DOM, propagação de estado, code splitting para performance, e outras otimizações - tarefas que frameworks evoluíram para lidar efetivamente. Nem sempre é sobre escolher "simplicidade" sobre "complexidade", mas sim escolher aproveitar soluções bem testadas para problemas complexos comuns, ou construir essas soluções do zero. O último pode ser como escolher construir manualmente cada parte de uma máquina complexa quando componentes pré-fabricados e otimizados estão prontamente disponíveis.
      </p>
      <h3 id="global-js-vars">
        CONFIAR NAS VARIÁVEIS GLOBAIS DE JAVASCRIPT BASEADAS EM ID DO HTML: UMA CURIOSIDADE HISTÓRICA
      </h3>
      <p>
        É verdade que elementos HTML com atributos id podem às vezes se tornar variáveis JavaScript globais. Esta era uma "funcionalidade" de uma era anterior da web. Confiar nisso hoje pode ser arriscado.
      </p>
      <p>
        Pode poluir o namespace global, levar a colisões de nomes difíceis de debugar, e contribuir para uma base de código frágil e menos manutenível. Isso pode causar frustração significativa para desenvolvedores futuros (incluindo seu eu futuro!).
      </p>
      <p>
        Frameworks guiam desenvolvedores em direção a padrões mais robustos: componentes com escopo, fluxo de dados explícito (como props), e soluções dedicadas de gerenciamento de estado que não dependem da chance de que window.meuBotao não foi sobrescrito. Isso não é HTML "emprestando muletas"; são frameworks ajudando a evitar potenciais armadilhas inerentes a alguns comportamentos mais antigos do navegador.
      </p>
      <h3 id="developer-experience">
        EXPERIÊNCIA DO DESENVOLVEDOR (DX) IMPORTA PARA PRODUTIVIDADE E SATISFAÇÃO
      </h3>
      <p>
        Considere recursos como Hot Module Replacement (vendo mudanças de UI instantaneamente sem perder o estado da aplicação durante o desenvolvimento), a rede de segurança do TypeScript, um vasto ecossistema de bibliotecas para tarefas desde internacionalização até animação, e linters, formatadores e debuggers robustos.
      </p>
      <p>
        Frameworks, especialmente os maduros como React, vêm com um ecossistema que pode tornar o processo de desenvolvimento mais produtivo e agradável. Isso frequentemente se traduz em construir melhores aplicações, mais rapidamente. Fingir que lidar com inconsistências de navegador e padrões JavaScript mais antigos é inerentemente mais virtuoso pode ser um caminho menos eficiente para projetos complexos.
      </p>
      <h3 id="performance">
        PERFORMANCE É MAIS DO QUE APENAS CARREGAMENTO INICIAL; É SOBRE A EXPERIÊNCIA DO USUÁRIO INTEIRA
      </h3>
      <p>
        "Meu site HTML carrega em 50ms!" Isso é ótimo para entrega inicial. Mas o que acontece quando você adiciona login de usuário, busca de conteúdo dinâmico, filtragem e ordenação client-side, e atualizações em tempo real sem fazer a página se tornar não responsiva ou lenta?
      </p>
      <p>
        Frameworks, particularmente quando combinados com seus meta-frameworks (como Next.js ou Remix para React), fornecem ferramentas para uma abordagem holística à performance. Isso inclui code-splitting (carregando apenas JavaScript necessário), server-side rendering (SSR) ou static site generation (SSG) para carregamentos iniciais rápidos combinados com capacidades dinâmicas, e navegação client-side suave. O objetivo é construir uma aplicação de alta performance, não apenas um documento que carrega rapidamente mas oferece interatividade limitada.
      </p>
      <h2 id="bloat">
        MAS E O "BLOAT"? O EXCESSO DE JAVASCRIPT?
      </h2>
      <p>
        É verdade: uma aplicação "Hello World" em um framework provavelmente terá uma pegada JavaScript inicial maior que um "Hello World" HTML puro. Isso é esperado. Mas a maioria das aplicações de produção são simples como "Hello World"? Se você está construindo um site de brochura muito simples, principalmente estático, de cinco páginas, então sim, HTML e CSS são provavelmente perfeitamente suficientes e a escolha mais eficiente. O "outro site" faz um bom ponto aqui. Não se precisa de uma escavadeira para plantar uma flor.
      </p>
      <p>Mas se o projeto envolve:</p>
      <ul>
        <li>Uma plataforma SaaS</li>
        <li>Um site de e-commerce com um carrinho de compras complexo e contas de usuário</li>
        <li>Um feed de mídia social dinâmico</li>
        <li>Uma ferramenta de gerenciamento de projetos rica em recursos</li>
        <li>Um painel de visualização de dados interativo</li>
        <li>
          Qualquer coisa com interatividade client-side significativa e estado que
          precisa funcionar de forma confiável e ser manutenível
        </li>
      </ul>
      <p>
        ...então o "custo" JavaScript inicial de um framework pode ser visto como um investimento na infraestrutura necessária para construir e gerenciar essa complexidade. Ferramentas modernas como tree-shaking, code-splitting e lazy loading ajudam significativamente a mitigar este custo. É sobre selecionar a ferramenta apropriada para a tarefa, em vez de se ater a uma ferramenta familiar quando uma mais especializada seria mais efetiva para a escala do projeto.
      </p>
      <h2 id="when">
        ENTÃO, QUANDO PODE SER UMA BOA IDEIA USAR REACT (OU UM FRAMEWORK SIMILAR)?
      </h2>
      <ul>
        <li>
          Quando sua aplicação tem estado client-side não trivial que precisa ser
          gerenciado efetivamente.
        </li>
        <li>
          Quando você precisa de componentes UI reutilizáveis para construir uma
          interface consistente, manutenível e escalável.
        </li>
        <li>
          Quando você está desenvolvendo uma Single Page Application (SPA) ou uma
          aplicação que visa uma experiência fluida, tipo app, em vez de uma série
          de carregamentos de documentos.
        </li>
        <li>
          Quando você está trabalhando em uma equipe e precisa de estruturas,
          padrões e vocabulário comuns.
        </li>
        <li>
          Quando a complexidade das interações do usuário provavelmente levaria a
          "código espaguete" difícil de gerenciar se construído apenas com
          JavaScript vanilla.
        </li>
        <li>
          Quando você quer aproveitar um rico ecossistema de bibliotecas,
          ferramentas e suporte da comunidade bem testados.
        </li>
        <li>
          Quando velocidade de desenvolvimento e a capacidade de construir
          recursos complexos eficientemente são mais críticos que minimizar cada
          último kilobyte para uma página largamente estática.
        </li>
      </ul>
      <h2 id="problem">
        O VERDADEIRO DESAFIO NÃO É O FRAMEWORK EM SI, MAS COMO ESCOLHEMOS E USAMOS NOSSAS FERRAMENTAS
      </h2>
      <p>
        O desafio frequentemente está em selecionar a ferramenta certa para o trabalho. Às vezes, uma solução mais simples é de fato a melhor. Desenvolvedores podem ocasionalmente usar uma ferramenta superdimensionada para uma tarefa simples, ou adotar novas tecnologias sem avaliar completamente sua adequação para o problema em questão. Pode ser como usar uma ferramenta industrial de alta potência para um reparo delicado em casa - talvez exagero.
      </p>
      <p>
        No entanto, não vamos descartar ferramentas poderosas simplesmente porque podem ser mal aplicadas. React e frameworks similares são ferramentas capazes que resolvem problemas reais e complexos efetivamente. A questão geralmente não é a ferramenta em si, mas garantir que ela seja usada apropriadamente para a tarefa.
      </p>
      <p>
        Então, para sua próxima aplicação web complexa, interativa e orientada a dados, CONSIDERE USAR REACT (OU UM FRAMEWORK SIMILAR). Não é sobre pureza, mas sobre pragmatismo e escolher ferramentas que podem ajudar você e sua equipe a construir aplicações robustas e manuteníveis. Seus usuários (e seu eu futuro, encarregado de manter a base de código) provavelmente apreciarão a estrutura e capacidades que estes frameworks fornecem.
      </p>
      <p>
        Agora, vá em frente e construa algo incrível, aproveitando as melhores ferramentas para seus desafios específicos, em vez de criar uma solução HTML que pode não escalar com suas ambições.
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
            href="https://github.com/burakcan/just-fucking-use-react"
            target="_blank"
            rel="noopener noreferrer"
            title="Ver o código fonte no GitHub"
          >
            Ver o código fonte no GitHub
          </a>
        </strong>
      </p>
    </main>
  );
}
