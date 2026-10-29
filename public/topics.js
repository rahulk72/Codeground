const TOPICS = {
1: {
 def: ["Java is a high-level, object-oriented, platform-independent programming language. You write the code once, and it runs on any device that has a Java Virtual Machine (JVM).",
       "Java ek high-level, object-oriented, platform-independent programming language hai. Code ek baar likhte ho, aur wo har us device par chalta hai jisme Java Virtual Machine (JVM) ho."],
 secs: [
  {h: ["What is Java and where did it come from?", "Java kya hai aur kahan se aayi?"],
   p: ["Java was created by James Gosling and his team at Sun Microsystems and released in 1995. It was first named Oak, then renamed Java. Oracle bought Sun in 2010, so Oracle now owns Java. The big idea was 'write once, run anywhere': the same program should work on Windows, Mac and Linux without rewriting it.",
       "Java ko James Gosling aur unki team ne Sun Microsystems me banaya aur 1995 me release kiya. Pehle iska naam Oak tha, fir Java rakha gaya. 2010 me Oracle ne Sun ko kharid liya, isliye ab Java Oracle ke paas hai. Bada idea tha 'write once, run anywhere': ek hi program Windows, Mac aur Linux par bina dobara likhe chale."],
   pts: [["Java is free to learn and use (OpenJDK is open source).", "It is one of the most popular languages in the world and has been for 25+ years.", "A new Java version is released every 6 months, and special long-term support (LTS) versions such as 8, 11, 17 and 21 are used the most in companies."],
         ["Java seekhna aur use karna free hai (OpenJDK open source hai).", "Ye 25 saal se zyada se duniya ki sabse popular languages me se ek hai.", "Har 6 mahine me nayi Java version aati hai, aur long-term support (LTS) versions jaise 8, 11, 17 aur 21 companies me sabse zyada use hote hain."]]},
  {h: ["Key features of Java", "Java ke main features"],
   p: ["These features are the reason Java is used for serious projects.", "Ye features hi wajah hain ki Java bade projects me use hoti hai."],
   pts: [["Platform independent: code is compiled to bytecode, which any JVM can run.", "Object-oriented: programs are built from classes and objects, which keeps big projects organized.", "Simple: no pointers, no manual memory handling, and a clean syntax compared to C++.", "Secure: the JVM checks code before running it, and there are no direct memory addresses.", "Robust: strong type checking, exception handling and automatic garbage collection.", "Multithreaded: one program can do many tasks at the same time.", "High performance: the JIT (just-in-time) compiler turns hot bytecode into fast machine code.", "Huge ecosystem: thousands of free libraries and frameworks such as Spring."],
         ["Platform independent: code bytecode me compile hota hai, jise koi bhi JVM chala sakta hai.", "Object-oriented: program classes aur objects se banta hai, isse bade projects organized rehte hain.", "Simple: pointers nahi, manual memory handling nahi, aur C++ ke muqable saaf syntax.", "Secure: JVM code chalane se pehle check karta hai, aur direct memory addresses nahi hote.", "Robust: strong type checking, exception handling aur automatic garbage collection.", "Multithreaded: ek program ek saath kai kaam kar sakta hai.", "High performance: JIT (just-in-time) compiler zyada chalne wale bytecode ko tez machine code me badal deta hai.", "Bada ecosystem: hazaron free libraries aur frameworks jaise Spring."]]},
  {h: ["How a Java program runs", "Java program kaise chalta hai"],
   p: ["You write source code in a .java file. The compiler (javac) converts it into bytecode in a .class file. The JVM then reads the bytecode and runs it on your machine. Because every operating system has its own JVM, the same .class file works everywhere.",
       "Tum source code .java file me likhte ho. Compiler (javac) use bytecode me badalke .class file banata hai. JVM fir bytecode padhkar tumhari machine par chalata hai. Har operating system ka apna JVM hota hai, isliye wahi .class file har jagah chalti hai."],
   code: `// File name: Welcome.java
public class Welcome {
    public static void main(String[] args) {
        System.out.println("Welcome to Java!");
    }
}

// Terminal:
// javac Welcome.java    -> creates Welcome.class (bytecode)
// java Welcome          -> JVM runs it
// Output: Welcome to Java!`},
  {h: ["Where Java is used", "Java kahan use hoti hai"],
   pts: [["Android apps (together with Kotlin).", "Banking, insurance and payment systems, where safety and stability matter.", "Web backends and REST APIs (Spring Boot).", "Big data and tools like Hadoop, Kafka and Elasticsearch.", "Enterprise software used by large companies.", "Desktop tools, games (Minecraft Java Edition) and scientific software."],
         ["Android apps (Kotlin ke saath).", "Banking, insurance aur payment systems, jahan safety aur stability zaroori hai.", "Web backend aur REST APIs (Spring Boot).", "Big data aur tools jaise Hadoop, Kafka aur Elasticsearch.", "Badi companies ka enterprise software.", "Desktop tools, games (Minecraft Java Edition) aur scientific software."]],
   tip: ["Java is case-sensitive: Main, main and MAIN are three different names.", "Java case-sensitive hai: Main, main aur MAIN teen alag naam hain."]}
 ]},
13: {
 def: ["A method is a named block of code that performs one specific task. You write it once and call it whenever you need it. A method can take inputs (parameters) and can give back one output (a return value).",
       "Method code ka ek naam wala block hai jo ek khaas kaam karta hai. Use ek baar likhte ho aur jab chahiye tab call karte ho. Method inputs (parameters) le sakta hai aur ek output (return value) wapas de sakta hai."],
 secs: [
  {h: ["Why do we need methods?", "Methods ki zarurat kyun hai?"],
   p: ["Imagine you must calculate the area of a circle in ten places. Without a method you copy the same lines ten times, and if there is a bug you fix it ten times. With a method you write the logic once and just call its name.",
       "Socho tumhe 10 jagah circle ka area nikalna hai. Method ke bina wahi lines 10 baar copy karni padengi, aur bug ho to 10 jagah theek karna padega. Method se logic ek baar likhte ho aur bas naam se call karte ho."],
   pts: [["Reusability: write once, use many times.", "Readability: a long program becomes small named steps like readMarks(), calculateTotal(), printResult().", "Easy fixing: a bug is fixed in one place only.", "Easy testing: you can test each method on its own.", "Teamwork: different people can write different methods."],
         ["Reusability: ek baar likho, kai baar use karo.", "Readability: lamba program chhote naam wale steps ban jata hai, jaise readMarks(), calculateTotal(), printResult().", "Aasan fixing: bug sirf ek jagah theek hota hai.", "Aasan testing: har method ko alag se test kar sakte ho.", "Teamwork: alag log alag methods likh sakte hain."]]},
  {h: ["Syntax and parts of a method", "Method ka syntax aur uske parts"],
   p: ["A method has a header (its signature) and a body inside curly braces. Let us look at every part of this example.",
       "Method me ek header (signature) aur curly braces ke andar body hoti hai. Is example ke har part ko dekhte hain."],
   code: `public class Demo {
    //  modifier  static  returnType  name   (parameters)
    public static int square(int n) {
        int result = n * n;      // body
        return result;           // sends the value back
    }

    public static void main(String[] args) {
        int x = square(5);       // method call
        System.out.println(x);   // 25
        System.out.println(square(9));   // 81
    }
}`,
   pts: [["Access modifier (public): who can call this method.", "static: the method belongs to the class, so you can call it without creating an object. (You will learn instance methods in Phase 3.)", "Return type (int): the type of value the method gives back. Use void if it gives nothing.", "Name (square): use camelCase and a verb, like calculateTotal or isEven.", "Parameters (int n): the inputs, written as type and name, separated by commas.", "Body: the code between { and }.", "return: sends a value back to the caller and ends the method."],
         ["Access modifier (public): kaun is method ko call kar sakta hai.", "static: method class ka hota hai, isliye object banaye bina call kar sakte ho. (Instance methods Phase 3 me seekhoge.)", "Return type (int): method kis type ki value wapas deta hai. Kuch na de to void likho.", "Name (square): camelCase aur verb use karo, jaise calculateTotal ya isEven.", "Parameters (int n): inputs, type aur name ke roop me, comma se alag.", "Body: { aur } ke beech ka code.", "return: value caller ko wapas bhejta hai aur method khatam kar deta hai."]]},
  {h: ["Parameters, arguments, return and void", "Parameters, arguments, return aur void"],
   p: ["Parameters are the variables in the method definition. Arguments are the real values you pass when calling. The arguments must match the parameters in number, order and type.",
       "Parameters method ki definition me likhe variables hain. Arguments wo asli values hain jo call karte waqt dete ho. Arguments, parameters se ginti, order aur type me match hone chahiye."],
   code: `static void greet(String name) {          // void: returns nothing
    System.out.println("Hello, " + name);
}

static int add(int a, int b) {            // returns an int
    return a + b;
}

static boolean isEven(int n) {            // returns a boolean
    return n % 2 == 0;
}

static void check(int age) {
    if (age < 0) {
        System.out.println("Invalid age");
        return;                           // leaves the void method early
    }
    System.out.println("Age is " + age);
}

public static void main(String[] args) {
    greet("Rahul");                       // Hello, Rahul
    int sum = add(10, 20);                // 10 and 20 are arguments
    System.out.println(sum);              // 30
    System.out.println(isEven(7));        // false
    check(-5);                            // Invalid age
}`,
   pts: [["The returned value must match the return type. An int method cannot return a String.", "A method can return only ONE value. To send back more, return an array or an object.", "Code written after a return statement is unreachable and gives a compile error.", "If the method returns a value, every path must end with a return.", "You can store the result (int s = add(1, 2);), print it, or use it inside another call: add(add(1, 2), 3).", "You cannot define a method inside another method. Define it in the class."],
         ["Return ki hui value return type se match karni chahiye. int method String return nahi kar sakta.", "Method sirf EK value return kar sakta hai. Zyada bhejni ho to array ya object return karo.", "return statement ke baad likha code unreachable hota hai aur compile error deta hai.", "Method value return karta ho to har raste ka end return par hona chahiye.", "Result ko store kar sakte ho (int s = add(1, 2);), print kar sakte ho, ya dusre call me use kar sakte ho: add(add(1, 2), 3).", "Ek method ke andar dusra method define nahi kar sakte. Use class me define karo."]]},
  {h: ["Pass by value", "Pass by value"],
   p: ["Java is always pass by value: the method receives a COPY of the argument. For primitives (int, double and so on) the copy is the value itself, so the original never changes. For objects and arrays the copy is the reference (the address), so the method can change the object's contents, but it cannot make the caller's variable point to a different object.",
       "Java hamesha pass by value hai: method ko argument ki COPY milti hai. Primitives (int, double waghera) me copy value hi hoti hai, isliye original kabhi nahi badalta. Objects aur arrays me copy reference (address) hota hai, isliye method object ke andar ka content badal sakta hai, par caller ke variable ko kisi dusre object par point nahi kara sakta."],
   code: `static void changeNumber(int n) {
    n = 99;                       // changes only the copy
}

static void changeArray(int[] a) {
    a[0] = 99;                    // changes the real array
}

static void replaceArray(int[] a) {
    a = new int[]{7, 7, 7};       // only the local copy of the reference
}

public static void main(String[] args) {
    int x = 5;
    changeNumber(x);
    System.out.println(x);        // 5  (unchanged)

    int[] arr = {1, 2, 3};
    changeArray(arr);
    System.out.println(arr[0]);   // 99 (contents changed)

    replaceArray(arr);
    System.out.println(arr[0]);   // 99 (still the old array)
}`,
   tip: ["Quick rule: you can change what is INSIDE an object from a method, but you cannot replace the caller's variable itself.", "Quick rule: method ke andar se object ka ANDAR ka content badal sakte ho, par caller ka variable khud replace nahi kar sakte."]},
  {h: ["Method overloading", "Method overloading"],
   p: ["Overloading means writing several methods with the SAME name but DIFFERENT parameters in the same class. Java picks the right one by looking at the number, types and order of the arguments. It is also called compile-time polymorphism.",
       "Overloading ka matlab ek hi class me SAME naam ke kai methods likhna, par DIFFERENT parameters ke saath. Java arguments ki ginti, type aur order dekhkar sahi method chunta hai. Ise compile-time polymorphism bhi kehte hain."],
   code: `static int add(int a, int b) {
    return a + b;
}
static int add(int a, int b, int c) {      // different number of parameters
    return a + b + c;
}
static double add(double a, double b) {    // different types
    return a + b;
}

public static void main(String[] args) {
    System.out.println(add(2, 3));         // 5
    System.out.println(add(2, 3, 4));      // 9
    System.out.println(add(1.5, 2.5));     // 4.0
}`,
   pts: [["Overloading needs a different parameter list: a different count, different types or a different order.", "Changing only the return type is NOT enough and gives a compile error.", "If there is no exact match, Java uses the closest wider type: add(2, 3L) can call a method that takes long.", "System.out.println() itself is overloaded: it has versions for int, double, String, char and more."],
         ["Overloading ke liye parameter list alag honi chahiye: alag ginti, alag types ya alag order.", "Sirf return type badalna kaafi NAHI hai, compile error aata hai.", "Exact match na ho to Java sabse paas ka bada type use karta hai: add(2, 3L) long lene wale method ko call kar sakta hai.", "System.out.println() khud overloaded hai: int, double, String, char waghera ke versions hain."]]},
  {h: ["Default arguments (and what Java does instead)", "Default arguments (aur Java me uska vikalp)"],
   p: ["In Python or C++ you can write a default value for a parameter, such as def greet(name='Guest'). Java does NOT support default parameter values. Instead, Java programmers use three techniques. Overloading is the most common. Varargs is used when the number of values can change. A null check is used for optional objects.",
       "Python ya C++ me parameter ki default value likh sakte ho, jaise def greet(name='Guest'). Java me default parameter values NAHI hoti. Iske badle Java programmers 3 techniques use karte hain. Overloading sabse common hai. Varargs tab use hota hai jab values ki ginti badal sakti ho. Null check optional objects ke liye hota hai."],
   code: `// 1) Overloading: the short version calls the full version with defaults
static void greet(String name, String greeting) {
    System.out.println(greeting + ", " + name + "!");
}
static void greet(String name) {
    greet(name, "Hello");                  // default greeting
}
static void greet() {
    greet("Guest");                        // default name
}

// 2) Varargs: any number of values (0, 1, 2, ...)
static int sum(int... nums) {              // nums behaves like an int[]
    int total = 0;
    for (int x : nums) total += x;
    return total;
}

// 3) Null check for an optional value
static void show(String title) {
    if (title == null) title = "Untitled"; // default value
    System.out.println(title);
}

public static void main(String[] args) {
    greet();                               // Hello, Guest!
    greet("Rahul");                        // Hello, Rahul!
    greet("Rahul", "Good morning");        // Good morning, Rahul!

    System.out.println(sum());             // 0
    System.out.println(sum(5));            // 5
    System.out.println(sum(1, 2, 3, 4));   // 10
    show(null);                            // Untitled
}`,
   pts: [["Varargs rules: it must be the LAST parameter, and a method can have only one varargs parameter.", "Inside the method, varargs is a normal array, so you can use nums.length and loops.", "Prefer overloading when the defaults are simple, and varargs when the count truly varies.", "Beginners often try void greet(String name = \"Guest\"). This is a compile error in Java."],
         ["Varargs ke rules: ye AAKHRI parameter hona chahiye, aur ek method me sirf ek varargs parameter ho sakta hai.", "Method ke andar varargs normal array hota hai, isliye nums.length aur loops use kar sakte ho.", "Defaults simple ho to overloading, aur ginti sach me badalti ho to varargs prefer karo.", "Beginners aksar void greet(String name = \"Guest\") likhte hain. Java me ye compile error hai."]]},
  {h: ["Static vs instance methods, and recursion", "Static vs instance methods aur recursion"],
   p: ["A static method belongs to the class and is called with the class name or directly inside the same class. An instance method belongs to an object, so you must create an object first. A method can also call itself, which is called recursion. Every recursive method needs a base case that stops it, otherwise it ends with a StackOverflowError.",
       "Static method class ka hota hai aur class ke naam se ya usi class ke andar seedha call hota hai. Instance method object ka hota hai, isliye pehle object banana padta hai. Method khud ko bhi call kar sakta hai, ise recursion kehte hain. Har recursive method me ek base case hona chahiye jo use rokta hai, warna StackOverflowError aata hai."],
   code: `public class Calc {
    int base = 10;

    int addBase(int x) {                   // instance method
        return base + x;
    }

    static int factorial(int n) {          // recursive static method
        if (n <= 1) return 1;              // base case
        return n * factorial(n - 1);       // recursive call
    }

    public static void main(String[] args) {
        System.out.println(factorial(5));  // 120

        Calc c = new Calc();               // object needed
        System.out.println(c.addBase(5));  // 15
    }
}`,
   tip: ["A static method cannot use instance variables directly, because there is no object. This is why main (static) needs an object to call instance methods.", "Static method instance variables ko seedha use nahi kar sakta, kyunki object hota hi nahi. Isliye main (static) ko instance methods call karne ke liye object banana padta hai."]}
 ]}
};

