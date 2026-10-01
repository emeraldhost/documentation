---
description: DarkRP auf einem Garry's Mod Server installieren und anpassen
---

# So installierst du DarkRP auf deinem Garry's Mod Server

DarkRP ist ein Roleplay-Gamemode für Garry's Mod. Für einen DarkRP-Server benötigst du zwei Teile: den Gamemode **DarkRP** selbst und das Addon **darkrpmodification**, in dem du alle Anpassungen wie Jobs oder Einstellungen vornimmst. Anschließend stellst du in der Verwaltung den Gamemode und eine passende Map ein.

:::: warning Achtung
Erstelle vor der Installation ein [Backup](backup-erstellen.md) deines Servers und stoppe ihn, bevor du Dateien hochlädst.
::::

## DarkRP über den Workshop installieren

Der einfachste Weg ist die offizielle Workshop-Version von DarkRP. Der Server lädt sie beim Start automatisch herunter und hält sie aktuell.

1. <b>DarkRP zur Collection hinzufügen</b><br>
   Füge [DarkRP](https://steamcommunity.com/sharedfiles/filedetails/?id=248302805) (Workshop-ID `248302805`) zu der Workshop Collection hinzu, die dein Server lädt. Wie du eine Collection erstellst und im Feld **Workshop ID** einträgst, erfährst du unter [Mods hinzufügen](mods-hinzufuegen.md).

2. <b>Map zur Collection hinzufügen</b><br>
   Füge außerdem eine DarkRP-Map zu deiner Collection hinzu, zum Beispiel [rp_downtown_v4c_v2](https://steamcommunity.com/sharedfiles/filedetails/?id=110286060) (Workshop-ID `110286060`).

:::: info Hinweis
Hast du DarkRP über den Workshop installiert, überspringst du den nächsten Abschnitt und machst direkt mit [darkrpmodification installieren](#darkrpmodification-installieren) weiter.
::::

## DarkRP von GitHub installieren

Alternativ kannst du DarkRP auch von GitHub herunterladen und selbst hochladen. Updates musst du dann ebenfalls selbst einspielen.

1. <b>DarkRP herunterladen</b><br>
   Öffne die [DarkRP-Seite auf GitHub](https://github.com/FPtje/DarkRP), klicke auf **Code** und anschließend auf **Download ZIP**. Entpacke das Archiv auf deinem PC.

2. <b>Ordner umbenennen</b><br>
   Das Archiv enthält den Ordner `DarkRP-master`. Benenne ihn in `darkrp` um – komplett kleingeschrieben.

3. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

4. <b>Ordner hochladen</b><br>
   Lade den Ordner `darkrp` in folgendes Verzeichnis hoch:

   ```
   /garrysmod/gamemodes/
   ```

5. <b>Ordnerstruktur prüfen</b><br>
   Die Datei `darkrp.txt` muss direkt im Ordner `darkrp` liegen:

   ```
   /garrysmod/gamemodes/darkrp/darkrp.txt
   ```

   :::: warning Achtung
   Liegt die Datei stattdessen unter `/garrysmod/gamemodes/darkrp/DarkRP-master/darkrp.txt` oder `/garrysmod/gamemodes/darkrp/darkrp/darkrp.txt`, findet der Server den Gamemode nicht. Verschiebe in diesem Fall den Inhalt des inneren Ordners eine Ebene nach oben.
   ::::

:::: tip Tipp
In der Datei `darkrp.txt` ist die Workshop-ID von DarkRP hinterlegt. Spieler laden die Inhalte von DarkRP beim Betreten deines Servers deshalb auch dann automatisch herunter, wenn du DarkRP von GitHub installiert hast.
::::

## darkrpmodification installieren

Das Addon darkrpmodification ist der Ort für alle deine Anpassungen. Ohne DarkRP funktioniert es nicht.

1. <b>darkrpmodification herunterladen</b><br>
   Öffne die [darkrpmodification-Seite auf GitHub](https://github.com/FPtje/darkrpmodification), klicke auf **Code** und anschließend auf **Download ZIP**. Entpacke das Archiv auf deinem PC.

2. <b>Addon-Ordner umbenennen</b><br>
   Benenne den entpackten Ordner `darkrpmodification-master` in `darkrpmodification` um.

3. <b>Addon-Ordner hochladen</b><br>
   Lade den Ordner per [SFTP](../sftp-verbindung-herstellen.md) in folgendes Verzeichnis hoch:

   ```
   /garrysmod/addons/
   ```

   Der Ordner `lua` muss anschließend direkt im Addon-Ordner liegen:

   ```
   /garrysmod/addons/darkrpmodification/lua/
   ```

:::: danger Wichtig
Bearbeite niemals die Dateien von DarkRP selbst, also nichts unter `/garrysmod/gamemodes/darkrp/`. Alle Anpassungen gehören in das Addon darkrpmodification. Änderungen an DarkRP selbst gehen beim nächsten Update verloren.
::::

## Gamemode und Map einstellen

1. <b>Verwaltung öffnen</b><br>
   Öffne die Verwaltung deines Servers.

2. <b>Einstellungen öffnen</b><br>
   Navigiere zu den **Einstellungen**.

3. <b>Gamemode eintragen</b><br>
   Trage im Feld **Gamemode** folgenden Wert ein:

   ```
   darkrp
   ```

4. <b>Map eintragen</b><br>
   Trage im Feld **Map** den Namen einer DarkRP-Map ein, zum Beispiel:

   ```
   rp_downtown_v4c_v2
   ```

   Liegt die Map in der Collection deines Servers, laden Spieler sie beim Betreten automatisch herunter. Mehr dazu erfährst du unter [Map ändern](map-aendern.md).

5. <b>Server neu starten</b><br>
   Speichere die Einstellung und starte deinen Server neu.

:::: info Hinweis
Laut ihrer Workshop-Beschreibung benötigt die Map `rp_downtown_v4c_v2` Inhalte aus Counter-Strike: Source. Seit dem Update vom Juli 2025 enthält Garry's Mod bereits den Großteil dieser Inhalte.
::::

## DarkRP anpassen

Alle Dateien für deine Anpassungen liegen im Addon darkrpmodification unter `/garrysmod/addons/darkrpmodification/lua/`. Die wichtigsten davon sind:

| Datei | Inhalt |
| ----- | ------ |
| `darkrp_config/settings.lua` | Allgemeine Einstellungen von DarkRP, zum Beispiel Startgeld und Gehalt |
| `darkrp_config/disabled_defaults.lua` | Deaktivieren von mitgelieferten Jobs, Modulen und Inhalten |
| `darkrp_config/mysql.lua` | Anbindung an eine MySQL-Datenbank |
| `darkrp_customthings/jobs.lua` | Eigene Jobs und geänderte Standard-Jobs |
| `darkrp_customthings/categories.lua` | Eigene Kategorien für das F4-Menü |
| `darkrp_customthings/shipments.lua` | Eigene Waffenlieferungen |
| `darkrp_customthings/entities.lua` | Eigene kaufbare Entities |

:::: tip Tipp
Starte deinen Server nach jeder Änderung neu. Taucht danach ein Fehler auf, findest du ihn in der Konsole deines Servers. Meist fehlt dann ein Komma, ein Anführungszeichen oder eine Klammer.
::::

## Einstellungen ändern

1. <b>Datei öffnen</b><br>
   Öffne per [SFTP](../sftp-verbindung-herstellen.md) folgende Datei:

   ```
   /garrysmod/addons/darkrpmodification/lua/darkrp_config/settings.lua
   ```

2. <b>Werte anpassen</b><br>
   Jede Einstellung steht in einer eigenen Zeile mit einer kurzen Beschreibung darüber. Ändere nur den Wert hinter dem `=`, zum Beispiel:

   ```lua
   -- startingmoney - your wallet when you join for the first time.
   GM.Config.startingmoney                 = 500
   -- normalsalary - Sets the starting salary for newly joined players.
   GM.Config.normalsalary                  = 45
   ```

3. <b>Server neu starten</b><br>
   Speichere die Datei und starte deinen Server neu.

:::: info Hinweis
Fehlt eine Einstellung in der Datei, zum Beispiel nach einem DarkRP-Update, nutzt DarkRP dafür automatisch den Standardwert.
::::

## Eigene Kategorie anlegen

Jobs werden im F4-Menü in Kategorien angezeigt. Mitgeliefert sind unter anderem `Citizens`, `Civil Protection` und `Gangsters`. Eine eigene Kategorie legst du so an:

1. <b>Datei öffnen</b><br>
   Öffne per [SFTP](../sftp-verbindung-herstellen.md) folgende Datei:

   ```
   /garrysmod/addons/darkrpmodification/lua/darkrp_customthings/categories.lua
   ```

2. <b>Kategorie eintragen</b><br>
   Füge unter der Zeile `Add new categories under the next line!` und dem Kommentarende `]]` deine Kategorie ein:

   ```lua
   DarkRP.createCategory{
       name = "Dienstleister",
       categorises = "jobs",
       startExpanded = true,
       color = Color(0, 107, 0, 255),
       canSee = function(ply) return true end,
       sortOrder = 100,
   }
   ```

   Mit `categorises` legst du fest, wofür die Kategorie gilt. Erlaubt sind `jobs`, `entities`, `shipments`, `weapons`, `vehicles` und `ammo`.

## Eigenen Job hinzufügen

1. <b>Datei öffnen</b><br>
   Öffne per [SFTP](../sftp-verbindung-herstellen.md) folgende Datei:

   ```
   /garrysmod/addons/darkrpmodification/lua/darkrp_customthings/jobs.lua
   ```

2. <b>Job eintragen</b><br>
   Füge deinen Job unter dem Kommentar `Add your custom jobs under the following line:` ein, zum Beispiel:

   ```lua
   TEAM_TAXI = DarkRP.createJob("Taxifahrer", {
       color = Color(20, 150, 20, 255),
       model = {"models/player/Group01/Male_02.mdl"},
       description = [[Du bringst die Bürger der Stadt sicher an ihr Ziel.]],
       weapons = {},
       command = "taxi",
       max = 2,
       salary = GAMEMODE.Config.normalsalary,
       admin = 0,
       vote = false,
       hasLicense = false,
       category = "Dienstleister",
   })
   ```

   :::: warning Achtung
   Die Kategorie im Feld `category` muss in der Datei `categories.lua` angelegt oder eine der mitgelieferten Kategorien sein. Der Wert in `command` muss für jeden Job eindeutig sein.
   ::::

3. <b>Server neu starten</b><br>
   Speichere die Datei und starte deinen Server neu. Der neue Job erscheint im F4-Menü.

:::: tip Tipp
Alle Felder, die ein Job haben kann, findest du im [DarkRP-Wiki](https://darkrp.miraheze.org/wiki/DarkRP:CustomJobFields). Die mitgelieferten Jobs von DarkRP kannst du dir in der Datei [jobrelated.lua](https://github.com/FPtje/DarkRP/blob/master/gamemode/config/jobrelated.lua) als Vorlage ansehen.
::::

## Mitgelieferte Inhalte deaktivieren oder ändern

Möchtest du einen mitgelieferten Job wie den Medic ändern oder entfernen, deaktivierst du ihn zuerst.

1. <b>Datei öffnen</b><br>
   Öffne per [SFTP](../sftp-verbindung-herstellen.md) folgende Datei:

   ```
   /garrysmod/addons/darkrpmodification/lua/darkrp_config/disabled_defaults.lua
   ```

2. <b>Job deaktivieren</b><br>
   Setze im Block `DarkRP.disabledDefaults["jobs"]` den Wert des Jobs auf `true`:

   ```lua
   ["medic"]     = true,
   ```

   Auf dieselbe Weise deaktivierst du in den anderen Blöcken der Datei Module, Waffenlieferungen und weitere Inhalte.

3. <b>Job neu anlegen (optional)</b><br>
   Möchtest du den Job geändert weiterverwenden, kopiere ihn aus der [jobrelated.lua](https://github.com/FPtje/DarkRP/blob/master/gamemode/config/jobrelated.lua) in deine `jobs.lua` und passe ihn dort an.

4. <b>Server neu starten</b><br>
   Speichere die Dateien und starte deinen Server neu.

## Nützliche Admin-Befehle

DarkRP bringt eigene Befehle für Admins mit. Du gibst sie im Spiel im Chat ein. Damit du sie nutzen kannst, musst du auf deinem Server als `admin` oder `superadmin` eingetragen sein. Wie das geht, erfährst du unter [Admin hinzufügen](admin-hinzufuegen.md).

| Befehl | Beschreibung | Benötigte Gruppe |
| ------ | ------------ | ---------------- |
| `/setmoney <Spieler> <Betrag>` | Setzt das Geld eines Spielers auf einen Betrag | `superadmin` |
| `/addmoney <Spieler> <Betrag>` | Gibt einem Spieler zusätzliches Geld | `superadmin` |
| `/setlicense <Spieler>` | Gibt einem Spieler einen Waffenschein | `superadmin` |
| `/unsetlicense <Spieler>` | Entzieht einem Spieler den Waffenschein | `superadmin` |
| `/arrest <Spieler>` | Verhaftet einen Spieler | `admin` |
| `/unarrest <Spieler>` | Lässt einen Spieler frei | `admin` |
| `/forcerpname <Spieler> <Name>` | Ändert den RP-Namen eines Spielers | `admin` |
| `/teamban <Spieler> <Job> [Sekunden]` | Sperrt einen Spieler für einen Job, optional für eine Anzahl an Sekunden | `admin` |
| `/teamunban <Spieler> <Job>` | Hebt die Sperre für einen Job wieder auf | `admin` |
| `/setspawn <Job>` | Ersetzt die Spawnpunkte eines Jobs durch deine aktuelle Position | `admin` |
| `/addspawn <Job>` | Fügt an deiner Position einen weiteren Spawnpunkt für einen Job hinzu | `admin` |
| `/removespawn <Job>` | Entfernt alle eigenen Spawnpunkte eines Jobs auf der aktuellen Map | `admin` |

Für `<Spieler>` kannst du den Spielernamen oder einen Teil davon, die SteamID oder die SteamID64 angeben. Für `<Job>` bei den Spawn-Befehlen gibst du den Befehlsnamen des Jobs an, also den Wert aus `command`, zum Beispiel `taxi`. Bei `/teamban` und `/teamunban` kannst du auch den Namen des Jobs angeben. Lässt du bei `/teamban` die Zeit weg, gilt die Sperre, bis du sie mit `/teamunban` aufhebst oder der Spieler den Server verlässt.

:::: tip Beispiel
```
/setmoney Max 10000
```
::::

### Geld aller Spieler zurücksetzen

Mit folgendem Befehl setzt du das Geld **aller** Spieler auf das Startgeld (`startingmoney`) zurück. Du gibst ihn in der Konsole in der Verwaltung deines Servers ein. Im Spiel kann ihn nur ein `superadmin` über die Spielkonsole ausführen.

```
rp_resetallmoney
```

:::: danger Wichtig
Der Befehl gilt auch für Spieler, die gerade nicht online sind, und kann nicht rückgängig gemacht werden. Erstelle vorher ein [Backup](backup-erstellen.md).
::::

## MySQL-Datenbank nutzen (optional)

Standardmäßig speichert DarkRP alle Daten wie das Geld der Spieler in der SQLite-Datenbank `/garrysmod/sv.db` auf deinem Server. Du musst nichts weiter einrichten. Möchtest du stattdessen eine MySQL-Datenbank nutzen, zum Beispiel um die Daten mit anderen Anwendungen zu teilen, benötigst du das Modul MySQLOO.

1. <b>Datenbank erstellen</b><br>
   Erstelle in der Verwaltung deines Servers eine Datenbank und notiere dir die Verbindungsdaten. Wie das geht, erfährst du unter [Datenbank erstellen](../datenbank-erstellen.md).

2. <b>Architektur prüfen</b><br>
   Gib in der Konsole in der Verwaltung deines Servers folgenden Befehl ein:

   ```
   lua_run print(jit.os, jit.arch)
   ```

   Die Ausgabe lautet zum Beispiel `Linux x86`. `x86` steht für 32 Bit, `x64` für 64 Bit.

3. <b>MySQLOO herunterladen</b><br>
   Lade aus den [MySQLOO-Releases auf GitHub](https://github.com/FredyH/MySQLOO/releases/latest) die passende Datei herunter:

   - bei `x86`: `gmsv_mysqloo_linux.dll`
   - bei `x64`: `gmsv_mysqloo_linux64.dll`

   :::: info Hinweis
   Die Datei endet auch für Linux auf `.dll`. Das ist richtig so. Die Dateien für Windows (`win32` und `win64`) funktionieren auf deinem Server nicht.
   ::::

4. <b>Modul hochladen</b><br>
   Lade die Datei per [SFTP](../sftp-verbindung-herstellen.md) in folgendes Verzeichnis hoch. Existiert der Ordner `bin` noch nicht, lege ihn an:

   ```
   /garrysmod/lua/bin/
   ```

5. <b>MySQL-Konfiguration öffnen</b><br>
   Öffne per [SFTP](../sftp-verbindung-herstellen.md) folgende Datei:

   ```
   /garrysmod/addons/darkrpmodification/lua/darkrp_config/mysql.lua
   ```

6. <b>Verbindungsdaten eintragen</b><br>
   Setze `EnableMySQL` auf `true` und trage die Verbindungsdaten deiner Datenbank ein:

   ```lua
   RP_MySQLConfig.EnableMySQL = true
   RP_MySQLConfig.Host = "db1.cgn1.emeraldhost.de"
   RP_MySQLConfig.Username = "u123_AbCdEf1234"
   RP_MySQLConfig.Password = "DeinPasswort"
   RP_MySQLConfig.Database_name = "s123_darkrp"
   RP_MySQLConfig.Database_port = 3306
   RP_MySQLConfig.Preferred_module = "mysqloo"
   ```

   Ersetze die Beispielwerte durch die Verbindungsdaten aus der Verwaltung.

7. <b>Server neu starten</b><br>
   Speichere die Datei und starte deinen Server neu. DarkRP legt die benötigten Tabellen in der Datenbank automatisch an.

:::: warning Achtung
Jeder, der per SFTP Zugriff auf deinen Server hat, kann das Datenbank-Passwort in der Datei `mysql.lua` lesen. Gib den SFTP-Zugang deshalb nur an Personen weiter, denen du vertraust.
::::

:::: tip Tipp
Klappt die Verbindung nicht, prüfe die Fehlermeldungen in der Konsole. DarkRP schreibt sie außerdem mit dem Präfix `MySQL Error:` in die Logs unter `/garrysmod/data/DarkRP_logs/`.
::::
