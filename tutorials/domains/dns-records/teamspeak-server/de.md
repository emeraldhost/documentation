---
slug: "teamspeak-server"
language: "de"
title: "So verknüpfst Du Deine Domain mit einem TeamSpeak Server"
description: "Domain mit einem TeamSpeak Server verknüpfen"
tags: []
date: "2023-10-15"
visibility: "public"
updated: "2026-04-09"
cta: "domain"
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "TeamSpeak Server"
sort: 3
related: ["domains/dns-records/fivem-server", "domains/dns-records/minecraft-server"]
---

Du kannst Deinen TeamSpeak Server über eine eigene Domain erreichbar machen, sodass Nutzer sich z.B. über `ts.deinedomain.de` oder `deinedomain.de` verbinden können – statt über eine IP-Adresse.

## Voraussetzungen

- Eine Domain bei EmeraldHost
- Die IP-Adresse und den Port Deines TeamSpeak Servers (findest Du in der **Verwaltung** Deines Servers)

## Mit Subdomain verbinden (z.B. ts.deinedomain.de)

1. **DNS-Einstellungen öffnen**\
   Öffne die Verwaltung Deiner Domain und klicke auf **DNS Einstellungen**.

2. **A-Eintrag erstellen**\
   Erstelle einen neuen Eintrag mit Typ **A**:

   | Feld | Wert |
   |------|------|
   | Typ | `A` |
   | Name | `ts` |
   | Ziel | Die IP-Adresse Deines Servers |

3. **SRV-Eintrag erstellen**\
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
   | Port | Der Port Deines TeamSpeak Servers |
   | Ziel | `ts.deinedomain.de` |

4. **Verbindung testen**\
   Warte einige Minuten, bis die DNS-Änderungen aktiv sind, und verbinde Dich in TeamSpeak mit `ts.deinedomain.de`.

## Ohne Subdomain verbinden (z.B. deinedomain.de)

1. **DNS-Einstellungen öffnen**\
   Öffne die Verwaltung Deiner Domain und klicke auf **DNS Einstellungen**.

2. **A-Eintrag erstellen**\
   Erstelle einen neuen Eintrag mit Typ **A**:

   | Feld | Wert |
   |------|------|
   | Typ | `A` |
   | Name | `@` |
   | Ziel | Die IP-Adresse Deines Servers |

3. **SRV-Eintrag erstellen**\
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
   | Port | Der Port Deines TeamSpeak Servers |
   | Ziel | `deinedomain.de` |

4. **Verbindung testen**\
   Warte einige Minuten, bis die DNS-Änderungen aktiv sind, und verbinde Dich in TeamSpeak mit `deinedomain.de`.

> [!NOTE]
> DNS-Änderungen können bis zu 24 Stunden dauern, bis sie weltweit aktiv sind. In der Regel sind sie aber innerhalb weniger Minuten verfügbar.

> [!TIP]
> Falls Dein TeamSpeak Server den Standard-Port `9987` verwendet, reicht der A-Eintrag allein aus. Der SRV-Eintrag wird nur benötigt, wenn Dein Server einen anderen Port verwendet.