Object.assign(TOPICS, {
2: {
 def: ["JDK, JRE and JVM are the three layers of the Java platform. The JVM runs Java bytecode, the JRE is the JVM plus the standard libraries needed to run programs, and the JDK is the JRE plus the developer tools (such as the compiler) needed to build programs.",
       "JDK, JRE aur JVM Java platform ki teen layers hain. JVM Java bytecode ko chalata hai, JRE me JVM ke saath programs chalane wali standard libraries hoti hain, aur JDK me JRE ke saath program banane wale developer tools (jaise compiler) hote hain."],
 secs: [
  {h: ["The big picture: three layers", "Bada picture: teen layers"],
   p: ["Think of the three as boxes inside each other. The JVM is the smallest box and sits at the centre. The JRE wraps the JVM and adds libraries. The JDK wraps the JRE and adds tools. So JDK contains JRE, and JRE contains JVM.",
       "Teeno ko ek dusre ke andar rakhe dibbon ki tarah socho. JVM sabse chhota dibba hai jo beech me hai. JRE JVM ko lapetta hai aur libraries jodta hai. JDK JRE ko lapetta hai aur tools jodta hai. Yani JDK me JRE hai, aur JRE me JVM."],
   pts: [["JVM = executes the program (the engine).", "JRE = JVM + core libraries (what a user needs to RUN Java programs).", "JDK = JRE + compiler and tools (what a developer needs to WRITE and BUILD Java programs).", "A normal computer user needs only a JRE. You, as a developer, install the JDK, which already contains both."],
         ["JVM = program ko execute karta hai (engine).", "JRE = JVM + core libraries (Java programs CHALANE ke liye user ko jo chahiye).", "JDK = JRE + compiler aur tools (Java programs LIKHNE aur BANANE ke liye developer ko jo chahiye).", "Aam user ko sirf JRE chahiye. Tum developer ho, isliye JDK install karo, jisme dono pehle se hote hain."]]},
  {h: ["JVM (Java Virtual Machine) in detail", "JVM (Java Virtual Machine) detail me"],
   p: ["The JVM is a virtual computer made of software. It reads bytecode (the .class file) and turns it into instructions that your real processor understands. Each operating system has its own JVM, and this is the secret behind 'write once, run anywhere': the bytecode stays the same, only the JVM changes.",
       "JVM software se bana ek virtual computer hai. Ye bytecode (.class file) padhta hai aur use aise instructions me badalta hai jo tumhara asli processor samajhta hai. Har operating system ka apna JVM hota hai, aur 'write once, run anywhere' ka raaz yahi hai: bytecode wahi rehta hai, sirf JVM badalta hai."],
   pts: [["Class loader: loads .class files into memory when the program needs them.", "Bytecode verifier: checks that the code is safe and does not break the rules. This makes Java secure.", "Interpreter: runs bytecode line by line.", "JIT compiler (Just-In-Time): finds code that runs often and compiles it to fast machine code, so Java becomes much faster after it warms up.", "Garbage collector: finds objects nobody uses any more and frees their memory automatically. You never call free() like in C.", "Memory areas: the Heap stores objects, the Stack stores method calls and local variables, and the Method Area stores class information."],
         ["Class loader: program ko jab zarurat ho tab .class files ko memory me load karta hai.", "Bytecode verifier: check karta hai ki code safe hai aur rules nahi todta. Isse Java secure banti hai.", "Interpreter: bytecode ko line by line chalata hai.", "JIT compiler (Just-In-Time): jo code baar-baar chalta hai use pehchankar tez machine code me compile kar deta hai, isliye warm-up ke baad Java kaafi tez ho jati hai.", "Garbage collector: jin objects ko ab koi use nahi karta unhe dhundhkar unki memory apne aap free kar deta hai. C ki tarah free() nahi likhna padta.", "Memory areas: Heap me objects rehte hain, Stack me method calls aur local variables, aur Method Area me class ki jaankari."]]},
  {h: ["JRE and JDK tools", "JRE aur JDK ke tools"],
   p: ["The JRE gives the JVM plus the standard class library (java.lang, java.util, java.io and so on). The JDK adds the tools you use every day.",
       "JRE JVM ke saath standard class library (java.lang, java.util, java.io waghera) deta hai. JDK usme wo tools jodta hai jo tum roz use karoge."],
   pts: [["javac: the compiler. Converts .java source into .class bytecode.", "java: the launcher. Starts the JVM and runs your class.", "javadoc: creates HTML documentation from comments.", "jar: packs many .class files into one .jar file.", "jshell: an interactive shell (Java 9+) to test one line of Java instantly.", "jdb and jconsole: debugging and monitoring tools.", "Since Java 11 the JDK is shipped as one package and a separate JRE download is no longer common."],
         ["javac: compiler. .java source ko .class bytecode me badalta hai.", "java: launcher. JVM shuru karta hai aur tumhari class chalata hai.", "javadoc: comments se HTML documentation banata hai.", "jar: kai .class files ko ek .jar file me pack karta hai.", "jshell: interactive shell (Java 9+) jisme Java ki ek line turant test kar sakte ho.", "jdb aur jconsole: debugging aur monitoring tools.", "Java 11 ke baad JDK ek hi package me aata hai aur alag JRE download ab common nahi hai."]]},
  {h: ["Compile and run flow (with commands)", "Compile aur run ka flow (commands ke saath)"],
   p: ["Your source code never runs directly. It passes two steps: compile with javac, then run with java.",
       "Tumhara source code seedha nahi chalta. Ye 2 steps se guzarta hai: javac se compile, fir java se run."],
   code: `// Hello.java
public class Hello {
    public static void main(String[] args) {
        System.out.println("JDK compiled me, JVM ran me!");
    }
}

// Terminal commands:
//   javac Hello.java      -> JDK's compiler creates Hello.class (bytecode)
//   java Hello            -> JVM loads Hello.class and runs it
//
// Check your installation:
//   java -version         -> shows the JVM / runtime version
//   javac -version        -> shows the compiler version (proves JDK is installed)
//
// Java 11+ shortcut for a single file:
//   java Hello.java       -> compiles in memory and runs`},
  {h: ["Installing the JDK and common errors", "JDK install karna aur common errors"],
   pts: [["Download a JDK (for example OpenJDK, Temurin or Oracle JDK) and prefer an LTS version such as 17 or 21.", "'javac is not recognized' means the JDK's bin folder is not in your PATH, or the JDK is not installed (only a JRE is).", "Set JAVA_HOME to the JDK folder and add %JAVA_HOME%\\bin to PATH (Windows).", "Open a NEW terminal after changing PATH, otherwise the old value is used.", "'Could not find or load main class' usually means you are in the wrong folder or the class name is spelled wrongly.", "UnsupportedClassVersionError means the code was compiled with a newer JDK than the JVM that is running it."],
         ["Koi JDK download karo (jaise OpenJDK, Temurin ya Oracle JDK) aur 17 ya 21 jaisa LTS version lo.", "'javac is not recognized' ka matlab hai JDK ka bin folder PATH me nahi hai, ya JDK install hi nahi hai (sirf JRE hai).", "JAVA_HOME ko JDK folder par set karo aur %JAVA_HOME%\\bin ko PATH me jodo (Windows).", "PATH badalne ke baad NAYA terminal kholo, warna purani value hi use hoti hai.", "'Could not find or load main class' aam taur par galat folder ya class ke naam ki spelling galat hone se aata hai.", "UnsupportedClassVersionError ka matlab code naye JDK se compile hua hai aur chalane wala JVM purana hai."]],
   tip: ["Quick check: if both java -version and javac -version work and show similar numbers, your setup is correct.", "Quick check: java -version aur javac -version dono chalein aur milte-julte numbers dikhayein, to tumhara setup sahi hai."]}
 ]},
3: {
 def: ["A Java program is a set of instructions written inside a class. Execution starts from the main method, and output is shown on the screen with System.out.println(). The first program everyone writes is Hello World.",
       "Java program ek class ke andar likhe instructions ka set hai. Execution main method se shuru hota hai, aur output screen par System.out.println() se dikhta hai. Har koi sabse pehle Hello World program likhta hai."],
 secs: [
  {h: ["Your first program: Hello World", "Tumhara pehla program: Hello World"],
   p: ["Create a file named Hello.java and type the code below. Then compile and run it. Every part of this tiny program has a job, and the next section explains each line.",
       "Hello.java naam ki file banao aur neeche ka code type karo. Fir compile aur run karo. Is chhote program ke har hisse ka ek kaam hai, aur agla section har line samjhata hai."],
   code: `public class Hello {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}

// Compile:  javac Hello.java
// Run:      java Hello
// Output:   Hello, World!`},
  {h: ["Line-by-line explanation", "Line-by-line explanation"],
   pts: [["public class Hello: declares a class named Hello. In Java all code lives inside classes. The file name must be Hello.java because the class is public.", "public static void main(String[] args): the entry point. The JVM looks for exactly this line to start the program.", "public: the JVM must be able to call it from outside.", "static: the JVM can call it without creating an object of the class.", "void: main does not return any value.", "String[] args: command line arguments passed to the program as an array of text.", "System.out.println(\"Hello, World!\"): System is a class, out is the output stream, println is the method that prints and moves to the next line.", "{ } curly braces mark the start and end of a class or method body, and every statement ends with a semicolon ;"],
         ["public class Hello: Hello naam ki class banata hai. Java me saara code classes ke andar hota hai. Class public hai isliye file ka naam Hello.java hona chahiye.", "public static void main(String[] args): entry point. JVM program shuru karne ke liye bilkul yahi line dhundta hai.", "public: JVM ise bahar se call kar sake.", "static: JVM class ka object banaye bina ise call kar sake.", "void: main koi value return nahi karta.", "String[] args: command line arguments jo program ko text ke array ki tarah milte hain.", "System.out.println(\"Hello, World!\"): System ek class hai, out output stream hai, println wo method hai jo print karke agli line par jata hai.", "{ } curly braces class ya method body ki shuruaat aur end dikhate hain, aur har statement ke end me semicolon ; lagta hai."]]},
  {h: ["print, println and printf", "print, println aur printf"],
   p: ["Java has three common ways to show output. Use print() to stay on the same line, println() to move to the next line, and printf() to format numbers and text with placeholders.",
       "Java me output dikhane ke 3 common tareeke hain. Usi line par rehne ke liye print(), agli line par jane ke liye println(), aur numbers ya text ko placeholders se format karne ke liye printf()."],
   code: `public class PrintDemo {
    public static void main(String[] args) {
        System.out.print("Hello ");
        System.out.print("Java");          // same line: Hello Java
        System.out.println();              // just a new line

        System.out.println("Line 1");
        System.out.println("Line 2");

        String name = "Rahul";
        int age = 20;
        double marks = 87.456;
        System.out.println("Name: " + name + ", Age: " + age);   // + joins text
        System.out.printf("%s is %d years old and scored %.1f%n", name, age, marks);
        // Rahul is 20 years old and scored 87.5

        System.out.println("Tab:\\tSeparated");        // \\t = tab
        System.out.println("She said \\"Hi\\"");        // \\" = a quote
        System.out.println("Path: C:\\\\Users");         // \\\\ = one backslash
    }
}`,
   pts: [["%s = text, %d = whole number, %f = decimal, %c = char, %b = boolean, %n = new line.", "%.2f prints a decimal with 2 digits after the point.", "Escape sequences: \\n new line, \\t tab, \\\" double quote, \\\\ backslash.", "The + operator joins text with other values (concatenation)."],
         ["%s = text, %d = whole number, %f = decimal, %c = char, %b = boolean, %n = new line.", "%.2f decimal ko point ke baad 2 digits ke saath print karta hai.", "Escape sequences: \\n nayi line, \\t tab, \\\" double quote, \\\\ backslash.", "+ operator text ko dusri values ke saath jodta hai (concatenation)."]]},
  {h: ["Comments", "Comments"],
   p: ["Comments are notes for humans. The compiler ignores them completely. Good comments explain WHY the code does something, not what every line does.",
       "Comments insaano ke liye notes hain. Compiler unhe bilkul ignore karta hai. Achhe comments ye batate hain ki code ye KYUN karta hai, na ki har line kya karti hai."],
   code: `// Single-line comment

/* Multi-line comment
   can cover many lines */

/**
 * Documentation comment (used by javadoc).
 * @param a the first number
 */
public class CommentDemo {
    public static void main(String[] args) {
        int x = 10;   // comment at the end of a line
        // System.out.println("This line is disabled");
        System.out.println(x);
    }
}`},
  {h: ["Rules and common errors", "Rules aur common errors"],
   pts: [["Java is case-sensitive: System is correct, system is an error. String is correct, string is an error.", "The file name must match the public class name exactly, including capital letters.", "Every statement ends with a semicolon. A missing one gives ';' expected.", "Curly braces must be balanced. Each { needs a matching }.", "Text goes in double quotes \"...\", a single character in single quotes 'a'.", "Error 'cannot find symbol' = a misspelled name or a missing import.", "Error 'class X is public, should be declared in a file named X.java' = file name and class name differ.", "Error 'Main method not found' = main is spelled or written differently from public static void main(String[] args)."],
         ["Java case-sensitive hai: System sahi hai, system error hai. String sahi hai, string error hai.", "File ka naam public class ke naam se bilkul match karna chahiye, capital letters ke saath.", "Har statement ke end me semicolon lagta hai. Chhoot jaye to ';' expected error aata hai.", "Curly braces balanced hone chahiye. Har { ke liye ek } chahiye.", "Text double quotes \"...\" me aur ek character single quotes 'a' me likhte hain.", "'cannot find symbol' error = naam ki spelling galat hai ya import chhoot gaya hai.", "'class X is public, should be declared in a file named X.java' = file aur class ka naam alag hai.", "'Main method not found' = main public static void main(String[] args) se alag likha gaya hai."]],
   tip: ["When you see many errors, fix only the FIRST one and compile again. Later errors are often caused by the first one.", "Bahut saare errors dikhein to sirf PEHLA theek karo aur dobara compile karo. Baad ke errors aksar pehle ki wajah se hote hain."]}
 ]},
4: {
 def: ["A variable is a named location in memory that stores a value which can change while the program runs. In Java every variable has a type (what kind of data it holds), a name, and a value.",
       "Variable memory me ek naam wali jagah hai jisme koi value store hoti hai jo program chalte waqt badal sakti hai. Java me har variable ka ek type (kis tarah ka data), ek naam aur ek value hoti hai."],
 secs: [
  {h: ["Declaring, initializing and assigning", "Declare, initialize aur assign karna"],
   p: ["Declaration tells Java the type and the name. Initialization gives the first value. Assignment changes the value later. You can do declaration and initialization in one line.",
       "Declaration Java ko type aur naam batata hai. Initialization pehli value deta hai. Assignment baad me value badalta hai. Declaration aur initialization ek hi line me kar sakte ho."],
   code: `int age;              // declaration
age = 20;             // initialization (first assignment)
age = 21;             // assignment (value changed)

double price = 99.5;  // declare and initialize together
String name = "Rahul";

int a = 5, b = 10, c;       // many variables of the same type
int x, y, z;
x = y = z = 0;              // all three become 0

int temp = a;               // copy one variable into another
a = b;
b = temp;                   // swap a and b
System.out.println(a + " " + b);   // 10 5`},
  {h: ["Types of variables: local, instance and static", "Variables ke types: local, instance aur static"],
   p: ["Where you declare a variable decides how long it lives and who can use it.",
       "Variable kahan declare karte ho, usi se tay hota hai ki wo kitni der rahega aur use kaun use kar sakta hai."],
   code: `public class Student {
    static String college = "ABC College";   // static: ONE copy shared by all objects
    String name;                              // instance: each object has its own copy
    int marks;

    void show() {
        int bonus = 5;                        // local: exists only inside this method
        System.out.println(name + " " + (marks + bonus));
    }

    public static void main(String[] args) {
        Student s = new Student();
        s.name = "Rahul";
        s.marks = 80;
        s.show();                             // Rahul 85
        System.out.println(Student.college);  // ABC College
    }
}`,
   pts: [["Local variable: declared inside a method or block. It exists only there and must be given a value before use. It has NO default value.", "Instance variable: declared inside a class but outside methods. Every object gets its own copy, and it has a default value (0, false or null).", "Static variable: declared with static. One copy is shared by the whole class, and it lives as long as the program.", "Parameters of a method are also local variables."],
         ["Local variable: method ya block ke andar declare hota hai. Wo sirf wahin rehta hai aur use karne se pehle value deni padti hai. Iski koi default value NAHI hoti.", "Instance variable: class ke andar par methods ke bahar declare hota hai. Har object ki apni copy hoti hai, aur iski default value hoti hai (0, false ya null).", "Static variable: static ke saath declare hota hai. Poori class ki ek hi copy hoti hai, aur wo program jitni der chalta hai utni der rehta hai.", "Method ke parameters bhi local variables hote hain."]]},
  {h: ["Naming rules and conventions", "Naming rules aur conventions"],
   pts: [["Rules (must follow): the name can contain letters, digits, _ and $.", "It cannot start with a digit: 1name is wrong, name1 is right.", "No spaces or special symbols like @ # - in the name.", "You cannot use a Java keyword (class, int, public, static, new, if, for and so on).", "Names are case-sensitive: age, Age and AGE are three different variables.", "Convention (good habit): variables use camelCase, like studentName or totalMarks.", "Constants use UPPER_CASE with underscores, like MAX_SIZE.", "Use meaningful names: totalMarks is better than tm or x."],
         ["Rules (maanne zaroori): naam me letters, digits, _ aur $ ho sakte hain.", "Naam digit se shuru nahi ho sakta: 1name galat hai, name1 sahi hai.", "Naam me space ya @ # - jaise special symbols nahi.", "Java keyword (class, int, public, static, new, if, for waghera) naam nahi bana sakte.", "Naam case-sensitive hain: age, Age aur AGE teen alag variables hain.", "Convention (achhi aadat): variables camelCase me likho, jaise studentName ya totalMarks.", "Constants UPPER_CASE me underscore ke saath likho, jaise MAX_SIZE.", "Matlab wale naam rakho: totalMarks, tm ya x se behtar hai."]]},
  {h: ["Constants with final, and var", "final se constants, aur var"],
   p: ["If a value must never change, declare it with final. Trying to change it later gives a compile error. Since Java 10 you can also write var and let the compiler decide the type from the value, but only for local variables that are initialized on the same line.",
       "Jo value kabhi nahi badalni chahiye use final se declare karo. Baad me badalne par compile error aata hai. Java 10 se var bhi likh sakte ho aur compiler value dekhkar type khud tay kar leta hai, par sirf local variables ke liye jo usi line me initialize ho."],
   code: `final double PI = 3.14159;
final int MAX_USERS = 100;
// PI = 3.14;              // error: cannot assign a value to final variable

double r = 5;
double area = PI * r * r;
System.out.println(area);   // 78.53975

var count = 10;              // compiler decides: int
var title = "Java";          // compiler decides: String
// var x;                    // error: needs a value to decide the type
// count = "hello";          // error: count is an int`},
  {h: ["Scope, default values and common mistakes", "Scope, default values aur common mistakes"],
   pts: [["Scope: a variable lives only inside the { } block where it is declared. After the closing brace it is gone.", "A for loop variable (for (int i = 0; ...)) exists only inside that loop.", "You cannot declare two variables with the same name in the same scope.", "Using a local variable before giving it a value is a compile error: 'variable might not have been initialized'.", "Default values of instance and static variables: int and long = 0, double and float = 0.0, boolean = false, char = '\\u0000', objects = null.", "Mistake: int x = 3.5; is an error because a decimal does not fit in an int. Use double or a cast.", "Mistake: using = (assign) when you mean == (compare).", "Memory trick: a variable is like a labelled box. The type is the box size, the name is the label, the value is what is inside."],
         ["Scope: variable sirf us { } block ke andar rehta hai jahan declare hua. Closing brace ke baad wo khatam ho jata hai.", "For loop ka variable (for (int i = 0; ...)) sirf usi loop ke andar rehta hai.", "Ek hi scope me same naam ke do variables declare nahi kar sakte.", "Local variable ko value diye bina use karna compile error hai: 'variable might not have been initialized'.", "Instance aur static variables ki default values: int aur long = 0, double aur float = 0.0, boolean = false, char = '\\u0000', objects = null.", "Galti: int x = 3.5; error hai kyunki decimal int me nahi aata. double ya cast use karo.", "Galti: jahan == (compare) chahiye wahan = (assign) likh dena.", "Yaad rakhne ki trick: variable ek label lagi dabbi jaisa hai. Type dabbi ka size hai, naam label hai, value andar ki cheez hai."]],
   code: `public class ScopeDemo {
    public static void main(String[] args) {
        int total = 0;
        for (int i = 1; i <= 3; i++) {   // i lives only in this loop
            int square = i * i;           // square lives only in this block
            total += square;
        }
        System.out.println(total);        // 14
        // System.out.println(i);         // error: cannot find symbol
        // System.out.println(square);    // error: cannot find symbol
    }
}`}
 ]},
5: {
 def: ["A data type tells Java what kind of value a variable can hold and how much memory it needs. Java has 8 primitive data types that store simple values directly, and non-primitive (reference) types such as String, arrays and classes that refer to objects.",
       "Data type Java ko batata hai ki variable kis tarah ki value rakh sakta hai aur use kitni memory chahiye. Java me 8 primitive data types hain jo simple values seedha store karte hain, aur non-primitive (reference) types hain jaise String, arrays aur classes jo objects ko refer karte hain."],
 secs: [
  {h: ["Two categories of data types", "Data types ki do categories"],
   p: ["Primitive types are built into the language, start with a small letter, have a fixed size and hold the value itself. Non-primitive types are created from classes, start with a capital letter, can be null, and hold a reference (address) to an object in the heap.",
       "Primitive types language me hi bane hote hain, chhote letter se shuru hote hain, unka size fixed hota hai aur wo value khud rakhte hain. Non-primitive types classes se bante hain, capital letter se shuru hote hain, null ho sakte hain, aur heap ke object ka reference (address) rakhte hain."],
   pts: [["Primitive (8): byte, short, int, long, float, double, char, boolean.", "Non-primitive: String, arrays, classes, interfaces, enums and wrapper classes such as Integer.", "Primitives cannot be null and have no methods. Objects can be null and have methods, like name.length().", "Primitives are fast and use less memory."],
         ["Primitive (8): byte, short, int, long, float, double, char, boolean.", "Non-primitive: String, arrays, classes, interfaces, enums aur wrapper classes jaise Integer.", "Primitives null nahi ho sakte aur unke methods nahi hote. Objects null ho sakte hain aur methods hote hain, jaise name.length().", "Primitives tez hote hain aur kam memory lete hain."]]},
  {h: ["The 8 primitive types: size and range", "8 primitive types: size aur range"],
   p: ["Choose the smallest type that is safe for your data, but in everyday code use int for whole numbers and double for decimals.",
       "Apne data ke liye sabse chhota safe type chuno, par roz ke code me whole numbers ke liye int aur decimals ke liye double use karo."],
   pts: [["byte: 1 byte, from -128 to 127. Used for raw data and files.", "short: 2 bytes, from -32,768 to 32,767. Rarely used.", "int: 4 bytes, from about -2.1 billion to +2.1 billion (-2,147,483,648 to 2,147,483,647). The default for whole numbers.", "long: 8 bytes, up to about 9.2 x 10^18. Use it for big numbers like phone numbers or time in milliseconds.", "float: 4 bytes, about 6 to 7 digits of precision.", "double: 8 bytes, about 15 digits of precision. The default for decimals.", "char: 2 bytes, one Unicode character, from 0 to 65,535.", "boolean: only true or false."],
         ["byte: 1 byte, -128 se 127. Raw data aur files me use hota hai.", "short: 2 bytes, -32,768 se 32,767. Kam use hota hai.", "int: 4 bytes, lagbhag -2.1 arab se +2.1 arab (-2,147,483,648 se 2,147,483,647). Whole numbers ka default.", "long: 8 bytes, lagbhag 9.2 x 10^18 tak. Bade numbers jaise phone numbers ya milliseconds me time ke liye use karo.", "float: 4 bytes, lagbhag 6 se 7 digits ki precision.", "double: 8 bytes, lagbhag 15 digits ki precision. Decimals ka default.", "char: 2 bytes, ek Unicode character, 0 se 65,535.", "boolean: sirf true ya false."]],
   code: `byte b = 100;
short s = 30000;
int count = 25;
long population = 8000000000L;     // L is required for big literals
float temperature = 36.6f;         // f is required for float
double pi = 3.14159265358979;
char grade = 'A';
boolean passed = true;

System.out.println(Integer.MAX_VALUE);   // 2147483647
System.out.println(Integer.MIN_VALUE);   // -2147483648
System.out.println(Long.MAX_VALUE);      // 9223372036854775807
System.out.println(Double.MAX_VALUE);    // 1.7976931348623157E308`},
  {h: ["Literals: how to write values", "Literals: values kaise likhte hain"],
   pts: [["Whole numbers are int by default. Add L for long: 5000000000L.", "Decimals are double by default. Add f for float: 3.5f.", "Different number systems: binary 0b1010, octal 012, hexadecimal 0xFF (all are int).", "Underscores make big numbers readable: int million = 1_000_000;", "char uses single quotes: 'A'. You can also use a number or Unicode: (char) 65 is 'A', '\\u0041' is 'A'.", "String uses double quotes: \"Java\". 'A' (char) and \"A\" (String) are different things.", "Scientific notation: 1.5e3 is 1500.0.", "boolean literals are only true and false (small letters, no quotes)."],
         ["Whole numbers by default int hote hain. long ke liye L lagao: 5000000000L.", "Decimals by default double hote hain. float ke liye f lagao: 3.5f.", "Alag number systems: binary 0b1010, octal 012, hexadecimal 0xFF (sab int hain).", "Underscore se bade numbers padhne me aasan hote hain: int million = 1_000_000;", "char single quotes use karta hai: 'A'. Number ya Unicode bhi chalta hai: (char) 65 'A' hai, '\\u0041' 'A' hai.", "String double quotes use karti hai: \"Java\". 'A' (char) aur \"A\" (String) alag cheezein hain.", "Scientific notation: 1.5e3 matlab 1500.0.", "boolean literals sirf true aur false hain (chhote letters, quotes nahi)."]]},
  {h: ["Non-primitive types: String and arrays", "Non-primitive types: String aur arrays"],
   p: ["String is the most used non-primitive type. An array holds many values of one type. Both are objects, so they can be null and they have methods or fields.",
       "String sabse zyada use hone wala non-primitive type hai. Array ek hi type ki kai values rakhta hai. Dono objects hain, isliye null ho sakte hain aur unke methods ya fields hote hain."],
   code: `String name = "Rahul";
int[] marks = {80, 90, 75};
String empty = null;                   // allowed for objects

System.out.println(name.length());     // 5  (object has methods)
System.out.println(marks.length);      // 3  (array has a length field)
// int n = null;                       // error: primitives cannot be null

// Wrapper classes turn primitives into objects
Integer boxed = 25;                    // autoboxing
int plain = boxed;                     // unboxing
System.out.println(Integer.parseInt("123") + 1);   // 124`},
  {h: ["Overflow, precision and choosing a type", "Overflow, precision aur type chunna"],
   p: ["Two classic surprises catch beginners. Whole numbers wrap around when they exceed their range (overflow). Decimals cannot store some values exactly, so tiny errors appear.",
       "Beginners ko 2 classic surprises milte hain. Whole numbers apni range se bahar jaane par ghoom jate hain (overflow). Decimals kuch values ko exactly store nahi kar paate, isliye chhoti errors aa jati hain."],
   code: `int big = Integer.MAX_VALUE;
System.out.println(big + 1);          // -2147483648 (overflow wraps around!)

long safe = Integer.MAX_VALUE + 1L;   // use long to avoid it
System.out.println(safe);             // 2147483648

System.out.println(0.1 + 0.2);        // 0.30000000000000004 (not exactly 0.3)
System.out.println(10 / 4);           // 2    (integer division)
System.out.println(10 / 4.0);         // 2.5

// For money use BigDecimal, not double.
char c = 'A';
c++;                                  // 'B'  (char is also a number)
System.out.println(c);
System.out.println((int) 'A');        // 65`,
   pts: [["Use int for ordinary whole numbers, long when a value can pass 2 billion.", "Use double for decimals. Use float only when memory is very tight.", "For exact money calculations use BigDecimal, because double has tiny rounding errors.", "Use boolean for yes/no values, char for one character and String for text.", "Do not compare decimals with ==. Compare with a small tolerance, like Math.abs(a - b) < 0.0001."],
         ["Normal whole numbers ke liye int, aur value 2 arab paar kar sakti ho to long use karo.", "Decimals ke liye double. float sirf tab jab memory bahut kam ho.", "Paise ke exact calculations ke liye BigDecimal use karo, kyunki double me chhoti rounding errors hoti hain.", "Haan/na wali values ke liye boolean, ek character ke liye char aur text ke liye String.", "Decimals ko == se compare mat karo. Chhoti tolerance se compare karo, jaise Math.abs(a - b) < 0.0001."]],
   tip: ["Remember: 0.1 + 0.2 is not exactly 0.3 in Java, Python, JavaScript or any language that uses binary floating point.", "Yaad rakho: 0.1 + 0.2 Java, Python, JavaScript ya kisi bhi aisi language me exactly 0.3 nahi hota jo binary floating point use karti hai."]}
 ]}
});

