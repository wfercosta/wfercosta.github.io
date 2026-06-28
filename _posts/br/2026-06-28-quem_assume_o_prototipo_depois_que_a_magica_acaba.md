---
layout: post
title: "Quem assume o protótipo depois que a mágica acaba?"
subtitle: "Vibe coding derrubou a barreira de entrada — mas ninguém está falando do handoff que vem depois."
lang: br
ref: handoff-vibe-coding
tags: [engineering, ai, leadership]
featured_image_thumbnail: assets/images/posts/2026-06-28/1_thumbnail.jpg
featured_image: assets/images/posts/2026-06-28/1.jpg
featured: true
---

<!--
TESE: Vibe coding derrubou a barreira de produção de código, não a de julgamento.
O valor para a empresa não está em adotar ou proibir — está em desenhar a curva de
maturidade pela qual um time sobe: de Builders que protótipam, a Squads Híbridas onde
o handoff aplica repertório e specs, a Squads Agênticas onde guardrails e harness
codificam os padrões da engenharia. Confundir os níveis — protótipo como produto,
velocidade como julgamento — é onde nasce a dívida.
PÚBLICO: liderança técnica e de produto (engenheiros, gerentes, coordenadores,
superintendentes de tecnologia e produto).
-->

## Abertura — a tensão

<!--
Material capturado:
- Caos inicial: times adotando agentes sem guardrail/harness/controle
- Engenheiros encadeando prompts soltos para cada etapa
- Colando resposta do chat direto no código
- Fecho: a barreira de PRODUZIR código caiu; a de JULGAR código não
-->

Desde novembro de 2022, quando a OpenAI abriu o modo conversacional do ChatGPT ao público geral, viemos dando passos cada vez mais largos na evolução da Inteligência Artificial e na sua aplicabilidade. Não apenas nas áreas de tecnologia da informação ou na robótica, mas como parte integrante do nosso cotidiano — mudando a forma como executamos tarefas do dia a dia e como pesquisamos informação e conhecimento.

Na Engenharia de Software em particular, vejo a barreira de produzir código se tornar cada vez mais BAU (Business As Usual). Mas a nossa capacidade de julgar o que está sendo gerado não acompanhou esse ritmo. E é exatamente aí que mora a tensão: nós, como engenheiros, precisamos evoluir a nossa forma de trabalho — adotar guardrails e harness — para garantir que o software produzido continue dentro dos padrões de qualidade e respeitando as regulações.

## 1. A barreira que caiu foi a do protótipo, não a do produto

<!--
Argumento: vibe coding democratizou tirar a ideia do papel, não a engenharia.
Material capturado:
- Analogia Makers: protoboard + Arduino Uno funcionam, mas virar produto exige
 desenho de placa de circuito, certificação
- Tese-âncora (suas palavras): quem está fora do contexto "não tem repertório nem
 para saber o que está faltando"
- Software em produção envolve segurança, performance, regulação
- Contraponto saudável: prototipar é legítimo (hackathons/weekends de builders) —
 o problema não é prototipar
-->

O movimento maker no Brasil começou a ganhar força entre 2012 e 2014, alguns anos depois do surgimento do Arduino — na Itália, em 2005 — e do Raspberry Pi, no Reino Unido, em 2012. Duas plataformas que se tornaram grandes motores de transformação, permitindo que qualquer pessoa criasse projetos de robótica e automação doméstica.

Tive contato mais de perto por volta de 2015, quando comecei a trabalhar na CI&T, através das "Garagens" — um espaço da época para quem gostava de criar e tirar projetos do papel usando protoboards, componentes eletrônicos e programando suas automações em cima de uma dessas plataformas.

Uso esse movimento como espelho porque o vejo muito parecido com o Vibe Coding — ou melhor, com o movimento dos Builders. No meu ponto de vista, o que ele democratizou não foi o acesso à programação e à engenharia de software, mas a possibilidade de as pessoas tirarem do papel as suas ideias de software e aplicativos com muito mais facilidade. Pessoas que às vezes não têm formação na área, ou que se distanciaram do contexto de desenvolvimento.

