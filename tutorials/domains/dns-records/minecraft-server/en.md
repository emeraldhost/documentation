---
slug: "minecraft-server"
language: "en"
title: "How to Connect Your Domain to a Minecraft Server"
description: "Connect a domain to a Minecraft server"
tags: []
date: "2026-04-02"
visibility: "public"
updated: "2026-04-09"
cta: "domain"
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Minecraft Server"
sort: 2
related: ["domains/dns-records/fivem-server", "domains/dns-records/teamspeak-server"]
---

You can make your Minecraft server reachable via your own domain, so players can connect using e.g. `play.yourdomain.com` or `yourdomain.com` – instead of an IP address.

## Requirements

- A domain with EmeraldHost
- The IP address and port of your Minecraft server (you can find these in the **dashboard** of your server)

## Connect with subdomain (e.g. play.yourdomain.com)

1. **Open DNS settings**\
   Open the management of your domain and click on **DNS Settings**.

2. **Create A record**\
   Create a new record with type **A**:

   | Field | Value |
   |-------|-------|
   | Type | `A` |
   | Name | `play` |
   | Target | Your server IP address |

3. **Create SRV record**\
   Create a new record with type **SRV** so Minecraft can find the correct port:

   **Name:**

   | Field | Value |
   |-------|-------|
   | Service Name | `_minecraft` |
   | Protocol | `TCP` |
   | Name | `play` |

   **Target:**

   | Field | Value |
   |-------|-------|
   | Priority | `0` |
   | Weight | `5` |
   | Port | Your server port |
   | Target | `play.yourdomain.com` |

4. **Test connection**\
   Wait a few minutes for the DNS changes to take effect, then connect in-game using `play.yourdomain.com`.

## Connect without subdomain (e.g. yourdomain.com)

1. **Open DNS settings**\
   Open the management of your domain and click on **DNS Settings**.

2. **Create A record**\
   Create a new record with type **A**:

   | Field | Value |
   |-------|-------|
   | Type | `A` |
   | Name | `@` |
   | Target | Your server IP address |

3. **Create SRV record**\
   Create a new record with type **SRV**:

   **Name:**

   | Field | Value |
   |-------|-------|
   | Service Name | `_minecraft` |
   | Protocol | `TCP` |
   | Name | leave empty |

   **Target:**

   | Field | Value |
   |-------|-------|
   | Priority | `0` |
   | Weight | `5` |
   | Port | Your server port |
   | Target | `yourdomain.com` |

4. **Test connection**\
   Wait a few minutes for the DNS changes to take effect, then connect in-game using `yourdomain.com`.

> [!NOTE]
> DNS changes can take up to 24 hours to propagate worldwide. However, they are usually available within a few minutes.

> [!TIP]
> If your server uses the default port `25565`, the A record alone is sufficient. The SRV record is only needed if your server uses a different port.
