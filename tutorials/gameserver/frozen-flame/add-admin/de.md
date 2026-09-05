---
slug: "admin-hinzufuegen"
language: "de"
title: "So erhältst Du Adminrechte auf Deinem Frozen Flame Server"
description: "Adminrechte auf einem Frozen Flame Server nutzen"
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
short_title: "Admin hinzufügen"
sort: 1
related: ["gameserver/frozen-flame/add-savegame", "gameserver/frozen-flame/create-backup", "gameserver/frozen-flame/download-savegame", "gameserver/frozen-flame/join-server"]
---

Frozen Flame hat **keine Adminliste und keine Admindatei**. Verwaltet wird Dein Server ausschließlich über **RCON**: Wer das RCON-Passwort und den RCON Port kennt, kann alle Adminbefehle ausführen.

> [!WARNING]
> Behandle das RCON-Passwort wie ein Admin-Passwort und gib es nur an Personen weiter, denen Du vertraust. Es gibt keine abgestuften Rechte – jeder mit RCON-Zugriff hat die volle Kontrolle über Deinen Server.

## RCON-Zugangsdaten

RCON ist auf Deinem Server bereits eingerichtet. Du benötigst lediglich drei Angaben:

- **IP-Adresse**\
  Die IP-Adresse Deines Servers findest Du in der **Verwaltung**.

- **RCON Port**\
  Den RCON Port findest Du ebenfalls in der **Verwaltung** in der Port-Übersicht. Er ist nicht mit dem Game Port oder dem Query Port identisch.

- **RCON-Passwort**\
  Das RCON-Passwort findest und änderst Du in der **Verwaltung**.

## Mit RCON verbinden

1. **RCON-Tool öffnen**\
   Öffne einen RCON-Client. Die Entwickler nennen dafür beispielhaft **mcrcon**, jeder andere RCON-Client funktioniert ebenso.

2. **Verbindungsdaten eingeben**\
   Trage die IP-Adresse Deines Servers und den RCON Port aus der Verwaltung ein.

3. **Passwort eingeben**\
   Trage das Passwort im folgenden Format ein:

   ```text
   admin:<RCON-Passwort>
   ```

   > [!IMPORTANT]
   > Der Präfix `admin:` gehört zwingend mit ins Passwortfeld. Gibst Du nur das reine RCON-Passwort ein, weist der Server die Verbindung ab. Das ist der häufigste Grund, warum der RCON-Login bei Frozen Flame scheitert.

4. **Befehle ausführen**\
   Nach erfolgreicher Verbindung kannst Du die Adminbefehle absetzen.

## Adminbefehle im Überblick

| Befehl | Beschreibung |
|--------|-------------|
| `Admin_GetOnlinePlayers` | Zeigt alle aktuell verbundenen Spieler mit ihrer PlayerID an |
| `Admin_ListUserProfiles` | Listet die auf dem Server gespeicherten Spielerprofile auf |
| `Admin_ChatMessage [Nachricht]` | Sendet eine Nachricht an alle Spieler |
| `Admin_SaveWorld` | Speichert die Welt |
| `Admin_SaveAll` | Speichert Welt und Spielerdaten |
| `Admin_ScheduleMaintenanceMode <Sekunden>` | Kündigt den Wartungsmodus nach der angegebenen Zeit an |
| `Admin_CancelScheduledMaintenanceMode` | Bricht den geplanten Wartungsmodus wieder ab |
| `Admin_Restart` | Startet den Server neu |
| `Admin_Shutdown` | Fährt den Server herunter |

> [!NOTE]
> Die spitzen und eckigen Klammern in der Befehlsübersicht sind reine Platzhalter. Tippe sie nicht mit ein, sondern setze direkt den Wert ein – zum Beispiel `Admin_ScheduleMaintenanceMode 300`.

> [!TIP]
> Setze vor einem Backup oder dem Herunterladen Deines Spielstands `Admin_SaveAll` ab, damit der aktuelle Stand auf der Festplatte liegt – siehe [Savegame herunterladen](/tutorials/gameserver/frozen-flame/download-savegame).

> [!WARNING]
> `Admin_Shutdown` beendet den Serverprozess. Ob Dein Server danach automatisch wieder startet, hängt von den Einstellungen in der **Verwaltung** ab – starte ihn im Zweifel dort manuell neu.

## Adminrechte für einzelne Spieler

> [!IMPORTANT]
> Es gibt weder eine Admindatei noch ein Admin-Passwort für den Client: Adminrechte hat ausschließlich, wer Zugriff auf RCON hat. Der Befehl `Admin_AddUserProfile <PlayerID> <Rolle>` weist einem Spieler zwar eine Rolle zu, welche Rollennamen dabei gültig sind, ist jedoch **nirgends dokumentiert** – ein verlässliches Vorgehen für spielerbezogene Adminrechte existiert damit nicht. Anleitungen, die eine Datei wie `AdminList.txt` oder einen Chatbefehl zum Freischalten nennen, sind für Frozen Flame nicht belegt.

> [!TIP]
> Wie Du Spieler über RCON vom Server entfernst, erfährst Du unter [Spieler kicken & bannen](/tutorials/gameserver/frozen-flame/kick-ban-players).
