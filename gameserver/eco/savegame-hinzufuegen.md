---
description: Savegame auf einem Eco Server hinzufügen
---

# So fügst du ein Savegame zu deinem Eco Server hinzu

Der Spielstand eines Eco Servers besteht aus **zwei Dateien**, die im Ordner `/Storage/` liegen und immer zusammengehören:

| Datei | Inhalt |
|-------|--------|
| `Game.db` | Datenbank mit der Welt und allen Objekten |
| `Game.eco` | Zustand der Welt, unter anderem Spieler, Wirtschaft und Gesetze |

:::: danger Wichtig
Die beiden Dateien verweisen aufeinander. Übertrage sie deshalb **immer gemeinsam** – eine einzelne Datei ergibt keinen gültigen Spielstand.
::::

## Lokalen Spielstand finden

Möchtest du eine Welt übertragen, die du selbst gehostet hast, findest du die Dateien im Installationsordner des Spiels:

```
…\Eco\Eco_Data\Server\Storage
```

Dort liegen ebenfalls eine `.db`- und eine `.eco`-Datei. Beide benötigst du für den Upload.

## Savegame hochladen

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung. Solange der Server läuft, schreibt er laufend in den Spielstand.

2. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

3. <b>Verzeichnis öffnen</b><br>
   Wechsle in folgendes Verzeichnis:

   ```
   /Storage/
   ```

4. <b>Alte Dateien sichern</b><br>
   Lade die vorhandenen Dateien `Game.db` und `Game.eco` herunter oder erstelle ein [Backup](backup-erstellen.md), falls du später zurückwechseln möchtest. Lösche sie anschließend.

   :::: warning Achtung
   Mit diesem Schritt ist der bisherige Spielstand deines Servers weg. Sichere ihn vorher – siehe [Savegame herunterladen](savegame-herunterladen.md).
   ::::

5. <b>Neue Dateien hochladen</b><br>
   Lade deine beiden Spielstandsdateien in dasselbe Verzeichnis hoch.

6. <b>Dateien umbenennen</b><br>
   Benenne die Dateien exakt so um:

   ```
   Game.db
   Game.eco
   ```

   :::: info Warum genau diese Namen?
   Der Server lädt beim Start den Spielstand, der in `/Configs/Storage.eco` unter `SaveName` eingetragen ist. Standardmäßig steht dort `Game` – deshalb müssen die Dateien `Game.db` und `Game.eco` heißen. Alternativ trägst du dort den Namen deiner Dateien ein.
   ::::

7. <b>Server starten</b><br>
   Starte deinen Server. Der hochgeladene Spielstand wird nun geladen.

## Welt zurücksetzen

Möchtest du mit einer frisch generierten Welt starten, entfernst du den bestehenden Spielstand:

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>Backup erstellen</b><br>
   Sichere den bisherigen Stand, falls du ihn noch einmal benötigst – siehe [Backup erstellen](backup-erstellen.md).

3. <b>Spielstand entfernen</b><br>
   Lösche im Verzeichnis `/Storage/` die Dateien `Game.db` und `Game.eco`. Alternativ benennst du sie um, zum Beispiel in `Game.db.old` und `Game.eco.old`.

   :::: info Hinweis
   Findet der Server beim Start keine Dateien mit den erwarteten Namen, erzeugt er automatisch eine neue Welt. Lösche oder benenne zusätzlich den Ordner `/Storage/Backup/` um – dort liegen die automatischen Sicherungen des Servers, aus denen der alte Stand zurückkehren kann. Lade dir die Sicherungen vorher herunter, falls du sie noch brauchst.
   ::::

4. <b>Server starten</b><br>
   Starte deinen Server. Die Weltgenerierung kann beim ersten Start einige Minuten dauern.

:::: tip Weltgröße und Seed
Die Einstellungen für eine neue Welt stehen in `/Configs/WorldGenerator.eco`. Sie wirken sich **nur auf neu generierte Welten** aus – eine bestehende Welt ändert sich dadurch nicht. Die beiden Dimensionswerte müssen identisch und durch `4` teilbar sein.
::::

## Weitere Einstellungen zum Spielstand

Die Datei `/Configs/Storage.eco` steuert, wie und wo der Spielstand abgelegt wird:

| Einstellung | Bedeutung |
|-------------|-----------|
| `SaveName` | Name des Spielstands, der beim Start geladen wird |
| `StorageDirectory` | Ordner, in dem die Spielstände abgelegt werden |
| `SaveFrequency` | Wie oft der Server auf die Festplatte schreibt, in Sekunden |
| `NewGameTemplate` | Datei, aus der eine neue Welt erzeugt wird. Ist nichts eingetragen, wird die Welt generiert |

:::: warning Achtung
Änderungen an den Konfigurationsdateien werden erst mit einem **Neustart des Servers** übernommen.
::::
