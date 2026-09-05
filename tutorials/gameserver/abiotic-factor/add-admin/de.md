---
slug: "admin-hinzufuegen"
language: "de"
title: "So fügst Du einen Admin auf Deinem Abiotic Factor Server hinzu"
description: "Admin auf einem Abiotic Factor Server hinzufügen"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["abiotic-factor"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Admin hinzufügen"
sort: 1
related: ["gameserver/abiotic-factor/add-savegame", "gameserver/abiotic-factor/create-backup", "gameserver/abiotic-factor/download-savegame", "gameserver/abiotic-factor/join-server"]
---

Admins legst Du auf einem Abiotic Factor Server über die Datei `Admin.ini` fest. Eingetragen wird die **SteamID64** des Spielers – eine 17-stellige Zahl, die mit `7656` beginnt.

> [!TIP]
> Hier findest Du eine Anleitung, wie Du eine [SteamID64](/tutorials/gameserver/steamid64-find-out) herausfindest.

> [!NOTE]
> Die Anmeldung als Admin funktioniert nur über eine SteamID64. Spieler auf Xbox oder PlayStation lassen sich auf diesem Weg **nicht** als Admin eintragen.

## Admin über die Admin.ini hinzufügen

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung. Die Adminliste wird nur beim Serverstart eingelesen.

2. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

3. **Admin.ini öffnen**\
   Öffne folgende Datei. Existiert sie noch nicht, starte den Server einmal, damit sie angelegt wird:

   ```text
   /AbioticFactor/Saved/SaveGames/Server/Admin.ini
   ```

   > [!NOTE]
   > **Abweichender Pfad möglich**
   >
   > Der Pfad der Datei lässt sich über den Startparameter `-AdminIniPath=` verlegen – der Wert wird relativ zum Ordner `Saved` angegeben. Findest Du die Datei nicht am oben genannten Ort, schau zusätzlich hier nach:
   >
   > ```text
   > /AbioticFactor/Saved/Config/WindowsServer/Admin.ini
   > ```

4. **SteamID64 eintragen**\
   Trage die SteamID64 unter dem Abschnitt `[Moderators]` ein. Pro Admin schreibst Du eine eigene Zeile:

   ```ini
   [Moderators]
   Moderator=76561198012345678
   Moderator=76561198087654321
   ```

5. **Server starten**\
   Speichere die Datei und starte Deinen Server.

> [!WARNING]
> Die SteamID64 muss rein numerisch und exakt 17 Zeichen lang sein. Ein Steam-Anzeigename oder eine benutzerdefinierte Profil-URL funktioniert an dieser Stelle nicht.

## Alternative über ein Admin-Passwort

Abiotic Factor unterstützt zusätzlich den Startparameter `-AdminPassword=<Passwort>`. Ist er gesetzt, kann sich ein Spieler im Spiel durch Eingabe dieses Passworts selbst Adminrechte geben – ganz ohne Eintrag in der `Admin.ini`.

> [!NOTE]
> Ob Deine Verwaltung ein Feld für das Admin-Passwort oder für zusätzliche Startparameter anbietet, siehst Du unter **Einstellungen**. Das Admin-Passwort ist unabhängig vom Server-Passwort – es sind zwei verschiedene Passwörter.

> [!WARNING]
> Jeder, der das Admin-Passwort kennt, kann sich damit Adminrechte auf Deinem Server verschaffen. Gib es nur an Personen weiter, denen Du vertraust, und verwende ein anderes Passwort als das Server-Passwort.

## Admin-Menü im Spiel öffnen

1. **Server beitreten**\
   Tritt Deinem Server bei – siehe [Server beitreten](/tutorials/gameserver/abiotic-factor/join-server).

2. **Menü öffnen**\
   Drücke `Esc`, um das Spielmenü zu öffnen.

3. **Admin-Bereich öffnen**\
   Wähle den Tab **Admin**. Dort findest Du die Liste der verbundenen Spieler und die Admin-Funktionen.

4. **Adminrechte prüfen**\
   Ist der Bereich **Admin** für Dich zugänglich, hat der Server Dich als Admin erkannt. Fehlt er, wurde Deine SteamID64 nicht übernommen – prüfe den Eintrag in der `Admin.ini` und starte den Server neu.

> [!TIP]
> Wie Du als Admin Spieler vom Server entfernst, erfährst Du unter [Spieler kicken & bannen](/tutorials/gameserver/abiotic-factor/kick-ban-players).

> [!WARNING]
> **Keine Chat- oder Konsolenbefehle**
>
> Für Abiotic Factor sind **keine** Admin-Befehle im Chat und keine Serverkonsole dokumentiert, über die Du Adminrechte vergeben könntest. Häufig kursierende Befehle wie `#SetAdmin` oder Konfigurationswerte wie `AdminSteamIDs` tauchen in der offiziellen Dokumentation nicht auf – Admins vergibst Du über die `Admin.ini` oder das Admin-Passwort.
