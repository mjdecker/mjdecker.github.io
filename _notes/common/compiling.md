# Why Compile?
* Machine language instructions (ML) are the only instructions the processor/CPU can execute. 
* ML is just numbers. When the ML is put into memory it can be fetched, decoded, and executed by the processor. Different numbers will cause the processor to perform different actions. 
* Different types of processors usually have different ML's. 
* Assembly language (AL) is a symbolic representation of ML. 
* A translation of the C++ program statements to machine language language is necessary. 

---

# Stages in Compiling

```
                                                 other ML   ----+
                                                                V       
         +--------------+   +----------+   +-----------+   +--------+
  C++ -->| PREPROCESSOR |-->| COMPILER |-->| ASSEMBLER |-->| LINKER |-->  
Program  +--------------+   +----------+   +-----------+   +--------+     

  Output:           Modified C++      Assembly       Executable      "Complete"
                    program (copy)    language         code (ML)     Executable
```

---

# Stages in Compiling - Explanation
* Preprocessor: the source program undergoes modification before it is compiled, A modified copy of the original program is created, however it is still valid C++. Things the preprocessor does includes:
	*	\#includes are processed. In the copy of the original file the #include is removed, and C++ statements are inserted at the point of the #include just as if the programmer had typed them in him/herself. 
	* Comments are removed. 
* Compiler
    * The C++ statements are converted into AL statements. 

---

# Stages in Compiling - Explanation (continued)
* Assembler
	* The AL statements are converted into ML called object code. 
* Linker
	* Object code from multiple sources is combined together to form a complete executable program. For example the ML to perform input/output is almost always linked in since most programs do input or output. 

---

# Linking
* Linking is an important phase of the compiling process. 
* All machine language can be compiled into a single executable program. This is called static linking. 
* More common today is dynamic linking. With dynamic linking the "other" machine language remains separate and the linker arranges for your program to connect to the "other" machine language. 

---

# Linking (continued)
* When the program name is typed at the prompt the command interpreter, usually called the shell, causes the operating system to load the program into memory and begin executing it. 
* Note that the whole process is also called compiling and gets its name from the subpart, the conversion from C++ to AL. 
