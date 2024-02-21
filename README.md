## exec()
The `exec()` function in Node.js creates a new shell process and executes a command in that shell

## execFile()
The key difference between the `execFile()` and `exec()` functions is that the first argument of `execFile()` is now a path to an executable file instead of a command. 

## spawn()
The `spawn()` function runs a command in a process. This function returns data via the stream API. Therefore, to get the output of the child process, we need to listen for stream events.

`spawn()` does not create a new shell before running a process.

It’s often a good idea to choose `spawn()` over `exec()` or `execFile()` when the command you want to run can output a large amount of data. With a buffer, as used by `exec()` and `execFile()`, all the processed data is stored in the computer’s memory. For large amounts of data, this can degrade system performance. With a stream, the data is processed and transferred in small chunks. Therefore, you can process a large amount of data without using too much memory at any one time.

## fork()
Node.js provides the `fork()` function, a variation of `spawn()`, to create a child process that’s also a Node.js process. 
The main benefit of using `fork()` to create a Node.js process over `spawn()` or `exec()` is that `fork()` enables communication between the parent and the child process.