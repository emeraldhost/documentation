---
description: Die Tickrate eines Garry's Mod Servers ändern
---

# So änderst du die Tickrate deines Garry's Mod Servers

Die **Tickrate** legt fest, wie oft dein Server pro Sekunde die Spielwelt berechnet und aktualisiert – also Bewegungen, Physik und Treffer. Eine Tickrate von 66 bedeutet zum Beispiel 66 Aktualisierungen pro Sekunde. Du stellst sie in den Einstellungen deines Servers ein.

## Welche Tickrate ist sinnvoll?

Laut dem [Garry's Mod Wiki](https://wiki.facepunch.com/gmod/Command_Line_Parameters) liegt der empfohlene Bereich zwischen **30 und 128**, der Standardwert der Engine ist **66.6666**. Auf deinem Server ist standardmäßig eine Tickrate von **22** eingestellt, in den Einstellungen kannst du maximal **100** eintragen.

Der Standardwert von 22 liegt unter dem empfohlenen Bereich – Physik und Trefferabfrage wirken dadurch weniger flüssig. Für die meisten Server ist **33** oder **66** die bessere Wahl. Als Richtwert:

| Tickrate | Geeignet für |
| -------- | ------------ |
| `33` | Server mit vielen Props und Entities (z.B. DarkRP oder Sandbox) |
| `66` | Gamemodes mit schnellen Kämpfen (z.B. TTT) |

:::: warning Achtung
Je höher die Tickrate, desto öfter muss der Server pro Sekunde alles neu berechnen und desto mehr CPU-Last erzeugt jeder Spieler und jedes Entity. Auf Roleplay- und Sandbox-Servern mit vielen Props kann eine hohe Tickrate deshalb zu Lags führen.
::::

## Tickrate einstellen

1. <b>Verwaltung öffnen</b><br>
   Öffne die Verwaltung deines Servers.

2. <b>Einstellungen öffnen</b><br>
   Navigiere zu den **Einstellungen**.

3. <b>Tickrate eintragen</b><br>
   Trage im Feld **Tickrate** den gewünschten Wert ein, z.B. `33`. Der Server startet damit mit dem Parameter:

   ```
   -tickrate 33
   ```

4. <b>Server neu starten</b><br>
   Speichere die Einstellung und starte deinen Server neu.

## Tickrate überprüfen

1. <b>Konsole öffnen</b><br>
   Öffne die Konsole in der Verwaltung deines Servers, während der Server läuft.

2. <b>Befehl eingeben</b><br>
   Gib folgenden Befehl in die Konsole ein:

   ```
   lua_run print(1 / engine.TickInterval())
   ```

   Die Konsole gibt daraufhin die aktuelle Tickrate deines Servers aus. Der Wert kann leicht vom eingetragenen Wert abweichen und Nachkommastellen haben, z.B. `66.666668` statt `66`.
