---
slug: "establish-sftp-connection"
language: "en"
title: "How to Establish an SFTP Connection with Your Gameserver"
description: "Step-by-step instructions on how to establish an SFTP connection with your gameserver."
tags: []
date: "2025-06-24"
visibility: "public"
updated: "2026-03-19"
cta: "gameserver"
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Establish SFTP Connection"
sort: 1
related: ["gameserver/create-database", "gameserver/create-backup", "gameserver/epicgamesid-find-out", "gameserver/steamid64-find-out"]
---

1. **Open dashboard**\
   Open your dashboard and select your server.

2. **Go to overview**\
   Go to the "Overview" section.

3. **Show access data**\
   Click on "Show access data" on the right under "SFTP".

4. **Copy access data**\
   A modal with your SFTP access data appears.

5. **Open SFTP program**\
   Open an SFTP program of your choice, for example [FileZilla](https://filezilla-project.org/) or [WinSCP](https://winscp.net/index.php).

6. **Enter access data**\
   Insert the displayed access data there:

   - **Server:** The displayed server address.
   - **User name:** Your user name.
   - **Password:** Your password.
   - **Port:** The port is set automatically. If not, you will find it after the server address, after the `:` (e.g. `sftp://example.emeraldhost.de:2022`).

7. **Manage files**\
   Now you can access, edit, delete or upload new files to your server.
