---
slug: "ingame-skripte-aktivieren"
language: "de"
title: "So erlaubst Du Ingame Skripte auf Deinem Space Engineers Server"
description: "Ingame Skripte auf einem Space Engineers Server erlauben"
tags: []
date: "2026-07-08"
visibility: "public"
updated: "2026-09-27"
cta: "gameserver"
product_keys: ["space-engineers"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Ingame Skripte aktivieren"
sort: 5
related: ["gameserver/space-engineers/download-world", "gameserver/space-engineers/enable-experimental-mode", "gameserver/space-engineers/enable-remote-api", "gameserver/space-engineers/join-server"]
---

Mit dieser Einstellung erlaubst Du das Ausführen von Ingame-Skripten – den C#-Skripten in **Programmierbaren Blöcken**. Ohne diese Option werden solche Skripte beim Laden entfernt.

1. **Verwaltung öffnen**\
   Öffne die Verwaltung Deines Servers.

2. **Einstellungen öffnen**\
   Navigiere zu den **Einstellungen**.

3. **Ingame Skripte aktivieren**\
   Setze die Einstellung **Ingame Skripte** auf `true`, um sie zu erlauben, oder auf `false`, um sie zu verbieten.

4. **Server neu starten**\
   Speichere die Einstellung und starte Deinen Server neu, damit die Änderung übernommen wird.

> [!NOTE]
> Steht **Ingame Skripte** auf `true`, schaltet der Server beim Laden der Welt automatisch den [Experimental Modus](/tutorials/gameserver/space-engineers/enable-experimental-mode) ein – auch wenn er in der Verwaltung auf `false` steht. Du musst ihn also nicht zusätzlich aktivieren. Solange Ingame Skripte erlaubt sind, kannst Du ihn aber auch nicht abschalten.

> [!WARNING]
> Ingame Skripte sind **keine Mods**: Sie werden nicht in die Mod-Liste eingetragen (siehe [Mods hinzufügen](/tutorials/gameserver/space-engineers/add-mods)), sondern im Spiel direkt in einen Programmierbaren Block eingefügt.
