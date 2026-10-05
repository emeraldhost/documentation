---
slug: "spieler-kicken-bannen"
language: "de"
title: "So kickst und bannst Du Spieler auf einem The Bus Server"
description: "Spieler auf einem The Bus Server kicken und bannen"
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
short_title: "Spieler kicken & bannen"
sort: 15
related: ["gameserver/the-bus/add-savegame", "gameserver/the-bus/join-server", "gameserver/the-bus/send-chat-messages", "gameserver/the-bus/spawn-bus"]
---

Alle Befehle in dieser Anleitung gibst Du im **Ingame-Chat** ein. Du benötigst dafür einen entsprechenden Rang (z.B. Owner oder Admin). Wie Du Ränge vergibst, erfährst Du unter [Admin hinzufügen](/tutorials/gameserver/the-bus/add-admin).

> [!TIP]
> Mit `/commands` lässt Du Dir im Ingame-Chat alle verfügbaren Befehle anzeigen.

> [!NOTE]
> Die Konsole in der Verwaltung zeigt auf unseren Servern nur die Ausgabe des Servers an und nimmt keine Befehle entgegen.

## So zeigst Du die Spielerliste an

Um alle Spieler auf dem Server anzuzeigen, gib folgenden Befehl ein:

```text
/list
```

## So kickst Du einen Spieler

```text
/kick <spielername>
```

Damit entfernst Du den Spieler vom Server.

## So bannst Du einen Spieler

```text
/ban <spielername>
```

Damit bannst Du den Spieler dauerhaft.

## So bannst Du einen Spieler temporär

Seit Update 3.2 EA kannst Du Spieler auch zeitlich begrenzt bannen:

```text
/tempban <spielername> <dauer>
```

> [!NOTE]
> In welcher Einheit `/tempban` die Dauer erwartet, ist nicht offiziell dokumentiert. Mit `/commands` lässt Du Dir alle verfügbaren Befehle anzeigen.

## So entbannst Du einen Spieler

```text
/unban <spielername>
```

## So entbannst Du einen Spieler per SFTP

Alternativ kannst Du einen Bann auch direkt in der Spielerdatei aufheben.

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

3. **Datei öffnen**\
   Öffne die Datei `/TheBus/Saved/PlayerData.json`.

4. **Bann aufheben**\
   Suche den Eintrag des gewünschten Spielers und setze den Wert von `"banned"` auf `false`, zum Beispiel:

   ```json
   {
       "name": "Spieler123",
       "banned": false,
       ...
   }
   ```

   > [!TIP]
   > Prüfe die Datei nach dem Bearbeiten mit einem JSON-Formatter wie [JSONLint](https://jsonlint.com/) – ein fehlendes oder überzähliges Komma reicht, damit der Server die Spielerdaten nicht mehr einlesen kann.

5. **Server starten**\
   Speichere die Datei und starte Deinen Server wieder.

## So mutest Du einen Spieler

```text
/mute <spielername>
```

Damit schaltest Du den Spieler für den gesamten Server stumm.

## So entmutest Du einen Spieler

```text
/unmute <spielername>
```

## Befehlsübersicht

| Befehl | Beschreibung |
|--------|-------------|
| `/list` | Alle Spieler anzeigen |
| `/kick <spielername>` | Spieler vom Server kicken |
| `/ban <spielername>` | Spieler dauerhaft bannen |
| `/tempban <spielername> <dauer>` | Spieler temporär bannen |
| `/unban <spielername>` | Spieler entbannen |
| `/mute <spielername>` | Spieler serverweit stummschalten |
| `/unmute <spielername>` | Serverweite Stummschaltung aufheben |
| `/commands` | Verfügbare Befehle anzeigen |
