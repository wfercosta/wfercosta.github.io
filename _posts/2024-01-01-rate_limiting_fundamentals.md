---
layout: post
title: "Rate Limiting: fundamentals and strategies"
tags: [Software Engineering, System Design]
featured_image_thumbnail: assets/images/posts/2018/1_thumbnail.jpg
featured_image: assets/images/posts/2018/1.jpg
featured: true
hidden: true
---

Nowadays we live in a world that is extremely connected and it is not new to anyone that the companies must be capable of offering their products and services in a way that they could be used as part of anothers.

Flexibility and ease of integration becomes a requirement that leads to creating products that are "API First", where is supposed to have communication between applications.

Here is where Rate Limiter comes into play.

<!--more-->

# Introduction

A Rate Limiter, in the context of network systems, is a distributed computing pattern that has the objective to prevent misuse of the infrastructure resources and ensure a fair use of these resources by users and applications by controlling the rate of the traffic between them and the server considering a period of time.

A practical and real world example, were the requirements from Open Bank Brazil. For those who are not familiar with, in short, Open Banking Brazil as well as Open Banking Europe which was one of the references for Brazil's program, is an innovation program from Brazil's Central Banking in order to create a standard for data exchange between financial Institutions.

Here was some examples about requirements, based on the regulation, about rate limiting on read operations:

- In a global scope, the read operations can not be over 300 requests per second;
- In a financial institute scope, the read operations can not be over 50 requests per second;
- In a IP (Internet Protocol) scope, the read operations can not be over 8 requests per second;

Once the client application achieves these limits configured in a Rate Limiter, the behavior approach could be just a request block for a period of time or be throttled.

# What is the benefits of rate limiting?

Now, maybe you are asking yourself about benefits and why you should implement this pattern in the solution that you are working with.

As I mentioned before, the main purpose of this pattern is to control the request rate to your resources and this control leads you to prevent resource starvation caused, for example, by Denial of Service Attack, bots or a misused by clients that are consuming them.

Indirectly, you will be avoiding the possibility of part of your infrastructure being scaling indiscriminately and uncontrolled. This way you will be avoiding financial losses for you and your company, besides the possibility to address your budget better to resources that have higher priority.

# Where should be placed your rate limiter?

Rate limiters can be implemented on both sides, client and server.

As you have probably already noticed, client-side implementation is significantly unreliable to enforce a behavior and it can be easily modified by attackers. In a real world implementation, I have never experienced a situation where rate limiting was required to be implemented on the client, but when making the system design maybe could emerge a requirement that leads you to this solution.

On the other hand, rate limiters on the server-side, is the most common implementation. Maybe you can give in to temptation to implement this solution on application level, but consider implementing this solution by applying it as a middleware in front of your applications, as shown below:

<center>
<img src="./assets/images/posts/2024/01/01/1.png">
</center>

As the time goes and the client submits its requests, when the limit is exceeded, what happens if the behavior is to perform a request block, is the rate limiter sends a response 429, which means that client has sent too many requests and until the quote is reestablished, the client will not be capable to make any other request to the resource server.

<center>
<img src="./assets/images/posts/2024/01/01/2.png">
</center>

Another temptation you can give in, could be to perform an in house implementation of rate limiter.

These days, with the advent of cloud providers, most of the computing challenges have already been solved by them and probability you should have in your solution an component as the API Gateway, for example, that in general already have support for rate limiting configuration.

From my point of view, it is just viable to perform a custom implementation when the requirements that you have in hand are not supported by a solution out-of-the-box.

# What is the common rate limiters algorithms?

There are several strategies that could be applied when implementing a rate limiter solution and each of them with their pros and cons. In the next sections you find out the most popular ones, with a high level explanation.

## Token bucket

The token bucket algorithm is a very simple algorithm and widely used for rate limiting by internet companies like Amazon and stipe, for instance.

This algorithm has two main elements. The first element is the bucket that acts as a container that delimits the maximum number of tokens that could be consumed by clients in order to allow them to perform a request to a given resource. The tokens consumption should consider a pre-defined scope or criteria that are given to this bucket, like in the previews example that I mention before (e.g. Global Scope, Financial Institute Scope, Internet Protocol and etc.).

The second element is the refiller. This element is responsible for refilling the bucket with new tokens at a given rate. So to a given requirement that we need to allow 50 requests per seconds, the refiller, each second will try to add 50 tokens on the defined bucket and if it exceeds the bucket pre-defined size, it will drop the remaning ones.

Once we have incoming requests, each one that passes through the rate limiter, must acquire a token to be allowed to forwarded to the final resource. If it does not have available tokens in the bucket, the request is dropped and the client receives a response error.

<center>
<img src="./assets/images/posts/2024/01/01/3.png">
</center>
<br>

In general, this algorithm is easy to implement and memory efficient. However, you may have some work to fine tune, once you probability will have multiple buckets with different rules or criterias.

## Leaking bucket

## Fixed window couter

## Sliding window log

## Sliding window couter
