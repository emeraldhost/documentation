---
description: Spieler auf einem Myth of Empires Server kicken und bannen
---

# So kickst und bannst du Spieler auf deinem Myth of Empires Server

Spieler entfernst du auf deinem Myth of Empires Server über Adminbefehle. Alle Befehle arbeiten mit der **SteamID64** des Spielers – eine 17-stellige Zahl, die mit `7656` beginnt.

:::: info Hinweis
Du benötigst Adminrechte, um diese Befehle nutzen zu können. Siehe [Admin hinzufügen](admin-hinzufuegen.md).
::::

:::: tip Tipp
Hier findest du eine Anleitung, wie du eine [SteamID64](../steamid64-herausfinden.md) herausfindest.
::::

:::: warning Achtung
Für Myth of Empires gibt es **keine offizielle Befehlsübersicht** des Entwicklers. Die Kick- und Ban-Befehle in dieser Anleitung stammen aus der Serveradministrations-Community. Je nach Serverversion kann es deshalb sein, dass ein Befehl bei dir nicht wie beschrieben funktioniert.
::::

## Spieler kicken

1. <b>Konsole öffnen</b><br>
   Drücke im Spiel die Taste `~` beziehungsweise `` ` ``, um die Konsole zu öffnen.

2. <b>Befehl eingeben</b><br>
   Gib den Befehl zusammen mit der SteamID64 des Spielers ein:

   ```
   cheat KickOff 76561198012345678
   ```

3. <b>Bestätigen</b><br>
   Bestätige die Eingabe. Der Spieler wird sofort vom Server getrennt, ein Serverneustart ist nicht nötig.

Ein gekickter Spieler kann jederzeit wieder beitreten. Möchtest du ihn dauerhaft aussperren, musst du ihn bannen.

## Spieler bannen

Zum Bannen gibt es **keinen Konsolenbefehl im Spiel**. Bans setzt du über RCON ab:

```
PrivateServerAddBlockList <SteamID64>
```

Der Spieler kann sich danach nicht mehr auf deinem Server einloggen.

## Bann aufheben

```
PrivateServerRemoveBlockList <SteamID64>
```

:::: warning Achtung
Die beiden Ban-Befehle sind **nicht Teil der offiziellen Dokumentation** von Myth of Empires. Sie stammen aus der Serveradministrations-Community und werden dort produktiv eingesetzt. Je nach Serverversion kann es deshalb sein, dass sie bei dir nicht wie beschrieben funktionieren.
::::

## RCON nutzen

RCON ist eine Fernwartungsverbindung zu deinem Server, über die du Befehle absetzen kannst, ohne im Spiel zu sein. Myth of Empires nutzt dafür das Source-RCON-Protokoll – du kannst also gängige RCON-Programme verwenden.

1. <b>Zugangsdaten klären</b><br>
   RCON muss auf deinem Server aktiviert sein. Ob das der Fall ist und welcher Port sowie welcher Schlüssel gelten, siehst du in der **Verwaltung**. Findest du dort nichts, frag kurz per Support-Ticket nach.

2. <b>Verbinden</b><br>
   Verbinde dich mit deinem RCON-Programm über die Adresse deines Servers, den RCON-Port und den Schlüssel.

3. <b>Befehl absetzen</b><br>
   Gib den gewünschten Befehl ein. RCON-Befehle werden **ohne** das vorangestellte `cheat` geschrieben.

:::: danger Wichtig
Der RCON-Schlüssel ist ein vollwertiges Serverpasswort. Ist noch ein einfacher Standardwert hinterlegt, ändere ihn unbedingt in einen eigenen, sicheren Schlüssel.
::::

## Befehle im Überblick

| Befehl | Wo | Beschreibung |
|--------|-----|-------------|
| `cheat KickOff <SteamID64>` | Konsole im Spiel | Spieler vom Server trennen |
| `KickOff <SteamID64>` | RCON | Spieler vom Server trennen |
| `PrivateServerAddBlockList <SteamID64>` | RCON | Spieler aussperren |
| `PrivateServerRemoveBlockList <SteamID64>` | RCON | Bann aufheben |
| `BroadcastNotifySysInfo "<Text>" 5 1` | RCON | Ansage an alle Spieler senden |
| `SaveWorld` | RCON | Welt sofort speichern |
| `ShutDownServer` | RCON | Server sauber herunterfahren |

:::: info Keine Ban-Datei
Myth of Empires legt keine Ban-Liste als Datei auf dem Server ab, die du per SFTP bearbeiten könntest. Banns verwaltest du ausschließlich über die oben genannten Befehle.
::::

:::: info Keine zeitlich begrenzten Banns
Ein Bann gilt so lange, bis du ihn wieder aufhebst. Eine Angabe einer Bann-Dauer ist nicht vorgesehen.
::::

:::: tip Tipp
Zusätzlich lässt sich dein Server so einstellen, dass er VAC-gebannte Spieler automatisch aussperrt. Ob deine Verwaltung dafür eine Option anbietet, siehst du unter **Einstellungen** – der zugehörige Startparameter lautet `-EnableVACBan=1`.
::::
