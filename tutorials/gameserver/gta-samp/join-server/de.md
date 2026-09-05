---
slug: "server-beitreten"
language: "de"
title: "So trittst Du Deinem GTA San Andreas Server bei"
description: "Einem GTA San Andreas Server beitreten"
tags: []
date: "2026-07-30"
visibility: "public"
updated: "2026-08-29"
cta: "gameserver"
product_keys: ["gta-samp"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Server beitreten"
sort: 4
related: ["gameserver/gta-samp/add-admin", "gameserver/gta-samp/add-mods", "gameserver/gta-samp/create-backup", "gameserver/gta-samp/kick-ban-players"]
---

Der Multiplayer von GTA San Andreas läuft über **SA-MP** beziehungsweise dessen Nachfolger **open.mp**. Du benötigst dafür eine installierte PC-Version von GTA San Andreas sowie den passenden Client.

> [!IMPORTANT]
> Der alte SA-MP-Browser wird nicht mehr betrieben und findet keine Server mehr. Nutze stattdessen den [open.mp Launcher](https://github.com/openmultiplayer/launcher/releases/latest). Er bringt eine aktuelle Serverliste mit und verbindet sich sowohl mit SA-MP- als auch mit open.mp-Servern.

## Verbindungsdaten finden

> [!NOTE]
> Die **IP-Adresse** und den **Port** Deines Servers findest Du in der **Verwaltung** Deines Servers. SA-MP und open.mp nutzen einen einzigen UDP-Port für den Spielbetrieb und für Serverabfragen – **Game Port und Query Port sind identisch**. Einen separaten Query Port gibt es nicht.

## Über den open.mp Launcher verbinden

1. **Launcher herunterladen**\
   Lade den [open.mp Launcher](https://github.com/openmultiplayer/launcher/releases/latest) herunter und installiere ihn.

2. **Spielinstallation auswählen**\
   Gib beim ersten Start den Ordner Deiner GTA San Andreas Installation an, damit der Launcher das Spiel starten kann.

3. **Nickname festlegen**\
   Trage Deinen Spielernamen ein. Beachte dabei die Namensregeln weiter unten.

4. **Server über IP und Port hinzufügen**\
   Füge Deinen Server der Serverliste des Launchers manuell hinzu. Trage dafür IP-Adresse und Port zusammen ein, getrennt durch einen Doppelpunkt:

   ```text
   123.45.67.89:7777
   ```

   > [!TIP]
   > Das ist nur ein Beispiel. Setze immer die IP-Adresse und den Port ein, die Dir in der Verwaltung Deines Servers angezeigt werden.

5. **Passwort eintragen**\
   Hast Du auf Deinem Server ein Passwort gesetzt, wirst Du beim Verbinden danach gefragt.

6. **Verbinden**\
   Wähle Deinen Server aus und verbinde Dich. Der Launcher startet GTA San Andreas und baut die Verbindung auf.

## Regeln für den Spielernamen

Ein ungültiger Spielername ist der häufigste Grund, warum ein Beitritt scheitert.

| Regel | Details |
|-------|---------|
| Länge | 3 bis 20 Zeichen beim Beitritt |
| Erlaubte Zeichen | `0-9`, `a-z`, `A-Z` sowie `[` `]` `(` `)` `$` `@` `.` `_` `=` |
| Eindeutigkeit | Der Name darf nicht bereits von einem verbundenen Spieler verwendet werden |

> [!WARNING]
> Erscheint die Meldung **Unacceptable NickName**, enthält Dein Name ein unerlaubtes Zeichen, ist zu kurz oder zu lang – oder ein anderer Spieler ist bereits mit demselben Namen auf dem Server. Seltener tritt die Meldung auch bei sehr langer Serverlaufzeit auf; dann hilft ein Neustart Deines Servers.

## Server erscheint nicht in der Serverliste

Ob Dein Server öffentlich sichtbar ist, steuerst Du über zwei Einstellungen. Du erreichst sie per [SFTP](/tutorials/gameserver/establish-sftp-connection) in der Konfigurationsdatei Deines Servers.

**open.mp – `config.json`:**

```json
{
    "announce": true,
    "enable_query": true
}
```

**SA-MP – `server.cfg`:**

```text
announce 1
query 1
```

| Einstellung | Bedeutung |
|-------------|-----------|
| `announce` | Meldet den Server an der öffentlichen Serverliste (Masterlist) an |
| `enable_query` bzw. `query` | Legt fest, ob Serverinformationen im Serverbrowser angezeigt werden – `enable_query` in der `config.json`, `query` in der `server.cfg` |

> [!TIP]
> Bearbeitest Du die `config.json`, prüfe die Datei nach dem Bearbeiten mit einem JSON-Formatter wie [JSONLint](https://jsonlint.com/) – ein fehlendes oder überzähliges Komma reicht, damit Dein Server die Konfiguration nicht mehr einlesen kann.

> [!NOTE]
> Zusätzlich erscheinen im Serverbrowser die Werte `name` beziehungsweise `hostname`, `language`, `mapname` und `gamemodetext` sowie `weburl` aus Deiner Konfiguration. Die Verbindung über IP-Adresse und Port funktioniert auch dann, wenn Dein Server nicht in der öffentlichen Liste steht.

> [!IMPORTANT]
> Ändere den Port nicht selbst in der Konfigurationsdatei. Der Port wird Deinem Server über das Panel zugewiesen – trägst Du dort einen anderen Wert ein, ist Dein Server nicht mehr erreichbar.

## Spiel startet nicht oder verbindet nicht

> [!WARNING]
> Singleplayer-Mods verhindern den Start des Multiplayer-Clients. Entferne alle `.asi`- und `.cs`-Dateien, ausgetauschte Fahrzeug- und Skinmodelle sowie Trainer aus Deiner Spielinstallation, bevor Du Dich verbindest. Serverseitige Inhalte werden ohnehin automatisch vom Server geladen – siehe [Mods hinzufügen](/tutorials/gameserver/gta-samp/add-mods).

> [!NOTE]
> Bleibt der Client bei **Connecting to IP:Port…** hängen, prüfe zuerst, ob Dein Server in der Verwaltung tatsächlich läuft, und ob IP-Adresse und Port exakt übereinstimmen.
