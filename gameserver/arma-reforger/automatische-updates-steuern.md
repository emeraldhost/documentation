---
description: Automatische Updates auf einem Arma Reforger Server steuern und Mod-Versionen festlegen
---

# So steuerst du die automatischen Updates deines Arma Reforger Servers

Dein Arma Reforger Server kann sich bei jedem Start selbst auf die aktuelle Version bringen. In der Verwaltung entscheidest du über das Feld **Auto Update**, ob das passiert.

| Feld | Werte | Bedeutung |
|------|-------|-----------|
| **Auto Update** | `1` / `0` | `1` = der Server sucht bei jedem Start nach einer neuen Serverversion und installiert sie, `0` = die installierte Version bleibt unverändert |

:::: info Hinweis
Erstelle ein Backup, bevor du deinen Server nach einem Spielupdate neu startest: [Backup erstellen](backup-erstellen.md). So kannst du deinen Spielstand und deine Konfiguration wiederherstellen, falls dabei etwas schiefgeht.
::::

## Auto Update ein- oder ausschalten

1. <b>Verwaltung öffnen</b><br>
   Öffne die Verwaltung deines Servers.

2. <b>Einstellungen öffnen</b><br>
   Navigiere zu den **Einstellungen**.

3. <b>Wert eintragen</b><br>
   Trage im Feld **Auto Update** den gewünschten Wert ein: `1` für automatische Updates, `0` um sie abzuschalten.

4. <b>Server neu starten</b><br>
   Speichere die Einstellung und starte deinen Server neu.

## Server auf die neueste Version bringen

Ist ein neues Update für Arma Reforger erschienen, lässt du **Auto Update** auf `1` stehen und startest deinen Server neu. Beim Start wird die neue Serverversion heruntergeladen und installiert, danach startet der Server wie gewohnt.

:::: tip Tipp
Starte deinen Server nach einem Spielupdate möglichst zeitnah neu. Sobald deine Mitspieler ihr Spiel aktualisiert haben, können sie erst wieder beitreten, wenn auch dein Server auf der neuen Version läuft – je früher dein Server nachzieht, desto kürzer ist diese Zeit.
::::

## Wann du Auto Update abschalten solltest

- <b>Kein Versionssprung mitten in einer Session</b><br>
  Jeder Neustart lädt sonst eine bereits erschienene neue Version nach. Solange **Auto Update** auf `0` steht, bleibt dein Server auf der Version, die gerade installiert ist.

- <b>Ein Update macht dir Probleme</b><br>
  Läuft dein Server auf einer Version, mit der alles funktioniert, hältst du ihn mit `0` dort fest, z.B. bis deine Mods an das neue Update angepasst wurden. `0` verhindert allerdings nur kommende Updates: Ein bereits installiertes Update lässt sich darüber nicht rückgängig machen.

:::: warning Achtung
Lass **Auto Update** nur vorübergehend auf `0`. Spieler, deren Spiel bereits aktualisiert wurde, haben dann eine andere Version als dein Server und können nicht beitreten. Gemeinsam spielen könnt ihr erst wieder, wenn Server und Spiel auf derselben Version sind. Setze den Wert deshalb rechtzeitig wieder auf `1`.
::::

## Mod-Versionen und Updates

Auch deine Mods werden beim Start aktualisiert – abhängig davon, wie sie in der `config.json` eingetragen sind. Das Feld **Auto Update** hat darauf keinen Einfluss – Mods steuerst du ausschließlich über den Eintrag `version`. Wie du Mods einträgst, erfährst du in [Mods hinzufügen](mods-hinzufuegen.md).

- <b>Ohne `version`</b><br>
  Fehlt bei einem Mod der Eintrag `version`, lädt dein Server beim Start immer die neueste Version dieses Mods.

- <b>Mit `version`</b><br>
  Steht eine feste Versionsnummer im Eintrag, bleibt der Mod auf genau dieser Version, bis du sie selbst änderst.

:::: tip Beispiel
```json
"mods": [
  {
    "modId": "59674C21AA886D57",
    "name": "BetterMuzzleFlashes 2.0"
  },
  {
    "modId": "591AF5BDA9F7CE8B",
    "name": "Capture & Hold",
    "version": "1.0.8"
  }
]
```
Der erste Mod wird bei jedem Start auf die neueste Version gebracht, der zweite bleibt auf Version `1.0.8`.
::::

Eine feste Version kann rund um große Spielupdates hilfreich sein: Dein Modset ändert sich dann nicht unerwartet, nur weil ein Mod-Autor zwischendurch eine neue Version veröffentlicht. Ist eine festgelegte Mod-Version allerdings nicht mit dem neuen Spielupdate kompatibel, funktioniert der Mod auf deinem Server womöglich nicht mehr richtig. Trage dann die neue Versionsnummer ein oder entferne den Eintrag `version`.

### Mod-Version ändern

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

3. <b>Version anpassen</b><br>
   Öffne die Datei `config.json` und trage im `"mods"`-Bereich beim gewünschten Mod die neue Versionsnummer unter `version` ein – oder entferne die Zeile `version`, damit immer die neueste Version geladen wird.

   :::: tip Tipp
   Achte beim Entfernen einer Zeile auf die Kommas: Nach dem letzten Wert eines Mod-Eintrags darf kein Komma stehen. Prüfe die Datei nach dem Bearbeiten mit einem JSON-Formatter wie [JSONLint](https://jsonlint.com/) – ein fehlendes oder überzähliges Komma reicht, damit der Server nicht startet.
   ::::

4. <b>Server starten</b><br>
   Speichere die Datei und starte deinen Server.
