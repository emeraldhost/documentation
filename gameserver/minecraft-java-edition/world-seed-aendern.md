---
description: Schritt-für-Schritt-Anleitung, wie du den World-Seed auf deinem Minecraft Java Edition Server änderst.
---

# World-Seed in Minecraft Java Edition ändern

::: danger Achtung
Erstelle vorher ein Backup Deines Servers, da die aktuelle Welt durch das Ändern des World-Seeds verloren gehen kann.
:::

1. <strong>Öffne Dein Dashboard und wähle Deinen Minecraft Java Edition Server aus.</strong>

2. <strong>Gehe zum Datei-Browser.</strong>

3. <strong>Öffne die Datei ```server.properties```.</strong>

4. <strong>Suche den folgenden Eintrag:</strong>

    ```
    level-seed=
    ```

5. <strong>Füge an dieser Stelle den gewünschten World-Seed ein (z.B. ```level-seed=5101553622029575588```).</strong>

6. Speichere die Datei und starte den Server neu, damit der neue World-Seed wirksam wird.

::: tip Tipp
Du kannst den aktuellen World-Seed einer bestehenden Welt herausfinden, indem Du den Befehl ```/seed``` im Spiel eingibst.
:::
