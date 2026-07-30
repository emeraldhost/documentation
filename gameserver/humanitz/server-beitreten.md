---
description: Einem HumanitZ Server beitreten
---

# So trittst du deinem HumanitZ Server bei

In HumanitZ verbindest du dich immer über den **Game Port** deines Servers. Du kannst deinen Server entweder im Serverbrowser des Spiels suchen oder dich direkt über die IP-Adresse verbinden.

## Verbindungsdaten finden

:::: danger Wichtig
Die IP-Adresse und die Ports deines Servers findest du in der **Verwaltung**. Zum Verbinden verwendest du den **Game Port** – nicht den Query Port. Der Query Port dient ausschließlich der Serverabfrage und funktioniert im Spiel nicht.
::::

## Direkt über die IP verbinden

Die Direktverbindung ist der zuverlässigste Weg auf deinen Server.

1. <b>HumanitZ starten</b><br>
   Starte HumanitZ und warte, bis das Hauptmenü geladen ist.

2. <b>Multiplayer öffnen</b><br>
   Wähle im Hauptmenü **Play** und anschließend **Multiplayer**.

3. <b>Charakter wählen</b><br>
   Wähle einen vorhandenen Charakter aus oder lege einen neuen an. Beim Anlegen entscheidest du dich für eine **Profession** und eine **Affliction**.

4. <b>Serversuche öffnen</b><br>
   Bestätige deine Auswahl mit **Find Server**. Du landest in der Serverübersicht.

5. <b>IP-Adresse und Port eintragen</b><br>
   Trage unten rechts in die Felder für die Direktverbindung die IP-Adresse und den Game Port deines Servers ein.

   :::: tip Beispiel
   ```
   IP:   123.45.67.89
   Port: <Game Port aus der Verwaltung>
   ```
   ::::

6. <b>Passwort eintragen</b><br>
   Ist für deinen Server ein Passwort gesetzt, trägst du es in das dafür vorgesehene Feld ein. Andernfalls lässt du das Feld leer.

7. <b>Verbinden</b><br>
   Klicke auf **IP Connect**. Der Server wird geladen und du startest in der Welt.

## Über den Serverbrowser

Alternativ suchst du deinen Server in der Liste:

1. <b>Serverliste öffnen</b><br>
   Öffne wie oben beschrieben **Play → Multiplayer → Find Server**.

2. <b>Server suchen</b><br>
   Suche in der Liste nach dem Namen deines Servers.

3. <b>Beitreten</b><br>
   Wähle deinen Server aus und bestätige. Bei einem passwortgeschützten Server wirst du nach dem Passwort gefragt.

## Server wird nicht angezeigt

Taucht dein Server nicht in der Liste auf, hilft in den meisten Fällen die Direktverbindung über **IP Connect**. Zusätzlich entscheidet eine Einstellung in der Konfigurationsdatei `GameServerSettings.ini` darüber, ob dein Server öffentlich gefunden wird:

:::: warning SearchID nicht verändern
Im Abschnitt `[Host Settings]` steht der Wert:

```ini
SearchID="HumanitZ_Dedicated"
```

Dieser Wert muss unverändert bleiben. Trägst du hier etwas anderes ein, erscheint dein Server **nicht** in der Standard-Serverliste – er ist dann nur noch findbar, wenn Spieler gezielt nach genau dieser SearchID suchen.
::::

:::: tip Kein Ping im Serverbrowser
Der Ping deines Servers wird in der Serverliste nur angezeigt, wenn RCON aktiviert ist. Setze dafür im Abschnitt `[Host Settings]`:

```ini
RCONEnabled=true
```

Wie du RCON vollständig einrichtest, steht unter [Spieler kicken & bannen](spieler-kicken-bannen.md).
::::

## Welche Ports nutzt HumanitZ?

:::: info Hinweis
Ein HumanitZ Server belegt drei Ports. Welche Werte für deinen Server gelten, siehst du in der **Verwaltung**:

| Port | Protokoll | Verwendung |
|------|-----------|------------|
| Game Port | UDP | Spieldaten – hierüber verbinden sich Spieler |
| Query Port | UDP | Serverabfrage für die Serverliste |
| RCON-Port | TCP | Fernsteuerung des Servers, z.B. zum Kicken und Bannen |
::::

:::: tip Tipp
Damit du auf deinem Server Adminrechte erhältst, folge der Anleitung [Admin hinzufügen](admin-hinzufuegen.md).
::::
