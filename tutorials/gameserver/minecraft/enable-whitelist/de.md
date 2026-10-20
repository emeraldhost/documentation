---
slug: "whitelist-aktivieren"
language: "de"
title: "So aktivierst Du die Whitelist auf einem Minecraft Java Edition Server"
description: "Whitelist auf einem Minecraft Java Edition Server aktivieren"
tags: []
date: "2023-10-15"
visibility: "public"
updated: "2026-10-20"
cta: "gameserver"
product_keys: ["minecraft"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Whitelist aktivieren"
sort: 26
related: ["gameserver/minecraft/manage-players", "gameserver/minecraft/grant-op-rights", "gameserver/minecraft/kick-ban-players", "gameserver/minecraft/fix-server-crashes"]
---

Eine Whitelist ist eine Funktion in Minecraft, die es Serveradministratoren ermöglicht, eine Liste von Spielern zu erstellen, die den Server betreten dürfen, während andere Spieler abgewiesen werden. Es dient dazu, unerwünschte Spieler fernzuhalten und diejenigen zuzulassen, die vom Serverbetreiber genehmigt wurden.

> [!NOTE]
> Im Dashboard heißt die Whitelist „Allowlist“. Gemeint ist dieselbe Funktion.

## Whitelist im Dashboard aktivieren (empfohlen)

Am einfachsten aktivierst Du die Whitelist auf der Seite **Spieler** in der Verwaltung Deines Servers. Jede Änderung wird sofort als Befehl an die Konsole geschickt.

1. **Spieler-Seite öffnen**\
   Öffne die Verwaltung Deines Servers und klicke in der linken Seitenleiste auf **Spieler**.

2. **Spieler eintragen**\
   Klicke auf **Spieler hinzufügen**, gib den **Minecraft-Name** ein, wähle unter **Wohin?** die Option **Allowlist** und klicke auf **Zur Allowlist hinzufügen**. Trage am besten zuerst Dich selbst ein. Spieler, die schon einmal auf Deinem Server waren, kannst Du auch über das Menü **…** in der Spielerliste mit **Zur Allowlist hinzufügen** eintragen.

3. **Allowlist einschalten**\
   Aktiviere auf der Karte **Allowlist** den Schalter **Allowlist aktiv**. Ab jetzt dürfen nur noch eingetragene Spieler beitreten.

Wie Du Spieler wieder entfernst und was die Seite sonst noch kann, erfährst Du unter [Spieler verwalten](/tutorials/gameserver/minecraft/manage-players).

## Whitelist per Befehl aktivieren

Alternativ kannst Du die Whitelist per Befehl aktivieren. Dafür brauchst Du Zugriff auf die Server-Konsole oder [OP-Rechte](/tutorials/gameserver/minecraft/grant-op-rights) im In-Game Chat sowie den Namen des Spielers, den Du zur Whitelist hinzufügen möchtest.

1. **Konsole oder Chat öffnen**\
   Öffne die Server-Konsole, wenn Du direkten Zugang hast, oder den In-Game Chat, wenn Du über das Spiel verbunden bist.

2. **Whitelist aktivieren**\
   In der Server-Konsole oder im In-Game Chat gib den Befehl ein, um die Whitelist zu aktivieren. Der Befehl lautet:

   ```text
   /whitelist on
   ```

3. **Spieler hinzufügen**\
   In der Server-Konsole oder im In-Game Chat gib den Befehl ein, um jemanden zur Whitelist hinzuzufügen. Der Befehl lautet:

   ```text
   /whitelist add Spielername
   ```

   Ersetze `Spielername` durch den Namen des Spielers, den Du zur Whitelist hinzufügen möchtest.

4. **Befehl bestätigen**\
   Drücke „Enter“ oder klicke auf die Schaltfläche, um den Befehl auszuführen.

> [!TIP]
> In der Server-Konsole gibst Du die Befehle ohne `/` ein, z.B. `whitelist on`.
