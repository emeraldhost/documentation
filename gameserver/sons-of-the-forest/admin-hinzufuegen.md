---
description: Admin auf einem Sons Of The Forest Server hinzufügen
---

# So fügst du einen Admin auf deinem Sons Of The Forest Server hinzu

Admin-Rechte werden bei Sons Of The Forest über die Datei `ownerswhitelist.txt` vergeben. Jeder Spieler, dessen SteamID64 dort eingetragen ist, gilt als Server-Owner und kann den Server direkt im Spiel verwalten.

:::: info Hinweis
Es gibt keinen Ingame-Befehl, um jemanden zum Admin zu machen. Die Vergabe erfolgt ausschließlich über die Datei auf dem Server.
::::

## SteamID64 herausfinden

Du benötigst die **SteamID64** jedes gewünschten Admins. Das ist eine rein numerische, 17-stellige Zahl (z.B. `76561198000000000`). Wie du sie findest, erklärt die Anleitung [SteamID64 herausfinden](../steamid64-herausfinden.md).

:::: danger Wichtig
Custom-URLs, Steam-Nicknames oder kürzere ID-Formate funktionieren nicht. Ein falsches Format führt zu keiner Fehlermeldung – der Eintrag wird stillschweigend ignoriert und der Spieler bleibt ohne Admin-Rechte.
::::

## Admin eintragen

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung. Die Datei wird nur beim Start eingelesen.

2. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

3. <b>Datei öffnen</b><br>
   Öffne folgende Datei zum Bearbeiten:

   ```
   /serverconfig/ownerswhitelist.txt
   ```

4. <b>SteamID64 eintragen</b><br>
   Trage jede SteamID64 in einer eigenen Zeile ein – ohne Kommas, ohne Anführungszeichen und ohne Leerzeichen. Zeilen, die mit `#` beginnen, sind Kommentare und werden ignoriert.

   :::: tip Beispiel
   ```
   # Max
   76561198000000000
   # Lisa
   76561198111111111
   ```
   ::::

5. <b>Server starten</b><br>
   Speichere die Datei und starte deinen Server.

## Admin-Funktionen im Spiel nutzen

1. <b>Server beitreten</b><br>
   Tritt deinem Server mit dem Steam-Account bei, dessen SteamID64 du eingetragen hast.

2. <b>Admin-Menü öffnen</b><br>
   Drücke `ESC` und wechsle auf den Reiter **Players**. Dort werden dir alle verbundenen Spieler mit den Verwaltungsfunktionen angezeigt.

3. <b>Cheat-Panel öffnen (optional)</b><br>
   Öffne mit `Enter` den Chat, tippe `cheatstick` ein und bestätige mit `Enter`. Anschließend öffnest du das Panel mit `F1`.

   :::: info Hinweis
   Die Eingabe von `cheatstick` wird im Chat nicht angezeigt. Achte auf die korrekte Klein-/Großschreibung und tippe den Befehl blind ein.
   ::::

:::: warning Achtung
Der Befehl `cheatstick` wird nur mit einem US-Tastaturlayout zuverlässig erkannt. Funktioniert die Eingabe nicht, prüfe die Tastatursprache deines Systems.
::::
