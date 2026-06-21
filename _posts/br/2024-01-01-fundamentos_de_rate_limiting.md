---
layout: post
title: "Rate Limiting: fundamentos e estratégias"
lang: br
ref: rate-limiting
tags: [engineering, architecture]
featured_image_thumbnail: assets/images/posts/2018/1_thumbnail.jpg
featured_image: assets/images/posts/2018/1.jpg
featured: true
---

Hoje vivemos em um mundo extremamente conectado e não é novidade para ninguém que as empresas precisam ser capazes de oferecer seus produtos e serviços de uma forma que possam ser usados como parte de outros.

Flexibilidade e facilidade de integração tornam-se um requisito que leva à criação de produtos "API First", em que se espera haver comunicação entre aplicações.

É aqui que o Rate Limiter entra em cena.

<!--more-->

# Introdução

Um Rate Limiter, no contexto de sistemas de rede, é um padrão de computação distribuída que tem o objetivo de prevenir o uso indevido dos recursos de infraestrutura e garantir o uso justo desses recursos por usuários e aplicações, controlando a taxa de tráfego entre eles e o servidor considerando um período de tempo.

Um exemplo prático e do mundo real foram os requisitos do Open Banking Brasil. Para quem não está familiarizado, em resumo, o Open Banking Brasil — assim como o Open Banking Europa, que foi uma das referências para o programa brasileiro — é um programa de inovação do Banco Central do Brasil com o objetivo de criar um padrão para a troca de dados entre instituições financeiras.

Aqui estão alguns exemplos de requisitos, baseados na regulação, sobre rate limiting em operações de leitura:

- Em escopo global, as operações de leitura não podem ultrapassar 300 requisições por segundo;
- Em escopo de instituição financeira, as operações de leitura não podem ultrapassar 50 requisições por segundo;
- Em escopo de IP (Internet Protocol), as operações de leitura não podem ultrapassar 8 requisições por segundo;

Uma vez que a aplicação cliente atinge esses limites configurados em um Rate Limiter, a abordagem de comportamento pode ser apenas um bloqueio da requisição por um período de tempo ou um throttling.

# Quais são os benefícios do rate limiting?

Agora, talvez você esteja se perguntando sobre os benefícios e por que deveria implementar esse padrão na solução em que está trabalhando.

Como mencionei antes, o principal propósito desse padrão é controlar a taxa de requisições aos seus recursos, e esse controle leva a prevenir a exaustão de recursos causada, por exemplo, por um ataque de Negação de Serviço (DoS), bots ou uso indevido por clientes que os consomem.

Indiretamente, você estará evitando a possibilidade de parte da sua infraestrutura escalar de forma indiscriminada e descontrolada. Dessa forma, você estará evitando perdas financeiras para você e sua empresa, além da possibilidade de direcionar melhor o seu orçamento para recursos de maior prioridade.

# Onde deve ser posicionado o seu rate limiter?

Rate limiters podem ser implementados em ambos os lados, cliente e servidor.

Como você provavelmente já notou, a implementação no lado do cliente é significativamente pouco confiável para impor um comportamento e pode ser facilmente modificada por atacantes. Em uma implementação do mundo real, nunca vivenciei uma situação em que o rate limiting precisasse ser implementado no cliente, mas, ao fazer o design do sistema, talvez possa surgir um requisito que leve você a essa solução.

Por outro lado, rate limiters no lado do servidor são a implementação mais comum. Talvez você ceda à tentação de implementar essa solução no nível da aplicação, mas considere implementá-la aplicando-a como um middleware na frente das suas aplicações, como mostrado abaixo:

<center>
<img src="./assets/images/posts/2024/01/01/1.png">
</center>

À medida que o tempo passa e o cliente envia suas requisições, quando o limite é excedido — caso o comportamento seja realizar um bloqueio da requisição — o rate limiter envia uma resposta 429, que significa que o cliente enviou requisições demais e, até que a cota seja restabelecida, o cliente não será capaz de fazer qualquer outra requisição ao servidor de recursos.

<center>
<img src="./assets/images/posts/2024/01/01/2.png">
</center>

Outra tentação à qual você pode ceder seria realizar uma implementação caseira do rate limiter.

Atualmente, com o advento dos provedores de nuvem, a maior parte dos desafios de computação já foi resolvida por eles e, provavelmente, você deve ter na sua solução um componente como o API Gateway, por exemplo, que em geral já tem suporte para configuração de rate limiting.

Do meu ponto de vista, só é viável realizar uma implementação customizada quando os requisitos que você tem em mãos não são suportados por uma solução pronta (out-of-the-box).

# Quais são os algoritmos de rate limiter mais comuns?

Existem várias estratégias que podem ser aplicadas ao implementar uma solução de rate limiter, cada uma com seus prós e contras. Nas próximas seções você descobre as mais populares, com uma explicação de alto nível.

## Token bucket

O algoritmo token bucket é um algoritmo muito simples e amplamente usado para rate limiting por empresas de internet como Amazon e Stripe, por exemplo.

Esse algoritmo tem dois elementos principais. O primeiro elemento é o bucket (balde), que atua como um contêiner que delimita o número máximo de tokens que podem ser consumidos pelos clientes para permitir que realizem uma requisição a um determinado recurso. O consumo de tokens deve considerar um escopo ou critério pré-definido atribuído a esse bucket, como no exemplo anterior que mencionei (por exemplo, Escopo Global, Escopo de Instituição Financeira, Internet Protocol etc.).

O segundo elemento é o refiller (reabastecedor). Esse elemento é responsável por reabastecer o bucket com novos tokens a uma dada taxa. Então, para um requisito em que precisamos permitir 50 requisições por segundo, o refiller, a cada segundo, tentará adicionar 50 tokens no bucket definido e, se exceder o tamanho pré-definido do bucket, descartará os tokens restantes.

Uma vez que temos requisições chegando, cada uma que passa pelo rate limiter precisa adquirir um token para ser autorizada a seguir até o recurso final. Se não houver tokens disponíveis no bucket, a requisição é descartada e o cliente recebe uma resposta de erro.

<center>
<img src="./assets/images/posts/2024/01/01/3.png">
</center>
<br>

Em geral, esse algoritmo é fácil de implementar e eficiente em memória. No entanto, você pode ter algum trabalho para fazer o fine tuning, já que provavelmente terá múltiplos buckets com regras ou critérios diferentes.

## Leaking bucket

## Fixed window counter

## Sliding window log

## Sliding window counter
