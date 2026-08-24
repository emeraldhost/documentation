---
description: "Whitelist auf einem SCP: Secret Laboratory Server einrichten"
---

# So richtest du eine Whitelist auf deinem SCP: Secret Laboratory Server ein

Mit einer Whitelist können nur noch Spieler beitreten, die du ausdrücklich eingetragen hast — ideal für private Community-Server oder Events. Die Whitelist besteht aus zwei Teilen: der Option `enable_whitelist` in der Datei `config_gameplay.txt` und der Spielerliste in der Datei `UserIDWhitelist.txt`. Die Grundlagen zum Bearbeiten der Konfigurationsdateien findest du in der Anleitung [Konfigurationsdateien bearbeiten](config-dateien-bearbeiten.md).

:::: warning Achtung
Der Pfad zu den Konfigurationsdateien enthält den Game Port deines Servers: `/.config/SCP Secret Laboratory/config/<Port>/`. Ersetze `<Port>` durch den tatsächlichen Game Port deines Servers. Den Game Port findest du in der Verwaltung unter **Übersicht**.
::::

## Whitelist einrichten

1. <b>Game Port herausfinden</b><br>
   Öffne die Verwaltung deines Servers und notiere dir den Game Port aus der **Übersicht**.

2. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

3. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

4. <b>Whitelist aktivieren</b><br>
   Öffne folgende Datei — ersetze `<Port>` durch deinen Game Port:

   ```
   /.config/SCP Secret Laboratory/config/<Port>/config_gameplay.txt
   ```

   Suche den Eintrag `enable_whitelist` und ändere den Wert von `false` (Standard) auf `true`:

   ```
   enable_whitelist: true
   ```

5. <b>Spieler in die Whitelist eintragen</b><br>
   Öffne im selben Port-Ordner die Datei `UserIDWhitelist.txt`:

   ```
   /.config/SCP Secret Laboratory/config/<Port>/UserIDWhitelist.txt
   ```

   Trage jede erlaubte ID in eine eigene Zeile ein. Steam-Spieler trägst du im Format `SteamID64@steam` ein, Discord-Nutzer im Format `DiscordID@discord`. Zeilen, die mit `#` beginnen, sind Kommentare — praktisch, um dir die Namen zu den IDs zu notieren:

   ```
   # Max
   76561198801452050@steam
   # Moritz
   123456789012345678@discord
   ```

   Deine [SteamID64](../steamid64-herausfinden.md) kannst du über die verlinkte Anleitung herausfinden. Es ist dasselbe ID-Format, das du auch beim [Ränge vergeben](raenge-vergeben.md) verwendest.

6. <b>Server starten</b><br>
   Speichere beide Dateien und starte deinen Server über die Verwaltung.

:::: info Hinweis
Änderungen an der Whitelist werden erst nach einem Neustart des Servers übernommen — es gibt kein Hot-Reload.
::::

:::: tip Tipp
Trage auch deine eigene ID in die `UserIDWhitelist.txt` ein, bevor du die Whitelist aktivierst — sonst sperrst du dich selbst von deinem Server aus.
::::
