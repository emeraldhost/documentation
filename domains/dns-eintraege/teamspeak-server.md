---
description: Domain mit einem TeamSpeak Server verknüpfen
---

# So verknüpfst du deine Domain mit einem TeamSpeak Server

Du kannst deinen TeamSpeak Server über eine eigene Domain erreichbar machen, sodass Nutzer sich z.B. über `ts.deinedomain.de` oder `deinedomain.de` verbinden können — statt über eine IP-Adresse.

## Voraussetzungen

- Eine Domain bei EmeraldHost
- Die IP-Adresse und den Port deines TeamSpeak Servers (findest du in der **Verwaltung** deines Servers)

## Mit Subdomain verbinden (z.B. ts.deinedomain.de)

1. <b>DNS-Einstellungen öffnen</b><br>
   Öffne die Verwaltung deiner Domain und klicke auf **DNS Einstellungen**.

2. <b>A-Eintrag erstellen</b><br>
   Erstelle einen neuen Eintrag mit Typ **A**:

   | Feld | Wert |
   |------|------|
   | Typ | `A` |
   | Name | `ts` |
   | Ziel | Die IP-Adresse deines Servers |

3. <b>SRV-Eintrag erstellen</b><br>
   Erstelle einen neuen Eintrag mit Typ **SRV**, damit TeamSpeak den richtigen Port findet:

   **Name:**

   | Feld | Wert |
   |------|------|
   | Service Name | `_ts3` |
   | Protokoll | `UDP` |
   | Name | `ts` |

   **Ziel:**

   | Feld | Wert |
   |------|------|
   | Priorität | `0` |
   | Gewicht | `5` |
   | Port | Der Port deines TeamSpeak Servers |
   | Ziel | `ts.deinedomain.de` |

4. <b>Verbindung testen</b><br>
   Warte einige Minuten, bis die DNS-Änderungen aktiv sind, und verbinde dich in TeamSpeak mit `ts.deinedomain.de`.

## Ohne Subdomain verbinden (z.B. deinedomain.de)

1. <b>DNS-Einstellungen öffnen</b><br>
   Öffne die Verwaltung deiner Domain und klicke auf **DNS Einstellungen**.

2. <b>A-Eintrag erstellen</b><br>
   Erstelle einen neuen Eintrag mit Typ **A**:

   | Feld | Wert |
   |------|------|
   | Typ | `A` |
   | Name | leer lassen |
   | Ziel | Die IP-Adresse deines Servers |

3. <b>SRV-Eintrag erstellen</b><br>
   Erstelle einen neuen Eintrag mit Typ **SRV**:

   **Name:**

   | Feld | Wert |
   |------|------|
   | Service Name | `_ts3` |
   | Protokoll | `UDP` |
   | Name | leer lassen |

   **Ziel:**

   | Feld | Wert |
   |------|------|
   | Priorität | `0` |
   | Gewicht | `5` |
   | Port | Der Port deines TeamSpeak Servers |
   | Ziel | `deinedomain.de` |

4. <b>Verbindung testen</b><br>
   Warte einige Minuten, bis die DNS-Änderungen aktiv sind, und verbinde dich in TeamSpeak mit `deinedomain.de`.

:::: info Hinweis
DNS-Änderungen können bis zu 24 Stunden dauern, bis sie weltweit aktiv sind. In der Regel sind sie aber innerhalb weniger Minuten verfügbar.
::::

:::: tip Tipp
Falls dein TeamSpeak Server den Standard-Port `9987` verwendet, reicht der A-Eintrag allein aus. Der SRV-Eintrag wird nur benötigt, wenn dein Server einen anderen Port verwendet.
::::
