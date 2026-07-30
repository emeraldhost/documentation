---
description: Admin auf einem Arma 3 Server hinzufügen
---

# So fügst du einen Admin auf deinem Arma 3 Server hinzu

Arma 3 kennt zwei Wege, Adminrechte zu vergeben: ein **Admin-Passwort**, mit dem sich jeder Spieler anmelden kann, der es kennt, und eine **feste Admin-Liste** mit SteamID64s, die ganz ohne Passwort auskommt. Beides trägst du in der `server.cfg` deines Servers ein.

:::: tip Tipp
Hier findest du eine Anleitung, wie du deine [SteamID64](../steamid64-herausfinden.md) herausfindest.
::::

## server.cfg bearbeiten

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung. Die `server.cfg` wird nur beim Serverstart eingelesen.

2. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

3. <b>server.cfg öffnen</b><br>
   Öffne im Hauptverzeichnis deines Servers folgende Datei:

   ```
   /server.cfg
   ```

4. <b>Admin-Passwort setzen</b><br>
   Trage ein Admin-Passwort ein. Jeder Spieler, der dieses Passwort kennt, kann sich im Spiel als Admin anmelden:

   ```
   passwordAdmin = "deinAdminPasswort";
   ```

   :::: warning Achtung
   Verwende für `passwordAdmin` niemals dasselbe Passwort wie für das Server-Passwort (`password`). Sonst hat jeder Spieler, der auf deinen Server kommt, automatisch auch Adminrechte.
   ::::

5. <b>Feste Admins eintragen</b><br>
   Zusätzlich kannst du Spieler dauerhaft als Admin hinterlegen. Trage ihre SteamID64 in die Liste `admins[]` ein – mehrere IDs trennst du durch Komma:

   ```
   admins[] = {"76561198012345678", "76561198087654321"};
   ```

   Diese Spieler melden sich später ohne Passwort als Admin an.

6. <b>Server starten</b><br>
   Speichere die Datei und starte deinen Server.

## Aufbau der Einträge

```
passwordAdmin = "deinAdminPasswort";
admins[] = {"76561198012345678", "76561198087654321"};
serverCommandPassword = "deinBefehlsPasswort";
```

| Eintrag | Bedeutung |
|---------|-----------|
| `passwordAdmin` | Passwort für die Admin-Anmeldung im Spiel |
| `admins[]` | Liste von SteamID64s, die sich ohne Passwort als Admin anmelden dürfen |
| `serverCommandPassword` | Separates Passwort für serverseitige Befehle über `serverCommand`, unabhängig vom Admin-Passwort |

:::: info Hinweis
In die Liste `admins[]` gehört ausschließlich die **SteamID64** – eine 17-stellige Zahl, die mit `7656` beginnt. Jede weitere ID wird durch ein Komma getrennt, jede ID steht in Anführungszeichen.
::::

## Als Admin anmelden

1. <b>Server beitreten</b><br>
   Verbinde dich mit deinem Server – siehe [Server beitreten](server-beitreten.md).

2. <b>Chat öffnen</b><br>
   Drücke im Spiel die Taste `/`, um die Chat-Konsole zu öffnen.

3. <b>Anmelden</b><br>
   Stehst du in der Liste `admins[]`, genügt:

   ```
   #login
   ```

   Andernfalls meldest du dich mit dem Admin-Passwort an:

   ```
   #login deinAdminPasswort
   ```

4. <b>Abmelden</b><br>
   Mit folgendem Befehl beendest du die Admin-Sitzung wieder:

   ```
   #logout
   ```

## Adminbefehle im Überblick

Alle Befehle gibst du in der Chat-Konsole ein.

| Befehl | Beschreibung |
|--------|--------------|
| `#login` bzw. `#login <Passwort>` | Als Admin anmelden |
| `#logout` | Admin-Sitzung beenden |
| `#missions` | Missionsauswahl öffnen |
| `#mission <Missionsname>` | Direkt zur angegebenen Mission wechseln |
| `#restart` | Aktuelle Mission neu starten |
| `#reassign` | Mission neu starten und alle Spieler zurück in die Slot-Auswahl schicken |
| `#lock` | Server sperren – niemand kann mehr beitreten |
| `#unlock` | Sperre wieder aufheben |
| `#kick <Name/ID>` | Spieler vom Server trennen |
| `#exec ban "<Name/ID>"` | Spieler bannen – bei `#exec` in Anführungszeichen |
| `#shutdown` | Server herunterfahren |

:::: warning Achtung
`#shutdown` fährt den Server herunter. Ob er danach automatisch wieder startet, hängt von deinen Einstellungen ab – im Zweifel startest du ihn über die Verwaltung neu.
::::

:::: tip Tipp
Wie du Spieler als Admin vom Server entfernst und dauerhaft aussperrst, erfährst du unter [Spieler kicken & bannen](spieler-kicken-bannen.md).
::::
