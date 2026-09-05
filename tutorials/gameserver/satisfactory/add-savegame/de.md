---
slug: "savegame-hinzufuegen"
language: "de"
title: "So fügst Du ein Savegame zu Deinem Satisfactory Server hinzu"
description: "Savegame auf einem Satisfactory Server hinzufügen"
tags: []
date: "2026-07-31"
visibility: "public"
cta: "gameserver"
product_keys: ["satisfactory"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Savegame hinzufügen"
sort: 6
related: ["gameserver/satisfactory/add-admin", "gameserver/satisfactory/change-max-players", "gameserver/satisfactory/change-server-name", "gameserver/satisfactory/create-backup"]
---

Ein Spielstand ist in Satisfactory eine einzelne Datei mit der Endung `.sav`. Du musst keinen Weltnamen in einer Konfigurationsdatei eintragen – welcher Spielstand geladen wird, stellst Du im Spiel über den **Server Manager** ein.

> [!NOTE]
> Für alle Schritte im Server Manager brauchst Du Adminrechte. Wie Du Dich anmeldest, steht unter [Server beitreten](/tutorials/gameserver/satisfactory/join-server) und [Admin hinzufügen](/tutorials/gameserver/satisfactory/add-admin).

> [!TIP]
> Erstelle vor dem Hochladen ein [Backup](/tutorials/gameserver/satisfactory/create-backup) Deines bisherigen Spielstands oder lade ihn herunter: [Savegame herunterladen](/tutorials/gameserver/satisfactory/download-savegame).

## Lokalen Spielstand finden

1. **Savegame-Ordner öffnen**\
   Drücke `Windows-Taste + R`, gib folgenden Pfad ein und bestätige mit Enter:

   ```text
   %LocalAppData%\FactoryGame\Saved\SaveGames
   ```

2. **Spielstand auswählen**\
   Deine Spielstände liegen dort als `.sav`-Dateien – in der Regel in einem Unterordner, der Deiner Steam- beziehungsweise Epic-ID entspricht. Der Dateiname entspricht dem Namen der Session im Spiel.

## Spielstand über den Server Manager hochladen

Das ist der empfohlene Weg – Du brauchst dafür keine SFTP-Verbindung.

1. **Server Manager öffnen**\
   Starte Satisfactory und wähle im Hauptmenü **Server Manager**. Wähle dort Deinen Server aus.

2. **Als Admin anmelden**\
   Wechsle auf einen beliebigen Reiter außer **Status** und melde Dich über **Authenticate** mit Deinem Admin Passwort an.

3. **Spielstände öffnen**\
   Wechsle zum Reiter **Manage Saves**. Dort siehst Du alle Spielstände, die auf dem Server liegen.

4. **Spielstand hochladen**\
   Wähle die Funktion zum Hochladen eines Spielstands und anschließend Deine `.sav`-Datei auf dem PC. Die Übertragung kann je nach Größe des Spielstands einen Moment dauern.

5. **Spielstand laden**\
   Wähle den hochgeladenen Spielstand in der Liste aus und lade ihn. Der Server startet die Welt daraufhin neu.

6. **Beitreten**\
   Sobald die Welt geladen ist, kannst Du dem Server beitreten – wähle ihn dazu im Server Manager aus und klicke unten rechts auf **Join Game**. Der Punkt **Join Game** im Hauptmenü findet Deinen dedizierten Server nicht.

## Spielstand per SFTP hochladen

Alternativ kannst Du die Datei direkt in den Spielstandsordner Deines Servers legen.

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung. Solange der Server läuft, schreibt er selbst in die Spielstandsdateien.

2. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

3. **Verzeichnis öffnen**\
   Wechsle in folgendes Verzeichnis:

   ```text
   /.config/Epic/FactoryGame/Saved/SaveGames/server/
   ```

   > [!NOTE]
   > Der Ordner `.config` beginnt mit einem Punkt und ist damit ein versteckter Ordner. Aktiviere in Deinem SFTP-Programm die Anzeige versteckter Dateien, falls Du ihn nicht siehst. Fehlt das Verzeichnis noch, starte Deinen Server einmal, damit die Ordnerstruktur angelegt wird, und stoppe ihn danach wieder.

4. **Spielstand hochladen**\
   Lade Deine `.sav`-Datei in dieses Verzeichnis hoch. Vorhandene Spielstände kannst Du liegen lassen – der Server verwaltet beliebig viele Dateien nebeneinander.

5. **Server starten**\
   Starte Deinen Server wieder.

6. **Spielstand laden**\
   Öffne den Server Manager, melde Dich als Admin an und lade den hochgeladenen Spielstand über den Reiter **Manage Saves**.

> [!WARNING]
> Das Hochladen allein reicht nicht. Der Server lädt weiterhin den bisherigen Spielstand, bis Du den neuen im Server Manager ausgewählt und geladen hast.

> [!NOTE]
> **Einzelspieler-Spielstand übertragen**
>
> Du kannst auch einen Spielstand aus Deinem Einzelspieler-Spiel hochladen – es ist dasselbe Dateiformat. Arbeite dabei mit einer Kopie, damit Deine lokale Welt unangetastet bleibt.

> [!IMPORTANT]
> Lösche im Ordner `SaveGames` keine Datei, die mit `ServerSettings.` beginnt. Darin stehen Servername sowie Admin- und Server-Passwort Deines Servers. Wird sie entfernt, gilt der Server wieder als nicht beansprucht und muss neu eingerichtet werden.
