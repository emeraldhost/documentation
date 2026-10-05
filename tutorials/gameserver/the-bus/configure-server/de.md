---
slug: "server-konfigurieren"
language: "de"
title: "So konfigurierst Du Deinen The Bus Server"
description: "The Bus Server über die Verwaltung, das Admin-Menü und die ServerSettings.cfg konfigurieren"
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
short_title: "Server konfigurieren"
sort: 14
related: ["gameserver/the-bus/change-traffic", "gameserver/the-bus/change-weather", "gameserver/the-bus/create-backup", "gameserver/the-bus/download-savegame"]
---

Deinen The Bus Server kannst Du über die **Verwaltung**, das **Admin-Menü im Spiel** und die Datei `ServerSettings.cfg` anpassen.

## Einstellungen in der Verwaltung

In der Verwaltung kannst Du folgende Optionen anpassen:

| Einstellung | Beschreibung |
|-------------|-------------|
| **Server Name** | Der angezeigte Name Deines Servers |
| **Server Passwort** | Passwort, das Spieler zum Beitreten eingeben müssen |
| **Admin Passwort** | Passwort für das Admin-Menü. Standard ist `BitteAendereMich`, das Feld darf nicht leer sein. |
| **Maximale Spieler** | Die maximale Anzahl an Spielern auf dem Server |
| **Serverliste** | `1` = Server wird in der öffentlichen Serverliste angezeigt, `0` = Server ist dort ausgeblendet |
| **Auto Update** | `1` = Server wird beim Start automatisch aktualisiert, `0` = kein automatisches Update |

1. **Verwaltung öffnen**\
   Öffne die Verwaltung Deines Servers.

2. **Einstellungen öffnen**\
   Navigiere zu den **Einstellungen**.

3. **Wert ändern**\
   Passe das gewünschte Feld an.

4. **Speichern und neu starten**\
   Speichere die Einstellung und starte Deinen Server neu.

> [!NOTE]
> Bei jedem Start schreibt die Verwaltung diese Werte in die Datei `/TheBus/Settings/ServerSettings.cfg` (Schlüssel `serverName`, `serverPassword`, `adminPassword`, `listServerAsPublic` und `maxPlayerCount`). Änderungen an diesen Werten, die Du im Spiel oder direkt in der Datei vornimmst, werden beim nächsten Neustart wieder zurückgesetzt. Ändere diese Einstellungen deshalb immer unter **Einstellungen** in der Verwaltung.

> [!WARNING]
> Ändere das Standard-Admin-Passwort `BitteAendereMich` sofort. Wer das Admin-Passwort kennt, erhält Zugriff auf das Admin-Menü und damit auf die Servereinstellungen.

## Admin-Menü im Spiel

Über das Pausenmenü öffnest Du das **Admin-Menü** (geschützt durch das Admin-Passwort). Darin lassen sich unter anderem Map, Fahrplan und Flotte einstellen:

| Einstellung | Beschreibung |
|-------------|-------------|
| **Map** | Die aktive Karte auswählen |
| **Fahrplan** | Den Fahrplan (Operating Plan) für Busrouten festlegen |
| **Flotte** | Die verfügbaren Busse (Fleet) festlegen |

> [!NOTE]
> Änderungen an Map, Flotte und Fahrplan im Admin-Menü werden in den Servereinstellungen gespeichert und bleiben nach einem Neustart erhalten.

Wie Du Map, Fahrplan und Flotte im Detail änderst, erfährst Du in den Anleitungen [Map ändern](/tutorials/gameserver/the-bus/change-map), [Fahrplan ändern](/tutorials/gameserver/the-bus/change-operating-plan) und [Flotte ändern](/tutorials/gameserver/the-bus/change-fleet). Wie Du eine Karte aus einem DLC verwendest, erfährst Du unter [DLC-Karte hinzufügen](/tutorials/gameserver/the-bus/add-dlc-map).

## Weitere Einstellungen in der ServerSettings.cfg

Alle übrigen Einträge der `/TheBus/Settings/ServerSettings.cfg` überschreibt die Verwaltung nicht. Diese kannst Du direkt in der Datei ändern:

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

