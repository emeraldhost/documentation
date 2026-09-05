---
slug: "savegame-hinzufuegen"
language: "de"
title: "So fügst Du ein Savegame zu Deinem SCUM Server hinzu"
description: "Savegame auf einem SCUM Server hinzufügen"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["scum"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Savegame hinzufügen"
sort: 4
related: ["gameserver/scum/add-admin", "gameserver/scum/create-backup", "gameserver/scum/download-savegame", "gameserver/scum/join-server"]
---

Der komplette Spielstand eines SCUM Servers steckt in einer einzigen SQLite-Datenbank namens `SCUM.db`. Sie enthält die Welt, alle Basen, Fahrzeuge, Charaktere und deren Fortschritt.

> [!NOTE]
> Der Dateiname `SCUM.db` ist fest vorgegeben. Du musst also keinen Welt- oder Spielstandnamen in einer Konfiguration eintragen – der Servername hat mit dem Savegame nichts zu tun.

## Dateien des Spielstands

Zum Spielstand gehören drei Dateien, die immer zusammengehören:

| Datei | Inhalt |
|-------|--------|
| `SCUM.db` | Die eigentliche Datenbank mit Welt, Basen, Fahrzeugen und Charakteren |
| `SCUM.db-wal` | Write-Ahead-Log der Datenbank |
| `SCUM.db-shm` | Shared-Memory-Datei des Write-Ahead-Logs |

## Savegame hochladen

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung. Solange der Server läuft, schreibt er laufend in die Datenbank.

2. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

3. **Verzeichnis öffnen**\
   Wechsle in folgendes Verzeichnis:

   ```text
   /SCUM/Saved/SaveFiles/
   ```

4. **Alte Dateien entfernen**\
   Lösche dort die vorhandenen Dateien `SCUM.db`, `SCUM.db-wal` und `SCUM.db-shm`. Bleiben `SCUM.db-wal` oder `SCUM.db-shm` liegen, überschreiben sie beim Start Teile Deiner hochgeladenen Datenbank.

   > [!WARNING]
   > Damit ist der bisherige Spielstand Deines Servers weg. Erstelle vorher ein [Backup](/tutorials/gameserver/scum/create-backup) oder lade den bisherigen Stand herunter, falls Du zurückwechseln möchtest.

5. **Neue Datenbank hochladen**\
   Lade Deine eigene `SCUM.db` in dasselbe Verzeichnis hoch. Der Dateiname muss exakt `SCUM.db` lauten.

6. **Server starten**\
   Starte Deinen Server. Der neue Spielstand wird nun geladen.

## Lokalen Spielstand finden

Deinen Einzelspieler-Spielstand findest Du auf Deinem PC unter:

```text
C:\Users\<Benutzername>\AppData\Local\SCUM\Saved\SaveFiles\
```

Auch dort heißt die Datenbank `SCUM.db`.

> [!IMPORTANT]
> Es gibt **kein offizielles Verfahren**, einen Einzelspieler-Spielstand auf einen Dedicated Server zu übertragen. Spieler- und Weltdaten liegen in derselben Datenbank und lassen sich ohne direkte Bearbeitung der Datenbank nicht voneinander trennen. Ein Übertragungsversuch kann daher fehlschlagen oder zu unerwartetem Verhalten führen – arbeite ausschließlich mit Kopien und lege vorher ein Backup an.

> [!TIP]
> Am zuverlässigsten funktioniert der Wechsel zwischen zwei Spielständen, die beide von einem Dedicated Server stammen – zum Beispiel beim Umzug auf einen anderen Server.