Object.assign(TOPICS, {
6: {
 def: ["Type casting means converting a value from one data type to another. Java does it automatically when it is safe (widening) and requires you to write the cast yourself when data could be lost (narrowing).",
       "Type casting ka matlab ek data type ki value ko dusre type me badalna. Jab safe ho (widening) to Java apne aap karta hai, aur jab data jane ka khatra ho (narrowing) to cast tumhe khud likhna padta hai."],
 secs: [
  {h: ["What is type casting and why do we need it?", "Type casting kya hai aur kyun chahiye?"],
   p: ["Java is a strongly typed language: every variable has one fixed type, and Java will not silently put a value into a variable that is too small for it. But real programs constantly mix types, for example an int marks value and a double percentage. Type casting is the controlled way to move a value from one type to another.",
       "Java strongly typed language hai: har variable ka ek fixed type hota hai, aur Java kisi value ko chupchap aise variable me nahi daalta jo uske liye chhota ho. Par real programs me types ka mel-jol hota rehta hai, jaise int marks aur double percentage. Type casting ek value ko ek type se dusre type me le jane ka controlled tareeka hai."],
   pts: [["Widening (implicit): small type to big type. Safe, so Java does it automatically.", "Narrowing (explicit): big type to small type. Risky, so you must write the cast with brackets: (int) 9.7", "The cast only affects the value in that expression. The original variable keeps its own type and value.", "boolean cannot be cast to or from numbers. true is not 1 in Java.", "Casting between objects (upcasting and downcasting) is a different topic you will learn in Phase 3."],
         ["Widening (implicit): chhote type se bade type me. Safe hai, isliye Java apne aap karta hai.", "Narrowing (explicit): bade type se chhote type me. Risky hai, isliye brackets se cast khud likhna padta hai: (int) 9.7", "Cast sirf us expression ki value par asar karta hai. Original variable ka type aur value waisi hi rehti hai.", "boolean ko numbers me ya numbers ko boolean me cast nahi kar sakte. Java me true ka matlab 1 nahi hota.", "Objects ke beech casting (upcasting aur downcasting) alag topic hai jo Phase 3 me seekhoge."]]},
  {h: ["Implicit casting (widening)", "Implicit casting (widening)"],
   p: ["When you move a value to a bigger type, Java converts it for you. Think of pouring water from a small glass into a big jug: nothing is lost. The order of sizes is byte, short, int, long, float, double. A char can also widen to int and above.",
       "Jab value ko bade type me daalte ho to Java khud convert kar deta hai. Socho chhote glass ka paani bade jug me daal rahe ho: kuch nahi jata. Sizes ka order hai byte, short, int, long, float, double. char bhi int ya usse bade type me widen ho sakta hai."],
   code: `byte b = 10;
short s = b;          // byte -> short
int i = s;            // short -> int
long l = i;           // int -> long
float f = l;          // long -> float
double d = f;         // float -> double
System.out.println(d);        // 10.0

int marks = 85;
double percent = marks;       // 85.0
System.out.println(percent);

char ch = 'A';
int code = ch;                // char -> int gives the Unicode number
System.out.println(code);     // 65

long big = 100;               // the int literal 100 widens to long
double half = 7 / 2;          // 3.0, NOT 3.5 (integer division happens first)
System.out.println(half);`,
   pts: [["Order: byte, short, int, long, float, double. char goes to int, long, float, double.", "No cast needed and no error, because the bigger type can hold every value of the smaller one.", "Small exception: converting a very large long to float can lose some precision, even though Java allows it.", "Widening happens in assignments, in method arguments and inside expressions."],
         ["Order: byte, short, int, long, float, double. char se int, long, float, double ki taraf jata hai.", "Cast ki zarurat nahi aur error nahi aata, kyunki bada type chhote type ki har value rakh sakta hai.", "Chhota apwad: bahut bade long ko float me badalne par thodi precision ja sakti hai, bhale hi Java allow karta hai.", "Widening assignments me, method arguments me aur expressions ke andar hoti hai."]]},
  {h: ["Explicit casting (narrowing)", "Explicit casting (narrowing)"],
   p: ["When you move a value to a smaller type, you must tell Java you accept the risk by writing the target type in brackets before the value. Java then cuts the value to fit. A decimal loses its fractional part (it is cut off, not rounded), and a whole number that is too big wraps around.",
       "Jab value ko chhote type me daalte ho to Java ko batana padta hai ki tum risk maante ho, iske liye value se pehle brackets me target type likhte ho. Java value ko fit karne ke liye kaat deta hai. Decimal ka fractional hissa kat jata hai (round nahi hota), aur bahut badi whole number ghoom jati hai."],
   code: `double price = 99.99;
int whole = (int) price;
System.out.println(whole);          // 99  (cut off, NOT rounded to 100)
System.out.println((int) -3.99);    // -3  (cut toward zero)

int big = 130;
byte small = (byte) big;
System.out.println(small);          // -126 (overflow: 130 does not fit in a byte)

long huge = 3000000000L;
int cut = (int) huge;
System.out.println(cut);            // -1294967296 (wrapped around)

int n = 66;
char c = (char) n;
System.out.println(c);              // B
System.out.println((int) 'a');      // 97

// int x = 9.7;                     // error: possible lossy conversion
int x = (int) 9.7;                  // OK with the cast`,
   pts: [["Syntax: (targetType) value", "Decimal to whole number: the digits after the point are simply dropped. (int) 3.99 is 3 and (int) -3.99 is -3.", "To round properly use Math.round(): Math.round(3.6) is 4.", "A whole number that does not fit wraps around: (byte) 128 is -128 and (byte) 130 is -126.", "The compiler error 'incompatible types: possible lossy conversion from double to int' means you forgot a cast.", "A cast does not change the original: after int whole = (int) price; the variable price is still 99.99."],
         ["Syntax: (targetType) value", "Decimal se whole number: point ke baad ke digits bas hata diye jate hain. (int) 3.99 = 3 aur (int) -3.99 = -3.", "Sahi round karne ke liye Math.round() use karo: Math.round(3.6) = 4.", "Jo whole number fit nahi hota wo ghoom jata hai: (byte) 128 = -128 aur (byte) 130 = -126.", "'incompatible types: possible lossy conversion from double to int' error ka matlab cast likhna bhul gaye.", "Cast original ko nahi badalta: int whole = (int) price; ke baad bhi price 99.99 hi rehta hai."]]},
  {h: ["Type promotion inside expressions", "Expressions ke andar type promotion"],
   p: ["When Java calculates an expression it first promotes the operands to a common type. byte, short and char are always promoted to int. If one side is long the result is long, if one is float the result is float, and if one is double the result is double. This is why 5 / 2 is 2 but 5 / 2.0 is 2.5.",
       "Jab Java expression calculate karta hai to pehle operands ko ek common type me promote karta hai. byte, short aur char hamesha int me promote hote hain. Ek side long ho to result long, float ho to float, aur double ho to double. Isi wajah se 5 / 2 = 2 par 5 / 2.0 = 2.5."],
   code: `byte a = 10, b = 20;
// byte c = a + b;          // error: a + b is an int
byte c = (byte) (a + b);    // fix 1: cast the result
int sum = a + b;            // fix 2: store it in an int

System.out.println(5 / 2);             // 2    (int / int = int)
System.out.println(5 / 2.0);           // 2.5  (int / double = double)
System.out.println((double) 5 / 2);    // 2.5  (cast happens first)
System.out.println((double) (5 / 2));  // 2.0  (5 / 2 = 2 happens first!)

char letter = 'a';
System.out.println(letter + 1);            // 98  (char + int = int)
System.out.println((char) (letter + 1));   // b

byte x = 10;
x += 5;     // allowed: compound assignment adds a hidden cast
x++;        // allowed too
// x = x + 5;   // error: needs a cast

int total = 450, subjects = 6;
double average = (double) total / subjects;
System.out.println(average);               // 75.0`,
   pts: [["Rule 1: byte, short and char become int in any arithmetic.", "Rule 2: if either side is long, float or double, the other side is promoted to that type (the biggest one wins).", "A cast has higher priority than / and *, so (double) 5 / 2 casts only the 5.", "Cast before dividing, not after: (double) a / b is right, (double) (a / b) is usually wrong.", "Compound operators (+=, -=, *=, /=) and ++ or -- include a hidden cast, which is why byte x += 5 works."],
         ["Rule 1: arithmetic me byte, short aur char int ban jate hain.", "Rule 2: kisi bhi side long, float ya double ho to dusri side usi type me promote hoti hai (sabse bada type jeetta hai).", "Cast ki priority / aur * se zyada hai, isliye (double) 5 / 2 sirf 5 ko cast karta hai.", "Divide karne se pehle cast karo, baad me nahi: (double) a / b sahi hai, (double) (a / b) aksar galat.", "Compound operators (+=, -=, *=, /=) aur ++ ya -- me hidden cast hota hai, isliye byte x += 5 chalta hai."]]},
  {h: ["Converting between text and numbers", "Text aur numbers ke beech conversion"],
   p: ["Casting does not work between String and numbers: (int) \"123\" is a compile error. Instead you use methods. parseInt, parseDouble and similar methods turn text into numbers, and String.valueOf turns anything into text. If the text is not a valid number, parseInt throws a NumberFormatException.",
       "String aur numbers ke beech casting nahi chalti: (int) \"123\" compile error hai. Iske badle methods use hote hain. parseInt, parseDouble jaise methods text ko number banate hain, aur String.valueOf kisi bhi cheez ko text banata hai. Text valid number na ho to parseInt NumberFormatException deta hai."],
   code: `int n = Integer.parseInt("123");
double d = Double.parseDouble("3.14");
long big = Long.parseLong("9000000000");
boolean flag = Boolean.parseBoolean("true");

String s1 = String.valueOf(25);
String s2 = 25 + "";               // quick trick
String s3 = Integer.toString(25);
String s4 = Double.toString(2.5);

System.out.println(n + 1);         // 124   (a real number)
System.out.println(s1 + 1);        // 251   (text joined)

try {
    int bad = Integer.parseInt("12abc");
} catch (NumberFormatException e) {
    System.out.println("Not a valid number");
}

// Rounding helpers
System.out.println(Math.round(3.5));    // 4
System.out.println(Math.round(2.4));    // 2
System.out.println(Math.floor(3.9));    // 3.0
System.out.println(Math.ceil(3.1));     // 4.0`,
   pts: [["Text to number: Integer.parseInt, Double.parseDouble, Long.parseLong, Boolean.parseBoolean.", "Number to text: String.valueOf(x), Integer.toString(x) or x + \"\".", "Spaces make parsing fail: use \" 42 \".trim() before parseInt.", "Math.round gives the nearest whole number, Math.floor always goes down and Math.ceil always goes up. These three return numbers, so cast to int if you need an int.", "A char to number: '7' - '0' gives the digit 7, because digits are stored in order in Unicode."],
         ["Text se number: Integer.parseInt, Double.parseDouble, Long.parseLong, Boolean.parseBoolean.", "Number se text: String.valueOf(x), Integer.toString(x) ya x + \"\".", "Spaces ki wajah se parsing fail hoti hai: parseInt se pehle \" 42 \".trim() karo.", "Math.round sabse paas ka whole number deta hai, Math.floor hamesha neeche aur Math.ceil hamesha upar le jata hai. Ye teeno number return karte hain, isliye int chahiye to cast karo.", "char se number: '7' - '0' digit 7 deta hai, kyunki Unicode me digits ek order me store hote hain."]]},
  {h: ["Casting objects, and common mistakes", "Objects ki casting aur common mistakes"],
   p: ["You can also cast references: treating an object as its parent type is always safe (upcasting), but treating a parent reference as a child type needs a cast and can fail at runtime with ClassCastException (downcasting). Check with instanceof first.",
       "References ko bhi cast kar sakte ho: object ko uske parent type ki tarah dekhna hamesha safe hai (upcasting), par parent reference ko child type ki tarah dekhne ke liye cast chahiye aur ye runtime me ClassCastException se fail ho sakta hai (downcasting). Pehle instanceof se check karo."],
   code: `Object o = "Java";
String s = (String) o;            // fine: o really is a String
// Integer i = (Integer) o;       // ClassCastException at runtime

if (o instanceof String t) {      // Java 16+: check and cast in one step
    System.out.println(t.length());   // 4
}

// Mistakes beginners make:
int a = 7, b = 2;
double wrong = a / b;             // 3.0   (division happened as int)
double right = (double) a / b;    // 3.5
long ms = 60 * 60 * 24 * 1000 * 365;       // overflow! (int arithmetic)
long ok  = 60L * 60 * 24 * 1000 * 365;     // L makes the math long
System.out.println(wrong + " " + right);
System.out.println(ms + " " + ok);`,
   pts: [["Forgetting that int / int is an integer division, and casting after it instead of before.", "Casting a large long or double to int or byte without checking the range.", "Expecting (int) 3.9 to give 4. It gives 3.", "Doing big calculations in int and only storing the result in long. Make one operand long first (use L).", "Trying to cast a String to a number with (int). Use Integer.parseInt instead."],
         ["Ye bhul jana ki int / int integer division hai, aur cast ko division se pehle ki jagah baad me lagana.", "Bade long ya double ko range check kiye bina int ya byte me cast karna.", "(int) 3.9 se 4 ki ummeed karna. Ye 3 deta hai.", "Badi calculation int me karna aur result sirf long me store karna. Pehle ek operand ko long banao (L lagao).", "String ko (int) se number banane ki koshish karna. Integer.parseInt use karo."]],
   tip: ["Golden rule: widening is free, narrowing needs a cast, and always think about WHICH operation happens first.", "Golden rule: widening free hai, narrowing me cast chahiye, aur hamesha socho ki PEHLE kaun sa operation hota hai."]}
 ]},
7: {
 def: ["An operator is a symbol that performs an action on one or more values (called operands) and produces a result. Java has arithmetic, relational, logical, assignment, unary, ternary and bitwise operators.",
       "Operator ek symbol hai jo ek ya zyada values (operands) par koi action karta hai aur result deta hai. Java me arithmetic, relational, logical, assignment, unary, ternary aur bitwise operators hote hain."],
 secs: [
  {h: ["Overview: the families of operators", "Overview: operators ke families"],
   p: ["Operators are the verbs of a program. Almost every line you write uses at least one. Learn the families first, then the rules for how they are combined.",
       "Operators program ke verbs hain. Tumhari likhi lagbhag har line me kam se kam ek operator hota hai. Pehle families samjho, fir unhe jodne ke rules."],
   pts: [["Arithmetic: + - * / % (calculations).", "Unary: + - ++ -- ! (work on one operand).", "Relational: == != > < >= <= (compare, result is boolean).", "Logical: && || ! (combine boolean conditions).", "Assignment: = += -= *= /= %= (store a value).", "Ternary: condition ? a : b (a short if-else).", "Bitwise and shift: & | ^ ~ << >> >>> (work on individual bits).", "Operands can be a number, a variable or a whole expression. Binary operators need two operands, unary need one, ternary needs three."],
         ["Arithmetic: + - * / % (calculations).", "Unary: + - ++ -- ! (ek operand par kaam karte hain).", "Relational: == != > < >= <= (compare, result boolean).", "Logical: && || ! (boolean conditions ko jodte hain).", "Assignment: = += -= *= /= %= (value store karte hain).", "Ternary: condition ? a : b (chhota if-else).", "Bitwise aur shift: & | ^ ~ << >> >>> (individual bits par kaam karte hain).", "Operand number, variable ya poora expression ho sakta hai. Binary operators ko do, unary ko ek aur ternary ko teen operands chahiye."]]},
  {h: ["Arithmetic operators", "Arithmetic operators"],
   p: ["The five arithmetic operators are + - * / and %. Remember two special points: dividing two integers gives an integer, and % gives the remainder of a division.",
       "Paanch arithmetic operators hain + - * / aur %. Do khaas baatein yaad rakho: do integers ko divide karne par integer milta hai, aur % division ka remainder deta hai."],
   code: `int a = 17, b = 5;
System.out.println(a + b);     // 22
System.out.println(a - b);     // 12
System.out.println(a * b);     // 85
System.out.println(a / b);     // 3    (integer division, decimal dropped)
System.out.println(a % b);     // 2    (17 = 5 * 3 + 2)
System.out.println(17 / 5.0);  // 3.4

System.out.println(-7 % 3);    // -1   (sign follows the left number)
System.out.println(5.5 % 2);   // 1.5  (% works with decimals too)
System.out.println(5.0 / 0);   // Infinity
System.out.println(0.0 / 0);   // NaN  (not a number)
// System.out.println(5 / 0);  // ArithmeticException: / by zero

int n = 4729;
System.out.println(n % 10);    // 9    last digit
System.out.println(n / 10);    // 472  remove last digit
System.out.println(n % 2 == 0 ? "even" : "odd");`,
   pts: [["Integer division drops the decimal part: 7 / 2 is 3, not 3.5. Make one side a double to get 3.5.", "Dividing an int by zero throws ArithmeticException. Dividing a double by zero gives Infinity or NaN, with no error.", "% is used for even or odd (n % 2), last digit (n % 10), cycles and wrap-around (index % size), and divisibility (n % 3 == 0).", "The + operator also joins text: \"Java\" + 17 is \"Java17\"."],
         ["Integer division decimal hissa hata deta hai: 7 / 2 = 3, 3.5 nahi. 3.5 chahiye to ek side double banao.", "int ko zero se divide karne par ArithmeticException aata hai. double ko zero se divide karne par Infinity ya NaN milta hai, error nahi.", "% ka use even/odd (n % 2), last digit (n % 10), cycles aur wrap-around (index % size), aur divisibility (n % 3 == 0) me hota hai.", "+ operator text bhi jodta hai: \"Java\" + 17 = \"Java17\"."]]},
  {h: ["Unary, increment and decrement", "Unary, increment aur decrement"],
   p: ["++ adds 1 and -- subtracts 1. The position matters. In i++ (post-increment) the OLD value is used first and then i increases. In ++i (pre-increment) i increases first and the NEW value is used.",
       "++ 1 badhata hai aur -- 1 ghatata hai. Position ka farq padta hai. i++ (post-increment) me PURANI value pehle use hoti hai aur fir i badhta hai. ++i (pre-increment) me i pehle badhta hai aur NAYI value use hoti hai."],
   code: `int i = 5;
int a = i++;    // a gets 5, then i becomes 6
int b = ++i;    // i becomes 7, then b gets 7
System.out.println(a + " " + b + " " + i);   // 5 7 7

int x = 10;
System.out.println(x++);   // prints 10, x is now 11
System.out.println(++x);   // x becomes 12, prints 12
System.out.println(x--);   // prints 12, x is now 11

int p = 5;
int q = -p;          // unary minus: -5
boolean ok = true;
System.out.println(!ok);   // false (unary NOT)

// By itself on a line, i++ and ++i do the same thing
for (int k = 0; k < 3; k++) { }`,
   pts: [["Standing alone (i++; or ++i;) both do exactly the same thing: add 1.", "The difference appears only when the value is used in the same expression, like int a = i++;", "Avoid writing tricky lines such as i = i++ + ++i; they are hard to read and easy to get wrong.", "Unary - flips the sign, unary + does nothing, and ! flips a boolean.", "++ and -- work on variables only: 5++ is an error."],
         ["Akele (i++; ya ++i;) dono bilkul same kaam karte hain: 1 badhana.", "Farq tabhi dikhta hai jab value usi expression me use ho, jaise int a = i++;", "i = i++ + ++i; jaisi uljhi lines mat likho. Inhe padhna mushkil hai aur galti aasan hai.", "Unary - sign palatta hai, unary + kuch nahi karta, aur ! boolean ko ulta karta hai.", "++ aur -- sirf variables par chalte hain: 5++ error hai."]]},
  {h: ["Relational and logical operators", "Relational aur logical operators"],
   p: ["Relational operators compare two values and give true or false. Logical operators combine those booleans: && means both must be true, || means at least one must be true, and ! flips the result. && and || are short-circuit: Java stops as soon as the answer is known, which also protects you from errors.",
       "Relational operators do values ko compare karke true ya false dete hain. Logical operators un booleans ko jodte hain: && ka matlab dono true hone chahiye, || ka matlab kam se kam ek true ho, aur ! result ko ulta karta hai. && aur || short-circuit hain: jaise hi answer pata chalta hai Java ruk jata hai, isse errors se bhi bachav hota hai."],
   code: `int age = 20;
boolean hasId = true;

System.out.println(age >= 18);              // true
System.out.println(age == 20);              // true
System.out.println(age != 20);              // false
System.out.println(age >= 18 && hasId);     // true  (both true)
System.out.println(age < 18 || hasId);      // true  (one is true)
System.out.println(!hasId);                 // false

// Short-circuit: the right side is skipped when the answer is already known
int x = 0;
if (x != 0 && 10 / x > 1) {                 // safe: 10 / x never runs
    System.out.println("big");
}
String s = null;
if (s != null && s.length() > 3) {          // safe: no NullPointerException
    System.out.println("long text");
}

// Range check: you cannot write 1 < n < 10 in Java
int n = 5;
System.out.println(n > 1 && n < 10);        // true`,
   pts: [["== compares values for primitives. For Strings and objects use equals() (== compares references).", "&& is true only if BOTH sides are true. || is true if AT LEAST ONE side is true.", "Short-circuit: in a && b, if a is false then b is not evaluated. In a || b, if a is true then b is not evaluated.", "Put the safe check first: s != null && s.length() > 3.", "& and | also work on booleans but they do NOT short-circuit. Normally use && and ||.", "1 < n < 10 is an error. Write n > 1 && n < 10."],
         ["== primitives ki values compare karta hai. Strings aur objects ke liye equals() use karo (== references compare karta hai).", "&& tabhi true hai jab DONO sides true hon. || tab true hai jab KAM SE KAM EK side true ho.", "Short-circuit: a && b me a false ho to b evaluate nahi hota. a || b me a true ho to b evaluate nahi hota.", "Safe check pehle rakho: s != null && s.length() > 3.", "& aur | booleans par bhi chalte hain par wo short-circuit NAHI karte. Aam taur par && aur || use karo.", "1 < n < 10 error hai. n > 1 && n < 10 likho."]]},
  {h: ["Assignment, compound and ternary operators", "Assignment, compound aur ternary operators"],
   p: ["= stores a value in a variable. Compound operators like += combine a calculation and an assignment in one step. The ternary operator is a compact if-else that gives back a value.",
       "= variable me value store karta hai. += jaise compound operators calculation aur assignment ko ek step me jodte hain. Ternary operator chhota if-else hai jo value wapas deta hai."],
   code: `int x = 10;
x += 5;    // x = x + 5   -> 15
x -= 3;    // x = x - 3   -> 12
x *= 2;    // x = x * 2   -> 24
x /= 5;    // x = x / 5   -> 4
x %= 3;    // x = x % 3   -> 1

int a, b, c;
a = b = c = 7;          // chain: works right to left

// Ternary: condition ? valueIfTrue : valueIfFalse
int marks = 55;
String result = (marks >= 40) ? "Pass" : "Fail";
System.out.println(result);        // Pass

int p = 7, q = 9;
int max = (p > q) ? p : q;
System.out.println(max);           // 9

String size = marks > 80 ? "high" : marks > 50 ? "medium" : "low";
System.out.println(size);          // medium`,
   pts: [["x += 5 is not exactly the same as x = x + 5: it includes a hidden cast, so byte x += 5 compiles.", "Chained assignment a = b = c = 7 works from right to left.", "Ternary needs both outcomes to have a compatible type, and it is best for short choices.", "Nested ternary works, but if it becomes hard to read use if-else instead."],
         ["x += 5 bilkul x = x + 5 jaisa nahi hai: isme hidden cast hota hai, isliye byte x += 5 compile hota hai.", "Chained assignment a = b = c = 7 right se left chalta hai.", "Ternary me dono outcomes ke types compatible hone chahiye, aur ye chhote choices ke liye best hai.", "Nested ternary chalta hai, par padhna mushkil ho jaye to if-else use karo."]]},
  {h: ["Bitwise and shift operators", "Bitwise aur shift operators"],
   p: ["Computers store numbers as bits (0 and 1). Bitwise operators work on each bit separately. You will not use them every day, but they appear in interviews, flags, encryption and very fast math.",
       "Computer numbers ko bits (0 aur 1) me store karta hai. Bitwise operators har bit par alag se kaam karte hain. Roz use nahi honge, par interviews, flags, encryption aur bahut tez maths me aate hain."],
   code: `int a = 5, b = 3;             // 5 = 101, 3 = 011
System.out.println(a & b);    // 1   (001) AND: 1 only if both bits are 1
System.out.println(a | b);    // 7   (111) OR : 1 if any bit is 1
System.out.println(a ^ b);    // 6   (110) XOR: 1 if the bits differ
System.out.println(~a);       // -6  NOT: flips every bit
System.out.println(a << 1);   // 10  shift left  = multiply by 2
System.out.println(a >> 1);   // 2   shift right = divide by 2
System.out.println(-8 >> 1);  // -4  keeps the sign bit
System.out.println(-8 >>> 28);// 15  fills with zeros (unsigned shift)

int n = 12;
System.out.println((n & 1) == 0 ? "even" : "odd");   // quick even/odd test
System.out.println(Integer.toBinaryString(n));       // 1100`,
   pts: [["& (AND), | (OR), ^ (XOR) and ~ (NOT) work bit by bit.", "<< n multiplies by 2 to the power n. >> n divides by 2 to the power n (keeps the sign).", ">>> shifts right and always fills with zero.", "x ^ x is 0, and a ^ b ^ b is a. This trick is used to find the single non-repeating number in an array.", "Integer.toBinaryString(n) shows the bits of a number."],
         ["& (AND), | (OR), ^ (XOR) aur ~ (NOT) bit-by-bit kaam karte hain.", "<< n, 2 ki power n se multiply karta hai. >> n, 2 ki power n se divide karta hai (sign rehta hai).", ">>> right shift karta hai aur hamesha zero bharta hai.", "x ^ x = 0, aur a ^ b ^ b = a. Is trick se array me akela non-repeating number nikalte hain.", "Integer.toBinaryString(n) number ke bits dikhata hai."]]},
  {h: ["Operator precedence and associativity", "Operator precedence aur associativity"],
   p: ["When an expression has many operators, precedence decides which one runs first, like BODMAS in maths. When two operators have the same precedence, associativity decides the direction: most go left to right, while assignment and unary operators go right to left. When unsure, use brackets.",
       "Expression me kai operators ho to precedence tay karta hai ki pehle kaun chalega, jaise maths me BODMAS. Do operators ki precedence same ho to associativity direction tay karti hai: zyadatar left se right chalte hain, jabki assignment aur unary operators right se left. Shak ho to brackets lagao."],
   code: `System.out.println(2 + 3 * 4);        // 14  (* before +)
System.out.println((2 + 3) * 4);      // 20  (brackets first)
System.out.println(10 - 4 - 3);       // 3   (left to right)
System.out.println(10 / 2 * 5);       // 25  (left to right)
System.out.println(8 > 5 && 2 + 2 == 4);   // true

int a, b, c;
a = b = c = 7;                        // right to left

System.out.println(1 + 2 + "a");      // 3a   (1 + 2 first)
System.out.println("a" + 1 + 2);      // a12  (text from the start)
System.out.println("a" + (1 + 2));    // a3`,
   pts: [["Highest to lowest (simplified): brackets and postfix (i++), then unary (++i, -, !, ~), then * / %, then + -, then shifts, then < > <= >=, then == !=, then &, ^, |, then &&, then ||, then ternary, and last assignment.", "Same level means left to right (except assignment, unary and ternary).", "&& has higher priority than ||, so a || b && c means a || (b && c).", "Use brackets freely. They cost nothing and make the code easier to read."],
         ["Upar se neeche (simple): brackets aur postfix (i++), fir unary (++i, -, !, ~), fir * / %, fir + -, fir shifts, fir < > <= >=, fir == !=, fir &, ^, |, fir &&, fir ||, fir ternary, aur sabse end me assignment.", "Same level par left se right chalta hai (assignment, unary aur ternary ko chhodkar).", "&& ki priority || se zyada hai, isliye a || b && c ka matlab a || (b && c).", "Brackets khul ke lagao. Ye free hain aur code padhna aasan banate hain."]],
   tip: ["Interview favourite: what does i = i++ do? The old value is saved, i is increased, and then the old value is assigned back, so i stays the same.", "Interview favourite: i = i++ kya karta hai? Purani value save hoti hai, i badhta hai, fir purani value wapas assign ho jati hai, isliye i waisa hi rehta hai."]}
 ]},
8: {
 def: ["User input means reading data typed by the person using your program. In Java the easiest way is the Scanner class (from java.util), which reads from the keyboard (System.in) and converts the text into int, double, String and other types.",
       "User input ka matlab program use karne wale ka type kiya hua data padhna. Java me sabse aasan tareeka Scanner class (java.util se) hai, jo keyboard (System.in) se padhti hai aur text ko int, double, String waghera me badal deti hai."],
 secs: [
  {h: ["Why input matters and how Scanner works", "Input kyun zaroori hai aur Scanner kaise kaam karta hai"],
   p: ["Programs with fixed values are boring. Input lets the same program work for any data: any two numbers for a calculator, any name for a greeting. Scanner breaks the typed text into tokens separated by whitespace (spaces, tabs, new lines) and gives you one token at a time.",
       "Fixed values wale programs boring hote hain. Input se wahi program kisi bhi data par chalta hai: calculator ke liye koi bhi do numbers, greeting ke liye koi bhi naam. Scanner typed text ko whitespace (spaces, tabs, new lines) se alag hue tokens me todta hai aur ek-ek token deta hai."],
   pts: [["Step 1: import java.util.Scanner;  (or import java.util.*;)", "Step 2: Scanner sc = new Scanner(System.in);  (System.in means keyboard)", "Step 3: call a method to read: sc.nextInt(), sc.next(), sc.nextLine() and so on.", "Always print a prompt first with System.out.print(), so the user knows what to type.", "The program pauses at each read method until the user presses Enter."],
         ["Step 1: import java.util.Scanner;  (ya import java.util.*;)", "Step 2: Scanner sc = new Scanner(System.in);  (System.in matlab keyboard)", "Step 3: padhne ke liye method call karo: sc.nextInt(), sc.next(), sc.nextLine() waghera.", "Pehle System.out.print() se prompt dikhao, taaki user ko pata chale kya type karna hai.", "Har read method par program ruka rehta hai jab tak user Enter na dabaye."]]},
  {h: ["Reading every data type", "Har data type ko padhna"],
   p: ["Scanner has one method for each type. There is no nextChar(), so to read a single character you read a word with next() and take its first character.",
       "Scanner me har type ke liye alag method hai. nextChar() nahi hota, isliye ek character padhne ke liye next() se word padho aur uska pehla character lo."],
   code: `import java.util.Scanner;

public class InputDemo {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("Enter your age: ");
        int age = sc.nextInt();

        System.out.print("Enter your height in meters: ");
        double height = sc.nextDouble();

        System.out.print("Enter your first name: ");
        String first = sc.next();              // one word only

        System.out.print("Enter a grade letter: ");
        char grade = sc.next().charAt(0);      // first character of the word

        System.out.print("Are you a student (true/false)? ");
        boolean student = sc.nextBoolean();

        System.out.println(first + ", " + age + ", " + height + ", " + grade + ", " + student);
        sc.close();
    }
}`,
   pts: [["nextInt(), nextLong(), nextDouble(), nextFloat(), nextBoolean(): read one value of that type.", "next(): reads one word (stops at a space).", "nextLine(): reads the whole line, including spaces, until Enter.", "char: sc.next().charAt(0).", "Typing text where a number is expected throws InputMismatchException."],
         ["nextInt(), nextLong(), nextDouble(), nextFloat(), nextBoolean(): us type ki ek value padhte hain.", "next(): ek word padhta hai (space par ruk jata hai).", "nextLine(): poori line padhta hai, spaces ke saath, Enter tak.", "char: sc.next().charAt(0).", "Jahan number chahiye wahan text type karne par InputMismatchException aata hai."]]},
  {h: ["The nextLine() trap (very common bug)", "nextLine() ka trap (bahut common bug)"],
   p: ["After nextInt(), nextDouble() or next(), the Enter key you pressed is still waiting in the input. If you now call nextLine(), it reads that leftover Enter as an empty line and your program seems to skip the question. The fix is to call sc.nextLine() once to throw the leftover away.",
       "nextInt(), nextDouble() ya next() ke baad, jo Enter tumne dabaya wo input me abhi bhi bacha hota hai. Ab nextLine() call karoge to wo bacha hua Enter ek khali line ki tarah padh leta hai aur lagta hai ki program tumhara question skip kar gaya. Fix ye hai ki ek baar sc.nextLine() call karke bacha hua Enter hata do."],
   code: `Scanner sc = new Scanner(System.in);

System.out.print("Age: ");
int age = sc.nextInt();        // user types 20 then Enter; the Enter stays behind

// WRONG: String name = sc.nextLine();   // would read the empty leftover line
sc.nextLine();                 // FIX: consume the leftover Enter

System.out.print("Full name: ");
String name = sc.nextLine();   // now it waits for the real name

System.out.println(name + " is " + age);

// Another safe style: read everything as lines and convert
// int age2 = Integer.parseInt(sc.nextLine().trim());`,
   tip: ["Rule: whenever you read a line with nextLine() right after a number, add one extra sc.nextLine() in between.", "Rule: jab bhi number ke turant baad nextLine() se line padhni ho, beech me ek extra sc.nextLine() laga do."]},
  {h: ["Reading many values", "Kai values padhna"],
   p: ["Often the first number tells how many values follow. You can type values on one line separated by spaces or on separate lines, because Scanner treats both the same way. This is exactly how test input works in the Coding Arena.",
       "Aksar pehla number batata hai ki aage kitni values hain. Values ek line me spaces se alag karke ya alag lines me type kar sakte ho, kyunki Scanner dono ko ek jaisa maanta hai. Coding Arena me test input bilkul isi tarah kaam karta hai."],
   code: `Scanner sc = new Scanner(System.in);

// Input:  5
//         10 20 30 40 50
int n = sc.nextInt();
int sum = 0;
int max = Integer.MIN_VALUE;
for (int i = 0; i < n; i++) {
    int x = sc.nextInt();
    sum += x;
    if (x > max) max = x;
}
System.out.println("Sum = " + sum + ", Max = " + max);   // Sum = 150, Max = 50

// Read until the input ends (no count given)
// int total = 0;
// while (sc.hasNextInt()) {
//     total += sc.nextInt();
// }

// Read a whole sentence and split it
sc.nextLine();
String line = sc.nextLine();            // e.g. "I love Java"
String[] words = line.split(" ");
System.out.println(words.length);       // 3`},
  {h: ["Validating input safely", "Input ko safely validate karna"],
   p: ["Users make mistakes. The hasNext methods (hasNextInt, hasNextDouble) let you CHECK what is coming before you read it, so the program does not crash. Combine them with a loop to keep asking until the answer is valid.",
       "Users galtiyan karte hain. hasNext methods (hasNextInt, hasNextDouble) padhne se PEHLE check karne dete hain ki kya aa raha hai, taaki program crash na ho. Inhe loop ke saath jodkar tab tak poochho jab tak jawab valid na ho."],
   code: `Scanner sc = new Scanner(System.in);
int n;
while (true) {
    System.out.print("Enter a number between 1 and 10: ");
    if (!sc.hasNextInt()) {
        System.out.println("That is not a number!");
        sc.next();                      // throw away the bad word
        continue;
    }
    n = sc.nextInt();
    if (n >= 1 && n <= 10) break;       // valid: leave the loop
    System.out.println("Out of range, try again.");
}
System.out.println("You chose " + n);

// The same idea with try-catch
try {
    int x = Integer.parseInt(sc.next());
    System.out.println(x * 2);
} catch (NumberFormatException e) {
    System.out.println("Please type digits only.");
}`,
   pts: [["hasNextInt() returns true if the next token is an int, and it does NOT consume it.", "If the input is bad, call sc.next() (or nextLine()) to discard it, otherwise the loop repeats forever.", "InputMismatchException is thrown when nextInt() meets text. You can catch it with try-catch.", "Always check ranges too: negative numbers, zero and too big values."],
         ["hasNextInt() true deta hai agar agla token int hai, aur ye use consume NAHI karta.", "Input galat ho to sc.next() (ya nextLine()) se use hata do, warna loop hamesha repeat hota rahega.", "nextInt() ko text milta hai to InputMismatchException aata hai. Use try-catch se pakad sakte ho.", "Range bhi check karo: negative numbers, zero aur bahut bade values."]]},
  {h: ["Other ways to read input", "Input padhne ke dusre tareeke"],
   p: ["Scanner is perfect for learning. For very large inputs BufferedReader is much faster. You can also pass values when you start the program, called command-line arguments, which arrive in the args array of main.",
       "Seekhne ke liye Scanner perfect hai. Bahut bade inputs ke liye BufferedReader kaafi tez hai. Program shuru karte waqt bhi values de sakte ho, jinhe command-line arguments kehte hain, aur wo main ke args array me aati hain."],
   code: `// 1) BufferedReader: fast, reads whole lines
import java.io.*;

public class Fast {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int n = Integer.parseInt(br.readLine().trim());
        String[] parts = br.readLine().trim().split(" ");
        int sum = 0;
        for (String p : parts) sum += Integer.parseInt(p);
        System.out.println(n + " numbers, sum = " + sum);
    }
}

// 2) Command-line arguments
public class Greet {
    public static void main(String[] args) {
        if (args.length < 2) {
            System.out.println("Usage: java Greet name age");
            return;
        }
        System.out.println("Hello " + args[0] + ", age " + Integer.parseInt(args[1]));
    }
}
// Run:  java Greet Rahul 20     ->  Hello Rahul, age 20`,
   pts: [["BufferedReader.readLine() returns the full line as a String (or null at the end), so convert numbers yourself with parseInt.", "BufferedReader methods can throw IOException, so main needs throws IOException.", "args[0] is the first argument, and args.length tells how many were given.", "Closing a Scanner that reads System.in also closes the keyboard stream. In small programs that is fine, but create only ONE Scanner for System.in and reuse it everywhere.", "Do not create a new Scanner inside a loop or inside every method."],
         ["BufferedReader.readLine() poori line String ki tarah deta hai (end par null), isliye numbers khud parseInt se badlo.", "BufferedReader ke methods IOException de sakte hain, isliye main me throws IOException likhna padta hai.", "args[0] pehla argument hai, aur args.length batata hai kitne diye gaye.", "System.in padhne wale Scanner ko close karne se keyboard stream bhi close ho jati hai. Chhote programs me chalta hai, par System.in ke liye sirf EK Scanner banao aur har jagah use hi use karo.", "Loop ke andar ya har method me naya Scanner mat banao."]],
   tip: ["In the Coding Arena your program receives test input exactly like keyboard input, so the same Scanner code works there.", "Coding Arena me tumhare program ko test input bilkul keyboard input ki tarah milta hai, isliye wahi Scanner code wahan bhi chalta hai."]}
 ]},
9: {
 def: ["The if-else statement lets a program make decisions. It checks a boolean condition, runs one block of code when the condition is true, and can run a different block when it is false.",
       "if-else statement program ko decisions lene deta hai. Ye ek boolean condition check karta hai, condition true ho to ek block chalata hai, aur false ho to dusra block chala sakta hai."],
 secs: [
  {h: ["Why decisions? The idea of control flow", "Decisions kyun? Control flow ka idea"],
   p: ["Without decisions a program runs the same lines in the same order every time. With if-else it reacts to data: a login succeeds or fails, a student passes or fails, a shop gives a discount or not. Every if needs a condition that is a boolean (true or false).",
       "Decisions ke bina program har baar same lines same order me chalata hai. if-else se wo data ke hisaab se react karta hai: login ho ya fail, student pass ho ya fail, shop discount de ya na de. Har if ko ek condition chahiye jo boolean (true ya false) ho."],
   pts: [["Condition sources: comparisons (age >= 18), boolean variables (isLoggedIn), method results (list.isEmpty()) and combinations with && || !.", "Java needs a real boolean. if (1) or if (name) is an error, unlike C or JavaScript.", "The block { } runs only when the condition is true. If there is no else, nothing happens when it is false.", "Always use braces { }, even for one line. It prevents many bugs."],
         ["Condition kahan se aati hai: comparisons (age >= 18), boolean variables (isLoggedIn), method results (list.isEmpty()) aur && || ! se bane combinations.", "Java ko asli boolean chahiye. if (1) ya if (name) error hai, C ya JavaScript ki tarah nahi.", "Block { } tabhi chalta hai jab condition true ho. else na ho to false hone par kuch nahi hota.", "Braces { } hamesha lagao, ek line ke liye bhi. Isse kai bugs rukte hain."]]},
  {h: ["if and if-else", "if aur if-else"],
   p: ["Use a plain if when you only need to act on the true case. Add else when there is a different action for the false case. Exactly one of the two blocks runs.",
       "Sirf true case par kaam karna ho to simple if use karo. False case ke liye alag kaam ho to else jodo. Dono me se bilkul ek block chalta hai."],
   code: `int age = 17;

if (age >= 18) {
    System.out.println("You can vote");
}

if (age >= 18) {
    System.out.println("You can vote");
} else {
    System.out.println("Too young to vote");
}
// Output: Too young to vote

int n = -4;
if (n % 2 == 0) {
    System.out.println(n + " is even");
} else {
    System.out.println(n + " is odd");
}
// Output: -4 is even

boolean isRaining = true;
if (isRaining) {                 // no need to write isRaining == true
    System.out.println("Take an umbrella");
}`,
   pts: [["Write if (flag) instead of if (flag == true), and if (!flag) instead of if (flag == false).", "Negative numbers: -4 % 2 is 0 (even) but -3 % 2 is -1, so test n % 2 == 0 for even rather than n % 2 == 1 for odd.", "A variable declared inside an if block is not visible outside it."],
         ["if (flag == true) ki jagah if (flag) aur if (flag == false) ki jagah if (!flag) likho.", "Negative numbers: -4 % 2 = 0 (even) par -3 % 2 = -1, isliye odd ke liye n % 2 == 1 ki jagah even ke liye n % 2 == 0 test karo.", "if block ke andar declare hua variable uske bahar dikhta nahi."]]},
  {h: ["The else-if ladder", "else-if ladder"],
   p: ["When there are more than two outcomes, chain conditions with else if. Java checks them from top to bottom and runs ONLY the first block whose condition is true, then skips the rest. So the order of conditions matters a lot.",
       "Do se zyada outcomes ho to conditions ko else if se chain karo. Java unhe upar se neeche check karta hai aur SIRF pehla true hone wala block chalata hai, baaki skip kar deta hai. Isliye conditions ka order bahut matter karta hai."],
   code: `int marks = 72;
String grade;

if (marks >= 90) {
    grade = "A+";
} else if (marks >= 75) {
    grade = "A";
} else if (marks >= 60) {
    grade = "B";
} else if (marks >= 40) {
    grade = "C";
} else {
    grade = "Fail";
}
System.out.println("Grade: " + grade);    // Grade: B

// Order matters. WRONG order: 95 would get "C" because the first test matches.
// if (marks >= 40) grade = "C";
// else if (marks >= 90) grade = "A+";

int n = 0;
if (n > 0) System.out.println("Positive");
else if (n < 0) System.out.println("Negative");
else System.out.println("Zero");          // Zero`,
   pts: [["Put the most specific or highest conditions first.", "Each else if only runs when all the conditions above it were false, so you do not need to repeat them (marks >= 60 already means marks < 75 here).", "The final else is the 'everything else' case and is optional.", "If you test the same variable against fixed values (1, 2, 3...), a switch is often cleaner."],
         ["Sabse specific ya sabse bade conditions pehle rakho.", "Har else if tabhi chalta hai jab uske upar ki saari conditions false ho, isliye unhe dohrane ki zarurat nahi (yahan marks >= 60 ka matlab pehle se marks < 75 hai).", "Aakhri else 'baaki sab' case hai aur optional hai.", "Ek hi variable ko fixed values (1, 2, 3...) se compare karna ho to switch aksar saaf rehta hai."]]},
  {h: ["Nested if and combining conditions", "Nested if aur conditions ko jodna"],
   p: ["An if inside another if is called a nested if. It works, but too much nesting becomes hard to read. Often you can replace it with && or by returning early (a guard clause).",
       "Ek if ke andar dusra if nested if kehlata hai. Ye chalta hai, par zyada nesting padhna mushkil bana deti hai. Aksar use && se ya pehle hi return karke (guard clause) badal sakte ho."],
   code: `int age = 25;
boolean hasLicense = true;

// Nested if
if (age >= 18) {
    if (hasLicense) {
        System.out.println("You can drive");
    } else {
        System.out.println("Get a license first");
    }
} else {
    System.out.println("Too young");
}

// Same logic, flatter, with &&
if (age >= 18 && hasLicense) {
    System.out.println("You can drive");
}

// Guard clauses: handle the bad cases first and return early
static String check(int age, boolean hasLicense) {
    if (age < 18) return "Too young";
    if (!hasLicense) return "Get a license first";
    return "You can drive";
}`,
   pts: [["Use && when BOTH conditions must be true and || when ANY one is enough.", "Use brackets when mixing: (a || b) && c is different from a || (b && c).", "Keep nesting to two or three levels. If it goes deeper, split the code into methods.", "A guard clause (return early) removes the need for else blocks and keeps the main path simple."],
         ["DONO conditions true chahiye to && aur KOI EK kaafi ho to || use karo.", "Mix karte waqt brackets lagao: (a || b) && c aur a || (b && c) alag hain.", "Nesting do ya teen level tak rakho. Aur gehri ho jaye to code ko methods me todo.", "Guard clause (jaldi return) else blocks ki zarurat hata deta hai aur main raasta simple rakhta hai."]]},
  {h: ["Classic examples: leap year, largest of three, login", "Classic examples: leap year, teen me se bada, login"],
   p: ["These small problems appear in almost every exam. Read the logic carefully and try to write each one yourself before looking at the answer.",
       "Ye chhote problems lagbhag har exam me aate hain. Logic dhyan se padho aur answer dekhne se pehle har ek ko khud likhne ki koshish karo."],
   code: `// 1) Leap year: divisible by 4, but not by 100, unless also by 400
int year = 2100;
boolean leap = (year % 4 == 0 && year % 100 != 0) || year % 400 == 0;
System.out.println(year + (leap ? " is" : " is not") + " a leap year");  // is not

// 2) Largest of three numbers
int a = 12, b = 45, c = 30;
int max;
if (a >= b && a >= c) max = a;
else if (b >= a && b >= c) max = b;
else max = c;
System.out.println("Largest = " + max);     // 45

// 3) Login check (Strings are compared with equals)
String user = "admin", pass = "1234";
if (user.equals("admin") && pass.equals("1234")) {
    System.out.println("Welcome!");
} else {
    System.out.println("Wrong username or password");
}

// 4) Simple discount
double bill = 1200;
double discount = 0;
if (bill >= 1000) discount = bill * 0.10;
else if (bill >= 500) discount = bill * 0.05;
System.out.println("Pay: " + (bill - discount));   // Pay: 1080.0`},
  {h: ["Common mistakes with if", "if ke saath common mistakes"],
   p: ["Most beginner bugs with if come from a handful of mistakes. Learn to recognise them now and you will save hours of debugging.",
       "if ke saath zyadatar beginner bugs kuch gine-chune galtiyon se aate hain. Inhe abhi pehchanna seekh lo to debugging ke ghante bach jayenge."],
   code: `int x = 5;

// 1) = (assign) instead of == (compare)
// if (x = 5) { }              // error: int cannot be converted to boolean
if (x == 5) { }                // correct

// 2) A stray semicolon ends the if immediately
if (x > 3);                    // BUG: this semicolon is the whole if body
{
    System.out.println("Always prints!");
}

// 3) Comparing Strings with ==
String a = new String("hi");
System.out.println(a == "hi");        // false (different objects)
System.out.println(a.equals("hi"));   // true  (same text)

// 4) Comparing decimals with ==
double d = 0.1 + 0.2;
System.out.println(d == 0.3);                      // false
System.out.println(Math.abs(d - 0.3) < 0.0001);    // true

// 5) Dangling else: it belongs to the NEAREST if, whatever the indentation
int p = 1, q = -1;
if (p > 0)
    if (q > 0) System.out.println("both positive");
else System.out.println("this else belongs to the INNER if");`,
   pts: [["Use == for comparing and = for assigning. Java stops most of these mistakes with an error for ints, but not for boolean variables.", "A semicolon right after if (...) makes the if do nothing.", "Compare Strings with equals() or equalsIgnoreCase(), never with ==.", "Never compare double or float with ==. Compare the difference with a tiny number.", "Always use braces so that the else clearly belongs to the if you mean.", "Check the boundaries: should it be > or >=? Test the exact values 17, 18 and 19 for an age check."],
         ["Compare ke liye == aur assign ke liye = use karo. int ke liye Java zyadatar aisi galtiyon par error de deta hai, par boolean variables ke liye nahi.", "if (...) ke turant baad semicolon lagane se if kuch nahi karta.", "Strings ko equals() ya equalsIgnoreCase() se compare karo, == se kabhi nahi.", "double ya float ko == se kabhi compare mat karo. Unke difference ko ek chhote number se compare karo.", "Braces hamesha lagao taaki else saaf tarah usi if ka ho jo tum chahte ho.", "Boundaries check karo: > chahiye ya >=? Age check ke liye exact values 17, 18 aur 19 test karo."]],
   tip: ["When a condition behaves strangely, print its parts with System.out.println before the if and see the real values.", "Condition ajeeb behave kare to if se pehle uske hisse System.out.println se print karke asli values dekho."]}
 ]}
});

