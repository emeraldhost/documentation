---
description: Admin auf einem Mordhau Server hinzufügen
---

# So fügst du einen Admin auf deinem Mordhau Server hinzu

Admins trägst du auf einem Mordhau Server in der `Game.ini` ein. Verwendet wird dabei die **PlayFab-ID** des Spielers – nicht seine SteamID64.

:::: danger Wichtig
Mordhau nutzt heute **PlayFab-IDs**. Das ist eine kurze Zeichenfolge aus Ziffern und Großbuchstaben, zum Beispiel `909275ECE8FEDDB`. Ältere Anleitungen, die eine 17-stellige SteamID64 in `Admins=` eintragen lassen, sind veraltet. SteamIDs kommen in der `Game.ini` nur noch in den alten `Legacy`-Listen für Banns und Stummschaltungen vor.
::::

## PlayFab-ID herausfinden

Die PlayFab-ID eines Spielers liest du über RCON aus. Der Spieler muss dafür auf deinem Server online sein.

1. <b>RCON einrichten</b><br>
   Wie du RCON aktivierst und dich verbindest, steht unter [Spieler kicken & bannen](spieler-kicken-bannen.md).

2. <b>Spieler auflisten</b><br>
   Führe über RCON folgenden Befehl aus:

   ```
   playerlist
   ```

3. <b>ID übernehmen</b><br>
   Der Server gibt pro Zeile die PlayFab-ID und den Spielernamen aus. Kopiere dir die ID des Spielers, den du zum Admin machen möchtest.

## Admin über die Game.ini eintragen

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die **Verwaltung**.

   :::: warning Achtung
   Bearbeite die `Game.ini` ausschließlich bei gestopptem Server. Mordhau schreibt die Datei beim Beenden komplett neu – Änderungen im laufenden Betrieb gehen dabei verloren.
   ::::

2. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

3. <b>Game.ini öffnen</b><br>
   Öffne folgende Datei:

   ```
   /Mordhau/Saved/Config/LinuxServer/Game.ini
   ```

4. <b>Admins eintragen</b><br>
   Ergänze im Abschnitt `[/Script/Mordhau.MordhauGameSession]` pro Admin eine eigene `Admins=`-Zeile:

   ```ini
   [/Script/Mordhau.MordhauGameSession]
   Admins=909275ECE8FEDDB
   Admins=A1B2C3D4E5F6789
   ```

   :::: info Hinweis
   Jede ID braucht eine eigene Zeile. Mehrere IDs durch Komma getrennt in eine Zeile zu schreiben, funktioniert nicht.
   ::::

5. <b>Server starten</b><br>
   Speichere die Datei und starte deinen Server. Die Admin-Liste wird beim Start eingelesen.

## Admin-Passwort setzen

Zusätzlich zur Admin-Liste kennt Mordhau ein Admin-Passwort für deinen Server. Es wird im selben Abschnitt der `Game.ini` gesetzt:

```ini
[/Script/Mordhau.MordhauGameSession]
AdminPassword=DeinAdminPasswort
```

:::: warning Achtung
Jeder, der das Admin-Passwort kennt, kann sich damit Adminrechte auf deinem Server verschaffen. Gib es nur an Personen weiter, denen du vertraust, und verwende ein anderes Passwort als das Server-Passwort. Lass den Wert leer, wenn du ausschließlich über die `Admins=`-Liste arbeiten möchtest.
::::

## Admins über RCON verwalten

Wenn RCON eingerichtet ist, kannst du Admins auch im laufenden Betrieb verwalten – ohne den Server zu stoppen.

| Befehl | Beschreibung |
|--------|--------------|
| `adminlist` | Zeigt alle eingetragenen Admins an |
| `addadmin <PlayFabID>` | Trägt einen Spieler als Admin ein |
| `removeadmin <PlayFabID>` | Entfernt einen Admin wieder |

:::: tip Tipp
Über RCON vergebene Adminrechte greifen sofort. Trage den Admin zusätzlich in die `Admins=`-Liste der `Game.ini` ein, wenn er dauerhaft eingetragen bleiben soll – mit `adminlist` prüfst du nach einem Neustart, wer eingetragen ist.
::::

:::: info Hinweis
Der Ordner `LinuxServer` und die `Game.ini` entstehen erst, nachdem dein Server einmal vollständig gestartet ist. Findest du die Datei nicht, starte deinen Server einmal und stoppe ihn wieder.
::::

:::: tip Tipp
Welche Möglichkeiten du als Admin hast und wie du Spieler entfernst, erfährst du unter [Spieler kicken & bannen](spieler-kicken-bannen.md).
::::
