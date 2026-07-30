---
description: Mods auf einem Eco Server hinzufügen
---

# So fügst du Mods zu deinem Eco Server hinzu

Eco bringt ein eigenes Mod-System mit. Mods werden ausschließlich auf dem Server installiert – deine Mitspieler müssen nichts herunterladen, der Client bekommt alles Nötige beim Beitreten vom Server.

:::: warning Achtung
Stoppe deinen Server, bevor du Mods hinzufügst oder entfernst. Der Server liest den Mod-Ordner nur beim Start ein.
::::

## Mods herunterladen

Die offizielle Plattform für Eco-Mods ist **mod.io**.

1. <b>mod.io öffnen</b><br>
   Rufe [mod.io/g/eco](https://mod.io/g/eco) auf und suche dir die gewünschte Mod aus.

2. <b>Version prüfen</b><br>
   Achte darauf, dass die Mod zur Version deines Servers passt. Nach einem Spielupdate können ältere Mods Fehler verursachen oder den Serverstart verhindern.

3. <b>Mod herunterladen</b><br>
   Lade die Mod herunter. In der Regel erhältst du eine ZIP-Datei mit einer oder mehreren `.dll`-Dateien und gegebenenfalls eigenen Konfigurationsdateien.

4. <b>Anleitung der Mod lesen</b><br>
   Sieh dir die Beschreibung der Mod an. Dort steht, in welchen Ordner die Dateien gehören und ob die Mod weitere Mods voraussetzt.

## Mods hochladen

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

3. <b>Mod entpacken</b><br>
   Entpacke die heruntergeladene ZIP-Datei auf deinem PC. Hochgeladen werden die entpackten Dateien – eine ZIP-Datei wird vom Server nicht ausgewertet.

4. <b>Dateien hochladen</b><br>
   Lade die Dateien in folgendes Verzeichnis hoch:

   ```
   /Mods/
   ```

   :::: info Unterordner beachten
   Die meisten Mods gehören direkt in den Ordner `Mods`. Manche Mods verlangen laut ihrer Anleitung stattdessen den Unterordner `Mods/UserCode/`. Halte dich immer an die Angaben der jeweiligen Mod.
   ::::

5. <b>Server starten</b><br>
   Starte deinen Server. Beim Start werden die Mods geladen.

:::: tip Übersetzungen
Übersetzungsdateien gehören nicht in den Hauptordner, sondern nach `/Mods/Translations/`.
::::

## Mods entfernen

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>Dateien löschen</b><br>
   Lösche die Dateien beziehungsweise den Ordner der Mod aus `/Mods/`.

3. <b>Server starten</b><br>
   Starte deinen Server neu, damit die Mod vollständig entladen wird.

:::: danger Wichtig
Mods können Gegenstände, Rezepte und Weltobjekte hinzufügen. Entfernst du eine Mod aus einer laufenden Welt, verschwinden alle davon abhängigen Inhalte. Erstelle vorher ein [Backup](backup-erstellen.md).
::::

## Mods über die Konfiguration steuern

Die Datei `/Configs/ModKit.eco` bestimmt, wie der Server mit Mods umgeht:

| Einstellung | Bedeutung |
|-------------|-----------|
| `WhitelistEnabled` | Legt fest, ob nur ausgewählte Mods geladen werden. Ist die Option deaktiviert, lädt der Server alle vorhandenen Mods |
| `Whitelist` | Liste der `.dll`-Dateinamen, die geladen werden sollen |
| `SubscribedMods` | Liste der mod.io-IDs, die dieser Server abonniert hat |
| `MaxNumberOfDownloadRequests` | Wie viele Clients gleichzeitig Mods herunterladen dürfen |

:::: info Datei existiert nicht?
In `/Configs/` liegt zu jeder Konfiguration zusätzlich eine Datei mit der Endung `.eco.template`. Diese Vorlage enthält nur die Standardwerte und wird vom Server nicht gelesen. Fehlt `ModKit.eco`, kopiere `ModKit.eco.template` und benenne die Kopie in `ModKit.eco` um.
::::

:::: warning Achtung
Änderungen an den Konfigurationsdateien werden erst mit einem **Neustart des Servers** übernommen.
::::

## Müssen Spieler die Mods installieren?

:::: info Hinweis
Nein. Mods, die auch den Client betreffen – etwa neue Gegenstände oder Modelle –, müssen ausschließlich auf dem Server installiert sein. Der Client erhält die nötigen Informationen beim Verbinden automatisch. Der erste Beitritt kann dadurch etwas länger dauern.

Einzelne Mods können laut eigener Beschreibung trotzdem eine Client-Komponente benötigen. Prüfe dazu die Anleitung der jeweiligen Mod.
::::