É interessante ver no Instagram conteúdos como o Claude Build Day, da Anthropic, ou o perfil do Cursor, com pessoas desenvolvendo ideias e colocando para validação em poucas horas ou dias. Ou a felicidade de quem volta a desenvolver no dia a dia — afinal, programação é a profissão de base para muita gente. Foi o caso de um dos meus gestores anteriores, realmente feliz de poder voltar a fazer crafting com menos atrito, sem precisar relembrar ou aprender uma linguagem específica para um nicho. Fico imaginando as coisas legais que vamos ver as pessoas criarem nos nossos próximos hackathons.

Meu ponto é: prototipar é legítimo e deve ser incentivado. Mas, da mesma forma que um projeto montado em protoboard com Arduino, depois de validado, precisa migrar para uma placa perfurada e depois para uma placa de circuito impresso (PCB), o caminho do que fazemos como Builders deveria ser o mesmo.

A pergunta é: como é essa migração quando o protótipo não é um circuito, mas software?

<!--
Meu ponto é: prototipar é legítimo e deve ser incentivado. Mas, da mesma forma que um projeto montado em protoboard com Arduino, depois de validado, precisa migrar para uma placa perfurada e depois para uma placa de circuito impresso (PCB), o caminho do que fazemos como Builders deveria ser o mesmo. Ou seja: um handoff para engenheiros experientes, que vão garantir que a solução seja sustentável para rodar em produção. Que vão evitar problemas e falhas de segurança — como os vazamentos de dados que já vêm ocorrendo em alguns casos, justamente pela falta de repertório para saber o que ainda falta antes de lançar o produto de fato para o público.
-->

## 2. Builder não é maturidade: a curva que começa no handoff

<!--
Argumento: adoção de IA não é binária (proibir vs liberar) — é uma curva que se sobe.
Cada nível responde "quem passa o bastão pra quem, e o que precisa existir para quem
recebe conseguir julgar".
- Builders: vibe coders. Protótipo e descoberta.
- Squads Híbridas: handoff onde repertório + specs entram.
- Squads Agênticas: guardrails, harness, playbooks como skills.
-->

Acho que é a primeira vez que vejo uma tecnologia emergente sendo adotada massivamente em nível corporativo. Principalmente no setor bancário e financeiro, onde costumávamos levar um certo tempo para adotar uma tecnologia nova — esperando que ela passasse pelo "Vale da Desilusão"" e atingisse o "Platô de Produtividade".

Na verdade, acredito que ainda nem saímos do "Pico das Expectativas Infladas". A tecnologia segue em constante evolução e mudança e, mesmo com toda a instabilidade, já estamos com adoção massiva na maioria das grandes empresas.

Há muitas discussões em aberto. Ainda estamos entendendo a relação entre o custo da Inteligência Artificial e o ROI. O impacto da dependência e o quanto ela vem se tornando estratégica do ponto de vista de soberania de Estado. O impacto na formação dos nossos futuros engenheiros de software. E como definimos níveis de maturidade e cenários de aplicação de IA.

É sobre esse último ponto que quero me debruçar. Falei no tópico anterior da minha visão sobre os Builders. Entendo que **Builder não é um nível de maturidade** — empresas com viés mais forte de produto, que testam de forma mais livre com grupos de usuários, vão se beneficiar muito da velocidade de gerar um protótipo totalmente funcional para validar uma ideia antes de investir tempo numa construção estruturada. É quase um pré-MVP. Um mecanismo para facilitar a validação, principalmente nas mãos de Founders, Product Managers ou Product Designers.

Depois que a validação acontece, com testes de campo junto a grupos de usuários, chega o momento do handoff. Uma equipe de engenharia recria — ou incrementa um software existente — considerando uma estrutura de arquitetura e design alinhada com a segurança, performance, escalabilidade, resiliência e manutenibilidade que o produto demanda. Com o apoio da Inteligência Artificial, mas com todo o repertório necessário para conceber um produto sustentável para produção.

