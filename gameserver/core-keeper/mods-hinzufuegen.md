---
description: Mods auf einem Core Keeper Server hinzufügen
---

# So fügst du Mods zu deinem Core Keeper Server hinzu

Core Keeper nutzt **mod.io** für Mods. Du kannst Mods manuell herunterladen und per SFTP hochladen.

:::: warning Achtung
Stoppe deinen Server bevor du Mods hinzufügst. Nach einem Spielupdate können Mods inkompatibel sein und Abstürze verursachen.
::::

## mod.io einrichten

1. <b>mod.io Account erstellen</b><br>
   Erstelle einen Account auf [mod.io](https://mod.io/) oder logge dich ein.

2. <b>API Key erstellen</b><br>
   Gehe zu [mod.io/me/access](https://mod.io/me/access) und erstelle einen **API Key**. Kopiere den Key und die **API URL** (z.B. `https://u-*.modapi.io/v1`).

3. <b>OAuth Token erstellen</b><br>
   Erstelle unter **OAuth Access** einen neuen Token mit **Read + Write** Berechtigung. Kopiere den Token sofort — er wird nur einmal angezeigt.

## Mods herunterladen und hochladen

1. <b>Mods herunterladen</b><br>
   Lade die gewünschten Mods von [mod.io/g/corekeeper](https://mod.io/g/corekeeper) herunter. Nutze den **Download File**-Button auf der Mod-Seite.

2. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

3. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

4. <b>Mods hochladen</b><br>
   Entpacke jeden Mod in einen eigenen Unterordner im Verzeichnis:

   ```
   /Mods/
   ```

   :::: info Hinweis
   Falls der Ordner `Mods` noch nicht existiert, erstelle ihn im Hauptverzeichnis deines Servers.
   ::::

5. <b>Server starten</b><br>
   Starte deinen Server.

:::: danger Wichtig
Alle Spieler müssen **dieselben Mods** installiert haben, um dem Server beitreten zu können.
::::
