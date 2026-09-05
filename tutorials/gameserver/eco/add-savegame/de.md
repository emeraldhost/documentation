---
slug: "savegame-hinzufuegen"
language: "de"
title: "So fügst Du ein Savegame zu Deinem Eco Server hinzu"
description: "Savegame auf einem Eco Server hinzufügen"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["eco"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Savegame hinzufügen"
sort: 5
related: ["gameserver/eco/add-admin", "gameserver/eco/add-mods", "gameserver/eco/create-backup", "gameserver/eco/download-savegame"]
---

Der Spielstand eines Eco Servers besteht aus **zwei Dateien**, die im Ordner `/Storage/` liegen und immer zusammengehören:

| Datei | Inhalt |
|-------|--------|
| `Game.db` | Datenbank mit der Welt und allen Objekten |
| `Game.eco` | Zustand der Welt, unter anderem Spieler, Wirtschaft und Gesetze |

> [!IMPORTANT]
> Die beiden Dateien verweisen aufeinander. Übertrage sie deshalb **immer gemeinsam** – eine einzelne Datei ergibt keinen gültigen Spielstand.

## Lokalen Spielstand finden

Möchtest Du eine Welt übertragen, die Du selbst gehostet hast, findest Du die Dateien im Installationsordner des Spiels:

```text
…\Eco\Eco_Data\Server\Storage
```

Dort liegen ebenfalls eine `.db`- und eine `.eco`-Datei. Beide benötigst Du für den Upload.

## Savegame hochladen

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung. Solange der Server läuft, schreibt er laufend in den Spielstand.

2. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

3. **Verzeichnis öffnen**\
   Wechsle in folgendes Verzeichnis:

   ```text
   /Storage/
   ```

4. **Alte Dateien sichern**\
   Lade die vorhandenen Dateien `Game.db` und `Game.eco` herunter oder erstelle ein [Backup](/tutorials/gameserver/eco/create-backup), falls Du später zurückwechseln möchtest. Lösche sie anschließend.

   > [!WARNING]
   > Mit diesem Schritt ist der bisherige Spielstand Deines Servers weg. Sichere ihn vorher – siehe [Savegame herunterladen](/tutorials/gameserver/eco/download-savegame).

5. **Neue Dateien hochladen**\
   Lade Deine beiden Spielstandsdateien in dasselbe Verzeichnis hoch.

6. **Dateien umbenennen**\
   Benenne die Dateien exakt so um:

   ```text
   Game.db
   Game.eco
   ```

   > [!NOTE]
   > **Warum genau diese Namen?**
   >
   > Der Server lädt beim Start den Spielstand, der in `/Configs/Storage.eco` unter `SaveName` eingetragen ist. Standardmäßig steht dort `Game` – deshalb müssen die Dateien `Game.db` und `Game.eco` heißen. Alternativ trägst Du dort den Namen Deiner Dateien ein.

7. **Server starten**\
   Starte Deinen Server. Der hochgeladene Spielstand wird nun geladen.

## Welt zurücksetzen

Möchtest Du mit einer frisch generierten Welt starten, entfernst Du den bestehenden Spielstand:

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **Backup erstellen**\
   Sichere den bisherigen Stand, falls Du ihn noch einmal benötigst – siehe [Backup erstellen](/tutorials/gameserver/eco/create-backup).

3. **Spielstand entfernen**\
   Lösche im Verzeichnis `/Storage/` die Dateien `Game.db` und `Game.eco`. Alternativ benennst Du sie um, zum Beispiel in `Game.db.old` und `Game.eco.old`.

   > [!NOTE]
   > Findet der Server beim Start keine Dateien mit den erwarteten Namen, erzeugt er automatisch eine neue Welt. Lösche oder benenne zusätzlich den Ordner `/Storage/Backup/` um – dort liegen die automatischen Sicherungen des Servers, aus denen der alte Stand zurückkehren kann. Lade Dir die Sicherungen vorher herunter, falls Du sie noch brauchst.

4. **Server starten**\
   Starte Deinen Server. Die Weltgenerierung kann beim ersten Start einige Minuten dauern.

> [!TIP]
> **Weltgröße und Seed**
>
> Die Einstellungen für eine neue Welt stehen in `/Configs/WorldGenerator.eco`. Sie wirken sich **nur auf neu generierte Welten** aus – eine bestehende Welt ändert sich dadurch nicht. Die beiden Dimensionswerte müssen identisch und durch `4` teilbar sein.

## Weitere Einstellungen zum Spielstand

Die Datei `/Configs/Storage.eco` steuert, wie und wo der Spielstand abgelegt wird:

| Einstellung | Bedeutung |
|-------------|-----------|
| `SaveName` | Name des Spielstands, der beim Start geladen wird |
| `StorageDirectory` | Ordner, in dem die Spielstände abgelegt werden |
| `SaveFrequency` | Wie oft der Server auf die Festplatte schreibt, in Sekunden |
| `NewGameTemplate` | Datei, aus der eine neue Welt erzeugt wird. Ist nichts eingetragen, wird die Welt generiert |

> [!WARNING]
> Änderungen an den Konfigurationsdateien werden erst mit einem **Neustart des Servers** übernommen.
