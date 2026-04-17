---
description: Change the root password on a Linux root server / vServer
---

# How to Change the Root Password on Your Linux Root Server / vServer

Using the `passwd` command you can change the password of your current user — or, as root, the password of any other user — directly on the server.

## Log in as root

1. <b>Connect via SSH</b><br>
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

:::: info Note
For security reasons nothing is displayed while typing — not even asterisks. Type the password blindly and confirm with Enter.
::::

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
- Use a unique password per service — ideally managed in a password manager.

:::: tip Tip
For even more security, use SSH keys instead of passwords. The full guide is available at [Secure SSH Access](secure-ssh-access.md).
::::