E é aqui que começa a curva de maturidade. Diferentemente do Builder — que considero uma etapa de prototipação e concepção — o **primeiro nível de maturidade são os times híbridos**. Eles fazem essa construção orientada a especificações técnicas e padrões, guiando a Inteligência Artificial para uma geração mais dentro da expectativa, com etapas de validação bem definidas.

O **segundo nível de maturidade**, a partir do momento em que os times já rodam bem o modelo híbrido, é o movimento para os times agênticos. A minha visão é que todo o repertório usado para guiar a IA passa a ser convertido em guardrails, harness e playbooks dos quais a Inteligência Artificial faz uso pleno. Passamos a ter menos pontos de validação manual, porque todo esse arcabouço construído para guiar a IA se torna confiável e previsível.

![Curva de maturidade: do Builder aos times híbridos e agênticos](/assets/images/posts/2026-06-28/curva-maturidade.svg)

## 3. Onde o handoff realmente acontece: repertório

<!--
Argumento: sem repertório, o humano não avalia o que a IA produziu — "revisar" vira
carimbar. Repertório é pré-requisito, não acessório.
Caso de 1ª mão a desenvolver:
- Classe de teste com acesso privilegiado por reflection + @Autowired (Java/Kotlin)
 para obter atributos privados
- Projeto já tinha Mockito disponível para fazer isso de forma limpa
- Você parou, releu a documentação (admite estar há tempo sem desenvolver no dia a dia)
- Cortou 15+ linhas desnecessárias que o engenheiro teria simplificado se tivesse
 repertório para avaliar
- Recorte adicional: engenheiros que migraram de alta plataforma para baixa
-->

Talvez um ponto que noto desde que começamos a usar ferramentas de Inteligência Artificial seja o aumento da confiança — às vezes sem nível de julgamento e crítica — sobre o que a IA está respondendo ou produzindo, dependendo do contexto.

Precisamos ter em mente que os Grandes Modelos de Linguagem (LLMs) nem sempre são treinados com a melhor amostragem possível de dados. Boa parte dessa base de conhecimento é de qualidade baixa ou média — o que muitas vezes torna as soluções geradas apenas medianas. A IA não devolve a melhor solução possível; devolve uma solução plausível.

Um exemplo recente foi uma classe de testes gerada pela Inteligência Artificial. Tecnicamente, a configuração do teste (setup) e os testes em si estavam funcionais — mas o engenheiro não avaliou a complexidade da solução. Para um desenvolvedor Java que atua com Spring Boot, num contexto onde o projeto já tem uma biblioteca como o Mockito, o caminho natural seria usar as anotações `@InjectMocks` e `@Mock` para lidar com os comportamentos de `@Autowired`. Não foi o que o agente de codificação fez — e o engenheiro não tinha conhecimento suficiente do framework para perceber que existia um caminho mais simples e mais limpo.

É exatamente aqui que mora o risco. Pela falta de repertório técnico, acabamos aumentando a entropia, reduzindo a manutenibilidade e a testabilidade do software ao longo do tempo — e gerando uma dívida técnica grande, que só vai aparecer lá na frente.

Embora codificar esteja se tornando cada vez mais BAU, construir e manter o repertório técnico — linguagem de programação, frameworks, system design, algoritmos, estruturas de dados — segue extremamente relevante. É esse repertório que nos permite julgar e criticar o resultado da IA. Se você não tem repertório, não tem como saber o que está faltando, nem se o caminho de solução apresentado é o correto.

## 4. Codificar o julgamento: guardrails, harness e specs

Me recordo que, quando começamos a ter as primeiras interações com uma ferramenta mais robusta e direcionada para codificação com Inteligência Artificial, comecei a observar — e a me incomodar — com a maneira como aconteciam as interações entre o engenheiro e o agente de codificação. No início, elas variavam desde abordagens simples, como prompts pontuais para tirar dúvidas e copiar e colar respostas do agente, até as mais avançadas da época, que já usavam o agente para modificar código, mas iterando através de diversos prompts para atingir um objetivo. O fato é que muitos engenheiros, trabalhando nesse modelo, ficavam com a sensação de que não era produtivo nem eficiente — e muitos começavam a duvidar se a Inteligência Artificial poderia de fato ajudar.

