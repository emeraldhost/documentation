---
description: Spieler auf einem Craftopia Server kicken und bannen
---

# So kickst und bannst du Spieler auf deinem Craftopia Server

Spieler entfernst du auf einem Craftopia Server über die **Konsole in der Verwaltung**. Chat-Befehle im Spiel gibt es dafür nicht.

:::: info Kein Adminkonzept im Spiel
Craftopia kennt **keine Adminrechte für Spieler**: Es gibt keine Admin-Datei, keine Admin-Liste und keinen Befehl, mit dem du einem Spieler im Spiel Rechte gibst. Die gesamte Verwaltung läuft deshalb über die Konsole deines Servers – und damit über jeden, der Zugriff auf die Verwaltung hat.
::::

## Konsole öffnen

1. <b>Verwaltung öffnen</b><br>
   Melde dich in der Verwaltung deines Servers an.

2. <b>Konsole aufrufen</b><br>
   Wechsle zur **Konsole**. Dort siehst du die Ausgaben deines Servers und kannst Befehle eingeben.

3. <b>Server muss laufen</b><br>
   Befehle werden nur von einem laufenden Server angenommen. Ist dein Server gestoppt, starte ihn zuerst.

## Spieler auflisten

Bevor du jemanden kicken oder bannen kannst, brauchst du seine **UserID**. Diese liefert dir folgender Befehl:

```
list
```

Der Befehl gibt die Spieler mit ihrer UserID aus der Multiplayer-Liste aus.

:::: warning Achtung
Führe `list` immer direkt vor einem `kick` oder `ban` aus und übernimm die UserID genau so, wie sie in der Konsole steht.
::::

## Spieler kicken

```
kick <UserID>
```

Der Spieler wird vom Server getrennt, kann aber jederzeit wieder beitreten.

## Spieler bannen

```
ban <UserID>
```

Der Spieler wird vom Server geworfen und in die Bannliste eingetragen.

:::: warning Banns gelten für die IP-Adresse
In der Bannliste von Craftopia stehen **IP-Adressen**, nicht die Spieleraccounts. Daraus folgt:

- Wechselt der Spieler seine IP-Adresse, kommt er wieder auf den Server.
- Spieler, die sich eine IP-Adresse teilen – etwa im selben Haushalt – werden mitgesperrt.
::::

## Gebannte Spieler anzeigen

```
banlist
```

Zeigt alle gesperrten IP-Adressen an.

## Bann aufheben

```
pardon <IP-Adresse>
```

Nimm die IP-Adresse genau so, wie sie dir `banlist` anzeigt.

:::: tip Wenn ein Befehl nicht angenommen wird
Craftopia befindet sich weiterhin in der Entwicklung, die Schreibweise der Befehle kann sich zwischen Spielversionen ändern. Wird ein Befehl nicht angenommen, prüfe die Ausgabe in der Konsole deines Servers.
::::

## Befehle im Überblick

| Befehl | Beschreibung |
|--------|-------------|
| `list` | Spieler inklusive UserID anzeigen |
| `kick <UserID>` | Spieler vom Server trennen |
| `ban <UserID>` | Spieler aussperren (IP-basiert) |
| `banlist` | Gesperrte IP-Adressen anzeigen |
| `pardon <IP-Adresse>` | Bann aufheben |

## Server nicht über die Konsole beenden

:::: danger Wichtig
Nutze zum Stoppen und Neustarten immer die **Verwaltung**, nicht die Befehle der Serverkonsole. Nur so wird dein Server sauber beendet und anschließend korrekt wieder gestartet.
::::

## Keine Whitelist

:::: warning Achtung
Craftopia hat **keine Whitelist-Funktion**. Möchtest du deinen Server nur bestimmten Spielern zugänglich machen, setze ein Server-Passwort und gib es nur an diese Spieler weiter. Beachte dabei, dass das Passwort in Craftopia eine reine Zahl mit maximal acht Stellen ist.
::::
