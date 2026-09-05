---
slug: "admin-hinzufuegen"
language: "de"
title: "So fügst Du einen Admin auf Deinem The Cenozoic Era Server hinzu"
description: "Admin auf einem The Cenozoic Era Server hinzufügen"
tags: []
date: "2026-07-31"
visibility: "public"
cta: "gameserver"
product_keys: ["the-cenozoic-era"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Admin hinzufügen"
sort: 1
related: ["gameserver/the-cenozoic-era/create-backup", "gameserver/the-cenozoic-era/join-server", "gameserver/the-cenozoic-era/kick-ban-players"]
---

Admin-Rechte vergibst Du auf Deinem The Cenozoic Era Server über die Konfigurationsdatei `Game.ini`. Dort trägst Du die Spieler als **Owner** ein, die anschließend Zugriff auf die Admin-Befehle im Spiel haben.

## Owner in der Game.ini eintragen

1. **Server stoppen**\
   Öffne die **Verwaltung** Deines Servers und stoppe ihn, bevor Du die Konfiguration bearbeitest.

2. **Konfigurationsdatei öffnen**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server und öffne die Datei:

   ```text
   /TheCenozoicEra/Saved/Config/WindowsServer/Game.ini
   ```

3. **Abschnitt „Admin Setup“ suchen**\
   Scrolle bis ans Ende der Datei. Dort findest Du den Abschnitt mit dem leeren Eintrag `Owners=`:

   ```ini
   [/Game/GameCore/DefaultGame/GameInstance/TCEGameInstance.TCEGameInstance_C]

   Owners=
   ```

4. **Spieler eintragen**\
   Trage hinter `Owners=` die Steam NetID des Spielers ein, der Owner werden soll.

5. **Weitere Owner ergänzen**\
   Für jeden weiteren Owner fügst Du eine eigene Zeile mit `Owners=` hinzu. Der Eintrag darf so oft wiederholt werden, wie Du Owner brauchst.

6. **Speichern und starten**\
   Speichere die Datei und starte Deinen Server. Die Datei wird beim Start eingelesen – ohne Neustart greift die Änderung nicht.

> [!NOTE]
> Laut Kommentar in der `Game.ini` trägst Du bei `Owners=` eine **Steam NetID** ein. Ein Owner erhält damit Zugriff auf die Befehle und einen farbig hervorgehobenen Namen im Spiel.

> [!WARNING]
> **Nur `Owners=` ist dokumentiert**
>
> Der Kommentar in der Datei erwähnt neben Ownern auch Admins und Moderatoren, die Vorlage enthält aber ausschließlich den Eintrag `Owners=`. Wie die Schlüssel für Admins und Moderatoren heißen und in welchem Format sie einzutragen sind, ist nicht dokumentiert – trage dort nichts auf Verdacht ein.

## Namensfarben der Rollen

Im Abschnitt „Colors“ der `Game.ini` legst Du fest, in welcher Farbe die einzelnen Rollen im Spiel angezeigt werden. Die Werte werden als Hex-sRGB angegeben:

| Eintrag | Rolle | Standardwert |
|---------|-------|--------------|
| `OwnerColor` | Owner | `FF1CFAFF` (Lila) |
| `AdminColor` | Admin | `FFD000FF` (Gelb) |
| `ModeratorColor` | Moderator | `25FFF8FF` (Blau) |
| `PlayerColor` | Spieler | `FFFFFFFF` (Weiß) |
| `VIPColor` | VIP | `00FFB0FF` (Türkis) |
| `SupporterColor` | Supporter | `FFA100FF` (Orange) |

> [!NOTE]
> VIP und Supporter sind reine Auszeichnungsrollen für Spieler, die Du hervorheben möchtest. Owner, Admin und Moderator sind die Rollen für die Serververwaltung.

## Admin-Befehle im Überblick

Admins steuern den Server über Chat-Befehle im Spiel. Als Ziel gibst Du jeweils den Benutzernamen oder die Net ID des Spielers an.

| Befehl | Beschreibung |
|--------|-------------|
| `/users` | Erzwingt die Anzeige der Namensschilder |
| `/kick <Benutzername oder Net ID>` | Spieler vom Server trennen |
| `/ban <Benutzername oder Net ID>` | Spieler aussperren |
| `/unban <Benutzername oder Net ID>` | Bann aufheben |
| `/slay <Benutzername oder Net ID>` | Angegebenen Spieler töten |
| `/tp <Benutzername oder Net ID>` | Zum angegebenen Spieler teleportieren |
| `/bring <Benutzername oder Net ID>` | Angegebenen Spieler zu Dir holen |
| `/heal <Benutzername oder Net ID>` | Spieler heilen |
| `/grow <Benutzername oder Net ID>` | Kreatur des Spielers wachsen lassen |
| `/give <Benutzername oder Net ID>` | Spieler etwas geben |
| `/giveprogressionpoints <Punkte> <Benutzername oder Net ID>` | Fortschrittspunkte vergeben |
| `/weather <Wetter>` | Wetter setzen |
| `/time <Zeit>` | Tageszeit setzen |

> [!NOTE]
> Zu `/give` ist nicht dokumentiert, was der Befehl genau vergibt. Teste ihn im Zweifel auf einem leeren Server, bevor Du ihn im laufenden Betrieb einsetzt.

### Wetter setzen

Für `/weather` sind folgende Werte dokumentiert:

```text
Clear, Partly Cloudy, Cloudy, Overcast, Foggy, Light Rain, Rain, Storm
```

### Tageszeit setzen

`/time` erwartet einen Wert zwischen `0` und `2400`, wobei `1200` der Mittag ist:

```text
/time 1200
```

| Wert | Wirkung |
|------|---------|
| `0` – `2400` | Tageszeit setzen |
| `-1` | Tageszeit einfrieren |
| `-2` | Einfrieren wieder aufheben |

> [!WARNING]
> Einige Werte in der `Game.ini` werden bei jedem Serverstart aus den Einstellungen Deiner **Verwaltung** überschrieben. Passe solche Werte deshalb dort an und nicht in der Datei – sonst sind Deine Änderungen nach dem nächsten Start wieder verschwunden.

> [!NOTE]
> Der Konfigurationsordner heißt auch auf Deinem Linux-Server `WindowsServer`. The Cenozoic Era stellt nur ein Windows-Serverprogramm bereit, das auf Linux-Servern über eine Kompatibilitätsschicht läuft. Einen Ordner namens `LinuxServer` gibt es nicht.

> [!TIP]
> Wie Du Spieler von Deinem Server entfernst und Banns wieder aufhebst, erfährst Du unter [Spieler kicken & bannen](/tutorials/gameserver/the-cenozoic-era/kick-ban-players).