Object.assign(TOPICS, {
10: {
 def: ["The switch statement compares one value against a list of fixed options (cases) and runs the block of the case that matches. It is a cleaner alternative to a long if-else-if chain when you test the same variable many times.",
       "switch statement ek value ko fixed options (cases) ki list se compare karta hai aur jo case match kare uska block chalata hai. Jab ek hi variable ko baar-baar test karna ho to lambe if-else-if chain ka ye saaf vikalp hai."],
 secs: [
  {h: ["When to use switch", "switch kab use karein"],
   p: ["Use switch when one variable can take several known values and each value needs a different action: day of the week, menu choice, month number, a command typed by the user. Use if-else when you need ranges (marks >= 90) or complex conditions with && and ||.",
       "switch tab use karo jab ek variable kai jaani-pehchani values le sakta ho aur har value ke liye alag kaam ho: hafte ka din, menu ka choice, mahine ka number, user ka type kiya command. Ranges (marks >= 90) ya && aur || wali complex conditions ke liye if-else use karo."],
   pts: [["The value being checked goes in switch ( ... ). Each possible value is a case label followed by a colon.", "Allowed types: byte, short, int, char, their wrapper classes, String and enum. long, float, double and boolean are NOT allowed.", "Case values must be constants (literals or final variables) and must be unique.", "default runs when no case matches. It is optional but strongly recommended.", "Java 14 and newer also has a modern arrow form, shown later in this lesson."],
         ["Jis value ko check karna hai wo switch ( ... ) me jati hai. Har possible value ek case label hai jiske baad colon aata hai.", "Allowed types: byte, short, int, char, unke wrapper classes, String aur enum. long, float, double aur boolean ALLOWED NAHI hain.", "Case values constants (literals ya final variables) aur unique honi chahiye.", "default tab chalta hai jab koi case match na kare. Ye optional hai par lagana zaroor chahiye.", "Java 14 aur naye versions me modern arrow form bhi hai, jo is lesson me aage dikhaya gaya hai."]]},
  {h: ["Classic switch with break", "break ke saath classic switch"],
   p: ["Java jumps to the first matching case and keeps running downwards. The break statement stops it and leaves the switch. If no case matches, default runs.",
       "Java pehle matching case par jata hai aur neeche ki taraf chalta rehta hai. break statement use rok deta hai aur switch se bahar nikalta hai. Koi case match na kare to default chalta hai."],
   code: `int day = 3;

switch (day) {
    case 1:
        System.out.println("Monday");
        break;
    case 2:
        System.out.println("Tuesday");
        break;
    case 3:
        System.out.println("Wednesday");
        break;
    case 4:
        System.out.println("Thursday");
        break;
    case 5:
        System.out.println("Friday");
        break;
    default:
        System.out.println("Weekend or invalid day");
}
// Output: Wednesday

// A simple calculator with char and switch
double a = 10, b = 4;
char op = '/';
switch (op) {
    case '+': System.out.println(a + b); break;
    case '-': System.out.println(a - b); break;
    case '*': System.out.println(a * b); break;
    case '/':
        if (b == 0) System.out.println("Cannot divide by zero");
        else System.out.println(a / b);          // 2.5
        break;
    default:
        System.out.println("Invalid operator");
}`},
  {h: ["Fall-through: what happens without break", "Fall-through: break na ho to kya hota hai"],
   p: ["If you forget break, Java does not stop at the end of the matching case. It runs the next case as well, and the next, until it finds a break or reaches the end. This is called fall-through. It is the most common switch bug, but it is also useful when you WANT several cases to share one action.",
       "break bhul jao to Java matching case ke end par nahi rukta. Wo agla case bhi chalata hai, aur uske baad wala bhi, jab tak break na mile ya end na aa jaye. Ise fall-through kehte hain. Ye switch ka sabse common bug hai, par kaam ki cheez bhi hai jab tum CHAHTE ho ki kai cases ek hi kaam share karein."],
   code: `// 1) Accidental fall-through (bug)
int n = 2;
switch (n) {
    case 1: System.out.println("one");
    case 2: System.out.println("two");
    case 3: System.out.println("three");
    case 4: System.out.println("four"); break;
    default: System.out.println("other");
}
// Output: two, three, four  (it fell through until the break)

// 2) Intentional fall-through: grouped cases share one action
char ch = 'e';
switch (ch) {
    case 'a': case 'e': case 'i': case 'o': case 'u':
        System.out.println("Vowel");
        break;
    default:
        System.out.println("Not a vowel");
}
// Output: Vowel

// 3) Days in a month
int month = 4;
boolean leapYear = false;
int days;
switch (month) {
    case 4: case 6: case 9: case 11:
        days = 30;
        break;
    case 2:
        days = leapYear ? 29 : 28;
        break;
    default:
        days = 31;
}
System.out.println(days);        // 30`,
   tip: ["If several cases print together, you forgot a break. If you do it on purpose, add a comment like // fall through so the next reader knows.", "Kai cases ek saath print ho rahe hon to break bhul gaye ho. Jaan-bujhkar kiya ho to // fall through jaisa comment likh do taaki agla padhne wala samjhe."]},
  {h: ["The default case", "default case"],
   p: ["default handles every value that has no case of its own. It is usually written last, but Java allows it anywhere. If it is not last, it also needs a break, otherwise it falls through into the next case. Always include it, even if only to print an error, because it catches values you did not expect.",
       "default un sab values ko sambhalta hai jinka apna case nahi hota. Ye aam taur par last me likha jata hai, par Java ise kahin bhi likhne deta hai. Last me na ho to isme bhi break chahiye, warna ye agle case me fall through karta hai. Hamesha lagao, chahe sirf error print karne ke liye, kyunki ye wo values pakadta hai jinki tumne ummeed nahi ki thi."],
   code: `int choice = 9;
switch (choice) {
    case 1:
        System.out.println("Start");
        break;
    case 2:
        System.out.println("Settings");
        break;
    default:
        System.out.println("Invalid choice, please enter 1 or 2");
        break;
}
// Output: Invalid choice, please enter 1 or 2`},
  {h: ["switch with String and enum", "String aur enum ke saath switch"],
   p: ["Since Java 7 you can switch on a String. The comparison uses equals(), so it is case-sensitive: \"Stop\" and \"stop\" are different. Convert with toLowerCase() first when users type the text. An enum is a fixed list of named constants and works very well with switch, and inside an enum switch you write the constant name without the enum name.",
       "Java 7 se String par bhi switch kar sakte ho. Comparison equals() se hota hai, isliye case-sensitive hai: \"Stop\" aur \"stop\" alag hain. User text type karta ho to pehle toLowerCase() karo. enum naam wali constants ki fixed list hai aur switch ke saath bahut achha chalta hai, aur enum switch ke andar constant ka naam bina enum ke naam ke likhte hain."],
   code: `public class SwitchTypes {
    enum Level { LOW, MEDIUM, HIGH }

    public static void main(String[] args) {
        String command = "Stop";
        switch (command.toLowerCase()) {          // normalise the text first
            case "start":
                System.out.println("Starting...");
                break;
            case "stop":
                System.out.println("Stopping...");
                break;
            default:
                System.out.println("Unknown command");
        }
        // Output: Stopping...

        Level level = Level.MEDIUM;
        switch (level) {
            case LOW:
                System.out.println("Relax");
                break;
            case MEDIUM:
                System.out.println("Be careful");
                break;
            case HIGH:
                System.out.println("Danger!");
                break;
        }
        // Output: Be careful
    }
}`,
   pts: [["Switching on a null String throws NullPointerException. Check for null first.", "Switch on a String compares text with equals(), so spelling and capital letters must match exactly.", "With enum, the compiler can warn you when you forget a constant."],
         ["null String par switch karne se NullPointerException aata hai. Pehle null check karo.", "String par switch equals() se text compare karta hai, isliye spelling aur capital letters bilkul match honi chahiye.", "enum ke saath compiler tumhe bata sakta hai jab koi constant likhna bhul jao."]]},
  {h: ["Modern switch (Java 14 and newer)", "Modern switch (Java 14 aur naya)"],
   p: ["The modern arrow form (->) removes the two biggest problems of the classic switch: there is no fall-through, so you never need break, and several values can share one case with commas. A switch can also be an expression that gives back a value, which you can store in a variable. For a block with several lines use yield to return the value.",
       "Modern arrow form (->) classic switch ki do sabse badi problems hata deta hai: fall-through nahi hota, isliye break ki zarurat nahi, aur kai values ek case me comma se share ho sakti hain. switch ek expression bhi ban sakta hai jo value wapas deta hai, jise variable me store kar sakte ho. Kai lines wale block ke liye value return karne ko yield use hota hai."],
   code: `int day = 6;

// Statement form: no break needed, no fall-through
switch (day) {
    case 1, 2, 3, 4, 5 -> System.out.println("Weekday");
    case 6, 7 -> System.out.println("Weekend");
    default -> System.out.println("Invalid day");
}
// Output: Weekend

// Expression form: the switch gives back a value
String type = switch (day) {
    case 1, 2, 3, 4, 5 -> "Weekday";
    case 6, 7 -> "Weekend";
    default -> "Invalid day";
};
System.out.println(type);          // Weekend

// yield: return a value from a multi-line block
int score = 85;
String grade = switch (score / 10) {
    case 10, 9 -> "A";
    case 8 -> "B";
    case 7 -> {
        System.out.println("Almost a B");
        yield "C";
    }
    default -> "Fail";
};
System.out.println(grade);         // B`,
   pts: [["Arrow form never falls through, so you cannot forget break.", "Several labels share one case: case 1, 2, 3 ->", "A switch expression must cover every possible value, so a default (or all enum constants) is required.", "Mixing the two styles (: and ->) in the same switch is not allowed.", "Use the modern form whenever your Java version supports it. Check with java -version."],
         ["Arrow form me fall-through nahi hota, isliye break bhulne ka sawal hi nahi.", "Kai labels ek case share karte hain: case 1, 2, 3 ->", "switch expression ko har possible value cover karni padti hai, isliye default (ya saare enum constants) zaroori hai.", "Ek hi switch me dono styles (: aur ->) mix karna allowed nahi.", "Jab bhi tumhara Java version support kare, modern form use karo. java -version se check karo."]]},
  {h: ["switch vs if-else, and common mistakes", "switch vs if-else, aur common mistakes"],
   pts: [["Prefer switch when you compare ONE variable against several exact values.", "Prefer if-else for ranges (age > 18), for conditions on several variables and for boolean tests.", "Mistake: forgetting break in the classic form and getting extra output.", "Mistake: duplicate case values, which is a compile error.", "Mistake: using a variable (non-final) as a case value. It must be a constant.", "Mistake: trying to switch on a double, long or boolean. Use if-else instead.", "Mistake: forgetting default and silently doing nothing for bad input.", "Switch on ranges trick: switch (marks / 10) turns 90 to 100 into 9 and 10, 80 to 89 into 8, and so on."],
         ["ek variable ko kai exact values se compare karna ho to switch prefer karo.", "Ranges (age > 18), kai variables par conditions aur boolean tests ke liye if-else prefer karo.", "Galti: classic form me break bhul jana aur extra output aana.", "Galti: duplicate case values, jo compile error hai.", "Galti: non-final variable ko case value banana. Wo constant honi chahiye.", "Galti: double, long ya boolean par switch karne ki koshish. Iske liye if-else use karo.", "Galti: default bhul jana aur galat input par chupchap kuch na karna.", "Ranges ki trick: switch (marks / 10) 90 se 100 ko 9 aur 10 bana deta hai, 80 se 89 ko 8, aur aise hi."]],
   tip: ["Quick test for the right tool: can you list every value on paper? Then switch. Do you need a comparison like greater than? Then if-else.", "Sahi tool ka quick test: kya har value ko kagaz par likh sakte ho? To switch. Kya greater than jaisi comparison chahiye? To if-else."]}
 ]},
11: {
 def: ["A loop repeats a block of code as long as a condition stays true. Java has the for loop, the while loop, the do-while loop and the enhanced for (for-each) loop, and the keywords break and continue control them.",
       "Loop code ke ek block ko tab tak repeat karta hai jab tak condition true rehti hai. Java me for loop, while loop, do-while loop aur enhanced for (for-each) loop hain, aur break aur continue keywords unhe control karte hain."],
 secs: [
  {h: ["Why we need loops", "Loops ki zarurat kyun hai"],
   p: ["Imagine printing the numbers 1 to 1000. Without a loop you would write 1000 lines. With a loop it takes three lines. Loops are used to process every item of an array, repeat a calculation, wait for correct input, read a file line by line, and in almost every real program.",
       "Socho 1 se 1000 tak numbers print karne hain. Loop ke bina 1000 lines likhni padengi. Loop se sirf teen lines lagti hain. Loops array ke har item ko process karne, calculation repeat karne, sahi input ka intezaar karne, file line by line padhne aur lagbhag har real program me use hote hain."],
   pts: [["Every loop has three ideas: a starting point, a condition to continue, and a change that moves toward the end.", "If the change is missing or wrong, the condition never becomes false and you get an infinite loop.", "One pass through the loop body is called an iteration.", "for: when you know how many times. while: when you repeat until something happens. do-while: when the body must run at least once. for-each: when you just want every element."],
         ["Har loop me teen idea hote hain: shuruaat ka point, aage chalne ki condition, aur ek badlav jo end ki taraf le jaye.", "Badlav na ho ya galat ho to condition kabhi false nahi hoti aur infinite loop ban jata hai.", "Loop body ke ek pass ko iteration kehte hain.", "for: jab pata ho kitni baar. while: jab kuch hone tak repeat karna ho. do-while: jab body kam se kam ek baar chalni ho. for-each: jab bas har element chahiye."]]},
  {h: ["The for loop", "for loop"],
   p: ["The for loop puts the three parts on one line: for (initialization; condition; update). Java runs the initialization once, then checks the condition. If it is true the body runs, then the update runs, and the condition is checked again. When the condition is false the loop ends.",
       "for loop teeno parts ek line me rakhta hai: for (initialization; condition; update). Java initialization ek baar chalata hai, fir condition check karta hai. True ho to body chalti hai, fir update chalta hai, aur condition dobara check hoti hai. Condition false hote hi loop khatam."],
   code: `// Count from 1 to 5
for (int i = 1; i <= 5; i++) {
    System.out.println("Count: " + i);
}

// Count down by 3
for (int i = 10; i >= 1; i -= 3) {
    System.out.print(i + " ");        // 10 7 4 1
}
System.out.println();

// Two variables in one loop
for (int i = 0, j = 10; i < j; i += 3, j -= 3) {
    System.out.println(i + " " + j);  // 0 10  then  3 7
}

// Sum of 1 to 100
int sum = 0;
for (int i = 1; i <= 100; i++) {
    sum += i;
}
System.out.println(sum);              // 5050

// Any part can be left empty
int k = 0;
for (; k < 3; ) {
    k++;
}
System.out.println(k);                // 3`,
   pts: [["Order of events: init (once), check, body, update, check, body, update ... until the check fails.", "A variable declared in the init part (int i) exists only inside the loop.", "i++ adds 1, i += 2 steps by 2, and i-- or i -= 1 counts down.", "for (;;) with no condition is an infinite loop. You must leave it with break or return.", "The condition is checked BEFORE every run, so a loop can run zero times."],
         ["Events ka order: init (ek baar), check, body, update, check, body, update ... jab tak check fail na ho.", "Init part me declare kiya variable (int i) sirf loop ke andar rehta hai.", "i++ 1 badhata hai, i += 2 do ke step se chalta hai, aur i-- ya i -= 1 ulta ginta hai.", "Bina condition ke for (;;) infinite loop hai. Isse break ya return se bahar nikalna padta hai.", "Condition HAR baar chalne se PEHLE check hoti hai, isliye loop zero baar bhi chal sakta hai."]]},
  {h: ["The while loop", "while loop"],
   p: ["The while loop checks the condition first and repeats the body while it is true. Use it when you do not know in advance how many times it will run, for example 'until the number becomes 0' or 'until the user types stop'. You must change something inside the body yourself.",
       "while loop pehle condition check karta hai aur true rehne tak body repeat karta hai. Ise tab use karo jab pehle se pata na ho ki kitni baar chalega, jaise 'jab tak number 0 na ho jaye' ya 'jab tak user stop type na kare'. Body ke andar kuch badalna tumhe khud padta hai."],
   code: `// Count the digits of a number
int n = 90210, count = 0;
while (n > 0) {
    n /= 10;          // remove the last digit
    count++;
}
System.out.println(count);          // 5

// Keep reading numbers until the user types 0
import java.util.Scanner;

Scanner sc = new Scanner(System.in);
int sum = 0;
System.out.print("Enter numbers (0 to stop): ");
int x = sc.nextInt();
while (x != 0) {
    sum += x;
    x = sc.nextInt();               // the change that lets the loop end
}
System.out.println("Total = " + sum);

// Halve a number until it is below 1
double d = 100;
int steps = 0;
while (d >= 1) {
    d /= 2;
    steps++;
}
System.out.println(steps);          // 7`,
   tip: ["Before you run a while loop, ask yourself: what inside the body will make the condition false? If you cannot answer, the loop is probably infinite.", "while loop chalane se pehle khud se pucho: body ke andar kya condition ko false karega? Jawab na mile to loop shayad infinite hai."]},
  {h: ["The do-while loop", "do-while loop"],
   p: ["The do-while loop runs the body FIRST and checks the condition AFTER. So the body always runs at least once. It is perfect for menus and for asking the user again until the input is valid. Note the semicolon after the closing while (condition);",
       "do-while loop body PEHLE chalata hai aur condition BAAD me check karta hai. Isliye body kam se kam ek baar zaroor chalti hai. Menus aur sahi input milne tak dobara poochne ke liye ye perfect hai. Closing while (condition); ke baad semicolon yaad rakho."],
   code: `import java.util.Scanner;

Scanner sc = new Scanner(System.in);
int choice;
do {
    System.out.println("1. Say hello");
    System.out.println("2. Show time");
    System.out.println("3. Exit");
    System.out.print("Choose: ");
    choice = sc.nextInt();
    if (choice == 1) System.out.println("Hello!");
    else if (choice == 2) System.out.println(java.time.LocalTime.now());
} while (choice != 3);               // semicolon is required

// while vs do-while when the condition is false from the start
int a = 10;
while (a < 5) {
    System.out.println("while body");       // never runs
}
do {
    System.out.println("do-while body");    // runs once
} while (a < 5);`},
  {h: ["The for-each loop", "for-each loop"],
   p: ["The enhanced for loop walks through every element of an array or collection without an index. Read it as 'for each item in the list'. It is short and safe because you cannot go out of bounds. The loop variable is a copy of the element, so changing it does not change the array.",
       "Enhanced for loop array ya collection ke har element par index ke bina chalta hai. Ise 'list ke har item ke liye' ki tarah padho. Ye chhota aur safe hai kyunki bounds se bahar nahi ja sakte. Loop variable element ki copy hota hai, isliye use badalne se array nahi badalta."],
   code: `int[] marks = {70, 85, 90};
int total = 0;
for (int m : marks) {
    total += m;
}
System.out.println(total);           // 245

String[] team = {"Himakshi", "Mohit", "Shivam"};
for (String member : team) {
    System.out.println(member);
}

// Changing the loop variable does NOT change the array
for (int m : marks) {
    m = 0;
}
System.out.println(marks[0]);        // still 70

// Use the normal for loop when you need the index
for (int i = 0; i < team.length; i++) {
    System.out.println((i + 1) + ". " + team[i]);
}`,
   pts: [["Syntax: for (Type item : collection) { ... }", "Use for-each to read every element. Use the normal for loop if you need the index, want to go backwards, skip elements or change the array.", "It works with arrays and with every collection such as ArrayList, which you will learn in Phase 4."],
         ["Syntax: for (Type item : collection) { ... }", "Har element padhna ho to for-each use karo. Index chahiye ho, ulta chalna ho, elements skip karne ho ya array badalna ho to normal for loop use karo.", "Ye arrays ke saath aur har collection jaise ArrayList ke saath chalta hai, jo Phase 4 me seekhoge."]]},
  {h: ["break, continue and labeled loops", "break, continue aur labeled loops"],
   p: ["break leaves the loop immediately. continue skips the rest of the current iteration and jumps to the next one. In nested loops, break and continue affect only the INNER loop. To leave an outer loop, put a label before it and write break label;",
       "break loop ko turant chhod deta hai. continue current iteration ka baaki hissa skip karke agle iteration par jata hai. Nested loops me break aur continue sirf INNER loop par asar karte hain. Bahar wala loop chhodne ke liye uske pehle label lagao aur break label; likho."],
   code: `// continue skips even numbers, break stops after 7
for (int i = 1; i <= 10; i++) {
    if (i % 2 == 0) continue;
    if (i > 7) break;
    System.out.print(i + " ");        // 1 3 5 7
}
System.out.println();

// Find the first number divisible by 7 after 20
for (int n = 21; ; n++) {
    if (n % 7 == 0) {
        System.out.println(n);        // 21
        break;
    }
}

// Labeled break leaves BOTH loops
outer:
for (int i = 1; i <= 3; i++) {
    for (int j = 1; j <= 3; j++) {
        if (i * j == 4) break outer;
        System.out.println(i + "," + j);
    }
}
// Output: 1,1  1,2  1,3  2,1`,
   pts: [["break works in loops and in switch. continue works only in loops.", "In a for loop, continue still runs the update part before the next check.", "In a while loop, continue jumps straight to the condition, so make sure the change happens BEFORE continue or the loop may never end.", "Labels are rarely needed. Often a method with return is cleaner than a labeled break."],
         ["break loops aur switch me chalta hai. continue sirf loops me chalta hai.", "for loop me continue agli check se pehle update part bhi chalata hai.", "while loop me continue seedha condition par jata hai, isliye badlav continue SE PEHLE hona chahiye warna loop kabhi khatam nahi hoga.", "Labels ki kam hi zarurat padti hai. Aksar return wala method labeled break se saaf hota hai."]]},
  {h: ["Nested loops", "Nested loops"],
   p: ["A loop inside another loop is a nested loop. For every single round of the outer loop, the inner loop runs completely. If the outer loop runs 3 times and the inner loop 5 times, the inner body runs 3 x 5 = 15 times. Nested loops are used for tables, grids, matrices and patterns.",
       "Ek loop ke andar dusra loop nested loop kehlata hai. Outer loop ke har ek round me inner loop poora chalta hai. Outer 3 baar aur inner 5 baar chale to inner body 3 x 5 = 15 baar chalti hai. Nested loops tables, grids, matrices aur patterns me use hote hain."],
   code: `// Multiplication table grid: 3 rows, 5 columns
for (int i = 1; i <= 3; i++) {
    for (int j = 1; j <= 5; j++) {
        System.out.printf("%4d", i * j);
    }
    System.out.println();             // new line after each row
}
// Output:
//    1   2   3   4   5
//    2   4   6   8  10
//    3   6   9  12  15

// All pairs of two dice that add up to 7
for (int d1 = 1; d1 <= 6; d1++) {
    for (int d2 = 1; d2 <= 6; d2++) {
        if (d1 + d2 == 7) System.out.println(d1 + " + " + d2);
    }
}`},
  {h: ["Classic loop patterns", "Classic loop patterns"],
   p: ["Most loop problems in exams are variations of a few patterns: accumulate (sum, product), count, find the maximum, take digits apart, test for a property. Learn these and you can solve most of them.",
       "Exams ke zyadatar loop problems kuch patterns ke variations hain: accumulate (sum, product), count, maximum dhundna, digits alag karna, kisi property ki jaanch. Inhe seekh lo to zyadatar problems solve kar sakte ho."],
   code: `// 1) Factorial of 10
long f = 1;
for (int i = 2; i <= 10; i++) f *= i;
System.out.println(f);                     // 3628800

// 2) Reverse a number
int n = 1234, rev = 0;
while (n > 0) {
    rev = rev * 10 + n % 10;
    n /= 10;
}
System.out.println(rev);                   // 4321

// 3) Prime check
int num = 29;
boolean prime = num > 1;
for (int i = 2; i * i <= num; i++) {
    if (num % i == 0) { prime = false; break; }
}
System.out.println(prime);                 // true

// 4) First 8 Fibonacci numbers
int a = 0, b = 1;
for (int i = 0; i < 8; i++) {
    System.out.print(a + " ");             // 0 1 1 2 3 5 8 13
    int c = a + b;
    a = b;
    b = c;
}
System.out.println();

// 5) Largest value in an array
int[] data = {4, 19, 7, 12};
int max = data[0];
for (int x : data) if (x > max) max = x;
System.out.println(max);                   // 19`},
  {h: ["Common loop mistakes", "Common loop mistakes"],
   p: ["Almost every beginner meets these. Learn to spot them now.",
       "Lagbhag har beginner inse milta hai. Inhe abhi pehchanna seekh lo."],
   code: `// 1) Infinite loop: i goes the wrong way
// for (int i = 0; i < 5; i--) { }          // never ends

// 2) Off-by-one with arrays: indexes are 0 to length - 1
int[] a = {1, 2, 3};
// for (int i = 0; i <= a.length; i++) System.out.println(a[i]);  // crashes at i = 3
for (int i = 0; i < a.length; i++) System.out.println(a[i]);      // correct

// 3) A stray semicolon: the loop body becomes empty
// for (int i = 0; i < 3; i++);
// { System.out.println("prints only once"); }

// 4) Decimal counters never hit exact values
// for (double d = 0; d != 1.0; d += 0.1) { }   // infinite: 0.1 added ten times is not exactly 1.0
for (int k = 0; k <= 10; k++) {
    System.out.println(k / 10.0);               // use an int counter and divide
}

// 5) Forgetting to update the variable in a while loop
// int x = 0;
// while (x < 5) { System.out.println(x); }     // x never changes`,
   pts: [["Use < array.length, never <= array.length.", "Count with int variables. Use a decimal only for the value, not for the loop counter.", "No semicolon right after for (...) or while (...).", "If a program seems stuck, press Ctrl + C in the terminal to stop it.", "To debug, print the loop variable at the start of the body and check every value."],
         ["< array.length use karo, <= array.length kabhi nahi.", "Ginti ke liye int variables use karo. Decimal sirf value ke liye rakho, loop counter ke liye nahi.", "for (...) ya while (...) ke turant baad semicolon nahi.", "Program atka lage to terminal me Ctrl + C dabake rok do.", "Debug karne ke liye body ki shuruaat me loop variable print karo aur har value check karo."]],
   tip: ["Loop checklist: where does it start, when does it stop, and what changes each time? If you can answer all three, the loop is correct.", "Loop checklist: kahan se shuru, kab ruke, aur har baar kya badalta hai? Teeno ka jawab mil jaye to loop sahi hai."]}
 ]},
12: {
 def: ["Pattern printing means using loops to display shapes made of stars, numbers or letters, such as triangles, pyramids and diamonds. It trains you to control nested loops: the outer loop handles the rows and the inner loops handle what is printed in each row.",
       "Pattern printing ka matlab loops se stars, numbers ya letters ki shapes dikhana, jaise triangles, pyramids aur diamonds. Isse nested loops par control banta hai: outer loop rows sambhalta hai aur inner loops har row me kya print hoga wo sambhalte hain."],
 secs: [
  {h: ["How to think about any pattern", "Kisi bhi pattern ko kaise sochein"],
   p: ["Every pattern problem can be solved with the same four questions. Take the pattern on paper, number the rows from 1, and write what each row contains. Then look for the rule between the row number i and the count of each item.",
       "Har pattern problem in chaar sawalon se solve hota hai. Pattern kagaz par lo, rows ko 1 se number karo, aur likho har row me kya hai. Fir row number i aur har cheez ki ginti ke beech ka rule dhundho."],
   pts: [["Question 1: how many rows are there? That is the outer loop, for (int i = 1; i <= n; i++).", "Question 2: in row i, how many spaces come first? Usually n - i for centred shapes.", "Question 3: in row i, how many stars or numbers are printed? For example i for a triangle or 2 * i - 1 for a pyramid.", "Question 4: what is printed, a star, the row number i, the column number j or a counter?", "Use print() for items in a row and an empty println() at the end of each row to move down.", "Do the first three rows by hand and write the table of row, spaces and stars. The formula appears from the table."],
         ["Sawal 1: kitni rows hain? Wahi outer loop hai, for (int i = 1; i <= n; i++).", "Sawal 2: row i me pehle kitne spaces aate hain? Centred shapes me aam taur par n - i.", "Sawal 3: row i me kitne stars ya numbers print hote hain? Jaise triangle ke liye i ya pyramid ke liye 2 * i - 1.", "Sawal 4: kya print hota hai, star, row number i, column number j ya koi counter?", "Row ke items ke liye print() aur har row ke end me khali println() se neeche jao.", "Pehli teen rows hath se karke row, spaces aur stars ki table likho. Table se formula nikal aata hai."]],
   code: `// The table for a pyramid with n = 4
// row i | spaces (n - i) | stars (2 * i - 1)
//   1   |       3        |        1
//   2   |       2        |        3
//   3   |       1        |        5
//   4   |       0        |        7`},
  {h: ["Square, rectangle and right triangles", "Square, rectangle aur right triangles"],
   p: ["Start with the simplest shapes. A square or rectangle needs two plain nested loops. A right triangle is the same, except the inner loop runs only up to the row number i.",
       "Sabse simple shapes se shuru karo. Square ya rectangle ke liye do simple nested loops chahiye. Right triangle bhi wahi hai, bas inner loop sirf row number i tak chalta hai."],
   code: `int n = 4;

// Square (n x n)
for (int i = 1; i <= n; i++) {
    for (int j = 1; j <= n; j++) System.out.print("* ");
    System.out.println();
}
// * * * *
// * * * *
// * * * *
// * * * *

// Right triangle
for (int i = 1; i <= n; i++) {
    for (int j = 1; j <= i; j++) System.out.print("* ");
    System.out.println();
}
// *
// * *
// * * *
// * * * *

// Inverted right triangle: start from n and go down
for (int i = n; i >= 1; i--) {
    for (int j = 1; j <= i; j++) System.out.print("* ");
    System.out.println();
}
// * * * *
// * * *
// * *
// *

// Right-aligned triangle: spaces first
for (int i = 1; i <= n; i++) {
    for (int s = 1; s <= n - i; s++) System.out.print("  ");
    for (int j = 1; j <= i; j++) System.out.print("* ");
    System.out.println();
}
//       *
//     * *
//   * * *
// * * * *`},
  {h: ["Number and alphabet triangles", "Number aur alphabet triangles"],
   p: ["Changing WHAT is printed gives a new pattern with the same loop structure. Print the column number j, the row number i, or a letter made from a number.",
       "Kya PRINT hota hai ise badalne se wahi loop structure naya pattern bana deta hai. Column number j, row number i, ya number se banaya hua letter print karo."],
   code: `int n = 4;

// Column numbers: 1, 12, 123 ...
for (int i = 1; i <= n; i++) {
    for (int j = 1; j <= i; j++) System.out.print(j + " ");
    System.out.println();
}
// 1
// 1 2
// 1 2 3
// 1 2 3 4

// Row number repeated: 1, 22, 333 ...
for (int i = 1; i <= n; i++) {
    for (int j = 1; j <= i; j++) System.out.print(i + " ");
    System.out.println();
}
// 1
// 2 2
// 3 3 3
// 4 4 4 4

// Letters: 'A' + j gives A, B, C ...
for (int i = 1; i <= n; i++) {
    for (int j = 0; j < i; j++) System.out.print((char) ('A' + j) + " ");
    System.out.println();
}
// A
// A B
// A B C
// A B C D

// Floyd's triangle: one counter that keeps growing
int num = 1;
for (int i = 1; i <= n; i++) {
    for (int j = 1; j <= i; j++) System.out.print((num++) + " ");
    System.out.println();
}
// 1
// 2 3
// 4 5 6
// 7 8 9 10`,
   tip: ["(char) ('A' + j) works because a char is a number. 'A' is 65, so 'A' + 2 is 67 which is 'C'.", "(char) ('A' + j) isliye chalta hai kyunki char ek number hai. 'A' 65 hai, to 'A' + 2 = 67 yani 'C'."]},
  {h: ["Pyramid, inverted pyramid and diamond", "Pyramid, inverted pyramid aur diamond"],
   p: ["A centred shape needs two inner loops in each row: first one for the spaces and then one for the stars. For a pyramid, row i has n - i spaces and 2 * i - 1 stars. An inverted pyramid goes from the last row to the first. A diamond is a pyramid followed by an inverted pyramid that skips the middle row.",
       "Centred shape ke liye har row me do inner loops chahiye: pehle spaces ke liye, fir stars ke liye. Pyramid me row i me n - i spaces aur 2 * i - 1 stars hote hain. Inverted pyramid aakhri row se pehli row ki taraf jata hai. Diamond ek pyramid ke baad ek inverted pyramid hota hai jo beech ki row ko chhod deta hai."],
   code: `int n = 4;

// Pyramid
for (int i = 1; i <= n; i++) {
    for (int s = 1; s <= n - i; s++) System.out.print(" ");
    for (int k = 1; k <= 2 * i - 1; k++) System.out.print("*");
    System.out.println();
}
//    *
//   ***
//  *****
// *******

// Inverted pyramid
for (int i = n; i >= 1; i--) {
    for (int s = 1; s <= n - i; s++) System.out.print(" ");
    for (int k = 1; k <= 2 * i - 1; k++) System.out.print("*");
    System.out.println();
}
// *******
//  *****
//   ***
//    *

// Diamond = pyramid + inverted pyramid (without repeating the widest row)
for (int i = 1; i <= n; i++) {
    for (int s = 1; s <= n - i; s++) System.out.print(" ");
    for (int k = 1; k <= 2 * i - 1; k++) System.out.print("*");
    System.out.println();
}
for (int i = n - 1; i >= 1; i--) {
    for (int s = 1; s <= n - i; s++) System.out.print(" ");
    for (int k = 1; k <= 2 * i - 1; k++) System.out.print("*");
    System.out.println();
}
//    *
//   ***
//  *****
// *******
//  *****
//   ***
//    *`},
  {h: ["Hollow patterns", "Hollow patterns"],
   p: ["For a hollow shape you print the border and spaces in the middle. Inside the inner loop use an if that decides: is this cell on the border? Then print a star, otherwise print spaces of the same width so the shape does not shift.",
       "Hollow shape me border aur beech me spaces print karte hain. Inner loop ke andar ek if decide karta hai: kya ye cell border par hai? To star print karo, warna utni hi chaudai ke spaces print karo taaki shape khisak na jaye."],
   code: `int n = 5;

// Hollow square
for (int i = 1; i <= n; i++) {
    for (int j = 1; j <= n; j++) {
        if (i == 1 || i == n || j == 1 || j == n) System.out.print("* ");
        else System.out.print("  ");          // two spaces = same width as "* "
    }
    System.out.println();
}
// * * * * *
// *       *
// *       *
// *       *
// * * * * *

// Hollow right triangle
for (int i = 1; i <= n; i++) {
    for (int j = 1; j <= i; j++) {
        if (j == 1 || j == i || i == n) System.out.print("* ");
        else System.out.print("  ");
    }
    System.out.println();
}
// *
// * *
// *   *
// *     *
// * * * * *`},
  {h: ["Number pyramid and Pascal's triangle", "Number pyramid aur Pascal's triangle"],
   p: ["Harder patterns combine the same tools. The number pyramid counts up to the row number and then back down. Pascal's triangle starts every row with 1, and each next number is found from the previous one using the formula c = c * (i - j) / (j + 1).",
       "Mushkil patterns wahi tools jodte hain. Number pyramid row number tak upar ginta hai aur fir wapas neeche. Pascal's triangle har row 1 se shuru karta hai, aur har agla number pichhle se formula c = c * (i - j) / (j + 1) se nikalta hai."],
   code: `int n = 5;

// Number pyramid: count up to i, then back down to 1
for (int i = 1; i <= n; i++) {
    for (int s = 1; s <= n - i; s++) System.out.print(" ");
    for (int j = 1; j <= i; j++) System.out.print(j);
    for (int j = i - 1; j >= 1; j--) System.out.print(j);
    System.out.println();
}
//     1
//    121
//   12321
//  1234321
// 123454321

// Pascal's triangle
for (int i = 0; i < n; i++) {
    for (int s = 0; s < n - i - 1; s++) System.out.print(" ");
    int c = 1;
    for (int j = 0; j <= i; j++) {
        System.out.print(c + " ");
        c = c * (i - j) / (j + 1);
    }
    System.out.println();
}
//     1
//    1 1
//   1 2 1
//  1 3 3 1
// 1 4 6 4 1`},
  {h: ["Make patterns reusable and fix common mistakes", "Patterns ko reusable banao aur common mistakes theek karo"],
   p: ["Put each pattern in a method that takes n, and read n from the user. Then the same code prints a small or a big shape. When a pattern looks wrong, compare your output with the table you made, row by row.",
       "Har pattern ko ek method me rakho jo n leta ho, aur n user se padho. Fir wahi code chhota ya bada shape print karta hai. Pattern galat dikhe to apne output ko banayi hui table se row by row compare karo."],
   code: `import java.util.Scanner;

public class Patterns {
    static void triangle(int n) {
        for (int i = 1; i <= n; i++) {
            for (int j = 1; j <= i; j++) System.out.print("* ");
            System.out.println();
        }
    }

    static void pyramid(int n) {
        for (int i = 1; i <= n; i++) {
            for (int s = 1; s <= n - i; s++) System.out.print(" ");
            for (int k = 1; k <= 2 * i - 1; k++) System.out.print("*");
            System.out.println();
        }
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Rows: ");
        int n = sc.nextInt();
        triangle(n);
        System.out.println();
        pyramid(n);
    }
}`,
   pts: [["Mistake: forgetting System.out.println() after the inner loop, so everything prints on one line.", "Mistake: putting println() inside the inner loop, so every star lands on its own line.", "Mistake: wrong spaces. Pyramid shapes need n - i spaces. Use two spaces if each star is printed as \"* \".", "Mistake: starting loops at 0 when your formula assumes 1 (or the opposite).", "Practise list: hollow pyramid, butterfly, X pattern, right-aligned number triangle, zig-zag numbers and Floyd's triangle with letters.", "Rule of thumb: the number of print() calls in a row must equal the width of the shape."],
         ["Galti: inner loop ke baad System.out.println() bhul jana, jisse sab kuch ek hi line me print hota hai.", "Galti: println() ko inner loop ke andar rakh dena, jisse har star alag line par aata hai.", "Galti: spaces galat. Pyramid shapes ko n - i spaces chahiye. Har star \"* \" ki tarah print ho to do spaces use karo.", "Galti: loops 0 se shuru karna jabki formula 1 maan kar bana hai (ya ulta).", "Practice list: hollow pyramid, butterfly, X pattern, right-aligned number triangle, zig-zag numbers aur letters wala Floyd's triangle.", "Thumb rule: ek row me print() calls ki ginti shape ki chaudai ke barabar honi chahiye."]],
   tip: ["Never start typing the loops straight away. Draw the pattern, number the rows and fill the table. The code is just that table written in Java.", "Seedha loops type karna shuru mat karo. Pattern banao, rows number karo aur table bharo. Code wahi table Java me likha hua hai."]}
 ]},
14: {
 def: ["Basic practice means combining everything from Phase 1 (variables, input, operators, conditions, loops and methods) to solve small complete problems. This is where concepts turn into real skill.",
       "Basic practice ka matlab Phase 1 ki saari cheezein (variables, input, operators, conditions, loops aur methods) jodkar chhote poore problems solve karna. Yahin concepts asli skill ban jate hain."],
 secs: [
  {h: ["How to practise properly", "Practice sahi tareeke se kaise karein"],
   p: ["Reading code teaches little. Writing it teaches a lot. Follow the same routine for every problem and you will improve quickly.",
       "Code padhne se kam seekhte ho. Likhne se bahut seekhte ho. Har problem ke liye wahi routine apnao aur tum jaldi behtar ho jaoge."],
   pts: [["Step 1: read the problem twice and write the input and the expected output on paper.", "Step 2: solve one example by hand and write the steps in plain words.", "Step 3: turn each step into code. Start with the simplest version that works.", "Step 4: run it with normal values, then with edge cases such as 0, 1, a negative number and a very large number.", "Step 5: only if you are stuck for 20 minutes, look at a hint, never the full solution first.", "Step 6: next day, solve the same problem again without looking. Repeating is what makes it stick.", "Use the Coding Arena to check your solutions against test cases."],
         ["Step 1: problem do baar padho aur input aur expected output kagaz par likho.", "Step 2: ek example hath se solve karo aur steps saaf shabdon me likho.", "Step 3: har step ko code me badlo. Pehle sabse simple chalne wala version likho.", "Step 4: normal values se chalao, fir edge cases se jaise 0, 1, negative number aur bahut bada number.", "Step 5: 20 minute atke rahne par hi hint dekho, poora solution kabhi pehle nahi.", "Step 6: agle din wahi problem bina dekhe dobara solve karo. Dohrane se hi cheezein yaad rehti hain.", "Coding Arena me apne solutions ko test cases se check karo."]]},
  {h: ["Starter programs", "Starter programs"],
   p: ["These short programs use only variables, operators and conditions. Type each one yourself and change the numbers to see what happens.",
       "Ye chhote programs sirf variables, operators aur conditions use karte hain. Har ek ko khud type karo aur numbers badalkar dekho kya hota hai."],
   code: `import java.util.Scanner;

public class Starter {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        // 1) Simple interest = (P * R * T) / 100
        double p = 5000, r = 6, t = 2;
        System.out.println("Simple interest = " + (p * r * t / 100));     // 600.0

        // 2) Celsius to Fahrenheit: F = C * 9 / 5 + 32
        double c = 37;
        System.out.println(c + " C = " + (c * 9 / 5 + 32) + " F");        // 98.6 F

        // 3) Marks and grade for Gurleen
        String student = "Gurleen";
        int m1 = 78, m2 = 84, m3 = 91;
        double avg = (m1 + m2 + m3) / 3.0;
        String grade;
        if (avg >= 90) grade = "A+";
        else if (avg >= 75) grade = "A";
        else if (avg >= 60) grade = "B";
        else grade = "C";
        System.out.printf("%s: average %.2f, grade %s%n", student, avg, grade);

        // 4) Swap two numbers without a third variable
        int a = 5, b = 9;
        a = a + b;
        b = a - b;
        a = a - b;
        System.out.println(a + " " + b);                                   // 9 5

        // 5) Largest of three numbers
        int x = 12, y = 45, z = 30;
        int max = Math.max(x, Math.max(y, z));
        System.out.println("Largest = " + max);                            // 45
    }
}`},
  {h: ["Number programs with loops and methods", "Loops aur methods wale number programs"],
   p: ["These are the classic number problems. Each one is a short method, which makes it easy to test and reuse. Notice how the same ideas appear again and again: % 10 and / 10 take digits apart, and a loop up to the square root tests divisors.",
       "Ye classic number problems hain. Har ek chhota method hai, jisse test aur reuse karna aasan hota hai. Dekho kaise wahi ideas baar-baar aate hain: % 10 aur / 10 digits alag karte hain, aur square root tak ka loop divisors test karta hai."],
   code: `public class NumberPrograms {
    static boolean isPrime(int n) {
        if (n < 2) return false;
        for (int i = 2; (long) i * i <= n; i++)
            if (n % i == 0) return false;
        return true;
    }

    static long factorial(int n) {
        long f = 1;
        for (int i = 2; i <= n; i++) f *= i;
        return f;
    }

    static int sumOfDigits(int n) {
        int s = 0;
        while (n > 0) { s += n % 10; n /= 10; }
        return s;
    }

    static boolean isPalindrome(int n) {
        int rev = 0, t = n;
        while (t > 0) { rev = rev * 10 + t % 10; t /= 10; }
        return rev == n;
    }

    // Armstrong: sum of each digit raised to the number of digits equals the number
    static boolean isArmstrong(int n) {
        int digits = String.valueOf(n).length(), t = n, sum = 0;
        while (t > 0) {
            sum += (int) Math.pow(t % 10, digits);
            t /= 10;
        }
        return sum == n;
    }

    static int gcd(int a, int b) {            // Euclid's algorithm
        while (b != 0) {
            int t = b;
            b = a % b;
            a = t;
        }
        return a;
    }

    public static void main(String[] args) {
        System.out.println(isPrime(29));              // true
        System.out.println(factorial(10));            // 3628800
        System.out.println(sumOfDigits(1234));        // 10
        System.out.println(isPalindrome(12321));      // true
        System.out.println(isArmstrong(153));         // true (1 + 125 + 27)
        System.out.println(gcd(48, 18));              // 6
        System.out.println(48 * 18 / gcd(48, 18));    // 144  (LCM)

        // Multiplication table of 7
        for (int i = 1; i <= 10; i++)
            System.out.println("7 x " + i + " = " + 7 * i);

        // Primes up to 30
        for (int i = 2; i <= 30; i++)
            if (isPrime(i)) System.out.print(i + " ");   // 2 3 5 7 11 13 17 19 23 29
        System.out.println();
    }
}`},
  {h: ["Menu-driven calculator", "Menu-driven calculator"],
   p: ["This program joins input, switch, conditions, a loop and a check for division by zero. It keeps asking until the user says no. It uses the modern arrow form of switch, which needs Java 14 or newer.",
       "Ye program input, switch, conditions, loop aur zero se division ka check jodta hai. User na kahe tab tak ye poochta rehta hai. Isme switch ka modern arrow form hai, jiske liye Java 14 ya naya chahiye."],
   code: `import java.util.Scanner;

public class Calculator {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        char again;
        do {
            System.out.print("Enter first number: ");
            double a = sc.nextDouble();
            System.out.print("Operator (+ - * / %): ");
            char op = sc.next().charAt(0);
            System.out.print("Enter second number: ");
            double b = sc.nextDouble();

            switch (op) {
                case '+' -> System.out.println("Result = " + (a + b));
                case '-' -> System.out.println("Result = " + (a - b));
                case '*' -> System.out.println("Result = " + (a * b));
                case '/', '%' -> {
                    if (b == 0) System.out.println("Cannot divide by zero");
                    else System.out.println("Result = " + (op == '/' ? a / b : a % b));
                }
                default -> System.out.println("Invalid operator");
            }

            System.out.print("Calculate again? (y/n): ");
            again = sc.next().charAt(0);
        } while (again == 'y' || again == 'Y');

        System.out.println("Goodbye!");
    }
}`},
  {h: ["Mini project 1: number guessing game", "Mini project 1: number guessing game"],
   p: ["The computer picks a secret number and the player keeps guessing until correct. It uses Random, a do-while loop, if-else-if and a counter. Try extending it: limit the player to 7 tries, or ask whether to play again.",
       "Computer ek secret number chunta hai aur player sahi hone tak guess karta rehta hai. Isme Random, do-while loop, if-else-if aur counter hain. Isse badhane ki koshish karo: player ko 7 tries tak limit karo, ya poochho ki dobara khelna hai ya nahi."],
   code: `import java.util.Random;
import java.util.Scanner;

public class GuessingGame {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        Random rnd = new Random();
        int secret = rnd.nextInt(100) + 1;       // a number from 1 to 100
        int tries = 0, guess;

        System.out.println("I am thinking of a number between 1 and 100.");
        do {
            System.out.print("Your guess: ");
            guess = sc.nextInt();
            tries++;
            if (guess < secret) System.out.println("Too low");
            else if (guess > secret) System.out.println("Too high");
        } while (guess != secret);

        System.out.println("Correct! You needed " + tries + " tries.");
    }
}`},
  {h: ["Mini project 2: simple bank menu", "Mini project 2: simple bank menu"],
   p: ["A menu-driven program is the usual first real project. This one keeps a balance in a variable and offers deposit, withdraw and check. Notice the validation: amounts must be positive and a withdrawal cannot be more than the balance.",
       "Menu-driven program aam taur par pehla asli project hota hai. Isme balance ek variable me rehta hai aur deposit, withdraw aur check ke options hain. Validation dekho: amounts positive hone chahiye aur withdraw balance se zyada nahi ho sakta."],
   code: `import java.util.Scanner;

public class BankMenu {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String holder = "Mohit";
        double balance = 1000;
        int choice;

        do {
            System.out.println();
            System.out.println("--- Bank menu (" + holder + ") ---");
            System.out.println("1. Check balance");
            System.out.println("2. Deposit");
            System.out.println("3. Withdraw");
            System.out.println("4. Exit");
            System.out.print("Choose: ");
            choice = sc.nextInt();

            switch (choice) {
                case 1 -> System.out.println("Balance: " + balance);
                case 2 -> {
                    System.out.print("Amount to deposit: ");
                    double amt = sc.nextDouble();
                    if (amt > 0) { balance += amt; System.out.println("Deposited."); }
                    else System.out.println("Amount must be positive.");
                }
                case 3 -> {
                    System.out.print("Amount to withdraw: ");
                    double amt = sc.nextDouble();
                    if (amt <= 0) System.out.println("Amount must be positive.");
                    else if (amt > balance) System.out.println("Not enough balance.");
                    else { balance -= amt; System.out.println("Please take your cash."); }
                }
                case 4 -> System.out.println("Thank you!");
                default -> System.out.println("Invalid choice.");
            }
        } while (choice != 4);
    }
}`},
  {h: ["Practice list and next steps", "Practice list aur aage ke steps"],
   p: ["Solve these on your own, then compare with the Coding Arena. Once you can do most of them without help, Phase 1 is finished and you are ready for arrays and strings.",
       "Ye khud solve karo, fir Coding Arena se compare karo. Inme se zyadatar bina madad ke kar paao to Phase 1 poora hua aur tum arrays aur strings ke liye taiyar ho."],
   pts: [["Easy: even or odd, positive or negative, sum of first n numbers, table of any number, count digits, reverse a number.", "Easy: leap year check, simple interest, area of circle, convert minutes to hours and minutes.", "Medium: prime numbers in a range, factorial, Fibonacci, palindrome number, Armstrong number, perfect number.", "Medium: GCD and LCM, sum of digits until a single digit, number to words for 0 to 9.", "Medium: all the patterns from the Pattern Printing lesson with n read from the user.", "Hard: guess the number with a limit of 7 tries, ATM with a PIN of 3 attempts, a quiz of 5 questions with a score.", "Challenge: write each solution as a method, and test it with at least 5 inputs including edge cases."],
         ["Easy: even ya odd, positive ya negative, pehle n numbers ka sum, kisi bhi number ka table, digits ginna, number ulta karna.", "Easy: leap year check, simple interest, circle ka area, minutes ko hours aur minutes me badalna.", "Medium: kisi range ke prime numbers, factorial, Fibonacci, palindrome number, Armstrong number, perfect number.", "Medium: GCD aur LCM, ek digit bachne tak digits ka sum, 0 se 9 tak number ko words me.", "Medium: Pattern Printing lesson ke saare patterns, n user se padhkar.", "Hard: 7 tries ki limit wala guess the number, 3 attempts ke PIN wala ATM, 5 questions ka quiz score ke saath.", "Challenge: har solution ko method ki tarah likho, aur kam se kam 5 inputs se test karo jisme edge cases bhi ho."]],
   tip: ["When you finish this list you have written more than 40 programs. That is the real milestone of Phase 1: you can write basic Java programs on your own.", "Ye list khatam karne tak tum 40 se zyada programs likh chuke hoge. Yahi Phase 1 ka asli milestone hai: tum apne basic Java programs khud likh sakte ho."]}
 ]}
});

