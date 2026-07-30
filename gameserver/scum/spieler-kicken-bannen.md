---
description: Spieler auf einem SCUM Server kicken und bannen
---

# So kickst und bannst du Spieler auf deinem SCUM Server

Spieler kannst du direkt im Spiel per Chat-Befehl entfernen oder über die Konfigurationsdateien deines Servers verwalten.

:::: info Hinweis
Du benötigst Adminrechte, um diese Befehle nutzen zu können. Siehe [Admin hinzufügen](admin-hinzufuegen.md).
::::

## Befehle im Spiel nutzen

1. <b>Chat öffnen</b><br>
   Drücke im Spiel `T`, um den Chat zu öffnen.

2. <b>SteamID64 ermitteln</b><br>
   Für einen Bann benötigst du die SteamID64 des Spielers. Diese liefert dir der folgende Befehl:

   ```
   #ListPlayers
   ```

3. <b>Befehl ausführen</b><br>
   Gib den gewünschten Befehl mit führendem `#` ein, zum Beispiel:

   ```
   #Ban 76561198012345678
   ```

## Spieler kicken

```
#Kick <Spielername>
```

Der Spieler wird vom Server getrennt, kann aber jederzeit wieder beitreten.

## Spieler bannen

```
#Ban <SteamID64>
```

Der Spieler wird sofort vom Server geworfen und kann sich nicht mehr verbinden, bis der Bann aufgehoben wird.

:::: info Hinweis
SCUM kennt keine zeitlich begrenzten Banns. Ein Bann gilt so lange, bis du ihn wieder aufhebst.
::::

## Bann aufheben

```
#Unban <SteamID64>
```

## Spieler stummschalten

```
#Mute <Spielername>
```

```
#UnMute <Spielername>
```

Mit `#Silence <Spielername> <Dauer in Stunden>` schaltest du einen Spieler für eine bestimmte Zeit stumm. Lässt du die Dauer weg oder trägst `0` ein, gilt die Stummschaltung unbegrenzt.

## Befehle im Überblick

| Befehl | Beschreibung |
|--------|-------------|
| `#ListPlayers` | Alle Spieler inklusive SteamID64 anzeigen |
| `#Kick <Spielername>` | Spieler vom Server trennen |
| `#Ban <SteamID64>` | Spieler dauerhaft aussperren |
| `#Unban <SteamID64>` | Bann aufheben |
| `#Mute <Spielername>` | Spieler stummschalten |
| `#UnMute <Spielername>` | Stummschaltung aufheben |
| `#Silence <Spielername> <Stunden>` | Spieler zeitlich begrenzt stummschalten |
| `#ListMutedPlayers` | Stummgeschaltete Spieler anzeigen |
| `#Announce <Text>` | Ansage an alle Spieler senden |

## Listen über die Konfigurationsdateien verwalten

Alle Listen liegen per [SFTP](../sftp-verbindung-herstellen.md) in folgendem Verzeichnis:

```
/SCUM/Saved/Config/WindowsServer/
```

| Datei | Funktion |
|-------|----------|
| `BannedUsers.ini` | Gebannte Spieler, eine SteamID64 pro Zeile. Eine Zeile zu löschen entspricht einem Unban. |
| `SilencedUsers.ini` | Stummgeschaltete Spieler inklusive verbleibender Dauer |
| `ExclusiveUsers.ini` | Echte Whitelist: Sobald hier die erste SteamID64 steht, kommen nur noch gelistete Spieler auf den Server. |
| `WhitelistedUsers.ini` | Prioritätsslots: Gelistete Spieler kommen auch auf einen vollen Server – dafür wird ein anderer Spieler gekickt. |

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>Datei bearbeiten</b><br>
   Öffne die gewünschte Datei per SFTP und trage die SteamID64 ein – eine pro Zeile. Existiert die Datei noch nicht, lege sie an.

3. <b>Server starten</b><br>
   Speichere die Datei und starte deinen Server.

:::: warning Achtung
Die Listen werden nur beim Serverstart eingelesen. Änderungen an den Dateien im laufenden Betrieb wirken nicht – und werden beim Stoppen des Servers unter Umständen überschrieben. Stoppe deinen Server daher immer, bevor du die Dateien bearbeitest.
::::

:::: danger Wichtig
`WhitelistedUsers.ini` ist **keine** Whitelist. Wenn du deinen Server nur für bestimmte Spieler öffnen möchtest, nutze `ExclusiveUsers.ini`.
::::

:::: info Hinweis
Der Konfigurationsordner heißt auch auf deinem Linux-Server `WindowsServer`. SCUM stellt nur ein Windows-Serverprogramm bereit, das auf Linux-Servern über eine Kompatibilitätsschicht läuft.
::::
