---
description: "Servernamen auf einem SCP: Secret Laboratory Server ändern"
---

# So änderst du den Servernamen auf deinem SCP: Secret Laboratory Server

Der Servername ist der Name, unter dem dein Server in der öffentlichen Serverliste von SCP: Secret Laboratory angezeigt wird. Du legst ihn über den Schlüssel `server_name` in der Datei `config_gameplay.txt` fest. Die Grundlagen zum Bearbeiten der Konfigurationsdateien findest du in der Anleitung [Konfigurationsdateien bearbeiten](config-dateien-bearbeiten.md).

:::: warning Achtung
Der Pfad zur Konfigurationsdatei enthält den Game Port deines Servers: `/.config/SCP Secret Laboratory/config/<Port>/config_gameplay.txt`. Ersetze `<Port>` durch den tatsächlichen Game Port deines Servers. Den Game Port findest du in der Verwaltung unter **Übersicht**.
::::

## Servernamen ändern

1. <b>Game Port herausfinden</b><br>
   Öffne die Verwaltung deines Servers und notiere dir den Game Port aus der **Übersicht**.

2. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

3. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

4. <b>Konfigurationsdatei öffnen</b><br>
   Öffne folgende Datei – ersetze `<Port>` durch deinen Game Port:

   ```
   /.config/SCP Secret Laboratory/config/<Port>/config_gameplay.txt
   ```

5. <b>Servernamen eintragen</b><br>
   Der Schlüssel `server_name` steht ganz oben in der Datei. Standardmäßig steht dort ein Platzhalter wie:

   ```
   server_name: My Server Name
   ```

   Ersetze den Platzhalter durch den gewünschten Namen deines Servers, z.B.:

   ```
   server_name: Emerald Community | Vanilla
   ```

6. <b>Server starten</b><br>
   Speichere die Datei und starte deinen Server über die Verwaltung. Der neue Name wird nach dem Start übernommen.

:::: info Hinweis
In der öffentlichen Serverliste erscheint dein Server – und damit sein Name – nur, wenn er von Northwood verifiziert ist. Ohne Verifizierung treten Spieler per Direct Connect bei, siehe [Server beitreten](server-beitreten.md).
::::

:::: tip Tipp
Laut der [offiziellen Verifizierungsanleitung](https://techwiki.scpslgame.com/books/server-guides/page/4-how-do-i-verify-my-server-a-step-by-step-guide) von Northwood unterstützt der Servername einen eingeschränkten Teil von Unitys Rich Text: Farb-Tags mit Hex-Codes (keine Farbnamen wie `red`), `<b>` (fett), `<i>` (kursiv), `<u>` (unterstrichen) und `<s>` (durchgestrichen), z.B. `<color=#50C878>Emerald Community</color>`. Wie die Formatierung aussieht, siehst du nur in der Serverliste – also erst, wenn dein Server verifiziert ist. Prüfe die Darstellung dann nach dem Neustart. Wie du Tags korrekt verschachtelst, zeigt die Anleitung [Server-Info hinterlegen](server-info-hinterlegen.md#formatierung-mit-rich-text-tags). Die übrigen Tags aus der dortigen Tabelle – z.B. `<size>`, `<align>`, `<mark>`, `<link>` und Farbnamen – gelten nicht für den Servernamen.
::::

## Titel der Spielerliste anpassen

Direkt unter `server_name` stehen zwei weitere Schlüssel, die den Titel über der Spielerliste im Spiel steuern:

```
#default - uses server_name
player_list_title: default
player_list_title_rate: default
```

- **`player_list_title`**: Der Titel, der oben in der Spielerliste angezeigt wird. Mit dem Wert `default` wird dein `server_name` verwendet. Trägst du einen eigenen Text ein, zeigt die Spielerliste diesen statt des Servernamens an.
- **`player_list_title_rate`**: Das Intervall in Sekunden, in dem der Titel der Spielerliste aktualisiert wird. Mit `default` gilt der Standardwert von 5 Sekunden.

Ein Beispiel für einen eigenen Titel:

```
player_list_title: Emerald Community – Spielerliste
```

Du änderst die Schlüssel genauso wie `server_name`: Server stoppen, Datei bearbeiten, Server über die Verwaltung starten.

:::: info Hinweis
Der Schlüssel `report_server_name` weiter unten in der Datei hat nichts mit dem Namen in der Serverliste zu tun – er wird nur für Spieler-Meldungen über einen Discord-Webhook verwendet.
::::

## Servername bei verifizierten Servern

Für die Verifizierung muss `server_name` gesetzt sein. Ist dein Server verifiziert, gelten für ihn die [Community Server Guidelines](https://scpslgame.com/CSG.pdf) von Northwood – das betrifft auch den Namen, der in der öffentlichen Serverliste für alle Spieler sichtbar ist. Prüfe deinen neuen Namen deshalb anhand der Guidelines, bevor du ihn änderst. Mehr zur Verifizierung findest du in der Anleitung [Server verifizieren lassen](server-verifizieren-lassen.md).

:::: tip Tipp
Erstelle vor größeren Änderungen an der `config_gameplay.txt` ein [Backup](../backup-erstellen.md) deines Servers.
::::
