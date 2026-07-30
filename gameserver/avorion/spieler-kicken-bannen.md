---
description: Spieler auf einem Avorion Server kicken und bannen
---

# So kickst und bannst du Spieler auf deinem Avorion Server

Spieler entfernst du in Avorion über Befehle. Diese kannst du entweder in der **Konsole** deiner Verwaltung eingeben oder im Spiel im Chat – dort mit vorangestelltem `/`.

:::: info Hinweis
Um die Befehle im Spiel nutzen zu können, benötigst du Adminrechte. Siehe [Admin hinzufügen](admin-hinzufuegen.md).
::::

## Spieler kicken

```
/kick <Spielername>
```

Der Spieler wird vom Server getrennt, kann aber sofort wieder beitreten. Ein Kick eignet sich als Verwarnung oder um einen hängenden Spieler zu trennen.

## Spieler bannen

```
/ban <Spielername>
```

Der Spieler wird auf die Blacklist gesetzt und kommt nicht mehr auf deinen Server, bis du den Bann aufhebst.

## Bann aufheben

```
/unban <Spielername>
```

## IP bannen

```
/banip <Spieler-IP>
```

Aufheben lässt sich ein IP-Bann mit:

```
/unbanip <Spieler-IP>
```

:::: warning Achtung
Ein IP-Bann trifft alle Spieler hinter derselben IP-Adresse – zum Beispiel mehrere Personen aus einem Haushalt. Viele Internetanschlüsse bekommen zudem regelmäßig eine neue IP-Adresse, wodurch der Bann ins Leere läuft. Nutze im Regelfall `/ban`.
::::

## Befehle im Überblick

| Befehl | Beschreibung |
|--------|-------------|
| `/kick <Spielername>` | Spieler vom Server trennen |
| `/ban <Spielername>` | Spieler auf die Blacklist setzen |
| `/unban <Spielername>` | Bann aufheben |
| `/banip <Spieler-IP>` | IP-Adresse bannen |
| `/unbanip <Spieler-IP>` | IP-Bann aufheben |
| `/blacklist` | Optionen der Blacklist anzeigen |
| `/whitelist` | Optionen der Whitelist anzeigen |
| `/player` | Anzahl der verbundenen Spieler anzeigen |
| `/status` | Informationen zum aktuellen Status des Servers anzeigen |
| `/w <Spielername>` | Private Nachricht an einen Spieler senden |
| `/save` | Aktuellen Stand speichern |
| `/stop` | Server herunterfahren |
| `/help` | Alle verfügbaren Befehle anzeigen |

:::: tip Tipp
Der Spielername muss exakt stimmen – inklusive Groß- und Kleinschreibung. Kopiere ihn am besten aus der Konsole deiner Verwaltung, dort taucht er beim Verbinden des Spielers auf.
::::

:::: info Hinweis
Kickst oder bannst du über die Konsole der Verwaltung, lässt du das `/` weg oder gibst es mit ein – beides funktioniert. Im Spielchat ist das `/` zwingend, sonst wird deine Eingabe als normale Chatnachricht gesendet.
::::

:::: warning Achtung
Speichere vor einem geplanten Serverstopp mit `/save`, bevor du `/stop` ausführst oder den Server über die Verwaltung stoppst – so geht kein Fortschritt verloren.
::::
