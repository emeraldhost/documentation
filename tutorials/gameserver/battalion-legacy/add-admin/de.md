---
slug: "admin-hinzufuegen"
language: "de"
title: "So fügst Du einen Admin auf Deinem BATTALION Legacy Server hinzu"
description: "Admin auf einem BATTALION Legacy Server hinzufügen"
tags: []
date: "2026-07-31"
visibility: "public"
cta: "gameserver"
product_keys: ["battalion-legacy"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Admin hinzufügen"
sort: 1
related: ["gameserver/battalion-legacy/create-backup", "gameserver/battalion-legacy/join-server"]
---

BATTALION Legacy hat **keine Adminliste mit SteamIDs**. Stattdessen gibt es ein einziges **Admin-Passwort** für den Server: Wer es im Spiel über die Konsole eingibt, ist Admin. Du musst also keine IDs sammeln, sondern gibst das Passwort nur an die Personen weiter, die Adminrechte bekommen sollen.

> [!WARNING]
> Jeder, der das Admin-Passwort kennt, kann alle Adminbefehle auf Deinem Server ausführen – zum Beispiel die Karte wechseln oder Servereinstellungen im laufenden Betrieb ändern. Gib es nur an Personen weiter, denen Du vertraust.

## Admin-Passwort setzen

1. **Verwaltung öffnen**\
   Öffne die **Verwaltung** Deines Servers und wechsle zu den **Einstellungen**.

2. **Passwort eintragen**\
   Trage im Feld **Admin Passwort** Dein gewünschtes Passwort ein.

3. **Server neu starten**\
   Speichere die Änderung und starte Deinen Server neu. Das Passwort wird beim Start übergeben und gilt daher erst nach einem Neustart.

> [!IMPORTANT]
> Ab Werk ist ein Standardpasswort hinterlegt. Ändere es unbedingt, bevor Dein Server öffentlich erreichbar ist – sonst kann sich jeder, der das Standardpasswort kennt, Adminrechte verschaffen.

> [!NOTE]
> **Warum nicht in der Konfigurationsdatei?**
>
> In den mitgelieferten Serverdateien gibt es zwar einen Eintrag `AdminPassword`, Dein Server bekommt das Admin-Passwort aber bei jedem Start als Startparameter übergeben. Trage es deshalb ausschließlich in der **Verwaltung** ein.

## Entwicklerkonsole aktivieren

Die Adminbefehle gibst Du im Spiel über die Entwicklerkonsole ein. Diese ist ab Werk deaktiviert und muss einmalig freigeschaltet werden.

> [!NOTE]
> Dieser Schritt betrifft Deinen eigenen PC, nicht den Server. Jeder Admin muss ihn einmal auf seinem Rechner durchführen.

1. **Spiel beenden**\
   Schließe BATTALION Legacy, damit Deine Änderung beim Beenden nicht überschrieben wird.

2. **Konfigurationsordner öffnen**\
   Öffne auf Deinem PC den folgenden Ordner. Du kannst den Pfad direkt in die Adresszeile des Explorers kopieren:

   ```text
   %LOCALAPPDATA%\Battalion\Saved\Config\WindowsClient
   ```

3. **Input.ini öffnen**\
   Öffne die Datei `Input.ini` mit einem Texteditor. Existiert sie noch nicht, lege sie an.

4. **Konsolentaste eintragen**\
   Ergänze am Ende der Datei die folgenden beiden Zeilen:

   ```ini
   [/script/engine.inputsettings]
   ConsoleKey=Tilde
   ```

5. **Speichern und starten**\
   Speichere die Datei und starte BATTALION Legacy neu.

## Als Admin anmelden

1. **Server beitreten**\
   Tritt Deinem Server bei. Wie Du ihn findest, steht unter [Server beitreten](/tutorials/gameserver/battalion-legacy/join-server).

2. **Konsole öffnen**\
   Drücke im Spiel die Taste `^` beziehungsweise `~` links neben der `1`, um die Konsole zu öffnen.

3. **Anmelden**\
   Gib den folgenden Befehl ein und ersetze `<Passwort>` durch Dein Admin-Passwort:

   ```text
   Server.Login <Passwort>
   ```

4. **Ergebnis**\
   Ab jetzt akzeptiert der Server Deine Adminbefehle. Passiert bei einem Befehl nichts, war die Anmeldung nicht erfolgreich – prüfe das Passwort und melde Dich erneut an.

> [!NOTE]
> Die Anmeldung gilt nur für die aktuelle Sitzung. Nach einem Serverneustart oder einem erneuten Beitritt musst Du Dich mit `Server.Login` wieder anmelden.

## Adminbefehle nutzen

Alle Adminbefehle beginnen mit `Server.` und werden in derselben Konsole eingegeben. Groß- und Kleinschreibung spielt dabei keine Rolle.

| Befehl | Wirkung |
|--------|---------|
| `Server.Login <Passwort>` | Meldet Dich als Admin an |
| `Server.ChangeMap <Karte> <Modus>` | Wechselt auf eine andere Karte und einen anderen Spielmodus |
| `Server.Config.<Variable> <Wert>` | Ändert eine Servereinstellung im laufenden Betrieb, zum Beispiel `Server.Config.NumBots 0` |
| `Server.KillBots` | Entfernt die Bots aus der laufenden Runde |
| `Server.Announce <Nachricht>` | Blendet allen Spielern eine Nachricht ein |
| `Server.Pause` | Hält die Rundenuhr an, ohne die Spieler zu blockieren |

> [!NOTE]
> **Woher stammen diese Befehle?**
>
> `Server.Login` ist in den mitgelieferten Serverdateien selbst dokumentiert. Die übrigen Befehle stammen aus der offiziellen Serverdokumentation von BATTALION 1944, dem Vorgänger von BATTALION Legacy. Welche davon Deine Serverfassung tatsächlich noch kennt, ist nicht garantiert – prüfe es im Zweifel über die Autovervollständigung.

> [!TIP]
> Tippe in der Konsole nur `Serve` ein. Die Autovervollständigung zeigt Dir daraufhin alle `Server.*`-Befehle an, die Dein Spiel tatsächlich kennt. Das ist der zuverlässigste Weg, den vollen Befehlsumfang zu sehen.

> [!NOTE]
> **Kartennamen für `Server.ChangeMap`**
>
> Für den Modus **Wartide** sind in den Serverdateien diese Karten hinterlegt: `Coastal`, `Derailed`, `Docks`, `Invasion`, `Liberation`, `Manorhouse_V2`, `Savoia` und `Vanguard`. Schreibe den Kartennamen genau so – bei `Manorhouse_V2` also mit Unterstrich.
>
> Den Modus gibt die offizielle Dokumentation von BATTALION 1944 als Kürzel an; ihr Beispiel lautet `Server.ChangeMap Liberation WRT` für Wartide.

> [!NOTE]
> Nicht jede Änderung über `Server.Config.<Variable>` greift sofort – darauf weist auch die offizielle Dokumentation von BATTALION 1944 hin. Wirkt ein Wert nicht, hilft in der Regel ein Kartenwechsel über `Server.ChangeMap`.

## Spieler kicken und bannen

> [!WARNING]
> In der **Verwaltung** gibt es keine Bannfunktion, und ein Adminbefehl zum dauerhaften Sperren von Spielern ist für BATTALION Legacy nicht belegt. Die offizielle Serverdokumentation von BATTALION 1944 nennt dafür nur ein separates RCon-Werkzeug, das eine Blacklist-Datei erzeugt – ob dieses Werkzeug in den Serverdateien von BATTALION Legacy noch enthalten ist, ist nicht belegt.
>
> Zum Kicken führt die offizielle Serverdokumentation von BATTALION 1944 die Befehle `Server.KickPlayerByName <Name>`, `Server.KickPlayerBySteamID <SteamID>` und `Server.DisconnectAll` auf. Ob sie in der aktuellen Fassung von BATTALION Legacy noch vorhanden sind, ist nicht belegt – prüfe das als angemeldeter Admin über die Autovervollständigung in der Konsole.
>
> Führt das nicht weiter, bleibt Dir nur, Deinen Server über die Verwaltung neu zu starten oder vorübergehend zu stoppen.
