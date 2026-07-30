---
description: Einem Terraria tShock Server beitreten
---

# So trittst du deinem Terraria tShock Server bei

tShock läuft ausschließlich auf der Serverseite. Du verbindest dich deshalb mit dem ganz normalen Terraria-Client, genau wie bei einem gewöhnlichen Terraria-Server: Einen Ingame-Serverbrowser für dedizierte Server gibt es nicht, du verbindest dich direkt über die IP-Adresse und den Port deines Servers.

## Verbindungsdaten finden

:::: danger Wichtig
Für die Verbindung benötigst du die **IP-Adresse** und den **Game Port** deines Servers. Beides findest du in der **Verwaltung** deines Servers. tShock nutzt nur einen einzigen Port über **TCP** – einen Query Port gibt es nicht.
::::

## Über Join via IP

1. <b>Terraria starten</b><br>
   Starte Terraria auf deinem PC.

2. <b>Multiplayer öffnen</b><br>
   Wähle im Hauptmenü **Multiplayer**.

3. <b>Join via IP wählen</b><br>
   Klicke auf **Join via IP**.

4. <b>Charakter auswählen</b><br>
   Wähle den Charakter aus, mit dem du auf dem Server spielen möchtest.

5. <b>IP-Adresse eingeben</b><br>
   Gib die IP-Adresse deines Servers ein – **ohne** Port:

   :::: tip Beispiel
   ```
   123.45.67.89
   ```
   ::::

6. <b>Port eingeben</b><br>
   Im nächsten Feld trägst du den **Game Port** ein, den dir die Verwaltung deines Servers anzeigt.

7. <b>Verbinden</b><br>
   Bestätige die Eingabe, um dem Server beizutreten. Ist auf dem Server ein Passwort gesetzt, wirst du danach zur Eingabe aufgefordert.

:::: info Hinweis
Die Optionen **Join** und **Join via Steam** im Multiplayer-Menü sind für Spiele gedacht, die ein Freund direkt aus dem Spiel heraus hostet. Für deinen dedizierten Server benötigst du immer **Join via IP**.
::::

## Anmelden auf dem Server

Ein tShock-Server verlangt standardmäßig **keine Anmeldung** – du kommst also ohne Account auf den Server und spielst wie auf einem normalen Terraria-Server.

Hast du dir einen Account angelegt, meldest du dich im Ingame-Chat an:

```
/login <Benutzername> <Passwort>
```

:::: tip Tipp
Wie du dir einen Account mit Adminrechten anlegst, erfährst du unter [Admin hinzufügen](admin-hinzufuegen.md).
::::

## Serverpasswort

:::: info Hinweis
Das Serverpasswort eines tShock-Servers steht nicht in der Verwaltung, sondern im Wert `ServerPassword` in der Datei `/tshock/config.json`. Ist dort nichts eingetragen, kann jeder ohne Passwort beitreten. Nach einer Änderung genügt der Befehl `reload` in der Serverkonsole – ein Neustart ist nicht nötig.
::::

## Häufige Ursachen für einen fehlgeschlagenen Beitritt

:::: warning Achtung
Client und Server müssen **dieselbe Terraria-Version** verwenden. Jede tShock-Version ist für eine ganz bestimmte Terraria-Version gebaut; passt deine Spielversion nicht dazu, lehnt der Server die Verbindung mit einem Versionshinweis ab. Welche tShock-Version installiert wird, steuerst du in der Verwaltung über das Feld **tShock Version**.
::::

:::: danger Wichtig
Ein tShock-Server wird mit dem **normalen Terraria-Client** betreten – nicht mit dem tModLoader-Client. Umgekehrt kannst du mit dem normalen Client keinem tModLoader-Server beitreten. Für einen tModLoader-Server brauchst du den passenden Servertyp: [Terraria tModLoader Server beitreten](../terraria-tmodloader/server-beitreten.md).
::::
