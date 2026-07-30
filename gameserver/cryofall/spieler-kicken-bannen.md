---
description: Spieler auf einem CryoFall Server kicken und bannen
---

# So kickst und bannst du Spieler auf deinem CryoFall Server

Spieler verwaltest du in CryoFall über die Konsole im Spiel. Alternativ kannst du die Listen bei gestopptem Server direkt in der Serverkonfiguration bearbeiten.

:::: info Hinweis
Du benötigst Operator- oder Moderatoren-Rechte, um diese Befehle nutzen zu können. Siehe [Admin hinzufügen](admin-hinzufuegen.md).
::::

## Befehle im Spiel nutzen

1. <b>Konsole öffnen</b><br>
   Drücke im Spiel die Taste `~`, um die Konsole zu öffnen.

2. <b>Befehl eingeben</b><br>
   Alle Befehle beginnen mit `/`, zum Beispiel:

   ```
   /ban Spielername
   ```

3. <b>Befehle vervollständigen</b><br>
   Mit der Tab-Taste vervollständigt die Konsole angefangene Befehle.

## Spieler kicken

Ein Kick wirft den Spieler für eine bestimmte Zeit vom Server. Danach kann er wieder beitreten.

```
/kick <Spielername> [Minuten] ["Grund"]
```

Beispiel – der Spieler fliegt für 60 Minuten mit Begründung:

```
/kick Spielername 60 "Bitte halte dich an die Serverregeln"
```

:::: info Hinweis
Den Grund schreibst du direkt hinter die Minutenangabe in doppelte Anführungszeichen. Lässt du die Minuten weg, gilt der Kick für 30 Minuten. Möchtest du einen Kick vorzeitig aufheben, nutzt du `/mod.kickList.remove <Spielername>`.
::::

## Spieler bannen

Ein Bann ist dauerhaft und gilt so lange, bis du ihn wieder aufhebst.

```
/ban <Spielername>
```

Der Spieler wird sofort getrennt und kann sich nicht mehr verbinden.

:::: info Hinweis
CryoFall kennt **keine zeitlich begrenzten Banns** – der Befehl hat keinen Zeitparameter. Soll ein Spieler nur vorübergehend draußen bleiben, nutze stattdessen `/kick` mit einer Minutenangabe.
::::

## Bann aufheben

```
/mod.blackList.remove <Spielername>
```

Mit `/mod.blackList.print` siehst du alle gebannten Spieler.

## Fraktionen kicken und bannen

Ganze Fraktionen entfernst du über deren Kürzel (Clan-Tag):

```
/banFaction <Kürzel>
```

```
/kickFaction <Kürzel> [Minuten] ["Grund"]
```

## Spieler stummschalten

```
/mute <Spielername> [Minuten]
```

```
/mod.muteList.remove <Spielername>
```

## Befehle im Überblick

| Befehl | Beschreibung |
|--------|-------------|
| `/ban <Spielername>` | Spieler dauerhaft aussperren |
| `/mod.blackList.remove <Spielername>` | Bann aufheben |
| `/mod.blackList.print` | Gebannte Spieler anzeigen |
| `/banFaction <Kürzel>` | Ganze Fraktion aussperren |
| `/kick <Spielername> [Minuten] ["Grund"]` | Spieler zeitlich begrenzt vom Server werfen |
| `/mod.kickList.remove <Spielername>` | Kick aufheben |
| `/mod.kickList.print` | Gekickte Spieler anzeigen |
| `/kickFaction <Kürzel> [Minuten] ["Grund"]` | Ganze Fraktion zeitlich begrenzt entfernen |
| `/mute <Spielername> [Minuten]` | Spieler stummschalten |
| `/mod.muteList.remove <Spielername>` | Stummschaltung aufheben |
| `/whiteListAdd <Spielername>` | Spieler auf die Whitelist setzen |
| `/mod.whiteList.remove <Spielername>` | Spieler von der Whitelist entfernen |
| `/mod.whiteList.print` | Whitelist anzeigen |
| `/mod.whiteList.enabled 1` | Whitelist aktivieren |

:::: info Hinweis
Gebannte Spieler kommen nicht mehr auf den Server – Operatoren und Moderatoren sind davon ausgenommen.
::::

## Server nur für bestimmte Spieler öffnen

CryoFall kennt kein Serverpasswort. Möchtest du deinen Server privat halten, nutzt du die Whitelist: Ist sie aktiv, kommen nur noch gelistete Spieler auf den Server – Operatoren und Moderatoren ausgenommen.

1. <b>Spieler eintragen</b><br>
   Setze zuerst dich selbst und alle Mitspieler auf die Liste:

   ```
   /whiteListAdd Spielername
   ```

2. <b>Whitelist aktivieren</b><br>
   Schalte die Whitelist erst danach scharf:

   ```
   /mod.whiteList.enabled 1
   ```

3. <b>Liste prüfen</b><br>
   Kontrolliere das Ergebnis:

   ```
   /mod.whiteList.print
   ```

:::: danger Wichtig
Aktiviere die Whitelist erst, wenn alle gewünschten Spieler eingetragen sind. Andernfalls sperrst du deine Mitspieler aus.
::::

## Listen über die Konfigurationsdatei verwalten

Die Listen stehen zusätzlich als Klartext in der Serverkonfiguration. Das hilft dir zum Beispiel, wenn du einen Bann aufheben möchtest und gerade niemand mit Rechten im Spiel ist.

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>Konfiguration öffnen</b><br>
   Öffne per [SFTP](../sftp-verbindung-herstellen.md) folgende Datei:

   ```
   /Data/SettingsServer.xml
   ```

3. <b>Liste bearbeiten</b><br>
   Die Namen stehen durch Komma getrennt in diesen Einträgen:

   ```xml
   <access_blacklist></access_blacklist>
   <access_whitelist></access_whitelist>
   <access_whitelist_enabled>0</access_whitelist_enabled>
   ```

   | Eintrag | Funktion |
   |---------|----------|
   | `access_blacklist` | Gebannte Spieler. Einen Namen zu entfernen entspricht einem Unban. |
   | `access_whitelist` | Zugelassene Spieler |
   | `access_whitelist_enabled` | `1` aktiviert die Whitelist, `0` deaktiviert sie |

4. <b>Server starten</b><br>
   Speichere die Datei und starte deinen Server.

:::: warning Achtung
Bearbeite die Datei nur bei gestopptem Server. Im laufenden Betrieb verwaltet der Server die Listen selbst und überschreibt deine Änderungen.
::::
