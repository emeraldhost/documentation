---
slug: "change-root-password"
language: "en"
title: "How to Change the Root Password on Your Linux Root Server / vServer"
description: "Change the root password on a Linux root server / vServer"
tags: []
date: "2026-04-17"
visibility: "public"
cta: "rootserver"
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Change Root Password"
sort: 1
related: ["rootserver/basic-configuration/install-fail2ban", "rootserver/basic-configuration/secure-ssh-access", "rootserver/basic-configuration/install-ufw"]
---

Using the `passwd` command you can change the password of your current user – or, as root, the password of any other user – directly on the server.

## Log in as root

1. **Connect via SSH**\
   Connect to your server via SSH:

   ```bash
   ssh root@YOUR_SERVER_IP
   ```

## Change your own password

Run the following command:

```bash
passwd
```

You will be prompted to:

1. Enter your **current password** (non-root users only).
2. Enter your **new password**.
3. **Re-enter** the new password to confirm.

> [!NOTE]
> For security reasons nothing is displayed while typing – not even asterisks. Type the password blindly and confirm with Enter.

## Change another user's password

As root you can set the password of any other user without knowing the old one:

```bash
passwd USERNAME
```

Example:

```bash
passwd myuser
```

## Tips for strong passwords

- At least **16 characters**.
- Mix of upper and lower case, numbers and special characters.
- No dictionary words and no personal data.
- Use a unique password per service – ideally managed in a password manager.

> [!TIP]
> For even more security, use SSH keys instead of passwords. The full guide is available at [Secure SSH Access](/tutorials/rootserver/basic-configuration/secure-ssh-access).
