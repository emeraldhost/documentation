---
title: Mods in Project Zomboid hinzufügen
description: Schritt-für-Schritt-Anleitung, wie du in Project Zomboid Mods installierst und aktivierst.
---

# So fügst du Mods zu deinem Project Zomboid Server hinzu

:::: info Info
Die **Workshop-ID** und die **Mod-ID** findest Du auf der **Steam Workshop-Seite** des jeweiligen Mods.
::::

1. <b>Server stoppen</b><br>
   Stoppe Deinen Project Zomboid Server.

2. <b>Datei-Browser öffnen</b><br>
   Öffne Dein Dashboard, wähle Deinen Project Zomboid Server aus und gehe zum Datei-Browser **oder** verbinde Dich per SFTP mit Deinem Project Zomboid Server. Eine Anleitung hierzu findest du hier: [SFTP-Verbindung herstellen](../sftp-verbindung-herstellen.md).

3. <b>Ordner öffnen</b><br>
   Navigiere zum Ordner `.cache/Server`.

4. <b>Datei öffnen</b><br>
   Öffne die Datei `ProjectZomboid.ini`.

5. <b>Einträge hinzufügen</b><br>
   Füge folgende Einträge hinzu oder passe sie an:

   ```
   Mods= Mod-ID1;Mod-ID2;Mod-ID3
   WorkshopItems= Workshop-ID1;Workshop-ID2;Workshop-ID3
   ```

6. <b>Server neustarten</b><br>
   Speichere die Änderungen und starte Deinen Server neu, damit die Mods geladen werden.
