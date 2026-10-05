---
slug: "admin-hinzufuegen"
language: "de"
title: "So fügst Du einen Admin auf einem The Bus Server hinzu"
description: "Admin auf einem The Bus Server hinzufügen"
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
short_title: "Admin hinzufügen"
sort: 1
related: ["gameserver/the-bus/activate-dlc", "gameserver/the-bus/change-fleet", "gameserver/the-bus/change-map", "gameserver/the-bus/change-operating-plan"]
---

The Bus verwendet ein Rang-System mit vier Stufen. Du kannst Ränge über die `PlayerData.json` oder über Befehle im Spiel vergeben. Zusätzlich schützt das Admin-Passwort den Zugang zum Admin-Menü.

## Rang-System

| Rang | Beschreibung |
|------|-------------|
| **Owner** | Höchste Stufe |
| **Admin** | Zugriff auf das Admin-Menü ohne erneute Passworteingabe |
| **Moderator** | Wird wie Admins im Chat hervorgehoben |
| **User** | Keine zusätzlichen Rechte |

## So vergibst Du Ränge über die PlayerData.json

> [!WARNING]
> Der Spieler muss sich mindestens einmal mit dem Server verbunden haben, damit ein Eintrag in der `PlayerData.json` vorhanden ist. Um Dir selbst den Owner-Rang zu geben, tritt Deinem Server deshalb zuerst einmal bei und führe danach die folgenden Schritte für Deinen eigenen Eintrag aus.

> [!TIP]
> Erstelle vor dem Bearbeiten ein [Backup](/tutorials/gameserver/the-bus/create-backup).

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

3. **Datei öffnen**\
   Öffne die Datei `/TheBus/Saved/PlayerData.json`.

4. **Rang ändern**\
   Suche den Eintrag des gewünschten Spielers und setze bei dem Feld mit seinem Rang den Wert auf `"Owner"`, `"Admin"` oder `"Moderator"`. Alle anderen Angaben des Eintrags lässt Du unverändert.

   > [!TIP]
   > Prüfe die Datei nach dem Bearbeiten mit einem JSON-Formatter wie [JSONLint](https://jsonlint.com/) – ein fehlendes oder überzähliges Komma reicht, damit der Server die Spielerdaten nicht mehr einlesen kann.

5. **Server starten**\
   Speichere die Datei und starte Deinen Server wieder.

## So öffnest Du das Admin-Menü mit dem Admin-Passwort

> [!WARNING]
> Das Standard-Admin-Passwort lautet `BitteAendereMich`. Ändere es in der Verwaltung unter **Einstellungen** im Feld **Admin Passwort**, denn jeder, der das Passwort kennt, kann das Admin-Menü öffnen. Mehr dazu findest Du unter [Server konfigurieren](/tutorials/gameserver/the-bus/configure-server).

1. **Admin-Menü öffnen**\
   Öffne im Spiel das Pausenmenü und wähle das Admin-Menü.

2. **Admin-Passwort eingeben**\
   Gib das Admin-Passwort Deines Servers ein. Damit erhältst Du Zugriff auf das Admin-Menü. Einen Rang bekommst Du dadurch nicht – Ränge vergibst Du über die `PlayerData.json` oder per Befehl.

> [!NOTE]
> Spieler mit dem Rang Admin werden beim Öffnen des Admin-Menüs nicht nach dem Passwort gefragt.

## So vergibst Du Ränge über Befehle

Als Owner kannst Du anderen Spielern im Ingame-Chat über folgende Befehle Ränge zuweisen:

| Befehl | Beschreibung |
|--------|-------------|
| `/owner <spielername>` | Spieler zum Owner machen |
| `/admin <spielername>` | Spieler zum Admin machen |
| `/mod <spielername>` | Spieler zum Moderator machen |
| `/user <spielername>` | Spieler zum normalen Spieler (User) zurückstufen |

Ersetze `<spielername>` durch den Steam-Namen des Spielers, zum Beispiel:

```text
/admin Spieler123
```

Die Namen aller Spieler auf dem Server zeigt Dir `/list` an. Mit `/commands` lässt Du Dir alle verfügbaren Befehle anzeigen.

> [!NOTE]
> Der Befehl `/owner` stammt aus dem offiziellen [Server-Guide von TML-Studios](https://steamcommunity.com/sharedfiles/filedetails/?id=3464410642) und wird von `/commands` nicht mit aufgelistet. Gib die Befehle im Spiel über den Chat ein. Die Konsole in der Verwaltung zeigt auf unseren Servern nur die Ausgabe des Servers an und nimmt keine Befehle entgegen.

## Admin-Menü im Spiel

Als Owner siehst Du im Admin-Menü (Pausenmenü) zusätzliche Optionen, z.B. für:

- den Servernamen (siehe [Server konfigurieren](/tutorials/gameserver/the-bus/configure-server))
- die Karte (siehe [Map ändern](/tutorials/gameserver/the-bus/change-map))
- den Fahrplan (siehe [Fahrplan ändern](/tutorials/gameserver/the-bus/change-operating-plan))
- die Flotte (siehe [Flotte ändern](/tutorials/gameserver/the-bus/change-fleet))

> [!NOTE]
> Servername, Server-Passwort, Admin-Passwort, maximale Spieleranzahl und die Sichtbarkeit in der Serverliste setzt die Verwaltung bei jedem Start auf die Werte unter **Einstellungen** zurück. Ändere diese Werte deshalb in der Verwaltung.
