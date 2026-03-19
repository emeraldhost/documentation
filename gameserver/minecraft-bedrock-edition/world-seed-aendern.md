---
description: Schritt-für-Schritt-Anleitung, wie du den World-Seed auf deinem Minecraft Bedrock Edition Server änderst.
---

# World-Seed in Minecraft Bedrock Edition ändern

:::: danger Achtung
Erstelle vorher ein Backup Deines Servers, da die aktuelle Welt durch das Ändern des World-Seeds verloren gehen kann.
::::

1. <b>Server auswählen</b><br>
   Öffne Dein Dashboard und wähle Deinen Minecraft Bedrock Edition Server aus.

2. <b>Datei-Browser öffnen</b><br>
   Gehe zum Datei-Browser.

3. <b>Datei öffnen</b><br>
   Öffne die Datei `server.properties`.

4. <b>Eintrag suchen</b><br>
   Suche den folgenden Eintrag:

    ```
    level-seed=
    ```

5. <b>Seed eintragen</b><br>
   Füge an dieser Stelle den gewünschten World-Seed ein (z.B. `level-seed=1111132940`).

6. <b>Server neustarten</b><br>
   Speichere die Datei und starte den Server neu, damit der neue World-Seed wirksam wird.

:::: tip Tipp
Du kannst den aktuellen World-Seed einer bestehenden Welt herausfinden, indem Du den Befehl `/seed` im Spiel eingibst.
::::
