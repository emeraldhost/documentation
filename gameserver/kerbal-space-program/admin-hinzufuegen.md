---
description: Admin auf einem Kerbal Space Program Server hinzufügen
---

# So fügst du einen Admin auf deinem Kerbal Space Program Server hinzu

Admins verwaltet ein DarkMultiPlayer-Server über die Datei `Config/admins.txt`. Eingetragen wird dabei der **DMP-Spielername** – nicht die SteamID64 oder eine andere ID. Der Name ist auf dem Server über den Schlüssel des Spielers eindeutig zugeordnet.

:::: danger Wichtig
Ein Spieler kann erst zum Admin gemacht werden, wenn er sich **mindestens einmal mit dem Server verbunden** hat. Vorher kennt der Server den Namen nicht und meldet `'<Name>' does not exist.`
::::

## Admin über die Konsole hinzufügen

Der schnellste Weg führt über die Konsole in deiner Verwaltung. Der Server übernimmt die Änderung sofort, ein Neustart ist nicht nötig.

1. <b>Verwaltung öffnen</b><br>
   Öffne die **Verwaltung** deines Servers und wechsle zur **Konsole**.

2. <b>Admin hinzufügen</b><br>
   Gib den folgenden Befehl ein und ersetze den Platzhalter durch den Spielernamen:

   ```
   /admin add Jebediah
   ```

3. <b>Ergebnis prüfen</b><br>
   Lass dir die aktuelle Liste anzeigen:

   ```
   /admin show
   ```

:::: info Befehle im Überblick
| Befehl | Beschreibung |
|--------|-------------|
| `/admin add <Spielername>` | Spieler zum Admin machen |
| `/admin del <Spielername>` | Adminrechte wieder entziehen |
| `/admin show` | Alle Admins anzeigen |
::::

## Admin über die Datei eintragen

Alternativ trägst du den Namen direkt in die Datei ein – zum Beispiel, wenn du mehrere Admins auf einmal setzen möchtest.

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

3. <b>admins.txt öffnen</b><br>
   Öffne folgende Datei. Existiert sie noch nicht, lege sie an:

   ```
   /Config/admins.txt
   ```

4. <b>Spielernamen eintragen</b><br>
   Trage pro Zeile genau einen Spielernamen ein:

   ```
   Jebediah
   Valentina
   ```

5. <b>Server starten</b><br>
   Speichere die Datei und starte deinen Server.

:::: warning Achtung
Bearbeite die Datei nur bei gestopptem Server. Der Server hält die Admin-Liste im Speicher und schreibt sie bei jeder Änderung komplett neu – Bearbeitungen im laufenden Betrieb gehen dadurch verloren.
::::

## Was Adminrechte bewirken

| Recht | Beschreibung |
|-------|-------------|
| Konsolen-Kanal | Nur Admins sehen im DMP-Chat den zusätzlichen Kanal `#Server`. |
| Serverbefehle im Spiel | Über diesen Kanal kannst du alle Serverbefehle direkt aus dem Spiel ausführen, zum Beispiel Spieler kicken oder bannen. |
| Modpack hochladen | Nur Admins dürfen mit `/upload` ein Modpack auf den Server laden, siehe [Mods hinzufügen](mods-hinzufuegen.md). |

:::: info Hinweis
Adminrechte geben dir **keine** Sonderrechte an fremden Schiffen und keine besonderen Rechte beim Zeitraffer (Warp). Diese Bereiche regelt DarkMultiPlayer über eigene Berechtigungen bzw. den eingestellten **Warp Mode**.
::::

## Befehle im Spiel nutzen

1. <b>Chat öffnen</b><br>
   Öffne im Spiel das DMP-Chatfenster.

   :::: info Hinweis
   Standardmäßig öffnest du den Chat mit der Taste links neben der `1`. Welche Taste das ist, stellst du im DMP-Fenster unter **Options** → **Keys** bei **Chat** ein.
   ::::

2. <b>Kanal wechseln</b><br>
   Wechsle auf den Kanal `#Server`. Er ist nur für Admins sichtbar.

   :::: info Hinweis
   Heißt der Kanal bei dir anders, liegt das am Wert `consoleIdentifier` in der Datei `/Config/Settings.txt`. Standardmäßig lautet er `Server`.
   ::::

3. <b>Befehl eingeben</b><br>
   In diesem Kanal gibst du Befehle **ohne** führenden Schrägstrich ein:

   ```
   kick Jebediah
   ```

   :::: warning Achtung
   In der Konsole deiner Verwaltung ist es umgekehrt: Dort brauchen Befehle den führenden Schrägstrich, sonst wird deine Eingabe als Chatnachricht an alle Spieler gesendet.
   ::::

:::: tip Tipp
Wie du Spieler als Admin vom Server entfernst, erfährst du unter [Spieler kicken & bannen](spieler-kicken-bannen.md).
::::
