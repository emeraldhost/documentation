---
description: Spieler auf einem Kerbal Space Program Server kicken und bannen
---

# So kickst und bannst du Spieler auf deinem Kerbal Space Program Server

Spieler entfernst du auf einem DarkMultiPlayer-Server über Befehle – entweder in der **Konsole** deiner Verwaltung oder direkt im Spiel, wenn du Admin bist. Angegeben wird immer der **DMP-Spielername**, nicht die SteamID64.

:::: warning Achtung
In der Konsole der Verwaltung brauchen alle Befehle einen führenden Schrägstrich. Text ohne `/` wird als Chatnachricht an alle verbundenen Spieler gesendet.
::::

:::: info Hinweis
Um die Befehle im Spiel zu nutzen, benötigst du Adminrechte. Siehe [Admin hinzufügen](admin-hinzufuegen.md). Im Kanal `#Server` des DMP-Chats gibst du die Befehle dann **ohne** `/` ein.
::::

## Spieler kicken

```
/kick <Spielername> [Grund]
```

Der Spieler wird vom Server getrennt, kann aber jederzeit wieder beitreten. Der Grund ist optional und wird dem Spieler angezeigt.

:::: tip Tipp
Die Namen der aktuell verbundenen Spieler zeigt dir der Befehl `/listclients`.
::::

## Spieler bannen

Ein Bann ist dauerhaft – DarkMultiPlayer kennt keine zeitlich begrenzten Sperren. Es gibt drei voneinander unabhängige Arten:

| Befehl | Wirkung |
|--------|---------|
| `/ban <Spielername> [Grund]` | Sperrt den Spielernamen |
| `/banip <IP-Adresse> [Grund]` | Sperrt die IP-Adresse |
| `/bankey <Öffentlicher Schlüssel> [Grund]` | Sperrt den Schlüssel des Spielers |

:::: danger Wichtig
Die drei Bann-Arten wirken getrennt voneinander. Ein Bann des Spielernamens hindert niemanden daran, mit einem anderen Namen zurückzukommen. Für eine zuverlässige Sperre nutzt du zusätzlich `/bankey`.
::::

:::: info Öffentlichen Schlüssel finden
Den Schlüssel eines Spielers findest du per [SFTP](../sftp-verbindung-herstellen.md) in der Datei:

```
/Universe/Players/<Spielername>.txt
```
::::

## Bann-Listen

Alle Sperren landen in je einer Datei im Verzeichnis `/Config/` – eine Zeile pro Eintrag:

| Datei | Inhalt |
|-------|--------|
| `banned-players.txt` | Gesperrte Spielernamen |
| `banned-ips.txt` | Gesperrte IP-Adressen |
| `banned-keys.txt` | Gesperrte öffentliche Schlüssel |

## Bann aufheben

Einen Befehl zum Entbannen gibt es bei DarkMultiPlayer nicht. Du entfernst den Eintrag direkt aus der jeweiligen Datei.

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

3. <b>Datei öffnen</b><br>
   Öffne die passende Datei im Verzeichnis `/Config/`:

   ```
   /Config/banned-players.txt
   ```

4. <b>Zeile löschen</b><br>
   Entferne die Zeile mit dem Eintrag und speichere die Datei.

5. <b>Server starten</b><br>
   Starte deinen Server. Der Eintrag ist damit aufgehoben.

:::: warning Achtung
Die Bann-Listen werden nur beim Serverstart eingelesen und bei jeder Änderung komplett aus dem Speicher neu geschrieben. Bearbeitest du die Dateien im laufenden Betrieb, werden deine Änderungen überschrieben. Stoppe deinen Server deshalb immer vorher.
::::

## Weitere nützliche Befehle

| Befehl | Beschreibung |
|--------|-------------|
| `/help` | Alle verfügbaren Befehle anzeigen |
| `/listclients` | Verbundene Spieler anzeigen |
| `/countclients` | Anzahl der verbundenen Spieler anzeigen |
| `/connectionstats` | Verbindungsstatistik anzeigen |
| `/say <Text>` | Nachricht an alle Spieler senden |
| `/pm <Spielername> <Text>` | Private Nachricht an einen Spieler senden |
| `/dekessler` | Herrenlose Trümmerteile aus dem Orbit entfernen |
| `/nukeksc` | Alle Schiffe rund um das Kerbal Space Center entfernen |
| `/restart` | Server neu starten |

:::: danger Wichtig
`/nukeksc` und `/dekessler` löschen Schiffe unwiderruflich. Erstelle vorher ein [Backup](backup-erstellen.md).
::::
