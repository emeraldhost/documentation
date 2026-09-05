---
slug: "mods-hinzufuegen"
language: "de"
title: "So installierst Du Mods auf einem Arma Reforger Server"
description: "Mods auf einem Arma Reforger Server installieren"
tags: []
date: "2026-02-22"
visibility: "public"
updated: "2026-03-19"
cta: "gameserver"
product_keys: ["arma-reforger"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Mods hinzufügen"
sort: 4
related: ["gameserver/arma-reforger/add-admin", "gameserver/arma-reforger/add-savegame", "gameserver/arma-reforger/become-admin", "gameserver/arma-reforger/download-savegame"]
---

Mods werden in Arma Reforger über den integrierten Workshop verteilt. Um Mods auf Deinem Server zu verwenden, musst Du deren Mod-Daten in die `config.json` eintragen.

> [!NOTE]
> Alle Spieler, die dem Server beitreten, müssen die gleichen Mods installiert haben. Mods können über den Ingame-Workshop heruntergeladen werden.

## Schritt 1: Mod-Daten herausfinden

Es gibt zwei Möglichkeiten, die benötigten Mod-Daten (`modId`, `name`, `version`) zu finden:

### Option A: Über den Arma Reforger Workshop

1. **Workshop öffnen**\
   Öffne den [Arma Reforger Workshop](https://reforger.armaplatform.com/workshop) im Browser.

2. **Mod suchen**\
   Suche den gewünschten Mod und öffne dessen Seite.

3. **Werte notieren**\
   Notiere Dir die Werte für `Name`, `ID` und `Version`.

### Option B: Über die lokale ServerData.json

1. **Mod herunterladen**\
   Lade den gewünschten Mod über den Ingame-Workshop herunter.

2. **Addons-Ordner öffnen**\
   Öffne den folgenden Ordner:

    ```text
    %USERPROFILE%\Documents\My Games\ArmaReforger\addons
    ```

    > [!TIP]
    > Du kannst diesen Pfad direkt in die Adressleiste des Windows Explorers oder in das Ausführen-Fenster (`Windows-Taste + R`) eingeben.

3. **ServerData.json öffnen**\
   Öffne den Ordner des gewünschten Mods und öffne die Datei `ServerData.json`.

4. **Werte kopieren**\
   Kopiere die Werte für `id`, `name` und `version` aus der Datei.

## Schritt 2: config.json bearbeiten

1. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server und öffne die Datei `config.json`.

2. **Mods eintragen**\
   Suche den Eintrag `"mods"` und füge Deine Mods im folgenden Format ein:

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

3. **Server neustarten**\
   Speichere die Änderungen und starte den Server neu.

> [!WARNING]
> **Wichtig**
>
> Die `config.json` muss gültiges JSON sein. Ein fehlendes Komma oder eine falsche Klammer kann dazu führen, dass der Server nicht startet. Nutze im Zweifelsfall einen [JSON-Validator](https://jsonlint.com/), um die Datei zu prüfen.

## Mod-Preset aus dem Spiel exportieren

Alternativ kannst Du Deine Mod-Liste direkt aus dem Spiel exportieren:

1. **Hauptmenü öffnen**\
   Öffne Arma Reforger und gehe zum Hauptmenü.

2. **Mod Preset öffnen**\
   Klicke auf das `Mod Preset`-Symbol.

3. **JSON kopieren**\
   Wechsle zum Tab `JSON` und klicke auf `In die Zwischenablage kopieren`.

4. **In Config einfügen**\
   Füge den kopierten Inhalt in den `"mods"`-Bereich Deiner `config.json` ein.
