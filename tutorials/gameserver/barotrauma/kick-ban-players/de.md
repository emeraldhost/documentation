---
slug: "spieler-bannen"
language: "de"
title: "So kickst und bannst Du Spieler auf Deinem Barotrauma Server"
description: "Spieler auf einem Barotrauma Server kicken und bannen"
tags: []
date: "2026-04-10"
visibility: "public"
cta: "gameserver"
product_keys: ["barotrauma"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Spieler bannen"
sort: 16
related: ["gameserver/barotrauma/join-server", "gameserver/barotrauma/enable-karma", "gameserver/barotrauma/enable-traitors", "gameserver/barotrauma/set-server-password"]
---

Du kannst Spieler über die Ingame-Konsole kicken, bannen und entbannen.

> [!NOTE]
> Du benötigst Admin-Rechte auf dem Server, um Spieler kicken und bannen zu können.

## Konsole öffnen

Drücke **F3** oder die **Tilde-Taste (~)**, um die Konsole zu öffnen.

## Verbundene Spieler anzeigen

Mit dem folgenden Befehl listest Du alle verbundenen Spieler mit ihren Client-IDs auf:

```text
clientlist
```

> [!TIP]
> Die Client-ID aus `clientlist` brauchst Du für den Befehl `banid`.

## Spieler kicken

```text
kick [name]
```

Ersetze `[name]` durch den Namen des Spielers. Der Spieler wird vom Server entfernt, kann aber wieder beitreten.

## Spieler bannen

Du kannst einen Spieler anhand des Namens oder der Client-ID bannen:

| Befehl | Beschreibung |
|--------|--------------|
| `ban [name]` | Bannt einen Spieler anhand des Namens |
| `banid [client id]` | Bannt einen Spieler anhand der Client-ID |

Der Spieler wird dauerhaft vom Server gebannt.

## Spieler entbannen

Um einen Spieler über die Konsole zu entbannen:

```text
unban [name]
```

Ersetze `[name]` durch den Namen des gebannten Spielers.

## Banliste bearbeiten

Du kannst die Banliste auch direkt über die Datei `banlist.txt` verwalten.

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

3. **banlist.txt öffnen**\
   Öffne die Datei `banlist.txt` unter:

   ```text
   /config/banlist.txt
   ```

4. **Einträge bearbeiten**\
   Entferne den Eintrag des Spielers, um ihn zu entbannen, oder füge manuell einen neuen Eintrag hinzu.

5. **Server starten**\
   Starte Deinen Server.

## Alle Befehle

| Befehl | Beschreibung |
|--------|--------------|
| `clientlist` | Zeigt verbundene Spieler mit IDs an |
| `kick [name]` | Kickt einen Spieler |
| `ban [name]` | Bannt einen Spieler anhand des Namens |
| `banid [client id]` | Bannt einen Spieler anhand der Client-ID |
| `unban [name]` | Entbannt einen Spieler |
