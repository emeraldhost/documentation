---
description: Admin auf einem Valheim Server hinzufügen
---

# So fügst du einen Admin auf deinem Valheim Server hinzu

Du kannst Admins über die Datei `adminlist.txt` hinzufügen. Jeder Admin wird anhand seiner Spieler-ID identifiziert.

## Spieler-ID herausfinden

Die Spieler-ID hat das Format `[Plattform]_[ID]`, z.B. `V_76561198012345678`. Bei Steam-Spielern steht hinter `V_` die SteamID64. Du findest die ID auf zwei Wegen:

- In der Spielerliste im Spiel, die du mit `F2` öffnest, während der Spieler auf dem Server ist.
- Im Server-Log, also in der Konsole deiner Verwaltung, wenn der Spieler sich verbindet. Ohne Crossplay steht dort bei Steam-Spielern nur die SteamID64 ohne Präfix.

Das gilt für alle Plattformen, also auch für Crossplay-Spieler von Xbox, PlayStation 5 oder Nintendo Switch 2.

## Admin eintragen

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

3. <b>adminlist.txt öffnen</b><br>
   Öffne die Datei `adminlist.txt` im Verzeichnis:

   ```
   /.config/unity3d/IronGate/Valheim/adminlist.txt
   ```

   Der Server legt die Datei beim ersten Start automatisch an.

4. <b>Spieler-ID eintragen</b><br>
   Trage die Spieler-ID des Spielers ein, der Admin werden soll. Füge pro Zeile eine ID hinzu und übernimm sie genau so, wie sie in der Spielerliste (`F2`) oder im Server-Log steht, inklusive Präfix sowie Groß- und Kleinschreibung:

   ```
   V_76561198012345678
   V_76561198087654321
   ```

5. <b>Server starten</b><br>
   Speichere die Datei und starte deinen Server.

:::: info Hinweis
Für Steam-Spieler funktionieren auch ältere Einträge weiterhin, also die Form `Steam_76561198012345678` oder die reine [SteamID64](../steamid64-herausfinden.md). Crossplay-Spieler haben keine SteamID64, für sie brauchst du immer die ID aus der Spielerliste oder dem Server-Log.
::::

:::: info Hinweis
Am sichersten übernimmst du Änderungen an der `adminlist.txt` mit einem Neustart deines Servers.
::::
