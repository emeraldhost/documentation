---
slug: "chat-nachrichten-senden"
language: "de"
title: "So sendest Du Chat-Nachrichten auf einem The Bus Server"
description: "Chat-Nachrichten und private Nachrichten auf einem The Bus Server senden"
tags: []
date: "2026-02-24"
visibility: "public"
updated: "2026-10-05"
cta: "gameserver"
product_keys: ["the-bus"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Chat-Nachrichten senden"
sort: 4
related: ["gameserver/the-bus/join-server", "gameserver/the-bus/kick-ban-players", "gameserver/the-bus/spawn-bus", "gameserver/the-bus/teleport"]
---

Über den Ingame-Chat von The Bus schreibst Du mit den anderen Spielern auf Deinem Server. Mit Befehlen sendest Du außerdem Server-Nachrichten an alle Spieler oder private Nachrichten an einzelne Spieler.

> [!NOTE]
> Nachrichten und Befehle gibst Du ausschließlich im Ingame-Chat ein. Die Konsole in der Verwaltung zeigt auf unseren Servern nur die Ausgabe des Servers an und nimmt keine Eingaben entgegen – Nachrichten lassen sich daher nicht aus der Verwaltung heraus senden.

> [!TIP]
> Für die Befehle in dieser Anleitung brauchst Du Owner- oder Admin-Rechte. Wie Du Ränge vergibst, erfährst Du unter [Admin hinzufügen](/tutorials/gameserver/the-bus/add-admin).

## So sendest Du eine Nachricht an alle Spieler

Gib einen der folgenden Befehle im Ingame-Chat ein und ersetze `<nachricht>` durch Deinen Text:

```text
/say <nachricht>
```

oder

```text
/send <nachricht>
```

Beide Befehle senden die Nachricht in den Chat.

## So sendest Du eine private Nachricht

```text
/whisper <spieler> <nachricht>
```

Ersetze `<spieler>` durch den Namen des Spielers. Die Nachricht erhält nur dieser Spieler. Die Namen aller Spieler auf dem Server zeigt Dir `/list` an.

## Befehlsübersicht

| Befehl | Beschreibung |
|--------|-------------|
| `/say <nachricht>` | Nachricht in den Chat senden |
| `/send <nachricht>` | Nachricht in den Chat senden |
| `/whisper <spieler> <nachricht>` | Private Nachricht an einen Spieler senden |
| `/list` | Alle Spieler anzeigen |

Mit `/commands` lässt Du Dir alle verfügbaren Befehle anzeigen.

## Hervorhebung im Chat

Seit Update 3.2 (Early Access) werden Admins und Moderatoren im Chat hervorgehoben. So erkennen die Spieler auf Deinem Server Nachrichten von Admins und Moderatoren direkt.
