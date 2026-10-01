---
slug: "darkrp-installieren"
language: "de"
title: "So installierst Du DarkRP auf Deinem Garry's Mod Server"
description: "DarkRP auf einem Garry's Mod Server installieren und anpassen"
tags: []
date: "2026-10-01"
visibility: "public"
cta: "gameserver"
product_keys: ["garrys-mod"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "DarkRP installieren"
sort: 8
related: ["gameserver/garrys-mod/change-gamemode", "gameserver/garrys-mod/set-up-star-wars-rp-server", "gameserver/garrys-mod/add-admin", "gameserver/garrys-mod/enable-lua-refresh"]
---
DarkRP ist ein Roleplay-Gamemode für Garry's Mod. Für einen DarkRP-Server benötigst Du zwei Teile: den Gamemode **DarkRP** selbst und das Addon **darkrpmodification**, in dem Du alle Anpassungen wie Jobs oder Einstellungen vornimmst. Anschließend stellst Du in der Verwaltung den Gamemode und eine passende Map ein.

> [!WARNING]
> Erstelle vor der Installation ein [Backup](/tutorials/gameserver/garrys-mod/create-backup) Deines Servers und stoppe ihn, bevor Du Dateien hochlädst.

## DarkRP über den Workshop installieren

Der einfachste Weg ist die offizielle Workshop-Version von DarkRP. Der Server lädt sie beim Start automatisch herunter und hält sie aktuell.

1. **DarkRP zur Collection hinzufügen**\
   Füge [DarkRP](https://steamcommunity.com/sharedfiles/filedetails/?id=248302805) (Workshop-ID `248302805`) zu der Workshop Collection hinzu, die Dein Server lädt. Wie Du eine Collection erstellst und im Feld **Workshop ID** einträgst, erfährst Du unter [Mods hinzufügen](/tutorials/gameserver/garrys-mod/add-mods).

2. **Map zur Collection hinzufügen**\
   Füge außerdem eine DarkRP-Map zu Deiner Collection hinzu, zum Beispiel [rp_downtown_v4c_v2](https://steamcommunity.com/sharedfiles/filedetails/?id=110286060) (Workshop-ID `110286060`).

> [!NOTE]
> Hast Du DarkRP über den Workshop installiert, überspringst Du den nächsten Abschnitt und machst direkt mit [darkrpmodification installieren](#darkrpmodification-installieren) weiter.

## DarkRP von GitHub installieren

Alternativ kannst Du DarkRP auch von GitHub herunterladen und selbst hochladen. Updates musst Du dann ebenfalls selbst einspielen.

1. **DarkRP herunterladen**\
   Öffne die [DarkRP-Seite auf GitHub](https://github.com/FPtje/DarkRP), klicke auf **Code** und anschließend auf **Download ZIP**. Entpacke das Archiv auf Deinem PC.

2. **Ordner umbenennen**\
   Das Archiv enthält den Ordner `DarkRP-master`. Benenne ihn in `darkrp` um – komplett kleingeschrieben.

3. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

4. **Ordner hochladen**\
   Lade den Ordner `darkrp` in folgendes Verzeichnis hoch:

   ```text
   /garrysmod/gamemodes/
   ```

5. **Ordnerstruktur prüfen**\
   Die Datei `darkrp.txt` muss direkt im Ordner `darkrp` liegen:

   ```text
   /garrysmod/gamemodes/darkrp/darkrp.txt
   ```

   > [!WARNING]
   > Liegt die Datei stattdessen unter `/garrysmod/gamemodes/darkrp/DarkRP-master/darkrp.txt` oder `/garrysmod/gamemodes/darkrp/darkrp/darkrp.txt`, findet der Server den Gamemode nicht. Verschiebe in diesem Fall den Inhalt des inneren Ordners eine Ebene nach oben.

> [!TIP]
> In der Datei `darkrp.txt` ist die Workshop-ID von DarkRP hinterlegt. Spieler laden die Inhalte von DarkRP beim Betreten Deines Servers deshalb auch dann automatisch herunter, wenn Du DarkRP von GitHub installiert hast.

## darkrpmodification installieren

Das Addon darkrpmodification ist der Ort für alle Deine Anpassungen. Ohne DarkRP funktioniert es nicht.

1. **darkrpmodification herunterladen**\
   Öffne die [darkrpmodification-Seite auf GitHub](https://github.com/FPtje/darkrpmodification), klicke auf **Code** und anschließend auf **Download ZIP**. Entpacke das Archiv auf Deinem PC.

2. **Addon-Ordner umbenennen**\
   Benenne den entpackten Ordner `darkrpmodification-master` in `darkrpmodification` um.

3. **Addon-Ordner hochladen**\
   Lade den Ordner per [SFTP](/tutorials/gameserver/establish-sftp-connection) in folgendes Verzeichnis hoch:

   ```text
   /garrysmod/addons/
   ```

   Der Ordner `lua` muss anschließend direkt im Addon-Ordner liegen:

   ```text
   /garrysmod/addons/darkrpmodification/lua/
   ```

> [!IMPORTANT]
> Bearbeite niemals die Dateien von DarkRP selbst, also nichts unter `/garrysmod/gamemodes/darkrp/`. Alle Anpassungen gehören in das Addon darkrpmodification. Änderungen an DarkRP selbst gehen beim nächsten Update verloren.

## Gamemode und Map einstellen

1. **Verwaltung öffnen**\
   Öffne die Verwaltung Deines Servers.

2. **Einstellungen öffnen**\
   Navigiere zu den **Einstellungen**.

3. **Gamemode eintragen**\
   Trage im Feld **Gamemode** folgenden Wert ein:

   ```text
   darkrp
   ```

4. **Map eintragen**\
   Trage im Feld **Map** den Namen einer DarkRP-Map ein, zum Beispiel:

   ```text
   rp_downtown_v4c_v2
   ```

   Liegt die Map in der Collection Deines Servers, laden Spieler sie beim Betreten automatisch herunter. Mehr dazu erfährst Du unter [Map ändern](/tutorials/gameserver/garrys-mod/change-map).

5. **Server neu starten**\
   Speichere die Einstellung und starte Deinen Server neu.

> [!NOTE]
> Laut ihrer Workshop-Beschreibung benötigt die Map `rp_downtown_v4c_v2` Inhalte aus Counter-Strike: Source. Seit dem Update vom Juli 2025 enthält Garry's Mod bereits den Großteil dieser Inhalte.

## DarkRP anpassen

Alle Dateien für Deine Anpassungen liegen im Addon darkrpmodification unter `/garrysmod/addons/darkrpmodification/lua/`. Die wichtigsten davon sind:

| Datei | Inhalt |
| ----- | ------ |
| `darkrp_config/settings.lua` | Allgemeine Einstellungen von DarkRP, zum Beispiel Startgeld und Gehalt |
| `darkrp_config/disabled_defaults.lua` | Deaktivieren von mitgelieferten Jobs, Modulen und Inhalten |
| `darkrp_config/mysql.lua` | Anbindung an eine MySQL-Datenbank |
| `darkrp_customthings/jobs.lua` | Eigene Jobs und geänderte Standard-Jobs |
| `darkrp_customthings/categories.lua` | Eigene Kategorien für das F4-Menü |
| `darkrp_customthings/shipments.lua` | Eigene Waffenlieferungen |
| `darkrp_customthings/entities.lua` | Eigene kaufbare Entities |

> [!TIP]
> Starte Deinen Server nach jeder Änderung neu. Taucht danach ein Fehler auf, findest Du ihn in der Konsole Deines Servers. Meist fehlt dann ein Komma, ein Anführungszeichen oder eine Klammer.

## Einstellungen ändern

1. **Datei öffnen**\
   Öffne per [SFTP](/tutorials/gameserver/establish-sftp-connection) folgende Datei:

   ```text
   /garrysmod/addons/darkrpmodification/lua/darkrp_config/settings.lua
   ```

2. **Werte anpassen**\
   Jede Einstellung steht in einer eigenen Zeile mit einer kurzen Beschreibung darüber. Ändere nur den Wert hinter dem `=`, zum Beispiel:

   ```lua
   -- startingmoney - your wallet when you join for the first time.
   GM.Config.startingmoney                 = 500
   -- normalsalary - Sets the starting salary for newly joined players.
   GM.Config.normalsalary                  = 45
   ```

3. **Server neu starten**\
   Speichere die Datei und starte Deinen Server neu.

> [!NOTE]
> Fehlt eine Einstellung in der Datei, zum Beispiel nach einem DarkRP-Update, nutzt DarkRP dafür automatisch den Standardwert.

## Eigene Kategorie anlegen

Jobs werden im F4-Menü in Kategorien angezeigt. Mitgeliefert sind unter anderem `Citizens`, `Civil Protection` und `Gangsters`. Eine eigene Kategorie legst Du so an:

1. **Datei öffnen**\
   Öffne per [SFTP](/tutorials/gameserver/establish-sftp-connection) folgende Datei:

   ```text
   /garrysmod/addons/darkrpmodification/lua/darkrp_customthings/categories.lua
   ```

2. **Kategorie eintragen**\
   Füge unter der Zeile `Add new categories under the next line!` und dem Kommentarende `]]` Deine Kategorie ein:

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

   Mit `categorises` legst Du fest, wofür die Kategorie gilt. Erlaubt sind `jobs`, `entities`, `shipments`, `weapons`, `vehicles` und `ammo`.

## Eigenen Job hinzufügen

1. **Datei öffnen**\
   Öffne per [SFTP](/tutorials/gameserver/establish-sftp-connection) folgende Datei:

   ```text
   /garrysmod/addons/darkrpmodification/lua/darkrp_customthings/jobs.lua
   ```

2. **Job eintragen**\
   Füge Deinen Job unter dem Kommentar `Add your custom jobs under the following line:` ein, zum Beispiel:

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

   > [!WARNING]
   > Die Kategorie im Feld `category` muss in der Datei `categories.lua` angelegt oder eine der mitgelieferten Kategorien sein. Der Wert in `command` muss für jeden Job eindeutig sein.

3. **Server neu starten**\
   Speichere die Datei und starte Deinen Server neu. Der neue Job erscheint im F4-Menü.

> [!TIP]
> Alle Felder, die ein Job haben kann, findest Du im [DarkRP-Wiki](https://darkrp.miraheze.org/wiki/DarkRP:CustomJobFields). Die mitgelieferten Jobs von DarkRP kannst Du Dir in der Datei [jobrelated.lua](https://github.com/FPtje/DarkRP/blob/master/gamemode/config/jobrelated.lua) als Vorlage ansehen.

## Mitgelieferte Inhalte deaktivieren oder ändern

Möchtest Du einen mitgelieferten Job wie den Medic ändern oder entfernen, deaktivierst Du ihn zuerst.

1. **Datei öffnen**\
   Öffne per [SFTP](/tutorials/gameserver/establish-sftp-connection) folgende Datei:

   ```text
   /garrysmod/addons/darkrpmodification/lua/darkrp_config/disabled_defaults.lua
   ```

2. **Job deaktivieren**\
   Setze im Block `DarkRP.disabledDefaults["jobs"]` den Wert des Jobs auf `true`:

   ```lua
   ["medic"]     = true,
   ```

   Auf dieselbe Weise deaktivierst Du in den anderen Blöcken der Datei Module, Waffenlieferungen und weitere Inhalte.

3. **Job neu anlegen (optional)**\
   Möchtest Du den Job geändert weiterverwenden, kopiere ihn aus der [jobrelated.lua](https://github.com/FPtje/DarkRP/blob/master/gamemode/config/jobrelated.lua) in Deine `jobs.lua` und passe ihn dort an.

4. **Server neu starten**\
   Speichere die Dateien und starte Deinen Server neu.

## Nützliche Admin-Befehle

DarkRP bringt eigene Befehle für Admins mit. Du gibst sie im Spiel im Chat ein. Damit Du sie nutzen kannst, musst Du auf Deinem Server als `admin` oder `superadmin` eingetragen sein. Wie das geht, erfährst Du unter [Admin hinzufügen](/tutorials/gameserver/garrys-mod/add-admin).

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
| `/setspawn <Job>` | Ersetzt die Spawnpunkte eines Jobs durch Deine aktuelle Position | `admin` |
| `/addspawn <Job>` | Fügt an Deiner Position einen weiteren Spawnpunkt für einen Job hinzu | `admin` |
| `/removespawn <Job>` | Entfernt alle eigenen Spawnpunkte eines Jobs auf der aktuellen Map | `admin` |

Für `<Spieler>` kannst Du den Spielernamen oder einen Teil davon, die SteamID oder die SteamID64 angeben. Für `<Job>` bei den Spawn-Befehlen gibst Du den Befehlsnamen des Jobs an, also den Wert aus `command`, zum Beispiel `taxi`. Bei `/teamban` und `/teamunban` kannst Du auch den Namen des Jobs angeben. Lässt Du bei `/teamban` die Zeit weg, gilt die Sperre, bis Du sie mit `/teamunban` aufhebst oder der Spieler den Server verlässt.

> [!TIP]
> **Beispiel**
>
> ```text
> /setmoney Max 10000
> ```

### Geld aller Spieler zurücksetzen

Mit folgendem Befehl setzt Du das Geld **aller** Spieler auf das Startgeld (`startingmoney`) zurück. Du gibst ihn in der Konsole in der Verwaltung Deines Servers ein. Im Spiel kann ihn nur ein `superadmin` über die Spielkonsole ausführen.

```text
rp_resetallmoney
```

> [!IMPORTANT]
> Der Befehl gilt auch für Spieler, die gerade nicht online sind, und kann nicht rückgängig gemacht werden. Erstelle vorher ein [Backup](/tutorials/gameserver/garrys-mod/create-backup).

## MySQL-Datenbank nutzen (optional)

Standardmäßig speichert DarkRP alle Daten wie das Geld der Spieler in der SQLite-Datenbank `/garrysmod/sv.db` auf Deinem Server. Du musst nichts weiter einrichten. Möchtest Du stattdessen eine MySQL-Datenbank nutzen, zum Beispiel um die Daten mit anderen Anwendungen zu teilen, benötigst Du das Modul MySQLOO.

1. **Datenbank erstellen**\
   Erstelle in der Verwaltung Deines Servers eine Datenbank und notiere Dir die Verbindungsdaten. Wie das geht, erfährst Du unter [Datenbank erstellen](/tutorials/gameserver/create-database).

2. **Architektur prüfen**\
   Gib in der Konsole in der Verwaltung Deines Servers folgenden Befehl ein:

   ```text
   lua_run print(jit.os, jit.arch)
   ```

   Die Ausgabe lautet zum Beispiel `Linux x86`. `x86` steht für 32 Bit, `x64` für 64 Bit.

3. **MySQLOO herunterladen**\
   Lade aus den [MySQLOO-Releases auf GitHub](https://github.com/FredyH/MySQLOO/releases/latest) die passende Datei herunter:

   - bei `x86`: `gmsv_mysqloo_linux.dll`
   - bei `x64`: `gmsv_mysqloo_linux64.dll`

   > [!NOTE]
   > Die Datei endet auch für Linux auf `.dll`. Das ist richtig so. Die Dateien für Windows (`win32` und `win64`) funktionieren auf Deinem Server nicht.

4. **Modul hochladen**\
   Lade die Datei per [SFTP](/tutorials/gameserver/establish-sftp-connection) in folgendes Verzeichnis hoch. Existiert der Ordner `bin` noch nicht, lege ihn an:

   ```text
   /garrysmod/lua/bin/
   ```

5. **MySQL-Konfiguration öffnen**\
   Öffne per [SFTP](/tutorials/gameserver/establish-sftp-connection) folgende Datei:

   ```text
   /garrysmod/addons/darkrpmodification/lua/darkrp_config/mysql.lua
   ```

6. **Verbindungsdaten eintragen**\
   Setze `EnableMySQL` auf `true` und trage die Verbindungsdaten Deiner Datenbank ein:

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

7. **Server neu starten**\
   Speichere die Datei und starte Deinen Server neu. DarkRP legt die benötigten Tabellen in der Datenbank automatisch an.

> [!WARNING]
> Jeder, der per SFTP Zugriff auf Deinen Server hat, kann das Datenbank-Passwort in der Datei `mysql.lua` lesen. Gib den SFTP-Zugang deshalb nur an Personen weiter, denen Du vertraust.

> [!TIP]
> Klappt die Verbindung nicht, prüfe die Fehlermeldungen in der Konsole. DarkRP schreibt sie außerdem mit dem Präfix `MySQL Error:` in die Logs unter `/garrysmod/data/DarkRP_logs/`.
