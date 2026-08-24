---
description: "Remote Admin auf einem SCP: Secret Laboratory Server nutzen"
---

# So nutzt du Remote Admin auf deinem SCP: Secret Laboratory Server

Remote Admin ist das eingebaute Admin-System von SCP: Secret Laboratory. Damit moderierst du deinen Server direkt im Spiel — über ein grafisches Panel oder per Textbefehl. Viele Befehle lassen sich außerdem ohne laufendes Spiel über die Konsole der Verwaltung absetzen.

## Voraussetzung: Rang mit Remote-Admin-Rechten

Um Remote Admin im Spiel zu nutzen, brauchst du einen Rang wie `owner`, `admin` oder `moderator`. Ränge vergibst du über die Datei `/.config/SCP Secret Laboratory/config/<Port>/config_remoteadmin.txt` — ersetze `<Port>` durch den Game Port deines Servers aus der **Übersicht** der Verwaltung. Wie das geht, zeigt dir die Anleitung [Ränge vergeben](raenge-vergeben.md).

:::: info Hinweis
Welche Funktionen und Befehle ein Spieler nutzen darf, hängt von den Berechtigungen seines Rangs in der `config_remoteadmin.txt` ab. Mit dem Befehl `perm` siehst du im Spiel deine eigenen Berechtigungen.
::::

## Remote-Admin-Panel im Spiel öffnen

1. <b>Server beitreten</b><br>
   Verbinde dich mit deinem Server — siehe [Server beitreten](server-beitreten.md).

2. <b>Panel öffnen</b><br>
   Drücke die **M**-Taste (Standardbelegung). Das Remote-Admin-Panel öffnet sich.

3. <b>Spieler auswählen</b><br>
   In der linken Spalte **Players** siehst du alle verbundenen Spieler samt ihrer Spieler-ID. Wähle einen oder mehrere Spieler aus und nutze anschließend die Funktionen der einzelnen Tabs.

Die wichtigsten Bereiche des Panels:

| Bereich | Funktion |
|---------|----------|
| Request Data | Name, Spieler-ID, SteamID64, Rolle und HP eines Spielers abfragen |
| Role Management | Spielern eine Klasse zuweisen (**SET CLASS**), z.B. um einen Spieler als Tutorial zu spawnen |
| Inventory | Spielern Items geben |
| Moderation | Spieler muten/entmuten, Intercom sperren |
| Administration | Overwatch, God Mode, Bypass, Teleport (**Bring**/**Go to**), Heilen, Noclip |
| Round & Events | Runde starten/neu starten, MTF/Chaos respawnen, Alpha-Sprengkopf starten/stoppen/zünden |
| Map Control | Türen öffnen, schließen, ver- und entriegeln |

Am unteren Rand des Panels öffnest du die **textbasierte Remote-Admin-Konsole**. Dort gibst du die Befehle aus der folgenden Tabelle ein.

## Die wichtigsten Befehle

Spieler sprichst du in Befehlen über ihre Spieler-ID aus der Spielerliste an. Mehrere IDs trennst du mit Punkten, z.B. `forceclass 2.5 1`.

| Befehl | Beschreibung |
|--------|--------------|
| `roundrestart` | Startet die laufende Runde sofort neu |
| `restartnextround` | Startet den Server neu, sobald die aktuelle Runde endet |
| `roundlock` | Sperrt/entsperrt das Rundenende — die Runde kann nicht enden |
| `lobbylock` | Sperrt/entsperrt die Lobby — die nächste Runde startet nicht |
| `forcestart` | Erzwingt den Rundenstart aus der Lobby |
| `forceclass <SpielerID> <Rolle>` | Weist einem Spieler eine Rolle zu — per Rollen-ID oder Name (z.B. `1` = Class-D, `2` = Spectator, `14` = Tutorial) |
| `bc <Sekunden> <Text>` | Broadcast: zeigt allen Spielern eine Nachricht am oberen Bildschirmrand |
| `cassie <Text>` | Durchsage über das C.A.S.S.I.E.-Sprachsystem; `cassiewords` listet alle verfügbaren Wörter |
| `warhead detonate` | Startet die Detonationssequenz des Alpha-Sprengkopfs |
| `warhead cancel` | Bricht die Detonationssequenz ab |
| `warhead instant` | Zündet den Alpha-Sprengkopf sofort |
| `decontamination force` | Startet die Dekontamination der Light Containment Zone sofort |
| `noclip <SpielerID>` | Erlaubt einem Spieler Noclip; der Spieler schaltet es anschließend selbst mit seiner Noclip-Taste um |
| `cleanup items` | Entfernt alle herumliegenden Items von der Karte |
| `cleanup ragdolls` | Entfernt alle Leichen von der Karte |

:::: tip Tipp
Mit `help` zeigst du alle verfügbaren Befehle an, mit `help <Befehl>` die Details zu einem einzelnen Befehl. Das ist immer die verlässlichste Referenz, denn die Befehlsliste kann sich mit Spiel-Updates ändern.
::::

:::: warning Achtung
`roundrestart` und `warhead instant` wirken sofort und ohne Vorwarnung für die Spieler. Kündige solche Aktionen am besten vorher mit `bc` an.
::::

## Befehle ohne Spiel: die Konsole der Verwaltung

Die Konsole in der Verwaltung ist die LocalAdmin-Konsole des Servers. Sie hat volle Rechte — du brauchst dafür keinen Rang im Spiel.

1. <b>Konsole öffnen</b><br>
   Öffne die Verwaltung deines Servers und wechsle zur Konsole.

2. <b>Server-Befehle direkt eingeben</b><br>
   Befehle wie `roundrestart`, `forcestart`, `restartnextround` oder `players` (Spielerliste mit IDs) gibst du direkt ein.

3. <b>Remote-Admin-Befehle mit Schrägstrich eingeben</b><br>
   Alle Remote-Admin-Befehle aus der Tabelle oben funktionieren mit einem vorangestellten `/`, z.B. `/bc 10 Server startet gleich neu` oder `/forceclass 2 1`.

Du hast damit drei Wege, deinen Server zu steuern: das grafische Remote-Admin-Panel im Spiel, die textbasierte Remote-Admin-Konsole im Panel und die LocalAdmin-Konsole in der Verwaltung.

## Spieler kicken und bannen

Auch Kicks und Bans laufen über Remote Admin — sowohl über das Panel als auch per Befehl. Alle Details dazu findest du in der Anleitung [Spieler kicken & bannen](spieler-kicken-und-bannen.md).
