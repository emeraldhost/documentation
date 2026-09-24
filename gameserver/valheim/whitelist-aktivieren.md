---
description: Whitelist auf einem Valheim Server aktivieren
---

# So aktivierst du die Whitelist auf deinem Valheim Server

Mit der Whitelist kannst du den Zugang zu deinem Server auf bestimmte Spieler beschränken. Valheim nutzt dafür die Datei `permittedlist.txt`.

:::: tip Tipp
Hier findest du eine Anleitung, wie du deine [SteamID64](../steamid64-herausfinden.md) herausfindest.
::::

## Whitelist einrichten

:::: warning Achtung
Sobald auch nur **ein Spieler** in der `permittedlist.txt` eingetragen ist, können nur noch eingetragene Spieler deinem Server beitreten. Das gilt auch für Admins – trage dich selbst und alle Admins ebenfalls ein. Eine Datei ohne Einträge schränkt niemanden ein.
::::

1. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

2. <b>permittedlist.txt öffnen</b><br>
   Öffne die Datei `permittedlist.txt` im Verzeichnis:

   ```
   /.config/unity3d/IronGate/Valheim/permittedlist.txt
   ```

   Sie liegt im selben Ordner wie `adminlist.txt` und `bannedlist.txt`, eine Ebene über dem Ordner `worlds_local`. Der Server legt die Datei beim ersten Start automatisch an.

3. <b>Spieler eintragen</b><br>
   Trage pro Zeile die Spieler-ID eines Spielers ein. Übernimm sie genau so, wie sie in der Spielerliste (`F2`) oder im Server-Log steht, inklusive Präfix sowie Groß- und Kleinschreibung (siehe [Spieler-ID herausfinden](#spieler-id-herausfinden)):

   ```
   // List permitted players ID ONE per line
   V_76561198012345678
   V_76561198087654321
   ```

   Für Steam-Spieler funktionieren auch die ältere Form `Steam_76561198012345678` und die reine SteamID64. Zeilen, die mit `//` beginnen, sind Kommentare und werden ignoriert. Spielernamen funktionieren in dieser Datei nicht, nur IDs. Achte darauf, dass vor und nach einer ID keine Leerzeichen stehen.

4. <b>Datei speichern</b><br>
   Speichere die Datei.

:::: info Hinweis
Der Server liest die Datei nach einer Änderung innerhalb weniger Sekunden automatisch neu ein und entfernt verbundene Spieler, die nicht eingetragen sind. Ein Neustart ist dafür nicht nötig, schadet aber auch nicht.
::::

## Spieler-ID herausfinden

Die Spieler-ID hat das Format `[Plattform]_[ID]`, z.B. `V_76561198012345678`. Bei Steam-Spielern steht hinter `V_` die SteamID64. Du findest die ID auf zwei Wegen:

- In der Spielerliste im Spiel, die du mit `F2` öffnest, während der Spieler auf dem Server ist.
- Im Server-Log, also in der Konsole deiner Verwaltung, wenn der Spieler sich verbindet. Das gilt auch, wenn die Whitelist ihn abweist. Ohne Crossplay steht dort bei Steam-Spielern nur die SteamID64 ohne Präfix.

Crossplay-Spieler (z.B. von Xbox, PlayStation 5 oder Nintendo Switch 2) haben keine SteamID64. Für sie brauchst du immer die ID aus der Spielerliste oder dem Server-Log.

:::: info Hinweis
Ob dein Server Crossplay-Spieler überhaupt zulässt, stellst du in der Anleitung [Crossplay aktivieren](crossplay-aktivieren.md) ein.
::::

## Whitelist deaktivieren

Lösche alle Spieler-IDs aus der `permittedlist.txt` und speichere die Datei. Kommentarzeilen mit `//` dürfen stehen bleiben. Danach können wieder alle Spieler beitreten, die nicht gebannt sind.
