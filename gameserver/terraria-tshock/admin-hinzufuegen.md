---
description: Admin auf einem Terraria tShock Server hinzufügen
---

# So fügst du einen Admin auf deinem Terraria tShock Server hinzu

tShock verwaltet Rechte über **Accounts und Gruppen**. Ein Admin ist also kein Eintrag in einer Datei, sondern ein Benutzerkonto aus Benutzername und Passwort, das einer Gruppe mit weitreichenden Rechten zugeordnet ist. Eine SteamID oder eine andere Spieler-ID brauchst du dafür nicht.

:::: info Hinweis
Die Accounts liegen in der Datenbank `/tshock/tshock.sqlite`. Passwörter werden dort verschlüsselt gespeichert und lassen sich nicht auslesen – ein vergessenes Passwort setzt du über die Serverkonsole neu.
::::

## Admin über die Serverkonsole anlegen

Das ist der schnellste Weg, weil du dafür weder einen Setup-Code noch ein bestehendes Konto benötigst. Die Serverkonsole hat auf einem tShock-Server immer die höchsten Rechte.

1. <b>Server starten</b><br>
   Starte deinen Server über die Verwaltung.

2. <b>Konsole öffnen</b><br>
   Öffne die Serverkonsole in der Verwaltung.

3. <b>Account anlegen</b><br>
   Gib folgenden Befehl ein:

   ```
   user add <Benutzername> <Passwort> owner
   ```

   Ersetze `<Benutzername>` und `<Passwort>` durch deine Wunschdaten und behalte `owner` als Gruppe bei.

   :::: info Hinweis
   In der Serverkonsole schreibst du die Befehle **ohne** führenden Schrägstrich. Im Ingame-Chat brauchst du ihn dagegen immer, also `/user add ...`.
   ::::

4. <b>Server beitreten</b><br>
   Tritt deinem Server bei: [Server beitreten](server-beitreten.md).

5. <b>Anmelden</b><br>
   Melde dich im Ingame-Chat an:

   ```
   /login <Benutzername> <Passwort>
   ```

   Du hast jetzt Adminrechte und kannst alle Befehle deiner Gruppe nutzen.

   :::: warning Setup-Code abschalten
   Hat tShock beim Start einen Setup-Code ausgegeben, bleibt dieser bis zum nächsten Serverstart gültig – auch dann, wenn du deinen Account über die Konsole angelegt hast. Gib deshalb nach der Anmeldung einmal `/setup` im Ingame-Chat ein. Damit wird das Setup-System sofort abgeschaltet und der Code gelöscht.
   ::::

## Admin über den Setup-Code anlegen

Alternativ nutzt du den Einrichtungsassistenten, den tShock beim ersten Start bereitstellt.

1. <b>Setup-Code auslesen</b><br>
   Öffne die Serverkonsole in der Verwaltung. Beim Start steht dort ein Hinweis in dieser Form:

   ```
   To setup the server, join the game and type /setup <Code>
   ```

   :::: tip Tipp
   Der Code steht zusätzlich in der Datei `/tshock/setup-code.txt`, die du per [SFTP](../sftp-verbindung-herstellen.md) öffnen kannst.
   ::::

2. <b>Setup-Befehl eingeben</b><br>
   Tritt deinem Server bei und gib im Ingame-Chat ein:

   ```
   /setup <Code>
   ```

   :::: warning Achtung
   Dieser Befehl funktioniert nur im Spiel, nicht in der Serverkonsole.
   ::::

3. <b>Account anlegen</b><br>
   Lege dir jetzt dein Konto an:

   ```
   /user add <Benutzername> <Passwort> owner
   ```

4. <b>Anmelden</b><br>
   Melde dich mit deinem neuen Konto an:

   ```
   /login <Benutzername> <Passwort>
   ```

5. <b>Setup abschließen</b><br>
   Gib zum Schluss noch einmal ein:

   ```
   /setup
   ```

   Damit wird das Setup-System dauerhaft deaktiviert und der Setup-Code gelöscht.

   :::: danger Wichtig
   Schließe das Setup unbedingt ab. Solange das Setup-System aktiv ist, kann sich jeder, der den Code kennt, volle Rechte auf deinem Server verschaffen.
   ::::

## Accounts verwalten

Alle Befehle funktionieren im Ingame-Chat (mit `/`) und in der Serverkonsole (ohne `/`).

| Befehl | Beschreibung |
|--------|-------------|
| `user add <Benutzer> <Passwort> <Gruppe>` | Neuen Account anlegen |
| `user del <Benutzer>` | Account löschen |
| `user password <Benutzer> <neues Passwort>` | Passwort ändern |
| `user group <Benutzer> <neue Gruppe>` | Account einer anderen Gruppe zuordnen |

:::: info Hinweis
Passwörter müssen standardmäßig mindestens vier Zeichen lang sein. Diesen Wert steuert `MinimumPasswordLength` in der Datei `/tshock/config.json`.
::::

:::: tip Automatische Anmeldung
Nach der ersten Anmeldung merkt sich tShock die Geräte-Kennung deines Clients und meldet dich künftig automatisch an, sobald du dem Server beitrittst. Steuern lässt sich das über den Wert `DisableUUIDLogin` in der Datei `/tshock/config.json`.
::::

## Gruppen und Rechte

tShock bringt von Haus aus mehrere Gruppen mit, deren Rechte von unten nach oben zunehmen:

| Gruppe | Rolle |
|--------|-------|
| `guest` | Gäste ohne Anmeldung |
| `default` | Angemeldete Spieler ohne Sonderrechte |
| `vip` | Spieler mit einzelnen Zusatzrechten |
| `newadmin` | Einsteiger-Moderation, z.B. kicken |
| `admin` | Vollwertige Moderation inklusive Banns |
| `trustedadmin` | Zusätzliche Verwaltungsrechte |
| `owner` | Nahezu alle Rechte – die richtige Wahl für dich als Betreiber |
| `superadmin` | Uneingeschränkte Rechte, fest in tShock eingebaut |

Eigene Gruppen und Rechte verwaltest du mit folgenden Befehlen:

| Befehl | Beschreibung |
|--------|-------------|
| `group list` | Alle Gruppen anzeigen |
| `group listperm <Gruppe>` | Rechte einer Gruppe anzeigen |
| `group add <Name> [Rechte]` | Neue Gruppe anlegen |
| `group del <Name>` | Gruppe löschen |
| `group addperm <Gruppe> <Recht...>` | Rechte hinzufügen |
| `group delperm <Gruppe> <Recht...>` | Rechte entziehen |
| `group parent <Gruppe> <Elterngruppe>` | Rechte einer anderen Gruppe erben |
| `group prefix <Gruppe> <Text>` | Chat-Präfix festlegen |
| `group color <Gruppe> <R,G,B>` | Chat-Farbe festlegen |

:::: warning Achtung
Vergib die Gruppe `owner` nur an Personen, denen du vollständig vertraust. Für Moderatoren reichen in der Regel `newadmin` oder `admin`.
::::

:::: tip Tipp
Wie du Spieler als Admin vom Server entfernst, erfährst du unter [Spieler kicken & bannen](spieler-kicken-bannen.md).
::::
