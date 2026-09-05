---
slug: "spieler-kicken-bannen"
language: "de"
title: "So kickst und bannst Du Spieler auf Deinem Eco Server"
description: "Spieler auf einem Eco Server kicken und bannen"
tags: []
date: "2026-07-30"
visibility: "public"
updated: "2026-08-29"
cta: "gameserver"
product_keys: ["eco"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Spieler kicken & bannen"
sort: 7
related: ["gameserver/eco/add-savegame", "gameserver/eco/create-backup", "gameserver/eco/download-savegame", "gameserver/eco/join-server"]
---

Spieler kannst Du direkt im Spiel per Chat-Befehl entfernen oder dauerhaft über die Datei `/Configs/Users.eco` aussperren.

> [!NOTE]
> Du benötigst Adminrechte, um diese Befehle nutzen zu können. Siehe [Admin hinzufügen](/tutorials/gameserver/eco/add-admin).

## Befehle im Spiel nutzen

1. **Chat öffnen**\
   Drücke im Spiel `Enter`, um den Chat zu öffnen.

2. **Spieler ermitteln**\
   Mit folgendem Befehl siehst Du alle dem Server bekannten Benutzer mit Namen und ID:

   ```text
   /manage listusers
   ```

3. **Befehl ausführen**\
   Gib den gewünschten Befehl ein, zum Beispiel:

   ```text
   /manage ban 76561198012345678 Griefing 1w
   ```

> [!NOTE]
> Alle Befehle akzeptieren als `<NameOderID>` die Account-ID, SteamID, SLG-ID oder den Benutzernamen. Die Kurzformen wie `/kick` oder `/ban` funktionieren gleichwertig zur langen Schreibweise.

## Spieler kicken

```text
/manage kick <NameOderID> [Grund]
```

Der Spieler wird aus der laufenden Sitzung entfernt, kann aber jederzeit wieder beitreten. Kurzform: `/kick`

## Spieler bannen

```text
/manage ban <NameOderID> [Grund] [Dauer]
```

Ohne Angabe einer Dauer gilt der Bann dauerhaft. Kurzform: `/ban`

> [!TIP]
> **Zeitlich begrenzte Banns**
>
> Die Dauer gibst Du im Format `1m`, `1h`, `1d` oder `1w` an – also Minuten, Stunden, Tage oder Wochen:
>
> ```text
> /manage ban 76561198012345678 Regelverstoß 2d
> ```

> [!NOTE]
> **Bannliste anzeigen**
>
> Gibst Du `/manage ban` ohne weitere Angaben ein, zeigt Dir der Server die Liste der gebannten Spieler.

## Bann aufheben

```text
/manage unban <NameOderID> [Grund]
```

Kurzform: `/unban`

## Befehle im Überblick

| Befehl | Kurzform | Beschreibung |
|--------|----------|--------------|
| `/manage listusers` | – | Alle bekannten Benutzer mit Namen und ID anzeigen |
| `/manage whois <Benutzer>` | – | Informationen zu einem Benutzer anzeigen |
| `/manage kick <NameOderID> [Grund]` | `/kick` | Spieler aus der laufenden Sitzung entfernen |
| `/manage ban <NameOderID> [Grund] [Dauer]` | `/ban` | Spieler aussperren, ohne Dauer dauerhaft |
| `/manage unban <NameOderID> [Grund]` | `/unban` | Bann aufheben |
| `/manage mute <NameOderID> [Grund] [Dauer]` | `/mute` | Spieler stummschalten |
| `/manage unmute <NameOderID> [Grund]` | `/unmute` | Stummschaltung aufheben |
| `/manage warnuser <Benutzer> <Warnung>` | – | Verwarnung an einen Spieler senden |

> [!NOTE]
> Diese Befehle gibst Du im **Chat des Spiels** ein. Ob sie sich auch über die Konsole in der Verwaltung absetzen lassen, ist nicht dokumentiert – nutze im Zweifel den Weg über den Chat oder die Konfigurationsdatei.

## Listen über die Konfigurationsdatei verwalten

Banns und Stummschaltungen kannst Du auch ohne laufendes Spiel direkt in der Konfiguration setzen:

```text
/Configs/Users.eco
```

| Abschnitt | Funktion |
|-----------|----------|
| `BlackList` | Gelisteten Benutzern wird die Verbindung zum Server verweigert |
| `MuteList` | Gelistete Benutzer sind stummgeschaltet |
| `Admins` | Benutzer mit Adminrechten, siehe [Admin hinzufügen](/tutorials/gameserver/eco/add-admin) |

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung. Die Konfigurationsdateien werden nur beim Serverstart eingelesen.

2. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

3. **ID eintragen**\
   Öffne `/Configs/Users.eco` und trage die SLG-ID oder SteamID64 im gewünschten Abschnitt unter `$values` ein. Der Aufbau des Abschnitts ist bereits vorhanden – ergänze nur die IDs und lass den Rest unverändert:

   ```json
   "BlackList": {
     "System.String": {
       "$type": "System.Collections.Generic.List`1[[System.String, System.Private.CoreLib]], System.Private.CoreLib",
       "$values": [
         "76561198012345678",
         "76561198087654321"
       ]
     }
   }
   ```

   Das Beispiel zeigt zwei Einträge – sie werden mit einem Komma getrennt. Bei nur einem Eintrag entfällt der zweite samt Komma.

4. **Server starten**\
   Speichere die Datei und starte Deinen Server.

> [!NOTE]
> **Entbannen über die Datei**
>
> Um einen Bann aufzuheben, entfernst Du die ID aus `$values` – inklusive des zugehörigen Kommas. Achte darauf, dass die Datei gültiges JSON bleibt (prüfe sie im Zweifel mit einem JSON-Formatter wie [JSONLint](https://jsonlint.com/)), und starte den Server anschließend neu.

> [!WARNING]
> Auch hier gilt: Benutzernamen funktionieren nicht, es muss eine SLG-ID oder SteamID64 eingetragen werden. Wie Du sie ermittelst, steht unter [Admin hinzufügen](/tutorials/gameserver/eco/add-admin).

> [!NOTE]
> **Whitelist**
>
> `Users.eco` enthält zusätzlich eine `WhiteList`. Sie ist laut offizieller Dokumentation **keine Zugangssperre**: Benutzer auf der Whitelist müssen lediglich kein Server-Passwort eingeben, um sich zu verbinden. Zum Aussperren einzelner Spieler nutzt Du die `BlackList`.
