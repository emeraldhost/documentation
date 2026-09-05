---
slug: "savegame-hinzufuegen"
language: "de"
title: "So fügst Du ein Savegame zu Deinem Longvinter Server hinzu"
description: "Savegame auf einem Longvinter Server hinzufügen"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["longvinter"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Savegame hinzufügen"
sort: 4
related: ["gameserver/longvinter/add-admin", "gameserver/longvinter/create-backup", "gameserver/longvinter/download-savegame", "gameserver/longvinter/join-server"]
---

Der Spielstand eines Longvinter Servers ist keine einzelne Datei, sondern der komplette Ordner `SaveGames`. Darin liegen viele `.sav`-Dateien, die zusammen die Welt, alle Zelte, Kisten und den Fortschritt der Spieler enthalten.

> [!NOTE]
> Longvinter kennt **keinen Weltnamen**. Es gibt keinen Konfigurationsschlüssel für einen Welt- oder Spielstandnamen – der Server lädt beim Start immer das, was im Ordner `SaveGames` liegt.

> [!IMPORTANT]
> Diese Anleitung ist für Spielstände gedacht, die von einem **Dedicated Server** stammen – etwa beim Umzug von einem anderen Server oder beim Wiedereinspielen eines Downloads. Für Welten aus einer lokal gehosteten Runde auf Deinem PC gibt es **kein dokumentiertes Verfahren** und keinen offiziell belegten Speicherort, deshalb beschreiben wir diesen Weg hier bewusst nicht.

## Aufbau des Spielstands

Longvinter legt im Ordner `SaveGames` mehrere `.sav`-Dateien ab, die zusammengehören: Der Server speichert die Welt in Abschnitten und schreibt daneben unter anderem die platzierten Objekte, die Kisten und die Spielerdaten weg. Wie viele Dateien es sind und wie sie im Einzelnen heißen, hängt vom Stand Deines Servers ab und ändert sich mit Updates.

> [!WARNING]
> Übertrage deshalb immer den **kompletten Inhalt** des Ordners und niemals einzelne Dateien – sonst passen die Daten nicht mehr zueinander.

## Savegame hochladen

1. **Server stoppen**\
   Stoppe Deinen Server über die **Verwaltung**. Solange der Server läuft, schreibt er selbst in die Spielstandsdateien und überschreibt Deinen Upload.

2. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

3. **Verzeichnis öffnen**\
   Wechsle in folgendes Verzeichnis:

   ```text
   /Longvinter/Saved/SaveGames/
   ```

   > [!NOTE]
   > Existiert der Ordner noch nicht, starte Deinen Server einmal, damit die Ordnerstruktur angelegt wird. Stoppe ihn anschließend wieder.

4. **Alten Spielstand entfernen**\
   Lösche alle vorhandenen `.sav`-Dateien in diesem Ordner. Bleiben Dateien des alten Spielstands liegen, vermischen sie sich mit Deinem neuen Stand.

   > [!WARNING]
   > Damit ist der bisherige Spielstand Deines Servers weg. Erstelle vorher ein [Backup](/tutorials/gameserver/longvinter/create-backup) oder lade den bisherigen Stand herunter, falls Du zurückwechseln möchtest: [Savegame herunterladen](/tutorials/gameserver/longvinter/download-savegame).

5. **Neuen Spielstand hochladen**\
   Lade alle `.sav`-Dateien Deines Spielstands in dieses Verzeichnis hoch. Die Dateinamen müssen unverändert bleiben.

6. **Server starten**\
   Starte Deinen Server. Der neue Spielstand wird nun geladen.

> [!TIP]
> Spielstände von Longvinter können mit der Zeit mehrere Gigabyte groß werden. Nutze für die Übertragung einen SFTP-Client wie FileZilla oder WinSCP – über den Dateimanager im Browser brechen große Übertragungen leichter ab.

> [!NOTE]
> Deine Servereinstellungen liegen nicht im Spielstand, sondern in einer eigenen Datei:
>
> ```text
> /Longvinter/Saved/Config/LinuxServer/Game.ini
> ```
>
> Wenn Du auch Deine Einstellungen und Admins mitnehmen möchtest, übertrage diese Datei zusätzlich – siehe [Admin hinzufügen](/tutorials/gameserver/longvinter/add-admin).
