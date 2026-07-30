---
description: Admin auf einem Space Station 14 Server hinzufügen
---

# So fügst du einen Admin auf deinem Space Station 14 Server hinzu

Adminrechte speichert Space Station 14 **in der Datenbank deines Servers**, nicht in einer Textdatei. Eine Datei wie `admins.txt` gibt es nicht. Damit du überhaupt den ersten Admin anlegen kannst, trägst du dich zunächst über die `server_config.toml` als Host ein. Alle weiteren Admins vergibst du anschließend bequem über ein Fenster im Spiel.

:::: info Hinweis
Space Station 14 nutzt keine SteamID. Eingetragen wird dein **SS14-Benutzername** – der Name, mit dem du dich im Launcher anmeldest – oder alternativ deine **User-ID** (eine GUID).
::::

## Ersten Admin einrichten

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung. Die Konfiguration wird nur beim Serverstart eingelesen.

2. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

3. <b>server_config.toml öffnen</b><br>
   Öffne die Datei `server_config.toml`. Sie liegt im Hauptverzeichnis deines Servers, neben der Server-Anwendung `Robust.Server`.

4. <b>Benutzernamen eintragen</b><br>
   Ergänze folgenden Abschnitt und ersetze den Platzhalter durch deinen SS14-Benutzernamen:

   ```toml
   [console]
   login_host_user = "DeinSS14Name"
   loginlocal = false
   ```

   Der eingetragene Benutzer erhält beim Verbinden automatisch volle Hostrechte (`+HOST`) – das entspricht dem Befehl `promotehost`.

5. <b>Server starten</b><br>
   Speichere die Datei und starte deinen Server.

6. <b>Beitreten</b><br>
   Verbinde dich mit deinem Server. Du bist nun Host und kannst alle weiteren Admins vergeben.

:::: warning Achtung
`loginlocal` ist standardmäßig aktiviert und gibt jeder Verbindung von `127.0.0.1` beziehungsweise `::1` automatisch Hostrechte. Auf einem gemieteten Server gehört diese Adresse nicht dir allein – setze den Wert deshalb wie oben gezeigt auf `false`.
::::

## Weitere Admins über das Berechtigungsfenster vergeben

1. <b>Konsole öffnen</b><br>
   Drücke im Spiel `~`, um die Konsole zu öffnen.

2. <b>Berechtigungsfenster öffnen</b><br>
   Gib folgenden Befehl ein:

   ```
   permissions
   ```

   Es öffnet sich das **Permissions Panel** mit den Reitern `Admins` und `Admin Ranks`.

3. <b>Admin anlegen</b><br>
   Klicke auf **Add Admin** und trage im Feld `Username/User ID` den SS14-Benutzernamen oder die User-ID des Spielers ein.

4. <b>Rechte auswählen</b><br>
   Wähle die gewünschten Berechtigungen aus. Optional kannst du unter `Custom title…` einen eigenen Titel vergeben. Mit der Checkbox `Suspended?` setzt du einen Admin vorübergehend außer Kraft, ohne ihn zu löschen.

5. <b>Speichern</b><br>
   Bestätige die Eingabe. Die Rechte gelten sofort und bleiben dauerhaft gespeichert.

:::: info Hinweis
Über den Reiter `Admin Ranks` und die Schaltfläche **Add Admin rank** legst du Rollen mit festen Rechtebündeln an, die du anschließend mehreren Admins zuweisen kannst.
::::

:::: warning Achtung
Der Befehl `permissions` funktioniert nur in der Konsole im Spiel, nicht in der Server-Konsole. Außerdem brauchst du dafür die Berechtigung `Permissions` beziehungsweise `+HOST`.
::::

## Berechtigungen im Überblick

| Berechtigung | Bedeutung |
|--------------|-----------|
| `Admin` | Grundlegende Adminbefehle |
| `Ban` | Spieler bannen und Banns aufheben |
| `Debug` | Debug-Befehle |
| `Fun` | Befehle mit direkter Auswirkung auf das Spielgeschehen |
| `Permissions` | Andere Admins verwalten (Berechtigungsfenster) |
| `Server` | Servernahe Befehle |
| `Spawn` | Objekte und Kreaturen erzeugen |
| `VarEdit` | Variablen von Objekten direkt bearbeiten |
| `Mapping` | Mapping-Werkzeuge |
| `Logs` | Server-Logs einsehen |
| `Round` | Runden starten, beenden und neu starten |
| `+HOST` | Vollzugriff auf sämtliche Bereiche |

:::: danger Wichtig
`+HOST`-Rechte sind **extrem gefährlich**. Wer `+HOST` besitzt, kann deinen Server vollständig übernehmen. Vergib diese Berechtigung nur an Personen, denen du uneingeschränkt vertraust.
::::

## Alternative über die Server-Konsole

Läuft dein Server bereits und du möchtest kurzfristig jemanden zum Host machen, geht das auch über die Server-Konsole:

```
promotehost <Spielername>
```

Der Befehl erwartet genau ein Argument – den Benutzernamen eines verbundenen Spielers – und vergibt die Rechte nur **vorübergehend**. Er funktioniert ausschließlich in der Server-Konsole, nicht im Spiel.

:::: info Hinweis
Ob die Konsole in der Verwaltung Eingaben an den Server durchreicht, hängt von deinem Server ab. Funktioniert der Befehl nicht, nutze den Weg über `login_host_user` in der `server_config.toml`.
::::

## Adminfunktionen im Spiel

| Taste bzw. Befehl | Funktion |
|-------------------|----------|
| `F7` | Adminmenü öffnen |
| `F1` | Admin-Hilfe (Ahelp) mit den Spielermeldungen öffnen |
| `~` | Konsole öffnen |
| `adminwho` | Zeigt, welche Admins gerade online sind |
| `deadmin` | Legt deine Adminrechte vorübergehend ab |
| `readmin` | Nimmt deine Adminrechte wieder auf |
| `adminnotes <Benutzername>` | Zeigt die Notizen zu einem Spieler |

:::: info Hinweis
Space Station 14 hat kein Mod-System. Anpassungen an deinem Server nimmst du ausschließlich über die `server_config.toml` vor.
::::

:::: tip Tipp
Wie du Spieler als Admin vom Server entfernst, erfährst du unter [Spieler kicken & bannen](spieler-kicken-bannen.md).
::::
