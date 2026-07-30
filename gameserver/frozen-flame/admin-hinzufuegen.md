---
description: Adminrechte auf einem Frozen Flame Server nutzen
---

# So erhältst du Adminrechte auf deinem Frozen Flame Server

Frozen Flame hat **keine Adminliste und keine Admindatei**. Verwaltet wird dein Server ausschließlich über **RCON**: Wer das RCON-Passwort und den RCON Port kennt, kann alle Adminbefehle ausführen.

:::: warning Achtung
Behandle das RCON-Passwort wie ein Admin-Passwort und gib es nur an Personen weiter, denen du vertraust. Es gibt keine abgestuften Rechte – jeder mit RCON-Zugriff hat die volle Kontrolle über deinen Server.
::::

## RCON-Zugangsdaten

RCON ist auf deinem Server bereits eingerichtet. Du benötigst lediglich drei Angaben:

- <b>IP-Adresse</b><br>
  Die IP-Adresse deines Servers findest du in der **Verwaltung**.

- <b>RCON Port</b><br>
  Den RCON Port findest du ebenfalls in der **Verwaltung** in der Port-Übersicht. Er ist nicht mit dem Game Port oder dem Query Port identisch.

- <b>RCON-Passwort</b><br>
  Das RCON-Passwort findest und änderst du in der **Verwaltung**.

## Mit RCON verbinden

1. <b>RCON-Tool öffnen</b><br>
   Öffne einen RCON-Client. Die Entwickler nennen dafür beispielhaft **mcrcon**, jeder andere RCON-Client funktioniert ebenso.

2. <b>Verbindungsdaten eingeben</b><br>
   Trage die IP-Adresse deines Servers und den RCON Port aus der Verwaltung ein.

3. <b>Passwort eingeben</b><br>
   Trage das Passwort im folgenden Format ein:

   ```
   admin:<RCON-Passwort>
   ```

   :::: danger Wichtig
   Der Präfix `admin:` gehört zwingend mit ins Passwortfeld. Gibst du nur das reine RCON-Passwort ein, weist der Server die Verbindung ab. Das ist der häufigste Grund, warum der RCON-Login bei Frozen Flame scheitert.
   ::::

4. <b>Befehle ausführen</b><br>
   Nach erfolgreicher Verbindung kannst du die Adminbefehle absetzen.

## Adminbefehle im Überblick

| Befehl | Beschreibung |
|--------|-------------|
| `Admin_GetOnlinePlayers` | Zeigt alle aktuell verbundenen Spieler mit ihrer PlayerID an |
| `Admin_ListUserProfiles` | Listet die auf dem Server gespeicherten Spielerprofile auf |
| `Admin_ChatMessage [Nachricht]` | Sendet eine Nachricht an alle Spieler |
| `Admin_SaveWorld` | Speichert die Welt |
| `Admin_SaveAll` | Speichert Welt und Spielerdaten |
| `Admin_ScheduleMaintenanceMode <Sekunden>` | Kündigt den Wartungsmodus nach der angegebenen Zeit an |
| `Admin_CancelScheduledMaintenanceMode` | Bricht den geplanten Wartungsmodus wieder ab |
| `Admin_Restart` | Startet den Server neu |
| `Admin_Shutdown` | Fährt den Server herunter |

:::: info Hinweis
Die spitzen und eckigen Klammern in der Befehlsübersicht sind reine Platzhalter. Tippe sie nicht mit ein, sondern setze direkt den Wert ein – zum Beispiel `Admin_ScheduleMaintenanceMode 300`.
::::

:::: tip Tipp
Setze vor einem Backup oder dem Herunterladen deines Spielstands `Admin_SaveAll` ab, damit der aktuelle Stand auf der Festplatte liegt – siehe [Savegame herunterladen](savegame-herunterladen.md).
::::

:::: warning Achtung
`Admin_Shutdown` beendet den Serverprozess. Ob dein Server danach automatisch wieder startet, hängt von den Einstellungen in der **Verwaltung** ab – starte ihn im Zweifel dort manuell neu.
::::

## Adminrechte für einzelne Spieler

:::: danger Wichtig
Es gibt weder eine Admindatei noch ein Admin-Passwort für den Client: Adminrechte hat ausschließlich, wer Zugriff auf RCON hat. Der Befehl `Admin_AddUserProfile <PlayerID> <Rolle>` weist einem Spieler zwar eine Rolle zu, welche Rollennamen dabei gültig sind, ist jedoch **nirgends dokumentiert** – ein verlässliches Vorgehen für spielerbezogene Adminrechte existiert damit nicht. Anleitungen, die eine Datei wie `AdminList.txt` oder einen Chatbefehl zum Freischalten nennen, sind für Frozen Flame nicht belegt.
::::

:::: tip Tipp
Wie du Spieler über RCON vom Server entfernst, erfährst du unter [Spieler kicken & bannen](spieler-kicken-bannen.md).
::::
