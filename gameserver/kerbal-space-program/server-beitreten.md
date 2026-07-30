---
description: Einem Kerbal Space Program Server beitreten
---

# So trittst du deinem Kerbal Space Program Server bei

Kerbal Space Program besitzt **keinen eingebauten Mehrspieler-Modus**. Dein Server nutzt dafür die Community-Modifikation **DarkMultiPlayer (DMP)**. Jeder Spieler muss den passenden DMP-Client in seiner KSP-Installation haben – ohne die Mod gibt es im Spiel keine Möglichkeit, einem Server beizutreten.

## Verbindungsdaten finden

:::: danger Wichtig
Für die Verbindung benötigst du die **IP-Adresse** und den **Game Port** deines Servers. Beides findest du in der **Verwaltung** deines Servers. Einen Query Port gibt es bei DarkMultiPlayer nicht – der Server nutzt genau einen Port.
::::

## DMP-Client installieren

1. <b>Client herunterladen</b><br>
   Öffne [d-mp.org/downloads](https://d-mp.org/downloads) und lade die Datei **DMPClient.zip** herunter.

2. <b>KSP-Ordner öffnen</b><br>
   Öffne den Installationsordner von Kerbal Space Program. Bei Steam erreichst du ihn über einen Rechtsklick auf das Spiel in deiner Bibliothek und **Verwalten** → **Lokale Dateien durchsuchen**.

3. <b>Mod entpacken</b><br>
   Entpacke das Archiv und kopiere aus `DMPClient/GameData/` den Ordner `DarkMultiPlayer` in den Ordner `GameData` deiner KSP-Installation. Danach sieht der Pfad so aus:

   ```
   [KSP-Ordner]/GameData/DarkMultiPlayer/
   ```

4. <b>Spiel starten</b><br>
   Starte Kerbal Space Program. Im **Hauptmenü** erscheint jetzt das Fenster **DarkMultiPlayer** mit der installierten Version.

:::: warning Achtung
Client und Server müssen dieselbe DMP-Version verwenden. Passt sie nicht zusammen, lehnt der Server die Verbindung mit der Meldung **Protocol mismatch** ab. Lade den Client deshalb immer erneut von d-mp.org herunter, wenn dein Server aktualisiert wurde.
::::

:::: info Hinweis
Die aktuelle DMP-Version ist ausschließlich für **KSP 1.12.x** gebaut. Auf jeder anderen Spielversion schaltet sich die Mod selbst ab – im Hauptmenü erscheint dann kein DMP-Fenster, sondern eine Kompatibilitätswarnung von Kerbal Space Program.
::::

## Server eintragen und beitreten

1. <b>Spielernamen festlegen</b><br>
   Trage im DMP-Fenster im Feld **Player name** deinen Namen ein. Er darf maximal 32 Zeichen lang sein.

   :::: info Hinweis
   Die Zeichen `< > : " / \ | ? * $` sind im Spielernamen nicht erlaubt. Reserviert sind außerdem die Namen `Initial`, `Shared` sowie der Konsolenname des Servers (standardmäßig `Server`).
   ::::

2. <b>Server hinzufügen</b><br>
   Klicke auf **Add**. Es erscheinen drei Eingabefelder:

   | Feld | Eintrag |
   |------|---------|
   | **Name** | Ein frei wählbarer Anzeigename für deinen Server |
   | **Address** | Die IP-Adresse deines Servers aus der Verwaltung |
   | **Port** | Der Game Port deines Servers aus der Verwaltung |

   :::: warning Achtung
   Die Felder sind mit Standardwerten vorbelegt (`127.0.0.1` und ein Standard-Port). Ersetze beide Werte durch die Daten aus deiner Verwaltung.
   ::::

3. <b>Eintrag speichern</b><br>
   Klicke auf **Add server**. Dein Server erscheint danach in der Serverliste des Clients.

4. <b>Verbinden</b><br>
   Markiere den Eintrag in der Liste und klicke auf **Connect**. Der Eintrag bleibt gespeichert – beim nächsten Mal genügt Markieren und **Connect**.

## Server erscheint nicht in der öffentlichen Liste

Über die Schaltfläche **Servers** zeigt der DMP-Client eine öffentliche Serverliste an. Diese Liste stammt von zentralen Master-Servern, an die sich ein Server aktiv melden muss. Dein Server ist dort standardmäßig **nicht** eingetragen.

:::: info Hinweis
Trage deinen Server deshalb wie oben beschrieben manuell mit IP-Adresse und Game Port ein. Das ist der vorgesehene Weg und funktioniert unabhängig von der öffentlichen Liste.
::::

## Spielername und Schlüssel

Beim ersten Beitritt legt der Server eine Datei mit deinem öffentlichen Schlüssel an:

```
/Universe/Players/<Spielername>.txt
```

Ab diesem Moment ist der Spielername fest mit deinem Schlüsselpaar verbunden. Niemand anderes kann den Namen dann noch verwenden. Deine Schlüssel liegen lokal unter:

```
[KSP-Ordner]/GameData/DarkMultiPlayer/Plugins/Data/publickey.txt
[KSP-Ordner]/GameData/DarkMultiPlayer/Plugins/Data/privatekey.txt
```

:::: tip Tipp
Wechselst du den PC oder installierst du KSP neu, kopiere beide Schlüsseldateien mit – sonst kannst du deinen bisherigen Spielernamen nicht mehr nutzen. Die Mod legt zusätzlich eine Sicherung unter `saves/DarkMultiPlayer/` ab. Sind die Schlüssel verloren, kann ein Admin die Datei `/Universe/Players/<Spielername>.txt` auf dem Server löschen – der Name ist danach wieder frei.
::::

## Verbindung wird abgelehnt

| Meldung | Ursache |
|---------|---------|
| `Protocol mismatch` | Client und Server nutzen unterschiedliche DMP-Versionen |
| `Invalid username` | Der Spielername ist leer oder enthält nicht erlaubte Zeichen |
| `Kicked for using a reserved name` | Der Name ist reserviert (`Initial`, `Shared` oder der Konsolenname des Servers) |
| `Client already connected` | Ein Spieler mit diesem Namen ist bereits verbunden |
| `Public/private key mismatch` bzw. `Invalid key for user` | Der Spielername gehört auf diesem Server zu einem anderen Schlüsselpaar |
| `You were banned from the server!` | Du bist gebannt, siehe [Spieler kicken & bannen](spieler-kicken-bannen.md) |
| `Server is full` | Die maximale Spielerzahl des Servers ist erreicht |

:::: info Welche Ports nutzt DarkMultiPlayer?
Ein DMP-Server belegt genau einen Port: den **Game Port** über TCP. Darüber laufen der Verbindungsaufbau und sämtliche Spieldaten. Einen separaten Query Port gibt es nicht. Welcher Game Port für deinen Server gilt, siehst du in der **Verwaltung**.
::::

:::: tip Tipp
Nutzt dein Server Mods, brauchen alle Spieler dieselben Mods lokal in ihrem `GameData`-Ordner. Wie das eingerichtet wird, steht unter [Mods hinzufügen](mods-hinzufuegen.md).
::::
