---
description: Admin auf einem The Cenozoic Era Server hinzufügen
---

# So fügst du einen Admin auf deinem The Cenozoic Era Server hinzu

Admin-Rechte vergibst du auf deinem The Cenozoic Era Server über die Konfigurationsdatei `Game.ini`. Dort trägst du die Spieler als **Owner** ein, die anschließend Zugriff auf die Admin-Befehle im Spiel haben.

## Owner in der Game.ini eintragen

1. <b>Server stoppen</b><br>
   Öffne die **Verwaltung** deines Servers und stoppe ihn, bevor du die Konfiguration bearbeitest.

2. <b>Konfigurationsdatei öffnen</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server und öffne die Datei:

   ```
   /TheCenozoicEra/Saved/Config/WindowsServer/Game.ini
   ```

3. <b>Abschnitt "Admin Setup" suchen</b><br>
   Scrolle bis ans Ende der Datei. Dort findest du den Abschnitt mit dem leeren Eintrag `Owners=`:

   ```ini
   [/Game/GameCore/DefaultGame/GameInstance/TCEGameInstance.TCEGameInstance_C]

   Owners=
   ```

4. <b>Spieler eintragen</b><br>
   Trage hinter `Owners=` die Steam NetID des Spielers ein, der Owner werden soll.

5. <b>Weitere Owner ergänzen</b><br>
   Für jeden weiteren Owner fügst du eine eigene Zeile mit `Owners=` hinzu. Der Eintrag darf so oft wiederholt werden, wie du Owner brauchst.

6. <b>Speichern und starten</b><br>
   Speichere die Datei und starte deinen Server. Die Datei wird beim Start eingelesen – ohne Neustart greift die Änderung nicht.

:::: info Hinweis
Laut Kommentar in der `Game.ini` trägst du bei `Owners=` eine **Steam NetID** ein. Ein Owner erhält damit Zugriff auf die Befehle und einen farbig hervorgehobenen Namen im Spiel.
::::

:::: warning Nur `Owners=` ist dokumentiert
Der Kommentar in der Datei erwähnt neben Ownern auch Admins und Moderatoren, die Vorlage enthält aber ausschließlich den Eintrag `Owners=`. Wie die Schlüssel für Admins und Moderatoren heißen und in welchem Format sie einzutragen sind, ist nicht dokumentiert – trage dort nichts auf Verdacht ein.
::::

## Namensfarben der Rollen

Im Abschnitt "Colors" der `Game.ini` legst du fest, in welcher Farbe die einzelnen Rollen im Spiel angezeigt werden. Die Werte werden als Hex-sRGB angegeben:

| Eintrag | Rolle | Standardwert |
|---------|-------|--------------|
| `OwnerColor` | Owner | `FF1CFAFF` (Lila) |
| `AdminColor` | Admin | `FFD000FF` (Gelb) |
| `ModeratorColor` | Moderator | `25FFF8FF` (Blau) |
| `PlayerColor` | Spieler | `FFFFFFFF` (Weiß) |
| `VIPColor` | VIP | `00FFB0FF` (Türkis) |
| `SupporterColor` | Supporter | `FFA100FF` (Orange) |

:::: info Hinweis
VIP und Supporter sind reine Auszeichnungsrollen für Spieler, die du hervorheben möchtest. Owner, Admin und Moderator sind die Rollen für die Serververwaltung.
::::

## Admin-Befehle im Überblick

Admins steuern den Server über Chat-Befehle im Spiel. Als Ziel gibst du jeweils den Benutzernamen oder die Net ID des Spielers an.

| Befehl | Beschreibung |
|--------|-------------|
| `/users` | Erzwingt die Anzeige der Namensschilder |
| `/kick <Benutzername oder Net ID>` | Spieler vom Server trennen |
| `/ban <Benutzername oder Net ID>` | Spieler aussperren |
| `/unban <Benutzername oder Net ID>` | Bann aufheben |
| `/slay <Benutzername oder Net ID>` | Angegebenen Spieler töten |
| `/tp <Benutzername oder Net ID>` | Zum angegebenen Spieler teleportieren |
| `/bring <Benutzername oder Net ID>` | Angegebenen Spieler zu dir holen |
| `/heal <Benutzername oder Net ID>` | Spieler heilen |
| `/grow <Benutzername oder Net ID>` | Kreatur des Spielers wachsen lassen |
| `/give <Benutzername oder Net ID>` | Spieler etwas geben |
| `/giveprogressionpoints <Punkte> <Benutzername oder Net ID>` | Fortschrittspunkte vergeben |
| `/weather <Wetter>` | Wetter setzen |
| `/time <Zeit>` | Tageszeit setzen |

:::: info Hinweis
Zu `/give` ist nicht dokumentiert, was der Befehl genau vergibt. Teste ihn im Zweifel auf einem leeren Server, bevor du ihn im laufenden Betrieb einsetzt.
::::

### Wetter setzen

Für `/weather` sind folgende Werte dokumentiert:

```
Clear, Partly Cloudy, Cloudy, Overcast, Foggy, Light Rain, Rain, Storm
```

### Tageszeit setzen

`/time` erwartet einen Wert zwischen `0` und `2400`, wobei `1200` der Mittag ist:

```
/time 1200
```

| Wert | Wirkung |
|------|---------|
| `0` – `2400` | Tageszeit setzen |
| `-1` | Tageszeit einfrieren |
| `-2` | Einfrieren wieder aufheben |

:::: warning Achtung
Einige Werte in der `Game.ini` werden bei jedem Serverstart aus den Einstellungen deiner **Verwaltung** überschrieben. Passe solche Werte deshalb dort an und nicht in der Datei – sonst sind deine Änderungen nach dem nächsten Start wieder verschwunden.
::::

:::: info Hinweis
Der Konfigurationsordner heißt auch auf deinem Linux-Server `WindowsServer`. The Cenozoic Era stellt nur ein Windows-Serverprogramm bereit, das auf Linux-Servern über eine Kompatibilitätsschicht läuft. Einen Ordner namens `LinuxServer` gibt es nicht.
::::

:::: tip Tipp
Wie du Spieler von deinem Server entfernst und Banns wieder aufhebst, erfährst du unter [Spieler kicken & bannen](spieler-kicken-bannen.md).
::::
