---
layout: about
title: about
permalink: /
subtitle: MSc Student @ <a href='https://s-t-a-i.github.io/'>KAIST AI</a>

profile:
  align: left
  image: prof_pic.jpg
  image_circular: true # crops the image to make it circular

selected_papers: false
social: true # rendered in the left sidebar

announcements:
  enabled: false # news is rendered manually in the body below

latest_posts:
  enabled: false
---

## About Me

Hi! I'm an MSc student at KAIST AI, advised by [Seong Joon Oh](https://seongjoonoh.com/). I'm broadly interested in how LLM agents can find, use, and build on knowledge by themselves, and how that ability can speed up scientific research. Specifically, my research interests center on:

- **Information retrieval** and **retrieval-augmented generation** (RAG), especially retrieval that goes beyond surface-level semantic similarity
- **Self-evolving agents** that keep improving by updating their memory and knowledge from experience over long horizons
- **Research automation**, using LLMs for scientific discovery, such as surfacing ideas that transfer across fields

Before my graduate studies, I spent six years co-founding and building a deep learning startup, working end-to-end across business, research, and engineering. That experience shaped how I think about research: not just as a technical problem, but as something that has to hold up in the messy, real-world systems where people actually rely on it.

In short, I'd like to build LLM-based systems that can retrieve, remember, and improve on what they know, and use that to help people do science.

[**Download my CV**](/assets/pdf/CV_SeokwonJung.pdf){:.cv-link} (PDF)

## 🔥 Recent News

{% include news.liquid %}

## 📝 Selected Publications

<p class="pub-legend"><sup>*</sup> Equal contribution &nbsp;·&nbsp; <sup>†</sup> Mentored intern</p>

{% bibliography --group_by none %}
