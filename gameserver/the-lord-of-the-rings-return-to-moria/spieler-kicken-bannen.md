---
description: Spieler auf einem The Lord of the Rings Return to Moria Server kicken und bannen
---

# So kickst und bannst du Spieler auf deinem The Lord of the Rings Return to Moria Server

Return to Moria hat **kein Admin- oder Rollensystem**: Es gibt keine Adminliste, kein Admin-Passwort und keine Adminbefehle im Spiel. Spieler verwaltest du stattdessen über die Datei `MoriaServerPermissions.txt` im Hauptverzeichnis deines Servers.

:::: info Hinweis
Angegeben wird immer der **Accountname des Spielers**, so wie er auf dem Server angezeigt wird – **keine** SteamID64 und keine Epic-ID.
::::

## Spieler blockieren

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung. Die Datei darf nur bei gestopptem Server bearbeitet werden – im laufenden Betrieb wird sie vom Server überschrieben.

2. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

3. <b>Rechtedatei öffnen</b><br>
   Öffne im Hauptverzeichnis deines Servers folgende Datei:

   ```
   MoriaServerPermissions.txt
   ```

   :::: info Hinweis
   Existiert die Datei noch nicht, starte deinen Server einmal vollständig. Die Konfigurationsdateien werden beim ersten Start angelegt.
   ::::

4. <b>Spieler eintragen</b><br>
   Ergänze für jeden Spieler, den du aussperren möchtest, eine eigene Zeile nach diesem Muster:

   ```
   Durin = Blocked
   ```

   Alle Zeilen, die mit `;` beginnen, sind Kommentare und werden ignoriert.

5. <b>Server starten</b><br>
   Speichere die Datei und starte deinen Server. Der eingetragene Spieler kommt jetzt nicht mehr auf den Server.

:::: tip Tipp
Du kannst Spieler auch **vorab** eintragen, bevor sie überhaupt jemals verbunden waren – der Eintrag greift, sobald jemand mit diesem Accountnamen beitreten will.
::::

## Blockierung aufheben

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>Zeile entfernen</b><br>
   Öffne die Datei `MoriaServerPermissions.txt` und lösche die Zeile des Spielers vollständig.

3. <b>Server starten</b><br>
   Speichere die Datei und starte deinen Server. Der Spieler kann wieder beitreten.

:::: warning Achtung
Die Liste wird vom Server überschrieben, sobald im Spiel jemand blockiert wird. Bearbeite die Datei deshalb ausschließlich bei gestopptem Server – sonst gehen deine Änderungen verloren.
::::

:::: warning Achtung
Änderungen an der Datei greifen erst nach einem Neustart des Servers. Ein bereits verbundener Spieler bleibt bis dahin online.
::::

## Was es bei Return to Moria nicht gibt

:::: info Hinweis
Return to Moria kennt weder **zeitlich begrenzte Banns** noch **Bann-Gründe**, keine Banns über eine Steam- oder Epic-ID und keine Bannliste in der Verwaltung. Eine Blockierung gilt so lange, bis du die Zeile wieder aus der Rechtedatei entfernst.
::::

:::: tip Server auf einen festen Kreis begrenzen
Die Rechtedatei sperrt einzelne Spieler aus. Möchtest du deinen Server umgekehrt nur bestimmten Leuten zugänglich machen, setze in den Servereinstellungen ein Serverpasswort und gib es nur an diese Spieler weiter – siehe [Server beitreten](server-beitreten.md).
::::

## Weitere Rechtestufen

Neben `Blocked` kennt die Rechtedatei Stufen, mit denen du Bau- und Lagerrechte einzelner Spieler einschränkst. Jede Zeile folgt dem Muster `Name = Option,Option`:

| Stufe | Bedeutung |
|-------|-----------|
| `Blocked` | Der Spieler mit diesem Accountnamen kommt nicht auf den Server |
| `Default` | Der Spieler erhält die Standardrechte |
| `NoConstruction` | Der Spieler darf nicht bauen, nicht schnellbauen und nichts abbauen |
| `QuickBuild` | Der Spieler darf nur Plattformen und Strickleitern schnellbauen |
| `AllConstruction` | Der Spieler darf uneingeschränkt bauen und abbauen |
| `NoStorage` | Der Spieler darf keine Lagerbehälter nutzen und nicht aus dem geteilten Basislager craften |
| `AllStorage` | Der Spieler darf alle Lagerbehälter und deren Inhalt nutzen |

Ein Beispiel mit mehreren Einträgen:

```
Default = QuickBuild,NoStorage
Durin = Blocked
Gimli = AllConstruction,AllStorage
Thorin = Default
```

:::: info Hinweis
`Default` ist kein Spielername, sondern legt die Rechte für alle Spieler fest, für die keine eigene Zeile existiert. In der ausgelieferten Datei steht dafür `Default = AllConstruction,AllStorage`.
::::

:::: tip Tipp
Erstelle vor größeren Änderungen an der Rechtedatei ein [Backup](backup-erstellen.md), damit du jederzeit zurück kannst.
::::

## Konsolenbefehle

Der Server bringt eine eigene Serverkonsole mit, über die sich Spieler im laufenden Betrieb verwalten lassen:

| Befehl | Beschreibung |
|--------|-------------|
| `players` | Alle verbundenen Spieler anzeigen |
| `status` | Status des Servers anzeigen |
| `kick <Name>` | Spieler vom Server trennen |
| `block <Name>` | Verbundenen Spieler blockieren |
| `unblock <Name>` | Blockierung aufheben |
| `regenerateinvitecode` | Neuen Invite-Code beim nächsten Start erzeugen |
| `rename world <Name>` | Welt umbenennen |
| `difficulty` | Aktuellen Schwierigkeitsgrad anzeigen |
| `setdifficulty <Preset>` | Alle Schwierigkeitseinstellungen auf ein Preset setzen |
| `setcustomdifficulty` | Eine einzelne Schwierigkeitseinstellung setzen |
| `help` | Liste aller Befehle anzeigen |
| `exit` | Welt speichern und Server beenden |

:::: danger Wichtig
Die Konsole in der Verwaltung zeigt bei Return to Moria ausschließlich die Ausgaben des Servers an – dort erscheint zum Beispiel der Invite-Code. Der Server nimmt über die Verwaltung **keine** Befehle entgegen, weil das Serverprogramm im Hintergrund läuft. Nutze zum Aussperren von Spielern deshalb den Weg über die Datei `MoriaServerPermissions.txt`.
::::

:::: info Hinweis
Ein `kick` trennt einen Spieler nur von der laufenden Session. Er kann derselben Session danach wieder beitreten – dauerhaft ausgesperrt wird nur, wer in der Rechtedatei steht.
::::

## Serverregeln anzeigen

Beim Beitritt kannst du deinen Spielern einen frei formulierten Regeltext anzeigen lassen.

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>Regeldatei bearbeiten</b><br>
   Öffne per [SFTP](../sftp-verbindung-herstellen.md) im Hauptverzeichnis deines Servers folgende Datei und trage deinen Text ein:

   ```
   MoriaServerRules.txt
   ```

3. <b>Server starten</b><br>
   Speichere die Datei und starte deinen Server.

:::: warning Achtung
Der Regeltext darf **maximal 1024 Zeichen** lang sein.
::::
