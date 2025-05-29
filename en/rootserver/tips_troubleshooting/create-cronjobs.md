---
description: Configuring cronjobs on a root server (Ubuntu/Debian)
---

# Cronjobs (time-controlled tasks)

Cronjobs are a function on Linux systems that makes it possible to automate tasks and execute them at a specific time or at regular intervals. They are particularly useful for customers who are not familiar with root servers, as they offer the possibility to perform recurring tasks without manual intervention.

## Crontab

The scheduled tasks are managed in the "Crontab" table. This table contains a list of the scheduled cron jobs. First the minutes (0 to 59), then the hours (0 to 23), the day (1 to 31), the month (1 to 12), the day of the week (1 to 7) and finally the command to be executed are defined.

A simple example of a cronjob entry in the crontab could look like this:

<details>

<summary>Cronjob example</summary>

```
0 10 * * * Command
```

This entry indicates that the "Command" command should be executed every day at 10:00. The individual fields can also be replaced by an asterisk (*) or by specific values.
</details>

## Specific values

- An asterisk (*) indicates that the cronjob should be executed at any time for the corresponding field.
- A specific number or range of numbers can be specified. For example, "5,10,15" for the minutes field means that the cronjob will be executed at minutes 5, 10 and 15.
- The hyphen (-) is used to specify a range. For example, "1-5" for the hours field means that the cronjob is executed from hour 1 to hour 5.
- The slash (/) is used to specify intervals. For example, "*/15" for the minutes field means that the cronjob is executed every 15 minutes.

There are also some special options for cronjobs:

- @reboot enables the execution of a cronjob at system startup.
- @yearly, @monthly, @weekly and @daily are predefined time intervals that are executed once a year, month, week or day.



