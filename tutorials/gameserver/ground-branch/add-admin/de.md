---
slug: "admin-hinzufuegen"
language: "de"
title: "So fügst Du einen Admin auf Deinem Ground Branch Server hinzu"
description: "Admin auf einem Ground Branch Server hinzufügen"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["ground-branch"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Admin hinzufügen"
sort: 1
related: ["gameserver/ground-branch/add-mods", "gameserver/ground-branch/create-backup", "gameserver/ground-branch/join-server", "gameserver/ground-branch/kick-ban-players"]
---

Admins werden auf einem Ground Branch Server über die Datei `Admin.ini` verwaltet. Am schnellsten geht es aber über das **Admin-Setup-Passwort**: Damit machst Du Dich direkt im Spiel zum SuperAdmin, ohne vorher eine SteamID heraussuchen zu müssen.

> [!NOTE]
> Alle Konfigurationsdateien liegen unter `/GroundBranch/ServerConfig/`. Sie werden erst beim **ersten Serverstart** erzeugt. Starte Deinen Server also einmal, bevor Du die Dateien suchst.

## Weg 1: Über das Admin-Setup-Passwort

Dieser Weg ist der schnellste und funktioniert komplett im Spiel.

1. **Server starten**\
   Starte Deinen Server einmal über die Verwaltung, damit die Konfigurationsdateien angelegt werden.

2. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

3. **Passwort auslesen**\
   Öffne folgende Datei und notiere Dir das darin enthaltene Passwort:

   ```text
   /GroundBranch/ServerConfig/AdminSetupPassword.txt
   ```

4. **Server beitreten**\
   Starte Ground Branch und tritt Deinem Server bei – siehe [Server beitreten](/tutorials/gameserver/ground-branch/join-server).

5. **Konsole öffnen**\
   Drücke im Spiel die Taste `` ` `` (Akzenttaste, links neben der `1`), um die Spielkonsole zu öffnen.

6. **Befehl ausführen**\
   Gib folgenden Befehl ein und ersetze `<Passwort>` durch den Wert aus der Datei:

   ```text
   admin setup <Passwort>
   ```

   Du bist damit sofort **SuperAdmin** auf diesem Server.

> [!WARNING]
> Das Setup-Passwort verfällt, sobald es einmal verwendet wurde. Es dient ausschließlich dazu, den ersten Admin einzurichten – alle weiteren Admins verwaltest Du danach über das Adminmenü oder die `Admin.ini`.

## Weg 2: Admin.ini bearbeiten

Alternativ trägst Du Admins direkt in die Konfigurationsdatei ein. Dafür benötigst Du die **SteamID64** des Spielers – eine 17-stellige Zahl, die mit `7656` beginnt.

> [!TIP]
> Hier findest Du eine Anleitung, wie Du Deine [SteamID64](/tutorials/gameserver/steamid64-find-out) herausfindest.

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung. Die Datei wird nur beim Serverstart eingelesen.

2. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

3. **Admin.ini öffnen**\
   Öffne folgende Datei:

   ```text
   /GroundBranch/ServerConfig/Admin.ini
   ```

4. **Admin eintragen**\
   Ergänze im Abschnitt `[/Script/RBZooKeeper.ZKAdmin]` pro Admin eine Zeile:

   ```ini
   [/Script/RBZooKeeper.ZKAdmin]
   Admins=(Name="JoeBlow",UniqueId="76561198012345678",ContactInfo="",Group="SuperAdmin")
   ```

   | Feld | Bedeutung |
   |------|-----------|
   | `Name` | Frei wählbarer Anzeigename, dient nur der Übersicht |
   | `UniqueId` | Die SteamID64 des Spielers (17-stellig) |
   | `ContactInfo` | Optionales Notizfeld, darf leer bleiben |
   | `Group` | Die Admingruppe, deren Rechte der Spieler erhält |

5. **Server starten**\
   Speichere die Datei und starte Deinen Server.

> [!NOTE]
> Die SteamID64 wird ohne Zusätze eingetragen. Der in älteren Anleitungen genannte Suffix `:0` ist nicht mehr nötig.

## Admingruppen

Welche Befehle eine Gruppe nutzen darf, legst Du ebenfalls in der `Admin.ini` fest. Jede Gruppe bekommt eine eigene `AdminGroups=`-Zeile, die **oberhalb** der Admins steht:

```ini
AdminGroups=(Name="SuperAdmin",Commands=("all"))
AdminGroups=(Name="Moderator",Commands=("kick","ban","changemap"))
```

| Feld | Bedeutung |
|------|-----------|
| `Name` | Name der Gruppe, den Du bei den Admins unter `Group` einträgst |
| `Commands` | Liste der erlaubten Befehle, `"all"` erlaubt sämtliche Befehle |

> [!NOTE]
> Ein Admin der Gruppe `SuperAdmin` darf alles, ein Admin der Gruppe `Moderator` im obigen Beispiel nur kicken, bannen und die Karte wechseln. Welche Befehle Du einer Gruppe überhaupt zuweisen kannst, listet die Datei `GroundBranch/Config/DefaultZooKeeper.ini` auf.

> [!NOTE]
> Admins lassen sich sowohl in der Datei als auch im Spiel über das Adminmenü verwalten. Die **Gruppen** selbst kannst Du ausschließlich in der `Admin.ini` anlegen und bearbeiten.

## Adminmenü öffnen

Sobald Du Admin bist, stehen Dir im Spiel drei Wege zum Adminmenü offen:

- Taste `F8`
- ESC-Menü und dort die Admin-Schaltfläche
- Konsole (`` ` ``) und der Befehl `admin`

