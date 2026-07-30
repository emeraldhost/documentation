---
description: Admin auf einem Longvinter Server hinzufügen
---

# So fügst du einen Admin auf deinem Longvinter Server hinzu

Admins werden auf einem Longvinter Server über die Konfigurationsdatei `Game.ini` festgelegt. Eingetragen wird die **EOS Account ID** des Spielers – eine 32-stellige Zeichenfolge aus Ziffern und Buchstaben.

:::: danger Wichtig
Der Schlüssel heißt zwar `AdminSteamID`, erwartet aber trotzdem die **EOS Account ID** und **nicht** die SteamID64. Trägst du dort eine 17-stellige SteamID64 ein, erhält der Spieler keine Adminrechte.
::::

## EOS Account ID finden

1. <b>Longvinter starten</b><br>
   Starte Longvinter auf deinem PC.

2. <b>Einstellungen öffnen</b><br>
   Öffne im Hauptmenü die **Options**.

3. <b>ID ablesen</b><br>
   Wechsle auf den Reiter **General** und scrolle nach unten. Dort steht die **EOS Account ID** deines Kontos – kopiere sie.

:::: tip Tipp
Jeder Spieler kann seine eigene EOS Account ID auf diesem Weg selbst ablesen und dir schicken. Ohne diese ID kannst du niemanden zum Admin machen. Bist du bereits Admin, kannst du die EOS ID eines Spielers im Spiel auch per Rechtsklick auf den Spieler kopieren.
::::

## Admin eintragen

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die **Verwaltung**.

   :::: warning Achtung
   Bearbeite die `Game.ini` niemals im laufenden Betrieb. Der Server speichert etwa alle zehn Minuten und überschreibt dabei deine Änderungen.
   ::::

2. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

3. <b>Game.ini öffnen</b><br>
   Öffne folgende Datei. Existiert sie noch nicht, lege sie an:

   ```
   /Longvinter/Saved/Config/LinuxServer/Game.ini
   ```

4. <b>EOS Account ID eintragen</b><br>
   Trage die ID in der Sektion `[/Game/Blueprints/Server/GM_Longvinter.GM_Longvinter_C]` beim Schlüssel `AdminSteamID` ein:

   ```ini
   [/Game/Blueprints/Server/GM_Longvinter.GM_Longvinter_C]
   AdminSteamID=00023652dd9b4673be20d4f83ab42c5b
   ```

5. <b>Server starten</b><br>
   Speichere die Datei und starte deinen Server. Adminrechte werden nur beim Serverstart eingelesen.

## Mehrere Admins eintragen

Mehrere Admins schreibst du in dieselbe Zeile und trennst sie durch **genau ein Leerzeichen**:

```ini
[/Game/Blueprints/Server/GM_Longvinter.GM_Longvinter_C]
AdminSteamID=00023652dd9b4673be20d4f83ab42c5b 00023329455d4d6a972e875d39ebf20a
```

:::: warning Achtung
Trenne die IDs **nicht** durch Kommas und schreibe sie nicht in mehrere Zeilen. Beides führt dazu, dass keiner der eingetragenen Spieler Adminrechte erhält.
::::

:::: info Hinweis
Der Schlüssel gehört in die Sektion `[/Game/Blueprints/Server/GM_Longvinter.GM_Longvinter_C]`. In der zweiten Sektion der Datei, `[/Game/Blueprints/Server/GI_AdvancedSessions.GI_AdvancedSessions_C]`, hat er keine Wirkung.
::::

## Admin-Panel im Spiel öffnen

1. <b>Server beitreten</b><br>
   Verbinde dich mit deinem Server – siehe [Server beitreten](server-beitreten.md).

2. <b>Menü öffnen</b><br>
   Drücke im Spiel `ESC`.

3. <b>Admin panel öffnen</b><br>
   Klicke oben links auf **Admin panel**. Der Eintrag erscheint nur, wenn deine EOS Account ID korrekt hinterlegt ist.

:::: info Hinweis
Wird das **Admin panel** nicht angezeigt, prüfe die ID auf Tippfehler, kontrolliere die Sektion in der `Game.ini` und starte den Server neu.
::::

:::: tip Tipp
Wie du als Admin Spieler vom Server entfernst, erfährst du unter [Spieler kicken & bannen](spieler-kicken-bannen.md).
::::
