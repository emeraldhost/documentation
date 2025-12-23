import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  titleTemplate: ":title - EmeraldHost.de",
  head: [
    [
      'link',
      {
        rel: 'icon',
        sizes: '32x32',
        href: 'https://emeraldhost.de/favicon-32x32.png'
      }
    ],
    [
      'link',
      {
        rel: 'icon',
        sizes: '16x16',
        href: 'https://emeraldhost.de/favicon-16x16.png'
      }
    ]
  ],
  locales: {
    root: {
      label: 'Deutsch',
      lang: 'de-DE',
      link: '/',
      title: "Dokumentation",
      description: "Zentralen Wissensdatenbank von EmeraldHost! Hier möchten wir Dir, als unserem Kunden, unsere Produkte näher bringen und Dir zeigen, wie Du sie bestmöglich nutzen kannst.",
      themeConfig: {
        nav: [
          { text: 'Webseite', link: 'https://emeraldhost.de/de' },
          { text: 'Support', link: 'https://emeraldhost.de/de/support' },
          { text: 'Impressum', link: 'https://emeraldhost.de/de/impressum' }
        ],
        sidebar: [
          { text: 'Willkommen!', link: '/' },
          { text: 'Neukunden Rabatt sichern! 🎉', link: '/neukunden-rabatt-sichern' },
          {
            text: 'Gameserver',
            items: [
              { text: 'SFTP-Verbindung Herstellen', link: '/gameserver/sftp-verbindung-herstellen' },
              { text: 'SteamID64 Herausfinden', link: '/gameserver/steamid64-herausfinden' },
              { text: 'Epic Games ID Herausfinden', link: '/gameserver/epicgamesid-herausfinden' },
              {
                text: 'Minecraft Java Edition',
                link: '/gameserver/minecraft-java-edition',
                collapsed: true,
                items: [
                  { text: 'Minecraft EULA akzeptieren', link: '/gameserver/minecraft-java-edition/minecraft-eula-akzeptieren' },
                  { text: 'Slots erhöhen', link: '/gameserver/minecraft-java-edition/slots-erhoehen' },
                  { text: 'View-Distance ändern', link: '/gameserver/minecraft-java-edition/view-distance-aendern' },
                  { text: 'Simulation-Distance ändern', link: '/gameserver/minecraft-java-edition/simulation-distance-aendern' },
                  { text: 'MOTD ändern', link: '/gameserver/minecraft-java-edition/motd-aendern' },
                  { text: 'Whitelist aktivieren', link: '/gameserver/minecraft-java-edition/whitelist-aktivieren' },
                  { text: 'OP-Rechte vergeben', link: '/gameserver/minecraft-java-edition/op-rechte-vergeben' },
                  { text: 'Modpack ändern', link: '/gameserver/minecraft-java-edition/modpack-aendern' },
                  { text: 'Version ändern', link: '/gameserver/minecraft-java-edition/version-aendern' },
                  { text: 'World-Seed ändern', link: '/gameserver/minecraft-java-edition/world-seed-aendern' },
                  { text: 'Welt Hochladen', link: '/gameserver/minecraft-java-edition/welt-hochladen' },
                  { text: 'Welt Löschen', link: '/gameserver/minecraft-java-edition/welt-loeschen' },
                  {
                    text: 'Befehle',
                    link: '',
                    collapsed: true,
                    items: [
                      { text: 'Tp-Befehl verwenden', link: '/gameserver/minecraft-java-edition/befehle/tp-befehl-verwenden' },
                      { text: 'Gamemode verändern', link: '/gameserver/minecraft-java-edition/befehle/gamemode-veraendern' },
                      { text: 'Server moderieren', link: '/gameserver/minecraft-java-edition/befehle/server-moderieren' },
                      { text: 'Wetter verändern', link: '/gameserver/minecraft-java-edition/befehle/wetter-veraendern' },
                    ]
                  },
                  {
                    text: 'Plugins',
                    link: '',
                    collapsed: true,
                    items: [
                      { text: 'Java mit Bedrock verknüpfen', link: '/gameserver/minecraft-java-edition/plugins/java-mit-bedrock-verknuepfen' }
                    ]
                  }
                ]
              },
              {
                text: 'Minecraft Bedrock Edition',
                link: '/gameserver/minecraft-bedrock-edition',
                collapsed: true,
                items: [
                  { text: 'Slots erhöhen', link: '/gameserver/minecraft-bedrock-edition/slots-erhoehen' },
                  { text: 'View-Distance ändern', link: '/gameserver/minecraft-bedrock-edition/view-distance-aendern' },
                  { text: 'Tick-Distance ändern', link: '/gameserver/minecraft-bedrock-edition/tick-distance-aendern' },
                  { text: 'Behavior und Resource Packs hinzufügen', link: '/gameserver/minecraft-bedrock-edition/behavior-und-resource-packs-hinzufuegen' },
                  { text: 'Whitelist aktivieren', link: '/gameserver/minecraft-bedrock-edition/whitelist-aktivieren' },
                  { text: 'OP-Rechte vergeben', link: '/gameserver/minecraft-bedrock-edition/op-rechte-vergeben' },
                  { text: 'World-Seed ändern', link: '/gameserver/minecraft-bedrock-edition/world-seed-aendern' },
                  { text: 'Welt Hochladen', link: '/gameserver/minecraft-bedrock-edition/welt-hochladen' },
                  { text: 'Welt Löschen', link: '/gameserver/minecraft-bedrock-edition/welt-loeschen' },
                  {
                    text: 'Befehle',
                    link: '',
                    collapsed: true,
                    items: [
                      { text: 'Tp-Befehl verwenden', link: '/gameserver/minecraft-bedrock-edition/befehle/tp-befehl-verwenden' }
                    ]
                  }
                ]
              },
              {
                text: 'Euro Truck Simulator 2',
                link: '/gameserver/euro-truck-simulator-2',
                collapsed: true,
                items: [
                  { text: 'Mods hinzufügen', link: '/gameserver/euro-truck-simulator-2/mods-hinzufuegen' },
                  { text: 'Admins hinzufügen', link: '/gameserver/euro-truck-simulator-2/admins-hinzufuegen' },
                  { text: 'Spieler-Schaden deaktivieren', link: '/gameserver/euro-truck-simulator-2/spieler-schaden-deaktivieren' }
                ]
              },
              {
                text: 'American Truck Simulator',
                link: '/gameserver/american-truck-simulator',
                collapsed: true,
                items: [
                  { text: 'Mods hinzufügen', link: '/gameserver/american-truck-simulator/mods-hinzufuegen' },
                  { text: 'Admins hinzufügen', link: '/gameserver/american-truck-simulator/admins-hinzufuegen' },
                  { text: 'Spieler-Schaden deaktivieren', link: '/gameserver/american-truck-simulator/spieler-schaden-deaktivieren' }
                ]
              },
              {
                text: 'ARK Survival Evolved',
                link: '/gameserver/ark-survival-evolved',
                collapsed: true,
                items: [
                  { text: 'Admins hinzufügen', link: '/gameserver/ark-survival-evolved/admins-hinzufuegen' }
                ]
              },
              {
                text: 'Arma Reforger',
                link: '',
                collapsed: true,
                items: [
                  { text: 'Szenario ändern', link: '/gameserver/arma-reforger/szenario-aendern' }
                ]
              },
              {
                text: 'Terraria: tModLoader',
                link: '/gameserver/terraria-tmodloader',
                collapsed: true,
                items: [
                  { text: 'Mods hinzufügen', link: '/gameserver/terraria-tmodloader/mods-hinzufuegen' },
                  { text: 'Welt hinzufügen', link: '/gameserver/terraria-tmodloader/welt-hinzufuegen' }
                ]
              },
              {
                text: 'Valheim',
                link: '/gameserver/valheim',
                collapsed: true,
                items: [
                  { text: 'Savegame hinzufügen', link: '/gameserver/valheim/savegame-hinzufuegen' }
                ]
              },
              {
                text: 'Palworld',
                link: '/gameserver/palworld',
                collapsed: true,
                items: [
                  { text: '🚨 Performance-Probleme auf Palworld Servern', link: '/gameserver/palworld/performance-probleme-auf-palworld-servern' },
                  { text: 'Server beitreten', link: '/gameserver/palworld/server-beitreten' }
                ]
              },
              {
                text: 'Enshrouded',
                link: '/gameserver/enshrouded',
                collapsed: true,
                items: [
                  { text: '🚨 Performance-Probleme auf Enshrouded Servern', link: '/gameserver/enshrouded/performance-probleme-auf-enshrouded-servern' },
                  { text: 'Savegame hinzufügen', link: '/gameserver/enshrouded/savegame-hinzufuegen' },
                  { text: 'Server beitreten', link: '/gameserver/enshrouded/server-beitreten' }
                ]
              },
              {
                text: '7 Days to Die',
                link: '',
                collapsed: true,
                items: [
                  { text: 'Crossplay Aktivieren', link: '/gameserver/7-days-to-die/crossplay-aktivieren' }
                ]
              },
              {
                text: 'Aloft',
                link: '',
                collapsed: true,
                items: [
                  { text: 'Server beitreten', link: '/gameserver/aloft/server-beitreten' },
                  { text: 'Servername Ändern', link: '/gameserver/aloft/server-name-aendern' },
                  { text: 'Admin Hinzufügen', link: '/gameserver/aloft/admin-hinzufuegen' },
                  { text: 'Private Inseln Aktivieren', link: '/gameserver/aloft/private-inseln-aktivieren' },
                  { text: 'Anzahl der Inseln ändern', link: '/gameserver/aloft/anzahl-der-inseln-aendern' },
                  { text: 'Ingame Konsole öffnen', link: '/gameserver/aloft/ingame-konsole-oeffnen' }
                ]
              },
              {
                text: 'BeamMP',
                link: '',
                collapsed: true,
                items: [
                  { text: 'Mods Hinzufügen', link: '/gameserver/beammp/mods-hinzufuegen' }
                ]
              },
              {
                text: 'Project Zomboid',
                link: '',
                collapsed: true,
                items: [
                  { text: 'Mods Hinzufügen', link: '/gameserver/project-zomboid/mods-hinzufuegen' }
                ]
              },
              {
                text: 'V Rising',
                link: '',
                collapsed: true,
                items: [
                  { text: 'Admin Hinzufügen', link: '/gameserver/v-rising/admin-hinzufuegen' },
                  { text: 'Savegame Hinzufügen', link: '/gameserver/v-rising/savegame-hinzufuegen' }
                ]
              }
            ]
          },
          {
            text: 'Rootserver',
            items: [
              {
                text: 'Grundkonfiguration',
                collapsed: true,
                items: [
                  { text: 'UFW installieren', link: '/rootserver/grundkonfiguration/ufw-installieren' },
                  { text: 'Fail2Ban installieren', link: '/rootserver/grundkonfiguration/fail2ban-installieren' }
                ]
              },
              {
                text: 'Dienste & Tools',
                collapsed: true,
                items: [
                  { text: 'phpMyAdmin, Apache2 und MySQL installieren', link: '/rootserver/dienste_tools/phpmyadmin-apache2-und-mysql' },
                  { text: 'TeamSpeak 3 Server installieren', link: '/rootserver/dienste_tools/teamspeak-3-server-installieren' },
                  { text: 'Minecraft Server installieren', link: '/rootserver/dienste_tools/minecraft-server-installieren' },
                  { text: 'Docker installieren', link: '/rootserver/dienste_tools/docker-installieren' },
                  { text: 'Webserver installieren', link: '/rootserver/dienste_tools/webserver-installieren' },
                  { text: 'Certbot installieren', link: '/rootserver/dienste_tools/certbot-installieren' }
                ]
              },
              {
                text: 'Windows',
                collapsed: true,
                items: [
                  { text: 'Windows Festplatte erweitern', link: '/rootserver/windows/windows-hard-drive-expand' }
                ]
              },
              {
                text: 'Tipps & Fehlerbehebung',
                collapsed: true,
                items: [
                  { text: 'Cronjobs erstellen', link: '/rootserver/tipps_fehlerbehebung/cronjobs-erstellen' }
                ]
              }
            ]
          },
          {
            text: 'Domains',
            items: [
              {
                text: 'DNS-Einträge',
                link: '/domains/dns-eintraege',
                collapsed: true,
                items: [
                  { text: 'TeamSpeak Server', link: '/domains/dns-eintraege/teamspeak-server' }
                ]
              }
            ]
          },
          {
            text: 'TeamSpeak',
            items: [
              { text: 'ServerQuery Login', link: '/teamspeak/serverquery-login' }
            ]
          }
        ],
        outline: {
          label: 'Auf dieser Seite'
        },
        docFooter: {
          prev: 'Vorherige Seite',
          next: 'Nächste Seite'
        },
        socialLinks: [
          { icon: 'twitter', link: 'https://twitter.com/EmeraldHostDE' },
          { icon: 'instagram', link: 'https://www.instagram.com/emeraldhost.de/' },
          {
            icon: {
              svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>TikTok</title><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg>'
            },
            link: 'https://www.tiktok.com/@emeraldhost.de',
          },
          { icon: 'mastodon', link: 'https://mastodon.social/@emeraldhost' },
          { icon: 'facebook', link: 'https://www.facebook.com/EmeraldHostDE/' },
          { icon: 'youtube', link: 'https://www.youtube.com/@emeraldhost' },
          {
            icon: {
              svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Bluesky</title><path d="M12 10.8c-1.087-2.114-4.046-6.053-6.798-7.995C2.566.944 1.561 1.266.902 1.565.139 1.908 0 3.08 0 3.768c0 .69.378 5.65.624 6.479.815 2.736 3.713 3.66 6.383 3.364.136-.02.275-.039.415-.056-.138.022-.276.04-.415.056-3.912.58-7.387 2.005-2.83 7.078 5.013 5.19 6.87-1.113 7.823-4.308.953 3.195 2.05 9.271 7.733 4.308 4.267-4.308 1.172-6.498-2.74-7.078a8.741 8.741 0 0 1-.415-.056c.14.017.279.036.415.056 2.67.297 5.568-.628 6.383-3.364.246-.828.624-5.79.624-6.478 0-.69-.139-1.861-.902-2.206-.659-.298-1.664-.62-4.3 1.24C16.046 4.748 13.087 8.687 12 10.8Z"/></svg>'
            },
            link: 'https://bsky.app/profile/emeraldhost.bsky.social',
          },
          { icon: 'discord', link: 'https://discord.emeraldhost.de/' },
          { icon: 'github', link: 'https://github.com/emeraldhost/' }
        ],
        notFound: {
          title: 'Seite nicht gefunden',
          quote: 'Die von Dir aufgerufene Seite existiert nicht oder wurde entfernt.',
          linkLabel: 'Zurück zur Startseite',
          linkText: 'Zur Startseite',
          code: '404'
        },
        editLink: {
          pattern: 'https://github.com/emeraldhost/documentation/edit/master/:path',
          text: 'Diese Seite auf GitHub bearbeiten'
        },
        lastUpdated: {
          text: 'Zuletzt aktualisiert'
        },
      }
    },
    en: {
      label: 'English',
      lang: 'en-US',
      link: '/en/',
      title: "Documentation",
      description: "EmeraldHost's central knowledge base! Here, we aim to introduce you to our products and show you how to make the most of them.",
      themeConfig: {
        nav: [
          { text: 'Website', link: 'https://emeraldhost.de/en' },
          { text: 'Support', link: 'https://emeraldhost.de/en/support' },
          { text: 'Imprint', link: 'https://emeraldhost.de/en/imprint' }
        ],
        sidebar: [
          { text: 'Welcome!', link: '/en/' },
          { text: 'Secure your New Customer Discount! 🎉', link: '/en/secure-new-customer-discount' },
          {
            text: 'Gameserver',
            items: [
              { text: 'Establish SFTP connection', link: '/en/gameserver/establish-sftp-connection' },
              { text: 'SteamID64 Find out', link: '/en/gameserver/steamid64-find-out' },
              { text: 'Epic Games ID Find out', link: '/en/gameserver/epicgamesid-find-out' },
              {
                text: 'Minecraft Java Edition',
                link: '/en/gameserver/minecraft-java-edition',
                collapsed: true,
                items: [
                  { text: 'Accept Minecraft EULA', link: '/en/gameserver/minecraft-java-edition/accept-minecraft-eula' },
                  { text: 'Increase slots', link: '/en/gameserver/minecraft-java-edition/increase-slots' },
                  { text: 'Change view distance', link: '/en/gameserver/minecraft-java-edition/change-view-distance' },
                  { text: 'Change simulation distance', link: '/en/gameserver/minecraft-java-edition/change-simulation-distance' },
                  { text: 'Change MOTD', link: '/en/gameserver/minecraft-java-edition/change-motd' },
                  { text: 'Enable whitelist', link: '/en/gameserver/minecraft-java-edition/enable-whitelist' },
                  { text: 'Grant OP rights', link: '/en/gameserver/minecraft-java-edition/grant-op-rights' },
                  { text: 'Change Modpack', link: '/en/gameserver/minecraft-java-edition/change-modpack' },
                  { text: 'Change Version', link: '/en/gameserver/minecraft-java-edition/change-version' },
                  { text: 'Change world seed', link: '/en/gameserver/minecraft-java-edition/change-world-seed' },
                  { text: 'Upload world', link: '/en/gameserver/minecraft-java-edition/upload-world' },
                  { text: 'Delete world', link: '/en/gameserver/minecraft-java-edition/delete-world' },
                  {
                    text: 'Commands',
                    link: '',
                    collapsed: true,
                    items: [
                      { text: 'Use Tp command', link: '/en/gameserver/minecraft-java-edition/commands/use-tp-command' }
                    ]
                  },
                  {
                    text: 'Plugins',
                    link: '',
                    collapsed: true,
                    items: [
                      { text: 'Link Java with Bedrock', link: '/en/gameserver/minecraft-java-edition/plugins/link-java-with-bedrock' }
                    ]
                  }
                ]
              },
              {
                text: 'Minecraft Bedrock Edition',
                link: '/en/gameserver/minecraft-bedrock-edition',
                collapsed: true,
                items: [
                  { text: 'Increase slots', link: '/en/gameserver/minecraft-bedrock-edition/increase-slots' },
                  { text: 'Change view distance', link: '/en/gameserver/minecraft-bedrock-edition/change-view-distance' },
                  { text: 'Change tick distance', link: '/en/gameserver/minecraft-bedrock-edition/change-tick-distance' },
                  { text: 'Add Behavior and Resource Packs', link: '/en/gameserver/minecraft-bedrock-edition/add-behavior-und-resource-packs' },
                  { text: 'Enable whitelist', link: '/en/gameserver/minecraft-bedrock-edition/enable-whitelist' },
                  { text: 'Grant OP rights', link: '/en/gameserver/minecraft-bedrock-edition/grant-op-rights' },
                  { text: 'Change world seed', link: '/en/gameserver/minecraft-bedrock-edition/change-world-seed' },
                  { text: 'Upload world', link: '/en/gameserver/minecraft-bedrock-edition/upload-world' },
                  { text: 'Delete world', link: '/en/gameserver/minecraft-bedrock-edition/delete-world' },
                  {
                    text: 'Commands',
                    link: '',
                    collapsed: true,
                    items: [
                      { text: 'Use Tp command', link: '/en/gameserver/minecraft-bedrock-edition/commands/use-tp-command' }
                    ]
                  }
                ]
              },
              {
                text: 'Euro Truck Simulator 2',
                link: '/en/gameserver/euro-truck-simulator-2',
                collapsed: true,
                items: [
                  { text: 'Add mods', link: '/en/gameserver/euro-truck-simulator-2/add-mods' },
                  { text: 'Add admins', link: '/en/gameserver/euro-truck-simulator-2/add-admins' },
                  { text: 'Deactivate player damage', link: '/en/gameserver/euro-truck-simulator-2/deactivate-player-damage' }
                ]
              },
              {
                text: 'American Truck Simulator',
                link: '/en/gameserver/american-truck-simulator',
                collapsed: true,
                items: [
                  { text: 'Add mods', link: '/en/gameserver/american-truck-simulator/add-mods' },
                  { text: 'Add admins', link: '/en/gameserver/american-truck-simulator/add-admins' },
                  { text: 'Deactivate player damage', link: '/en/gameserver/american-truck-simulator/deactivate-player-damage' }
                ]
              },
              {
                text: 'ARK Survival Evolved',
                link: '/en/gameserver/ark-survival-evolved',
                collapsed: true,
                items: [
                  { text: 'Add admins', link: '/en/gameserver/ark-survival-evolved/add-admins' }
                ]
              },
              {
                text: 'Arma Reforger',
                link: '',
                collapsed: true,
                items: [
                  { text: 'Change scenario', link: '/en/gameserver/arma-reforger/change-scenario' }
                ]
              },
              {
                text: 'Terraria: tModLoader',
                link: '/en/gameserver/terraria-tmodloader',
                collapsed: true,
                items: [
                  { text: 'Add Mods', link: '/en/gameserver/terraria-tmodloader/add-mods' },
                  { text: 'Add world', link: '/en/gameserver/terraria-tmodloader/add-world' }
                ]
              },
              {
                text: 'Valheim',
                link: '/en/gameserver/valheim',
                collapsed: true,
                items: [
                  { text: 'Add savegame', link: '/en/gameserver/valheim/add-savegame' }
                ]
              },
              {
                text: 'Palworld',
                link: '/en/gameserver/palworld',
                collapsed: true,
                items: [
                  { text: '🚨 Performance problems on Palworld servers', link: '/en/gameserver/palworld/performance-problems-on-palworld-servers' },
                  { text: 'Join Server', link: '/en/gameserver/palworld/join-server' }
                ]
              },
              {
                text: 'Enshrouded',
                link: '/en/gameserver/enshrouded',
                collapsed: true,
                items: [
                  { text: '🚨 Performance problems on Enshrouded Servers', link: '/en/gameserver/enshrouded/performance-problems-on-Enshrouded-servers' },
                  { text: 'Add savegame', link: '/en/gameserver/enshrouded/add-savegame' },
                  { text: 'Join server', link: '/en/gameserver/enshrouded/join-server' }
                ]
              },
              {
                text: '7 Days to Die',
                link: '/en/gameserver/7-days-to-die',
                collapsed: true,
                items: [
                  { text: 'Activate crossplay', link: '/en/gameserver/7-days-to-die/activate-crossplay' }
                ]
              },
              {
                text: 'Aloft',
                link: '',
                collapsed: true,
                items: [
                  { text: 'Join server', link: '/en/gameserver/aloft/join-server' },
                  { text: 'Change server name', link: '/en/gameserver/aloft/change-server-name' },
                  { text: 'Add Admin', link: '/en/gameserver/aloft/add-admin' },
                  { text: 'Activate private islands', link: '/en/gameserver/aloft/activate-private-islands' },
                  { text: 'Change Number of Islands', link: '/en/gameserver/aloft/change-number-of-islands' },
                  { text: 'Open ingame console', link: '/en/gameserver/aloft/open-ingame-console' }
                ]
              },
              {
                text: 'BeamMP',
                link: '',
                collapsed: true,
                items: [
                  { text: 'Add mods', link: '/en/gameserver/beammp/add-mods' }
                ]
              },
              {
                text: 'Project Zomboid',
                link: '',
                collapsed: true,
                items: [
                  { text: 'Add Mods', link: '/en/gameserver/project-zomboid/add-mods' }
                ]
              },
              {
                text: 'V Rising',
                link: '',
                collapsed: true,
                items: [
                  { text: 'Add Admin', link: '/en/gameserver/v-rising/add-admin' },
                  { text: 'Add savegame', link: '/en/gameserver/v-rising/add-savegame' }
                ]
              }
            ]
          },
          {
            text: 'Rootserver',
            items: [
              {
                text: 'Basic configuration',
                collapsed: true,
                items: [
                  { text: 'Install UFW', link: '/en/rootserver/basic_configuration/install-ufw' },
                  { text: 'Install Fail2Ban', link: '/en/rootserver/basic_configuration/install-fail2ban' }
                ]
              },
              {
                text: 'Services & Tools',
                collapsed: true,
                items: [
                  { text: 'Install phpMyAdmin, Apache2 und MySQL', link: '/en/rootserver/services_tools/install-phpmyadmin-apache2-und-mysql' },
                  { text: 'Install TeamSpeak 3 Server', link: '/en/rootserver/services_tools/install-teamspeak-3-server' },
                  { text: 'Install Minecraft Server', link: '/en/rootserver/services_tools/install-minecraft-server' },
                  { text: 'Install Docker', link: '/en/rootserver/services_tools/install-docker' },
                  { text: 'Install Webserver ', link: '/en/rootserver/services_tools/install-webserver' },
                  { text: 'Install Certbot', link: '/en/rootserver/services_tools/install-certbot' }
                ]
              },
              {
                text: 'Windows',
                collapsed: true,
                items: [
                  { text: 'Expand Windows Hard Drive', link: '/en/rootserver/windows/windows-hard-drive-expand' }
                ]
              },
              {
                text: 'Tips & troubleshooting',
                collapsed: true,
                items: [
                  { text: 'Create cronjobs', link: '/en/rootserver/tips_troubleshooting/create-cronjobs' }
                ]
              }
            ]
          },
          {
            text: 'Domains',
            items: [
              {
                text: 'DNS-Records',
                link: '/en/domains/dns-records',
                collapsed: true,
                items: [
                  { text: 'TeamSpeak Server', link: '/en/domains/dns-records/teamspeak-server' }
                ]
              }
            ]
          },
          {
            text: 'TeamSpeak',
            items: [
              { text: 'ServerQuery Login', link: '/en/teamspeak/serverquery-login' }
            ]
          }
        ],
        outline: {
          label: 'On this page'
        },
        docFooter: {
          prev: 'Previous page',
          next: 'Next page'
        },
        socialLinks: [
          { icon: 'twitter', link: 'https://x.com/EmeraldHostINT' },
          { icon: 'instagram', link: 'https://www.instagram.com/emeraldhostint/' },
          {
            icon: {
              svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>TikTok</title><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg>'
            },
            link: 'https://www.tiktok.com/@emeraldhost.de',
          },
          { icon: 'mastodon', link: 'https://mastodon.social/@emeraldhostint' },
          { icon: 'facebook', link: 'https://www.facebook.com/EmeraldHostDE/' },
          { icon: 'youtube', link: 'https://www.youtube.com/@emeraldhost' },
          {
            icon: {
              svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Bluesky</title><path d="M12 10.8c-1.087-2.114-4.046-6.053-6.798-7.995C2.566.944 1.561 1.266.902 1.565.139 1.908 0 3.08 0 3.768c0 .69.378 5.65.624 6.479.815 2.736 3.713 3.66 6.383 3.364.136-.02.275-.039.415-.056-.138.022-.276.04-.415.056-3.912.58-7.387 2.005-2.83 7.078 5.013 5.19 6.87-1.113 7.823-4.308.953 3.195 2.05 9.271 7.733 4.308 4.267-4.308 1.172-6.498-2.74-7.078a8.741 8.741 0 0 1-.415-.056c.14.017.279.036.415.056 2.67.297 5.568-.628 6.383-3.364.246-.828.624-5.79.624-6.478 0-.69-.139-1.861-.902-2.206-.659-.298-1.664-.62-4.3 1.24C16.046 4.748 13.087 8.687 12 10.8Z"/></svg>'
            },
            link: 'https://bsky.app/profile/emeraldhostint.bsky.social',
          },
          { icon: 'discord', link: 'https://discord.emeraldhost.de/' },
          { icon: 'github', link: 'https://github.com/emeraldhost/' }
        ],
        notFound: {
          title: 'Page not found',
          quote: 'The page you requested does not exist or has been removed.',
          linkLabel: 'Back to Homepage',
          linkText: 'Go to Homepage',
          code: '404'
        },
        editLink: {
          pattern: 'https://github.com/emeraldhost/documentation/edit/master/:path',
          text: 'Edit this page on GitHub'
        },
        lastUpdated: {
          text: 'Last updated'
        }
      }
    }
  },
  themeConfig: {
    logo: "https://emeraldhost.b-cdn.net/branding/icon.svg",
    footer: {
      copyright: '© 2016 - 2025 EmeraldHost'
    },
    search: {
      provider: 'local'
    },
    lastUpdated: true,
    i18nRouting: false
  }
})
