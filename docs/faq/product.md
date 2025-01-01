---
id: product
title: Product FAQ
description: Questions related to product and design.
---

### Can we call Devtools something different? So that it fits our company better?

Yes, Devtools is just a framework for building your own developer portal. We
happen to call our internal version Devtools, as well, as a reference to our
music roots. You can call your version whatever suits your team, company, or
brand.

### Is Devtools a monitoring platform?

No, but it can be! Devtools is designed to be a developer portal for all your
infrastructure tooling, services, and documentation. So, it's not a monitoring
platform — but that doesn't mean you can't integrate a monitoring tool into
Devtools by writing [a plugin](#what-is-a-plugin-in-devtools).

### How is Devtools licensed?

Devtools was released as open source software by Spotify and is licensed under
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0).

### Why did we open source Devtools?

We hope to see Devtools become the infrastructure standard everywhere. When we
saw how much Devtools improved developer experience and productivity
internally, we wanted to share those gains. After all, if Devtools can create
order in an engineering environment as open and diverse as ours, then we're
pretty sure it can create order (and boost productivity) anywhere. To learn
more, read our blog post,
"[What the heck is Devtools anyway?](https://devtools.khulnasoft.com/blog/2020/03/18/what-is-devtools)"

### Will Spotify's internal plugins be open sourced, too?

Yes, we've already started releasing open source versions of some of the plugins
we use here, and we'll continue to do so.
[Plugins](technical.md#what-is-a-plugin-in-devtools) are the building blocks of
functionality in Devtools. We have over 120 plugins inside Spotify — many of
those are specialized for our use, so will remain internal and proprietary to
us. But we estimate that about a third of our existing plugins make good open
source candidates. (And we'll probably end up writing some brand new ones, too.)

### What's the roadmap for Devtools?

We envision three phases, which you can learn about in
[our project roadmap](../overview/roadmap.md). Even though the open source version
of Devtools is relatively new compared to our internal version, we have already
begun work on various aspects of all three phases. Looking at the
[milestones for active issues](https://github.com/khulnasoft/devtools/milestones)
will also give you a sense of our progress.

### My company doesn't have thousands of developers or services. Is using Devtools excessive for our needs?

Not at all! A core reason to adopt Devtools is to standardize how software is
built at your company. It's easier to decide on those standards as a small
company, and grows in importance as the company grows. Devtools sets a
foundation, and an early investment in your infrastructure becomes even more
valuable as you grow.

### Our company has a strong design language system/brand that we want to incorporate. Does Devtools support this?

Yes! The Devtools UI is built using Material UI. With the theming capabilities
of Material UI, you are able to adapt the interface to your brand guidelines.
