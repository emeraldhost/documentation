---
description: EOS NotReady Fehler auf einem V Rising Server beheben
---

# So behebst du den "EOS session is in the NotReady state"-Fehler

In den Logs deines V Rising Servers kann folgender Eintrag auftauchen:

```
EOS session is in the NotReady state. Waiting to modify until it's in the Joined state!
```

## Was bedeutet das?

Dein V Rising Server wartet darauf, dass die Verbindung zu den **Epic Online Services (EOS)** hergestellt ist. Solange die EOS-Session im Status `NotReady` steht, kann der Server keine Änderungen an der Sitzung vornehmen – z.B. den Server im Public Listing eintragen oder Spieler beitreten lassen.

In der Regel ist das nur eine Momentaufnahme während des Serverstarts. Bleibt der Fehler aber dauerhaft bestehen, erscheint dein Server auch nicht in der öffentlichen Serverliste.

## Mögliche Ursachen und Lösungen

### 1. EOS-Listing nicht aktiviert

Prüfe in der [Serverliste-Konfiguration](serverliste-aktivieren.md), ob sowohl **Steam Serverliste** als auch **Epic Games Serverliste** auf `true` gesetzt sind. Beide Optionen sind nötig, damit der Server korrekt registriert wird.

### 2. Server noch nicht vollständig gestartet

EOS braucht nach dem Start einige Sekunden bis Minuten, um die Session aufzubauen. Warte nach einem Neustart mindestens 2-3 Minuten, bevor du weitere Maßnahmen ergreifst.

### 3. Firewall oder Netzwerk blockiert EOS

Der Server muss ausgehende Verbindungen zu den Epic Online Services herstellen können. Stelle sicher, dass keine Firewall-Regel diese Verbindungen blockiert. Auf EmeraldHost-Servern ist dies standardmäßig freigegeben.

### 4. Sitzung durch vorherige Verbindung blockiert

Manchmal bleibt eine alte Session bei Epic hängen. Ein sauberer Neustart löst das meist:

1. <b>Server vollständig stoppen</b><br>
   Stoppe deinen Server in der Verwaltung und warte ca. 30 Sekunden.

2. <b>Server neu starten</b><br>
   Starte den Server neu und gib ihm 2-3 Minuten Zeit, die EOS-Session neu aufzubauen.

### 5. EOS-Dienste haben eine Störung

In seltenen Fällen liegt das Problem bei Epic selbst. Prüfe den Status der Epic Online Services unter [status.epicgames.com](https://status.epicgames.com).

:::: tip Tipp
Wenn der Fehler nach Neustart und Prüfung der Serverliste-Einstellungen bestehen bleibt, erstelle ein [Support-Ticket](https://emeraldhost.de/de/support). Wir prüfen dann die Server-Logs im Detail.
::::
