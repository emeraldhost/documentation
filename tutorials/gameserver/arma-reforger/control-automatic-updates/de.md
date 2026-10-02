---
slug: "automatische-updates-steuern"
language: "de"
title: "So steuerst Du die automatischen Updates Deines Arma Reforger Servers"
description: "Automatische Updates auf einem Arma Reforger Server steuern und Mod-Versionen festlegen"
tags: []
date: "2026-10-02"
visibility: "public"
cta: "gameserver"
product_keys: ["arma-reforger"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Automatische Updates steuern"
sort: 16
related: ["gameserver/arma-reforger/add-mods", "gameserver/arma-reforger/troubleshoot-server", "gameserver/arma-reforger/create-backup", "gameserver/arma-reforger/configure-server"]
---
Dein Arma Reforger Server kann sich bei jedem Start selbst auf die aktuelle Version bringen. In der Verwaltung entscheidest Du über das Feld **Auto Update**, ob das passiert.

| Feld | Werte | Bedeutung |
|------|-------|-----------|
| **Auto Update** | `1` / `0` | `1` = der Server sucht bei jedem Start nach einer neuen Serverversion und installiert sie, `0` = die installierte Version bleibt unverändert |

> [!NOTE]
> Erstelle ein Backup, bevor Du Deinen Server nach einem Spielupdate neu startest: [Backup erstellen](/tutorials/gameserver/arma-reforger/create-backup). So kannst Du Deinen Spielstand und Deine Konfiguration wiederherstellen, falls dabei etwas schiefgeht.

## Auto Update ein- oder ausschalten

1. **Verwaltung öffnen**\
   Öffne die Verwaltung Deines Servers.

2. **Einstellungen öffnen**\
   Navigiere zu den **Einstellungen**.

3. **Wert eintragen**\
   Trage im Feld **Auto Update** den gewünschten Wert ein: `1` für automatische Updates, `0` um sie abzuschalten.

4. **Server neu starten**\
   Speichere die Einstellung und starte Deinen Server neu.

## Server auf die neueste Version bringen

Ist ein neues Update für Arma Reforger erschienen, lässt Du **Auto Update** auf `1` stehen und startest Deinen Server neu. Beim Start wird die neue Serverversion heruntergeladen und installiert, danach startet der Server wie gewohnt.

> [!TIP]
> Starte Deinen Server nach einem Spielupdate möglichst zeitnah neu. Sobald Deine Mitspieler ihr Spiel aktualisiert haben, können sie erst wieder beitreten, wenn auch Dein Server auf der neuen Version läuft – je früher Dein Server nachzieht, desto kürzer ist diese Zeit.

## Wann Du Auto Update abschalten solltest

- <b>Kein Versionssprung mitten in einer Session</b><br>
  Jeder Neustart lädt sonst eine bereits erschienene neue Version nach. Solange **Auto Update** auf `0` steht, bleibt Dein Server auf der Version, die gerade installiert ist.

- <b>Ein Update macht Dir Probleme</b><br>
  Läuft Dein Server auf einer Version, mit der alles funktioniert, hältst Du ihn mit `0` dort fest, z.B. bis Deine Mods an das neue Update angepasst wurden. `0` verhindert allerdings nur kommende Updates: Ein bereits installiertes Update lässt sich darüber nicht rückgängig machen.

> [!WARNING]
> Lass **Auto Update** nur vorübergehend auf `0`. Spieler, deren Spiel bereits aktualisiert wurde, haben dann eine andere Version als Dein Server und können nicht beitreten. Gemeinsam spielen könnt ihr erst wieder, wenn Server und Spiel auf derselben Version sind. Setze den Wert deshalb rechtzeitig wieder auf `1`.

## Mod-Versionen und Updates

Auch Deine Mods werden beim Start aktualisiert – abhängig davon, wie sie in der `config.json` eingetragen sind. Das Feld **Auto Update** hat darauf keinen Einfluss – Mods steuerst Du ausschließlich über den Eintrag `version`. Wie Du Mods einträgst, erfährst Du in [Mods hinzufügen](/tutorials/gameserver/arma-reforger/add-mods).

- <b>Ohne `version`</b><br>
  Fehlt bei einem Mod der Eintrag `version`, lädt Dein Server beim Start immer die neueste Version dieses Mods.

- <b>Mit `version`</b><br>
  Steht eine feste Versionsnummer im Eintrag, bleibt der Mod auf genau dieser Version, bis Du sie selbst änderst.

> [!TIP]
> **Beispiel**
>
> ```json
> "mods": [
>   {
>     "modId": "59674C21AA886D57",
>     "name": "BetterMuzzleFlashes 2.0"
>   },
>   {
>     "modId": "591AF5BDA9F7CE8B",
>     "name": "Capture & Hold",
>     "version": "1.0.8"
>   }
> ]
> ```
>
> Der erste Mod wird bei jedem Start auf die neueste Version gebracht, der zweite bleibt auf Version `1.0.8`.

Eine feste Version kann rund um große Spielupdates hilfreich sein: Dein Modset ändert sich dann nicht unerwartet, nur weil ein Mod-Autor zwischendurch eine neue Version veröffentlicht. Ist eine festgelegte Mod-Version allerdings nicht mit dem neuen Spielupdate kompatibel, funktioniert der Mod auf Deinem Server womöglich nicht mehr richtig. Trage dann die neue Versionsnummer ein oder entferne den Eintrag `version`.

### Mod-Version ändern

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

3. **Version anpassen**\
   Öffne die Datei `config.json` und trage im `"mods"`-Bereich beim gewünschten Mod die neue Versionsnummer unter `version` ein – oder entferne die Zeile `version`, damit immer die neueste Version geladen wird.

   > [!TIP]
   > Achte beim Entfernen einer Zeile auf die Kommas: Nach dem letzten Wert eines Mod-Eintrags darf kein Komma stehen. Prüfe die Datei nach dem Bearbeiten mit einem JSON-Formatter wie [JSONLint](https://jsonlint.com/) – ein fehlendes oder überzähliges Komma reicht, damit der Server nicht startet.

4. **Server starten**\
   Speichere die Datei und starte Deinen Server.
