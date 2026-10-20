---
slug: "establish-sftp-connection"
language: "en"
title: "How to Establish an SFTP Connection with Your Gameserver"
description: "Step-by-step instructions on how to establish an SFTP connection with your gameserver."
tags: []
date: "2025-06-24"
visibility: "public"
updated: "2026-10-20"
cta: "gameserver"
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Establish SFTP Connection"
sort: 1
related: ["gameserver/use-file-browser", "gameserver/create-backup", "gameserver/create-database", "gameserver/steamid64-find-out"]
---

1. **Open dashboard**\
   Open your dashboard and select your server.

2. **Open the File Manager**\
   In your server's dashboard, click **File Manager** in the left sidebar.

3. **Read the credentials**\
   At the very top you find four cards with your SFTP credentials: **FTP Server**, **FTP Port** (e.g. `2022`), **FTP Username** and **FTP Password**.

4. **Show the password**\
   The password is hidden. Click the eye icon in the **FTP Password** card to show it. With the green icon in the top right of the card you can set a new password if needed.

5. **Open SFTP program**\
   Open an SFTP program of your choice, for example [FileZilla](https://filezilla-project.org/) or [WinSCP](https://winscp.net/index.php).

6. **Enter access data**\
   Enter the credentials there:

   - **Server:** The address from the **FTP Server** card.
   - **User name:** The value from the **FTP Username** card.
   - **Password:** The value from the **FTP Password** card.
   - **Port:** The value from the **FTP Port** card, e.g. `2022`.

   If the address already contains a port after the `:`, enter only the part before it as the server.

7. **Manage files**\
   Now you can access, edit, delete or upload new files to your server.

> [!TIP]
> For smaller changes you don't need an SFTP program: in the [File Manager](/tutorials/gameserver/use-file-browser) you can also edit and upload files directly in the dashboard.
