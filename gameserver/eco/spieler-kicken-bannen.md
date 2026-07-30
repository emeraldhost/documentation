---
description: Spieler auf einem Eco Server kicken und bannen
---

# So kickst und bannst du Spieler auf deinem Eco Server

Spieler kannst du direkt im Spiel per Chat-Befehl entfernen oder dauerhaft über die Datei `/Configs/Users.eco` aussperren.

:::: info Hinweis
Du benötigst Adminrechte, um diese Befehle nutzen zu können. Siehe [Admin hinzufügen](admin-hinzufuegen.md).
::::

## Befehle im Spiel nutzen

1. <b>Chat öffnen</b><br>
   Drücke im Spiel `Enter`, um den Chat zu öffnen.

2. <b>Spieler ermitteln</b><br>
   Mit folgendem Befehl siehst du alle dem Server bekannten Benutzer mit Namen und ID:

   ```
   /manage listusers
   ```

3. <b>Befehl ausführen</b><br>
   Gib den gewünschten Befehl ein, zum Beispiel:

   ```
   /manage ban 76561198012345678 Griefing 1w
   ```

:::: info Hinweis
Alle Befehle akzeptieren als `<NameOderID>` die Account-ID, SteamID, SLG-ID oder den Benutzernamen. Die Kurzformen wie `/kick` oder `/ban` funktionieren gleichwertig zur langen Schreibweise.
::::

## Spieler kicken

```
/manage kick <NameOderID> [Grund]
```

Der Spieler wird aus der laufenden Sitzung entfernt, kann aber jederzeit wieder beitreten. Kurzform: `/kick`

## Spieler bannen

```
/manage ban <NameOderID> [Grund] [Dauer]
```

Ohne Angabe einer Dauer gilt der Bann dauerhaft. Kurzform: `/ban`

:::: tip Zeitlich begrenzte Banns
Die Dauer gibst du im Format `1m`, `1h`, `1d` oder `1w` an – also Minuten, Stunden, Tage oder Wochen:

```
/manage ban 76561198012345678 Regelverstoß 2d
```
::::

:::: info Bannliste anzeigen
Gibst du `/manage ban` ohne weitere Angaben ein, zeigt dir der Server die Liste der gebannten Spieler.
::::

## Bann aufheben

```
/manage unban <NameOderID> [Grund]
```

Kurzform: `/unban`

## Befehle im Überblick

| Befehl | Kurzform | Beschreibung |
|--------|----------|--------------|
| `/manage listusers` | – | Alle bekannten Benutzer mit Namen und ID anzeigen |
| `/manage whois <Benutzer>` | – | Informationen zu einem Benutzer anzeigen |
| `/manage kick <NameOderID> [Grund]` | `/kick` | Spieler aus der laufenden Sitzung entfernen |
| `/manage ban <NameOderID> [Grund] [Dauer]` | `/ban` | Spieler aussperren, ohne Dauer dauerhaft |
| `/manage unban <NameOderID> [Grund]` | `/unban` | Bann aufheben |
| `/manage mute <NameOderID> [Grund] [Dauer]` | `/mute` | Spieler stummschalten |
| `/manage unmute <NameOderID> [Grund]` | `/unmute` | Stummschaltung aufheben |
| `/manage warnuser <Benutzer> <Warnung>` | – | Verwarnung an einen Spieler senden |

:::: info Hinweis
Diese Befehle gibst du im **Chat des Spiels** ein. Ob sie sich auch über die Konsole in der Verwaltung absetzen lassen, ist nicht dokumentiert – nutze im Zweifel den Weg über den Chat oder die Konfigurationsdatei.
::::

## Listen über die Konfigurationsdatei verwalten

Banns und Stummschaltungen kannst du auch ohne laufendes Spiel direkt in der Konfiguration setzen:

```
/Configs/Users.eco
```

| Abschnitt | Funktion |
|-----------|----------|
| `BlackList` | Gelisteten Benutzern wird die Verbindung zum Server verweigert |
| `MuteList` | Gelistete Benutzer sind stummgeschaltet |
| `Admins` | Benutzer mit Adminrechten, siehe [Admin hinzufügen](admin-hinzufuegen.md) |

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung. Die Konfigurationsdateien werden nur beim Serverstart eingelesen.

2. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

3. <b>ID eintragen</b><br>
   Öffne `/Configs/Users.eco` und trage die SLG-ID oder SteamID64 im gewünschten Abschnitt unter `$values` ein. Der Aufbau des Abschnitts ist bereits vorhanden – ergänze nur die ID und lass den Rest unverändert:

   ```json
   "BlackList": {
     "System.String": {
       "$type": "System.Collections.Generic.List`1[[System.String, System.Private.CoreLib]], System.Private.CoreLib",
       "$values": [
         "76561198012345678"
       ]
     }
   }
   ```

4. <b>Server starten</b><br>
   Speichere die Datei und starte deinen Server.

:::: info Entbannen über die Datei
Um einen Bann aufzuheben, entfernst du die ID aus `$values` – inklusive des zugehörigen Kommas. Achte darauf, dass die Datei gültiges JSON bleibt, und starte den Server anschließend neu.
::::

:::: warning Achtung
Auch hier gilt: Benutzernamen funktionieren nicht, es muss eine SLG-ID oder SteamID64 eingetragen werden. Wie du sie ermittelst, steht unter [Admin hinzufügen](admin-hinzufuegen.md).
::::

:::: info Whitelist
`Users.eco` enthält zusätzlich eine `WhiteList`. Sie ist laut offizieller Dokumentation **keine Zugangssperre**: Benutzer auf der Whitelist müssen lediglich kein Server-Passwort eingeben, um sich zu verbinden. Zum Aussperren einzelner Spieler nutzt du die `BlackList`.
::::
