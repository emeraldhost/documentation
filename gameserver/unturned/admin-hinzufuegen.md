---
description: Admin auf einem Unturned Server hinzufügen
---

# So fügst du einen Admin auf deinem Unturned Server hinzu

Unturned kennt zwei Stufen: den **Owner**, der dauerhaft in der Konfiguration hinterlegt wird, und normale **Admins**, die du im laufenden Betrieb ernennst. In beiden Fällen gibst du die **SteamID64** des Spielers an – eine 17-stellige Zahl, die mit `7656` beginnt.

:::: tip Tipp
Hier findest du eine Anleitung, wie du eine [SteamID64](../steamid64-herausfinden.md) herausfindest.
::::

## Owner eintragen

Der Owner ist der Serverbesitzer. Der Eintrag steht in der Konfiguration und bleibt über Neustarts hinweg erhalten.

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung. Der Eintrag wird nur beim Start gelesen.

2. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

3. <b>Commands.dat öffnen</b><br>
   Öffne folgende Datei:

   ```
   /Servers/<ServerID>/Server/Commands.dat
   ```

   :::: info Welcher Ordner ist meiner?
   `<ServerID>` ist der Ordnername unter `/Servers/`. Er stammt aus dem Startparameter deines Servers – in der Regel liegt dort genau ein Ordner.
   ::::

4. <b>SteamID64 eintragen</b><br>
   Füge eine neue Zeile mit deiner SteamID64 hinzu:

   ```
   Owner 76561198012345678
   ```

5. <b>Server starten</b><br>
   Speichere die Datei und starte deinen Server.

:::: info Aufbau der Commands.dat
In der `Commands.dat` steht eine Anweisung pro Zeile. Zeilen, die mit `//` beginnen, sind Kommentare und werden ignoriert. Übernimm die Schreibweise am besten genau so, wie sie in den Beispielen steht.
::::

## Admin im laufenden Betrieb ernennen

Weitere Admins ernennst du über einen Befehl – entweder in der **Konsole** der Verwaltung oder als Admin direkt im Spielchat.

1. <b>Konsole oder Chat öffnen</b><br>
   Öffne die **Konsole** in der Verwaltung deines Servers. Alternativ öffnest du im Spiel den Chat, wenn du bereits Admin bist.

2. <b>Befehl eingeben</b><br>
   In der Konsole gibst du den Befehl ohne Präfix ein:

   ```
   admin 76561198012345678
   ```

   Im Spielchat stellst du ein `/` oder `@` voran:

   ```
   /admin 76561198012345678
   ```

   :::: tip Tipp
   Statt der SteamID64 kannst du bei verbundenen Spielern auch den Spielernamen angeben, zum Beispiel `admin Sam`.
   ::::

3. <b>Adminrechte entziehen</b><br>
   Zum Entziehen der Rechte nutzt du:

   ```
   unadmin 76561198012345678
   ```

## Befehle im Überblick

| Befehl | Ort | Beschreibung |
|--------|-----|--------------|
| `Owner <SteamID64>` | `Commands.dat` | Legt den Serverbesitzer fest, wirkt erst nach einem Neustart |
| `admin <SteamID64\|Spielername>` | Konsole oder Chat | Ernennt einen Spieler im laufenden Betrieb zum Admin |
| `unadmin <SteamID64\|Spielername>` | Konsole oder Chat | Entzieht einem Spieler die Adminrechte |

:::: info Wo liegt die Adminliste?
Die Liste der Admins liegt unter `/Servers/<ServerID>/Server/Adminlist.dat` und wird von den Befehlen `admin` und `unadmin` gepflegt. Verwalte deine Admins am besten ausschließlich über diese Befehle – so bleibt die Liste garantiert gültig. Möchtest du alle Admins auf einen Schlag entfernen, kannst du die Datei bei gestopptem Server auch löschen.
::::

## Cheat-Befehle freischalten

Befehle wie `give` gelten als Cheats und sind standardmäßig gesperrt – auch für Admins.

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>Cheats aktivieren</b><br>
   Trage in der `Commands.dat` eine eigene Zeile ein:

   ```
   Cheats
   ```

3. <b>Server starten</b><br>
   Speichere die Datei und starte deinen Server.

:::: danger Wichtig
Mit aktivierten Cheats können alle Admins Gegenstände erzeugen. Aktiviere die Option nur, wenn du das wirklich möchtest – auf einem Survival-Server nimmt das schnell den Spielreiz.
::::

:::: tip Tipp
Wie du als Admin Spieler von deinem Server entfernst, erfährst du unter [Spieler kicken & bannen](spieler-kicken-bannen.md).
::::
