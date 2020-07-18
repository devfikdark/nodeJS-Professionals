## Section 41.1: Command Line Options


- -v, --version
  - Added in: v0.1.3 Print node's version.

- -h, --help
  - Added in: v0.1.3 Print node command line options. The output of this option is less detailed than this document.

- -e, --eval "script"
  - Added in: v0.5.2 Evaluate the following argument as JavaScript. The modules which are predefined in the REPL can also be used in script.

- -p, --print "script"
  - Added in: v0.6.4 Identical to -e but prints the result.

- -c, --check
  - Added in: v5.0.0 Syntax check the script without executing.

- -i, --interactive
  - Added in: v0.7.7 Opens the REPL even if stdin does not appear to be a terminal.

- -r, --require module
  - Added in: v1.6.0 Preload the specified module at startup. Follows require()'s module resolution rules. module may be either a path to a file, or a node module name.

- --no-deprecation
  - Added in: v0.8.0 Silence deprecation warnings.

- --trace-deprecation
  - Added in: v0.8.0 Print stack traces for deprecations.

- --throw-deprecation
  - Added in: v0.11.14 Throw errors for deprecations.

- --no-warnings
  - Added in: v6.0.0 Silence all process warnings (including deprecations).

- --trace-warnings
  - Added in: v6.0.0 Print stack traces for process warnings (including deprecations)

- --trace-sync-io
  - Added in: v2.1.0 Prints a stack trace whenever synchronous I/O is detected after the first turn of the event loop.

- --zero-fill-buffers
  - Added in: v6.0.0 Automatically zero-fills all newly allocated Buffer and SlowBuffer instances.

- --preserve-symlinks
  - Added in: v6.3.0 Instructs the module loader to preserve symbolic links when resolving and caching modules.

- --track-heap-objects
  - Added in: v2.4.0 Track heap object allocations for heap snapshots.

- --prof-process
  - Added in: v6.0.0 Process v8 profiler output generated using the v8 option --prof.

- --v8-options
  - Added in: v0.1.3 Print v8 command line options.
