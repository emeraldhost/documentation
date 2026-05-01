---
description: Direktverbindung (UseDirectConnection) auf einem Windrose Server aktivieren
---

# So aktivierst du die Direktverbindung auf deinem Windrose Server

Mit der Option `UseDirectConnection` können sich Spieler direkt über die IP-Adresse und den Port mit deinem Server verbinden, ohne den Invite Code zu verwenden.

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

3. <b>ServerDescription.json öffnen</b><br>
   Öffne die Datei `ServerDescription.json` unter:

   ```
   /R5/ServerDescription.json
   ```

4. <b>UseDirectConnection anpassen</b><br>
   Setze `UseDirectConnection` auf `true` und passe die folgenden Felder an:
   - `DirectConnectionServerAddress` — die Host-IP deines Servers
   - `DirectConnectionServerPort` — der Standard Game Port deines Servers (wird von uns bereits standardmäßig gesetzt)
   - `DirectConnectionProxyAddress` — bleibt auf `0.0.0.0`

   ```
   "UseDirectConnection": true,
   "DirectConnectionServerAddress": "DEINE_HOST_IP",
   "DirectConnectionServerPort": DEIN_GAME_PORT,
   "DirectConnectionProxyAddress": "0.0.0.0"
   ```

5. <b>Server starten</b><br>
   Speichere die Datei und starte deinen Server.

## Per Direktverbindung beitreten

Sobald `UseDirectConnection` aktiviert ist, können Spieler deinen Server direkt über die IP-Adresse erreichen.

1. <b>Windrose starten</b><br>
   Starte Windrose.

2. <b>Spielen auswählen</b><br>
   Klicke im Hauptmenü auf **Spielen**.

3. <b>Mit Server verbinden</b><br>
   Wähle die Option **Mit Server verbinden** aus.

4. <b>IP-Adresse eingeben</b><br>
   Trage die IP-Adresse und den Port deines Servers im Format `IP:Port` ein und bestätige.

   :::: tip Beispiel
   ```
   123.45.67.89:7777
   ```
   ::::

:::: info Hinweis
Wenn `UseDirectConnection` aktiviert ist, können sich Spieler weiterhin über den Invite Code verbinden. Zusätzlich steht die Direktverbindung über IP-Adresse und Port zur Verfügung.
::::
