## Section 17.2: Running and stopping a Forever daemon

### To start the process:

- $ forever start index.js
  - warn: --minUptime not set. Defaulting to: 1000ms
  - warn: --spinSleepTime not set. Your script will exit if it does not stay up for at least 1000ms
  - info: Forever processing file: index.js

### List running Forever instances:
- $ forever list

### Stop the first process:
- $ forever stop 0
- $ forever stop 2146
- $ forever stop --uid f4Kt
- $ forever stop --pidFile 2131