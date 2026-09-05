---
slug: "spieler-kicken-bannen"
language: "de"
title: "So kickst und bannst Du Spieler auf Deinem Frozen Flame Server"
description: "Spieler auf einem Frozen Flame Server kicken und bannen"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["frozen-flame"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Spieler kicken & bannen"
sort: 6
related: ["gameserver/frozen-flame/add-savegame", "gameserver/frozen-flame/create-backup", "gameserver/frozen-flame/download-savegame", "gameserver/frozen-flame/join-server"]
---

Spieler entfernst Du auf einem Frozen Flame Server über **RCON**. Ein Befehl, mit dem Du Spieler direkt im Spiel kickst oder bannst, ist nicht dokumentiert.

> [!NOTE]
> Wie Du Dich mit RCON verbindest, erfährst Du unter [Adminrechte nutzen](/tutorials/gameserver/frozen-flame/add-admin). Denk daran, dass das Passwort im Format `admin:<RCON-Passwort>` eingegeben wird.

## Spieler kicken oder bannen

1. **Mit RCON verbinden**\
   Verbinde Dich mit einem RCON-Client mit Deinem Server – siehe [Adminrechte nutzen](/tutorials/gameserver/frozen-flame/add-admin).

2. **PlayerID ermitteln**\
   Lass Dir die verbundenen Spieler mit ihren IDs anzeigen:

   ```text
   Admin_GetOnlinePlayers
   ```

   Spieler, die gerade nicht online sind, findest Du über die gespeicherten Profile:

   ```text
   Admin_ListUserProfiles
   ```

3. **Befehl ausführen**\
   Setze den gewünschten Befehl mit der PlayerID ab, zum Beispiel:

   ```text
   Admin_KickPlayer 123456789 Regelverstoss
   ```

> [!NOTE]
> Die spitzen Klammern in den folgenden Befehlen sind reine Platzhalter – tippe sie nicht mit ein.

## Spieler kicken

```text
Admin_KickPlayer <PlayerID> <Grund>
```

Der Spieler wird vom Server getrennt, kann aber jederzeit wieder beitreten.

## Spieler bannen

```text
Admin_Ban <PlayerID> <Sekunden> <Grund>
```

Die Dauer des Banns gibst Du in **Sekunden** an. `Admin_Ban 123456789 3600 Griefing` sperrt den Spieler also für eine Stunde aus.

> [!WARNING]
> Frozen Flame kennt keinen dokumentierten Wert für einen dauerhaften Bann. Werte wie `0` oder `-1` sind nicht belegt und können unerwartet wirken. Möchtest Du einen Spieler auf unbestimmte Zeit aussperren, trage stattdessen eine entsprechend große Sekundenzahl ein – zum Beispiel `31536000` für ein Jahr.

## Bann aufheben

```text
Admin_Unban <PlayerID>
```

> [!NOTE]
> Eine Datei mit gebannten Spielern ist nicht dokumentiert. Banns hebst Du deshalb immer über RCON auf – notiere Dir die PlayerID, bevor Du einen Spieler bannst.

## Spieler im Chat stummschalten

```text
Admin_Chatban <PlayerID> <Sekunden> <Grund>
```

```text
Admin_ChatUnban <PlayerID>
```

Auch hier gibst Du die Dauer in Sekunden an.

## Profil entfernen

```text
Admin_RemoveUserProfile <PlayerID>
```

```text
Admin_RemoveProfile <PlayerID>
```

> [!IMPORTANT]
> `Admin_RemoveProfile` entfernt den Spieler **inklusive seiner Speicherdaten** – sein Fortschritt auf Deinem Server ist damit weg. `Admin_RemoveUserProfile` entfernt nur das Profil. Erstelle vorher ein [Backup](/tutorials/gameserver/frozen-flame/create-backup), wenn Du Dir nicht sicher bist.

## Befehle im Überblick

| Befehl | Beschreibung |
|--------|-------------|
| `Admin_GetOnlinePlayers` | Verbundene Spieler mit ihrer PlayerID anzeigen |
| `Admin_ListUserProfiles` | Gespeicherte Spielerprofile auflisten |
| `Admin_KickPlayer <PlayerID> <Grund>` | Spieler vom Server trennen |
| `Admin_Ban <PlayerID> <Sekunden> <Grund>` | Spieler für die angegebene Zeit aussperren |
| `Admin_Unban <PlayerID>` | Bann aufheben |
| `Admin_Chatban <PlayerID> <Sekunden> <Grund>` | Spieler im Chat stummschalten |
| `Admin_ChatUnban <PlayerID>` | Stummschaltung aufheben |
| `Admin_RemoveUserProfile <PlayerID>` | Profil des Spielers entfernen |
| `Admin_RemoveProfile <PlayerID>` | Spieler inklusive Speicherdaten entfernen |
| `Admin_ChatMessage [Nachricht]` | Nachricht an alle Spieler senden |

> [!NOTE]
> In welchem Format die PlayerID vorliegt, ist nicht dokumentiert. Nutze deshalb immer die IDs, die Dir `Admin_GetOnlinePlayers` oder `Admin_ListUserProfiles` ausgeben, statt eine ID aus einer anderen Quelle einzutragen.
