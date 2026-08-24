---
description: "Reservierte Slots auf einem SCP: Secret Laboratory Server einrichten"
---

# So richtest du reservierte Slots auf deinem SCP: Secret Laboratory Server ein

Mit reservierten Slots kommen Spieler, die du in eine Liste eingetragen hast — zum Beispiel dein Team oder deine Stammspieler — auch dann noch auf den Server, wenn er voll ist. Die Funktion besteht aus zwei Teilen: der Option `use_reserved_slots` in der Datei `config_gameplay.txt` und der Spielerliste in der Datei `UserIDReservedSlots.txt`. Die Grundlagen zum Bearbeiten der Konfigurationsdateien findest du in der Anleitung [Konfigurationsdateien bearbeiten](config-dateien-bearbeiten.md).

:::: warning Achtung
Der Pfad zu den Konfigurationsdateien enthält den Game Port deines Servers: `/.config/SCP Secret Laboratory/config/<Port>/`. Ersetze `<Port>` durch den tatsächlichen Game Port deines Servers. Den Game Port findest du in der Verwaltung unter **Übersicht**.
::::

## Reservierte Slots einrichten

1. <b>Game Port herausfinden</b><br>
   Öffne die Verwaltung deines Servers und notiere dir den Game Port aus der **Übersicht**.

2. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

3. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

4. <b>Reservierte Slots aktivieren</b><br>
   Öffne folgende Datei — ersetze `<Port>` durch deinen Game Port:

   ```
   /.config/SCP Secret Laboratory/config/<Port>/config_gameplay.txt
   ```

   Suche den Eintrag `use_reserved_slots` und stelle sicher, dass er auf `true` steht — das ist bereits der Standardwert:

   ```
   use_reserved_slots: true
   ```

5. <b>Spieler in die Liste eintragen</b><br>
   Öffne im selben Port-Ordner die Datei `UserIDReservedSlots.txt`:

   ```
   /.config/SCP Secret Laboratory/config/<Port>/UserIDReservedSlots.txt
   ```

   Trage jede ID in eine eigene Zeile ein. Steam-Spieler trägst du im Format `SteamID64@steam` ein, Discord-Nutzer im Format `DiscordID@discord` — dasselbe Format wie beim [Whitelist einrichten](whitelist-einrichten.md):

   ```
   76561198801452050@steam
   123456789012345678@discord
   ```

   Deine [SteamID64](../steamid64-herausfinden.md) kannst du über die verlinkte Anleitung herausfinden.

6. <b>Server starten</b><br>
   Speichere beide Dateien und starte deinen Server über die Verwaltung, damit die Änderungen übernommen werden.

:::: info Hinweis
Reservierte Slots sind keine Whitelist: Eine [Whitelist](whitelist-einrichten.md) sperrt den Server für alle, die nicht eingetragen sind. Reservierte Slots lassen dagegen weiterhin jeden beitreten — eingetragene Spieler bekommen lediglich einen Platz freigehalten.
::::

:::: tip Tipp
Trage dich selbst und dein Team in die `UserIDReservedSlots.txt` ein — so kommt ihr auch zu Stoßzeiten auf den Server, etwa um zu moderieren.
::::
