---
description: Domain mit einem FiveM Server verknüpfen
---

# So verknüpfst du deine Domain mit einem FiveM Server

Du kannst deinen FiveM Server über eine eigene Domain erreichbar machen, sodass Spieler sich z.B. über `play.deinedomain.de` oder `deinedomain.de` verbinden können — statt über eine IP-Adresse.

## Voraussetzungen

- Eine Domain bei EmeraldHost
- Die IP-Adresse und den Port deines FiveM Servers (findest du in der **Verwaltung** deines Servers)

## Mit Subdomain verbinden (z.B. play.deinedomain.de)

1. <b>DNS-Einstellungen öffnen</b><br>
   Öffne die Verwaltung deiner Domain und klicke auf **DNS Einstellungen**.

2. <b>A-Eintrag erstellen</b><br>
   Erstelle einen neuen Eintrag mit Typ **A**:

   | Feld | Wert |
   |------|------|
   | Typ | `A` |
   | Name | `play` |
   | Ziel | Die IP-Adresse deines Servers |

3. <b>SRV-Eintrag erstellen</b><br>
   Erstelle einen neuen Eintrag mit Typ **SRV**, damit FiveM den richtigen Port findet:

   **Name:**

   | Feld | Wert |
   |------|------|
   | Service Name | `_cfx` |
   | Protokoll | `UDP` |
   | Name | `play` |

   **Ziel:**

   | Feld | Wert |
   |------|------|
   | Priorität | `0` |
   | Gewicht | `5` |
   | Port | Der Port deines Servers |
   | Ziel | `play.deinedomain.de` |

4. <b>Verbindung testen</b><br>
   Warte einige Minuten, bis die DNS-Änderungen aktiv sind, und verbinde dich im Spiel mit `play.deinedomain.de`.

## Ohne Subdomain verbinden (z.B. deinedomain.de)

1. <b>DNS-Einstellungen öffnen</b><br>
   Öffne die Verwaltung deiner Domain und klicke auf **DNS Einstellungen**.

2. <b>A-Eintrag erstellen</b><br>
   Erstelle einen neuen Eintrag mit Typ **A**:

   | Feld | Wert |
   |------|------|
   | Typ | `A` |
   | Name | `@` |
   | Ziel | Die IP-Adresse deines Servers |

3. <b>SRV-Eintrag erstellen</b><br>
   Erstelle einen neuen Eintrag mit Typ **SRV**:

   **Name:**

   | Feld | Wert |
   |------|------|
   | Service Name | `_cfx` |
   | Protokoll | `UDP` |
   | Name | leer lassen |

   **Ziel:**

   | Feld | Wert |
   |------|------|
   | Priorität | `0` |
   | Gewicht | `5` |
   | Port | Der Port deines Servers |
   | Ziel | `deinedomain.de` |

4. <b>Verbindung testen</b><br>
   Warte einige Minuten, bis die DNS-Änderungen aktiv sind, und verbinde dich im Spiel mit `deinedomain.de`.

:::: info Hinweis
DNS-Änderungen können bis zu 24 Stunden dauern, bis sie weltweit aktiv sind. In der Regel sind sie aber innerhalb weniger Minuten verfügbar.
::::

:::: tip Tipp
Falls dein Server den Standard-Port `30120` verwendet, reicht der A-Eintrag allein aus. Der SRV-Eintrag wird nur benötigt, wenn dein Server einen anderen Port verwendet.
::::
