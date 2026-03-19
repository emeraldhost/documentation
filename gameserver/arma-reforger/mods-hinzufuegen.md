---
description: Mods auf einem Arma Reforger Server installieren
---

# So installierst du Mods auf einem Arma Reforger Server

Mods werden in Arma Reforger über den integrierten Workshop verteilt. Um Mods auf deinem Server zu verwenden, musst du deren Mod-Daten in die `config.json` eintragen.

:::: info Info
Alle Spieler, die dem Server beitreten, müssen die gleichen Mods installiert haben. Mods können über den Ingame-Workshop heruntergeladen werden.
::::

## Schritt 1: Mod-Daten herausfinden

Es gibt zwei Möglichkeiten, die benötigten Mod-Daten (`modId`, `name`, `version`) zu finden:

### Option A: Über den Arma Reforger Workshop

1. <b>Workshop öffnen</b><br>
   Öffne den [Arma Reforger Workshop](https://reforger.armaplatform.com/workshop) im Browser.

2. <b>Mod suchen</b><br>
   Suche den gewünschten Mod und öffne dessen Seite.

3. <b>Werte notieren</b><br>
   Notiere dir die Werte für `Name`, `ID` und `Version`.

### Option B: Über die lokale ServerData.json

1. <b>Mod herunterladen</b><br>
   Lade den gewünschten Mod über den Ingame-Workshop herunter.

2. <b>Addons-Ordner öffnen</b><br>
   Öffne den folgenden Ordner:

    ```
    %USERPROFILE%\Documents\My Games\ArmaReforger\addons
    ```

    :::: tip Tipp
    Du kannst diesen Pfad direkt in die Adressleiste des Windows Explorers oder in das Ausführen-Fenster (`Windows-Taste + R`) eingeben.
    ::::

3. <b>ServerData.json öffnen</b><br>
   Öffne den Ordner des gewünschten Mods und öffne die Datei `ServerData.json`.

4. <b>Werte kopieren</b><br>
   Kopiere die Werte für `id`, `name` und `version` aus der Datei.

## Schritt 2: config.json bearbeiten

1. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server und öffne die Datei `config.json`.

2. <b>Mods eintragen</b><br>
   Suche den Eintrag `"mods"` und füge deine Mods im folgenden Format ein:

    ```json
    "mods": [
      {
        "modId": "DEINE-MOD-ID",
        "name": "Mod-Name",
        "version": "1.0.0"
      }
    ],
    ```

    Beispiel mit mehreren Mods:

    ```json
    "mods": [
      {
        "modId": "59674C21AA886D57",
        "name": "BetterMuzzleFlashes 2.0",
        "version": "2.0.8"
      },
      {
        "modId": "591AF5BDA9F7CE8B",
        "name": "Capture & Hold",
        "version": "1.0.8"
      }
    ],
    ```

3. <b>Server neustarten</b><br>
   Speichere die Änderungen und starte den Server neu.

:::: warning Wichtig
Die `config.json` muss gültiges JSON sein. Ein fehlendes Komma oder eine falsche Klammer kann dazu führen, dass der Server nicht startet. Nutze im Zweifelsfall einen [JSON-Validator](https://jsonlint.com/), um die Datei zu prüfen.
::::

## Mod-Preset aus dem Spiel exportieren

Alternativ kannst du deine Mod-Liste direkt aus dem Spiel exportieren:

1. <b>Hauptmenü öffnen</b><br>
   Öffne Arma Reforger und gehe zum Hauptmenü.

2. <b>Mod Preset öffnen</b><br>
   Klicke auf das `Mod Preset`-Symbol.

3. <b>JSON kopieren</b><br>
   Wechsle zum Tab `JSON` und klicke auf `In die Zwischenablage kopieren`.

4. <b>In Config einfügen</b><br>
   Füge den kopierten Inhalt in den `"mods"`-Bereich deiner `config.json` ein.
