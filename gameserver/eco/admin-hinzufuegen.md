---
description: Admin auf einem Eco Server hinzufügen
---

# So fügst du einen Admin auf deinem Eco Server hinzu

Admins werden auf einem Eco Server in der Datei `/Configs/Users.eco` eingetragen. Wer dort gelistet ist, darf die Admin-Chatbefehle des Servers nutzen.

:::: danger Wichtig
Eingetragen wird immer eine **ID** – entweder die **SLG-ID** des Spielers oder seine **SteamID64**. Ein reiner Benutzername funktioniert nicht.
::::

:::: tip Tipp
Hier findest du eine Anleitung, wie du deine [SteamID64](../steamid64-herausfinden.md) herausfindest.
::::

## Eigene ID herausfinden

Deine SLG-ID zeigt dir der Server direkt im Spiel an:

1. <b>Chat öffnen</b><br>
   Drücke im Spiel `Enter`, um den Chat zu öffnen.

2. <b>Befehl eingeben</b><br>
   Gib folgenden Befehl ein, um deine eigene ID anzuzeigen:

   ```
   /manage whoami
   ```

   Für andere Spieler funktionieren `/manage whois <Spielername>` sowie `/manage listusers` – letzterer zeigt alle dem Server bekannten Benutzer mit Namen und ID.

## Admin eintragen

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung. Die Konfigurationsdateien werden nur beim Serverstart eingelesen.

2. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

3. <b>Users.eco öffnen</b><br>
   Öffne folgende Datei:

   ```
   /Configs/Users.eco
   ```

   :::: info Datei existiert nicht?
   In `/Configs/` liegt zu jeder Konfiguration zusätzlich eine Datei mit der Endung `.eco.template`. Diese Vorlage enthält nur die Standardwerte und wird vom Server nicht gelesen. Fehlt `Users.eco`, kopiere `Users.eco.template` und benenne die Kopie in `Users.eco` um.
   ::::

4. <b>ID eintragen</b><br>
   Suche den Abschnitt `Admins` und trage die ID im Bereich `$values` ein:

   ```json
   "Admins": {
     "System.String": {
       "$type": "System.Collections.Generic.List`1[[System.String, System.Private.CoreLib]], System.Private.CoreLib",
       "$values": [
         "76561198012345678"
       ]
     }
   }
   ```

   Die Zeile `$type` steht bereits in deiner Datei – lass sie unverändert stehen und ergänze nur die IDs unter `$values`. Je nach Serverversion kann sie anders aussehen als im Beispiel.

   Mehrere Admins trägst du durch Komma getrennt untereinander ein – hinter dem letzten Eintrag steht **kein** Komma:

   ```json
   "$values": [
     "76561198012345678",
     "76561198087654321"
   ]
   ```

5. <b>Server starten</b><br>
   Speichere die Datei und starte deinen Server. Beim Start werden die Adminrechte übernommen.

:::: warning Achtung
`Users.eco` muss gültiges JSON bleiben. Ein fehlendes oder überzähliges Komma reicht aus, damit die Datei nicht mehr eingelesen wird. Geht etwas schief, kannst du dir mit `Users.eco.template` den ursprünglichen Aufbau der Datei ansehen.
::::

:::: info Erster Admin
Der erste Admin lässt sich nur über die Datei eintragen. Die Chatbefehle zum Vergeben von Adminrechten setzen selbst bereits Adminrechte voraus.
::::

## Weitere Admins im Spiel vergeben

Sobald du Admin bist, kannst du weitere Admins direkt im Spiel ernennen:

| Befehl | Beschreibung |
|--------|--------------|
| `/manage admin <NameOderID> [Grund]` | Zeigt die Adminliste an oder ernennt einen Benutzer zum Admin. Kurzform: `/admin` |
| `/manage removeadmin <NameOderID> [Grund]` | Entzieht einem Benutzer die Adminrechte |
| `/manage listadmins` | Zeigt alle Admins des Servers an |
| `/manage authlevel` | Zeigt deine aktuelle Berechtigungsstufe an |

Als `<NameOderID>` akzeptieren die Befehle die Account-ID, SteamID, SLG-ID oder den Benutzernamen.

:::: info Hinweis
Diese Befehle gibst du im **Chat des Spiels** ein. Ob sie sich auch über die Konsole in der Verwaltung absetzen lassen, ist nicht dokumentiert – nutze im Zweifel den Weg über den Chat oder die Konfigurationsdatei.
::::

:::: tip Tipp
Wie du Spieler als Admin vom Server entfernst, erfährst du unter [Spieler kicken & bannen](spieler-kicken-bannen.md).
::::
