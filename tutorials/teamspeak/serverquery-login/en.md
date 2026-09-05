---
slug: "serverquery-login"
language: "en"
title: "ServerQuery login"
description: "Create a ServerQuery access on your TeamSpeak server and connect to it with YaTQA."
tags: []
date: "2023-10-15"
visibility: "public"
updated: "2026-09-05"
cta: "teamspeak"
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "ServerQuery Login"
sort: 2
related: ["teamspeak/teamspeak-6-server-availability"]
---

To manage your server via query, we recommend the program [YaTQA](https://yat.qa/download/).\
In addition, server admin rights on the TeamSpeak server are required to create a query access.

## Steps

1. **Connect to your server**\
   Connect to your server with the TeamSpeak client.

2. **Open the ServerQuery login**\
   In the top bar, click on Extras -> ServerQuery Login.

3. **Choose a name**\
   Define a name for your admin account and confirm it with "OK".

4. **Note down the credentials**\
   Make a note of the user name and the password.

   > [!WARNING]
   > These login details cannot be displayed again, so store them safely!

5. **Open the server in the dashboard**\
   Go to our dashboard and select the TeamSpeak server on which you created the ServerQuery login.

6. **Note down the address and ports**\
   Note the IP address (e.g. 203.0.113.10), the port behind your IP address (e.g. 9001) and the query port below it (e.g. 9152).

7. **Install YaTQA**\
   Install [YaTQA](https://yat.qa/download/) and open the program.

8. **Allow the non-standard query port**\
   In the left column, click on "Settings" and tick "Allow connection to non-standard query port" under "Notes". You can then close the settings.

9. **Connect to the server**\
   Enter the details you noted down in the following fields:

   - your IP address in "Server address (without port):"
   - your query port in "Queryport:"
   - your user name in "User (optional):"
   - your password in "Password (optional):"

   Then confirm your entries with "Connect".

10. **Select the server**\
    To manage the server, go to the "Server" tab and choose the option "Search server using port...". Enter the port you noted down after your IP address.