Object.assign(TOPICS, {
15: {
 def: ["A one-dimensional array is a fixed-size container that stores many values of the same type in a single row, one after another in memory. Each value is reached by its index, a position number that starts at 0.",
       "One-dimensional array ek fixed-size container hai jo ek hi type ki kai values ek row me, memory me ek ke baad ek rakhta hai. Har value ko uske index, yani position number, se pakadte hain jo 0 se shuru hota hai."],
 secs: [
  {h: ["Why we need arrays", "Arrays ki zarurat kyun hai"],
   p: ["Imagine storing the marks of 50 students. Creating 50 separate variables (m1, m2, m3 ...) is impossible to manage. An array gives you one name for all 50 values and lets you process them with a loop. Arrays are the first data structure every programmer learns, and many bigger structures such as ArrayList are built on top of them.",
       "Socho 50 students ke marks store karne hain. 50 alag variables (m1, m2, m3 ...) sambhalna namumkin hai. Array saari 50 values ko ek naam deta hai aur unhe loop se process karne deta hai. Array har programmer ka pehla data structure hai, aur ArrayList jaise bade structures isi ke upar bane hain."],
   pts: [["All elements have the SAME type: an int[] holds only ints, a String[] holds only Strings.", "Elements sit next to each other in memory, so reading any element by index is very fast.", "The size is fixed when the array is created and can never change.", "An array is an object. It lives on the heap, and the variable holds a reference to it.", "Use an array when you know the number of items in advance. Use ArrayList when the size changes (Phase 4)."],
         ["Saare elements ka type SAME hota hai: int[] sirf ints rakhta hai, String[] sirf Strings.", "Elements memory me ek ke baad ek hote hain, isliye index se kisi bhi element ko padhna bahut tez hota hai.", "Size array banate waqt tay hota hai aur kabhi badal nahi sakta.", "Array ek object hai. Ye heap me rehta hai, aur variable uska reference rakhta hai.", "Items ki ginti pehle se pata ho to array use karo. Size badalta ho to ArrayList (Phase 4)."]]},
  {h: ["Declaring, creating and initializing", "Declare, create aur initialize karna"],
   p: ["There are three steps: declare the reference, create the array with new and a size, and fill in the values. You can combine them. The curly-brace shortcut creates the array and fills it in one go, and the size comes from the number of values.",
       "Teen steps hain: reference declare karo, new aur size se array banao, aur values bharo. Inhe jod sakte ho. Curly-brace shortcut array banata bhi hai aur bharta bhi hai, aur size values ki ginti se tay hota hai."],
   code: `int[] marks;                      // 1) declare: only a reference, no array yet
marks = new int[5];               // 2) create: 5 slots, all 0
marks[0] = 78;                    // 3) fill

int[] ages = new int[3];          // declare + create together
int[] nums = {10, 20, 30, 40};    // declare + create + fill (size is 4)
int[] more = new int[]{1, 2, 3};  // same idea, useful when passing directly
String[] team = {"Rahul", "Gurleen", "Himakshi"};
double[] prices = {99.5, 120.0, 45.75};

int size = 5;
int[] dynamic = new int[size];    // the size can come from a variable

int a[] = new int[3];             // legal C-style, but int[] a is the Java style
System.out.println(nums.length);  // 4`,
   pts: [["The preferred style is int[] arr (the brackets belong to the type).", "new int[5] creates 5 elements with indexes 0, 1, 2, 3, 4.", "You cannot write int[] a = new int[5]{1, 2, 3}. Give the size OR the values, never both.", "The size must be a non-negative int. A negative size throws NegativeArraySizeException.", "An array of size 0 is legal and is simply empty."],
         ["Preferred style int[] arr hai (brackets type ka hissa hain).", "new int[5] 5 elements banata hai jinke index 0, 1, 2, 3, 4 hain.", "int[] a = new int[5]{1, 2, 3} nahi likh sakte. Size YA values do, dono kabhi nahi.", "Size non-negative int hona chahiye. Negative size par NegativeArraySizeException aata hai.", "Size 0 ka array legal hai aur bas khali hota hai."]]},
  {h: ["Index, length and default values", "Index, length aur default values"],
   p: ["The first element is at index 0 and the last is at index length - 1. length is a field, not a method, so there are no brackets. If you create an array without values, Java fills it with a default value for the type, which is why a new int array is all zeros.",
       "Pehla element index 0 par aur aakhri index length - 1 par hota hai. length ek field hai, method nahi, isliye brackets nahi lagte. Bina values ke array banao to Java type ki default value bhar deta hai, isiliye naya int array poora 0 hota hai."],
   code: `import java.util.Arrays;

int[] a = {5, 10, 15, 20};
System.out.println(a[0]);                // 5   first
System.out.println(a[a.length - 1]);     // 20  last
System.out.println(a.length);            // 4

// Default values
int[] i = new int[3];
double[] d = new double[2];
boolean[] b = new boolean[2];
String[] s = new String[2];
char[] c = new char[2];
System.out.println(Arrays.toString(i)); // [0, 0, 0]
System.out.println(Arrays.toString(d)); // [0.0, 0.0]
System.out.println(Arrays.toString(b)); // [false, false]
System.out.println(Arrays.toString(s)); // [null, null]
System.out.println((int) c[0]);          // 0 (the null character)

a[1] = 99;                               // change one element
System.out.println(Arrays.toString(a));  // [5, 99, 15, 20]
// a[4] = 1;                             // ArrayIndexOutOfBoundsException`,
   pts: [["int, long, short, byte: 0. double, float: 0.0. boolean: false. char: the null character (code 0). Any object type such as String: null.", "Calling a method on a null element (for example s[0].length()) throws NullPointerException.", "Reading or writing an index below 0 or at length or above throws ArrayIndexOutOfBoundsException.", "Printing an array directly (System.out.println(a)) shows a reference like [I@1b6d3586. Use Arrays.toString(a)."],
         ["int, long, short, byte: 0. double, float: 0.0. boolean: false. char: null character (code 0). Koi bhi object type jaise String: null.", "Null element par method call karne (jaise s[0].length()) se NullPointerException aata hai.", "0 se neeche ya length ya usse upar ka index padhne ya likhne par ArrayIndexOutOfBoundsException aata hai.", "Array ko seedha print karne (System.out.println(a)) par [I@1b6d3586 jaisa reference dikhta hai. Arrays.toString(a) use karo."]]},
  {h: ["Traversing with loops", "Loops se traverse karna"],
   p: ["Traversal means visiting every element. Use the normal for loop when you need the index, and for-each when you only need the values. Inside the loop you can read, change or test each element.",
       "Traversal ka matlab har element ko dekhna. Index chahiye ho to normal for loop, aur sirf values chahiye to for-each use karo. Loop ke andar har element ko padh, badal ya test kar sakte ho."],
   code: `int[] a = {4, 8, 15, 16, 23, 42};

// 1) Normal for loop: index available
for (int i = 0; i < a.length; i++) {
    System.out.println("a[" + i + "] = " + a[i]);
}

// 2) For-each: values only
for (int x : a) {
    System.out.print(x + " ");
}
System.out.println();

// 3) Backwards
for (int i = a.length - 1; i >= 0; i--) {
    System.out.print(a[i] + " ");        // 42 23 16 15 8 4
}
System.out.println();

// 4) Change the array: needs the index
for (int i = 0; i < a.length; i++) {
    a[i] = a[i] * 2;
}

// 5) For-each cannot change the array: x is only a copy
for (int x : a) {
    x = 0;
}
System.out.println(a[0]);                // still 8`},
  {h: ["Everyday array operations", "Roz ke array operations"],
   p: ["Most array problems are built from a few moves: add up the values, find the biggest or smallest, count something, and reverse the order. Learn these five and you can solve a large part of what comes next.",
       "Zyadatar array problems kuch moves se bante hain: values ka sum, sabse bada ya chhota dhundna, kuch ginna, aur order ulta karna. Ye paanch seekh lo to aage ka bahut kuch solve kar sakte ho."],
   code: `public class ArrayOps {
    public static void main(String[] args) {
        int[] marks = {78, 85, 92, 67, 88};

        // Sum and average
        int sum = 0;
        for (int m : marks) sum += m;
        double avg = (double) sum / marks.length;
        System.out.println(sum + " " + avg);          // 410 82.0

        // Maximum and minimum (start from the first element)
        int max = marks[0], min = marks[0];
        for (int i = 1; i < marks.length; i++) {
            if (marks[i] > max) max = marks[i];
            if (marks[i] < min) min = marks[i];
        }
        System.out.println(max + " " + min);          // 92 67

        // Count how many are above the average
        int above = 0;
        for (int m : marks) if (m > avg) above++;
        System.out.println(above);                    // 3

        // Reverse in place: swap the two ends and move inward
        for (int i = 0, j = marks.length - 1; i < j; i++, j--) {
            int t = marks[i];
            marks[i] = marks[j];
            marks[j] = t;
        }
        System.out.println(java.util.Arrays.toString(marks)); // [88, 67, 92, 85, 78]
    }
}`,
   tip: ["Never start max with 0 or min with 0. If all values are negative, the answer would be wrong. Start from the first element, a[0].", "max ko 0 se ya min ko 0 se shuru mat karo. Saari values negative hon to answer galat aayega. Pehle element a[0] se shuru karo."]},
  {h: ["Copying arrays and the reference trap", "Arrays copy karna aur reference ka trap"],
   p: ["Writing int[] b = a; does NOT copy the array. It makes b point to the same array, so changing b also changes a. To get a real, independent copy use clone, Arrays.copyOf or System.arraycopy. Also, == on arrays compares references, so use Arrays.equals to compare the contents.",
       "int[] b = a; likhne se array copy NAHI hota. Isse b usi array ko point karta hai, isliye b badalne se a bhi badalta hai. Asli, alag copy ke liye clone, Arrays.copyOf ya System.arraycopy use karo. Saath hi, arrays par == references compare karta hai, isliye contents compare karne ke liye Arrays.equals use karo."],
   code: `import java.util.Arrays;

int[] a = {1, 2, 3};

int[] b = a;                          // NOT a copy: same array
b[0] = 99;
System.out.println(a[0]);             // 99 (a changed too!)

int[] c = Arrays.copyOf(a, a.length); // real copy
c[1] = 55;
System.out.println(a[1]);             // 2  (a is safe)

int[] d = a.clone();                  // another way to copy
int[] part = Arrays.copyOfRange(a, 1, 3);   // indexes 1 and 2 -> [2, 3]
int[] bigger = Arrays.copyOf(a, 5);   // [99, 2, 3, 0, 0] (padded with zeros)

int[] e = new int[3];
System.arraycopy(a, 0, e, 0, 3);      // source, srcPos, dest, destPos, length

System.out.println(a == d);                // false (different objects)
System.out.println(Arrays.equals(a, d));   // true  (same contents)

Arrays.fill(e, 7);                    // fill every slot
System.out.println(Arrays.toString(e));    // [7, 7, 7]`,
   pts: [["copyOf(arr, newLength) cuts or pads. Use it to make an array larger: that is how ArrayList grows internally.", "copyOfRange(arr, from, to) includes from and excludes to.", "clone() and copyOf copy only one level. For an array of arrays or objects the inner items are still shared (shallow copy).", "Arrays.equals(a, b) compares contents. For 2D arrays use Arrays.deepEquals."],
         ["copyOf(arr, newLength) kaat ya pad kar deta hai. Array bada karne ke liye use karo: ArrayList andar se isi tarah badhta hai.", "copyOfRange(arr, from, to) me from shamil aur to shamil nahi hota.", "clone() aur copyOf sirf ek level copy karte hain. Arrays ke array ya objects ke liye andar ke items abhi bhi share hote hain (shallow copy).", "Arrays.equals(a, b) contents compare karta hai. 2D arrays ke liye Arrays.deepEquals use karo."]]},
  {h: ["Arrays and methods, and common mistakes", "Arrays aur methods, aur common mistakes"],
   p: ["When you pass an array to a method, the method receives a copy of the reference, so it can change the elements and the caller will see the change. A method can also create and return a new array. Varargs (int... nums) lets a method accept any number of values as an array.",
       "Array ko method me pass karte ho to method ko reference ki copy milti hai, isliye wo elements badal sakta hai aur caller ko wo badlav dikhta hai. Method naya array bana kar return bhi kar sakta hai. Varargs (int... nums) method ko kitni bhi values array ki tarah lene deta hai."],
   code: `import java.util.Arrays;

public class ArrayMethods {
    static void doubleAll(int[] a) {          // changes the caller's array
        for (int i = 0; i < a.length; i++) a[i] *= 2;
    }

    static int[] squares(int n) {             // creates and returns an array
        int[] r = new int[n];
        for (int i = 0; i < n; i++) r[i] = (i + 1) * (i + 1);
        return r;
    }

    static int sum(int... nums) {             // varargs: behaves like int[]
        int t = 0;
        for (int x : nums) t += x;
        return t;
    }

    public static void main(String[] args) {
        int[] a = {1, 2, 3};
        doubleAll(a);
        System.out.println(Arrays.toString(a));          // [2, 4, 6]
        System.out.println(Arrays.toString(squares(4))); // [1, 4, 9, 16]
        System.out.println(sum(1, 2, 3, 4));             // 10
        System.out.println(sum(a));                      // 12 (an array works too)
    }
}`,
   pts: [["Mistake: for (int i = 0; i <= a.length; i++). It reaches index length and crashes. Use i < a.length.", "Mistake: forgetting that indexes start at 0, so the 5th element is a[4].", "Mistake: using a.length() or a.size(). Arrays use the field a.length. Strings use length(). ArrayList uses size().", "Mistake: creating the array but never creating its objects. new String[3] holds three nulls, not three strings.", "Mistake: expecting an array to grow. Create a bigger array and copy the values.", "Tip: when an index error appears, print the index and a.length just before the failing line."],
         ["Galti: for (int i = 0; i <= a.length; i++). Ye index length tak jata hai aur crash hota hai. i < a.length use karo.", "Galti: ye bhul jana ki index 0 se shuru hota hai, isliye 5th element a[4] hai.", "Galti: a.length() ya a.size() use karna. Arrays field a.length use karte hain. Strings length() use karti hain. ArrayList size() use karta hai.", "Galti: array bana dena par uske objects na banana. new String[3] me teen null hote hain, teen strings nahi.", "Galti: array ke badhne ki ummeed karna. Bada array banao aur values copy karo.", "Tip: index error aaye to fail hone wali line se pehle index aur a.length print karo."]]}
 ]},
16: {
 def: ["A two-dimensional (2D) array is an array whose elements are themselves arrays. It is used to store data in rows and columns, like a table, a matrix, a chess board or a grid of pixels. An element is reached with two indexes: array[row][column].",
       "Two-dimensional (2D) array aisa array hai jiske elements khud arrays hote hain. Ye data ko rows aur columns me, table, matrix, chess board ya pixels ke grid ki tarah, store karne ke liye use hota hai. Element ko do index se pakadte hain: array[row][column]."],
 secs: [
  {h: ["The idea: an array of arrays", "Idea: arrays ka array"],
   p: ["Think of a classroom seating plan: rows of benches, and each bench has seats. To find one student you need two numbers, the row and the seat. In Java a 2D array is stored exactly like that: an outer array where each element points to an inner array (one row). That is why rows can even have different lengths.",
       "Classroom ka seating plan socho: benches ki rows, aur har bench me seats. Ek student dhundhne ke liye do numbers chahiye, row aur seat. Java me 2D array bilkul aise hi store hota hai: ek outer array jisme har element ek inner array (ek row) ko point karta hai. Isi wajah se rows ki length alag-alag bhi ho sakti hai."],
   pts: [["Uses: marks of students in many subjects, a tic-tac-toe or chess board, a seating chart, a maths matrix, an image as pixels, a game map.", "matrix[i][j] means row i and column j, both counted from 0.", "matrix.length gives the number of rows. matrix[0].length gives the number of columns in row 0.", "Memory picture: the outer array holds references to the row arrays."],
         ["Uses: kai subjects me students ke marks, tic-tac-toe ya chess board, seating chart, maths matrix, pixels ki image, game map.", "matrix[i][j] ka matlab row i aur column j hai, dono 0 se ginte hain.", "matrix.length rows ki ginti deta hai. matrix[0].length row 0 ke columns ki ginti deta hai.", "Memory picture: outer array row arrays ke references rakhta hai."]]},
  {h: ["Declaring and initializing", "Declare aur initialize karna"],
   p: ["Use two pairs of brackets. new int[3][4] makes 3 rows and 4 columns, all filled with 0. The curly-brace form lists each row inside its own braces.",
       "Brackets ki do jodiyan use hoti hain. new int[3][4] 3 rows aur 4 columns banata hai, sab 0 se bhare. Curly-brace form me har row apne braces me likhi jati hai."],
   code: `int[][] grid = new int[3][4];        // 3 rows, 4 columns, all 0

int[][] m = {
    {1, 2, 3},
    {4, 5, 6}
};                                    // 2 rows, 3 columns

String[][] seats = {
    {"Rahul", "Gurleen"},
    {"Himakshi", "Mohit"}
};

System.out.println(m.length);         // 2  (rows)
System.out.println(m[0].length);      // 3  (columns)
System.out.println(m[1][2]);          // 6  (row 1, column 2)
System.out.println(seats[1][0]);      // Himakshi

m[0][1] = 20;                         // change one cell
grid[2][3] = 9;                       // last cell of the grid

System.out.println(java.util.Arrays.deepToString(m));   // [[1, 20, 3], [4, 5, 6]]`,
   pts: [["Use Arrays.deepToString(m) to print a 2D array. Arrays.toString(m) would only print the row references.", "A new 2D array has the same default values as a 1D array (0, 0.0, false or null).", "You can create only the rows first: int[][] j = new int[3][]; and give each row its own length later (jagged array).", "Reading m[2][0] when there are only 2 rows throws ArrayIndexOutOfBoundsException."],
         ["2D array print karne ke liye Arrays.deepToString(m) use karo. Arrays.toString(m) sirf row references dikhayega.", "Naye 2D array ki default values 1D array jaisi hi hoti hain (0, 0.0, false ya null).", "Pehle sirf rows bana sakte ho: int[][] j = new int[3][]; aur baad me har row ko apni length de sakte ho (jagged array).", "Sirf 2 rows hon aur m[2][0] padho to ArrayIndexOutOfBoundsException aata hai."]]},
  {h: ["Traversing with nested loops", "Nested loops se traverse karna"],
   p: ["The outer loop walks the rows and the inner loop walks the columns of the current row. Always use m.length for the rows and m[i].length for the columns, so the code also works for non-square and jagged arrays.",
       "Outer loop rows par chalta hai aur inner loop current row ke columns par. Rows ke liye hamesha m.length aur columns ke liye m[i].length use karo, taaki code non-square aur jagged arrays par bhi chale."],
   code: `int[][] m = {
    {1, 2, 3},
    {4, 5, 6},
    {7, 8, 9}
};

// Print as a table
for (int i = 0; i < m.length; i++) {
    for (int j = 0; j < m[i].length; j++) {
        System.out.print(m[i][j] + " ");
    }
    System.out.println();                 // new line after each row
}
// 1 2 3
// 4 5 6
// 7 8 9

// For-each version
for (int[] row : m) {
    for (int value : row) {
        System.out.print(value + " ");
    }
    System.out.println();
}

// Fill a multiplication table
int[][] t = new int[4][4];
for (int i = 0; i < 4; i++)
    for (int j = 0; j < 4; j++)
        t[i][j] = (i + 1) * (j + 1);

// Column-by-column order (swap the loops)
for (int j = 0; j < m[0].length; j++) {
    for (int i = 0; i < m.length; i++) {
        System.out.print(m[i][j] + " ");  // 1 4 7 2 5 8 3 6 9
    }
}
System.out.println();`},
  {h: ["Row sums, column sums and diagonals", "Row sums, column sums aur diagonals"],
   p: ["These are the most common matrix questions. For a square matrix of size n, the main diagonal has cells where row equals column (i == j), and the other diagonal has cells where row plus column equals n - 1.",
       "Ye matrix ke sabse common sawal hain. n size ke square matrix me main diagonal wo cells hain jahan row aur column barabar hain (i == j), aur dusre diagonal me wo cells jahan row plus column n - 1 ke barabar ho."],
   code: `int[][] m = {
    {1, 2, 3},
    {4, 5, 6},
    {7, 8, 9}
};
int n = m.length;

// Sum of each row
for (int i = 0; i < n; i++) {
    int rowSum = 0;
    for (int j = 0; j < m[i].length; j++) rowSum += m[i][j];
    System.out.println("Row " + i + " = " + rowSum);        // 6, 15, 24
}

// Sum of each column
for (int j = 0; j < m[0].length; j++) {
    int colSum = 0;
    for (int i = 0; i < m.length; i++) colSum += m[i][j];
    System.out.println("Column " + j + " = " + colSum);     // 12, 15, 18
}

// Diagonals of a square matrix
int main = 0, other = 0;
for (int i = 0; i < n; i++) {
    main += m[i][i];                 // 1 + 5 + 9
    other += m[i][n - 1 - i];        // 3 + 5 + 7
}
System.out.println(main + " " + other);                    // 15 15

// Largest element and its position
int max = m[0][0], mr = 0, mc = 0;
for (int i = 0; i < m.length; i++)
    for (int j = 0; j < m[i].length; j++)
        if (m[i][j] > max) { max = m[i][j]; mr = i; mc = j; }
System.out.println(max + " at (" + mr + ", " + mc + ")");  // 9 at (2, 2)`},
  {h: ["Transpose, addition and multiplication", "Transpose, addition aur multiplication"],
   p: ["The transpose swaps rows and columns: result[j][i] = original[i][j]. A 2 by 3 matrix becomes 3 by 2. Two matrices of the same size are added cell by cell. To multiply A (r x c) by B (c x k) the number of columns of A must equal the number of rows of B, and each result cell is the sum of products of one row of A with one column of B.",
       "Transpose rows aur columns badal deta hai: result[j][i] = original[i][j]. 2 by 3 matrix 3 by 2 ban jata hai. Same size ke do matrices cell by cell add hote hain. A (r x c) ko B (c x k) se multiply karne ke liye A ke columns B ki rows ke barabar hone chahiye, aur har result cell A ki ek row aur B ke ek column ke products ka sum hota hai."],
   code: `import java.util.Arrays;

public class MatrixOps {
    static int[][] transpose(int[][] a) {
        int[][] t = new int[a[0].length][a.length];
        for (int i = 0; i < a.length; i++)
            for (int j = 0; j < a[0].length; j++)
                t[j][i] = a[i][j];
        return t;
    }

    static int[][] add(int[][] a, int[][] b) {
        int[][] r = new int[a.length][a[0].length];
        for (int i = 0; i < a.length; i++)
            for (int j = 0; j < a[0].length; j++)
                r[i][j] = a[i][j] + b[i][j];
        return r;
    }

    static int[][] multiply(int[][] a, int[][] b) {
        int[][] r = new int[a.length][b[0].length];
        for (int i = 0; i < a.length; i++)
            for (int j = 0; j < b[0].length; j++)
                for (int k = 0; k < b.length; k++)
                    r[i][j] += a[i][k] * b[k][j];
        return r;
    }

    public static void main(String[] args) {
        int[][] a = {{1, 2, 3}, {4, 5, 6}};
        int[][] b = {{7, 8}, {9, 10}, {11, 12}};

        System.out.println(Arrays.deepToString(transpose(a)));   // [[1, 4], [2, 5], [3, 6]]
        System.out.println(Arrays.deepToString(add(a, a)));      // [[2, 4, 6], [8, 10, 12]]
        System.out.println(Arrays.deepToString(multiply(a, b))); // [[58, 64], [139, 154]]
    }
}`,
   pts: [["Check sizes before adding or multiplying, otherwise you get an ArrayIndexOutOfBoundsException or a wrong answer.", "Multiplication is not commutative: A x B is usually not the same as B x A.", "Multiplication needs three nested loops: row of A, column of B, and the shared dimension k.", "Transposing in place is possible only for square matrices (swap m[i][j] with m[j][i] for j > i)."],
         ["Add ya multiply karne se pehle sizes check karo, warna ArrayIndexOutOfBoundsException ya galat answer aata hai.", "Multiplication commutative nahi hai: A x B aam taur par B x A ke barabar nahi hota.", "Multiplication me teen nested loops lagte hain: A ki row, B ka column, aur shared dimension k.", "In place transpose sirf square matrices me possible hai (j > i ke liye m[i][j] ko m[j][i] se swap karo)."]]},
  {h: ["Jagged arrays", "Jagged arrays"],
   p: ["Because each row is its own array, rows may have different lengths. This is called a jagged array. It saves memory when the data is not rectangular, for example Pascal's triangle or the number of marks each student has.",
       "Kyunki har row apna alag array hai, rows ki length alag-alag ho sakti hai. Ise jagged array kehte hain. Data rectangle na ho to ye memory bachata hai, jaise Pascal's triangle ya har student ke marks ki alag ginti."],
   code: `int[][] tri = new int[4][];            // 4 rows, row lengths not set yet
for (int i = 0; i < tri.length; i++) {
    tri[i] = new int[i + 1];           // row i has i + 1 cells
    tri[i][0] = 1;
    tri[i][i] = 1;
    for (int j = 1; j < i; j++) {
        tri[i][j] = tri[i - 1][j - 1] + tri[i - 1][j];   // Pascal's rule
    }
}

for (int[] row : tri) {
    for (int v : row) System.out.print(v + " ");
    System.out.println();
}
// 1
// 1 1
// 1 2 1
// 1 3 3 1

int[][] literal = {{1}, {2, 3}, {4, 5, 6}};
System.out.println(literal[2].length);      // 3
System.out.println(literal[0].length);      // 1`},
  {h: ["2D arrays in methods, and common mistakes", "Methods me 2D arrays aur common mistakes"],
   p: ["Pass and return 2D arrays like any array. Remember that a 2D array parameter is also a reference, so the method can change the cells. Here is a small game board, tic-tac-toe style, that shows these ideas.",
       "2D arrays ko kisi bhi array ki tarah pass aur return karo. Yaad rakho ki 2D array parameter bhi reference hota hai, isliye method cells badal sakta hai. Neeche ek chhota game board, tic-tac-toe jaisa, in ideas ko dikhata hai."],
   code: `public class Board {
    static void print(char[][] b) {
        for (char[] row : b) {
            for (char c : row) System.out.print(c + " ");
            System.out.println();
        }
    }

    static boolean rowWin(char[][] b, char p) {
        for (int i = 0; i < 3; i++)
            if (b[i][0] == p && b[i][1] == p && b[i][2] == p) return true;
        return false;
    }

    public static void main(String[] args) {
        char[][] board = new char[3][3];
        for (char[] row : board) java.util.Arrays.fill(row, '.');   // fill every row

        board[1][0] = 'X';
        board[1][1] = 'X';
        board[1][2] = 'X';
        print(board);
        System.out.println(rowWin(board, 'X'));    // true
    }
}`,
   pts: [["Mistake: swapping i and j in the loops. Check which one is the row and which is the column.", "Mistake: using m.length for the number of columns. That is the number of rows.", "Mistake: filling a 2D array with Arrays.fill(m, 5). It fails because each element is a row. Fill each row separately.", "Mistake: row = m[i] then row[j] works, but remember row is the SAME array, not a copy.", "Mistake: assuming every row has the same length in a jagged array. Use m[i].length.", "Mistake: copying with clone() and expecting a deep copy. The rows are still shared, so copy each row."],
         ["Galti: loops me i aur j ulta kar dena. Dekho kaun si row hai aur kaun sa column.", "Galti: columns ki ginti ke liye m.length use karna. Wo rows ki ginti hai.", "Galti: 2D array ko Arrays.fill(m, 5) se bharna. Ye fail hota hai kyunki har element ek row hai. Har row ko alag se bharo.", "Galti: row = m[i] fir row[j] chalta hai, par yaad rakho row WAHI array hai, copy nahi.", "Galti: jagged array me har row ki length same maan lena. m[i].length use karo.", "Galti: clone() se copy karke deep copy ki ummeed karna. Rows abhi bhi share hoti hain, isliye har row ko copy karo."]],
   tip: ["Always label your loops in your head: i is the ROW, j is the COLUMN, and the cell is m[i][j]. Write it as a comment if you tend to mix them up.", "Apne loops ko dimaag me label karo: i ROW hai, j COLUMN hai, aur cell m[i][j] hai. Mix ho jata ho to comment me likh do."]}
 ]},
17: {
 def: ["Traversal means visiting the elements of an array one by one, and searching means finding whether a value exists in the array and where. Linear search checks elements one after another and works on any array. Binary search repeatedly halves the search range and is much faster, but it needs a sorted array.",
       "Traversal ka matlab array ke elements ko ek-ek karke dekhna, aur searching ka matlab ye dhundhna ki koi value array me hai ya nahi aur kahan hai. Linear search elements ko ek ke baad ek check karta hai aur kisi bhi array par chalta hai. Binary search search range ko baar-baar aadha karta hai aur bahut tez hai, par sorted array maangta hai."],
 secs: [
  {h: ["Traversal patterns", "Traversal ke patterns"],
   p: ["Almost every array algorithm is a traversal with a small twist. Learn the common shapes: forward, backward, skipping, two pointers from both ends, and comparing neighbours.",
       "Lagbhag har array algorithm ek traversal hota hai jisme thoda sa twist hota hai. Common shapes seekho: aage, peeche, skip karte hue, dono ends se do pointers, aur padosi elements ki tulna."],
   code: `int[] a = {3, 8, 1, 9, 4, 7};

// Forward and backward
for (int i = 0; i < a.length; i++) System.out.print(a[i] + " ");
System.out.println();
for (int i = a.length - 1; i >= 0; i--) System.out.print(a[i] + " ");
System.out.println();

// Skipping: every second element (indexes 0, 2, 4)
for (int i = 0; i < a.length; i += 2) System.out.print(a[i] + " ");   // 3 1 4
System.out.println();

// Two pointers: compare the two ends and move inward
int i = 0, j = a.length - 1;
while (i < j) {
    System.out.println(a[i] + " and " + a[j]);     // (3,7) (8,4) (1,9)
    i++;
    j--;
}

// Neighbours: compare a[k] with a[k + 1] (stop one early!)
boolean sorted = true;
for (int k = 0; k < a.length - 1; k++) {
    if (a[k] > a[k + 1]) { sorted = false; break; }
}
System.out.println("Sorted? " + sorted);            // false

// Counting with a condition
int evens = 0;
for (int x : a) if (x % 2 == 0) evens++;
System.out.println(evens);                          // 2`,
   pts: [["When you look at a[k + 1], the loop must end at a.length - 1, or the last step goes out of bounds.", "Use break as soon as the answer is known. There is no need to look at the rest.", "Use a variable (found, count, max) declared BEFORE the loop to carry the answer out of it.", "Two-pointer loops often replace nested loops and run much faster."],
         ["a[k + 1] dekhte ho to loop a.length - 1 par khatam hona chahiye, warna aakhri step bounds se bahar chala jata hai.", "Answer pata chalte hi break use karo. Baaki ko dekhne ki zarurat nahi.", "Answer ko loop se bahar le jane ke liye variable (found, count, max) loop se PEHLE declare karo.", "Two-pointer loops aksar nested loops ki jagah lete hain aur bahut tez chalte hain."]]},
  {h: ["Linear search", "Linear search"],
   p: ["Linear (sequential) search starts at the first element and compares each one with the key until it finds a match or reaches the end. In the worst case it checks all n elements, so its running time is O(n). Its great advantage is that it works on any array, sorted or not.",
       "Linear (sequential) search pehle element se shuru karke har ek ko key se compare karta hai jab tak match na mile ya end na aa jaye. Worst case me saare n elements check hote hain, isliye running time O(n) hai. Iska bada fayda ye hai ki ye kisi bhi array par chalta hai, sorted ho ya na ho."],
   code: `public class LinearSearch {
    // Index of the first match, or -1
    static int indexOf(int[] a, int key) {
        for (int i = 0; i < a.length; i++) {
            if (a[i] == key) return i;
        }
        return -1;                               // checked everything, not found
    }

    // Does the value exist?
    static boolean contains(int[] a, int key) {
        return indexOf(a, key) != -1;
    }

    // Count all matches
    static int count(int[] a, int key) {
        int c = 0;
        for (int x : a) if (x == key) c++;
        return c;
    }

    // All positions of the key
    static void printAll(int[] a, int key) {
        for (int i = 0; i < a.length; i++)
            if (a[i] == key) System.out.print(i + " ");
        System.out.println();
    }

    public static void main(String[] args) {
        int[] a = {4, 9, 2, 9, 7, 9};
        System.out.println(indexOf(a, 7));       // 4
        System.out.println(indexOf(a, 5));       // -1
        System.out.println(contains(a, 2));      // true
        System.out.println(count(a, 9));         // 3
        printAll(a, 9);                          // 1 3 5

        // Searching Strings: compare with equals(), never ==
        String[] team = {"Rahul", "Gurleen", "Himakshi", "Mohit", "Shivam"};
        String want = "Mohit";
        for (int i = 0; i < team.length; i++) {
            if (team[i].equals(want)) {
                System.out.println(want + " is at index " + i);     // index 3
                break;
            }
        }
    }
}`,
   pts: [["Best case: the key is the first element (1 comparison). Worst case: the key is last or missing (n comparisons). Average: about n / 2.", "It works on unsorted data, on linked lists and on any collection.", "For Strings always use equals() or equalsIgnoreCase() inside the search.", "Return -1 (not 0) for not found, because 0 is a valid index."],
         ["Best case: key pehla element hai (1 comparison). Worst case: key aakhri hai ya hai hi nahi (n comparisons). Average: lagbhag n / 2.", "Ye unsorted data, linked lists aur kisi bhi collection par chalta hai.", "Strings ke liye search ke andar hamesha equals() ya equalsIgnoreCase() use karo.", "Na milne par -1 return karo (0 nahi), kyunki 0 ek valid index hai."]]},
  {h: ["Binary search: the idea", "Binary search: idea"],
   p: ["Think of looking for a word in a dictionary. You do not start at page 1. You open the middle, see whether your word comes before or after, and throw away half the book. Binary search does exactly that on a sorted array. Each step halves the range, so 1,000,000 elements need only about 20 steps, while linear search may need 1,000,000.",
       "Socho dictionary me ek word dhundh rahe ho. Page 1 se shuru nahi karte. Beech ka page kholte ho, dekhte ho ki tumhara word pehle aata hai ya baad me, aur aadhi kitab chhod dete ho. Binary search sorted array par bilkul yahi karta hai. Har step range aadhi kar deta hai, isliye 10 lakh elements ko sirf lagbhag 20 steps lagte hain, jabki linear search ko 10 lakh lag sakte hain."],
   pts: [["Precondition: the array MUST be sorted. On unsorted data the result is wrong.", "Keep three variables: lo (left end), hi (right end) and mid (the middle).", "If a[mid] equals the key, you are done. If a[mid] is smaller than the key, search the right half (lo = mid + 1). Otherwise search the left half (hi = mid - 1).", "If lo becomes greater than hi, the range is empty and the key is not present.", "Time: O(log n). Each comparison removes half the remaining elements."],
         ["Precondition: array SORTED hona ZAROORI hai. Unsorted data par result galat aata hai.", "Teen variables rakho: lo (left end), hi (right end) aur mid (beech).", "a[mid] key ke barabar ho to kaam khatam. a[mid] key se chhota ho to right half me dhundho (lo = mid + 1). Warna left half me (hi = mid - 1).", "lo, hi se bada ho jaye to range khali hai aur key maujood nahi hai.", "Time: O(log n). Har comparison bache hue elements ka aadha hata deta hai."]],
   code: `// Searching for 23 in {2, 5, 8, 12, 16, 23, 38}  (indexes 0 to 6)
//
// lo = 0, hi = 6, mid = 3 -> a[3] = 12 < 23, go RIGHT  -> lo = 4
// lo = 4, hi = 6, mid = 5 -> a[5] = 23 == 23, FOUND at index 5
//
// Searching for 7:
// lo = 0, hi = 6, mid = 3 -> 12 > 7, go LEFT  -> hi = 2
// lo = 0, hi = 2, mid = 1 -> 5 < 7,  go RIGHT -> lo = 2
// lo = 2, hi = 2, mid = 2 -> 8 > 7,  go LEFT  -> hi = 1
// lo = 2 > hi = 1 -> range empty -> NOT FOUND (-1)`},
  {h: ["Binary search: iterative and recursive code", "Binary search: iterative aur recursive code"],
   p: ["Write the middle as lo + (hi - lo) / 2. The shorter (lo + hi) / 2 can overflow for huge arrays. The loop condition is lo <= hi. The recursive version does the same job by calling itself on the smaller range.",
       "Beech ko lo + (hi - lo) / 2 likho. Chhota (lo + hi) / 2 bahut bade arrays me overflow kar sakta hai. Loop condition lo <= hi hoti hai. Recursive version wahi kaam chhoti range par khud ko call karke karta hai."],
   code: `import java.util.Arrays;

public class BinarySearchDemo {
    // Iterative
    static int binarySearch(int[] a, int key) {
        int lo = 0, hi = a.length - 1;
        while (lo <= hi) {
            int mid = lo + (hi - lo) / 2;
            if (a[mid] == key) return mid;
            else if (a[mid] < key) lo = mid + 1;
            else hi = mid - 1;
        }
        return -1;
    }

    // Recursive
    static int search(int[] a, int key, int lo, int hi) {
        if (lo > hi) return -1;                   // base case: empty range
        int mid = lo + (hi - lo) / 2;
        if (a[mid] == key) return mid;
        if (a[mid] < key) return search(a, key, mid + 1, hi);
        return search(a, key, lo, mid - 1);
    }

    // First occurrence when there are duplicates
    static int firstIndex(int[] a, int key) {
        int lo = 0, hi = a.length - 1, ans = -1;
        while (lo <= hi) {
            int mid = lo + (hi - lo) / 2;
            if (a[mid] == key) { ans = mid; hi = mid - 1; }   // keep looking left
            else if (a[mid] < key) lo = mid + 1;
            else hi = mid - 1;
        }
        return ans;
    }

    public static void main(String[] args) {
        int[] a = {2, 5, 8, 12, 16, 23, 38};
        System.out.println(binarySearch(a, 23));                 // 5
        System.out.println(binarySearch(a, 7));                  // -1
        System.out.println(search(a, 23, 0, a.length - 1));      // 5
        System.out.println(firstIndex(new int[]{1, 2, 2, 2, 3}, 2));   // 1

        // Built-in versions
        System.out.println(Arrays.binarySearch(a, 23));          // 5
        System.out.println(Arrays.binarySearch(a, 10));          // -4  (not found)
    }
}`,
   pts: [["Arrays.binarySearch returns the index if found. If not found it returns -(insertion point) - 1, so -4 means the key would be inserted at index 3.", "Calling it on an unsorted array gives undefined (wrong) results. Sort first with Arrays.sort.", "For duplicates, plain binary search returns ANY matching index. Use the firstIndex style to get the first one.", "Common bugs: lo < hi instead of lo <= hi (misses the last candidate), and mid = lo (never moves, infinite loop)."],
         ["Arrays.binarySearch mil jaye to index deta hai. Na mile to -(insertion point) - 1 deta hai, isliye -4 ka matlab key index 3 par insert hogi.", "Unsorted array par ise call karne se undefined (galat) result aata hai. Pehle Arrays.sort se sort karo.", "Duplicates ho to simple binary search KOI BHI matching index deta hai. Pehla index chahiye to firstIndex wala style use karo.", "Common bugs: lo <= hi ki jagah lo < hi (aakhri candidate chhut jata hai), aur mid = lo (aage nahi badhta, infinite loop)."]]},
  {h: ["Linear vs binary search", "Linear vs binary search"],
   p: ["Choose the tool by looking at your data. If the data is small or unsorted, linear search is simple and perfect. If you search many times in a large sorted array, binary search saves a huge amount of time. Sorting costs time too, so sorting once and then searching thousands of times is the winning plan.",
       "Tool apne data ko dekhkar chuno. Data chhota ho ya unsorted ho to linear search simple aur perfect hai. Bade sorted array me kai baar search karna ho to binary search bahut time bachata hai. Sorting me bhi time lagta hai, isliye ek baar sort karke hazaron baar search karna jeetne wala plan hai."],
   pts: [["Linear search: any array, O(n), no extra requirement, easy to write.", "Binary search: sorted array only, O(log n), a bit trickier to write.", "Number of steps for n = 1,000 : linear up to 1,000, binary about 10.", "Number of steps for n = 1,000,000 : linear up to 1,000,000, binary about 20.", "If the data changes all the time (many inserts), keeping it sorted is costly. A HashSet or HashMap (Phase 4) is then a better choice for searching.", "To search a 2D array, run linear search with two nested loops. If every row and column is sorted, a smarter method starts at a corner and moves in one direction each step."],
         ["Linear search: koi bhi array, O(n), koi extra shart nahi, likhna aasan.", "Binary search: sirf sorted array, O(log n), likhna thoda tricky.", "n = 1,000 ke liye steps: linear max 1,000, binary lagbhag 10.", "n = 10,00,000 ke liye steps: linear max 10,00,000, binary lagbhag 20.", "Data baar-baar badalta ho (bahut inserts) to use sorted rakhna mehnga hai. Tab searching ke liye HashSet ya HashMap (Phase 4) behtar choice hai.", "2D array me search ke liye do nested loops se linear search chalao. Har row aur column sorted ho to smarter tareeka ek corner se shuru karke har step me ek direction me chalta hai."]],
   code: `// Search in a 2D array (linear, two loops)
static int[] find(int[][] m, int key) {
    for (int i = 0; i < m.length; i++)
        for (int j = 0; j < m[i].length; j++)
            if (m[i][j] == key) return new int[]{i, j};
    return new int[]{-1, -1};
}

int[][] grid = {{1, 3, 5}, {7, 9, 11}};
int[] pos = find(grid, 9);
System.out.println(pos[0] + ", " + pos[1]);     // 1, 1`},
  {h: ["Classic traversal and search problems", "Classic traversal aur search problems"],
   p: ["These problems appear in almost every exam and interview. Try to write each one yourself before reading the solution.",
       "Ye problems lagbhag har exam aur interview me aate hain. Solution padhne se pehle har ek ko khud likhne ki koshish karo."],
   code: `import java.util.Arrays;

public class ClassicProblems {
    // Second largest in one pass
    static int secondLargest(int[] a) {
        int first = Integer.MIN_VALUE, second = Integer.MIN_VALUE;
        for (int x : a) {
            if (x > first) { second = first; first = x; }
            else if (x > second && x != first) second = x;
        }
        return second;
    }

    // Find the missing number in 1..n (one number is missing)
    static int missing(int[] a, int n) {
        int expected = n * (n + 1) / 2, actual = 0;
        for (int x : a) actual += x;
        return expected - actual;
    }

    // First duplicate value (brute force)
    static int firstDuplicate(int[] a) {
        for (int i = 0; i < a.length; i++)
            for (int j = i + 1; j < a.length; j++)
                if (a[i] == a[j]) return a[i];
        return -1;
    }

    // Is the array a palindrome? (two pointers)
    static boolean isPalin(int[] a) {
        for (int i = 0, j = a.length - 1; i < j; i++, j--)
            if (a[i] != a[j]) return false;
        return true;
    }

    // Two numbers that add up to a target (brute force)
    static int[] twoSum(int[] a, int target) {
        for (int i = 0; i < a.length; i++)
            for (int j = i + 1; j < a.length; j++)
                if (a[i] + a[j] == target) return new int[]{i, j};
        return new int[]{-1, -1};
    }

    public static void main(String[] args) {
        System.out.println(secondLargest(new int[]{4, 9, 7}));          // 7
        System.out.println(missing(new int[]{1, 2, 4, 5}, 5));          // 3
        System.out.println(firstDuplicate(new int[]{3, 1, 4, 1, 5}));   // 1
        System.out.println(isPalin(new int[]{1, 2, 3, 2, 1}));          // true
        System.out.println(Arrays.toString(twoSum(new int[]{2, 7, 11, 15}, 9)));   // [0, 1]
    }
}`,
   tip: ["Before writing code, solve the example by hand and say in words what you do at each step. If you can explain it, the code is only a translation.", "Code likhne se pehle example hath se solve karo aur har step par kya karte ho wo shabdon me bolo. Samjha sako to code bas uska anuvaad hai."]}
 ]},
18: {
 def: ["Sorting means arranging the elements of an array in a particular order, usually ascending (smallest to largest) or descending. Sorted data is easier to search, compare, group and display. The three basic algorithms are bubble sort, selection sort and insertion sort, and in real programs we usually call the built-in Arrays.sort().",
       "Sorting ka matlab array ke elements ko ek khaas order me lagana, aam taur par ascending (chhote se bade) ya descending. Sorted data ko search, compare, group aur display karna aasan hota hai. Teen basic algorithms bubble sort, selection sort aur insertion sort hain, aur real programs me hum aam taur par built-in Arrays.sort() call karte hain."],
 secs: [
  {h: ["Why sort, and the swap operation", "Sort kyun karein, aur swap operation"],
   p: ["Sorting makes many tasks easy: binary search works only on sorted data, duplicates sit next to each other, the median is in the middle, and a leaderboard is simply a sorted list. Every basic sorting algorithm is built from one small move, the swap, which exchanges two elements using a temporary variable.",
       "Sorting se kai kaam aasan ho jate hain: binary search sirf sorted data par chalta hai, duplicates ek-dusre ke paas aa jate hain, median beech me hota hai, aur leaderboard bas ek sorted list hai. Har basic sorting algorithm ek chhoti move se bana hai, swap, jo temporary variable se do elements badal deta hai."],
   code: `int[] a = {7, 3, 9};

// Swap a[0] and a[1]
int temp = a[0];
a[0] = a[1];
a[1] = temp;
// a is now {3, 7, 9}

// Wrong: a[0] = a[1]; a[1] = a[0];   // both become the same value, one is lost!

static void swap(int[] arr, int i, int j) {
    int t = arr[i];
    arr[i] = arr[j];
    arr[j] = t;
}`,
   pts: [["Ascending: smallest first (1, 2, 3). Descending: largest first (3, 2, 1).", "In-place sort: it rearranges the same array and needs no second array.", "Stable sort: equal elements keep their original relative order. This matters when sorting records by one field.", "Always keep one copy of the temporary value before overwriting."],
         ["Ascending: sabse chhota pehle (1, 2, 3). Descending: sabse bada pehle (3, 2, 1).", "In-place sort: wahi array rearrange hota hai aur dusre array ki zarurat nahi.", "Stable sort: barabar elements apna original relative order rakhte hain. Records ko ek field se sort karte waqt ye matter karta hai.", "Overwrite karne se pehle temporary value ki ek copy hamesha rakho."]]},
  {h: ["Bubble sort", "Bubble sort"],
   p: ["Bubble sort compares each pair of neighbours and swaps them if they are in the wrong order. After the first pass the largest value has 'bubbled' to the end. After the second pass the second largest is in place, and so on. After n - 1 passes the array is sorted.",
       "Bubble sort har padosi jodi ko compare karta hai aur galat order me ho to swap karta hai. Pehle pass ke baad sabse bada value bubble ki tarah end me pahunch jata hai. Dusre pass ke baad doosra sabse bada apni jagah par hota hai, aur aise hi. n - 1 passes ke baad array sorted hota hai."],
   code: `// Trace for {5, 3, 8, 1}
// Pass 1: (5,3) swap -> 3 5 8 1 | (5,8) ok | (8,1) swap -> 3 5 1 8
// Pass 2: (3,5) ok   | (5,1) swap -> 3 1 5 8 | (5,8) ok
// Pass 3: (3,1) swap -> 1 3 5 8   -> sorted

import java.util.Arrays;

public class BubbleSort {
    static void bubbleSort(int[] a) {
        for (int pass = 0; pass < a.length - 1; pass++) {
            boolean swapped = false;
            for (int i = 0; i < a.length - 1 - pass; i++) {   // the last 'pass' items are already placed
                if (a[i] > a[i + 1]) {
                    int t = a[i]; a[i] = a[i + 1]; a[i + 1] = t;
                    swapped = true;
                }
            }
            if (!swapped) break;       // no swaps means already sorted: stop early
        }
    }

    public static void main(String[] args) {
        int[] a = {5, 3, 8, 1};
        bubbleSort(a);
        System.out.println(Arrays.toString(a));    // [1, 3, 5, 8]
    }
}`,
   pts: [["Time: O(n squared) in the worst and average case. With the swapped flag the best case (already sorted) is O(n).", "Space: O(1), it sorts in place.", "Stable: yes, because equal neighbours are never swapped.", "Easy to understand, but slow. Use it only to learn.", "For descending order change > to < in the comparison."],
         ["Time: worst aur average case me O(n squared). swapped flag ke saath best case (pehle se sorted) O(n) hota hai.", "Space: O(1), ye in place sort karta hai.", "Stable: haan, kyunki barabar padosi kabhi swap nahi hote.", "Samajhna aasan hai, par slow hai. Sirf seekhne ke liye use karo.", "Descending order ke liye comparison me > ko < kar do."]]},
  {h: ["Selection sort", "Selection sort"],
   p: ["Selection sort splits the array into a sorted part (left) and an unsorted part (right). In each pass it SELECTS the smallest element of the unsorted part and swaps it into the first unsorted position. It makes very few swaps (at most n - 1), which is useful when writing to memory is expensive.",
       "Selection sort array ko sorted hisse (left) aur unsorted hisse (right) me baantta hai. Har pass me wo unsorted hisse ka sabse chhota element SELECT karta hai aur use pehli unsorted position par swap karta hai. Isme swaps bahut kam hote hain (zyada se zyada n - 1), jo tab kaam aata hai jab memory me likhna mehnga ho."],
   code: `// Trace for {64, 25, 12, 22, 11}
// Pass 1: smallest is 11 -> swap with 64 -> 11 25 12 22 64
// Pass 2: smallest of the rest is 12 -> swap with 25 -> 11 12 25 22 64
// Pass 3: smallest of the rest is 22 -> swap with 25 -> 11 12 22 25 64
// Pass 4: 25 is already smallest -> 11 12 22 25 64   (done)

static void selectionSort(int[] a) {
    for (int i = 0; i < a.length - 1; i++) {
        int min = i;                               // index of the smallest so far
        for (int j = i + 1; j < a.length; j++) {
            if (a[j] < a[min]) min = j;
        }
        int t = a[i]; a[i] = a[min]; a[min] = t;   // one swap per pass
    }
}`,
   pts: [["Time: O(n squared) in every case, even if the array is already sorted.", "Space: O(1).", "Stable: no in the usual form, because the long-distance swap can reorder equal elements.", "Number of swaps: at most n - 1, the lowest of the three simple algorithms."],
         ["Time: har case me O(n squared), array pehle se sorted ho tab bhi.", "Space: O(1).", "Stable: aam form me nahi, kyunki lambi doori ka swap barabar elements ka order badal sakta hai.", "Swaps: zyada se zyada n - 1, teen simple algorithms me sabse kam."]]},
  {h: ["Insertion sort", "Insertion sort"],
   p: ["Insertion sort works like arranging playing cards in your hand. The left part is already sorted. Take the next element (the key), shift the bigger sorted elements one step to the right, and drop the key into the gap. It is very fast on nearly sorted data and is used inside real libraries for small arrays.",
       "Insertion sort haath me taash ke patte jamane jaisa kaam karta hai. Left hissa pehle se sorted hota hai. Agla element (key) lo, usse bade sorted elements ko ek step right me khiskao, aur key ko khali jagah me daal do. Lagbhag sorted data par ye bahut tez hai aur real libraries me chhote arrays ke liye use hota hai."],
   code: `// Trace for {9, 5, 1, 4}
// key = 5: shift 9 right -> 5 9 1 4
// key = 1: shift 9 and 5 -> 1 5 9 4
// key = 4: shift 9 and 5 -> 1 4 5 9   (done)

static void insertionSort(int[] a) {
    for (int i = 1; i < a.length; i++) {
        int key = a[i];
        int j = i - 1;
        while (j >= 0 && a[j] > key) {     // shift bigger elements to the right
            a[j + 1] = a[j];
            j--;
        }
        a[j + 1] = key;                    // drop the key into the gap
    }
}`,
   pts: [["Time: O(n squared) worst case (reverse sorted), O(n) best case (already sorted).", "Space: O(1).", "Stable: yes, because it only shifts elements that are strictly greater.", "Great for small arrays and for data that is almost sorted.", "Check j >= 0 BEFORE a[j] > key, or you read a[-1] and crash."],
         ["Time: worst case (ulta sorted) O(n squared), best case (pehle se sorted) O(n).", "Space: O(1).", "Stable: haan, kyunki ye sirf strictly bade elements ko khiskata hai.", "Chhote arrays aur lagbhag sorted data ke liye bahut achha.", "j >= 0 ko a[j] > key SE PEHLE check karo, warna a[-1] padhne par crash hoga."]]},
  {h: ["The built-in Arrays.sort()", "Built-in Arrays.sort()"],
   p: ["In real programs you almost never write a sorting algorithm yourself. Arrays.sort() is already written, tested and fast (about O(n log n)). For int, double and other primitives it uses a tuned quicksort. For objects such as String it uses a stable merge sort variant. You can also sort only a range of the array.",
       "Real programs me sorting algorithm khud likhne ki zarurat lagbhag kabhi nahi padti. Arrays.sort() pehle se likha, test kiya aur tez hai (lagbhag O(n log n)). int, double jaise primitives ke liye ye tuned quicksort use karta hai. String jaise objects ke liye stable merge sort variant. Array ki sirf ek range bhi sort kar sakte ho."],
   code: `import java.util.Arrays;
import java.util.Collections;

public class BuiltInSort {
    public static void main(String[] args) {
        int[] a = {9, 4, 7, 1, 8};
        Arrays.sort(a);
        System.out.println(Arrays.toString(a));        // [1, 4, 7, 8, 9]

        int[] b = {9, 7, 5, 3, 1};
        Arrays.sort(b, 1, 4);                          // only indexes 1, 2, 3
        System.out.println(Arrays.toString(b));        // [9, 3, 5, 7, 1]

        // Strings: dictionary order, capital letters come before small letters
        String[] team = {"Shivam", "Gurleen", "Mohit", "Himakshi", "Rahul"};
        Arrays.sort(team);
        System.out.println(Arrays.toString(team));
        // [Gurleen, Himakshi, Mohit, Rahul, Shivam]

        String[] mixed = {"banana", "Apple", "cherry"};
        Arrays.sort(mixed);                            // [Apple, banana, cherry]
        Arrays.sort(mixed, String.CASE_INSENSITIVE_ORDER);

        // Descending order needs an object array (Integer[], not int[])
        Integer[] boxed = {5, 3, 8, 1};
        Arrays.sort(boxed, Collections.reverseOrder());
        System.out.println(Arrays.toString(boxed));    // [8, 5, 3, 1]

        // Descending for int[]: sort, then reverse
        int[] c = {5, 3, 8, 1};
        Arrays.sort(c);
        for (int i = 0, j = c.length - 1; i < j; i++, j--) {
            int t = c[i]; c[i] = c[j]; c[j] = t;
        }
        System.out.println(Arrays.toString(c));        // [8, 5, 3, 1]
    }
}`,
   pts: [["Arrays.sort(arr) sorts ascending. Arrays.sort(arr, from, to) sorts from (included) to to (excluded).", "Arrays.sort(arr, Collections.reverseOrder()) does NOT work with int[]. Use Integer[] or reverse manually.", "Sorting custom objects needs a Comparable or Comparator, which you will learn in Phase 4.", "Arrays.sort changes the original array. Make a copy first if you still need the original order.", "A quick way to test your own sort: compare its result with Arrays.sort on the same data."],
         ["Arrays.sort(arr) ascending sort karta hai. Arrays.sort(arr, from, to) from (shamil) se to (shamil nahi) tak sort karta hai.", "Arrays.sort(arr, Collections.reverseOrder()) int[] ke saath NAHI chalta. Integer[] use karo ya manually reverse karo.", "Custom objects ko sort karne ke liye Comparable ya Comparator chahiye, jo Phase 4 me seekhoge.", "Arrays.sort original array badal deta hai. Original order chahiye to pehle copy bana lo.", "Apne sort ko test karne ka aasan tareeka: usi data par uska result Arrays.sort se compare karo."]]},
  {h: ["Comparing the algorithms", "Algorithms ki tulna"],
   p: ["All three simple algorithms take O(n squared) time, so for 10,000 elements they do about 100 million steps. Fast algorithms such as merge sort and quicksort take O(n log n), which is about 130,000 steps for the same 10,000 elements. That is why real libraries use them.",
       "Teeno simple algorithms O(n squared) time lete hain, isliye 10,000 elements ke liye lagbhag 10 crore steps. Merge sort aur quicksort jaise tez algorithms O(n log n) lete hain, jo usi 10,000 elements ke liye lagbhag 1,30,000 steps hain. Isi wajah se real libraries unhe use karti hain."],
   pts: [["Bubble sort: best O(n) with the flag, worst O(n squared), stable, simple.", "Selection sort: always O(n squared), not stable, the fewest swaps.", "Insertion sort: best O(n), worst O(n squared), stable, best for small or nearly sorted data.", "Merge sort: always O(n log n), stable, needs extra memory.", "Quicksort: average O(n log n), worst O(n squared), not stable, very fast in practice.", "Arrays.sort: O(n log n). Use this in every real program.", "In exams you are often asked to write bubble, selection or insertion sort by hand, so learn all three."],
         ["Bubble sort: flag ke saath best O(n), worst O(n squared), stable, simple.", "Selection sort: hamesha O(n squared), stable nahi, sabse kam swaps.", "Insertion sort: best O(n), worst O(n squared), stable, chhote ya lagbhag sorted data ke liye best.", "Merge sort: hamesha O(n log n), stable, extra memory chahiye.", "Quicksort: average O(n log n), worst O(n squared), stable nahi, practice me bahut tez.", "Arrays.sort: O(n log n). Har real program me ise use karo.", "Exams me aksar bubble, selection ya insertion sort hath se likhne ko kaha jata hai, isliye teeno seekho."]],
   code: `// Rough number of steps (approximate)
//  n          O(n^2)            O(n log n)
//  100        10,000            about 700
//  10,000     100,000,000       about 130,000
//  1,000,000  1,000,000,000,000 about 20,000,000`},
  {h: ["Useful sorting tricks and problems", "Kaam ke sorting tricks aur problems"],
   p: ["Once data is sorted, many problems become short. Here are a few you will meet often, including a counting sort that is very fast when the values are small whole numbers.",
       "Data sorted ho jaye to kai problems chhote ho jate hain. Yahan kuch hain jo tumhe aksar milenge, saath me ek counting sort jo tab bahut tez hota hai jab values chhote whole numbers ho."],
   code: `import java.util.Arrays;

public class SortTricks {
    static boolean isSorted(int[] a) {
        for (int i = 0; i < a.length - 1; i++)
            if (a[i] > a[i + 1]) return false;
        return true;
    }

    // Counting sort: values must be 0..max
    static void countingSort(int[] a, int max) {
        int[] count = new int[max + 1];
        for (int x : a) count[x]++;
        int idx = 0;
        for (int v = 0; v <= max; v++)
            while (count[v]-- > 0) a[idx++] = v;
    }

    public static void main(String[] args) {
        int[] a = {4, 2, 2, 8, 3, 3, 1};
        System.out.println(isSorted(a));               // false
        countingSort(a, 8);
        System.out.println(Arrays.toString(a));        // [1, 2, 2, 3, 3, 4, 8]

        // Median (the middle value of a sorted array)
        int[] m = {7, 1, 5, 3, 9};
        Arrays.sort(m);
        System.out.println("Median = " + m[m.length / 2]);   // 5

        // Duplicates sit next to each other after sorting
        int[] d = {3, 1, 4, 1, 5, 3};
        Arrays.sort(d);
        for (int i = 1; i < d.length; i++)
            if (d[i] == d[i - 1]) System.out.println("Duplicate: " + d[i]);   // 1, 3

        // k-th largest: sort, then count from the end
        int k = 2;
        System.out.println(d[d.length - k]);            // 4
    }
}`,
   pts: [["Mistake: stopping the bubble sort inner loop at a.length instead of a.length - 1 - pass, which reads past the end.", "Mistake: sorting a copy and then forgetting to use it. Arrays.sort works in place and returns nothing.", "Mistake: comparing Strings with < or >. Use compareTo() for Strings.", "Mistake: expecting Arrays.sort to sort a 2D array row by row. It sorts the order of the row references. Sort each row inside a loop.", "Practice list: sort descending without a library, sort Strings by length, find the k-th largest, merge two sorted arrays, and check whether two arrays are anagrams of each other by sorting."],
         ["Galti: bubble sort ke inner loop ko a.length - 1 - pass ki jagah a.length par rokna, jisse end ke paar padhta hai.", "Galti: copy sort karke use istemal karna bhul jana. Arrays.sort in place chalta hai aur kuch return nahi karta.", "Galti: Strings ko < ya > se compare karna. Strings ke liye compareTo() use karo.", "Galti: Arrays.sort se 2D array ko row by row sort hone ki ummeed. Wo row references ka order sort karta hai. Har row ko loop me sort karo.", "Practice list: bina library ke descending sort, Strings ko length se sort, k-th largest, do sorted arrays ko merge, aur sorting se check karna ki do arrays anagram hain ya nahi."]],
   tip: ["First write the three simple sorts by hand and trace them on paper with 4 or 5 numbers. After that, always use Arrays.sort in real code.", "Pehle teeno simple sorts hath se likho aur 4-5 numbers par kagaz par trace karo. Uske baad real code me hamesha Arrays.sort use karo."]}
 ]}
});