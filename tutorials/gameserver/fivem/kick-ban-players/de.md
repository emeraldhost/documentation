---
slug: "spieler-kicken-bannen"
language: "de"
title: "So kickst und bannst Du Spieler auf Deinem FiveM Server"
description: "Spieler auf einem FiveM Server kicken und bannen"
tags: []
date: "2026-08-07"
visibility: "public"
cta: "gameserver"
product_keys: ["fivem"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Spieler kicken & bannen"
sort: 9
related: ["gameserver/fivem/import-database", "gameserver/fivem/join-server", "gameserver/fivem/set-license-key", "gameserver/fivem/set-port"]
---

Für die Moderation Deines FiveM Servers hast Du zwei Wege: die **txAdmin-Weboberfläche** und die **Server-Konsole**. In txAdmin kickst, verwarnst und bannst Du Spieler per Klick und kannst Bans später wieder aufheben. Über die Konsole kannst Du Spieler ausschließlich kicken – einen eingebauten Ban-Befehl bringt FXServer nicht mit.

> [!NOTE]
> Ob txAdmin läuft, steuerst Du in der Verwaltung über das Feld **txAdmin** (`1` = aktiv, `0` = deaktiviert). Beim Serverstart gibt txAdmin die Adresse seiner Weboberfläche in der Konsole aus. Wie Du txAdmin einrichtest, steht unter [txAdmin aktivieren](/tutorials/gameserver/fivem/enable-txadmin).

## Spieler in txAdmin finden

1. **txAdmin öffnen**\
   Rufe die txAdmin-Weboberfläche Deines Servers auf und melde Dich mit Deinem Admin-Zugang an.

2. **Spielerliste öffnen**\
   Alle verbundenen Spieler stehen in der Spielerliste am rechten Rand. Über das Feld **Filter by Name or ID** grenzt Du die Liste ein.

3. **Spieler-Fenster öffnen**\
   Klicke auf den Namen des Spielers. Es öffnet sich ein Fenster mit den Reitern **Info**, **History**, **IDs** und **Ban** sowie den Schaltflächen **DM**, **Kick** und **Warn**.

> [!NOTE]
> Spieler, die gerade offline sind, findest Du oben im Menü unter **Players**. Dort kannst Du nach **Name**, **Notes** oder **Player IDs** suchen. **Bannen** und **Verwarnen** funktioniert auch bei offline Spielern, **Kicken** nur bei Spielern, die gerade verbunden sind.

## Spieler kicken

1. **Spieler-Fenster öffnen**\
   Öffne das Fenster des Spielers wie oben beschrieben.

2. **Kick auswählen**\
   Klicke unten im Fenster auf **Kick**.

3. **Grund eingeben**\
   Trage einen Grund ein oder lass das Feld leer und bestätige mit **Send**.

> [!NOTE]
> Ein Kick entfernt den Spieler nur aus der laufenden Sitzung. Er kann sich danach sofort wieder verbinden. Soll jemand dauerhaft draußen bleiben, nutze einen Ban.

> [!TIP]
> Willst Du alle Spieler auf einmal entfernen, klickst Du in der linken Seitenleiste bei den Server-Steuerungen auf **Kick All Players**.

## Spieler bannen

1. **Spieler-Fenster öffnen**\
   Öffne das Fenster des Spielers und wechsle in den Reiter **Ban**.

2. **Grund eintragen**\
   Trage im Feld **Reason** den Grund für den Ban ein. Der Grund muss mindestens drei Zeichen lang sein.

3. **Dauer auswählen**\
   Wähle unter **Duration** eine der Vorgaben aus:

   | Auswahl | Bedeutung |
   |---------|-----------|
   | `Custom (set below)` | eigene Dauer |
   | `2 HOURS` / `8 HOURS` | 2 bzw. 8 Stunden |
   | `1 DAY` / `2 DAYS` | 1 bzw. 2 Tage |
   | `1 WEEK` / `2 WEEKS` | 1 bzw. 2 Wochen |
   | `Permanent` | dauerhaft |

   Bei **Custom (set below)** trägst Du darunter eine Zahl ein und wählst als Einheit **HOURS**, **DAYS**, **WEEKS** oder **MONTHS**.

4. **Ban ausführen**\
   Klicke auf **Apply Ban**. Ist der Spieler gerade verbunden, wird er sofort vom Server getrennt.

> [!NOTE]
> Der Ban gilt für alle Kennungen (Identifier), die txAdmin von diesem Spieler gespeichert hat – nicht nur für seinen Namen. Beim nächsten Verbindungsversuch sieht der Spieler eine Meldung mit **Ban Reason**, **Ban Date**, **Banned by** und der **Ban ID**.

> [!TIP]
> Wiederkehrende Gründe legst Du Dir als Vorlage an: **Settings** → **Bans** → **Edit Ban Templates**. Auf derselben Seite steht die **Ban Rejection Message** – ein optionaler Text, der dem gebannten Spieler zusätzlich angezeigt wird. Wenn Du ein Einspruchsverfahren hast, kannst Du die Spieler dort darauf hinweisen.

## Ban aufheben

1. **History öffnen**\
   Klicke oben im Menü auf **History**. Dort stehen alle Verwarnungen und Bans.

2. **Eintrag suchen**\
   Suche den Ban über die **Action ID** (Format `XXXX-XXXX`), über **Reason** oder über **Player IDs**. Zusätzlich kannst Du nach Typ und nach ausführendem Admin filtern.

   > [!TIP]
   > Die Action ID ist genau die **Ban ID**, die dem gebannten Spieler beim Verbindungsversuch angezeigt wird. Lass sie Dir vom Spieler nennen, dann findest Du den Eintrag sofort.

3. **Eintrag öffnen**\
   Klicke auf den Eintrag. Es öffnet sich ein Fenster mit den Reitern **Info**, **IDs** und **Revoke**.

4. **Ban zurücknehmen**\
   Wechsle in den Reiter **Revoke** und klicke auf **Revoke Ban**.

> [!NOTE]
> Du erreichst denselben Dialog auch direkt aus dem Spieler-Fenster: Im Reiter **History** klickst Du dort einfach auf den betreffenden Eintrag.

## Spieler über die Server-Konsole kicken

> [!NOTE]
> Welche Konsole Du brauchst, hängt vom Feld **txAdmin** ab: Steht es auf `1`, steuert txAdmin den eigentlichen Serverprozess – gib Deine Befehle dann in der **Live Console** ein, die Du in txAdmin in der linken Seitenleiste findest. Steht es auf `0`, startet Dein Server direkt mit `+exec server.cfg` und Du nutzt die Konsole in der Verwaltung.

> [!WARNING]
> In der Konsole werden Befehle **ohne** vorangestellten Schrägstrich eingegeben.

1. **Konsole öffnen**\
   Öffne die **Live Console** in txAdmin oder – bei deaktiviertem txAdmin – die Konsole in der Verwaltung.

2. **Spieler-ID ermitteln**\
   Lass Dir die verbundenen Spieler ausgeben:

   ```text
   status
   ```

   Die Ausgabe enthält je Spieler die Server-ID, den Namen, die primäre Kennung und den Ping.

3. **Spieler kicken**\
   Kicke den Spieler über seine Server-ID und gib einen Grund an:

   ```text
   clientkick 12 Regelverstoss
   ```

> [!NOTE]
> `status` und `clientkick` stammen aus der Standard-Ressource `rconlog`. Sie muss laufen, damit die Befehle verfügbar sind – in der Standard-`server.cfg` sorgt dafür die Zeile `ensure rconlog`.

> [!WARNING]
> Einen eingebauten Ban-Befehl gibt es in FXServer nicht. Bans setzt Du entweder über txAdmin oder über das Ban-System Deines Frameworks bzw. Skripts.

## Berechtigungen für Dein Team

Welcher Admin kicken oder bannen darf, legst Du in txAdmin unter **Admins** fest. Relevant sind dabei:

- `players.kick` – Spieler kicken
- `players.warn` – Spieler verwarnen
- `players.ban` – Spieler bannen und entbannen
- `console.write` – Befehle in der Live Console ausführen

> [!TIP]
> Vergib nur die Rechte, die wirklich gebraucht werden. Ein Moderator kommt in der Regel mit `players.kick`, `players.warn` und `players.ban` aus – Rechte wie `control.server` oder `settings.write` braucht er dafür nicht.