Meu incômodo me levou a buscar mais informação e aprendizado, através de conteúdos e eventos. Acabei conhecendo modelos como BMAD, GitHub SpecKit e Tessl. Isso me levou a um insight: tínhamos que conversar menos sobre ferramentas e mais sobre estabelecer um fluxo de trabalho padronizado, que desse boa completude às atividades que os engenheiros precisavam executar durante o processo de codificação.

Então, num experimento de entrega de features no final de 2025, adotamos um Spec Driven Development (SDD) mais customizado, sem o arcabouço que os modelos do GitHub SpecKit e Tessl trazem. Conduzimos um experimento rápido com dois prompts padronizados: um para gerar tarefas a partir de uma especificação escrita pelos engenheiros, e outro para executar essas tarefas — considerando um contexto que incluía orientações gerais num AGENT.md, o mapeamento das aplicações envolvidas (brownfield) e guidelines de implementação alinhadas às necessidades da organização.

O resultado foi positivo. Testamos rápido, e os engenheiros viram valor em ter um método de trabalho.

Agora o desafio passou a ser como escalar o modelo. Embora agentes como Claude Code, Devin, Codex e Copilot já tenham o seu harness built-in voltado para codificação — o que já é uma especialização —, ainda assim eles são genéricos para o nosso contexto.

O caminho que encontramos até aqui foi adotar skills e MCPs para criar uma camada de harness acima do built-in. Transformamos nossos playbooks de engenharia, documentações de padrões, frameworks internos e padrões de time em habilidades (skills). Além disso, criamos a nossa própria skill de Spec Driven Development, que cobre de 80% a 90% do processo de desenvolvimento. Ela auxilia o engenheiro desde a configuração do projeto para iniciar o trabalho assistido por IA, passando pelo mapeamento padronizado da base de código (brownfield), pelo refinamento de uma especificação a partir de descrições macro de funcionalidades, até a geração de tarefas para execução pela IA — com grafo de dependências, organização em batches para otimizar o uso de subagentes e pontos muito claros de revisão e confirmação para o engenheiro.

Essa padronização nos permite fazer melhoria contínua para otimização de processo e custo, e garante a qualidade e a homogeneização do padrão de construção dos nossos softwares.

<!--
Argumento: você só delega mais à IA quando o repertório deixa de morar só na cabeça
das pessoas e passa a morar no processo.
Material capturado:
- Spec Driven Development (SDD)
- Playbooks de engenharia do banco virando skills
- Harness além do built-in de Claude Code / Copilot / Devin para impor padrões
-->

## Conclusão

Na minha opinião, o Vibe Coding conduzido por Builders tem extremo valor para validar uma ideia e testar um modelo de negócio com um grupo restrito. Mas não para escalar.

Para escalar, precisamos de pessoas competentes e com repertório amplo das tecnologias e serviços que fazem parte do contexto do produto — pessoas capazes de conduzir uma ideia já validada até o patamar que ela precisa para se tornar produtiva e acessível ao público. Garantindo que nem o negócio, nem os usuários sejam expostos a riscos, principalmente os que envolvem privacidade de dados.

É essa a resposta para a pergunta do título. Quando a mágica acaba, quem assume o protótipo é a engenharia — e ela só assume bem se tiver repertório para julgar, e um processo que transforme esse julgamento em guardrails, harness e specs. O trabalho de liderança não é escolher entre proibir ou liberar a IA. É saber em que nível de maturidade o time está, e desenhar como ele sobe.

<!--
Fecha com a abertura. O protótipo na mesa não é o problema — confundir o nível em que
ele está é. Pergunta de liderança: não "devo deixar usarem vibe coding?", mas "sei em
que nível meu time está, e desenhei como ele sobe?". Mudança de perspectiva: pare de
debater bom/ruim; desenhe a curva.
-->
