---
title: Mods in Project Zomboid hinzufügen
description: Schritt-für-Schritt-Anleitung, wie du in Project Zomboid Mods installierst und aktivierst.
---

# Mods in Project Zomboid Hinzufügen: Datei-Browser & SFTP

::: info Info
Die **Workshop-ID** und die **Mod-ID** findest Du auf der **Steam Workshop-Seite** des jeweiligen Mods.
:::

1. <strong>Stoppe Deinen Project Zomboid Server.</strong>

2. <strong>Öffne Dein Dashboard, wähle Deinen Project Zomboid Server aus und gehe zum Datei-Browser **oder** verbinde Dich per SFTP mit Deinem Project Zomboid Server. Eine Anleitung hierzu findest du hier: [SFTP-Verbindung herstellen](../sftp-verbindung-herstellen.md).</strong>

3. <strong>Navigiere zum Ordner ```.cache/Server```.</strong>

4. <strong>Öffne die Datei ```ProjectZomboid.ini```.</strong>

5. <strong>Füge folgende Einträge hinzu oder passe sie an:</strong>

    ```
    Mods= Mod-ID1;Mod-ID2;Mod-ID3
    WorkshopItems= Workshop-ID1;Workshop-ID2;Workshop-ID3
    ```

6. <strong>Speichere die Änderungen und starte Deinen Server neu, damit die Mods geladen werden.</strong>
