---
description: "Server-Info über Pastebin auf einem SCP: Secret Laboratory Server hinterlegen"
---

# So hinterlegst du die Server-Info auf deinem SCP: Secret Laboratory Server

Die Server-Info ist die Beschreibung deines Servers, die Spieler im Spiel einsehen können — zum Beispiel deine Regeln, Kontaktmöglichkeiten oder Besonderheiten deines Servers. Der Text selbst liegt dabei nicht auf dem Server, sondern in einem Dokument auf [pastebin.com](https://pastebin.com/). In der Datei `config_gameplay.txt` hinterlegst du lediglich die ID dieses Dokuments über den Schlüssel `serverinfo_pastebin_id`.

:::: warning Achtung
Der Pfad zur Konfigurationsdatei enthält den Game Port deines Servers: `/.config/SCP Secret Laboratory/config/<Port>/config_gameplay.txt`. Ersetze `<Port>` durch den tatsächlichen Game Port deines Servers. Den findest du in der Verwaltung unter **Übersicht**.
::::

## Pastebin-Dokument anlegen

1. <b>Text vorbereiten</b><br>
   Öffne [pastebin.com](https://pastebin.com/) und füge den Text deiner Server-Info in das Feld **New Paste** ein. Zur Gestaltung mit Farben, Größen und Links siehe den Abschnitt [Formatierung mit Rich-Text-Tags](#formatierung-mit-rich-text-tags) weiter unten.

2. <b>Sichtbarkeit und Ablaufdatum setzen</b><br>
   Setze **Paste Exposure** auf `Public` und **Paste Expiration** auf `Never`. Ein Paste mit der Sichtbarkeit `Private` funktioniert nicht — den kannst laut Pastebin nur du selbst im eingeloggten Zustand sehen.

3. <b>Paste veröffentlichen</b><br>
   Klicke auf **Create New Paste**.

4. <b>Pastebin-ID kopieren</b><br>
   Die Pastebin-ID ist die Zeichenfolge am Ende der URL deines Pastes. Bei `https://pastebin.com/7wV681fT` lautet die ID also `7wV681fT`. Notiere dir deine ID.

:::: tip Tipp
Lege den Paste über ein kostenloses Pastebin-Konto an. Dann kannst du den Inhalt später jederzeit bearbeiten — die Pastebin-ID bleibt dabei gleich, deine Server-Konfiguration musst du also nicht erneut anfassen.
::::

## Pastebin-ID in der Konfiguration hinterlegen

1. <b>Game Port herausfinden</b><br>
   Öffne die Verwaltung deines Servers und notiere dir den Game Port aus der **Übersicht**.

2. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

3. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

4. <b>Konfigurationsdatei öffnen</b><br>
   Öffne folgende Datei — ersetze `<Port>` durch deinen Game Port:

   ```
   /.config/SCP Secret Laboratory/config/<Port>/config_gameplay.txt
   ```

5. <b>Pastebin-ID eintragen</b><br>
   Suche die Zeile mit dem Schlüssel `serverinfo_pastebin_id` und trage deine Pastebin-ID als Wert ein — fehlt der Schlüssel, füge ihn als neue Zeile hinzu:

   ```
   serverinfo_pastebin_id: 7wV681fT
   ```

   Ersetze `7wV681fT` durch deine eigene Pastebin-ID.

6. <b>Server starten</b><br>
   Speichere die Datei und starte deinen Server über die Verwaltung.

:::: info Hinweis
`7wV681fT` ist der Standardwert des Schlüssels und verweist auf die offizielle Beispiel-Vorlage von Northwood. Solange du den Wert nicht änderst, zeigt dein Server diese Vorlage als Server-Info an. Wie du Konfigurationsdateien generell bearbeitest, zeigt dir die Anleitung [Konfigurationsdateien bearbeiten](config-dateien-bearbeiten.md).
::::

## Formatierung mit Rich-Text-Tags

Die Server-Info unterstützt Rich-Text-Tags, mit denen du deinen Text formatieren kannst. Laut dem offiziellen Tech Wiki werden in der Server-Beschreibung folgende Tags unterstützt:

| Tag | Wirkung | Beispiel |
|-----|---------|----------|
| `<color=...>` | Textfarbe — als Farbname oder Hex-Code | `<color=green>Text</color>`, `<color=#ff0000>Text</color>` |
| `<size=...>` | Textgröße | `<size=50>Text</size>` |
| `<b>` | Fett | `<b>Text</b>` |
| `<i>` | Kursiv | `<i>Text</i>` |
| `<u>` | Unterstrichen | `<u>Text</u>` |
| `<mark>` | Hervorgehoben | `<mark>Text</mark>` |
| `<align=...>` | Ausrichtung — `left`, `center` oder `right` | `<align=center>Text</align>` |
| `<link=...>` | Anklickbarer Link | `<link="https://example.com">Text</link>` |

Ein Beispiel, das mehrere Tags kombiniert:

```
<align=center><size=50><b>Willkommen auf meinem Server!</b></size></align>

<color=#ff0000><b>Regeln:</b></color>
1. Sei respektvoll gegenüber anderen Spielern.
2. Kein Cheating.

Fragen? <link="https://example.com">Kontaktiere unser Team</link>
```

:::: warning Achtung
Tags müssen in umgekehrter Reihenfolge geschlossen werden, in der sie geöffnet wurden — also zum Beispiel `<i><b>Text</b></i>`. Falsch verschachtelte Tags werden nicht korrekt dargestellt.
::::

:::: info Hinweis
Wenn du deinen Server von Northwood verifizieren lassen möchtest, muss die Server-Info eine Kontaktmöglichkeit enthalten, über die Spieler dein Server-Team erreichen können. Mehr dazu in der Anleitung [Server verifizieren lassen](server-verifizieren-lassen.md).
::::

:::: info Hinweis
Änderungen an der `config_gameplay.txt` werden erst nach einem Neustart des Servers übernommen.
::::
