---
slug: "server-name-aendern"
language: "de"
title: "So änderst Du den Servernamen auf Deinem SCP: Secret Laboratory Server"
description: "Servernamen auf einem SCP: Secret Laboratory Server ändern"
tags: []
date: "2026-10-02"
visibility: "public"
cta: "gameserver"
product_keys: ["scp-secret-laboratory"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Servernamen ändern"
sort: 18
related: ["gameserver/scp-secret-laboratory/set-up-server-info", "gameserver/scp-secret-laboratory/get-server-verified", "gameserver/scp-secret-laboratory/edit-config-files", "gameserver/scp-secret-laboratory/change-max-players"]
---
Der Servername ist der Name, unter dem Dein Server in der öffentlichen Serverliste von SCP: Secret Laboratory angezeigt wird. Du legst ihn über den Schlüssel `server_name` in der Datei `config_gameplay.txt` fest. Die Grundlagen zum Bearbeiten der Konfigurationsdateien findest Du in der Anleitung [Konfigurationsdateien bearbeiten](/tutorials/gameserver/scp-secret-laboratory/edit-config-files).

> [!WARNING]
> Der Pfad zur Konfigurationsdatei enthält den Game Port Deines Servers: `/.config/SCP Secret Laboratory/config/<Port>/config_gameplay.txt`. Ersetze `<Port>` durch den tatsächlichen Game Port Deines Servers. Den Game Port findest Du in der Verwaltung unter **Übersicht**.

## Servernamen ändern

1. **Game Port herausfinden**\
   Öffne die Verwaltung Deines Servers und notiere Dir den Game Port aus der **Übersicht**.

2. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

3. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

4. **Konfigurationsdatei öffnen**\
   Öffne folgende Datei – ersetze `<Port>` durch Deinen Game Port:

   ```text
   /.config/SCP Secret Laboratory/config/<Port>/config_gameplay.txt
   ```

5. **Servernamen eintragen**\
   Der Schlüssel `server_name` steht ganz oben in der Datei. Standardmäßig steht dort ein Platzhalter wie:

   ```text
   server_name: My Server Name
   ```

   Ersetze den Platzhalter durch den gewünschten Namen Deines Servers, z.B.:

   ```text
   server_name: Emerald Community | Vanilla
   ```

6. **Server starten**\
   Speichere die Datei und starte Deinen Server über die Verwaltung. Der neue Name wird nach dem Start übernommen.

> [!NOTE]
> In der öffentlichen Serverliste erscheint Dein Server – und damit sein Name – nur, wenn er von Northwood verifiziert ist. Ohne Verifizierung treten Spieler per Direct Connect bei, siehe [Server beitreten](/tutorials/gameserver/scp-secret-laboratory/join-server).

> [!TIP]
> Laut der [offiziellen Verifizierungsanleitung](https://techwiki.scpslgame.com/books/server-guides/page/4-how-do-i-verify-my-server-a-step-by-step-guide) von Northwood unterstützt der Servername einen eingeschränkten Teil von Unitys Rich Text: Farb-Tags mit Hex-Codes (keine Farbnamen wie `red`), `<b>` (fett), `<i>` (kursiv), `<u>` (unterstrichen) und `<s>` (durchgestrichen), z.B. `<color=#50C878>Emerald Community</color>`. Wie die Formatierung aussieht, siehst Du nur in der Serverliste – also erst, wenn Dein Server verifiziert ist. Prüfe die Darstellung dann nach dem Neustart. Wie Du Tags korrekt verschachtelst, zeigt die Anleitung [Server-Info hinterlegen](/tutorials/gameserver/scp-secret-laboratory/set-up-server-info#formatierung-mit-rich-text-tags). Die übrigen Tags aus der dortigen Tabelle – z.B. `<size>`, `<align>`, `<mark>`, `<link>` und Farbnamen – gelten nicht für den Servernamen.

## Titel der Spielerliste anpassen

Direkt unter `server_name` stehen zwei weitere Schlüssel, die den Titel über der Spielerliste im Spiel steuern:

```text
#default - uses server_name
player_list_title: default
player_list_title_rate: default
```

- **`player_list_title`**: Der Titel, der oben in der Spielerliste angezeigt wird. Mit dem Wert `default` wird Dein `server_name` verwendet. Trägst Du einen eigenen Text ein, zeigt die Spielerliste diesen statt des Servernamens an.
- **`player_list_title_rate`**: Das Intervall in Sekunden, in dem der Titel der Spielerliste aktualisiert wird. Mit `default` gilt der Standardwert von 5 Sekunden.

Ein Beispiel für einen eigenen Titel:

```text
player_list_title: Emerald Community – Spielerliste
```

Du änderst die Schlüssel genauso wie `server_name`: Server stoppen, Datei bearbeiten, Server über die Verwaltung starten.

> [!NOTE]
> Der Schlüssel `report_server_name` weiter unten in der Datei hat nichts mit dem Namen in der Serverliste zu tun – er wird nur für Spieler-Meldungen über einen Discord-Webhook verwendet.

## Servername bei verifizierten Servern

Für die Verifizierung muss `server_name` gesetzt sein. Ist Dein Server verifiziert, gelten für ihn die [Community Server Guidelines](https://scpslgame.com/CSG.pdf) von Northwood – das betrifft auch den Namen, der in der öffentlichen Serverliste für alle Spieler sichtbar ist. Prüfe Deinen neuen Namen deshalb anhand der Guidelines, bevor Du ihn änderst. Mehr zur Verifizierung findest Du in der Anleitung [Server verifizieren lassen](/tutorials/gameserver/scp-secret-laboratory/get-server-verified).

> [!TIP]
> Erstelle vor größeren Änderungen an der `config_gameplay.txt` ein [Backup](/tutorials/gameserver/create-backup) Deines Servers.
