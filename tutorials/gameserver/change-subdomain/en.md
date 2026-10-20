---
slug: "change-subdomain"
language: "en"
title: "How to Change the Subdomain of Your Game Server"
description: "Copy, change or delete the subdomain of a game server and connect with it"
tags: []
date: "2026-10-20"
visibility: "public"
cta: "gameserver"
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Change Subdomain"
sort: 9
related: ["gameserver/create-backup", "gameserver/set-up-scheduled-tasks", "gameserver/establish-sftp-connection", "gameserver/create-database"]
---

Every game server at EmeraldHost automatically gets its own subdomain in the format `<name>.emerald.game`. Instead of an IP address, your players can connect using this address – it is easier to remember and easier to share. You can change the subdomain at any time, pick a different domain or delete it.

## Copy the Subdomain

Your current subdomain is shown in your server's dashboard directly below the server name. Click it to copy it to your clipboard. You will then see the message "Subdomain erfolgreich kopiert" (Subdomain copied successfully).

You can also find the subdomain on the **Übersicht** (Overview) page in the **Server Informationen** (Server information) box, in the **Subdomain** row.

## Change the Subdomain

1. **Open the overview**\
   Open your server's dashboard and click **Übersicht** (Overview) in the left sidebar.

2. **Edit the subdomain**\
   In the **Server Informationen** (Server information) box, click the pencil icon in the **Subdomain** row. The **Subdomain verwalten** (Manage subdomain) dialog opens.

3. **Choose a subdomain**\
   Enter the name you want in the **Subdomain-Name** (Subdomain name) field. If the name is still available, you will see the message "Diese Subdomain ist verfügbar!" (This subdomain is available!).

4. **Select a domain**\
   Under **Domain auswählen** (Select domain), choose the domain your name is attached to. The following are available:

   - `emerald.game`
   - `emerald-mc.de`
   - `emeraldserver.de`
   - `mygameservers.eu`
   - `mysmp.eu`

   Under **So könnte Deine Subdomain aussehen** (This is what your subdomain could look like), you can see a preview of the finished address. Then click **Weiter** (Next).

5. **Confirm the change**\
   Check your new subdomain in the dialog's **Übersicht** (Overview) step and confirm the change.

> [!TIP]
> After the change, share the new address with your players so they can keep connecting.

## Delete the Subdomain

If you no longer want to use the subdomain, click the trash icon in the **Subdomain** row of the **Server Informationen** (Server information) box on the **Übersicht** (Overview) page. After that, your server can no longer be reached via this subdomain – your players then connect using the IP address.

## Connect with the Subdomain

Your players enter the subdomain in the game wherever they would otherwise enter the IP address, e.g.:

```text
myserver.emerald.game
```

> [!NOTE]
> Whether a port is also needed depends on the game. If your server does not run on the game's default port, your players may need to append the port with a colon, e.g. `myserver.emerald.game:25570`.