Im Adminmenü verwaltest Du unter anderem Spieler (kicken und bannen), den Kartenwechsel und die Kartenliste sowie die Adminliste selbst.

## Weitere Adminbefehle

| Befehl | Beschreibung |
|--------|-------------|
| `admin setup <Passwort>` | Einmalige Einrichtung des ersten Admins über die Konsole |
| `admin` | Öffnet das Adminmenü |
| `kick` | Entfernt einen Spieler vom Server, optional mit Grund |
| `ban` | Sperrt einen Spieler befristet oder dauerhaft, optional mit Grund |
| `unban` | Hebt einen Bann über die eindeutige Spieler-ID wieder auf |
| `say` | Sendet eine Nachricht an alle Spieler |
| `motd` | Zeigt allen Spielern die Nachricht des Tages an |
| `changemap` / `nextmap` | Wechselt die Karte bzw. springt zur nächsten Karte der Kartenliste |
| `resurrect` (`res`) | Belebt einen gefallenen Spieler an seinem Todesort wieder |
| `resurrectnear` (`resnear`) | Belebt einen gefallenen Spieler beim nächsten lebenden Spieler wieder |
| `restartserver` | Startet den Server neu |

> [!NOTE]
> Welche dieser Befehle Dir zur Verfügung stehen, hängt von Deiner Admingruppe ab. Für die Konsole offiziell dokumentiert sind `admin setup <Passwort>` und `admin`; alle übrigen Befehle rufst Du über das Adminmenü auf.

> [!WARNING]
> **Kein RCON**
>
> Ground Branch bietet keine RCON-Schnittstelle. Die gesamte Administration läuft im Spiel über das Adminmenü beziehungsweise die Spielkonsole.

> [!IMPORTANT]
> Änderungen an den Dateien im Ordner `ServerConfig` werden erst nach einem **Serverneustart** übernommen. Bearbeite die Dateien außerdem immer bei gestopptem Server, damit Deine Änderungen nicht überschrieben werden.

> [!TIP]
> Wie Du Spieler als Admin vom Server entfernst, erfährst Du unter [Spieler kicken & bannen](/tutorials/gameserver/ground-branch/kick-ban-players).