3. **Datei bearbeiten**\
   Öffne die Datei `/TheBus/Settings/ServerSettings.cfg` (JSON-Format) und ändere den gewünschten Wert.

   > [!TIP]
   > Prüfe die Datei nach dem Bearbeiten mit einem JSON-Formatter wie [JSONLint](https://jsonlint.com/) – ein fehlendes oder überzähliges Komma reicht, damit der Server die Einstellungen nicht mehr einlesen kann.

4. **Server starten**\
   Speichere die Datei und starte Deinen Server wieder.

## Verfügbare Befehle

Die folgenden Befehle gibst Du im Ingame-Chat mit einem vorangestellten Schrägstrich ein, z.B. `/list`. Dafür benötigst Du Owner- oder Admin-Rechte, siehe [Admin hinzufügen](/tutorials/gameserver/the-bus/add-admin).

> [!NOTE]
> Befehle gibst Du ausschließlich im Ingame-Chat ein. Die Konsole in der Verwaltung zeigt auf unseren Servern nur die Ausgabe des Servers an und nimmt keine Befehle entgegen. Mit `/commands` lässt Du Dir alle Befehle im Spiel anzeigen.

| Befehl | Beschreibung |
|--------|-------------|
| `/list` | Spieler anzeigen |
| `/kick` | Spieler kicken |
| `/exit` | Server beenden |
| `/stop` | Server beenden |
| `/ban` | Spieler bannen |
| `/unban` | Bann eines Spielers aufheben |
| `/tempban` | Spieler für eine bestimmte Zeit bannen |
| `/send` | Nachricht in den Chat senden |
| `/say` | Nachricht in den Chat senden |
| `/clearBusses` | Ungesteuerte Busse auf der Karte löschen |
| `/mod` | Spieler zum Moderator machen |
| `/admin` | Spieler zum Admin machen |
| `/user` | Spieler zum normalen Spieler (User) machen |
| `/whisper` | Private Nachricht an einen anderen Spieler senden |
| `/operatingPlan` | Betriebsplan (Fahrplan) festlegen |
| `/fleet` | Flotte festlegen |
| `/map` | Aktuelle Karte festlegen |
| `/reload` | Server neu laden |
| `/date` | Aktuelles Datum festlegen |
| `/time` | Aktuelle Uhrzeit festlegen |
| `/useRealTime` | Echtzeit aktivieren (UseRealTime) |
| `/weather` | Wetter festlegen |
| `/mapList` | Verfügbare Karten anzeigen |
| `/tp` | Spieler zu den Koordinaten x y z teleportieren |
| `/tpd` | Spieler richtungsbezogen um x y z teleportieren |
| `/commands` | Alle Befehle anzeigen |
| `/mute` | Spieler für den gesamten Server stummschalten |
| `/unmute` | Serverweite Stummschaltung eines Spielers aufheben |
| `/spawnBus` | Bus an einer Haltestelle spawnen |
| `/dlc` | DLC aktivieren oder deaktivieren |
| `/tickets` | Ticketchance ändern (`0` bis `100`) |
| `/traffic` | Verkehrsdichte ändern |
| `/aiBus` | KI-Busse aktivieren oder deaktivieren |
| `/version` | Version ausgeben |
| `/tickrate` | Tickrate alle 10 Sekunden ins Log schreiben |

Den Owner-Rang vergibst Du mit `/owner <spielername>`. Dieser Befehl stammt aus dem offiziellen [Server-Guide von TML-Studios](https://steamcommunity.com/sharedfiles/filedetails/?id=3464410642) und erscheint nicht in der Ausgabe von `/commands`. Mehr dazu unter [Admin hinzufügen](/tutorials/gameserver/the-bus/add-admin).

> [!WARNING]
> Stoppe oder starte Deinen Server immer über die Verwaltung und nicht mit `/exit` oder `/stop` im Spiel.

Läuft Dein Server nicht wie erwartet, hilft Dir die Anleitung [Server-Probleme beheben](/tutorials/gameserver/the-bus/troubleshoot-server) weiter.
