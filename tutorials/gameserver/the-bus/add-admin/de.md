---
slug: "admin-hinzufuegen"
language: "de"
title: "So fügst Du einen Admin auf einem The Bus Server hinzu"
description: "Admin auf einem The Bus Server hinzufügen"
tags: []
date: "2026-02-24"
visibility: "public"
updated: "2026-08-29"
cta: "gameserver"
product_keys: ["the-bus"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Admin hinzufügen"
sort: 1
related: ["gameserver/the-bus/activate-dlc", "gameserver/the-bus/change-fleet", "gameserver/the-bus/change-map", "gameserver/the-bus/change-operating-plan"]
---

The Bus verwendet ein Rang-System mit vier Stufen. Du kannst Spieler über die `PlayerData.json` oder über Befehle hinzufügen.

## Rang-System

| Rang | Beschreibung |
|------|-------------|
| **Owner** | Vollzugriff, höchste Berechtigungsstufe |
| **Admin** | Administrative Rechte, Zugriff auf das Admin-Menü ohne erneute Passworteingabe |
| **Moderator** | Moderationsrechte |
| **User** | Standard-Rang für alle Spieler |

## So vergibst Du Ränge über die PlayerData.json

1. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

2. **Datei öffnen**\
   Öffne die Datei `TheBus/Saved/PlayerData.json`.

3. **Rang ändern**\
   Suche den gewünschten Spieler und ändere den Wert von `"perms"` auf `"Owner"`, `"Admin"` oder `"Moderator"`:

   ```json
   {
       "players": [
           {
               "name": "SpielerName",
               "uniqueId": "|0002xxxxxxxxxxxxxxxxxxxxxxxxxxxx",
               "perms": "Owner",
               "banned": false,
               "unbanDate": "0001.01.01-00.00.00",
               "adminPasswordUsed": ""
           },
           {
               "name": "AndererSpieler",
               "uniqueId": "|0002xxxxxxxxxxxxxxxxxxxxxxxxxxxx",
               "perms": "Admin",
               "banned": false,
               "unbanDate": "0001.01.01-00.00.00",
               "adminPasswordUsed": ""
           }
       ]
   }
   ```

   > [!TIP]
   > Prüfe die Datei nach dem Bearbeiten mit einem JSON-Formatter wie [JSONLint](https://jsonlint.com/) – ein fehlendes oder überzähliges Komma reicht, damit der Server die Spielerdaten nicht mehr einlesen kann.

4. **Server neu starten**\
   Speichere die Änderungen und starte den Server neu.

> [!WARNING]
> **Wichtig**
>
> Der Spieler muss sich mindestens einmal mit dem Server verbunden haben, damit ein Eintrag in der `PlayerData.json` vorhanden ist.

> [!TIP]
> Tritt als Erstes Deinem Server bei und vergib Dir selbst den Owner-Rang, bevor andere Spieler beitreten.

## So vergibst Du Ränge über Befehle

Ränge können auch über Befehle vergeben werden – entweder über die Konsole in der Verwaltung oder direkt im Spiel.

| Befehl | Beschreibung |
|--------|-------------|
| `/owner <spielername>` | Spieler zum Owner befördern |
| `/admin <spielername>` | Spieler zum Admin befördern |
| `/mod <spielername>` | Spieler zum Moderator befördern |
| `/user <spielername>` | Spieler zum User zurückstufen |

> [!TIP]
> Wenn Du Dir über die `PlayerData.json` den Owner-Rang vergeben hast, kannst Du diese Befehle auch direkt über den Ingame-Chat eingeben.

## Admin-Menü im Spiel

Spieler mit **Owner**- oder **Admin**-Rechten können über das Pausenmenü das **Admin-Menü** öffnen. Dort lassen sich folgende Einstellungen ändern:

- **Map-Auswahl**
- **Fahrplan** (Operating Plan)
- **Wetter**

> [!NOTE]
> Es wird empfohlen, ein Admin-Passwort zu setzen, damit nicht jeder Spieler das Admin-Menü öffnen kann. Das Admin-Passwort lässt sich in der Verwaltung unter den Einstellungen festlegen.
