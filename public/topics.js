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

Object.assign(TOPICS, {
19: {
 def: ["A String in Java is an object that stores a sequence of characters, such as \"Hello\". The String class (in java.lang) is used for all text: names, messages, file paths and user input. The most important fact about it is that a String is immutable: once it is created, its content can never change.",
       "Java me String ek object hai jo characters ka sequence store karta hai, jaise \"Hello\". String class (java.lang me) saare text ke liye use hoti hai: naam, messages, file paths aur user input. Iske baare me sabse zaroori baat ye hai ki String immutable hai: ek baar ban gayi to uska content kabhi nahi badalta."],
 secs: [
  {h: ["What is a String?", "String kya hai?"],
   p: ["Java has no primitive type for text, so it gives you the String class. Because text is used everywhere, Java adds special help: you can create a String with just double quotes, and you can join Strings with the + operator. A String remembers its characters and its length, and every character has an index that starts at 0.",
       "Java me text ke liye primitive type nahi hai, isliye String class di gayi hai. Text har jagah use hota hai, isliye Java kuch khaas madad deta hai: sirf double quotes se String bana sakte ho, aur + operator se Strings jod sakte ho. String apne characters aur length yaad rakhti hai, aur har character ka index 0 se shuru hota hai."],
   pts: [["String is a class (java.lang.String), so it is a reference type and a String variable can be null.", "A char is ONE character in single quotes ('A'). A String is zero or more characters in double quotes (\"A\", \"Java\", \"\").", "Positions are called indexes and start at 0. In \"Java\", J is at index 0 and the last a is at index 3.", "length() gives the number of characters. The last valid index is length() - 1.", "You never import String. It is available in every program automatically.", "A String can hold letters, digits, spaces, symbols and emojis. \"123\" is TEXT, not a number."],
         ["String ek class hai (java.lang.String), isliye ye reference type hai aur String variable null ho sakta hai.", "char single quotes me ek character hota hai ('A'). String double quotes me zero ya zyada characters hoti hai (\"A\", \"Java\", \"\").", "Positions ko index kehte hain aur ye 0 se shuru hote hain. \"Java\" me J index 0 par aur aakhri a index 3 par hai.", "length() characters ki ginti deta hai. Aakhri valid index length() - 1 hota hai.", "String ko import karne ki zarurat nahi. Ye har program me apne aap available hai.", "String me letters, digits, spaces, symbols aur emojis aa sakte hain. \"123\" TEXT hai, number nahi."]],
   code: `String course = "Java";
System.out.println(course);               // Java
System.out.println(course.length());      // 4
System.out.println(course.charAt(0));     // J
System.out.println(course.charAt(3));     // a  (last index = length - 1)

String empty = "";
System.out.println(empty.length());       // 0

String digits = "123";
System.out.println(digits + 1);                      // 1231  (text joined, NOT 124)
System.out.println(Integer.parseInt(digits) + 1);    // 124   (converted to a number first)`},
  {h: ["Creating Strings and the String pool", "Strings banana aur String pool"],
   p: ["There are two main ways to create a String. A literal (just text in double quotes) is stored in a special memory area called the String pool. If you write the same literal again, Java reuses the SAME object, which saves memory. new String(\"...\") always creates a brand new object outside the pool, even when the same text already exists there.",
       "String banane ke do main tareeke hain. Literal (sirf double quotes me text) ek khaas memory area me store hota hai jise String pool kehte hain. Wahi literal dobara likhoge to Java SAME object dobara use karta hai, isse memory bachti hai. new String(\"...\") hamesha pool ke bahar bilkul naya object banata hai, chahe wahi text pehle se wahan ho."],
   pts: [["Literal: String s = \"Java\"; goes into the pool and is shared.", "new String(\"Java\") creates a separate object on the heap. It is rarely needed, so prefer literals.", "intern() returns the pooled version of a String.", "Two constants joined by the compiler (\"Ja\" + \"va\") are pooled, but a join done while the program runs creates a new object.", "You can also build a String from a char array: new String(chars) or String.valueOf(chars)."],
         ["Literal: String s = \"Java\"; pool me jata hai aur share hota hai.", "new String(\"Java\") heap par alag object banata hai. Iski kam hi zarurat padti hai, isliye literals ko prefer karo.", "intern() String ka pooled version return karta hai.", "Compiler dwara jode gaye do constants (\"Ja\" + \"va\") pool me jate hain, par program chalte waqt kiya gaya join naya object banata hai.", "char array se bhi String bana sakte ho: new String(chars) ya String.valueOf(chars)."]],
   code: `String s1 = "Java";                 // literal: goes into the pool
String s2 = "Java";                 // reuses the SAME pooled object
String s3 = new String("Java");     // always a NEW object

System.out.println(s1 == s2);       // true  (same object)
System.out.println(s1 == s3);       // false (different objects)
System.out.println(s1.equals(s3));  // true  (same text)

String s4 = s3.intern();            // the pooled version
System.out.println(s1 == s4);       // true

char[] letters = {'J', 'a', 'v', 'a'};
String s5 = new String(letters);
String s6 = String.valueOf(letters);
System.out.println(s5.equals(s6));  // true

String constant = "Ja" + "va";      // joined by the compiler: pooled
System.out.println(s1 == constant); // true
String part = "Ja";
String runtime = part + "va";       // joined while running: NEW object
System.out.println(s1 == runtime);  // false`},
  {h: ["Immutability: Strings never change", "Immutability: Strings kabhi nahi badalti"],
   p: ["Immutable means that once a String object exists, its characters can never be changed. Methods like toUpperCase() or replace() do not touch the original. They return a NEW String, and if you do not store it, the result is lost. When you write s = s + \"x\", the variable s simply starts pointing to a new object.",
       "Immutable ka matlab hai ki String object ban jaye to uske characters kabhi nahi badal sakte. toUpperCase() ya replace() jaise methods original ko nahi chhuate. Wo NAYI String return karte hain, aur use store na karo to result kho jata hai. s = s + \"x\" likhne par variable s bas ek naye object ko point karne lagta hai."],
   pts: [["Why immutable? Strings are shared through the pool, so they must be safe from changes made by other code.", "It makes Strings thread-safe, so many threads can read the same String without problems.", "It is good for security: a file name or a password check cannot be changed behind your back.", "Its hash code can be cached, which makes Strings fast keys in HashMap (Phase 4).", "The cost: changing a String again and again creates many throw-away objects. Use StringBuilder for that (next lessons).", "final String f = \"x\"; means the VARIABLE cannot be reassigned. A String is immutable even without final."],
         ["Immutable kyun? Strings pool ke through share hoti hain, isliye unhe dusre code ke badlav se safe rehna chahiye.", "Isse Strings thread-safe ho jati hain, yaani kai threads ek hi String ko bina problem padh sakte hain.", "Security ke liye achha hai: file name ya password check tumhare peeche se badla nahi ja sakta.", "Iska hash code cache ho sakta hai, jisse Strings HashMap (Phase 4) me tez keys banti hain.", "Keemat: String ko baar-baar badalne se bahut saare bekar objects ban jate hain. Uske liye StringBuilder use karo (agle lessons).", "final String f = \"x\"; ka matlab VARIABLE dobara assign nahi ho sakta. String final ke bina bhi immutable hai."]],
   code: `String s = "hello";
s.toUpperCase();                    // the result is thrown away
System.out.println(s);              // hello

String t = s.toUpperCase();         // store the new String
System.out.println(t);              // HELLO
System.out.println(s);              // hello  (the original is untouched)

s = s + " world";                   // s now points to a NEW String
System.out.println(s);              // hello world

String a = "cat";
String b = a;                       // both point to the same String
a = a + "s";                        // a points to a new String
System.out.println(a + " " + b);    // cats cat   (b is unchanged)`,
   tip: ["Whenever a String method seems to do nothing, check whether you stored the returned value.", "String method kuch na karta dikhe to check karo ki return ki hui value store ki ya nahi."]},
  {h: ["== versus equals()", "== versus equals()"],
   p: ["For objects, == asks 'are these two variables pointing to the very same object?'. equals() asks 'do these two Strings contain the same characters?'. To compare text you almost always want equals(). Use equalsIgnoreCase() to ignore capital letters, and compareTo() for dictionary order.",
       "Objects ke liye == poochta hai 'kya ye dono variables bilkul usi ek object ko point kar rahe hain?'. equals() poochta hai 'kya in dono Strings me same characters hain?'. Text compare karne ke liye aam taur par equals() chahiye. Capital letters ignore karne ke liye equalsIgnoreCase(), aur dictionary order ke liye compareTo() use karo."],
   code: `String typed = "admin";
String saved = new String("admin");

System.out.println(typed == saved);                  // false (different objects)
System.out.println(typed.equals(saved));             // true  (same text)
System.out.println("ADMIN".equalsIgnoreCase(typed)); // true

System.out.println("apple".compareTo("banana"));     // negative (apple comes first)
System.out.println("apple".compareTo("apple"));      // 0
System.out.println("b".compareTo("a"));              // positive

// Null-safe comparison: put the literal FIRST
String input = null;
System.out.println("admin".equals(input));           // false, no crash
// System.out.println(input.equals("admin"));        // NullPointerException
System.out.println(java.util.Objects.equals(input, typed));   // false`,
   pts: [["== on two Strings can accidentally work for literals (because of the pool) and then fail for user input or new String(). Never rely on it.", "equals() returns true only when length and every character match, including capital letters.", "compareTo() returns 0 when equal, a negative number when the first String comes before the second, and a positive number when it comes after.", "Write \"literal\".equals(variable) so a null variable cannot crash the program."],
         ["Do Strings par == literals ke liye galti se chal sakta hai (pool ki wajah se) aur user input ya new String() par fail ho jata hai. Is par kabhi bharosa mat karo.", "equals() tabhi true deta hai jab length aur har character match ho, capital letters ke saath.", "compareTo() barabar ho to 0, pehli String pehle aaye to negative, aur baad me aaye to positive number deta hai.", "\"literal\".equals(variable) likho taaki null variable program ko crash na kare."]]},
  {h: ["Joining Strings (concatenation)", "Strings jodna (concatenation)"],
   p: ["The + operator joins Strings, and it also turns other values into text when one side is a String. Java reads an expression from left to right, so numbers before the first String are added as numbers, and everything after it is joined as text. The concat() method joins only Strings.",
       "+ operator Strings ko jodta hai, aur jab ek side String ho to dusri values ko bhi text bana deta hai. Java expression ko left se right padhta hai, isliye pehli String se pehle ke numbers numbers ki tarah add hote hain, aur uske baad sab kuch text ki tarah jud jata hai. concat() method sirf Strings jodta hai."],
   code: `String full = "Java" + " " + "Rocks";
System.out.println(full);                  // Java Rocks

int marks = 90;
System.out.println("Marks: " + marks);     // Marks: 90

System.out.println(1 + 2 + "3");           // 33   (1 + 2 first, then joined)
System.out.println("1" + 2 + 3);           // 123  (text from the start)
System.out.println("1" + (2 + 3));         // 15

System.out.println('a' + 'b');             // 195  (two chars are added as numbers!)
System.out.println("" + 'a' + 'b');        // ab

String hi = "Hi".concat(" there");         // Hi there
String maybe = "x" + null;                 // xnull  (+ turns null into text)

// Joining inside a loop creates a new String every time (slow for big loops)
String result = "";
for (int i = 1; i <= 5; i++) {
    result += i + " ";
}
System.out.println(result);                // 1 2 3 4 5`,
   pts: [["Use brackets to control the order: \"Sum = \" + (a + b).", "Adding two chars gives a number, not text. Start with an empty String (\"\" + c1 + c2) to join them as text.", "A + with null does not crash. It prints the word null.", "For many joins inside a loop use StringBuilder (lesson 21), because each + creates a new object."],
         ["Order control karne ke liye brackets lagao: \"Sum = \" + (a + b).", "Do chars ko add karne par number aata hai, text nahi. Text ki tarah jodne ke liye khali String se shuru karo (\"\" + c1 + c2).", "null ke saath + crash nahi karta. Ye null shabd print karta hai.", "Loop ke andar kai baar jodna ho to StringBuilder use karo (lesson 21), kyunki har + naya object banata hai."]]},
  {h: ["Escape sequences and text blocks", "Escape sequences aur text blocks"],
   p: ["Some characters cannot be typed directly inside quotes, such as a new line or a double quote. You write them with a backslash, which is called an escape sequence. Since Java 15 you can also write several lines at once with a text block, which starts and ends with three double quotes.",
       "Kuch characters quotes ke andar seedha type nahi ho sakte, jaise nayi line ya double quote. Unhe backslash ke saath likhte hain, jise escape sequence kehte hain. Java 15 se text block se kai lines ek saath bhi likh sakte ho, jo teen double quotes se shuru aur khatam hota hai."],
   code: `System.out.println("Name:\\tGurleen");           // \\t = tab
System.out.println("Line 1\\nLine 2");            // \\n = new line
System.out.println("She said \\"Hi\\"");          // \\" = a double quote
System.out.println("C:\\\\Users\\\\Mohit");         // \\\\ = one backslash
System.out.println("It's fine");                 // a single quote needs no escape in a String
System.out.println("Letter: \\u0041");            // \\u0041 = A (Unicode)

// Text block (Java 15+): the indentation is trimmed automatically
String json = """
        {
          "name": "Himakshi",
          "age": 20
        }
        """;
System.out.println(json);`,
   pts: [["\\n new line, \\t tab, \\\" double quote, \\' single quote, \\\\ backslash, \\r carriage return.", "In a char, a single quote needs an escape: char q = '\\''.", "A text block keeps line breaks and lets you use double quotes without escapes. It is ideal for JSON, SQL and HTML.", "System.out.println() adds a new line itself. Do not add \\n at the end unless you want an empty line."],
         ["\\n nayi line, \\t tab, \\\" double quote, \\' single quote, \\\\ backslash, \\r carriage return.", "char me single quote ko escape chahiye: char q = '\\''.", "Text block line breaks rakhta hai aur double quotes ko bina escape ke likhne deta hai. JSON, SQL aur HTML ke liye best hai.", "System.out.println() khud nayi line jodta hai. Khali line na chahiye to end me \\n mat lagao."]]},
  {h: ["null, empty and blank Strings", "null, empty aur blank Strings"],
   p: ["These three look similar but are different. null means there is no String object at all. An empty String \"\" is a real object with length 0. A blank String has only spaces, tabs or new lines. Calling any method on null crashes with NullPointerException, so always handle null first.",
       "Ye teeno ek jaise dikhte hain par alag hain. null ka matlab hai String object hai hi nahi. Empty String \"\" asli object hai jiski length 0 hai. Blank String me sirf spaces, tabs ya new lines hote hain. null par koi bhi method call karne se NullPointerException se crash hota hai, isliye pehle null ko sambhalo."],
   code: `String a = null;        // no object at all
String b = "";          // an object with length 0
String c = "   ";       // an object with only spaces

System.out.println(b.isEmpty());   // true
System.out.println(c.isEmpty());   // false  (length is 3)
System.out.println(c.isBlank());   // true   (Java 11+)
// System.out.println(a.length()); // NullPointerException

// A safe check before using a String
if (a == null || a.isBlank()) {
    System.out.println("No text given");
}

// Provide a default value
String name = (a == null) ? "Guest" : a;
System.out.println(name);          // Guest`},
  {h: ["Strings and characters, and switch on Strings", "Strings aur characters, aur String par switch"],
   p: ["A String is made of chars, so you can walk through it with charAt() or turn it into a char array with toCharArray(). A char array can be changed and sorted, and then turned back into a String. A String can also be used in switch, which compares with equals().",
       "String chars se bani hoti hai, isliye charAt() se uske upar chal sakte ho ya toCharArray() se char array bana sakte ho. Char array ko badal aur sort kar sakte ho, aur fir wapas String bana sakte ho. String switch me bhi use ho sakti hai, jo equals() se compare karta hai."],
   code: `import java.util.Arrays;

String word = "Java";

// Walk through every character
for (int i = 0; i < word.length(); i++) {
    System.out.print(word.charAt(i) + " ");       // J a v a
}
System.out.println();

// char array: change it, then build a String again
char[] chars = word.toCharArray();
chars[0] = 'L';
System.out.println(new String(chars));            // Lava

Arrays.sort(chars);                               // capital letters sort before small ones
System.out.println(String.valueOf(chars));        // Laav

// switch on a String (case-sensitive)
String command = "start";
switch (command) {
    case "start" -> System.out.println("Starting...");
    case "stop"  -> System.out.println("Stopping...");
    default      -> System.out.println("Unknown command");
}`},
  {h: ["Common mistakes with Strings", "Strings ke common mistakes"],
   pts: [["Comparing with == instead of equals(). It may work in tests and then fail with real input.", "Forgetting that methods return a new String. s.trim(); alone does nothing. Write s = s.trim();", "Using charAt() with a wrong index. charAt(s.length()) throws StringIndexOutOfBoundsException.", "Calling a method on a null String, which throws NullPointerException.", "Joining many Strings with + inside a long loop. Use StringBuilder instead.", "Expecting \"5\" + 5 to be 10. It is the text 55.", "Mixing up char and String: 'a' and \"a\" are different types and cannot be compared with ==/equals() directly.", "Writing s.length without brackets. For Strings length is a method: s.length(). For arrays it is a field: a.length."],
         ["equals() ki jagah == se compare karna. Tests me chal sakta hai aur asli input par fail ho sakta hai.", "Ye bhul jana ki methods nayi String return karte hain. Sirf s.trim(); kuch nahi karta. s = s.trim(); likho.", "charAt() me galat index dena. charAt(s.length()) StringIndexOutOfBoundsException deta hai.", "null String par method call karna, jisse NullPointerException aata hai.", "Lambe loop me kai Strings ko + se jodna. Uski jagah StringBuilder use karo.", "\"5\" + 5 ke 10 hone ki ummeed karna. Ye text 55 hai.", "char aur String ko mix karna: 'a' aur \"a\" alag types hain aur unhe seedha ==/equals() se compare nahi kar sakte.", "s.length bina brackets ke likhna. String me length method hai: s.length(). Arrays me field hai: a.length."]],
   tip: ["Interview favourite: \"a\" == \"a\" is true because of the pool, but new String(\"a\") == \"a\" is false. Compare text with equals() and you never have to worry.", "Interview favourite: \"a\" == \"a\" pool ki wajah se true hai, par new String(\"a\") == \"a\" false hai. Text equals() se compare karo, fir chinta nahi."]}
 ]},
20: {
 def: ["String methods are the ready-made operations of the String class. They let you measure text, search inside it, cut pieces out, change case, replace parts, split it into words, compare it and convert it to other types. Every one of them returns a new value and leaves the original String untouched.",
       "String methods String class ke ready-made operations hain. Inse text ko naapa, uske andar dhundha, tukde kaata, case badla, hisse replace kiye, words me toda, compare kiya aur dusre types me convert kiya ja sakta hai. Inme se har ek nayi value return karta hai aur original String ko waisa hi chhodta hai."],
 secs: [
  {h: ["The rules to remember first", "Pehle ye rules yaad rakho"],
   p: ["Before the individual methods, learn the four rules that apply to all of them. Most String bugs come from forgetting one of these.",
       "Alag-alag methods se pehle wo chaar rules seekho jo sab par lagu hote hain. String ke zyadatar bugs inme se ek rule bhulne se aate hain."],
   pts: [["Rule 1: Strings are immutable, so a method returns a new String. Store it: s = s.trim();", "Rule 2: indexes start at 0 and the last index is length() - 1.", "Rule 3: methods are case-sensitive. \"Java\" and \"java\" are different unless you use an ignore-case method.", "Rule 4: calling a method on null throws NullPointerException. Check for null first.", "Rule 5: when a range is given as (start, end), start is INCLUDED and end is EXCLUDED."],
         ["Rule 1: Strings immutable hain, isliye method nayi String return karta hai. Store karo: s = s.trim();", "Rule 2: index 0 se shuru hote hain aur aakhri index length() - 1 hota hai.", "Rule 3: methods case-sensitive hain. \"Java\" aur \"java\" alag hain jab tak ignore-case wala method use na karo.", "Rule 4: null par method call karne se NullPointerException aata hai. Pehle null check karo.", "Rule 5: range (start, end) di ho to start SHAMIL aur end SHAMIL NAHI hota."]]},
  {h: ["Length and access", "Length aur access"],
   p: ["length() counts the characters, charAt(i) gives the character at index i, isEmpty() tells whether the length is 0, and isBlank() tells whether the String has no visible characters. charAt() with a wrong index throws StringIndexOutOfBoundsException.",
       "length() characters ginta hai, charAt(i) index i ka character deta hai, isEmpty() batata hai ki length 0 hai ya nahi, aur isBlank() batata hai ki String me koi dikhne wala character hai ya nahi. charAt() me galat index dene par StringIndexOutOfBoundsException aata hai."],
   code: `String s = "Hello Java";
System.out.println(s.length());           // 10  (the space is counted)
System.out.println(s.charAt(0));          // H
System.out.println(s.charAt(s.length() - 1));   // a  (last character)

System.out.println("".isEmpty());         // true
System.out.println("  ".isEmpty());       // false
System.out.println("  ".isBlank());       // true  (Java 11+)

// Visit every character
for (int i = 0; i < s.length(); i++) {
    System.out.print(s.charAt(i) + ",");  // H,e,l,l,o, ,J,a,v,a,
}
System.out.println();

char[] arr = s.toCharArray();             // String to char array
System.out.println(arr.length);           // 10`},
  {h: ["Searching inside a String", "String ke andar dhundhna"],
   p: ["indexOf() returns the position of the first match and -1 when there is no match. lastIndexOf() finds the last match. contains(), startsWith() and endsWith() answer yes or no. You can start the search from a given index to find the next match.",
       "indexOf() pehle match ki position deta hai aur match na ho to -1. lastIndexOf() aakhri match dhundta hai. contains(), startsWith() aur endsWith() haan ya na batate hain. Agla match dhundhne ke liye search ko kisi index se shuru kar sakte ho."],
   code: `String s = "Java is fun. Java is fast.";

System.out.println(s.indexOf("Java"));       // 0
System.out.println(s.indexOf("Java", 1));    // 13  (search from index 1)
System.out.println(s.lastIndexOf("Java"));   // 13
System.out.println(s.indexOf('z'));          // -1  (not found)
System.out.println(s.indexOf("is"));         // 5
System.out.println(s.lastIndexOf("is"));     // 18

System.out.println(s.contains("fun"));       // true
System.out.println(s.startsWith("Java"));   // true
System.out.println(s.startsWith("is", 5));   // true  (starts at index 5)
System.out.println(s.endsWith("fast."));     // true

// Count how many times a word appears
int count = 0;
int pos = s.indexOf("Java");
while (pos != -1) {
    count++;
    pos = s.indexOf("Java", pos + 1);        // continue after the last match
}
System.out.println(count);                   // 2`,
   pts: [["Always compare the result of indexOf with -1, not with 0, because 0 means 'found at the start'.", "contains() is the simplest way to check whether some text is present.", "These methods are case-sensitive. To ignore case, convert both sides first: s.toLowerCase().contains(\"java\").", "indexOf accepts a char ('a') or a String (\"ab\")."],
         ["indexOf ke result ko hamesha -1 se compare karo, 0 se nahi, kyunki 0 ka matlab 'shuruaat me mila' hai.", "Koi text maujood hai ya nahi, ye check karne ka sabse aasan tareeka contains() hai.", "Ye methods case-sensitive hain. Case ignore karna ho to dono taraf pehle convert karo: s.toLowerCase().contains(\"java\").", "indexOf char ('a') ya String (\"ab\") dono leta hai."]]},
  {h: ["Extracting parts: substring", "Hisse nikalna: substring"],
   p: ["substring(start) returns everything from start to the end. substring(start, end) returns the characters from start up to, but NOT including, end. The length of the result is end minus start. This is the method used to cut names, extensions and codes out of text.",
       "substring(start) start se end tak sab kuch deta hai. substring(start, end) start se end tak ke characters deta hai, par end SHAMIL NAHI hota. Result ki length end minus start hoti hai. Text me se naam, extension aur codes kaatne ke liye yahi method use hota hai."],
   code: `String t = "Programming";
System.out.println(t.substring(3));                  // gramming
System.out.println(t.substring(0, 3));               // Pro
System.out.println(t.substring(3, 6));               // gra   (indexes 3, 4, 5)
System.out.println(t.substring(t.length() - 3));     // ing   (last 3 characters)
System.out.println(t.substring(2, 2).isEmpty());     // true  (start == end gives "")

// Split a file name into name and extension
String file = "notes.final.pdf";
int dot = file.lastIndexOf('.');
String name = file.substring(0, dot);                // notes.final
String ext = file.substring(dot + 1);                // pdf
System.out.println(name + " | " + ext);

// First character and the rest
String w = "java";
String cap = w.substring(0, 1).toUpperCase() + w.substring(1);
System.out.println(cap);                             // Java`},
  {h: ["Changing case, trimming and replacing", "Case badalna, trim karna aur replace karna"],
   p: ["toUpperCase() and toLowerCase() change the case. trim() removes spaces at both ends, and strip() does the same including Unicode spaces. replace() swaps every occurrence of a char or text, and replaceAll() does it with a pattern (regular expression). repeat(n) repeats a String n times.",
       "toUpperCase() aur toLowerCase() case badalte hain. trim() dono ends ke spaces hatata hai, aur strip() Unicode spaces ke saath wahi karta hai. replace() kisi char ya text ke har occurrence ko badalta hai, aur replaceAll() pattern (regular expression) se karta hai. repeat(n) String ko n baar repeat karta hai."],
   code: `String s = "  Hello Java  ";
System.out.println("[" + s.trim() + "]");             // [Hello Java]
System.out.println("[" + s.stripLeading() + "]");     // [Hello Java  ]
System.out.println("[" + s.stripTrailing() + "]");    // [  Hello Java]

System.out.println("Hello".toUpperCase());            // HELLO
System.out.println("Hello".toLowerCase());            // hello

System.out.println("banana".replace('a', 'o'));       // bonono
System.out.println("banana".replace("an", "AN"));     // bANANa
System.out.println("banana".replaceFirst("a", "A"));  // bAnana
System.out.println("a1b22c333".replaceAll("[0-9]+", "#"));    // a#b#c#
System.out.println("a   b    c".replaceAll("\\\\s+", " "));     // a b c  (collapse spaces)

System.out.println("Hi".concat("!"));                 // Hi!
System.out.println("ab".repeat(3));                   // ababab
System.out.println("-".repeat(20));                   // a line of 20 dashes

// Remove every space
System.out.println("a b c".replace(" ", ""));         // abc`,
   tip: ["replace() treats its input as plain text. replaceAll() treats it as a regular expression, so special characters such as . + * ( ) [ ] need a double backslash.", "replace() input ko plain text maanta hai. replaceAll() use regular expression maanta hai, isliye . + * ( ) [ ] jaise special characters ke liye double backslash chahiye."]},
  {h: ["split() and join()", "split() aur join()"],
   p: ["split(separator) cuts a String into an array of pieces. The separator is a regular expression, so special characters need care. String.join(separator, items) does the opposite and glues pieces together. A limit of -1 keeps empty strings at the end, which split removes by default.",
       "split(separator) String ko tukdon ke array me katta hai. Separator regular expression hota hai, isliye special characters me dhyan rakhna padta hai. String.join(separator, items) ulta karta hai aur tukdon ko jodta hai. Limit -1 end ki khali strings ko rakhta hai, jinhe split default me hata deta hai."],
   code: `import java.util.Arrays;

String csv = "red,green,blue";
String[] parts = csv.split(",");
System.out.println(parts.length);                      // 3
System.out.println(parts[1]);                          // green
System.out.println(Arrays.toString(parts));            // [red, green, blue]

// Split on any amount of spaces
String sentence = "  I love   Java  ";
String[] words = sentence.trim().split("\\\\s+");
System.out.println(words.length);                      // 3

// Single space: empty pieces appear for double spaces
System.out.println(Arrays.toString("a  b".split(" ")));    // [a, , b]

// Trailing empty strings are removed unless you pass -1
System.out.println("a,b,,".split(",").length);         // 2
System.out.println("a,b,,".split(",", -1).length);     // 4

// Special characters need escaping
System.out.println(Arrays.toString("1+2".split("\\\\+")));   // [1, 2]
System.out.println(Arrays.toString("a|b".split("\\\\|")));   // [a, b]
System.out.println(Arrays.toString("a.b".split("\\\\.")));   // [a, b]

// Join
System.out.println(String.join("-", "2026", "10", "30"));    // 2026-10-30
String[] team = {"Rahul", "Gurleen", "Himakshi"};
System.out.println(String.join(", ", team));                 // Rahul, Gurleen, Himakshi

// Split into single characters
System.out.println(Arrays.toString("Java".split("")));       // [J, a, v, a]`},
  {h: ["Comparing Strings", "Strings compare karna"],
   p: ["equals() checks for the same text. equalsIgnoreCase() ignores capital letters. compareTo() orders Strings like a dictionary: the result is 0 when equal, negative when the first comes first, and positive when it comes later. The number is the difference of the first different characters, or of the lengths.",
       "equals() same text check karta hai. equalsIgnoreCase() capital letters ignore karta hai. compareTo() Strings ko dictionary ki tarah order karta hai: barabar ho to 0, pehli pehle aaye to negative, aur baad me aaye to positive. Number pehle alag characters ka ya lengths ka difference hota hai."],
   code: `System.out.println("apple".equals("apple"));              // true
System.out.println("Apple".equals("apple"));              // false
System.out.println("Apple".equalsIgnoreCase("apple"));    // true

System.out.println("apple".compareTo("banana"));          // -1  ('a' - 'b')
System.out.println("apple".compareTo("apple"));           // 0
System.out.println("b".compareTo("a"));                   // 1
System.out.println("apple".compareTo("app"));             // 2   (length difference)
System.out.println("Apple".compareTo("apple"));           // -32 (capital letters come first)
System.out.println("Apple".compareToIgnoreCase("apple")); // 0

// Use compareTo to find which of two names comes first
String a = "Mohit", b = "Shivam";
System.out.println(a.compareTo(b) < 0 ? a + " first" : b + " first");   // Mohit first

// Check a prefix or suffix case-insensitively
System.out.println("REPORT.PDF".toLowerCase().endsWith(".pdf"));        // true`},
  {h: ["Converting and formatting", "Convert aur format karna"],
   p: ["String.valueOf() turns any value into text, and parseInt, parseDouble and similar methods turn text into numbers. String.format() and printf() build text from a template with placeholders, which gives you full control over width, decimals and alignment.",
       "String.valueOf() kisi bhi value ko text banata hai, aur parseInt, parseDouble jaise methods text ko numbers banate hain. String.format() aur printf() placeholders wale template se text banate hain, jisse width, decimals aur alignment par poora control milta hai."],
   code: `// Value to text
System.out.println(String.valueOf(25) + String.valueOf(3.5) + String.valueOf(true));   // 253.5true
System.out.println(String.valueOf(new char[]{'h', 'i'}));                              // hi

// Text to value
int n = Integer.parseInt("42");
double d = Double.parseDouble("2.5");
boolean b = Boolean.parseBoolean("true");
System.out.println(n + d);                   // 44.5

// Formatting
String name = "Shivam";
int age = 21;
double marks = 87.456;
System.out.println(String.format("%s is %d years old", name, age));   // Shivam is 21 years old
System.out.printf("Marks: %.2f%n", marks);                            // Marks: 87.46
System.out.printf("[%5d]%n", 42);            // [   42]   width 5, right aligned
System.out.printf("[%-8s]%n", "Java");       // [Java    ] width 8, left aligned
System.out.printf("[%05d]%n", 42);           // [00042]   padded with zeros
System.out.printf("%,d%n", 1234567);         // 1,234,567
System.out.printf("%x %o %b %c%n", 255, 8, true, 'A');   // ff 10 true A`,
   pts: [["%s text, %d whole number, %f decimal, %c char, %b boolean, %x hexadecimal, %n new line, %% a percent sign.", "%.2f means 2 digits after the decimal point. %8.2f means a total width of 8.", "A minus in %-10s aligns left. A zero in %05d pads with zeros.", "A wrong placeholder for the type, like %d with a decimal, throws IllegalFormatException.", "Integer.parseInt(\"12abc\") throws NumberFormatException. Catch it when the text comes from a user."],
         ["%s text, %d whole number, %f decimal, %c char, %b boolean, %x hexadecimal, %n nayi line, %% percent sign.", "%.2f ka matlab decimal point ke baad 2 digits. %8.2f ka matlab total width 8.", "%-10s me minus left align karta hai. %05d me zero zeros se pad karta hai.", "Type ke liye galat placeholder, jaise decimal ke saath %d, IllegalFormatException deta hai.", "Integer.parseInt(\"12abc\") NumberFormatException deta hai. Text user se aaye to use catch karo."]]},
  {h: ["The Character helper methods", "Character ke helper methods"],
   p: ["The Character class has methods that test and change single chars. They are the right tool when you loop over a String and need to know whether each character is a letter, a digit or a space.",
       "Character class me single chars ko test aur change karne ke methods hain. Jab String par loop chalate ho aur jaanna ho ki har character letter, digit ya space hai, to ye sahi tool hai."],
   code: `System.out.println(Character.isDigit('7'));          // true
System.out.println(Character.isLetter('a'));         // true
System.out.println(Character.isLetterOrDigit('_'));  // false
System.out.println(Character.isUpperCase('A'));      // true
System.out.println(Character.isLowerCase('A'));      // false
System.out.println(Character.isWhitespace(' '));     // true

System.out.println(Character.toUpperCase('a'));      // A
System.out.println(Character.toLowerCase('Q'));      // q
System.out.println(Character.getNumericValue('7'));  // 7
System.out.println('7' - '0');                       // 7  (digit characters are in order)
System.out.println((char) ('a' + 1));                // b

// Count letters, digits and spaces
String s = "Java 21 rocks";
int letters = 0, digits = 0, spaces = 0;
for (char c : s.toCharArray()) {
    if (Character.isLetter(c)) letters++;
    else if (Character.isDigit(c)) digits++;
    else if (Character.isWhitespace(c)) spaces++;
}
System.out.println(letters + " " + digits + " " + spaces);   // 9 2 2`},
  {h: ["Practical examples", "Practical examples"],
   p: ["These small helpers combine several methods. They are used in real forms and programs again and again, so write them yourself once.",
       "Ye chhote helpers kai methods ko jodte hain. Real forms aur programs me ye baar-baar use hote hain, isliye inhe ek baar khud likho."],
   code: `public class StringHelpers {
    // 1) Capitalise: gURLEEN -> Gurleen
    static String cap(String s) {
        if (s == null || s.isEmpty()) return s;
        return s.substring(0, 1).toUpperCase() + s.substring(1).toLowerCase();
    }

    // 2) Count words, ignoring extra spaces
    static int words(String s) {
        s = s.trim();
        return s.isEmpty() ? 0 : s.split("\\\\s+").length;
    }

    // 3) Count one character
    static int countChar(String s, char c) {
        int n = 0;
        for (int i = 0; i < s.length(); i++)
            if (s.charAt(i) == c) n++;
        return n;
    }

    // 4) Mask a phone number: keep the last 4 digits
    static String mask(String phone) {
        int n = phone.length();
        return "*".repeat(n - 4) + phone.substring(n - 4);
    }

    // 5) A very simple email check
    static boolean looksLikeEmail(String e) {
        int at = e.indexOf('@');
        return at > 0 && e.indexOf('.', at) > at + 1 && !e.contains(" ");
    }

    public static void main(String[] args) {
        System.out.println(cap("gURLEEN"));                   // Gurleen
        System.out.println(words("  I love   Java "));        // 3
        System.out.println(countChar("Mississippi", 's'));    // 4
        System.out.println(mask("9876543210"));               // ******3210
        System.out.println(looksLikeEmail("himakshi@mail.com"));   // true
        System.out.println(looksLikeEmail("mohit@mail"));          // false
    }
}`,
   tip: ["When you meet a new String problem, first ask: do I need to search, cut, change or compare? Then pick the matching method from this lesson.", "Naya String problem aaye to pehle pucho: mujhe dhundhna hai, kaatna hai, badalna hai ya compare karna hai? Fir is lesson se matching method chuno."]}
 ]},
21: {
 def: ["StringBuilder and StringBuffer are classes that hold text which you can change in place. Unlike String, which is immutable, they have a resizable buffer: you can append, insert, delete, replace and reverse characters on the SAME object. They are the right tool when you build or edit text many times.",
       "StringBuilder aur StringBuffer wo classes hain jinme text rehta hai jise usi jagah badal sakte ho. String (immutable) se alag inme resize hone wala buffer hota hai: SAME object par characters append, insert, delete, replace aur reverse kar sakte ho. Text ko kai baar banana ya edit karna ho to ye sahi tool hain."],
 secs: [
  {h: ["Why we need them", "Inki zarurat kyun hai"],
   p: ["Every time you change a String, Java creates a new object and the old one becomes garbage. Joining 50,000 pieces with + in a loop creates 50,000 temporary Strings, and each one copies all the characters so far. That is slow and wastes memory. A StringBuilder keeps one object and just adds to the end of its buffer, so the same job is many times faster.",
       "String ko jitni baar badalte ho, Java naya object banata hai aur purana kachra ban jata hai. Loop me 50,000 tukde + se jodne par 50,000 temporary Strings bante hain, aur har ek ab tak ke saare characters copy karti hai. Ye slow hai aur memory barbaad karta hai. StringBuilder ek hi object rakhta hai aur bas apne buffer ke end me jodta hai, isliye wahi kaam kai guna tez hota hai."],
   pts: [["String: immutable, safe to share, best for text that does not change.", "StringBuilder: mutable, fast, best for building or editing text, mostly in a single thread.", "StringBuffer: mutable like StringBuilder but synchronized (thread-safe), so it is slightly slower.", "Both live in java.lang, so no import is needed.", "Rule of thumb: one or two joins use +. Many joins, especially in a loop, use StringBuilder."],
         ["String: immutable, share karne me safe, un texts ke liye best jo badalte nahi.", "StringBuilder: mutable, tez, text banane ya edit karne ke liye best, zyadatar single thread me.", "StringBuffer: StringBuilder jaisa mutable par synchronized (thread-safe), isliye thoda slow.", "Dono java.lang me hain, isliye import nahi chahiye.", "Thumb rule: ek-do join ke liye +. Kai joins, khaaskar loop me, ke liye StringBuilder."]],
   code: `public class SpeedTest {
    public static void main(String[] args) {
        int n = 50000;

        long t1 = System.nanoTime();
        String s = "";
        for (int i = 0; i < n; i++) s += "x";            // 50,000 new Strings
        long t2 = System.nanoTime();

        StringBuilder sb = new StringBuilder();
        for (int i = 0; i < n; i++) sb.append("x");      // one object, grows inside
        long t3 = System.nanoTime();

        System.out.println("String +      : " + (t2 - t1) / 1_000_000 + " ms");
        System.out.println("StringBuilder : " + (t3 - t2) / 1_000_000 + " ms");
        // The exact numbers differ on every computer, but StringBuilder is far faster.
    }
}`},
  {h: ["Creating a StringBuilder and its capacity", "StringBuilder banana aur capacity"],
   p: ["You can create an empty StringBuilder, one with starting text, or one with a chosen starting capacity. Capacity is the size of the internal buffer, and length is how many characters are really stored. When the buffer is full Java makes it bigger automatically (the new size is about twice the old one plus 2), so you rarely need to think about it.",
       "Khali StringBuilder, starting text wala, ya chuni hui starting capacity wala bana sakte ho. Capacity andar ke buffer ka size hai, aur length ye hai ki asli me kitne characters store hain. Buffer bhar jaye to Java use apne aap bada kar deta hai (naya size lagbhag purane ka double plus 2), isliye isse kam hi sochna padta hai."],
   code: `StringBuilder a = new StringBuilder();              // empty, capacity 16
StringBuilder b = new StringBuilder("Java");        // starts with Java, capacity 4 + 16 = 20
StringBuilder c = new StringBuilder(100);           // empty, capacity 100

System.out.println(a.length() + " " + a.capacity());   // 0 16
System.out.println(b.length() + " " + b.capacity());   // 4 20

a.append("12345678901234567");                      // 17 characters do not fit in 16
System.out.println(a.length() + " " + a.capacity());   // 17 34   (16 * 2 + 2)

c.append("Hi");
c.trimToSize();                                     // shrink the buffer to the length
System.out.println(c.capacity());                   // 2

b.ensureCapacity(500);                              // reserve space in advance`,
   pts: [["If you already know roughly how long the result will be, give a capacity (new StringBuilder(1000)). It avoids repeated growing.", "length() is the number of characters. capacity() is the size of the box. capacity is always at least length.", "A StringBuilder is not a String. Convert with toString() when you need a String."],
         ["Result kitna lamba hoga ye lagbhag pata ho to capacity do (new StringBuilder(1000)). Isse baar-baar badhna bachta hai.", "length() characters ki ginti hai. capacity() dabbe ka size hai. capacity hamesha length se kam nahi hoti.", "StringBuilder String nahi hai. String chahiye to toString() se convert karo."]]},
  {h: ["append() and insert()", "append() aur insert()"],
   p: ["append() adds to the END and accepts almost any type: String, char, int, double, boolean and more. insert(index, value) adds at any position and pushes the rest to the right. Both return the same StringBuilder, so you can chain calls in one line.",
       "append() END me jodta hai aur lagbhag har type leta hai: String, char, int, double, boolean waghera. insert(index, value) kisi bhi position par jodta hai aur baaki ko right me dhakel deta hai. Dono wahi StringBuilder return karte hain, isliye calls ko ek line me chain kar sakte ho."],
   code: `StringBuilder sb = new StringBuilder("Hello");
sb.append(" World");                    // Hello World
sb.append('!');                         // Hello World!
sb.append(10).append(true);             // Hello World!10true  (chained)
System.out.println(sb);

StringBuilder b = new StringBuilder("Java");
b.insert(0, "I love ");                 // I love Java
b.insert(b.length(), "!");              // I love Java!
b.insert(7, "pure ");                   // I love pure Java!
System.out.println(b);

// Chaining builds a sentence in one expression
String line = new StringBuilder()
        .append("Name: ").append("Himakshi")
        .append(", Marks: ").append(92.5)
        .toString();
System.out.println(line);               // Name: Himakshi, Marks: 92.5

// A table row built in a loop
StringBuilder row = new StringBuilder();
for (int i = 1; i <= 5; i++) {
    row.append(i * i);
    if (i < 5) row.append(", ");
}
System.out.println(row);                // 1, 4, 9, 16, 25`},
  {h: ["delete, replace, setCharAt, reverse and setLength", "delete, replace, setCharAt, reverse aur setLength"],
   p: ["These methods edit the existing text. In delete(start, end) and replace(start, end, text) the start index is included and the end index is excluded, exactly like substring. reverse() flips the whole text, and setLength(0) clears the builder so you can reuse it.",
       "Ye methods maujooda text ko edit karte hain. delete(start, end) aur replace(start, end, text) me start index shamil aur end index shamil nahi hota, bilkul substring ki tarah. reverse() poora text ulta karta hai, aur setLength(0) builder ko khali karta hai taaki use dobara use kar sako."],
   code: `StringBuilder c = new StringBuilder("0123456789");
c.delete(2, 5);                         // 0156789   (removes indexes 2, 3, 4)
c.deleteCharAt(0);                      // 156789
c.replace(0, 2, "ABC");                 // ABC6789   (the part "15" becomes "ABC")
c.setCharAt(0, 'a');                    // aBC6789
c.reverse();                            // 9876CBa
c.setLength(3);                         // 987       (cut to 3 characters)
System.out.println(c);

c.setLength(0);                         // clear and reuse
System.out.println(c.length());         // 0

// Reading methods work like String
StringBuilder r = new StringBuilder("Programming");
System.out.println(r.charAt(3));        // g
System.out.println(r.indexOf("gram"));  // 3
System.out.println(r.substring(0, 3));  // Pro   (returns a String)
System.out.println(r.length());         // 11`,
   pts: [["Indexes outside the text throw StringIndexOutOfBoundsException.", "delete(start, end) removes from start up to end - 1. deleteCharAt(i) removes just one character.", "replace(start, end, text) needs the range. To replace by value, convert to String and use String.replace.", "reverse() changes the builder itself and also returns it, so you can chain: sb.reverse().toString()."],
         ["Text se bahar ke indexes StringIndexOutOfBoundsException dete hain.", "delete(start, end) start se end - 1 tak hatata hai. deleteCharAt(i) sirf ek character hatata hai.", "replace(start, end, text) ko range chahiye. Value se replace karna ho to String me convert karke String.replace use karo.", "reverse() builder ko khud badalta hai aur use return bhi karta hai, isliye chain kar sakte ho: sb.reverse().toString()."]]},
  {h: ["StringBuilder vs StringBuffer vs String", "StringBuilder vs StringBuffer vs String"],
   p: ["The three classes hold text but behave differently. StringBuffer has the same methods as StringBuilder, but every method is synchronized, which means only one thread at a time can use it. That makes it safe when several threads share one object, and slower when only one thread uses it. In most programs a StringBuilder is used inside a method and never shared, so StringBuilder is the normal choice.",
       "Teeno classes text rakhti hain par alag behave karti hain. StringBuffer ke methods StringBuilder jaise hi hain, par har method synchronized hai, yaani ek samay me sirf ek thread use use kar sakta hai. Isse kai threads ek object share karein to ye safe hai, aur sirf ek thread use kare to slow. Zyadatar programs me StringBuilder method ke andar use hota hai aur share nahi hota, isliye StringBuilder normal choice hai."],
   pts: [["String: immutable. Thread-safe because it never changes. Slow for repeated edits.", "StringBuilder: mutable. NOT thread-safe. Fastest. Added in Java 5.", "StringBuffer: mutable. Thread-safe (synchronized). Slower. Exists since Java 1.0.", "All three implement CharSequence and have length(), charAt() and substring().", "StringBuilder and StringBuffer do NOT override equals(): two builders with the same text are not equal.", "Neither has methods like split(), trim() or toUpperCase(). Convert to String first with toString().", "Multithreading and synchronization are covered in Phase 4."],
         ["String: immutable. Kabhi badalti nahi isliye thread-safe. Baar-baar edit ke liye slow.", "StringBuilder: mutable. Thread-safe NAHI. Sabse tez. Java 5 me aaya.", "StringBuffer: mutable. Thread-safe (synchronized). Slow. Java 1.0 se hai.", "Teeno CharSequence implement karti hain aur unme length(), charAt() aur substring() hain.", "StringBuilder aur StringBuffer equals() override NAHI karte: same text wale do builders barabar nahi hote.", "Inme split(), trim() ya toUpperCase() jaise methods nahi hain. Pehle toString() se String banao.", "Multithreading aur synchronization Phase 4 me hain."]],
   code: `StringBuilder x = new StringBuilder("hi");
StringBuilder y = new StringBuilder("hi");

System.out.println(x.equals(y));                          // false (compares references)
System.out.println(x.toString().equals(y.toString()));    // true  (compare the text)
System.out.println(x.compareTo(y));                       // 0     (Java 11+)

StringBuffer buf = new StringBuffer("safe");              // same methods, thread-safe
buf.append("ty").reverse();
System.out.println(buf);                                  // ytefas

// Use String methods on the text of a builder
String text = x.toString().toUpperCase();
System.out.println(text);                                 // HI`},
  {h: ["Practical examples", "Practical examples"],
   p: ["These are the classic jobs of StringBuilder: reversing, checking palindromes, removing characters, formatting numbers and joining items with a separator.",
       "StringBuilder ke ye classic kaam hain: reverse karna, palindrome check, characters hatana, numbers format karna aur items ko separator se jodna."],
   code: `public class BuilderExamples {
    // 1) Reverse a String
    static String reverse(String s) {
        return new StringBuilder(s).reverse().toString();
    }

    // 2) Palindrome check
    static boolean isPalindrome(String s) {
        return s.equalsIgnoreCase(reverse(s));
    }

    // 3) Remove all vowels
    static String removeVowels(String s) {
        StringBuilder sb = new StringBuilder();
        for (char c : s.toCharArray()) {
            if ("aeiouAEIOU".indexOf(c) == -1) sb.append(c);
        }
        return sb.toString();
    }

    // 4) Insert commas into a positive number: 1234567 -> 1,234,567
    static String withCommas(long n) {
        StringBuilder sb = new StringBuilder(Long.toString(n));
        for (int i = sb.length() - 3; i > 0; i -= 3) {
            sb.insert(i, ',');
        }
        return sb.toString();
    }

    // 5) Join items with a separator (no extra separator at the end)
    static String joinAll(String[] items, String sep) {
        StringBuilder sb = new StringBuilder();
        for (int i = 0; i < items.length; i++) {
            if (i > 0) sb.append(sep);
            sb.append(items[i]);
        }
        return sb.toString();
    }

    // 6) Repeat a pattern line by line
    static String staircase(int n) {
        StringBuilder sb = new StringBuilder();
        for (int i = 1; i <= n; i++) {
            sb.append("#".repeat(i)).append('\\n');
        }
        return sb.toString();
    }

    public static void main(String[] args) {
        System.out.println(reverse("Java"));                  // avaJ
        System.out.println(isPalindrome("Level"));            // true
        System.out.println(removeVowels("Education"));        // dctn
        System.out.println(withCommas(1234567));              // 1,234,567
        System.out.println(joinAll(new String[]{"Rahul", "Gurleen", "Mohit"}, " | "));   // Rahul | Gurleen | Mohit
        System.out.print(staircase(3));
        // #
        // ##
        // ###
    }
}`},
  {h: ["Common mistakes and good habits", "Common mistakes aur achhi aadatein"],
   pts: [["Mistake: comparing two builders with equals(). Compare toString() values instead.", "Mistake: printing a builder and expecting the object. System.out.println(sb) calls toString() for you, which is fine, but do not mix it up with the capacity.", "Mistake: using + inside a loop for large text. Use append().", "Mistake: forgetting to convert with toString() before using String-only methods or returning a String.", "Mistake: wrong delete range. delete(2, 5) removes THREE characters (2, 3, 4), not four.", "Good habit: create the builder outside the loop, append inside, call toString() once at the end.", "Good habit: use setLength(0) to reuse one builder instead of creating a new one every time.", "Good habit: choose StringBuilder by default. Choose StringBuffer only when several threads really share the same object."],
         ["Galti: do builders ko equals() se compare karna. Uski jagah toString() values compare karo.", "Galti: builder print karke object ki ummeed karna. System.out.println(sb) khud toString() call karta hai, jo theek hai, par ise capacity se mix mat karo.", "Galti: bade text ke liye loop me + use karna. append() use karo.", "Galti: String-only methods use karne ya String return karne se pehle toString() se convert karna bhul jana.", "Galti: delete ki range galat. delete(2, 5) TEEN characters (2, 3, 4) hatata hai, chaar nahi.", "Achhi aadat: builder loop ke bahar banao, andar append karo, end me ek baar toString() call karo.", "Achhi aadat: har baar naya banane ki jagah ek builder ko setLength(0) se reuse karo.", "Achhi aadat: default me StringBuilder chuno. StringBuffer tabhi chuno jab kai threads sach me ek hi object share karein."]],
   tip: ["Interview answer in one line: String is immutable, StringBuilder is mutable and fast, StringBuffer is mutable and thread-safe.", "Interview answer ek line me: String immutable hai, StringBuilder mutable aur tez hai, StringBuffer mutable aur thread-safe hai."]}
 ]},
22: {
 def: ["Array and string problems are small programs that use arrays and Strings to solve a clear task, such as reversing, searching, counting, removing duplicates or checking a property. They are the classic exercises of college exams, coding rounds and interviews, and they train you to turn a plain-language idea into code.",
       "Array aur string problems chhote programs hain jo arrays aur Strings se koi saaf kaam solve karte hain, jaise reverse karna, search karna, ginna, duplicates hatana ya kisi property ki jaanch. Ye college exams, coding rounds aur interviews ki classic exercises hain, aur inse tum saadi bhasha ke idea ko code me badalna seekhte ho."],
 secs: [
  {h: ["A method for solving any problem", "Kisi bhi problem ko solve karne ka tareeka"],
   p: ["Good programmers do not start by typing. They follow the same short routine for every problem, and this routine is what turns a hard problem into a few small steps.",
       "Achhe programmers type karne se shuru nahi karte. Wo har problem ke liye wahi chhota routine follow karte hain, aur yahi routine mushkil problem ko kuch chhote steps me badal deta hai."],
   pts: [["Step 1, understand: write the input, the expected output and one example. Ask what the edge cases are.", "Step 2, solve by hand: do the example on paper and say each step in plain words.", "Step 3, brute force: write the simplest solution, even if it is slow (usually nested loops). Make it correct first.", "Step 4, improve: look for repeated work. Can a frequency array, two pointers or sorting remove a loop?", "Step 5, test: normal input, then edge cases (empty, one element, all equal, negative numbers, capital letters, spaces).", "Step 6, explain: state the time complexity (how the number of steps grows with n) and the extra memory used.", "Always check boundaries: what happens at index 0 and at the last index?"],
         ["Step 1, samjho: input, expected output aur ek example likho. Poochho ki edge cases kya hain.", "Step 2, hath se solve karo: example kagaz par karo aur har step saaf shabdon me bolo.", "Step 3, brute force: sabse simple solution likho, chahe slow ho (aam taur par nested loops). Pehle use sahi banao.", "Step 4, behtar banao: dohraya hua kaam dhundho. Kya frequency array, two pointers ya sorting ek loop hata sakti hai?", "Step 5, test: normal input, fir edge cases (khali, ek element, sab barabar, negative numbers, capital letters, spaces).", "Step 6, samjhao: time complexity (n ke saath steps kaise badhte hain) aur use hui extra memory batao.", "Boundaries hamesha check karo: index 0 par aur aakhri index par kya hota hai?"]],
   code: `// Example: "Find the second largest number"
//
// Understand: input {4, 9, 7}  ->  output 7. Edge cases: duplicates {5, 5, 3}, one element, negatives.
// By hand:    largest = 9, so the answer is the biggest value that is smaller than 9 -> 7.
// Brute force: sort the array, then walk from the end skipping the largest value.   O(n log n)
// Improve:    keep first and second in ONE pass, no sorting.                        O(n)
// Test:       {4, 9, 7} -> 7, {5, 5, 3} -> 3, {-1, -5, -3} -> -3`},
  {h: ["Array problems I: reverse, rotate, max, second largest", "Array problems I: reverse, rotate, max, second largest"],
   p: ["Start with the four most common array tasks. Notice the repeating ideas: swapping two ends and moving inward, and keeping a running answer in a variable declared before the loop. Rotating by k uses a neat trick of three reversals.",
       "Sabse common char array tasks se shuru karo. Baar-baar aane wale ideas dekho: dono ends ko swap karke andar badhna, aur loop se pehle declare kiye variable me chalta hua answer rakhna. k se rotate karne me teen reversals ki achhi trick lagti hai."],
   code: `import java.util.Arrays;

public class ArrayProblems1 {
    static void reverseRange(int[] a, int i, int j) {
        while (i < j) {
            int t = a[i]; a[i] = a[j]; a[j] = t;
            i++;
            j--;
        }
    }

    static void reverse(int[] a) {
        reverseRange(a, 0, a.length - 1);
    }

    // Rotate right by k using three reversals
    static void rotateRight(int[] a, int k) {
        int n = a.length;
        if (n == 0) return;
        k %= n;                              // k can be bigger than n
        reverseRange(a, 0, n - 1);           // reverse everything
        reverseRange(a, 0, k - 1);           // reverse the first k
        reverseRange(a, k, n - 1);           // reverse the rest
    }

    static int[] maxAndMin(int[] a) {
        int max = a[0], min = a[0];
        for (int x : a) {
            if (x > max) max = x;
            if (x < min) min = x;
        }
        return new int[]{max, min};
    }

    static int secondLargest(int[] a) {
        int first = Integer.MIN_VALUE, second = Integer.MIN_VALUE;
        for (int x : a) {
            if (x > first) { second = first; first = x; }
            else if (x > second && x != first) second = x;
        }
        return second;
    }

    public static void main(String[] args) {
        int[] a = {1, 2, 3, 4, 5};
        reverse(a);
        System.out.println(Arrays.toString(a));              // [5, 4, 3, 2, 1]
        rotateRight(a, 2);
        System.out.println(Arrays.toString(a));              // [2, 1, 5, 4, 3]
        System.out.println(Arrays.toString(maxAndMin(a)));   // [5, 1]
        System.out.println(secondLargest(a));                // 4
    }
}`,
   tip: ["Rotation check: rotating right by 2 moves the last two elements to the front. The three reversals do exactly that without a second array.", "Rotation check: right se 2 rotate karne par aakhri do elements aage aa jate hain. Teen reversals bina dusre array ke wahi karte hain."]},
  {h: ["Array problems II: duplicates, zeros, missing number, subarray sum", "Array problems II: duplicates, zeros, missing number, subarray sum"],
   p: ["These problems use one very useful habit: a write pointer k that marks where the next good element goes, while i scans the array. The same idea removes duplicates and moves zeros. Kadane's algorithm finds the best contiguous part in one pass, and prefix sums answer range-sum questions instantly.",
       "In problems me ek bahut kaam ki aadat use hoti hai: ek write pointer k jo batata hai ki agla achha element kahan jayega, jabki i array scan karta hai. Wahi idea duplicates hatata hai aur zeros ko end me bhejta hai. Kadane's algorithm ek hi pass me sabse achha contiguous hissa dhundhta hai, aur prefix sums range-sum ke sawal turant solve karte hain."],
   code: `import java.util.Arrays;

public class ArrayProblems2 {
    // Remove duplicates from a SORTED array in place; returns the new length
    static int removeDuplicates(int[] a) {
        if (a.length == 0) return 0;
        int k = 1;                               // where the next new value goes
        for (int i = 1; i < a.length; i++) {
            if (a[i] != a[i - 1]) a[k++] = a[i];
        }
        return k;
    }

    // Move all zeros to the end and keep the order of the others
    static void moveZeros(int[] a) {
        int k = 0;
        for (int i = 0; i < a.length; i++) {
            if (a[i] != 0) a[k++] = a[i];
        }
        while (k < a.length) a[k++] = 0;
    }

    // The missing number from 1..n (n - 1 numbers are given)
    static int missing(int[] a, int n) {
        int expected = n * (n + 1) / 2, actual = 0;
        for (int x : a) actual += x;
        return expected - actual;
    }

    // Maximum sum of a contiguous part (Kadane's algorithm)
    static int maxSubarray(int[] a) {
        int best = a[0], cur = a[0];
        for (int i = 1; i < a.length; i++) {
            cur = Math.max(a[i], cur + a[i]);    // extend the part, or start fresh here
            best = Math.max(best, cur);
        }
        return best;
    }

    // Two numbers with a given sum in a SORTED array (two pointers)
    static int[] twoSumSorted(int[] a, int target) {
        int i = 0, j = a.length - 1;
        while (i < j) {
            int s = a[i] + a[j];
            if (s == target) return new int[]{i, j};
            if (s < target) i++; else j--;
        }
        return new int[]{-1, -1};
    }

    // Prefix sums: p[k] is the sum of the first k elements
    static int[] prefix(int[] a) {
        int[] p = new int[a.length + 1];
        for (int i = 0; i < a.length; i++) p[i + 1] = p[i] + a[i];
        return p;
    }

    public static void main(String[] args) {
        int[] s = {1, 1, 2, 2, 2, 3, 5, 5};
        int len = removeDuplicates(s);
        System.out.println(Arrays.toString(Arrays.copyOf(s, len)));        // [1, 2, 3, 5]

        int[] z = {0, 3, 0, 5, 7, 0};
        moveZeros(z);
        System.out.println(Arrays.toString(z));                             // [3, 5, 7, 0, 0, 0]

        System.out.println(missing(new int[]{1, 2, 4, 5}, 5));             // 3
        System.out.println(maxSubarray(new int[]{-2, 1, -3, 4, -1, 2, 1, -5, 4}));   // 6
        System.out.println(Arrays.toString(twoSumSorted(new int[]{1, 3, 4, 6, 9}, 10)));   // [0, 4]

        int[] p = prefix(new int[]{2, 4, 6, 8});
        System.out.println(p[3] - p[1]);                                    // 10  (4 + 6 = sum of a[1..2])
    }
}`},
  {h: ["String problems I: palindrome, reverse, words, vowels, anagram", "String problems I: palindrome, reverse, words, vowels, anagram"],
   p: ["Strings problems mostly use charAt() with two pointers, the Character helpers and a frequency array of size 26 (one slot per letter). For an anagram, the trick is to count up for the first word and count down for the second: if every slot returns to zero, the letters match.",
       "String problems zyadatar charAt() ke saath two pointers, Character helpers aur size 26 ke frequency array (har letter ke liye ek slot) use karte hain. Anagram me trick ye hai ki pehle word ke liye ginti badhao aur dusre ke liye ghatao: har slot wapas zero ho jaye to letters match karte hain."],
   code: `public class StringProblems1 {
    // Palindrome that ignores spaces, punctuation and capital letters
    static boolean isPalindrome(String s) {
        int i = 0, j = s.length() - 1;
        while (i < j) {
            while (i < j && !Character.isLetterOrDigit(s.charAt(i))) i++;
            while (i < j && !Character.isLetterOrDigit(s.charAt(j))) j--;
            if (Character.toLowerCase(s.charAt(i)) != Character.toLowerCase(s.charAt(j))) return false;
            i++;
            j--;
        }
        return true;
    }

    static String reverse(String s) {
        return new StringBuilder(s).reverse().toString();
    }

    // Reverse the order of words: "the sky is blue" -> "blue is sky the"
    static String reverseWords(String s) {
        String[] w = s.trim().split("\\\\s+");
        StringBuilder sb = new StringBuilder();
        for (int i = w.length - 1; i >= 0; i--) {
            sb.append(w[i]);
            if (i > 0) sb.append(' ');
        }
        return sb.toString();
    }

    // Returns {vowels, consonants}
    static int[] vowelsAndConsonants(String s) {
        int v = 0, c = 0;
        for (char ch : s.toLowerCase().toCharArray()) {
            if (!Character.isLetter(ch)) continue;          // ignore spaces and digits
            if ("aeiou".indexOf(ch) != -1) v++; else c++;
        }
        return new int[]{v, c};
    }

    // Anagram of two lowercase words
    static boolean isAnagram(String a, String b) {
        if (a.length() != b.length()) return false;
        int[] f = new int[26];
        for (int i = 0; i < a.length(); i++) {
            f[a.charAt(i) - 'a']++;                          // count up for a
            f[b.charAt(i) - 'a']--;                          // count down for b
        }
        for (int x : f) if (x != 0) return false;
        return true;
    }

    public static void main(String[] args) {
        System.out.println(isPalindrome("A man, a plan, a canal: Panama"));   // true
        System.out.println(reverse("Java"));                                  // avaJ
        System.out.println(reverseWords("  the sky  is blue "));              // blue is sky the
        int[] vc = vowelsAndConsonants("Hello World");
        System.out.println(vc[0] + " vowels, " + vc[1] + " consonants");      // 3 vowels, 7 consonants
        System.out.println(isAnagram("listen", "silent"));                    // true
        System.out.println(isAnagram("abc", "abd"));                          // false
    }
}`},
  {h: ["String problems II: frequency, first unique, prefix, compress, cipher", "String problems II: frequency, first unique, prefix, compress, cipher"],
   p: ["These problems appear very often in interviews. A frequency array counts characters in one pass. The first non-repeating character needs two passes: one to count and one to find the first count of 1. Compression and ciphers both build a result with StringBuilder while walking through the text.",
       "Ye problems interviews me bahut aate hain. Frequency array ek pass me characters ginta hai. Pehla non-repeating character do pass maangta hai: ek ginne ke liye aur ek pehli ginti 1 dhundhne ke liye. Compression aur ciphers dono text par chalte hue StringBuilder se result banate hain."],
   code: `public class StringProblems2 {
    // Print how many times each letter appears
    static void frequency(String s) {
        int[] f = new int[26];
        for (char ch : s.toLowerCase().toCharArray())
            if (ch >= 'a' && ch <= 'z') f[ch - 'a']++;
        for (int i = 0; i < 26; i++)
            if (f[i] > 0) System.out.print((char) ('a' + i) + "=" + f[i] + " ");
        System.out.println();
    }

    // Index of the first character that appears only once (ASCII text), or -1
    static int firstUnique(String s) {
        int[] f = new int[256];
        for (char ch : s.toCharArray()) f[ch]++;
        for (int i = 0; i < s.length(); i++)
            if (f[s.charAt(i)] == 1) return i;
        return -1;
    }

    static String commonPrefix(String[] words) {
        if (words.length == 0) return "";
        String prefix = words[0];
        for (int i = 1; i < words.length; i++) {
            while (!words[i].startsWith(prefix)) {
                prefix = prefix.substring(0, prefix.length() - 1);
                if (prefix.isEmpty()) return "";
            }
        }
        return prefix;
    }

    // "aaabbc" -> "a3b2c"
    static String compress(String s) {
        if (s.isEmpty()) return s;
        StringBuilder sb = new StringBuilder();
        int count = 1;
        for (int i = 1; i <= s.length(); i++) {
            if (i < s.length() && s.charAt(i) == s.charAt(i - 1)) {
                count++;
            } else {
                sb.append(s.charAt(i - 1));
                if (count > 1) sb.append(count);
                count = 1;
            }
        }
        return sb.toString();
    }

    // Caesar cipher: shift every letter, keep everything else
    static String caesar(String s, int shift) {
        StringBuilder sb = new StringBuilder();
        for (char ch : s.toCharArray()) {
            if (Character.isUpperCase(ch)) sb.append((char) ('A' + (ch - 'A' + shift + 26) % 26));
            else if (Character.isLowerCase(ch)) sb.append((char) ('a' + (ch - 'a' + shift + 26) % 26));
            else sb.append(ch);
        }
        return sb.toString();
    }

    // "hello wORLD of java" -> "Hello World Of Java"
    static String capitalizeWords(String s) {
        StringBuilder sb = new StringBuilder();
        boolean newWord = true;
        for (char ch : s.toCharArray()) {
            if (Character.isWhitespace(ch)) { newWord = true; sb.append(ch); }
            else if (newWord) { sb.append(Character.toUpperCase(ch)); newWord = false; }
            else sb.append(Character.toLowerCase(ch));
        }
        return sb.toString();
    }

    public static void main(String[] args) {
        frequency("Programming");              // a=1 g=2 i=1 m=2 n=1 o=1 p=1 r=2
        System.out.println(firstUnique("swiss"));                                  // 1  (the letter w)
        System.out.println(commonPrefix(new String[]{"flower", "flow", "flight"}));   // fl
        System.out.println(compress("aaabbc"));                                    // a3b2c
        System.out.println(caesar("Hello, Gurleen!", 3));                          // Khoor, Jxuohhq!
        System.out.println(caesar(caesar("Hello, Gurleen!", 3), -3));              // Hello, Gurleen!
        System.out.println(capitalizeWords("hello wORLD of java"));                // Hello World Of Java
    }
}`},
  {h: ["Techniques you can reuse: two pointers, frequency array, sliding window", "Dobara use hone wali techniques: two pointers, frequency array, sliding window"],
   p: ["Three techniques solve a huge number of problems. Two pointers walk from both ends (or one behind the other) and replace a nested loop. A frequency array counts items in one pass. A sliding window keeps the sum or state of a moving block and updates it by adding the new element and removing the old one, instead of recalculating everything.",
       "Teen techniques bahut saare problems solve karti hain. Two pointers dono ends se (ya ek dusre ke peeche) chalte hain aur nested loop ki jagah lete hain. Frequency array ek pass me items ginta hai. Sliding window ek chalte hue block ka sum ya state rakhta hai aur sab kuch dobara calculate karne ki jagah naya element jodkar aur purana hatakar update karta hai."],
   code: `import java.util.Arrays;

public class Techniques {
    // Sliding window: the largest sum of k consecutive numbers
    static int maxSumK(int[] a, int k) {
        int window = 0;
        for (int i = 0; i < k; i++) window += a[i];          // the first window
        int best = window;
        for (int i = k; i < a.length; i++) {
            window += a[i] - a[i - k];                       // add the new, remove the old
            best = Math.max(best, window);
        }
        return best;
    }

    // Longest part of a String with no repeating character (ASCII)
    static int longestUnique(String s) {
        int[] last = new int[256];
        Arrays.fill(last, -1);                               // last seen index of each character
        int best = 0, start = 0;
        for (int i = 0; i < s.length(); i++) {
            char ch = s.charAt(i);
            if (last[ch] >= start) start = last[ch] + 1;     // jump past the earlier copy
            last[ch] = i;
            best = Math.max(best, i - start + 1);
        }
        return best;
    }

    // Two pointers: is the array a palindrome?
    static boolean isPalin(int[] a) {
        for (int i = 0, j = a.length - 1; i < j; i++, j--)
            if (a[i] != a[j]) return false;
        return true;
    }

    public static void main(String[] args) {
        System.out.println(maxSumK(new int[]{2, 1, 5, 1, 3, 2}, 3));    // 9  (5 + 1 + 3)
        System.out.println(longestUnique("abcabcbb"));                  // 3  (abc)
        System.out.println(isPalin(new int[]{1, 2, 3, 2, 1}));          // true
    }
}`,
   pts: [["Two pointers: use when the data is sorted or you compare both ends. Turns O(n squared) into O(n).", "Frequency array: use for letters (size 26), digits (size 10) or ASCII (size 256). One pass, O(n).", "Sliding window: use when the question says 'consecutive', 'substring' or 'subarray' of a fixed or changing size.", "Prefix sums: use when you need many range sums. Build once in O(n), answer each in O(1).", "Sorting first: use when the order does not matter. Duplicates and neighbours become easy to find."],
         ["Two pointers: tab use karo jab data sorted ho ya dono ends compare karne ho. O(n squared) ko O(n) bana deta hai.", "Frequency array: letters (size 26), digits (size 10) ya ASCII (size 256) ke liye. Ek pass, O(n).", "Sliding window: tab jab sawal me 'consecutive', 'substring' ya 'subarray' fixed ya badalte size ka ho.", "Prefix sums: tab jab bahut saare range sums chahiye. Ek baar O(n) me banao, har answer O(1) me.", "Pehle sort karna: tab jab order matter na kare. Duplicates aur neighbours dhundhna aasan ho jata hai."]]},
  {h: ["Complexity cheat sheet and edge cases", "Complexity cheat sheet aur edge cases"],
   p: ["Time complexity tells how the number of steps grows when the input size n grows. You do not need exact numbers, only the shape: one loop is O(n), two nested loops are O(n squared), halving each step is O(log n). Edge cases are unusual inputs that break careless code, and checking them is what separates a correct solution from a lucky one.",
       "Time complexity batati hai ki input size n badhne par steps kaise badhte hain. Exact numbers nahi chahiye, sirf shape: ek loop O(n), do nested loops O(n squared), har step me aadha karna O(log n). Edge cases wo ajeeb inputs hain jo laparvah code ko tod dete hain, aur inhe check karna sahi solution aur kismat se chale solution me fark hai."],
   pts: [["One loop over the data: O(n). Two nested loops: O(n squared). A loop that halves the range: O(log n). Sorting: O(n log n).", "Memory: a few extra variables is O(1). A new array or StringBuilder of size n is O(n).", "Array edge cases: empty array, one element, two elements, all equal values, already sorted, reverse sorted, negative numbers, very large values (overflow).", "String edge cases: empty string, one character, spaces at the start or end, capital and small letters, digits and symbols, null.", "Index edge cases: first index 0, last index length - 1, and never length itself.", "Overflow: a sum of many ints can exceed 2 billion. Use long for totals.", "Always test your method with at least five inputs including two edge cases."],
         ["Data par ek loop: O(n). Do nested loops: O(n squared). Range aadhi karne wala loop: O(log n). Sorting: O(n log n).", "Memory: kuch extra variables O(1) hain. Size n ka naya array ya StringBuilder O(n) hai.", "Array edge cases: khali array, ek element, do elements, sab values barabar, pehle se sorted, ulta sorted, negative numbers, bahut badi values (overflow).", "String edge cases: khali string, ek character, shuru ya end me spaces, capital aur small letters, digits aur symbols, null.", "Index edge cases: pehla index 0, aakhri index length - 1, aur length khud kabhi nahi.", "Overflow: kai ints ka sum 2 arab paar kar sakta hai. Totals ke liye long use karo.", "Apne method ko kam se kam paanch inputs se test karo jisme do edge cases ho."]],
   code: `// Quick test list for a method that works on an int array
// {}                 -> empty array
// {5}                -> one element
// {2, 2, 2}          -> all equal
// {-3, -1, -2}       -> all negative
// {1, 2, 3, 4, 5}    -> already sorted
// {5, 4, 3, 2, 1}    -> reverse sorted`},
  {h: ["Practice list and next steps", "Practice list aur aage ke steps"],
   p: ["Solve the problems below on your own, in this order. Write each one as a method that takes the array or String as a parameter and returns the answer, then test it from main with several inputs. Use the Coding Arena to check your solutions.",
       "Neeche ke problems is order me khud solve karo. Har ek ko ek method ki tarah likho jo array ya String parameter me le aur answer return kare, fir main se kai inputs ke saath test karo. Solutions check karne ke liye Coding Arena use karo."],
   pts: [["Easy (arrays): sum and average, count even and odd, linear search, check whether an array is sorted, copy an array in reverse, find the smallest number.", "Easy (strings): count vowels, count words, check palindrome, reverse a String, convert to upper case without toUpperCase(), count a given character.", "Medium (arrays): second largest and second smallest, remove duplicates from a sorted array, move zeros to the end, rotate by k, find the missing number, merge two sorted arrays.", "Medium (strings): check anagram, first non-repeating character, reverse the words of a sentence, remove all spaces, longest word in a sentence, compress a String (aaabb to a3b2).", "Hard: maximum subarray sum, two sum with a sorted array, longest substring without repeating characters, sum of every 2D array row and column, transpose a matrix.", "Challenge: for every problem, also write the faster version (O(n) instead of O(n squared)) and explain why it is faster.", "When Phase 2 feels easy, you are ready for Object-Oriented Programming in Phase 3."],
         ["Easy (arrays): sum aur average, even aur odd ginna, linear search, check karna ki array sorted hai ya nahi, array ko ulta copy karna, sabse chhota number dhundhna.", "Easy (strings): vowels ginna, words ginna, palindrome check, String ulti karna, toUpperCase() ke bina upper case me badalna, diya gaya character ginna.", "Medium (arrays): second largest aur second smallest, sorted array se duplicates hatana, zeros ko end me bhejna, k se rotate karna, missing number dhundhna, do sorted arrays ko merge karna.", "Medium (strings): anagram check, pehla non-repeating character, sentence ke words ulte karna, saare spaces hatana, sentence ka sabse lamba word, String compress karna (aaabb se a3b2).", "Hard: maximum subarray sum, sorted array ke saath two sum, bina repeat hue characters ka sabse lamba substring, 2D array ki har row aur column ka sum, matrix transpose.", "Challenge: har problem ka tez version bhi likho (O(n squared) ki jagah O(n)) aur samjhao ki wo tez kyun hai.", "Phase 2 aasan lagne lage to tum Phase 3 me Object-Oriented Programming ke liye taiyar ho."]],
   tip: ["Programming is learned by doing. If you can solve these without looking at the code, Phase 2 is truly finished: you can solve coding problems on arrays and strings.", "Programming karke seekhi jati hai. Ye bina code dekhe solve kar paao to Phase 2 sach me poora hua: tum arrays aur strings par coding problems solve kar sakte ho."]}
 ]}
});

Object.assign(TOPICS, {
23: {
 def: ["A class is a blueprint that describes what data (fields) and what actions (methods) a kind of thing has. An object is one real thing created from that blueprint, with its own values. Object-Oriented Programming (OOP) builds programs out of many such objects that work together.",
       "Class ek blueprint hai jo batata hai ki kisi tarah ki cheez ke paas kaun sa data (fields) aur kaun se kaam (methods) hote hain. Object us blueprint se bani ek asli cheez hai, jiski apni values hoti hain. Object-Oriented Programming (OOP) me program aise hi kai objects se banta hai jo milkar kaam karte hain."],
 secs: [
  {h: ["Why OOP? The real-world idea", "OOP kyun? Real-world ka idea"],
   p: ["Until now you wrote code as separate variables and methods. In a bigger program you might have name1, marks1, name2, marks2 and so on, and the methods that use them are far away. OOP keeps the data and the actions that belong together in ONE place. A student has a name and marks and can show them. A car has a colour and speed and can accelerate. You describe the thing once as a class and then create as many objects as you need.",
       "Ab tak tum code ko alag variables aur methods ki tarah likhte the. Bade program me name1, marks1, name2, marks2 jaise variables ho jate hain aur unhe use karne wale methods door hote hain. OOP jo data aur kaam ek saath ke hote hain unhe EK jagah rakhta hai. Student ke paas naam aur marks hote hain aur wo unhe dikha sakta hai. Car ke paas colour aur speed hoti hai aur wo accelerate kar sakti hai. Cheez ko ek baar class me describe karte ho aur fir jitne objects chahiye utne bana lete ho."],
   pts: [["Class = the design (the plan of a house). Object = one real house built from the plan.", "One class can create many objects, and each object has its own copy of the data.", "State = the values an object holds (fields). Behaviour = what it can do (methods).", "Identity = every object is a different thing, even if two objects hold equal values.", "The four pillars of OOP are encapsulation, inheritance, polymorphism and abstraction. This lesson is the foundation for all of them."],
         ["Class = design (ghar ka naksha). Object = naksha se bana ek asli ghar.", "Ek class se kai objects ban sakte hain, aur har object apne data ki alag copy rakhta hai.", "State = object ki values (fields). Behaviour = wo kya kar sakta hai (methods).", "Identity = har object alag cheez hai, chahe do objects me barabar values hon.", "OOP ke chaar pillars encapsulation, inheritance, polymorphism aur abstraction hain. Ye lesson un sab ki neev hai."]]},
  {h: ["Writing your first class", "Apni pehli class likhna"],
   p: ["A class is written with the class keyword and a name that starts with a capital letter. Inside the braces you put fields (variables that describe the thing) and methods (the actions). The class below describes a student. It does not create any student yet. It only says what a student looks like.",
       "Class class keyword aur capital letter se shuru hone wale naam se likhi jati hai. Braces ke andar fields (cheez ko describe karne wale variables) aur methods (kaam) rakhte hain. Neeche ki class ek student ko describe karti hai. Abhi ye koi student banati nahi. Ye sirf batati hai ki student kaisa dikhta hai."],
   code: `public class Student {
    // fields: the data every student has
    String name;
    int marks;

    // method: an action every student can do
    void show() {
        System.out.println(name + " scored " + marks);
    }

    // method with a result
    boolean hasPassed() {
        return marks >= 40;
    }
}`,
   pts: [["Class names use PascalCase: Student, BankAccount, ShoppingCart.", "Fields are declared inside the class but outside every method.", "Methods inside a class that are NOT static are called instance methods. They work on one particular object.", "A file can hold many classes, but only one public class, and that class name must match the file name (Student.java)."],
         ["Class ke naam PascalCase me likhte hain: Student, BankAccount, ShoppingCart.", "Fields class ke andar par har method ke bahar declare hote hain.", "Class ke wo methods jo static NAHI hain, instance methods kehlate hain. Ye ek khaas object par kaam karte hain.", "Ek file me kai classes ho sakti hain, par public class sirf ek, aur uska naam file ke naam jaisa (Student.java) hona chahiye."]]},
  {h: ["Creating objects with new", "new se objects banana"],
   p: ["The new keyword creates an object. Student s1 = new Student(); does two things. The right side builds a new Student object in the heap memory. The left side declares a variable s1, which holds a REFERENCE (an address) to that object, not the object itself. Then you use the dot operator to reach the fields and methods of that particular object.",
       "new keyword object banata hai. Student s1 = new Student(); do kaam karta hai. Right side heap memory me ek naya Student object banati hai. Left side ek variable s1 declare karti hai, jo us object ka REFERENCE (address) rakhta hai, object khud nahi. Fir dot operator se us khaas object ke fields aur methods tak pahunchte ho."],
   code: `public class Main {
    public static void main(String[] args) {
        Student s1 = new Student();       // create the first object
        s1.name = "Gurleen";
        s1.marks = 88;

        Student s2 = new Student();       // a second, separate object
        s2.name = "Mohit";
        s2.marks = 35;

        s1.show();                        // Gurleen scored 88
        s2.show();                        // Mohit scored 35
        System.out.println(s1.hasPassed());   // true
        System.out.println(s2.hasPassed());   // false

        s2.marks = 60;                    // changing s2 does not touch s1
        System.out.println(s1.marks);     // 88
    }
}`,
   pts: [["The dot (.) means 'go to this object and use its field or method'.", "Each object has its OWN copy of the fields. Changing s2.marks never changes s1.marks.", "Student s1; alone only declares a variable. No object exists until you use new.", "Many programs keep the class (Student) in one file and put main in another class (Main). Both files must be in the same folder."],
         ["Dot (.) ka matlab 'is object par jao aur uska field ya method use karo'.", "Har object ke fields ki APNI copy hoti hai. s2.marks badalne se s1.marks kabhi nahi badalta.", "Akela Student s1; sirf variable declare karta hai. new use kiye bina koi object nahi banta.", "Kai programs class (Student) ek file me aur main dusri class (Main) me rakhte hain. Dono files ek hi folder me honi chahiye."]]},
  {h: ["What happens in memory", "Memory me kya hota hai"],
   p: ["Java keeps two main memory areas. The stack holds local variables and method calls. The heap holds all objects. For Student s1 = new Student(); the variable s1 lives on the stack and the Student object lives in the heap, and s1 points to it. Copying a reference variable does NOT copy the object. Both variables now point to the same object, which is called aliasing.",
       "Java ke do main memory areas hote hain. Stack me local variables aur method calls rehte hain. Heap me saare objects rehte hain. Student s1 = new Student(); me variable s1 stack par aur Student object heap me rehta hai, aur s1 use point karta hai. Reference variable ko copy karne se object copy NAHI hota. Ab dono variables ek hi object ko point karte hain, ise aliasing kehte hain."],
   code: `Student a = new Student();
a.name = "Himakshi";
a.marks = 70;

Student b = a;            // copies the REFERENCE, not the object
b.marks = 95;             // changes the one shared object
System.out.println(a.marks);       // 95  (a sees the change!)
System.out.println(a == b);        // true (same object)

Student c = new Student();         // a genuinely new object
c.name = "Himakshi";
c.marks = 95;
System.out.println(a == c);        // false (different objects, equal values)

a = null;                 // a points to nothing now
System.out.println(b.name);        // Himakshi (the object is still alive through b)
// System.out.println(a.name);     // NullPointerException`,
   pts: [["== on objects compares references (same object?). To compare contents you write an equals() method (Phase 3 later).", "null means a reference points to no object. Using a field or method on null throws NullPointerException, the most common Java error.", "An object with no reference left is unreachable. The garbage collector frees its memory automatically.", "Reassigning a reference (a = new Student()) makes it point to a new object and leaves the old one unchanged."],
         ["Objects par == references compare karta hai (kya same object?). Contents compare karne ke liye equals() method likhte hain (Phase 3 me aage).", "null ka matlab reference kisi object ko point nahi karta. null par field ya method use karne se NullPointerException aata hai, jo Java ki sabse common error hai.", "Jis object ka koi reference na bache wo unreachable hota hai. Garbage collector uski memory apne aap free kar deta hai.", "Reference ko dobara assign karna (a = new Student()) use naye object par point karta hai aur purane ko waisa hi chhodta hai."]]},
  {h: ["Instance variables, default values and methods that use them", "Instance variables, default values aur unhe use karne wale methods"],
   p: ["Fields that belong to each object are called instance variables. If you do not give them a value, Java fills them with defaults (0, 0.0, false or null). Inside an instance method you can use the fields by their plain name, and they refer to the object the method was called on. Methods can also take parameters and return values like any other method.",
       "Jo fields har object ke hote hain unhe instance variables kehte hain. Value na do to Java unhe defaults (0, 0.0, false ya null) se bhar deta hai. Instance method ke andar fields ko seedhe naam se use kar sakte ho, aur wo us object ke hote hain jis par method call hua. Methods bhi kisi bhi aur method ki tarah parameters le sakte hain aur values return kar sakte hain."],
   code: `public class Car {
    String brand;          // default: null
    int speed;             // default: 0
    boolean running;       // default: false

    void start() {
        running = true;
        System.out.println(brand + " started");
    }

    void accelerate(int by) {              // method with a parameter
        if (!running) {
            System.out.println("Start the car first");
            return;
        }
        speed += by;                       // uses THIS car's speed
    }

    int getSpeed() {                       // method that returns a value
        return speed;
    }

    public static void main(String[] args) {
        Car c1 = new Car();
        System.out.println(c1.brand + " " + c1.speed + " " + c1.running);   // null 0 false

        c1.brand = "Tata";
        c1.accelerate(20);                 // Start the car first
        c1.start();                        // Tata started
        c1.accelerate(30);
        c1.accelerate(25);
        System.out.println(c1.getSpeed()); // 55

        Car c2 = new Car();                // has its own speed, still 0
        System.out.println(c2.getSpeed()); // 0
    }
}`,
   tip: ["Local variables (inside a method) have NO default value and must be given one before use. Instance variables DO get a default. This difference causes many beginner errors.", "Local variables (method ke andar) ki koi default value NAHI hoti aur use karne se pehle value deni padti hai. Instance variables ko default MILTI hai. Is farak se beginners ki kai errors hoti hain."]},
  {h: ["Objects as method parameters and in arrays", "Method parameters me objects aur arrays me objects"],
   p: ["You can pass an object to a method. The method receives a copy of the reference, so it can change the object's fields and the caller sees the change. You can also keep many objects in an array. new Student[3] creates only 3 empty slots that hold null. You must create each Student object yourself and put it in a slot.",
       "Object ko method me pass kar sakte ho. Method ko reference ki copy milti hai, isliye wo object ke fields badal sakta hai aur caller ko badlav dikhta hai. Kai objects ko array me bhi rakh sakte ho. new Student[3] sirf 3 khali slots banata hai jinme null hota hai. Har Student object tumhe khud banana aur slot me rakhna padta hai."],
   code: `public class ClassRoom {
    static Student make(String name, int marks) {      // a small helper
        Student s = new Student();
        s.name = name;
        s.marks = marks;
        return s;                                      // returning an object
    }

    static void addGrace(Student s) {                  // changes the caller's object
        s.marks += 5;
    }

    public static void main(String[] args) {
        Student[] team = new Student[3];               // 3 slots, all null
        System.out.println(team[0]);                   // null

        team[0] = make("Shivam", 72);
        team[1] = make("Rahul", 55);
        team[2] = make("Gurleen", 91);

        addGrace(team[1]);                             // 55 becomes 60

        for (Student s : team) {
            s.show();
        }
        // Shivam scored 72
        // Rahul scored 60
        // Gurleen scored 91

        int total = 0;
        for (Student s : team) total += s.marks;
        System.out.println("Average = " + (double) total / team.length);   // 74.33...

        // Find the topper
        Student best = team[0];
        for (Student s : team) if (s.marks > best.marks) best = s;
        System.out.println("Topper: " + best.name);                       // Gurleen
    }
}`,
   pts: [["A new object array is filled with null. Calling team[0].show() before creating the object throws NullPointerException.", "A method can create an object and return it, as make() does. This is the idea behind factory methods.", "Java always passes the reference by value. The method can change the object's insides, but it cannot make the caller's variable point somewhere else."],
         ["Naya object array null se bhara hota hai. Object banane se pehle team[0].show() call karne par NullPointerException aata hai.", "Method object bana kar return kar sakta hai, jaise make() karta hai. Factory methods ka idea yahi hai.", "Java hamesha reference ko by value pass karta hai. Method object ke andar ki cheezein badal sakta hai, par caller ke variable ko kahin aur point nahi kara sakta."]]},
  {h: ["Printing an object, and common mistakes", "Object print karna aur common mistakes"],
   p: ["If you print an object directly you get a strange text like Student@1b6d3586 (the class name and a code). To print something readable, add a method named toString() that returns a String. Java then calls it automatically whenever the object is printed or joined with text. Overriding and the @Override annotation are explained properly in a later lesson.",
       "Object ko seedha print karo to Student@1b6d3586 jaisa ajeeb text milta hai (class ka naam aur ek code). Padhne layak print ke liye toString() naam ka method likho jo String return kare. Fir Java use apne aap call karta hai jab bhi object print hota hai ya text se jodta hai. Overriding aur @Override annotation ko aage ke lesson me achhe se samjhenge."],
   code: `public class Player {
    String name;
    int score;

    @Override
    public String toString() {
        return name + " (" + score + ")";
    }

    public static void main(String[] args) {
        Player p = new Player();
        p.name = "Himakshi";
        p.score = 120;
        System.out.println(p);                 // Himakshi (120)
        System.out.println("Winner: " + p);    // Winner: Himakshi (120)

        Player empty = null;
        // System.out.println(empty.name);     // NullPointerException
        if (empty != null) {
            System.out.println(empty.name);    // safe check
        }
    }
}`,
   pts: [["Mistake: using an object before new, which leaves the variable null.", "Mistake: thinking Student b = a; makes a copy. It makes a second name for the same object.", "Mistake: comparing two objects with == and expecting their contents to be compared.", "Mistake: forgetting that instance methods need an object: Student.show() is an error, s1.show() is right.", "Mistake: naming the class and the file differently when the class is public.", "Good habit: one class per file, class names in PascalCase, field and method names in camelCase.", "Good habit: give every class a toString(). It makes debugging much easier."],
         ["Galti: new se pehle object use karna, jisse variable null rehta hai.", "Galti: Student b = a; ko copy samajhna. Ye usi object ka dusra naam banata hai.", "Galti: do objects ko == se compare karke unke contents compare hone ki ummeed karna.", "Galti: ye bhul jana ki instance methods ko object chahiye: Student.show() error hai, s1.show() sahi hai.", "Galti: public class ka naam aur file ka naam alag rakhna.", "Achhi aadat: ek file me ek class, class names PascalCase me, field aur method names camelCase me.", "Achhi aadat: har class me toString() likho. Isse debugging bahut aasan hoti hai."]],
   tip: ["Think of a class as a cookie cutter and objects as the cookies. One cutter, many cookies, and eating one cookie does not remove the others.", "Class ko cookie cutter aur objects ko cookies samjho. Ek cutter, kai cookies, aur ek cookie khane se baaki nahi hatti."]}
 ]},
24: {
 def: ["A constructor is a special block of code that runs automatically when an object is created with new. Its job is to give the new object a correct starting state, for example by setting its fields. A constructor has the same name as the class and has no return type, not even void.",
       "Constructor code ka ek khaas block hai jo new se object bante hi apne aap chalta hai. Iska kaam naye object ko sahi starting state dena hai, jaise uske fields set karna. Constructor ka naam class jaisa hota hai aur uska koi return type nahi hota, void bhi nahi."],
 secs: [
  {h: ["Why constructors?", "Constructors kyun?"],
   p: ["Without a constructor you create an object and then fill its fields one by one, and it is easy to forget one. A Student with no name or an Account with no owner is a broken object. A constructor makes it impossible to create the object without the required values: new Student(\"Gurleen\", 88) builds the object and sets it up in a single step.",
       "Constructor ke bina object banate ho aur fir uske fields ek-ek karke bharte ho, aur koi ek bhul jana aasan hai. Bina naam ka Student ya bina owner ka Account tuta hua object hai. Constructor ye namumkin bana deta hai ki object zaroori values ke bina bane: new Student(\"Gurleen\", 88) object banata bhi hai aur ek hi step me set bhi kar deta hai."],
   pts: [["It runs exactly once for each object, at the moment of new.", "It must have the same name as the class (capital letter included).", "It has NO return type. If you write a return type, Java treats it as an ordinary method, not a constructor.", "It can take parameters, and a class can have several constructors (overloading).", "You cannot call a constructor like a method on an existing object. It runs only through new (or through this() and super() inside another constructor)."],
         ["Ye har object ke liye theek ek baar chalta hai, new ke waqt.", "Iska naam class ke naam jaisa hona chahiye (capital letter ke saath).", "Iska return type NAHI hota. Return type likh doge to Java use constructor nahi, normal method maanega.", "Ye parameters le sakta hai, aur ek class me kai constructors ho sakte hain (overloading).", "Constructor ko maujooda object par method ki tarah call nahi kar sakte. Ye sirf new se (ya dusre constructor ke andar this() aur super() se) chalta hai."]],
   code: `public class Student {
    String name;
    int marks;

    // constructor: same name as the class, no return type
    Student(String n, int m) {
        name = n;
        marks = m;
        System.out.println("Created " + n);
    }

    public static void main(String[] args) {
        Student s = new Student("Gurleen", 88);   // prints: Created Gurleen
        System.out.println(s.name + " " + s.marks);   // Gurleen 88
    }
}`},
  {h: ["The default constructor", "Default constructor"],
   p: ["If you write NO constructor at all, the Java compiler quietly adds an empty one for you, called the default constructor. It takes no parameters and does nothing except let you write new Student(). The moment you write ANY constructor yourself, the compiler stops adding it. If you still want new Student() to work, you must write the no-argument constructor yourself.",
       "Tum koi bhi constructor NAHI likhte to Java compiler chupchap ek khali constructor jod deta hai, jise default constructor kehte hain. Ye koi parameter nahi leta aur sirf new Student() likhne deta hai. Jaise hi tum KOI bhi constructor khud likhte ho, compiler use jodna band kar deta hai. new Student() phir bhi chalana ho to no-argument constructor khud likhna padega."],
   code: `class A {
    int x;                    // no constructor written
}
A a = new A();                // works: the compiler added A() {}
System.out.println(a.x);      // 0

class B {
    int x;
    B(int x) {                // you wrote one constructor
        this.x = x;
    }
}
B b1 = new B(5);              // works
// B b2 = new B();            // ERROR: constructor B() is undefined

class C {
    int x;
    C() { x = 1; }            // write the no-arg one again
    C(int x) { this.x = x; }
}
C c1 = new C();               // works, x = 1
C c2 = new C(9);              // works, x = 9`,
   tip: ["Common error message: 'constructor X in class X cannot be applied to given types'. It means you called new with arguments that no constructor accepts.", "Common error message: 'constructor X in class X cannot be applied to given types'. Iska matlab hai ki tumne new ko aise arguments diye jo koi constructor nahi leta."]},
  {h: ["No-argument and parameterized constructors", "No-argument aur parameterized constructors"],
   p: ["A no-argument constructor sets safe default values. A parameterized constructor takes the starting values from the caller. Real classes often have both. Inside a constructor you can also validate the values, so a bad object is never created.",
       "No-argument constructor safe default values set karta hai. Parameterized constructor starting values caller se leta hai. Real classes me aksar dono hote hain. Constructor ke andar values validate bhi kar sakte ho, taaki kharab object kabhi bane hi nahi."],
   code: `public class Account {
    String owner;
    double balance;

    Account() {                          // no-arg: safe defaults
        owner = "Unknown";
        balance = 0;
    }

    Account(String owner, double opening) {      // parameterized
        this.owner = owner;
        if (opening < 0) {
            this.balance = 0;            // refuse a negative opening balance
        } else {
            this.balance = opening;
        }
    }

    void print() {
        System.out.println(owner + ": " + balance);
    }

    public static void main(String[] args) {
        new Account().print();                       // Unknown: 0.0
        new Account("Mohit", 5000).print();          // Mohit: 5000.0
        new Account("Shivam", -100).print();         // Shivam: 0.0
    }
}`,
   pts: [["A parameterized constructor can use the same names for its parameters and fields if you write this.name = name (explained fully in the next lesson).", "new Account(...) can be used directly, without a variable, when you only need the object once.", "Keep constructors short: set up the object, and do not print or read input inside them."],
         ["Parameterized constructor apne parameters aur fields ke liye same naam use kar sakta hai agar this.name = name likho (agle lesson me poori tarah samjhayenge).", "Object sirf ek baar chahiye to new Account(...) ko bina variable ke seedha use kar sakte ho.", "Constructors chhote rakho: object set up karo, unke andar print ya input mat karo."]]},
  {h: ["Constructor overloading", "Constructor overloading"],
   p: ["A class can have several constructors as long as their parameter lists differ in number, type or order. Java picks the matching one from the arguments you give in new. This lets callers create an object in the way that suits them, for example with just a title or with a title and a price.",
       "Ek class me kai constructors ho sakte hain jab tak unki parameter lists ginti, type ya order me alag ho. Java new me diye gaye arguments se matching wala chun leta hai. Isse callers apne hisaab se object bana sakte hain, jaise sirf title ke saath ya title aur price ke saath."],
   code: `public class Book {
    String title;
    String author;
    double price;

    Book() {                                   // 0 parameters
        title = "Untitled";
        author = "Unknown";
        price = 0;
    }

    Book(String title) {                       // 1 parameter
        this.title = title;
        this.author = "Unknown";
        this.price = 199;
    }

    Book(String title, String author, double price) {   // 3 parameters
        this.title = title;
        this.author = author;
        this.price = price;
    }

    public String toString() {
        return title + " by " + author + " (Rs " + price + ")";
    }

    public static void main(String[] args) {
        System.out.println(new Book());                          // Untitled by Unknown (Rs 0.0)
        System.out.println(new Book("Java Basics"));             // Java Basics by Unknown (Rs 199.0)
        System.out.println(new Book("Java Basics", "Himakshi", 450));
    }
}`,
   pts: [["Two constructors with the same parameter types are not allowed, even if the parameter names differ.", "Book(String a, int b) and Book(int a, String b) are different, because the order of types differs.", "The repeated assignment lines above can be removed with constructor chaining, shown next."],
         ["Same parameter types wale do constructors allowed nahi hain, chahe parameter names alag ho.", "Book(String a, int b) aur Book(int a, String b) alag hain, kyunki types ka order alag hai.", "Upar ki dohrayi hui assignment lines constructor chaining se hat sakti hain, jo agle section me hai."]]},
  {h: ["Constructor chaining with this(...)", "this(...) se constructor chaining"],
   p: ["One constructor can call another constructor of the same class with this(arguments). This is called constructor chaining. It removes repeated code: you write the full setup once in the biggest constructor, and the smaller ones simply call it with default values. The call to this(...) MUST be the very first statement in the constructor.",
       "Ek constructor usi class ke dusre constructor ko this(arguments) se call kar sakta hai. Ise constructor chaining kehte hain. Isse dohraya hua code hat jata hai: poora setup sabse bade constructor me ek baar likhte ho, aur chhote constructors use default values ke saath bas call kar dete hain. this(...) ka call constructor ka bilkul PEHLA statement hona ZAROORI hai."],
   code: `public class Book {
    String title;
    String author;
    double price;

    Book(String title, String author, double price) {     // the main constructor
        this.title = title;
        this.author = author;
        this.price = price;
    }

    Book(String title) {
        this(title, "Unknown", 199);          // calls the 3-parameter constructor
    }

    Book() {
        this("Untitled");                     // calls Book(String), which calls the main one
    }

    public String toString() {
        return title + " | " + author + " | " + price;
    }

    public static void main(String[] args) {
        System.out.println(new Book());                    // Untitled | Unknown | 199.0
        System.out.println(new Book("Java"));              // Java | Unknown | 199.0
        System.out.println(new Book("Java", "Rahul", 320));
    }
}`,
   pts: [["this(...) must be the first line of the constructor. Anything before it is a compile error.", "Chains must not go in a circle (A calls B, B calls A). That is a compile error.", "this(...) works only inside constructors. Inside a normal method you cannot call a constructor.", "Calling the parent constructor with super(...) works the same way and is covered in the Inheritance lessons."],
         ["this(...) constructor ki pehli line hona chahiye. Usse pehle kuch bhi likhna compile error hai.", "Chains gol nahi ghumni chahiye (A, B ko call kare aur B, A ko). Ye compile error hai.", "this(...) sirf constructors ke andar chalta hai. Normal method ke andar constructor call nahi kar sakte.", "super(...) se parent constructor call karna bhi isi tarah kaam karta hai aur Inheritance lessons me aayega."]]},
  {h: ["Copy constructor", "Copy constructor"],
   p: ["Java has no built-in copy constructor, but you can write one: a constructor that takes another object of the same class and copies its values. It is the safe way to make a real, independent copy, because Student b = a; only copies the reference. For fields that are themselves objects or arrays, copy them too (a deep copy), otherwise both objects share them.",
       "Java me built-in copy constructor nahi hota, par tum likh sakte ho: aisa constructor jo usi class ka dusra object leta hai aur uski values copy karta hai. Asli, alag copy banane ka ye safe tareeka hai, kyunki Student b = a; sirf reference copy karta hai. Jo fields khud objects ya arrays ho unhe bhi copy karo (deep copy), warna dono objects unhe share karenge."],
   code: `public class Team {
    String name;
    int[] scores;

    Team(String name, int[] scores) {
        this.name = name;
        this.scores = scores.clone();            // own copy of the array
    }

    Team(Team other) {                           // copy constructor
        this.name = other.name;
        this.scores = other.scores.clone();      // deep copy: the array is copied too
    }

    public static void main(String[] args) {
        Team a = new Team("Alpha", new int[]{10, 20, 30});
        Team b = new Team(a);                    // an independent copy

        b.name = "Beta";
        b.scores[0] = 99;

        System.out.println(a.name + " " + a.scores[0]);   // Alpha 10   (a is untouched)
        System.out.println(b.name + " " + b.scores[0]);   // Beta 99

        Team c = a;                              // NOT a copy: the same object
        c.name = "Changed";
        System.out.println(a.name);                       // Changed
    }
}`},
  {h: ["Order of initialization", "Initialization ka order"],
   p: ["When you write new, Java prepares the object in a fixed order. First every field gets its default value (0, false, null). Then the field initializers and initializer blocks run, from top to bottom. Finally the constructor body runs. An initializer block is a plain pair of braces { } inside the class, and it runs before the constructor each time an object is created.",
       "Jab new likhte ho, Java object ko ek tay order me taiyar karta hai. Pehle har field ko uski default value (0, false, null) milti hai. Fir field initializers aur initializer blocks upar se neeche chalte hain. Aakhir me constructor ki body chalti hai. Initializer block class ke andar braces { } ki ek saadi jodi hai, aur wo har object banne par constructor se pehle chalta hai."],
   code: `public class Demo {
    int a = log("field a");

    {
        System.out.println("initializer block");
    }

    int b = log("field b");

    Demo() {
        System.out.println("constructor");
    }

    static int log(String s) {
        System.out.println(s);
        return 1;
    }

    public static void main(String[] args) {
        new Demo();
        // field a
        // initializer block
        // field b
        // constructor
    }
}`,
   pts: [["Defaults first, then initializers and blocks in the order they are written, then the constructor.", "A static initializer block (static { }) runs only once, when the class is first loaded, before any object is made.", "A field can be given a value directly: int count = 10; this runs before the constructor.", "With inheritance the parent part is built first. You will see this in the Inheritance lesson."],
         ["Pehle defaults, fir initializers aur blocks jis order me likhe hain, fir constructor.", "Static initializer block (static { }) sirf ek baar chalta hai, jab class pehli baar load hoti hai, kisi bhi object se pehle.", "Field ko seedhe value de sakte ho: int count = 10; ye constructor se pehle chalta hai.", "Inheritance me parent wala hissa pehle banta hai. Ye Inheritance lesson me dekhoge."]]},
  {h: ["final fields, private constructors and common mistakes", "final fields, private constructors aur common mistakes"],
   p: ["A final field must be given its value exactly once, either where it is declared or inside every constructor. This is how you make a value that can never change after the object is built, like an id. A private constructor stops outsiders from using new, which is useful for classes that control their own creation, such as a single shared object (singleton) or a class made only of helper methods.",
       "final field ko theek ek baar value deni hoti hai, ya to jahan declare hua wahan ya har constructor ke andar. Isi se aisi value banti hai jo object banne ke baad kabhi nahi badalti, jaise id. Private constructor bahar walon ko new use karne se rokta hai, jo un classes ke liye kaam ka hai jo apna creation khud control karti hain, jaise ek shared object (singleton) ya sirf helper methods wali class."],
   code: `public class User {
    private final int id;              // must be set in every constructor
    private String name;
    private static int nextId = 1;

    User(String name) {
        this.id = nextId++;            // each new user gets the next number
        this.name = name;
    }

    int getId() { return id; }
    // there is no setId(): the id never changes

    public static void main(String[] args) {
        System.out.println(new User("Rahul").getId());      // 1
        System.out.println(new User("Himakshi").getId());   // 2
    }
}

// A simple singleton: only one object can ever exist
class Config {
    private static Config instance;
    private Config() { }               // nobody outside can call new Config()

    static Config get() {
        if (instance == null) instance = new Config();
        return instance;
    }
}
// Config.get() == Config.get()   // true: the same object every time`,
   pts: [["Mistake: writing a return type, such as void Student() { }. That is a normal method, so new Student(...) will not run it and your fields stay empty.", "Mistake: a different spelling or capital letter in the constructor name. It must match the class exactly.", "Mistake: writing a parameterized constructor and then calling new Student() with no arguments.", "Mistake: forgetting that a final field must be set in EVERY constructor.", "Mistake: using a name for the parameter that is the same as the field, without this. (name = name; does nothing useful).", "Good habit: make the main constructor do the work, and let the others call it with this(...).", "Good habit: validate inputs in the constructor so an invalid object is never created."],
         ["Galti: return type likhna, jaise void Student() { }. Ye normal method hai, isliye new Student(...) use nahi chalata aur tumhare fields khali rehte hain.", "Galti: constructor ke naam me spelling ya capital letter alag hona. Wo class se bilkul match karna chahiye.", "Galti: parameterized constructor likhkar fir bina arguments ke new Student() call karna.", "Galti: ye bhul jana ki final field HAR constructor me set karna zaroori hai.", "Galti: parameter ka naam field jaisa rakhkar this ke bina likhna. (name = name; kuch kaam ka nahi karta).", "Achhi aadat: main constructor kaam kare, baaki this(...) se use call karein.", "Achhi aadat: constructor me inputs validate karo taaki invalid object kabhi bane hi nahi."]],
   tip: ["Interview question: can a constructor be private, static, final or abstract? It can be private. It can NOT be static, final or abstract, because a constructor is never inherited or overridden.", "Interview question: kya constructor private, static, final ya abstract ho sakta hai? Private ho sakta hai. Static, final ya abstract NAHI ho sakta, kyunki constructor kabhi inherit ya override nahi hota."]}
 ]},
25: {
 def: ["The this keyword is a reference to the CURRENT object, the one whose method or constructor is running right now. It is used to tell a field apart from a parameter with the same name, to call another constructor of the same class, to pass the current object to another method, and to return the current object for method chaining.",
       "this keyword CURRENT object ka reference hai, yaani us object ka jiska method ya constructor abhi chal raha hai. Isse field aur same naam ke parameter me fark kiya jata hai, usi class ka dusra constructor call kiya jata hai, current object ko dusre method me pass kiya jata hai, aur method chaining ke liye current object return kiya jata hai."],
 secs: [
  {h: ["What is this?", "this kya hai?"],
   p: ["When you call s1.show(), Java secretly passes s1 into the method, and inside the method that object is called this. Every instance method and constructor has it. Most of the time you do not have to write it, because writing marks instead of this.marks already means the field of the current object. You write this when it is needed to remove confusion.",
       "Jab s1.show() call karte ho to Java chupchap s1 ko method me bhejta hai, aur method ke andar us object ko this kehte hain. Har instance method aur constructor ke paas ye hota hai. Zyadatar waqt ise likhne ki zarurat nahi padti, kyunki this.marks ki jagah marks likhna bhi current object ka field hi hota hai. this tab likhte ho jab confusion hatane ke liye zaroori ho."],
   code: `public class Student {
    String name;
    int marks;

    void show() {
        System.out.println(name + " " + marks);                  // short form
        System.out.println(this.name + " " + this.marks);        // same thing, written fully
    }

    void whoAmI() {
        System.out.println(this);                  // prints the current object (like Student@1b6d3586)
    }

    public static void main(String[] args) {
        Student a = new Student();
        a.name = "Gurleen";
        a.marks = 88;

        Student b = new Student();
        b.name = "Mohit";
        b.marks = 40;

        a.show();      // inside show(), this is a  -> Gurleen 88
        b.show();      // inside show(), this is b  -> Mohit 40
    }
}`,
   pts: [["this is available in instance methods, constructors and instance initializer blocks.", "this cannot be reassigned. You cannot write this = something;", "this holds the same reference that the caller used. After a.show(), this == a inside show().", "this is NOT available in static methods, because a static method is not called on any object."],
         ["this instance methods, constructors aur instance initializer blocks me available hai.", "this ko dobara assign nahi kar sakte. this = something; nahi likh sakte.", "this wahi reference rakhta hai jo caller ne use kiya. a.show() ke baad show() ke andar this == a hota hai.", "this static methods me available NAHI hai, kyunki static method kisi object par call nahi hota."]]},
  {h: ["Use 1: separating a field from a parameter (shadowing)", "Use 1: field aur parameter me fark karna (shadowing)"],
   p: ["Good names are the best documentation, so a constructor parameter for the name is naturally called name, and so is the field. But inside the constructor, a parameter with the same name hides the field. This is called shadowing. A plain name = name; then copies the parameter into itself and the field is never set. Writing this.name = name; makes it clear: the left side is the field, the right side is the parameter.",
       "Achhe naam sabse achhi documentation hote hain, isliye naam ke constructor parameter ko natural taur par name kehte hain, aur field ko bhi. Par constructor ke andar same naam ka parameter field ko chhupa deta hai. Ise shadowing kehte hain. Saada name = name; parameter ko usi me copy kar deta hai aur field kabhi set nahi hota. this.name = name; likhne se saaf ho jata hai: left side field hai, right side parameter."],
   code: `public class Person {
    String name;
    int age;

    // BUG: both sides are the parameter, the fields stay null and 0
    Person(String name, int age) {
        name = name;
        age = age;
    }
}

// FIXED
public class Person2 {
    String name;
    int age;

    Person2(String name, int age) {
        this.name = name;        // field = parameter
        this.age = age;
    }

    void setAge(int age) {
        if (age > 0) {
            this.age = age;      // same idea in a setter
        }
    }

    public static void main(String[] args) {
        Person2 p = new Person2("Himakshi", 21);
        System.out.println(p.name + " " + p.age);   // Himakshi 21
    }
}`,
   pts: [["The compiler gives NO error for name = name;, so this bug is silent. The output shows null or 0.", "You may also avoid the clash with different names (String n, int a), but this.name = name is the standard style.", "Local variables inside a method can shadow fields too. this.field always reaches the field.", "IDEs generate constructors and setters in this style for you."],
         ["name = name; par compiler koi error NAHI deta, isliye ye bug chup-chaap rehta hai. Output me null ya 0 dikhta hai.", "Clash se alag naam (String n, int a) rakhkar bhi bach sakte ho, par this.name = name standard style hai.", "Method ke andar ke local variables bhi fields ko shadow kar sakte hain. this.field hamesha field tak pahunchata hai.", "IDEs constructors aur setters isi style me tumhare liye bana deti hain."]]},
  {h: ["Use 2: calling another constructor with this(...)", "Use 2: this(...) se dusra constructor call karna"],
   p: ["Inside a constructor, this(arguments) calls another constructor of the same class. It removes repeated setup code. The rule is strict: this(...) must be the FIRST statement in the constructor, and a constructor cannot call itself directly or in a circle. This idea was shown in the Constructors lesson, here is the full picture of how it flows.",
       "Constructor ke andar this(arguments) usi class ke dusre constructor ko call karta hai. Isse dohraya hua setup code hat jata hai. Rule sakht hai: this(...) constructor ka PEHLA statement hona chahiye, aur constructor khud ko seedhe ya gol ghumkar call nahi kar sakta. Ye idea Constructors lesson me dikhaya tha, yahan poora flow dikhaya gaya hai."],
   code: `public class Rectangle {
    int width, height;
    String label;

    Rectangle(int width, int height, String label) {    // the main constructor
        this.width = width;
        this.height = height;
        this.label = label;
        System.out.println("main constructor");
    }

    Rectangle(int side) {                  // a square
        this(side, side, "square");        // must be the first line
        System.out.println("square constructor");
    }

    Rectangle() {
        this(1);                           // default: a 1 x 1 square
        System.out.println("no-arg constructor");
    }

    public static void main(String[] args) {
        new Rectangle();
        // main constructor
        // square constructor
        // no-arg constructor
        // (the called constructor finishes first, then the code after this(...) runs)
    }
}`},
  {h: ["Use 3: passing the current object", "Use 3: current object ko pass karna"],
   p: ["Sometimes an object must hand itself to another method or object. Writing this passes the current object. A very common case is registering: a Player tells a Team 'here I am'. It is also how an object compares itself with another object of the same class.",
       "Kabhi-kabhi object ko khud ko dusre method ya object ko dena padta hai. this likhne se current object pass hota hai. Bahut common case registering ka hai: Player Team ko batata hai 'ye main hoon'. Isi tarah ek object usi class ke dusre object se apni tulna karta hai."],
   code: `class Team {
    void register(Player p) {
        System.out.println(p.name + " joined the team");
    }
}

class Player {
    String name;
    int age;

    Player(String name, int age) {
        this.name = name;
        this.age = age;
    }

    void join(Team t) {
        t.register(this);                        // hand over myself
    }

    boolean isOlderThan(Player other) {
        return this.age > other.age;             // compare me with the other player
    }

    Player older(Player other) {
        return this.isOlderThan(other) ? this : other;   // return one of the two objects
    }
}

public class Main {
    public static void main(String[] args) {
        Player a = new Player("Shivam", 24);
        Player b = new Player("Gurleen", 21);

        a.join(new Team());                      // Shivam joined the team
        System.out.println(a.isOlderThan(b));    // true
        System.out.println(a.older(b).name);     // Shivam
    }
}`,
   tip: ["Be careful about passing this from inside a constructor. The object is not completely built yet, so the other code may see half-set fields.", "Constructor ke andar se this pass karne me dhyan rakho. Object abhi poora bana nahi hota, isliye dusra code aadhe set hue fields dekh sakta hai."]},
  {h: ["Use 4: returning this for method chaining", "Use 4: method chaining ke liye this return karna"],
   p: ["If a method ends with return this;, the caller gets the same object back and can call the next method on it immediately. This gives the readable chained style you already used with StringBuilder: sb.append(\"a\").append(1).reverse(). It is perfect for building objects step by step and is the basis of the Builder pattern.",
       "Method return this; par khatam ho to caller ko wahi object wapas milta hai aur wo turant us par agla method call kar sakta hai. Isse wo padhne me aasan chained style milta hai jo tum StringBuilder ke saath use kar chuke ho: sb.append(\"a\").append(1).reverse(). Ye object ko step by step banane ke liye perfect hai aur Builder pattern ka aadhar hai."],
   code: `public class Order {
    private String item = "";
    private int quantity = 1;
    private boolean gift;

    Order item(String item) {
        this.item = item;
        return this;                     // give the same object back
    }

    Order quantity(int quantity) {
        this.quantity = quantity;
        return this;
    }

    Order gift(boolean gift) {
        this.gift = gift;
        return this;
    }

    void print() {
        System.out.println(quantity + " x " + item + (gift ? " (gift wrapped)" : ""));
    }

    public static void main(String[] args) {
        new Order().item("Pizza").quantity(2).gift(true).print();   // 2 x Pizza (gift wrapped)

        Order o = new Order();
        o.item("Book").quantity(3);           // you can also use the result later
        o.print();                            // 3 x Book
    }
}`,
   pts: [["Each chained method must return the object type (Order), not void.", "A method can share its name with a field (item). Java tells them apart, but clear names such as setItem make code easier to read.", "Chaining makes long setup code readable on one line, but do not chain so much that debugging gets hard."],
         ["Har chained method ko object type (Order) return karna chahiye, void nahi.", "Method ka naam field (item) jaisa ho sakta hai. Java dono me fark kar leta hai, par setItem jaise saaf naam code padhna aasan banate hain.", "Chaining lambe setup code ko ek line me padhne layak banati hai, par itni chain mat karo ki debugging mushkil ho jaye."]]},
  {h: ["Use 5: this with instance methods, and this versus static", "Use 5: instance methods ke saath this, aur this vs static"],
   p: ["Inside an instance method you can call another instance method of the same object with this.method() or simply method(). Both mean the same. But a static method belongs to the class and runs with no object at all, so there is no this there. Using this in a static method is a compile error, and so is using an instance field directly.",
       "Instance method ke andar usi object ka dusra instance method this.method() ya seedhe method() se call kar sakte ho. Dono ka matlab same hai. Par static method class ka hota hai aur bina kisi object ke chalta hai, isliye wahan this hota hi nahi. Static method me this use karna compile error hai, aur instance field ko seedha use karna bhi."],
   code: `public class Counter {
    int count;                  // instance field
    static int created = 0;     // static field (one copy for the whole class)

    Counter() {
        created++;
    }

    void increment() {
        this.count++;
    }

    void incrementTwice() {
        this.increment();       // same as increment();
        increment();
    }

    static void report() {
        // System.out.println(this.count);   // ERROR: no this in a static method
        // System.out.println(count);        // ERROR: no object, so which count?
        System.out.println("Counters created: " + created);   // static fields are fine
    }

    public static void main(String[] args) {
        Counter c = new Counter();
        c.incrementTwice();
        System.out.println(c.count);          // 2
        new Counter();
        Counter.report();                     // Counters created: 2
    }
}`,
   pts: [["Instance methods and constructors have this. Static methods do not.", "A static method can still use an instance field if you give it an object: static void show(Counter c) { System.out.println(c.count); }", "The compiler message 'non-static variable this cannot be referenced from a static context' means exactly this problem.", "main is static, which is why it needs new before it can use instance methods."],
         ["Instance methods aur constructors ke paas this hota hai. Static methods ke paas nahi.", "Static method object de do to instance field use kar sakta hai: static void show(Counter c) { System.out.println(c.count); }", "Compiler message 'non-static variable this cannot be referenced from a static context' ka matlab yahi problem hai.", "main static hai, isliye instance methods use karne se pehle new chahiye."]]},
  {h: ["this versus super, and common mistakes", "this vs super, aur common mistakes"],
   p: ["this points to the current object and looks first in the current class. super also refers to the current object, but looks in the parent class, so it reaches the parent's fields, methods and constructor. You will learn super in its own lesson after Inheritance. For now remember the pair: this for my own class, super for my parent class.",
       "this current object ko point karta hai aur pehle current class me dhundta hai. super bhi current object ko hi refer karta hai, par parent class me dhundta hai, isliye parent ke fields, methods aur constructor tak pahunchata hai. super ko Inheritance ke baad alag lesson me seekhoge. Abhi bas jodi yaad rakho: apni class ke liye this, parent class ke liye super."],
   pts: [["Mistake: name = name; inside a constructor or setter. The field is never set.", "Mistake: using this inside a static method or inside main.", "Mistake: putting something before this(...) in a constructor. It must be the first statement.", "Mistake: making a constructor call itself with this(...), directly or through another constructor.", "Mistake: forgetting return this; in a chained method, which breaks the chain.", "Mistake: thinking this changes. It always points to the object the method was called on.", "Good habit: use this.field in constructors and setters, and leave it out in other methods when there is no clash.", "Good habit: if a method does not use this or any field, think about making it static."],
         ["Galti: constructor ya setter ke andar name = name;. Field kabhi set nahi hota.", "Galti: static method ya main ke andar this use karna.", "Galti: constructor me this(...) se pehle kuch likh dena. Wo pehla statement hona chahiye.", "Galti: constructor ko this(...) se khud ko call karne dena, seedhe ya kisi dusre constructor ke through.", "Galti: chained method me return this; bhul jana, jisse chain toot jati hai.", "Galti: this ke badalne ki ummeed karna. Ye hamesha us object ko point karta hai jis par method call hua.", "Achhi aadat: constructors aur setters me this.field use karo, aur clash na ho to baaki methods me chhod do.", "Achhi aadat: method this ya kisi field ka use na kare to use static banane ke baare me socho."]],
   code: `public class Quick {
    int x = 10;

    void test(int x) {
        System.out.println(x);        // the parameter
        System.out.println(this.x);   // the field of the current object
    }

    public static void main(String[] args) {
        new Quick().test(99);
        // 99
        // 10
    }
}`,
   tip: ["Interview question: what is the difference between this and super? this is the current object and its own class, super is the parent class part of the same object.", "Interview question: this aur super me kya fark hai? this current object aur uski apni class hai, super usi object ka parent class wala hissa hai."]}
 ]},
26: {
 def: ["Encapsulation means wrapping data (fields) and the methods that work on it together in one class, and hiding the data from the outside. The fields are made private so nobody can change them directly. Outsiders must use public methods (getters and setters), and those methods can check the values first. This protects the data and keeps control with the class.",
       "Encapsulation ka matlab data (fields) aur use chalane wale methods ko ek class me saath lapetna, aur data ko bahar se chhupana. Fields private banaye jate hain taaki koi unhe seedha na badal sake. Bahar walon ko public methods (getters aur setters) use karne padte hain, aur wo methods pehle values check kar sakte hain. Isse data surakshit rehta hai aur control class ke paas rehta hai."],
 secs: [
  {h: ["The idea, with real-life examples", "Idea, real-life examples ke saath"],
   p: ["A medicine capsule hides its powders inside a shell. An ATM does not let you open the cash box: you press buttons, and the machine checks your PIN and balance before giving money. A TV remote lets you change the volume without touching the circuits. In each case the dangerous insides are hidden and you get a few safe controls. Encapsulation does exactly this for your objects.",
       "Dawai ka capsule apne powders ko shell ke andar chhupata hai. ATM tumhe cash box kholne nahi deta: tum buttons dabate ho, aur machine paisa dene se pehle PIN aur balance check karti hai. TV remote se circuits ko chhue bina volume badal sakte ho. Har example me khatarnak andar ki cheezein chhupi hain aur tumhe kuch safe controls milte hain. Encapsulation tumhare objects ke liye bilkul yahi karta hai."],
   pts: [["Data hiding: fields are private, so outside code cannot reach them directly.", "Controlled access: the class offers public methods, and those methods decide what is allowed.", "One place for the rules: if a balance must never be negative, that check lives in ONE method, not in a hundred places.", "The inside can change later without breaking the code that uses the class, as long as the public methods stay the same."],
         ["Data hiding: fields private hote hain, isliye bahar ka code unhe seedha nahi chhu sakta.", "Controlled access: class public methods deti hai, aur wo methods tay karte hain ki kya allowed hai.", "Rules ke liye ek jagah: balance negative nahi hona chahiye to wo check EK method me rehta hai, sau jagah nahi.", "Andar ka hissa baad me badal sakta hai aur use karne wala code nahi tootta, bas public methods wahi rehne chahiye."]],
   code: `// WITHOUT encapsulation: anybody can break the object
class BadAccount {
    double balance;
}

BadAccount a = new BadAccount();
a.balance = -5000;          // nonsense, and nothing stops it
a.balance = 1_000_000_000;  // free money!`},
  {h: ["Private fields with public getters and setters", "Private fields aur public getters aur setters"],
   p: ["The recipe has two steps. Step 1: declare the fields private. Step 2: add public methods to read them (getters, named getX) and to change them (setters, named setX). For a boolean field the getter is usually named isX. This pattern is so common that it has a name, the JavaBean convention, and every IDE can generate it for you.",
       "Recipe do steps ki hai. Step 1: fields ko private declare karo. Step 2: unhe padhne (getters, naam getX) aur badalne (setters, naam setX) ke liye public methods jodo. boolean field ke liye getter aam taur par isX kehlata hai. Ye pattern itna common hai ki iska naam hai, JavaBean convention, aur har IDE tumhare liye ise bana sakti hai."],
   code: `public class Student {
    private String name;          // private: only this class can touch it
    private int marks;
    private boolean passed;

    // getters
    public String getName() { return name; }
    public int getMarks() { return marks; }
    public boolean isPassed() { return passed; }     // boolean getters use "is"

    // setters
    public void setName(String name) { this.name = name; }
    public void setMarks(int marks) {
        this.marks = marks;
        this.passed = marks >= 40;                  // the class keeps its own data consistent
    }
}

public class Main {
    public static void main(String[] args) {
        Student s = new Student();
        s.setName("Gurleen");
        s.setMarks(88);
        System.out.println(s.getName() + " " + s.getMarks() + " " + s.isPassed());  // Gurleen 88 true

        // s.marks = 20;          // ERROR: marks has private access in Student
    }
}`,
   pts: [["Getter: no parameters, returns the field. Setter: one parameter, returns void.", "Naming: getName() and setName(), getMarks() and setMarks(), isPassed() for boolean.", "Private means visible only inside the same class. Other classes, even in the same folder, cannot use it directly.", "A getter and setter that only read and write the field without any rule are still useful, because you can add rules later without changing any calling code.", "Access modifiers (private, public, protected) have their own lesson later in this phase."],
         ["Getter: koi parameter nahi, field return karta hai. Setter: ek parameter, void return karta hai.", "Naming: getName() aur setName(), getMarks() aur setMarks(), boolean ke liye isPassed().", "Private ka matlab sirf usi class ke andar dikhta hai. Dusri classes, same folder me bhi, use seedha use nahi kar sakti.", "Jo getter aur setter bina kisi rule ke sirf field padhte aur likhte hain wo bhi kaam ke hain, kyunki baad me rules jod sakte ho aur calling code ko badalna nahi padta.", "Access modifiers (private, public, protected) ka is phase me aage alag lesson hai."]]},
  {h: ["Validation inside setters and constructors", "Setters aur constructors ke andar validation"],
   p: ["The real power of encapsulation is checking the data before accepting it. A setter can reject an invalid value, keep the old value, or fix the value. Put the same checks in the constructor, so that an object is valid from the very first moment, and never repeat the checking code: make the constructor call the setter.",
       "Encapsulation ki asli taqat data ko accept karne se pehle check karna hai. Setter invalid value ko reject kar sakta hai, purani value rakh sakta hai, ya value ko theek kar sakta hai. Wahi checks constructor me bhi lagao taaki object pehle hi pal se valid ho, aur checking code kabhi dohrao nahi: constructor se setter ko call karwa do."],
   code: `public class Person {
    private String name;
    private int age;

    public Person(String name, int age) {
        setName(name);            // reuse the validation, do not repeat it
        setAge(age);
    }

    public String getName() { return name; }
    public int getAge() { return age; }

    public void setName(String name) {
        if (name == null || name.isBlank()) {
            this.name = "Unknown";                // fix the bad value
        } else {
            this.name = name.trim();
        }
    }

    public void setAge(int age) {
        if (age < 0 || age > 120) {
            System.out.println("Invalid age " + age + ", keeping " + this.age);
            return;                               // reject: keep the old value
        }
        this.age = age;
    }

    public static void main(String[] args) {
        Person p = new Person("  Himakshi ", 21);
        System.out.println(p.getName() + " " + p.getAge());   // Himakshi 21
        p.setAge(-4);                                          // Invalid age -4, keeping 21
        p.setAge(22);
        System.out.println(p.getAge());                        // 22
        System.out.println(new Person(null, 500).getName());   // Unknown
    }
}`,
   pts: [["Three ways to react to bad data: reject and keep the old value, replace it with a safe default, or report an error. Java's exceptions (Phase 4) are the professional way to report an error.", "Do not call overridable methods from a constructor in real projects. Making the setters final or private avoids surprises.", "Validation belongs in the class that owns the data, not in the code that uses the class."],
         ["Galat data par react karne ke teen tareeke: reject karke purani value rakhna, safe default se badalna, ya error report karna. Java ke exceptions (Phase 4) error report karne ka professional tareeka hain.", "Real projects me constructor se overridable methods call mat karo. Setters ko final ya private banane se surprises bachte hain.", "Validation us class me hoti hai jo data ki maalik hai, use use karne wale code me nahi."]]},
  {h: ["Read-only, write-only and immutable classes", "Read-only, write-only aur immutable classes"],
   p: ["You decide what the outside world can do by choosing which methods to provide. A getter without a setter makes a field read-only. A setter without a getter makes it write-only, which suits a password. If you make ALL fields private and final, give no setters and set everything in the constructor, the class is immutable: once built, an object can never change. String is the most famous immutable class. Immutable objects are safe to share and cannot be corrupted.",
       "Bahar wali duniya kya kar sakti hai, ye tum tay karte ho ki kaun se methods doge. Setter ke bina getter field ko read-only bana deta hai. Getter ke bina setter use write-only banata hai, jo password ke liye theek hai. SAARE fields private aur final banao, koi setter mat do aur sab kuch constructor me set karo, to class immutable ban jati hai: ek baar bana object kabhi badal nahi sakta. String sabse mashhoor immutable class hai. Immutable objects share karne me safe hote hain aur kharab nahi ho sakte."],
   code: `// Read-only id, write-only password
public class Login {
    private final int id;              // final + no setter: read-only
    private String password;           // no getter: write-only

    public Login(int id) { this.id = id; }
    public int getId() { return id; }
    public void setPassword(String p) { this.password = p; }
    public boolean check(String attempt) {            // the outside can only test it
        return password != null && password.equals(attempt);
    }
}

// An immutable class
public final class Point {             // final class: nobody can extend and break it
    private final int x;
    private final int y;

    public Point(int x, int y) {
        this.x = x;
        this.y = y;
    }

    public int getX() { return x; }
    public int getY() { return y; }

    public Point moveBy(int dx, int dy) {       // returns a NEW object instead of changing this one
        return new Point(x + dx, y + dy);
    }

    public static void main(String[] args) {
        Point a = new Point(1, 2);
        Point b = a.moveBy(5, 5);
        System.out.println(a.getX() + "," + a.getY());   // 1,2  (a never changes)
        System.out.println(b.getX() + "," + b.getY());   // 6,7
    }
}`,
   pts: [["Rules of an immutable class: final class, private final fields, no setters, set everything in the constructor, and copy any mutable parts (arrays, lists) when you store or return them.", "Immutable objects are automatically thread-safe, so many threads can share them.", "The cost: every change makes a new object. For heavy changes use a mutable class such as StringBuilder."],
         ["Immutable class ke rules: final class, private final fields, koi setter nahi, sab kuch constructor me set karo, aur koi bhi mutable hissa (arrays, lists) store ya return karte waqt copy karo.", "Immutable objects apne aap thread-safe hote hain, isliye kai threads unhe share kar sakte hain.", "Keemat: har badlav naya object banata hai. Bhaari badlav ke liye StringBuilder jaisi mutable class use karo."]]},
  {h: ["The hidden leak: arrays and objects inside a class", "Chhupa hua leak: class ke andar ke arrays aur objects"],
   p: ["Making an array field private is not enough. If the getter returns the array itself, the outside gets the real array and can change it freely, which breaks encapsulation. The same happens in the constructor when you store the array you were given. The fix is a defensive copy: copy the array when you store it, and return a copy when someone asks for it.",
       "Array field ko private banana kaafi nahi hai. Getter array ko hi return kare to bahar walon ko asli array mil jata hai aur wo use khule me badal sakte hain, jisse encapsulation toot jata hai. Wahi constructor me hota hai jab diya gaya array tum seedha store kar lete ho. Fix defensive copy hai: store karte waqt array copy karo, aur koi maange to copy return karo."],
   code: `import java.util.Arrays;

public class LeakyMarks {
    private final int[] data;
    public LeakyMarks(int[] data) { this.data = data; }       // stores the caller's array
    public int[] getData() { return data; }                   // hands out the real array
}

public class SafeMarks {
    private final int[] data;

    public SafeMarks(int[] data) {
        this.data = data.clone();              // copy IN
    }

    public int[] getData() {
        return data.clone();                   // copy OUT
    }

    public int get(int i) { return data[i]; }
    public int size() { return data.length; }

    public static void main(String[] args) {
        int[] mine = {70, 80, 90};

        LeakyMarks bad = new LeakyMarks(mine);
        mine[0] = 0;                                      // outside changes the inside!
        bad.getData()[1] = 0;                             // and again through the getter
        System.out.println(Arrays.toString(bad.getData()));   // [0, 0, 90]

        int[] other = {70, 80, 90};
        SafeMarks good = new SafeMarks(other);
        other[0] = 0;
        good.getData()[1] = 0;
        System.out.println(Arrays.toString(good.getData()));  // [70, 80, 90] (protected)
    }
}`,
   tip: ["Strings and primitive values are safe to return directly. Arrays, ArrayLists, Dates and your own mutable objects need a copy, or an unmodifiable view.", "Strings aur primitive values seedha return karna safe hai. Arrays, ArrayLists, Dates aur tumhare apne mutable objects ko copy ya unmodifiable view chahiye."]},
  {h: ["A complete example: a bank account", "Ek poora example: bank account"],
   p: ["Here every idea comes together. The balance can only change through deposit() and withdraw(), and both refuse bad requests. The owner and the account number are fixed once the account is created. There is no setBalance(), because letting outsiders set the balance directly would defeat the whole point.",
       "Yahan saare ideas ek saath aate hain. Balance sirf deposit() aur withdraw() se badal sakta hai, aur dono galat requests ko mana kar dete hain. Owner aur account number account banne par tay ho jate hain. setBalance() nahi hai, kyunki bahar walon ko balance seedha set karne dena poore maqsad ko hi khatam kar deta."],
   code: `public class BankAccount {
    private static int nextNumber = 1001;

    private final int number;
    private final String owner;
    private double balance;

    public BankAccount(String owner, double opening) {
        this.number = nextNumber++;
        this.owner = owner;
        this.balance = opening > 0 ? opening : 0;
    }

    public int getNumber() { return number; }
    public String getOwner() { return owner; }
    public double getBalance() { return balance; }

    public boolean deposit(double amount) {
        if (amount <= 0) {
            System.out.println("Deposit must be positive");
            return false;
        }
        balance += amount;
        return true;
    }

    public boolean withdraw(double amount) {
        if (amount <= 0) {
            System.out.println("Withdrawal must be positive");
            return false;
        }
        if (amount > balance) {
            System.out.println("Not enough balance");
            return false;
        }
        balance -= amount;
        return true;
    }

    @Override
    public String toString() {
        return "#" + number + " " + owner + ": Rs " + balance;
    }

    public static void main(String[] args) {
        BankAccount acc = new BankAccount("Mohit", 1000);
        acc.deposit(500);
        acc.withdraw(2000);                 // Not enough balance
        acc.withdraw(300);
        acc.deposit(-50);                   // Deposit must be positive
        System.out.println(acc);            // #1001 Mohit: Rs 1200.0

        // acc.balance = 1_000_000;         // ERROR: balance has private access
    }
}`},
  {h: ["Benefits, naming rules and common mistakes", "Fayde, naming rules aur common mistakes"],
   pts: [["Benefit 1, security of data: nobody can put the object into an invalid state.", "Benefit 2, flexibility: you can change how data is stored (say, from rupees to paise) without touching the code that uses the class.", "Benefit 3, easier maintenance: rules and bug fixes live in one place.", "Benefit 4, reusability and testing: a class with a clear public face is easy to reuse and to test.", "Benefit 5, control: you decide which parts are read-only, write-only or hidden.", "Mistake: making fields public 'to save time'. It saves minutes and costs hours later.", "Mistake: generating a setter for every field automatically, including ones that should never change (id, account number).", "Mistake: a getter that returns an internal array or list directly.", "Mistake: a setter with no checks when the field has rules.", "Mistake: wrong names. Use getName(), not getname() or fetchName(), and isActive() for boolean.", "Good habit: start with everything private and open only what is needed.", "Good habit: only provide setters for fields that really should change."],
         ["Fayda 1, data ki security: koi object ko invalid state me nahi daal sakta.", "Fayda 2, flexibility: data kaise store hota hai (jaise rupees se paise me) ye badal sakte ho aur class use karne wale code ko chhuna nahi padta.", "Fayda 3, aasan maintenance: rules aur bug fixes ek jagah rehte hain.", "Fayda 4, reusability aur testing: saaf public face wali class reuse aur test karna aasan hai.", "Fayda 5, control: tum tay karte ho ki kaun sa hissa read-only, write-only ya chhupa hua hai.", "Galti: 'time bachane ke liye' fields ko public banana. Isse minutes bachte hain aur baad me ghante lagte hain.", "Galti: har field ke liye automatic setter banana, unke liye bhi jo kabhi nahi badalne chahiye (id, account number).", "Galti: getter jo andar ka array ya list seedha return kare.", "Galti: jis field ke rules hain uske setter me koi check na hona.", "Galti: galat naam. getName() use karo, getname() ya fetchName() nahi, aur boolean ke liye isActive().", "Achhi aadat: sab kuch private se shuru karo aur sirf zaroorat ki cheez kholo.", "Achhi aadat: setters sirf un fields ke do jo sach me badalne chahiye."]],
   tip: ["Interview answer: encapsulation is binding data and methods into one unit and hiding the data using private fields with public getters and setters. It is data hiding plus controlled access.", "Interview answer: encapsulation data aur methods ko ek unit me bandhna aur data ko private fields aur public getters aur setters se chhupana hai. Ye data hiding plus controlled access hai."]}
 ]}
});

Object.assign(TOPICS, {
27: {
 def: ["Inheritance is the OOP feature that lets a new class (the child, or subclass) reuse the fields and methods of an existing class (the parent, or superclass) using the extends keyword. The child gets everything the parent offers and can add its own things or change inherited behaviour. It models an IS-A relationship: a Dog IS an Animal.",
       "Inheritance OOP ka wo feature hai jisme nayi class (child ya subclass) maujooda class (parent ya superclass) ke fields aur methods ko extends keyword se reuse karti hai. Child ko wo sab milta hai jo parent deta hai, aur wo apni cheezein jod sakta hai ya inherit kiye behaviour ko badal sakta hai. Ye IS-A relationship dikhata hai: Dog ek Animal HAI."],
 secs: [
  {h: ["Why inheritance? The IS-A idea", "Inheritance kyun? IS-A ka idea"],
   p: ["Suppose you build a pet app with Dog, Cat and Bird classes. All of them have a name and an age, and all can eat and sleep. Writing this three times is wasteful, and fixing a bug means fixing it three times. With inheritance you write the common part once in an Animal class, and every specific animal extends it and adds only what is special about it.",
       "Maan lo tum pet app bana rahe ho jisme Dog, Cat aur Bird classes hain. Sabka naam aur umar hoti hai, aur sab khana aur sona kar sakte hain. Ye teen baar likhna bekar hai, aur bug ho to teen jagah theek karna padta hai. Inheritance me common hissa ek Animal class me ek baar likhte ho, aur har khaas animal use extend karke sirf apni khaasiyat jodta hai."],
   pts: [["Code reuse: common code lives in the parent and is written only once.", "Organisation: general things go up in the hierarchy, specific things go down.", "Polymorphism: a parent reference can hold any child object (you will use this in the Polymorphism lesson).", "Test for inheritance: say it aloud. 'A Dog IS an Animal' sounds right, so inheritance fits. 'A Car IS an Engine' sounds wrong, so use HAS-A instead (covered below).", "Terms: parent = superclass = base class. Child = subclass = derived class."],
         ["Code reuse: common code parent me hota hai aur sirf ek baar likha jata hai.", "Organisation: general cheezein hierarchy me upar aur specific cheezein neeche jati hain.", "Polymorphism: parent reference kisi bhi child object ko pakad sakta hai (Polymorphism lesson me ise use karoge).", "Inheritance ka test: bolkar dekho. 'Dog IS an Animal' sahi lagta hai, to inheritance fit hai. 'Car IS an Engine' galat lagta hai, to HAS-A use karo (neeche samjhaya hai).", "Terms: parent = superclass = base class. Child = subclass = derived class."]]},
  {h: ["The extends keyword", "extends keyword"],
   p: ["You write class Child extends Parent. The child object automatically has every non-private field and method of the parent, plus its own. You can call the parent's methods on a child object as if they were written in the child.",
       "Tum class Child extends Parent likhte ho. Child object ke paas apne fields aur methods ke saath parent ke har non-private field aur method apne aap hote hain. Parent ke methods ko child object par aise call kar sakte ho jaise wo child me hi likhe ho."],
   code: `class Animal {
    String name;
    int age;

    void eat() {
        System.out.println(name + " is eating");
    }

    void sleep() {
        System.out.println(name + " is sleeping");
    }
}

class Dog extends Animal {          // Dog gets name, age, eat() and sleep()
    void bark() {                   // and adds something of its own
        System.out.println(name + " says Woof");
    }
}

class Cat extends Animal {
    void meow() {
        System.out.println(name + " says Meow");
    }
}

public class Main {
    public static void main(String[] args) {
        Dog d = new Dog();
        d.name = "Bruno";           // inherited field
        d.eat();                    // inherited method:  Bruno is eating
        d.bark();                   // its own method:    Bruno says Woof

        Cat c = new Cat();
        c.name = "Mia";
        c.sleep();                  // Mia is sleeping
        // c.bark();                // ERROR: Cat has no bark()
    }
}`,
   pts: [["Inheritance goes one way. A Dog is an Animal, but an Animal is not necessarily a Dog, so a parent cannot use the child's extra methods.", "A class can extend only ONE class (no multiple inheritance of classes).", "If you do not write extends, your class automatically extends Object."],
         ["Inheritance ek hi taraf chalti hai. Dog ek Animal hai, par Animal zaroori nahi ki Dog ho, isliye parent child ke extra methods use nahi kar sakta.", "Ek class sirf EK class ko extend kar sakti hai (classes ki multiple inheritance nahi).", "extends na likho to tumhari class apne aap Object ko extend karti hai."]]},
  {h: ["What is inherited and what is not", "Kya inherit hota hai aur kya nahi"],
   p: ["A child inherits public, protected and (if in the same package) default members. It does NOT directly access the parent's private members, although those fields still exist inside every child object. The child reaches them through the parent's public or protected methods. Constructors are never inherited. Static members belong to the class and can be called through the child's name, but they are not overridden.",
       "Child public, protected aur (same package ho to) default members inherit karta hai. Wo parent ke private members ko seedha access NAHI kar sakta, halanki wo fields har child object ke andar maujood rehte hain. Child unhe parent ke public ya protected methods ke through use karta hai. Constructors kabhi inherit nahi hote. Static members class ke hote hain aur child ke naam se call ho sakte hain, par override nahi hote."],
   code: `class Account {
    private double balance;             // private: not directly visible in children
    protected String owner;             // protected: visible in children
    public String bank = "CodeBank";    // public: visible everywhere

    public Account(String owner, double balance) {
        this.owner = owner;
        this.balance = balance;
    }

    public double getBalance() { return balance; }
    protected void setBalance(double b) { balance = b; }
}

class SavingsAccount extends Account {
    private double rate = 0.04;

    public SavingsAccount(String owner, double balance) {
        super(owner, balance);          // explained fully in the super lesson
    }

    void addInterest() {
        // balance += 5;                           // ERROR: balance is private in Account
        double interest = getBalance() * rate;     // use the public getter instead
        setBalance(getBalance() + interest);       // and the protected setter
        System.out.println(owner + " now has " + getBalance());   // owner is protected: fine
    }

    public static void main(String[] args) {
        SavingsAccount s = new SavingsAccount("Himakshi", 1000);
        s.addInterest();                // Himakshi now has 1040.0
        System.out.println(s.bank);     // CodeBank
    }
}`,
   pts: [["private: stays inside the parent class only.", "default (no keyword): inherited only by children in the SAME package.", "protected: inherited by every child, even in another package.", "public: inherited by everyone.", "Constructors, static initializer blocks and instance initializer blocks are not inherited.", "To protect data, keep fields private and give children protected or public methods to use (this is encapsulation working together with inheritance)."],
         ["private: sirf parent class ke andar rehta hai.", "default (koi keyword nahi): sirf SAME package ke children inherit karte hain.", "protected: har child inherit karta hai, dusre package me bhi.", "public: sab inherit karte hain.", "Constructors, static initializer blocks aur instance initializer blocks inherit nahi hote.", "Data bachane ke liye fields private rakho aur children ke liye protected ya public methods do (ye encapsulation aur inheritance ka saath kaam karna hai)."]]},
  {h: ["Types of inheritance", "Inheritance ke types"],
   p: ["The shapes of class hierarchies have names. Single: one child of one parent. Multilevel: a chain, where a child is itself a parent. Hierarchical: one parent with many children. Java does NOT allow multiple inheritance with classes (one child with two parents), because of the diamond problem: if both parents have a method with the same name, which one should the child inherit? Java solves this with interfaces, which a class can implement many of (Interfaces lesson).",
       "Class hierarchies ki shapes ke naam hote hain. Single: ek parent ka ek child. Multilevel: ek chain, jisme child khud bhi parent hota hai. Hierarchical: ek parent aur kai children. Java classes ke saath multiple inheritance (ek child, do parents) allow NAHI karta, kyunki diamond problem hoti hai: dono parents me same naam ka method ho to child kaun sa inherit kare? Java ise interfaces se hal karta hai, jo ek class kai implement kar sakti hai (Interfaces lesson)."],
   code: `// Single: Vehicle -> Car
class Vehicle {
    int speed;
    void move() { System.out.println("Moving at " + speed); }
}
class Car extends Vehicle {
    int doors = 4;
}

// Multilevel: Vehicle -> Car -> ElectricCar
class ElectricCar extends Car {
    int battery = 100;
    void charge() { System.out.println("Charging..."); }
}

// Hierarchical: Animal -> Dog, Animal -> Cat (one parent, many children)
class Animal { void breathe() { System.out.println("Breathing"); } }
class Dog extends Animal { }
class Cat extends Animal { }

// NOT allowed in Java: multiple inheritance of classes
// class Hybrid extends Car, Animal { }      // compile error

public class Main {
    public static void main(String[] args) {
        ElectricCar e = new ElectricCar();
        e.speed = 60;
        e.move();             // from Vehicle, two levels up: Moving at 60
        System.out.println(e.doors + " " + e.battery);   // 4 100
        e.charge();
    }
}`,
   pts: [["Single: A to B. Multilevel: A to B to C. Hierarchical: A to B and A to C.", "Multiple (not allowed for classes): C extends A and B.", "Hybrid: a mix of the above. In Java it works only through interfaces.", "A multilevel child gets the members of ALL its ancestors, up to the top."],
         ["Single: A se B. Multilevel: A se B se C. Hierarchical: A se B aur A se C.", "Multiple (classes ke liye allowed nahi): C extends A aur B.", "Hybrid: upar wale ka mel. Java me ye sirf interfaces ke through chalta hai.", "Multilevel child ko apne SAARE ancestors ke members milte hain, sabse upar tak."]]},
  {h: ["The Object class: the parent of everything", "Object class: sabka parent"],
   p: ["Every class in Java, even one with no extends, secretly extends java.lang.Object. That is why every object has methods like toString(), equals(Object), hashCode() and getClass(), even though you never wrote them. You often override these methods to give them better behaviour (in the next lessons). Object is the root of the whole class tree.",
       "Java ki har class, jisme extends na ho tab bhi, chupchap java.lang.Object ko extend karti hai. Isi wajah se har object ke paas toString(), equals(Object), hashCode() aur getClass() jaise methods hote hain, chahe tumne unhe kabhi likha na ho. Aksar in methods ko behtar behaviour ke liye override karte hain (agle lessons me). Object poore class tree ki jad hai."],
   code: `class Student { }                         // no extends: same as extends Object

public class Main {
    public static void main(String[] args) {
        Student s = new Student();
        System.out.println(s.toString());       // Student@1b6d3586  (from Object)
        System.out.println(s.getClass().getName());   // Student
        System.out.println(s.equals(s));        // true
        System.out.println(s.hashCode());       // some number

        Object o = s;                           // an Object reference can hold anything
        Object text = "hello";
        Object number = 42;                     // autoboxing

        System.out.println(s instanceof Object);    // true: everything IS an Object
        System.out.println(s.getClass().getSuperclass().getName());   // java.lang.Object
    }
}`},
  {h: ["Constructors and inheritance: parent first", "Constructors aur inheritance: pehle parent"],
   p: ["When you create a child object, the parent part must be built first, because the child depends on it. So Java always runs the parent constructor before the child constructor. If you do not call a parent constructor yourself, Java quietly inserts super() as the first line of your constructor. The super keyword gets its own lesson, so here just watch the order.",
       "Child object banate ho to pehle parent wala hissa banna chahiye, kyunki child uspar nirbhar hai. Isliye Java hamesha child constructor se pehle parent constructor chalata hai. Tum khud parent constructor call na karo to Java tumhare constructor ki pehli line me chupchap super() jod deta hai. super keyword ka alag lesson hai, yahan bas order dekho."],
   code: `class Grandparent {
    Grandparent() { System.out.println("Grandparent constructor"); }
}
class Parent extends Grandparent {
    Parent() { System.out.println("Parent constructor"); }
}
class Child extends Parent {
    Child() { System.out.println("Child constructor"); }
}

public class Main {
    public static void main(String[] args) {
        new Child();
        // Grandparent constructor
        // Parent constructor
        // Child constructor
    }
}`,
   pts: [["Construction goes top-down (oldest ancestor first). Destruction by the garbage collector is not something you control.", "If the parent has NO no-argument constructor, the child must call a parent constructor that exists, using super(arguments).", "The error 'constructor X in class X cannot be applied to given types' in a child usually means the parent has no matching constructor."],
         ["Construction upar se neeche chalta hai (sabse purana ancestor pehle). Garbage collector ka destruction tumhare control me nahi hota.", "Parent ka koi no-argument constructor NAHI ho to child ko super(arguments) se maujood parent constructor call karna padta hai.", "Child me 'constructor X in class X cannot be applied to given types' error ka matlab aam taur par parent me matching constructor nahi hai."]]},
  {h: ["Upcasting, downcasting and instanceof", "Upcasting, downcasting aur instanceof"],
   p: ["Because a Dog IS an Animal, you can store a Dog object in an Animal variable. This is upcasting, it is always safe and needs no cast. Through the Animal variable you can use only what Animal has. Going back down (downcasting) needs an explicit cast and can fail with ClassCastException if the object is not really that type. Check with instanceof first.",
       "Kyunki Dog ek Animal HAI, Dog object ko Animal variable me rakh sakte ho. Ye upcasting hai, hamesha safe hai aur cast nahi chahiye. Animal variable se sirf wahi use kar sakte ho jo Animal ke paas hai. Wapas neeche jana (downcasting) ke liye explicit cast chahiye aur object sach me wo type na ho to ClassCastException se fail ho sakta hai. Pehle instanceof se check karo."],
   code: `class Animal { void eat() { System.out.println("eating"); } }
class Dog extends Animal { void bark() { System.out.println("Woof"); } }
class Cat extends Animal { void meow() { System.out.println("Meow"); } }

public class Main {
    public static void main(String[] args) {
        Animal a = new Dog();          // upcasting: safe, automatic
        a.eat();                       // fine: Animal has eat()
        // a.bark();                   // ERROR: the Animal type does not know bark()

        Dog d = (Dog) a;               // downcasting: explicit cast
        d.bark();                      // Woof

        Animal b = new Cat();
        // Dog wrong = (Dog) b;        // compiles, but ClassCastException when it runs

        if (b instanceof Dog) {
            System.out.println("b is a Dog");
        } else if (b instanceof Cat c) {      // Java 16+: test and cast in one step
            c.meow();                         // Meow
        }

        Animal[] zoo = { new Dog(), new Cat(), new Dog() };    // one array, many kinds
        for (Animal x : zoo) x.eat();
    }
}`},
  {h: ["IS-A versus HAS-A, final classes and common mistakes", "IS-A vs HAS-A, final classes aur common mistakes"],
   p: ["Inheritance is IS-A. When one object merely CONTAINS another, use HAS-A, which is called composition: put an object of the other class in a field. A Car HAS an Engine, it is not an Engine. Beginners overuse inheritance; many experts say to prefer composition. A class marked final cannot be extended at all (String is final), and a final method cannot be overridden.",
       "Inheritance IS-A hai. Jab ek object dusre ko sirf RAKHTA hai, to HAS-A use karo, jise composition kehte hain: dusri class ka object field me rakho. Car ke paas Engine HAI, wo Engine nahi hai. Beginners inheritance ka zyada use karte hain; kai experts kehte hain composition ko prefer karo. final class ko extend hi nahi kar sakte (String final hai), aur final method override nahi ho sakta."],
   code: `// HAS-A (composition): a Car contains an Engine
class Engine {
    void start() { System.out.println("Engine started"); }
}

class Car {
    private final Engine engine = new Engine();    // a field, NOT extends
    void drive() {
        engine.start();
        System.out.println("Car is moving");
    }
}

// final class: nobody can extend it
final class Constants { static final double PI = 3.14159; }
// class MyConstants extends Constants { }     // ERROR: cannot inherit from final

public class Main {
    public static void main(String[] args) {
        new Car().drive();
    }
}`,
   pts: [["Mistake: using inheritance only to reuse a method. If the IS-A sentence sounds wrong, use composition.", "Mistake: trying to extend two classes. Use one class and interfaces.", "Mistake: expecting the child to use the parent's private fields directly. Use getters or protected.", "Mistake: forgetting that the child needs a matching parent constructor.", "Mistake: very deep hierarchies (five or more levels) are hard to read. Keep them shallow.", "Mistake: calling a child's own method through a parent reference without downcasting.", "Good habit: put what is common in the parent and what is special in the child.", "Good habit: mark a class final when it was not designed to be extended."],
         ["Galti: sirf ek method reuse karne ke liye inheritance use karna. IS-A wala vakya galat lage to composition use karo.", "Galti: do classes extend karne ki koshish. Ek class aur interfaces use karo.", "Galti: child se parent ke private fields seedha use karne ki ummeed. Getters ya protected use karo.", "Galti: ye bhul jana ki child ko matching parent constructor chahiye.", "Galti: bahut gehri hierarchies (paanch ya zyada levels) padhna mushkil hota hai. Unhe chhoti rakho.", "Galti: parent reference se child ka apna method downcast kiye bina call karna.", "Achhi aadat: jo common hai wo parent me aur jo khaas hai wo child me rakho.", "Achhi aadat: class ko extend karne ke liye design na kiya ho to use final mark karo."]],
   tip: ["Interview question: why does Java not support multiple inheritance of classes? Because of the diamond problem and ambiguity. Interfaces give the useful part of it safely.", "Interview question: Java classes ki multiple inheritance kyun support nahi karta? Diamond problem aur ambiguity ki wajah se. Interfaces uska kaam ka hissa safely dete hain."]}
 ]},
28: {
 def: ["The super keyword refers to the PARENT-class part of the current object. It has three uses: super.field reaches a parent's field that a child field is hiding, super.method() calls the parent's version of a method that the child has overridden, and super(...) calls a parent constructor from the child's constructor.",
       "super keyword current object ke PARENT-class wale hisse ko refer karta hai. Iske teen use hain: super.field us parent field tak pahunchta hai jo child ke field ne chhupa diya ho, super.method() parent ka wo version call karta hai jo child ne override kiya ho, aur super(...) child ke constructor se parent constructor call karta hai."],
 secs: [
  {h: ["What super means", "super ka matlab"],
   p: ["Inside a child class, this means the current object seen as the child, and super means the same object seen as its parent. There is only ONE object in memory. super does not create a second object. It just tells Java to look for a name in the parent class instead of the child class. This matters when the child has something with the same name as the parent.",
       "Child class ke andar this ka matlab current object ko child ki tarah dekhna hai, aur super ka matlab wahi object parent ki tarah dekhna. Memory me sirf EK object hota hai. super dusra object nahi banata. Ye bas Java ko batata hai ki naam ko child class ki jagah parent class me dhundho. Ye tab zaroori hota hai jab child ke paas parent jaisa hi naam ki koi cheez ho."],
   pts: [["super.something looks one level UP, in the direct parent class.", "To reach a grandparent, the parent must offer it. You cannot write super.super.", "super works only inside instance methods and constructors. There is no super in a static method (just like this).", "super does NOT mean 'create the parent object'. The parent part is built by the parent constructor, which super(...) calls."],
         ["super.something ek level UPAR, seedhe parent class me dhundta hai.", "Grandparent tak pahunchne ke liye parent ko wo cheez deni padti hai. super.super likh nahi sakte.", "super sirf instance methods aur constructors ke andar chalta hai. Static method me super nahi hota (this ki tarah).", "super ka matlab 'parent object banao' NAHI hai. Parent wala hissa parent constructor banata hai, jise super(...) call karta hai."]]},
  {h: ["Use 1: super.field to reach a hidden parent field", "Use 1: super.field se chhupe hue parent field tak"],
   p: ["If a child declares a field with the same name as a parent's field, the child's field hides the parent's (field hiding). Both exist in the object. Plain name and this.name give the child's one, and super.name gives the parent's. In real code this is better avoided, but you must understand it.",
       "Child parent ke field jaisa hi naam ka field declare kare to child ka field parent ke field ko chhupa deta hai (field hiding). Dono object me maujood rehte hain. Seedha naam aur this.name child wala dete hain, aur super.name parent wala deta hai. Real code me isse bachna behtar hai, par samajhna zaroori hai."],
   code: `class Parent {
    String name = "Parent's name";
    int value = 10;
}

class Child extends Parent {
    String name = "Child's name";          // hides Parent's name

    void show() {
        String name = "local name";        // hides the field in this method
        System.out.println(name);          // local name
        System.out.println(this.name);     // Child's name
        System.out.println(super.name);    // Parent's name
        System.out.println(value);         // 10: inherited, no clash, no super needed
    }

    public static void main(String[] args) {
        new Child().show();
    }
}`},
  {h: ["Use 2: super.method() to extend, not replace", "Use 2: super.method() se replace nahi, extend karna"],
   p: ["When a child overrides a method, it replaces the parent's version for child objects. Often you do not want to throw the parent's work away, you want to add something. Calling super.method() runs the parent's version first (or last, or in the middle), so the child adds to the behaviour instead of rewriting it. If you forget the super call, the parent's code is skipped.",
       "Child method override kare to child objects ke liye parent ka version badal jata hai. Aksar tum parent ka kaam fenkna nahi chahte, kuch jodna chahte ho. super.method() parent ka version chalata hai (pehle, baad me ya beech me), jisse child behaviour ko dobara likhne ki jagah usme jodta hai. super call bhul gaye to parent ka code skip ho jata hai."],
   code: `class Employee {
    String name;
    double salary;

    Employee(String name, double salary) {
        this.name = name;
        this.salary = salary;
    }

    void showDetails() {
        System.out.println("Name: " + name);
        System.out.println("Salary: " + salary);
    }

    double yearlyPay() { return salary * 12; }
}

class Manager extends Employee {
    double bonus;

    Manager(String name, double salary, double bonus) {
        super(name, salary);
        this.bonus = bonus;
    }

    @Override
    void showDetails() {
        super.showDetails();                       // reuse the parent's printing
        System.out.println("Bonus: " + bonus);     // then add the manager part
    }

    @Override
    double yearlyPay() {
        return super.yearlyPay() + bonus;          // parent's calculation + bonus
    }

    public static void main(String[] args) {
        Manager m = new Manager("Shivam", 50000, 20000);
        m.showDetails();
        // Name: Shivam
        // Salary: 50000.0
        // Bonus: 20000.0
        System.out.println(m.yearlyPay());         // 620000.0
    }
}`,
   tip: ["Without super.showDetails() the manager's output would miss the name and the salary. The call can go anywhere in the method, but usually it comes first.", "super.showDetails() ke bina manager ke output me naam aur salary nahi aate. Call method me kahin bhi ho sakta hai, par aam taur par pehle aata hai."]},
  {h: ["Use 3: super(...) calls the parent constructor", "Use 3: super(...) parent constructor call karta hai"],
   p: ["Because the parent part of an object has to be built first, every child constructor must call a parent constructor. You do it with super(arguments), and it MUST be the first statement. The arguments choose WHICH parent constructor runs. The child constructor then continues and sets up its own fields. This is how the child passes values up to the parent, and it is the clean way to avoid repeating the parent's setup code.",
       "Kyunki object ka parent wala hissa pehle banna chahiye, har child constructor ko parent constructor call karna padta hai. Ye super(arguments) se karte ho, aur ye PEHLA statement hona ZAROORI hai. Arguments tay karte hain ki parent ka KAUN SA constructor chalega. Uske baad child constructor aage badhta hai aur apne fields set karta hai. Is tarah child values parent ko bhejta hai, aur parent ka setup code dohrane se bachne ka ye saaf tareeka hai."],
   code: `class Person {
    String name;
    int age;

    Person(String name, int age) {
        this.name = name;
        this.age = age;
        System.out.println("Person created: " + name);
    }
}

class Student extends Person {
    int rollNo;

    Student(String name, int age, int rollNo) {
        super(name, age);              // FIRST statement: sends name and age up
        this.rollNo = rollNo;
        System.out.println("Student created: " + rollNo);
    }

    public static void main(String[] args) {
        Student s = new Student("Gurleen", 20, 7);
        // Person created: Gurleen
        // Student created: 7
        System.out.println(s.name + " " + s.age + " " + s.rollNo);   // Gurleen 20 7
    }
}`,
   pts: [["super(...) must be the first line of the constructor. You cannot use both this(...) and super(...) in the same constructor, because each needs to be first.", "The arguments must match one of the parent's constructors. The compiler checks this.", "A child constructor that uses this(...) lets the other constructor make the super(...) call.", "Do not call super(...) in a normal method. It works only in constructors."],
         ["super(...) constructor ki pehli line honi chahiye. Ek hi constructor me this(...) aur super(...) dono use nahi kar sakte, kyunki dono ko pehla hona hai.", "Arguments parent ke kisi constructor se match hone chahiye. Compiler ye check karta hai.", "Jo child constructor this(...) use karta hai wo super(...) call dusre constructor par chhod deta hai.", "Normal method me super(...) call mat karo. Ye sirf constructors me chalta hai."]]},
  {h: ["The hidden super(): the implicit call and the classic error", "Chhupa hua super(): implicit call aur classic error"],
   p: ["If you do not write super(...) yourself, the compiler adds super(); (the no-argument call) as the first line of the child constructor. That is fine as long as the parent has a no-argument constructor. Trouble starts when the parent has ONLY parameterized constructors, because then there is nothing for the hidden super() to call. The compiler reports an error on the child. The fix is to write super(...) yourself with the right arguments, or to add a no-argument constructor to the parent.",
       "super(...) khud na likho to compiler child constructor ki pehli line me super(); (no-argument call) jod deta hai. Ye tab tak theek hai jab tak parent ka no-argument constructor ho. Dikkat tab hoti hai jab parent ke paas SIRF parameterized constructors ho, kyunki tab chhupe hue super() ke liye kuch call karne ko nahi hota. Compiler child par error deta hai. Fix ye hai ki sahi arguments ke saath super(...) khud likho, ya parent me no-argument constructor jodo."],
   code: `class Vehicle {
    String brand;
    Vehicle(String brand) {            // ONLY a parameterized constructor
        this.brand = brand;
    }
}

// ERROR version: the compiler inserts super() but Vehicle() does not exist
// class Bike extends Vehicle {
//     Bike() { }          // error: constructor Vehicle in class Vehicle cannot be applied to given types
// }

// FIX 1: call the parent constructor that exists
class Bike extends Vehicle {
    Bike() {
        super("Hero");
    }
}

// FIX 2: give the parent a no-argument constructor instead
class Truck {
    String brand;
    Truck() { brand = "Unknown"; }
    Truck(String brand) { this.brand = brand; }
}
class Lorry extends Truck {
    Lorry() { }            // the hidden super() now finds Truck()
}`,
   tip: ["If a child class shows a compile error right on its constructor (or on the class line), the parent probably has no no-argument constructor. Add super(...) with arguments.", "Child class ke constructor (ya class wali line) par hi compile error dikhe to parent ke paas shayad no-argument constructor nahi hai. Arguments ke saath super(...) lagao."]},
  {h: ["Order of execution with super", "super ke saath execution ka order"],
   p: ["Execution always starts at the top of the chain. Even though you call new on the youngest child, the parent constructors run first, one after another, and then the child's own body. A parent constructor that calls an overridable method can cause strange bugs, because that method may run in the child before the child's fields are set. Avoid calling overridable methods from constructors.",
       "Execution hamesha chain ke sabse upar se shuru hota hai. Sabse chhote child par new call karne par bhi pehle parent constructors ek ke baad ek chalte hain, fir child ki apni body. Parent constructor jo overridable method call kare wo ajeeb bugs la sakta hai, kyunki wo method child me child ke fields set hone se pehle chal sakta hai. Constructors se overridable methods call karne se bacho."],
   code: `class A {
    A() {
        System.out.println("A()");
        hello();                       // dangerous: calls the child's version!
    }
    void hello() { System.out.println("hello from A"); }
}

class B extends A {
    String msg = "set in B";
    B() {
        super();                       // runs A() first
        System.out.println("B() msg=" + msg);
    }
    @Override
    void hello() {
        System.out.println("hello from B, msg=" + msg);   // msg is still null here!
    }

    public static void main(String[] args) {
        new B();
        // A()
        // hello from B, msg=null       <- B's field is not set yet
        // B() msg=set in B
    }
}`},
  {h: ["super versus this", "super vs this"],
   p: ["The two keywords look similar but do different jobs. The table below, in words, helps you decide which one to use.",
       "Dono keywords ek jaise dikhte hain par alag kaam karte hain. Neeche ki baatein batati hain ki kaun sa use karna hai."],
   pts: [["this = the current object, searched from the current class. super = the same object, searched from the parent class.", "this.field and super.field: child's own field versus parent's field.", "this.method() and super.method(): the version visible from the current class (possibly overridden) versus the parent's version.", "this(...) calls another constructor of the SAME class. super(...) calls a constructor of the PARENT class.", "Both must be the first statement in a constructor, so only ONE of them can be used in one constructor.", "Neither can be used in a static method, because a static method has no object.", "this can be passed around and returned. super cannot be stored or passed. It is only a way of reaching parent members."],
         ["this = current object, current class se dhundta hai. super = wahi object, parent class se dhundta hai.", "this.field aur super.field: child ka apna field versus parent ka field.", "this.method() aur super.method(): current class se dikhne wala version (shayad overridden) versus parent ka version.", "this(...) SAME class ka dusra constructor call karta hai. super(...) PARENT class ka constructor call karta hai.", "Dono constructor ka pehla statement hone chahiye, isliye ek constructor me sirf EK hi use ho sakta hai.", "Dono static method me use nahi ho sakte, kyunki static method ka koi object nahi hota.", "this ko pass aur return kar sakte ho. super ko store ya pass nahi kar sakte. Ye sirf parent members tak pahunchne ka tareeka hai."]]},
  {h: ["A complete example and common mistakes", "Ek poora example aur common mistakes"],
   p: ["This program uses all three forms of super together: a constructor call, a method call and field access through the parent. Read it slowly and predict the output before you run it.",
       "Ye program super ke teeno rup ek saath use karta hai: constructor call, method call aur parent ke through field access. Dheere padho aur chalane se pehle output ka andaza lagao."],
   code: `class Shape {
    protected String color;

    Shape(String color) {
        this.color = color;
    }

    String describe() {
        return "A " + color + " shape";
    }
}

class Circle extends Shape {
    private double radius;

    Circle(String color, double radius) {
        super(color);                         // use 3: constructor
        this.radius = radius;
    }

    @Override
    String describe() {
        return super.describe() + " (circle, radius " + radius + ")";    // use 2: method
    }

    double area() {
        return Math.PI * radius * radius;
    }

    public static void main(String[] args) {
        Circle c = new Circle("red", 2);
        System.out.println(c.describe());       // A red shape (circle, radius 2.0)
        System.out.printf("%.2f%n", c.area());  // 12.57
    }
}`,
   pts: [["Mistake: writing something before super(...). It must be the first statement.", "Mistake: forgetting super(...) when the parent has only parameterized constructors.", "Mistake: calling super(...) from a normal method.", "Mistake: using super.super.method(). It does not exist.", "Mistake: expecting super to create a separate parent object. There is only one object.", "Mistake: forgetting super.method() inside an override and losing the parent's behaviour.", "Mistake: using super in a static method or in main.", "Good habit: use super.method() to extend behaviour and avoid copying the parent's code into the child."],
         ["Galti: super(...) se pehle kuch likhna. Wo pehla statement hona chahiye.", "Galti: parent ke sirf parameterized constructors ho to super(...) bhul jana.", "Galti: normal method se super(...) call karna.", "Galti: super.super.method() likhna. Ye exist nahi karta.", "Galti: super se alag parent object banne ki ummeed. Sirf ek hi object hai.", "Galti: override ke andar super.method() bhulkar parent ka behaviour kho dena.", "Galti: static method ya main me super use karna.", "Achhi aadat: behaviour ko extend karne ke liye super.method() use karo aur parent ka code child me copy mat karo."]],
   tip: ["Interview question: can we call super() and this() in the same constructor? No. Each must be the first statement, so only one is allowed.", "Interview question: kya ek hi constructor me super() aur this() dono call kar sakte hain? Nahi. Dono ko pehla statement hona hai, isliye sirf ek allowed hai."]}
 ]},
29: {
 def: ["Method overloading means writing several methods with the SAME name in the same class, but with DIFFERENT parameter lists (different number, types or order of parameters). Java decides which one to run by looking at the arguments in the call, and it decides this at compile time, so it is also called compile-time or static polymorphism.",
       "Method overloading ka matlab ek hi class me SAME naam ke kai methods likhna, par DIFFERENT parameter lists ke saath (parameters ki alag ginti, types ya order). Java call ke arguments dekhkar tay karta hai ki kaun sa chalana hai, aur ye compile time par tay hota hai, isliye ise compile-time ya static polymorphism bhi kehte hain."],
 secs: [
  {h: ["Why overloading?", "Overloading kyun?"],
   p: ["Without overloading you would need a different name for every version of the same idea: addInts, addDoubles, addThreeInts, addStrings. That is hard to remember. With overloading you simply call add and give it the data you have, and Java picks the right version. You have already used overloading: System.out.println() accepts an int, a double, a char, a String and many other types, and Math.max works for int, long, float and double.",
       "Overloading ke bina ek hi idea ke har version ke liye alag naam chahiye hota: addInts, addDoubles, addThreeInts, addStrings. Ye yaad rakhna mushkil hai. Overloading me bas add call karte ho aur jo data hai wo dete ho, aur Java sahi version chun leta hai. Overloading tum pehle hi use kar chuke ho: System.out.println() int, double, char, String aur kai types leta hai, aur Math.max int, long, float aur double ke liye chalta hai."],
   pts: [["Same name tells the reader it is the same idea. Different parameters tell Java which version to run.", "Overloading happens inside ONE class (or between a class and its child, using inherited methods).", "The choice is made by the compiler using the declared types of the arguments, before the program runs.", "It makes an API easy to use: fewer names to learn."],
         ["Same naam padhne wale ko batata hai ki idea same hai. Alag parameters Java ko batate hain ki kaun sa version chalana hai.", "Overloading EK class ke andar hoti hai (ya class aur uske child ke beech, inherited methods ke saath).", "Choice compiler arguments ke declared types dekhkar karta hai, program chalne se pehle.", "Isse API use karna aasan hota hai: seekhne ke liye kam naam."]]},
  {h: ["The three ways to overload", "Overload karne ke teen tareeke"],
   p: ["The parameter list must differ in at least one of these: the NUMBER of parameters, the TYPES of parameters, or the ORDER of the types. Changing only the parameter NAMES does not count, and neither does changing only the return type.",
       "Parameter list in me se kam se kam ek cheez me alag honi chahiye: parameters ki GINTI, parameters ke TYPES, ya types ka ORDER. Sirf parameter ke NAAM badalna ginta nahi, aur sirf return type badalna bhi nahi."],
   code: `public class Calculator {
    // 1) different NUMBER of parameters
    int add(int a, int b) {
        return a + b;
    }
    int add(int a, int b, int c) {
        return a + b + c;
    }

    // 2) different TYPES of parameters
    double add(double a, double b) {
        return a + b;
    }
    String add(String a, String b) {
        return a + b;                       // joins text
    }

    // 3) different ORDER of types
    void show(String name, int marks) {
        System.out.println(name + " scored " + marks);
    }
    void show(int marks, String name) {
        System.out.println(marks + " marks: " + name);
    }

    public static void main(String[] args) {
        Calculator c = new Calculator();
        System.out.println(c.add(2, 3));              // 5       (int, int)
        System.out.println(c.add(2, 3, 4));           // 9       (three ints)
        System.out.println(c.add(1.5, 2.5));          // 4.0     (double, double)
        System.out.println(c.add("Java", "21"));      // Java21  (String, String)
        c.show("Himakshi", 90);                       // Himakshi scored 90
        c.show(90, "Himakshi");                       // 90 marks: Himakshi
    }
}`},
  {h: ["What does NOT count as overloading", "Kya overloading nahi mana jata"],
   p: ["Two methods with the same name and the same parameter types are the same method for Java, even if their return types, parameter names or access modifiers differ. Java cannot choose between them from a call like add(2, 3), because the return type is not part of the call. This is a compile error.",
       "Same naam aur same parameter types wale do methods Java ke liye ek hi method hain, chahe unke return types, parameter names ya access modifiers alag ho. Java add(2, 3) jaisi call se unme se chun nahi sakta, kyunki return type call ka hissa nahi hota. Ye compile error hai."],
   code: `class Wrong {
    int add(int a, int b) { return a + b; }

    // ERROR: method add(int, int) is already defined
    // double add(int a, int b) { return a + b; }       // only the return type differs

    // ERROR: same parameter types, only the names differ
    // int add(int x, int y) { return x + y; }

    // ERROR: only the access modifier differs
    // private int add(int a, int b) { return a - b; }

    // ERROR: only the exceptions differ
    // int add(int a, int b) throws Exception { return a + b; }
}

// Overloading is fine when the parameter types differ:
class Right {
    int add(int a, int b) { return a + b; }
    double add(double a, double b) { return a + b; }    // OK
}`,
   pts: [["Not enough: a different return type, different parameter names, different access modifier, different throws clause, or static versus non-static alone.", "Enough: a different number of parameters, a different type in any position, or a different order of types.", "int... (varargs) and int[] are the same signature, so you cannot have both."],
         ["Kaafi nahi: alag return type, alag parameter names, alag access modifier, alag throws clause, ya akela static versus non-static.", "Kaafi hai: parameters ki alag ginti, kisi bhi position par alag type, ya types ka alag order.", "int... (varargs) aur int[] ki signature same hai, isliye dono nahi rakh sakte."]]},
  {h: ["How Java chooses: the resolution order", "Java kaise chunta hai: resolution order"],
   p: ["When several overloads could accept the call, Java tries these steps in order and stops at the first one that works. Phase 1: an exact match or a widening of a primitive (int to long). Phase 2: boxing or unboxing (int to Integer). Phase 3: varargs. If more than one method fits equally well in the same phase, the call is ambiguous and the compiler refuses it.",
       "Kai overloads call accept kar sakte hon to Java ye steps order me try karta hai aur pehle chalne wale par ruk jata hai. Phase 1: exact match ya primitive ka widening (int se long). Phase 2: boxing ya unboxing (int se Integer). Phase 3: varargs. Ek hi phase me ek se zyada methods barabar fit hon to call ambiguous hoti hai aur compiler use mana kar deta hai."],
   code: `public class Resolve {
    static void show(long x)     { System.out.println("long"); }
    static void show(Integer x)  { System.out.println("Integer"); }
    static void show(int... x)   { System.out.println("varargs"); }

    static void print(int x)     { System.out.println("int " + x); }
    static void print(double x)  { System.out.println("double " + x); }
    static void print(char x)    { System.out.println("char " + x); }
    static void print(Object x)  { System.out.println("Object " + x); }
    static void print(String x)  { System.out.println("String " + x); }

    public static void main(String[] args) {
        show(5);        // long: widening wins over boxing and varargs
        // Remove show(long) and it prints Integer. Remove that too and it prints varargs.

        print(10);          // int 10      (exact match)
        print(10.5);        // double 10.5 (exact match)
        print('A');         // char A      (exact match, NOT int)
        print(10L);         // double 10.0 (long widens to double, no long version exists)
        print("hi");        // String hi   (the most specific type wins over Object)
        print(new int[0]);  // Object [I@...  (only Object accepts it)
        byte b = 7;
        print(b);           // int 7       (byte widens to int, the nearest wider type)
    }
}`,
   pts: [["Exact match always wins. Otherwise the NEAREST wider primitive is chosen (byte to short to int to long to float to double).", "Widening beats boxing, and boxing beats varargs.", "With classes, the MOST SPECIFIC type wins: String is more specific than Object.", "The decision uses the declared type of the variable, not the real object. Object o = \"hi\"; print(o) calls print(Object).", "char and int are different overloads. print('A') shows the letter, and print('A' + 1) shows the number 66, because the addition gives an int."],
         ["Exact match hamesha jeetta hai. Warna sabse NAZDIKI wider primitive chuna jata hai (byte se short se int se long se float se double).", "Widening boxing se jeetti hai, aur boxing varargs se.", "Classes me SABSE SPECIFIC type jeetta hai: String, Object se zyada specific hai.", "Decision variable ke declared type se hota hai, asli object se nahi. Object o = \"hi\"; print(o) print(Object) call karta hai.", "char aur int alag overloads hain. print('A') letter dikhata hai, aur print('A' + 1) number 66 dikhata hai, kyunki addition int deta hai."]]},
  {h: ["Ambiguity and null", "Ambiguity aur null"],
   p: ["The compiler gives an error when two overloads are equally good. The classic case is passing null when two reference types could take it, or passing arguments where each method fits one parameter better than the other. The fix is a cast that tells Java which one you mean, or redesigning the overloads.",
       "Jab do overloads barabar achhe hon to compiler error deta hai. Classic case null pass karna hai jab do reference types use le sakte hon, ya aise arguments jahan har method ek parameter ke liye behtar fit ho. Fix ek cast hai jo Java ko batata hai ki tum kaun sa chahte ho, ya overloads ko dobara design karna."],
   code: `public class Ambiguous {
    static void f(String s)  { System.out.println("String"); }
    static void f(Integer i) { System.out.println("Integer"); }

    static void g(int a, double b) { System.out.println("int, double"); }
    static void g(double a, int b) { System.out.println("double, int"); }

    static void h(Object o)  { System.out.println("Object"); }
    static void h(String s)  { System.out.println("String"); }

    public static void main(String[] args) {
        // f(null);              // ERROR: reference to f is ambiguous (String or Integer?)
        f((String) null);        // OK: the cast chooses String

        // g(1, 2);              // ERROR: both g methods need one widening, so neither is better
        g(1, 2.0);               // int, double
        g(1.0, 2);               // double, int

        h(null);                 // String: String is more specific than Object, so no error
    }
}`},
  {h: ["Overloading constructors, static methods, varargs and main", "Constructors, static methods, varargs aur main ki overloading"],
   p: ["Constructors can be overloaded in the same way (you saw this in the Constructors lesson). Static methods can be overloaded too. A varargs method (int... nums) can accept any number of values, so it replaces many overloads. You can even overload main, but the JVM only starts the program from the exact main(String[] args).",
       "Constructors ko bhi isi tarah overload kar sakte ho (Constructors lesson me dekha tha). Static methods bhi overload ho sakte hain. Varargs method (int... nums) kitni bhi values le sakta hai, isliye kai overloads ki jagah leta hai. main ko bhi overload kar sakte ho, par JVM program sirf exact main(String[] args) se shuru karta hai."],
   code: `public class Overloads {
    // constructors
    String label;
    Overloads()            { this("none"); }
    Overloads(String label) { this.label = label; }

    // static overloads
    static int max(int a, int b)             { return a > b ? a : b; }
    static int max(int a, int b, int c)      { return max(max(a, b), c); }
    static double max(double a, double b)    { return a > b ? a : b; }

    // varargs replaces a whole family of overloads
    static int sum(int... nums) {
        int t = 0;
        for (int n : nums) t += n;
        return t;
    }

    // an overloaded main: only the String[] version starts the program
    public static void main(String[] args) {
        System.out.println(max(3, 9));          // 9
        System.out.println(max(3, 9, 5));       // 9
        System.out.println(max(2.5, 1.5));      // 2.5
        System.out.println(sum());              // 0
        System.out.println(sum(1, 2, 3, 4));    // 10
        System.out.println(new Overloads().label);   // none
        main(5);                                 // calls the other main
    }

    static void main(int n) {
        System.out.println("Overloaded main with " + n);
    }
}`,
   pts: [["A varargs overload is chosen last, so a method with exact parameters wins over it.", "A class cannot have both sum(int... a) and sum(int[] a).", "Use varargs when the count really varies. Use separate overloads when each form does something different.", "Overloading is decided for each class, so a child class can add new overloads of an inherited method name."],
         ["Varargs overload sabse aakhir me chuna jata hai, isliye exact parameters wala method uspar jeetta hai.", "Ek class me sum(int... a) aur sum(int[] a) dono nahi ho sakte.", "Ginti sach me badalti ho to varargs use karo. Har form alag kaam karta ho to alag overloads use karo.", "Overloading har class ke liye tay hoti hai, isliye child class inherited method naam ke naye overloads jod sakti hai."]]},
  {h: ["Real examples: area and a formatter", "Real examples: area aur formatter"],
   p: ["Here overloading makes a clean API. One method name, area, works for a square, a rectangle and a circle, and a describe method accepts the data in whichever form the caller has it.",
       "Yahan overloading ek saaf API banati hai. Ek hi method naam, area, square, rectangle aur circle ke liye chalta hai, aur describe method data ko jis bhi form me caller ke paas ho usme leta hai."],
   code: `public class Geometry {
    static double area(double side) {                  // square
        return side * side;
    }

    static double area(double length, double width) {  // rectangle
        return length * width;
    }

    static double area(double radius, boolean isCircle) {   // circle, with a flag so it differs
        return Math.PI * radius * radius;
    }

    static String describe(int marks) {
        return marks + " marks";
    }

    static String describe(String name, int marks) {
        return name + " has " + marks + " marks";
    }

    static String describe(int[] marks) {
        int total = 0;
        for (int m : marks) total += m;
        return "Total " + total;
    }

    public static void main(String[] args) {
        System.out.println(area(4));                  // 16.0
        System.out.println(area(4, 5));               // 20.0
        System.out.printf("%.2f%n", area(3, true));   // 28.27
        System.out.println(describe(80));             // 80 marks
        System.out.println(describe("Mohit", 80));    // Mohit has 80 marks
        System.out.println(describe(new int[]{70, 80, 90}));   // Total 240
    }
}`},
  {h: ["Overloading versus overriding, and common mistakes", "Overloading vs overriding aur common mistakes"],
   p: ["Beginners mix up these two words all the time. Overloading: same name, different parameters, usually in ONE class, chosen at COMPILE time. Overriding: same name AND same parameters, in a CHILD class that redefines an inherited method, chosen at RUN time (next lesson). Remember it as: over-LOAD means more versions loaded in the same place, over-RIDE means riding over the parent's version.",
       "Beginners in do shabdon ko hamesha mix karte hain. Overloading: same naam, alag parameters, aam taur par EK class me, COMPILE time par chuna jata hai. Overriding: same naam AUR same parameters, CHILD class me jo inherited method ko dobara define karti hai, RUN time par chuna jata hai (agla lesson). Aise yaad rakho: over-LOAD ka matlab ek hi jagah zyada versions load hona, over-RIDE ka matlab parent ke version ke upar sawaar hona."],
   pts: [["Overloading: different parameter list, return type free, any class, compile-time (static) polymorphism.", "Overriding: same parameter list, return type same or narrower, parent and child, runtime (dynamic) polymorphism.", "Mistake: expecting a different return type alone to overload a method.", "Mistake: using many overloads that differ only in the order of the same types, which are easy to call by mistake.", "Mistake: forgetting that print(null) and similar calls can be ambiguous.", "Mistake: assuming Java picks the overload from the real object. It uses the declared type of the variable.", "Mistake: passing a char and getting an int version, or the other way around.", "Good habit: overloads should do the same job in different forms. If they do different jobs, give them different names."],
         ["Overloading: alag parameter list, return type free, koi bhi class, compile-time (static) polymorphism.", "Overriding: same parameter list, return type same ya narrower, parent aur child, runtime (dynamic) polymorphism.", "Galti: sirf alag return type se method overload hone ki ummeed.", "Galti: aise bahut saare overloads jo sirf same types ke order se alag ho, jinhe galti se call karna aasan hai.", "Galti: ye bhul jana ki print(null) jaisi calls ambiguous ho sakti hain.", "Galti: ye maanna ki Java asli object se overload chunta hai. Wo variable ka declared type use karta hai.", "Galti: char pass karke int version milna, ya ulta.", "Achhi aadat: overloads ek hi kaam alag forms me karein. Alag kaam karte ho to unhe alag naam do."]],
   tip: ["Interview question: can we overload main()? Yes, but the JVM calls only public static void main(String[] args) to start. Can we overload by return type only? No.", "Interview question: kya main() ko overload kar sakte hain? Haan, par JVM shuru karne ke liye sirf public static void main(String[] args) call karta hai. Kya sirf return type se overload kar sakte hain? Nahi."]}
 ]},
30: {
 def: ["Method overriding means a child class provides its OWN version of a method that it inherited from its parent, using the same name, the same parameters and a compatible return type. When you call that method on a child object, Java runs the child's version, and it decides this at run time from the real object, not from the variable type. This is runtime (dynamic) polymorphism.",
       "Method overriding ka matlab child class parent se inherit kiye hue method ka APNA version deti hai, same naam, same parameters aur compatible return type ke saath. Us method ko child object par call karne par Java child ka version chalata hai, aur ye run time par asli object se tay hota hai, variable ke type se nahi. Ye runtime (dynamic) polymorphism hai."],
 secs: [
  {h: ["Why override?", "Override kyun?"],
   p: ["The parent gives general behaviour that is not right for every child. An Animal can makeSound(), but a Dog barks, a Cat meows and a Cow moos. The parent defines the idea once, and each child fills in its own correct version. The big payoff comes later: code written for the parent type (a method taking an Animal) automatically does the right thing for every child, including children invented in the future.",
       "Parent general behaviour deta hai jo har child ke liye sahi nahi hota. Animal makeSound() kar sakta hai, par Dog bhaunkta hai, Cat meow karti hai aur Cow ambha karti hai. Parent idea ek baar define karta hai, aur har child apna sahi version bharta hai. Bada fayda aage milta hai: parent type ke liye likha code (jo Animal leta ho) har child ke liye, bhavishya me bane children ke liye bhi, apne aap sahi kaam karta hai."],
   code: `class Animal {
    void makeSound() {
        System.out.println("Some generic animal sound");
    }
}

class Dog extends Animal {
    @Override
    void makeSound() {                     // same name, same parameters
        System.out.println("Woof");
    }
}

class Cat extends Animal {
    @Override
    void makeSound() {
        System.out.println("Meow");
    }
}

class Fish extends Animal { }              // does not override: uses the parent's version

public class Main {
    public static void main(String[] args) {
        new Animal().makeSound();   // Some generic animal sound
        new Dog().makeSound();      // Woof
        new Cat().makeSound();      // Meow
        new Fish().makeSound();     // Some generic animal sound
    }
}`},
  {h: ["The rules of overriding", "Overriding ke rules"],
   p: ["Overriding has strict rules so that a child can always be used wherever its parent is expected. Break one of them and the compiler refuses the code.",
       "Overriding ke sakht rules hain taaki child ko hamesha wahan use kiya ja sake jahan parent ki ummeed ho. Inme se ek bhi todo to compiler code mana kar deta hai."],
   pts: [["Same method name and the same parameter list (same signature). Different parameters would be overloading, not overriding.", "The return type must be the same, or a subtype of the parent's return type (a covariant return, shown below). For primitives it must be exactly the same.", "The access level must be the same or MORE open. A public parent method cannot become protected or private in the child. A protected one can become public.", "The child cannot throw broader or new checked exceptions than the parent method declares. It may throw fewer or narrower ones. (Exceptions come in Phase 4.)", "The parent method must be inherited: it cannot be private, and it cannot be final or static (see the next sections).", "Only instance methods are overridden. Fields, constructors and static methods are not.", "A child can override a method from any ancestor, not only the direct parent."],
         ["Same method naam aur same parameter list (same signature). Alag parameters overloading hogi, overriding nahi.", "Return type same hona chahiye, ya parent ke return type ka subtype (covariant return, neeche dikhaya hai). Primitives ke liye bilkul same hona chahiye.", "Access level same ya ZYADA khula hona chahiye. Public parent method child me protected ya private nahi ho sakta. Protected wala public ban sakta hai.", "Child parent method ke declare kiye gaye se bade ya naye checked exceptions nahi fenk sakta. Kam ya narrower fenk sakta hai. (Exceptions Phase 4 me aate hain.)", "Parent method inherit hona chahiye: wo private nahi ho sakta, aur final ya static bhi nahi (aage ke sections dekho).", "Sirf instance methods override hote hain. Fields, constructors aur static methods nahi.", "Child kisi bhi ancestor ka method override kar sakta hai, sirf seedhe parent ka nahi."]]},
  {h: ["The @Override annotation", "@Override annotation"],
   p: ["@Override is a note you put above a method to tell the compiler 'I mean to override a parent method'. The compiler then checks it. If no matching parent method exists, because of a typo, a wrong parameter type or a wrong capital letter, you get an error at once. Without it, a tiny mistake silently creates a brand new method that overrides nothing, and your child's code is never called. It is not required, but you should ALWAYS write it.",
       "@Override ek note hai jo method ke upar lagate ho, compiler ko batane ke liye 'main parent ka method override karna chahta hoon'. Compiler fir use check karta hai. Typo, galat parameter type ya galat capital letter ki wajah se matching parent method na ho to turant error milta hai. Iske bina chhoti galti chupchap bilkul naya method bana deti hai jo kuch override nahi karta, aur child ka code kabhi call nahi hota. Ye zaroori nahi hai, par isse HAMESHA likho."],
   code: `class Parent {
    void showName(String name) {
        System.out.println("Parent: " + name);
    }
}

class Child extends Parent {
    // Typo: showname instead of showName. WITHOUT @Override this compiles quietly
    // and the parent's method is used instead. WITH @Override you get an error.
    // @Override
    // void showname(String name) { System.out.println("Child: " + name); }

    // Wrong parameter type: Integer instead of String. @Override would catch it.
    // @Override
    // void showName(Integer name) { }

    @Override
    void showName(String name) {                  // correct
        System.out.println("Child: " + name);
    }

    public static void main(String[] args) {
        new Child().showName("Gurleen");          // Child: Gurleen
    }
}`,
   tip: ["Compiler message 'method does not override or implement a method from a supertype' means your signature does not match any parent method. Compare the names and parameter types letter by letter.", "Compiler message 'method does not override or implement a method from a supertype' ka matlab hai tumhari signature kisi parent method se match nahi karti. Naam aur parameter types ko akshar-dar-akshar compare karo."]},
  {h: ["Runtime polymorphism: the real object decides", "Runtime polymorphism: asli object tay karta hai"],
   p: ["Here is the heart of the topic. When you call a method on a parent-type variable, Java does not look at the variable's type. At run time it looks at the REAL object that the variable points to and runs THAT class's version. This is called dynamic method dispatch. It lets you write one loop over a list of Animals that makes each one produce its own sound, without a single if statement.",
       "Ye topic ka dil hai. Parent-type variable par method call karte ho to Java variable ke type ko nahi dekhta. Run time par wo us ASLI object ko dekhta hai jise variable point karta hai aur USI class ka version chalata hai. Ise dynamic method dispatch kehte hain. Isse tum Animals ki list par ek hi loop likh sakte ho jo har animal se uski apni awaaz nikalwata hai, ek bhi if statement ke bina."],
   code: `class Shape {
    double area() { return 0; }
    String name() { return "Shape"; }
}

class Circle extends Shape {
    double r;
    Circle(double r) { this.r = r; }
    @Override double area() { return Math.PI * r * r; }
    @Override String name() { return "Circle"; }
}

class Rectangle extends Shape {
    double w, h;
    Rectangle(double w, double h) { this.w = w; this.h = h; }
    @Override double area() { return w * h; }
    @Override String name() { return "Rectangle"; }
}

class Triangle extends Shape {
    double b, h;
    Triangle(double b, double h) { this.b = b; this.h = h; }
    @Override double area() { return 0.5 * b * h; }
    @Override String name() { return "Triangle"; }
}

public class Main {
    public static void main(String[] args) {
        Shape[] shapes = { new Circle(2), new Rectangle(3, 4), new Triangle(5, 6) };

        double total = 0;
        for (Shape s : shapes) {                 // the variable type is Shape every time
            System.out.printf("%s area = %.2f%n", s.name(), s.area());   // the REAL object decides
            total += s.area();
        }
        System.out.printf("Total = %.2f%n", total);
        // Circle area = 12.57
        // Rectangle area = 12.00
        // Triangle area = 15.00
        // Total = 39.57
    }
}`,
   pts: [["Compile time: the compiler only checks that the parent type HAS the method (so s.area() is allowed).", "Run time: the JVM looks at the real object and runs its version of the method.", "To add a Hexagon, you write a new class and change nothing in the loop. This is the open-closed idea.", "A parent reference can call only methods the PARENT declares, even if the child has more."],
         ["Compile time: compiler sirf ye check karta hai ki parent type ke paas method HAI (isliye s.area() allowed hai).", "Run time: JVM asli object dekhta hai aur uska version chalata hai.", "Hexagon jodne ke liye nayi class likho aur loop me kuch mat badlo. Ye open-closed idea hai.", "Parent reference sirf wahi methods call kar sakta hai jo PARENT declare karta hai, chahe child ke paas zyada ho."]]},
  {h: ["super.method(): extend instead of replace", "super.method(): replace nahi, extend"],
   p: ["Inside an overriding method you can still run the parent's version with super.method(). This lets the child add to the parent's work instead of rewriting it, which keeps the shared logic in one place. toString() is the method you will override most. Object's version prints something like Student@1b6d3586, so you override it to print useful text.",
       "Overriding method ke andar bhi parent ka version super.method() se chala sakte ho. Isse child parent ke kaam me jodta hai, use dobara likhta nahi, aur shared logic ek hi jagah rehta hai. toString() wo method hai jise sabse zyada override karoge. Object ka version Student@1b6d3586 jaisa kuch print karta hai, isliye kaam ka text print karne ke liye use override karte ho."],
   code: `class Person {
    protected String name;
    Person(String name) { this.name = name; }

    @Override
    public String toString() {                      // overriding Object's toString()
        return "Person: " + name;
    }
}

class Student extends Person {
    private int rollNo;

    Student(String name, int rollNo) {
        super(name);
        this.rollNo = rollNo;
    }

    @Override
    public String toString() {
        return super.toString() + ", Roll no: " + rollNo;     // reuse + extend
    }

    public static void main(String[] args) {
        Student s = new Student("Rahul", 12);
        System.out.println(s);            // Person: Rahul, Roll no: 12
        Person p = s;                     // the same object seen as a Person
        System.out.println(p);            // Person: Rahul, Roll no: 12  (still the Student version)
    }
}`},
  {h: ["Covariant return types and widening access", "Covariant return types aur access ka widen hona"],
   p: ["Two small freedoms are allowed in an override. First, the child may return a MORE specific type than the parent promised (a covariant return): if the parent returns Animal, the child may return Dog. Second, the child may make the method MORE accessible (protected to public), but never less.",
       "Override me do chhoti azaadiyan allowed hain. Pehli, child parent ke vaade se ZYADA specific type return kar sakta hai (covariant return): parent Animal return kare to child Dog return kar sakta hai. Doosri, child method ko ZYADA accessible (protected se public) bana sakta hai, par kam kabhi nahi."],
   code: `class Animal {
    Animal create() {                          // returns Animal
        return new Animal();
    }
    protected void info() {
        System.out.println("Animal info");
    }
}

class Dog extends Animal {
    @Override
    Dog create() {                             // covariant: Dog is a kind of Animal
        return new Dog();
    }

    @Override
    public void info() {                       // widened: protected to public is allowed
        System.out.println("Dog info");
    }

    // @Override
    // private void info() { }                 // ERROR: weaker access than protected
    // @Override
    // int create() { return 1; }              // ERROR: int is not a subtype of Animal
}

public class Main {
    public static void main(String[] args) {
        Dog d = new Dog().create();            // no cast needed thanks to the covariant return
        d.info();                              // Dog info
    }
}`},
  {h: ["What cannot be overridden: final, static, private and constructors", "Kya override nahi ho sakta: final, static, private aur constructors"],
   p: ["A final method cannot be overridden: it is the parent's way of saying 'this behaviour must never change'. A private method is not inherited at all, so a child method with the same name is just a new, unrelated method. A static method belongs to the class, so a child's static method with the same signature HIDES the parent's one instead of overriding it, and the version chosen depends on the variable type, not the object. Constructors are never inherited, so they cannot be overridden.",
       "final method override nahi ho sakta: ye parent ka tareeka hai kehne ka ki 'ye behaviour kabhi nahi badalna chahiye'. private method inherit hi nahi hota, isliye child ka same naam ka method bas ek naya, alag method hai. static method class ka hota hai, isliye child ka same signature wala static method parent wale ko override nahi karta balki use CHHUPA deta hai, aur kaun sa version chalega wo variable ke type par nirbhar karta hai, object par nahi. Constructors kabhi inherit nahi hote, isliye override nahi ho sakte."],
   code: `class Parent {
    final void rule() { System.out.println("Parent rule: cannot change"); }
    private void secret() { System.out.println("Parent secret"); }
    static void hello() { System.out.println("Parent static hello"); }
    void normal() { System.out.println("Parent normal"); }
    void callSecret() { secret(); }
}

class Child extends Parent {
    // void rule() { }                        // ERROR: cannot override final method

    void secret() { System.out.println("Child secret"); }   // NOT an override: a new method

    static void hello() { System.out.println("Child static hello"); }   // hides, not overrides

    @Override
    void normal() { System.out.println("Child normal"); }   // a true override
}

public class Main {
    public static void main(String[] args) {
        Parent p = new Child();
        p.normal();        // Child normal          (overridden: object decides)
        p.hello();         // Parent static hello   (hidden: the VARIABLE type decides)
        p.callSecret();    // Parent secret         (private methods are never overridden)
        new Child().hello();   // Child static hello
    }
}`,
   tip: ["Quick rule: only non-private, non-static, non-final instance methods can be overridden. Everything else is hidden or simply separate.", "Quick rule: sirf non-private, non-static, non-final instance methods override ho sakte hain. Baaki sab hide hote hain ya bas alag hote hain."]},
  {h: ["Fields are not overridden", "Fields override nahi hote"],
   p: ["Polymorphism works for methods only. A field in a child with the same name as the parent's field does not replace it. Both exist, and which one you read depends on the type of the VARIABLE, not on the real object. This surprises many beginners. The safe habit is to keep fields private and use methods, so the overriding rules protect you.",
       "Polymorphism sirf methods ke liye chalta hai. Child ka field jiska naam parent ke field jaisa ho use replace nahi karta. Dono maujood rehte hain, aur kaun sa padhoge wo VARIABLE ke type par nirbhar karta hai, asli object par nahi. Ye kai beginners ko chaukata hai. Surakshit aadat ye hai ki fields private rakho aur methods use karo, taaki overriding ke rules tumhari raksha karein."],
   code: `class Parent {
    String type = "parent field";
    String getType() { return "parent method"; }
}

class Child extends Parent {
    String type = "child field";                     // hides, does not override
    @Override
    String getType() { return "child method"; }      // overrides
}

public class Main {
    public static void main(String[] args) {
        Parent p = new Child();
        System.out.println(p.type);         // parent field   (variable type decides)
        System.out.println(p.getType());    // child method   (real object decides)

        Child c = new Child();
        System.out.println(c.type);         // child field
        System.out.println(((Parent) c).type);   // parent field
    }
}`},
  {h: ["Overriding equals(), and overloading versus overriding", "equals() override karna, aur overloading vs overriding"],
   p: ["Object's equals(Object) compares references. To compare contents you override it, and the parameter MUST be Object. A famous bug is writing equals(Person other). That is an OVERLOAD (a new method), not an override, so collections and Object-typed calls ignore it. @Override catches this mistake immediately. When you override equals() you should also override hashCode() so that equal objects give the same hash code, because HashMap and HashSet (Phase 4) depend on it.",
       "Object ka equals(Object) references compare karta hai. Contents compare karne ke liye use override karte ho, aur parameter Object HI hona chahiye. Ek mashhoor bug equals(Person other) likhna hai. Ye OVERLOAD (naya method) hai, override nahi, isliye collections aur Object-type wali calls ise ignore karti hain. @Override ye galti turant pakad leta hai. equals() override karo to hashCode() bhi override karna chahiye taaki barabar objects ka hash code same ho, kyunki HashMap aur HashSet (Phase 4) isi par nirbhar hain."],
   code: `import java.util.Objects;

class Person {
    private String name;
    private int age;

    Person(String name, int age) {
        this.name = name;
        this.age = age;
    }

    // WRONG: this is an overload, not an override of equals(Object)
    // public boolean equals(Person other) { ... }

    @Override
    public boolean equals(Object o) {                 // parameter type is Object
        if (this == o) return true;
        if (!(o instanceof Person)) return false;
        Person other = (Person) o;
        return age == other.age && Objects.equals(name, other.name);
    }

    @Override
    public int hashCode() {
        return Objects.hash(name, age);               // same fields as equals()
    }

    @Override
    public String toString() {
        return name + " (" + age + ")";
    }

    public static void main(String[] args) {
        Person a = new Person("Gurleen", 21);
        Person b = new Person("Gurleen", 21);
        System.out.println(a == b);                   // false (different objects)
        System.out.println(a.equals(b));              // true  (same contents)
        System.out.println(a.hashCode() == b.hashCode());   // true
        System.out.println(a);                        // Gurleen (21)
    }
}`,
   pts: [["Overloading: same name, DIFFERENT parameters, chosen at compile time by the declared types.", "Overriding: same name, SAME parameters, chosen at run time by the real object.", "Overloading can happen in one class. Overriding needs a parent and a child.", "Mistake: a different parameter type or spelling, which creates an overload and not an override. Always use @Override.", "Mistake: weaker access (public to protected) or a broader checked exception.", "Mistake: trying to override static, private or final methods.", "Mistake: expecting fields to behave polymorphically.", "Mistake: overriding equals() but not hashCode().", "Good habit: use @Override every time, and use super.method() when you want to keep the parent's behaviour."],
         ["Overloading: same naam, ALAG parameters, compile time par declared types se chuna jata hai.", "Overriding: same naam, SAME parameters, run time par asli object se chuna jata hai.", "Overloading ek class me ho sakti hai. Overriding ke liye parent aur child chahiye.", "Galti: alag parameter type ya spelling, jo overload banata hai override nahi. Hamesha @Override use karo.", "Galti: kamzor access (public se protected) ya bada checked exception.", "Galti: static, private ya final methods ko override karne ki koshish.", "Galti: fields ke polymorphically behave karne ki ummeed.", "Galti: equals() override karna par hashCode() nahi.", "Achhi aadat: har baar @Override use karo, aur parent ka behaviour rakhna ho to super.method() use karo."]],
   tip: ["Interview question: can we override a static method? No. A static method with the same signature in the child hides the parent's one. Can we override a private or final method? No.", "Interview question: kya static method override kar sakte hain? Nahi. Child me same signature wala static method parent wale ko hide karta hai. Kya private ya final method override kar sakte hain? Nahi."]}
 ]}
});

Object.assign(TOPICS, {
27: {
 def: ["Inheritance is the OOP feature that lets a new class (the child, or subclass) reuse the fields and methods of an existing class (the parent, or superclass) using the extends keyword. The child gets everything the parent offers and can add its own things or change inherited behaviour. It models an IS-A relationship: a Dog IS an Animal.",
       "Inheritance OOP ka wo feature hai jisme nayi class (child ya subclass) maujooda class (parent ya superclass) ke fields aur methods ko extends keyword se reuse karti hai. Child ko wo sab milta hai jo parent deta hai, aur wo apni cheezein jod sakta hai ya inherit kiye behaviour ko badal sakta hai. Ye IS-A relationship dikhata hai: Dog ek Animal HAI."],
 secs: [
  {h: ["Why inheritance? The IS-A idea", "Inheritance kyun? IS-A ka idea"],
   p: ["Suppose you build a pet app with Dog, Cat and Bird classes. All of them have a name and an age, and all can eat and sleep. Writing this three times is wasteful, and fixing a bug means fixing it three times. With inheritance you write the common part once in an Animal class, and every specific animal extends it and adds only what is special about it.",
       "Maan lo tum pet app bana rahe ho jisme Dog, Cat aur Bird classes hain. Sabka naam aur umar hoti hai, aur sab khana aur sona kar sakte hain. Ye teen baar likhna bekar hai, aur bug ho to teen jagah theek karna padta hai. Inheritance me common hissa ek Animal class me ek baar likhte ho, aur har khaas animal use extend karke sirf apni khaasiyat jodta hai."],
   pts: [["Code reuse: common code lives in the parent and is written only once.", "Organisation: general things go up in the hierarchy, specific things go down.", "Polymorphism: a parent reference can hold any child object (you will use this in the Polymorphism lesson).", "Test for inheritance: say it aloud. 'A Dog IS an Animal' sounds right, so inheritance fits. 'A Car IS an Engine' sounds wrong, so use HAS-A instead (covered below).", "Terms: parent = superclass = base class. Child = subclass = derived class."],
         ["Code reuse: common code parent me hota hai aur sirf ek baar likha jata hai.", "Organisation: general cheezein hierarchy me upar aur specific cheezein neeche jati hain.", "Polymorphism: parent reference kisi bhi child object ko pakad sakta hai (Polymorphism lesson me ise use karoge).", "Inheritance ka test: bolkar dekho. 'Dog IS an Animal' sahi lagta hai, to inheritance fit hai. 'Car IS an Engine' galat lagta hai, to HAS-A use karo (neeche samjhaya hai).", "Terms: parent = superclass = base class. Child = subclass = derived class."]]},
  {h: ["The extends keyword", "extends keyword"],
   p: ["You write class Child extends Parent. The child object automatically has every non-private field and method of the parent, plus its own. You can call the parent's methods on a child object as if they were written in the child.",
       "Tum class Child extends Parent likhte ho. Child object ke paas apne fields aur methods ke saath parent ke har non-private field aur method apne aap hote hain. Parent ke methods ko child object par aise call kar sakte ho jaise wo child me hi likhe ho."],
   code: `class Animal {
    String name;
    int age;

    void eat() {
        System.out.println(name + " is eating");
    }

    void sleep() {
        System.out.println(name + " is sleeping");
    }
}

class Dog extends Animal {          // Dog gets name, age, eat() and sleep()
    void bark() {                   // and adds something of its own
        System.out.println(name + " says Woof");
    }
}

class Cat extends Animal {
    void meow() {
        System.out.println(name + " says Meow");
    }
}

public class Main {
    public static void main(String[] args) {
        Dog d = new Dog();
        d.name = "Bruno";           // inherited field
        d.eat();                    // inherited method:  Bruno is eating
        d.bark();                   // its own method:    Bruno says Woof

        Cat c = new Cat();
        c.name = "Mia";
        c.sleep();                  // Mia is sleeping
        // c.bark();                // ERROR: Cat has no bark()
    }
}`,
   pts: [["Inheritance goes one way. A Dog is an Animal, but an Animal is not necessarily a Dog, so a parent cannot use the child's extra methods.", "A class can extend only ONE class (no multiple inheritance of classes).", "If you do not write extends, your class automatically extends Object."],
         ["Inheritance ek hi taraf chalti hai. Dog ek Animal hai, par Animal zaroori nahi ki Dog ho, isliye parent child ke extra methods use nahi kar sakta.", "Ek class sirf EK class ko extend kar sakti hai (classes ki multiple inheritance nahi).", "extends na likho to tumhari class apne aap Object ko extend karti hai."]]},
  {h: ["What is inherited and what is not", "Kya inherit hota hai aur kya nahi"],
   p: ["A child inherits public, protected and (if in the same package) default members. It does NOT directly access the parent's private members, although those fields still exist inside every child object. The child reaches them through the parent's public or protected methods. Constructors are never inherited. Static members belong to the class and can be called through the child's name, but they are not overridden.",
       "Child public, protected aur (same package ho to) default members inherit karta hai. Wo parent ke private members ko seedha access NAHI kar sakta, halanki wo fields har child object ke andar maujood rehte hain. Child unhe parent ke public ya protected methods ke through use karta hai. Constructors kabhi inherit nahi hote. Static members class ke hote hain aur child ke naam se call ho sakte hain, par override nahi hote."],
   code: `class Account {
    private double balance;             // private: not directly visible in children
    protected String owner;             // protected: visible in children
    public String bank = "CodeBank";    // public: visible everywhere

    public Account(String owner, double balance) {
        this.owner = owner;
        this.balance = balance;
    }

    public double getBalance() { return balance; }
    protected void setBalance(double b) { balance = b; }
}

class SavingsAccount extends Account {
    private double rate = 0.04;

    public SavingsAccount(String owner, double balance) {
        super(owner, balance);          // explained fully in the super lesson
    }

    void addInterest() {
        // balance += 5;                           // ERROR: balance is private in Account
        double interest = getBalance() * rate;     // use the public getter instead
        setBalance(getBalance() + interest);       // and the protected setter
        System.out.println(owner + " now has " + getBalance());   // owner is protected: fine
    }

    public static void main(String[] args) {
        SavingsAccount s = new SavingsAccount("Himakshi", 1000);
        s.addInterest();                // Himakshi now has 1040.0
        System.out.println(s.bank);     // CodeBank
    }
}`,
   pts: [["private: stays inside the parent class only.", "default (no keyword): inherited only by children in the SAME package.", "protected: inherited by every child, even in another package.", "public: inherited by everyone.", "Constructors, static initializer blocks and instance initializer blocks are not inherited.", "To protect data, keep fields private and give children protected or public methods to use (this is encapsulation working together with inheritance)."],
         ["private: sirf parent class ke andar rehta hai.", "default (koi keyword nahi): sirf SAME package ke children inherit karte hain.", "protected: har child inherit karta hai, dusre package me bhi.", "public: sab inherit karte hain.", "Constructors, static initializer blocks aur instance initializer blocks inherit nahi hote.", "Data bachane ke liye fields private rakho aur children ke liye protected ya public methods do (ye encapsulation aur inheritance ka saath kaam karna hai)."]]},
  {h: ["Types of inheritance", "Inheritance ke types"],
   p: ["The shapes of class hierarchies have names. Single: one child of one parent. Multilevel: a chain, where a child is itself a parent. Hierarchical: one parent with many children. Java does NOT allow multiple inheritance with classes (one child with two parents), because of the diamond problem: if both parents have a method with the same name, which one should the child inherit? Java solves this with interfaces, which a class can implement many of (Interfaces lesson).",
       "Class hierarchies ki shapes ke naam hote hain. Single: ek parent ka ek child. Multilevel: ek chain, jisme child khud bhi parent hota hai. Hierarchical: ek parent aur kai children. Java classes ke saath multiple inheritance (ek child, do parents) allow NAHI karta, kyunki diamond problem hoti hai: dono parents me same naam ka method ho to child kaun sa inherit kare? Java ise interfaces se hal karta hai, jo ek class kai implement kar sakti hai (Interfaces lesson)."],
   code: `// Single: Vehicle -> Car
class Vehicle {
    int speed;
    void move() { System.out.println("Moving at " + speed); }
}
class Car extends Vehicle {
    int doors = 4;
}

// Multilevel: Vehicle -> Car -> ElectricCar
class ElectricCar extends Car {
    int battery = 100;
    void charge() { System.out.println("Charging..."); }
}

// Hierarchical: Animal -> Dog, Animal -> Cat (one parent, many children)
class Animal { void breathe() { System.out.println("Breathing"); } }
class Dog extends Animal { }
class Cat extends Animal { }

// NOT allowed in Java: multiple inheritance of classes
// class Hybrid extends Car, Animal { }      // compile error

public class Main {
    public static void main(String[] args) {
        ElectricCar e = new ElectricCar();
        e.speed = 60;
        e.move();             // from Vehicle, two levels up: Moving at 60
        System.out.println(e.doors + " " + e.battery);   // 4 100
        e.charge();
    }
}`,
   pts: [["Single: A to B. Multilevel: A to B to C. Hierarchical: A to B and A to C.", "Multiple (not allowed for classes): C extends A and B.", "Hybrid: a mix of the above. In Java it works only through interfaces.", "A multilevel child gets the members of ALL its ancestors, up to the top."],
         ["Single: A se B. Multilevel: A se B se C. Hierarchical: A se B aur A se C.", "Multiple (classes ke liye allowed nahi): C extends A aur B.", "Hybrid: upar wale ka mel. Java me ye sirf interfaces ke through chalta hai.", "Multilevel child ko apne SAARE ancestors ke members milte hain, sabse upar tak."]]},
  {h: ["The Object class: the parent of everything", "Object class: sabka parent"],
   p: ["Every class in Java, even one with no extends, secretly extends java.lang.Object. That is why every object has methods like toString(), equals(Object), hashCode() and getClass(), even though you never wrote them. You often override these methods to give them better behaviour (in the next lessons). Object is the root of the whole class tree.",
       "Java ki har class, jisme extends na ho tab bhi, chupchap java.lang.Object ko extend karti hai. Isi wajah se har object ke paas toString(), equals(Object), hashCode() aur getClass() jaise methods hote hain, chahe tumne unhe kabhi likha na ho. Aksar in methods ko behtar behaviour ke liye override karte hain (agle lessons me). Object poore class tree ki jad hai."],
   code: `class Student { }                         // no extends: same as extends Object

public class Main {
    public static void main(String[] args) {
        Student s = new Student();
        System.out.println(s.toString());       // Student@1b6d3586  (from Object)
        System.out.println(s.getClass().getName());   // Student
        System.out.println(s.equals(s));        // true
        System.out.println(s.hashCode());       // some number

        Object o = s;                           // an Object reference can hold anything
        Object text = "hello";
        Object number = 42;                     // autoboxing

        System.out.println(s instanceof Object);    // true: everything IS an Object
        System.out.println(s.getClass().getSuperclass().getName());   // java.lang.Object
    }
}`},
  {h: ["Constructors and inheritance: parent first", "Constructors aur inheritance: pehle parent"],
   p: ["When you create a child object, the parent part must be built first, because the child depends on it. So Java always runs the parent constructor before the child constructor. If you do not call a parent constructor yourself, Java quietly inserts super() as the first line of your constructor. The super keyword gets its own lesson, so here just watch the order.",
       "Child object banate ho to pehle parent wala hissa banna chahiye, kyunki child uspar nirbhar hai. Isliye Java hamesha child constructor se pehle parent constructor chalata hai. Tum khud parent constructor call na karo to Java tumhare constructor ki pehli line me chupchap super() jod deta hai. super keyword ka alag lesson hai, yahan bas order dekho."],
   code: `class Grandparent {
    Grandparent() { System.out.println("Grandparent constructor"); }
}
class Parent extends Grandparent {
    Parent() { System.out.println("Parent constructor"); }
}
class Child extends Parent {
    Child() { System.out.println("Child constructor"); }
}

public class Main {
    public static void main(String[] args) {
        new Child();
        // Grandparent constructor
        // Parent constructor
        // Child constructor
    }
}`,
   pts: [["Construction goes top-down (oldest ancestor first). Destruction by the garbage collector is not something you control.", "If the parent has NO no-argument constructor, the child must call a parent constructor that exists, using super(arguments).", "The error 'constructor X in class X cannot be applied to given types' in a child usually means the parent has no matching constructor."],
         ["Construction upar se neeche chalta hai (sabse purana ancestor pehle). Garbage collector ka destruction tumhare control me nahi hota.", "Parent ka koi no-argument constructor NAHI ho to child ko super(arguments) se maujood parent constructor call karna padta hai.", "Child me 'constructor X in class X cannot be applied to given types' error ka matlab aam taur par parent me matching constructor nahi hai."]]},
  {h: ["Upcasting, downcasting and instanceof", "Upcasting, downcasting aur instanceof"],
   p: ["Because a Dog IS an Animal, you can store a Dog object in an Animal variable. This is upcasting, it is always safe and needs no cast. Through the Animal variable you can use only what Animal has. Going back down (downcasting) needs an explicit cast and can fail with ClassCastException if the object is not really that type. Check with instanceof first.",
       "Kyunki Dog ek Animal HAI, Dog object ko Animal variable me rakh sakte ho. Ye upcasting hai, hamesha safe hai aur cast nahi chahiye. Animal variable se sirf wahi use kar sakte ho jo Animal ke paas hai. Wapas neeche jana (downcasting) ke liye explicit cast chahiye aur object sach me wo type na ho to ClassCastException se fail ho sakta hai. Pehle instanceof se check karo."],
   code: `class Animal { void eat() { System.out.println("eating"); } }
class Dog extends Animal { void bark() { System.out.println("Woof"); } }
class Cat extends Animal { void meow() { System.out.println("Meow"); } }

public class Main {
    public static void main(String[] args) {
        Animal a = new Dog();          // upcasting: safe, automatic
        a.eat();                       // fine: Animal has eat()
        // a.bark();                   // ERROR: the Animal type does not know bark()

        Dog d = (Dog) a;               // downcasting: explicit cast
        d.bark();                      // Woof

        Animal b = new Cat();
        // Dog wrong = (Dog) b;        // compiles, but ClassCastException when it runs

        if (b instanceof Dog) {
            System.out.println("b is a Dog");
        } else if (b instanceof Cat c) {      // Java 16+: test and cast in one step
            c.meow();                         // Meow
        }

        Animal[] zoo = { new Dog(), new Cat(), new Dog() };    // one array, many kinds
        for (Animal x : zoo) x.eat();
    }
}`},
  {h: ["IS-A versus HAS-A, final classes and common mistakes", "IS-A vs HAS-A, final classes aur common mistakes"],
   p: ["Inheritance is IS-A. When one object merely CONTAINS another, use HAS-A, which is called composition: put an object of the other class in a field. A Car HAS an Engine, it is not an Engine. Beginners overuse inheritance; many experts say to prefer composition. A class marked final cannot be extended at all (String is final), and a final method cannot be overridden.",
       "Inheritance IS-A hai. Jab ek object dusre ko sirf RAKHTA hai, to HAS-A use karo, jise composition kehte hain: dusri class ka object field me rakho. Car ke paas Engine HAI, wo Engine nahi hai. Beginners inheritance ka zyada use karte hain; kai experts kehte hain composition ko prefer karo. final class ko extend hi nahi kar sakte (String final hai), aur final method override nahi ho sakta."],
   code: `// HAS-A (composition): a Car contains an Engine
class Engine {
    void start() { System.out.println("Engine started"); }
}

class Car {
    private final Engine engine = new Engine();    // a field, NOT extends
    void drive() {
        engine.start();
        System.out.println("Car is moving");
    }
}

// final class: nobody can extend it
final class Constants { static final double PI = 3.14159; }
// class MyConstants extends Constants { }     // ERROR: cannot inherit from final

public class Main {
    public static void main(String[] args) {
        new Car().drive();
    }
}`,
   pts: [["Mistake: using inheritance only to reuse a method. If the IS-A sentence sounds wrong, use composition.", "Mistake: trying to extend two classes. Use one class and interfaces.", "Mistake: expecting the child to use the parent's private fields directly. Use getters or protected.", "Mistake: forgetting that the child needs a matching parent constructor.", "Mistake: very deep hierarchies (five or more levels) are hard to read. Keep them shallow.", "Mistake: calling a child's own method through a parent reference without downcasting.", "Good habit: put what is common in the parent and what is special in the child.", "Good habit: mark a class final when it was not designed to be extended."],
         ["Galti: sirf ek method reuse karne ke liye inheritance use karna. IS-A wala vakya galat lage to composition use karo.", "Galti: do classes extend karne ki koshish. Ek class aur interfaces use karo.", "Galti: child se parent ke private fields seedha use karne ki ummeed. Getters ya protected use karo.", "Galti: ye bhul jana ki child ko matching parent constructor chahiye.", "Galti: bahut gehri hierarchies (paanch ya zyada levels) padhna mushkil hota hai. Unhe chhoti rakho.", "Galti: parent reference se child ka apna method downcast kiye bina call karna.", "Achhi aadat: jo common hai wo parent me aur jo khaas hai wo child me rakho.", "Achhi aadat: class ko extend karne ke liye design na kiya ho to use final mark karo."]],
   tip: ["Interview question: why does Java not support multiple inheritance of classes? Because of the diamond problem and ambiguity. Interfaces give the useful part of it safely.", "Interview question: Java classes ki multiple inheritance kyun support nahi karta? Diamond problem aur ambiguity ki wajah se. Interfaces uska kaam ka hissa safely dete hain."]}
 ]},
28: {
 def: ["The super keyword refers to the PARENT-class part of the current object. It has three uses: super.field reaches a parent's field that a child field is hiding, super.method() calls the parent's version of a method that the child has overridden, and super(...) calls a parent constructor from the child's constructor.",
       "super keyword current object ke PARENT-class wale hisse ko refer karta hai. Iske teen use hain: super.field us parent field tak pahunchta hai jo child ke field ne chhupa diya ho, super.method() parent ka wo version call karta hai jo child ne override kiya ho, aur super(...) child ke constructor se parent constructor call karta hai."],
 secs: [
  {h: ["What super means", "super ka matlab"],
   p: ["Inside a child class, this means the current object seen as the child, and super means the same object seen as its parent. There is only ONE object in memory. super does not create a second object. It just tells Java to look for a name in the parent class instead of the child class. This matters when the child has something with the same name as the parent.",
       "Child class ke andar this ka matlab current object ko child ki tarah dekhna hai, aur super ka matlab wahi object parent ki tarah dekhna. Memory me sirf EK object hota hai. super dusra object nahi banata. Ye bas Java ko batata hai ki naam ko child class ki jagah parent class me dhundho. Ye tab zaroori hota hai jab child ke paas parent jaisa hi naam ki koi cheez ho."],
   pts: [["super.something looks one level UP, in the direct parent class.", "To reach a grandparent, the parent must offer it. You cannot write super.super.", "super works only inside instance methods and constructors. There is no super in a static method (just like this).", "super does NOT mean 'create the parent object'. The parent part is built by the parent constructor, which super(...) calls."],
         ["super.something ek level UPAR, seedhe parent class me dhundta hai.", "Grandparent tak pahunchne ke liye parent ko wo cheez deni padti hai. super.super likh nahi sakte.", "super sirf instance methods aur constructors ke andar chalta hai. Static method me super nahi hota (this ki tarah).", "super ka matlab 'parent object banao' NAHI hai. Parent wala hissa parent constructor banata hai, jise super(...) call karta hai."]]},
  {h: ["Use 1: super.field to reach a hidden parent field", "Use 1: super.field se chhupe hue parent field tak"],
   p: ["If a child declares a field with the same name as a parent's field, the child's field hides the parent's (field hiding). Both exist in the object. Plain name and this.name give the child's one, and super.name gives the parent's. In real code this is better avoided, but you must understand it.",
       "Child parent ke field jaisa hi naam ka field declare kare to child ka field parent ke field ko chhupa deta hai (field hiding). Dono object me maujood rehte hain. Seedha naam aur this.name child wala dete hain, aur super.name parent wala deta hai. Real code me isse bachna behtar hai, par samajhna zaroori hai."],
   code: `class Parent {
    String name = "Parent's name";
    int value = 10;
}

class Child extends Parent {
    String name = "Child's name";          // hides Parent's name

    void show() {
        String name = "local name";        // hides the field in this method
        System.out.println(name);          // local name
        System.out.println(this.name);     // Child's name
        System.out.println(super.name);    // Parent's name
        System.out.println(value);         // 10: inherited, no clash, no super needed
    }

    public static void main(String[] args) {
        new Child().show();
    }
}`},
  {h: ["Use 2: super.method() to extend, not replace", "Use 2: super.method() se replace nahi, extend karna"],
   p: ["When a child overrides a method, it replaces the parent's version for child objects. Often you do not want to throw the parent's work away, you want to add something. Calling super.method() runs the parent's version first (or last, or in the middle), so the child adds to the behaviour instead of rewriting it. If you forget the super call, the parent's code is skipped.",
       "Child method override kare to child objects ke liye parent ka version badal jata hai. Aksar tum parent ka kaam fenkna nahi chahte, kuch jodna chahte ho. super.method() parent ka version chalata hai (pehle, baad me ya beech me), jisse child behaviour ko dobara likhne ki jagah usme jodta hai. super call bhul gaye to parent ka code skip ho jata hai."],
   code: `class Employee {
    String name;
    double salary;

    Employee(String name, double salary) {
        this.name = name;
        this.salary = salary;
    }

    void showDetails() {
        System.out.println("Name: " + name);
        System.out.println("Salary: " + salary);
    }

    double yearlyPay() { return salary * 12; }
}

class Manager extends Employee {
    double bonus;

    Manager(String name, double salary, double bonus) {
        super(name, salary);
        this.bonus = bonus;
    }

    @Override
    void showDetails() {
        super.showDetails();                       // reuse the parent's printing
        System.out.println("Bonus: " + bonus);     // then add the manager part
    }

    @Override
    double yearlyPay() {
        return super.yearlyPay() + bonus;          // parent's calculation + bonus
    }

    public static void main(String[] args) {
        Manager m = new Manager("Shivam", 50000, 20000);
        m.showDetails();
        // Name: Shivam
        // Salary: 50000.0
        // Bonus: 20000.0
        System.out.println(m.yearlyPay());         // 620000.0
    }
}`,
   tip: ["Without super.showDetails() the manager's output would miss the name and the salary. The call can go anywhere in the method, but usually it comes first.", "super.showDetails() ke bina manager ke output me naam aur salary nahi aate. Call method me kahin bhi ho sakta hai, par aam taur par pehle aata hai."]},
  {h: ["Use 3: super(...) calls the parent constructor", "Use 3: super(...) parent constructor call karta hai"],
   p: ["Because the parent part of an object has to be built first, every child constructor must call a parent constructor. You do it with super(arguments), and it MUST be the first statement. The arguments choose WHICH parent constructor runs. The child constructor then continues and sets up its own fields. This is how the child passes values up to the parent, and it is the clean way to avoid repeating the parent's setup code.",
       "Kyunki object ka parent wala hissa pehle banna chahiye, har child constructor ko parent constructor call karna padta hai. Ye super(arguments) se karte ho, aur ye PEHLA statement hona ZAROORI hai. Arguments tay karte hain ki parent ka KAUN SA constructor chalega. Uske baad child constructor aage badhta hai aur apne fields set karta hai. Is tarah child values parent ko bhejta hai, aur parent ka setup code dohrane se bachne ka ye saaf tareeka hai."],
   code: `class Person {
    String name;
    int age;

    Person(String name, int age) {
        this.name = name;
        this.age = age;
        System.out.println("Person created: " + name);
    }
}

class Student extends Person {
    int rollNo;

    Student(String name, int age, int rollNo) {
        super(name, age);              // FIRST statement: sends name and age up
        this.rollNo = rollNo;
        System.out.println("Student created: " + rollNo);
    }

    public static void main(String[] args) {
        Student s = new Student("Gurleen", 20, 7);
        // Person created: Gurleen
        // Student created: 7
        System.out.println(s.name + " " + s.age + " " + s.rollNo);   // Gurleen 20 7
    }
}`,
   pts: [["super(...) must be the first line of the constructor. You cannot use both this(...) and super(...) in the same constructor, because each needs to be first.", "The arguments must match one of the parent's constructors. The compiler checks this.", "A child constructor that uses this(...) lets the other constructor make the super(...) call.", "Do not call super(...) in a normal method. It works only in constructors."],
         ["super(...) constructor ki pehli line honi chahiye. Ek hi constructor me this(...) aur super(...) dono use nahi kar sakte, kyunki dono ko pehla hona hai.", "Arguments parent ke kisi constructor se match hone chahiye. Compiler ye check karta hai.", "Jo child constructor this(...) use karta hai wo super(...) call dusre constructor par chhod deta hai.", "Normal method me super(...) call mat karo. Ye sirf constructors me chalta hai."]]},
  {h: ["The hidden super(): the implicit call and the classic error", "Chhupa hua super(): implicit call aur classic error"],
   p: ["If you do not write super(...) yourself, the compiler adds super(); (the no-argument call) as the first line of the child constructor. That is fine as long as the parent has a no-argument constructor. Trouble starts when the parent has ONLY parameterized constructors, because then there is nothing for the hidden super() to call. The compiler reports an error on the child. The fix is to write super(...) yourself with the right arguments, or to add a no-argument constructor to the parent.",
       "super(...) khud na likho to compiler child constructor ki pehli line me super(); (no-argument call) jod deta hai. Ye tab tak theek hai jab tak parent ka no-argument constructor ho. Dikkat tab hoti hai jab parent ke paas SIRF parameterized constructors ho, kyunki tab chhupe hue super() ke liye kuch call karne ko nahi hota. Compiler child par error deta hai. Fix ye hai ki sahi arguments ke saath super(...) khud likho, ya parent me no-argument constructor jodo."],
   code: `class Vehicle {
    String brand;
    Vehicle(String brand) {            // ONLY a parameterized constructor
        this.brand = brand;
    }
}

// ERROR version: the compiler inserts super() but Vehicle() does not exist
// class Bike extends Vehicle {
//     Bike() { }          // error: constructor Vehicle in class Vehicle cannot be applied to given types
// }

// FIX 1: call the parent constructor that exists
class Bike extends Vehicle {
    Bike() {
        super("Hero");
    }
}

// FIX 2: give the parent a no-argument constructor instead
class Truck {
    String brand;
    Truck() { brand = "Unknown"; }
    Truck(String brand) { this.brand = brand; }
}
class Lorry extends Truck {
    Lorry() { }            // the hidden super() now finds Truck()
}`,
   tip: ["If a child class shows a compile error right on its constructor (or on the class line), the parent probably has no no-argument constructor. Add super(...) with arguments.", "Child class ke constructor (ya class wali line) par hi compile error dikhe to parent ke paas shayad no-argument constructor nahi hai. Arguments ke saath super(...) lagao."]},
  {h: ["Order of execution with super", "super ke saath execution ka order"],
   p: ["Execution always starts at the top of the chain. Even though you call new on the youngest child, the parent constructors run first, one after another, and then the child's own body. A parent constructor that calls an overridable method can cause strange bugs, because that method may run in the child before the child's fields are set. Avoid calling overridable methods from constructors.",
       "Execution hamesha chain ke sabse upar se shuru hota hai. Sabse chhote child par new call karne par bhi pehle parent constructors ek ke baad ek chalte hain, fir child ki apni body. Parent constructor jo overridable method call kare wo ajeeb bugs la sakta hai, kyunki wo method child me child ke fields set hone se pehle chal sakta hai. Constructors se overridable methods call karne se bacho."],
   code: `class A {
    A() {
        System.out.println("A()");
        hello();                       // dangerous: calls the child's version!
    }
    void hello() { System.out.println("hello from A"); }
}

class B extends A {
    String msg = "set in B";
    B() {
        super();                       // runs A() first
        System.out.println("B() msg=" + msg);
    }
    @Override
    void hello() {
        System.out.println("hello from B, msg=" + msg);   // msg is still null here!
    }

    public static void main(String[] args) {
        new B();
        // A()
        // hello from B, msg=null       <- B's field is not set yet
        // B() msg=set in B
    }
}`},
  {h: ["super versus this", "super vs this"],
   p: ["The two keywords look similar but do different jobs. The table below, in words, helps you decide which one to use.",
       "Dono keywords ek jaise dikhte hain par alag kaam karte hain. Neeche ki baatein batati hain ki kaun sa use karna hai."],
   pts: [["this = the current object, searched from the current class. super = the same object, searched from the parent class.", "this.field and super.field: child's own field versus parent's field.", "this.method() and super.method(): the version visible from the current class (possibly overridden) versus the parent's version.", "this(...) calls another constructor of the SAME class. super(...) calls a constructor of the PARENT class.", "Both must be the first statement in a constructor, so only ONE of them can be used in one constructor.", "Neither can be used in a static method, because a static method has no object.", "this can be passed around and returned. super cannot be stored or passed. It is only a way of reaching parent members."],
         ["this = current object, current class se dhundta hai. super = wahi object, parent class se dhundta hai.", "this.field aur super.field: child ka apna field versus parent ka field.", "this.method() aur super.method(): current class se dikhne wala version (shayad overridden) versus parent ka version.", "this(...) SAME class ka dusra constructor call karta hai. super(...) PARENT class ka constructor call karta hai.", "Dono constructor ka pehla statement hone chahiye, isliye ek constructor me sirf EK hi use ho sakta hai.", "Dono static method me use nahi ho sakte, kyunki static method ka koi object nahi hota.", "this ko pass aur return kar sakte ho. super ko store ya pass nahi kar sakte. Ye sirf parent members tak pahunchne ka tareeka hai."]]},
  {h: ["A complete example and common mistakes", "Ek poora example aur common mistakes"],
   p: ["This program uses all three forms of super together: a constructor call, a method call and field access through the parent. Read it slowly and predict the output before you run it.",
       "Ye program super ke teeno rup ek saath use karta hai: constructor call, method call aur parent ke through field access. Dheere padho aur chalane se pehle output ka andaza lagao."],
   code: `class Shape {
    protected String color;

    Shape(String color) {
        this.color = color;
    }

    String describe() {
        return "A " + color + " shape";
    }
}

class Circle extends Shape {
    private double radius;

    Circle(String color, double radius) {
        super(color);                         // use 3: constructor
        this.radius = radius;
    }

    @Override
    String describe() {
        return super.describe() + " (circle, radius " + radius + ")";    // use 2: method
    }

    double area() {
        return Math.PI * radius * radius;
    }

    public static void main(String[] args) {
        Circle c = new Circle("red", 2);
        System.out.println(c.describe());       // A red shape (circle, radius 2.0)
        System.out.printf("%.2f%n", c.area());  // 12.57
    }
}`,
   pts: [["Mistake: writing something before super(...). It must be the first statement.", "Mistake: forgetting super(...) when the parent has only parameterized constructors.", "Mistake: calling super(...) from a normal method.", "Mistake: using super.super.method(). It does not exist.", "Mistake: expecting super to create a separate parent object. There is only one object.", "Mistake: forgetting super.method() inside an override and losing the parent's behaviour.", "Mistake: using super in a static method or in main.", "Good habit: use super.method() to extend behaviour and avoid copying the parent's code into the child."],
         ["Galti: super(...) se pehle kuch likhna. Wo pehla statement hona chahiye.", "Galti: parent ke sirf parameterized constructors ho to super(...) bhul jana.", "Galti: normal method se super(...) call karna.", "Galti: super.super.method() likhna. Ye exist nahi karta.", "Galti: super se alag parent object banne ki ummeed. Sirf ek hi object hai.", "Galti: override ke andar super.method() bhulkar parent ka behaviour kho dena.", "Galti: static method ya main me super use karna.", "Achhi aadat: behaviour ko extend karne ke liye super.method() use karo aur parent ka code child me copy mat karo."]],
   tip: ["Interview question: can we call super() and this() in the same constructor? No. Each must be the first statement, so only one is allowed.", "Interview question: kya ek hi constructor me super() aur this() dono call kar sakte hain? Nahi. Dono ko pehla statement hona hai, isliye sirf ek allowed hai."]}
 ]},
29: {
 def: ["Method overloading means writing several methods with the SAME name in the same class, but with DIFFERENT parameter lists (different number, types or order of parameters). Java decides which one to run by looking at the arguments in the call, and it decides this at compile time, so it is also called compile-time or static polymorphism.",
       "Method overloading ka matlab ek hi class me SAME naam ke kai methods likhna, par DIFFERENT parameter lists ke saath (parameters ki alag ginti, types ya order). Java call ke arguments dekhkar tay karta hai ki kaun sa chalana hai, aur ye compile time par tay hota hai, isliye ise compile-time ya static polymorphism bhi kehte hain."],
 secs: [
  {h: ["Why overloading?", "Overloading kyun?"],
   p: ["Without overloading you would need a different name for every version of the same idea: addInts, addDoubles, addThreeInts, addStrings. That is hard to remember. With overloading you simply call add and give it the data you have, and Java picks the right version. You have already used overloading: System.out.println() accepts an int, a double, a char, a String and many other types, and Math.max works for int, long, float and double.",
       "Overloading ke bina ek hi idea ke har version ke liye alag naam chahiye hota: addInts, addDoubles, addThreeInts, addStrings. Ye yaad rakhna mushkil hai. Overloading me bas add call karte ho aur jo data hai wo dete ho, aur Java sahi version chun leta hai. Overloading tum pehle hi use kar chuke ho: System.out.println() int, double, char, String aur kai types leta hai, aur Math.max int, long, float aur double ke liye chalta hai."],
   pts: [["Same name tells the reader it is the same idea. Different parameters tell Java which version to run.", "Overloading happens inside ONE class (or between a class and its child, using inherited methods).", "The choice is made by the compiler using the declared types of the arguments, before the program runs.", "It makes an API easy to use: fewer names to learn."],
         ["Same naam padhne wale ko batata hai ki idea same hai. Alag parameters Java ko batate hain ki kaun sa version chalana hai.", "Overloading EK class ke andar hoti hai (ya class aur uske child ke beech, inherited methods ke saath).", "Choice compiler arguments ke declared types dekhkar karta hai, program chalne se pehle.", "Isse API use karna aasan hota hai: seekhne ke liye kam naam."]]},
  {h: ["The three ways to overload", "Overload karne ke teen tareeke"],
   p: ["The parameter list must differ in at least one of these: the NUMBER of parameters, the TYPES of parameters, or the ORDER of the types. Changing only the parameter NAMES does not count, and neither does changing only the return type.",
       "Parameter list in me se kam se kam ek cheez me alag honi chahiye: parameters ki GINTI, parameters ke TYPES, ya types ka ORDER. Sirf parameter ke NAAM badalna ginta nahi, aur sirf return type badalna bhi nahi."],
   code: `public class Calculator {
    // 1) different NUMBER of parameters
    int add(int a, int b) {
        return a + b;
    }
    int add(int a, int b, int c) {
        return a + b + c;
    }

    // 2) different TYPES of parameters
    double add(double a, double b) {
        return a + b;
    }
    String add(String a, String b) {
        return a + b;                       // joins text
    }

    // 3) different ORDER of types
    void show(String name, int marks) {
        System.out.println(name + " scored " + marks);
    }
    void show(int marks, String name) {
        System.out.println(marks + " marks: " + name);
    }

    public static void main(String[] args) {
        Calculator c = new Calculator();
        System.out.println(c.add(2, 3));              // 5       (int, int)
        System.out.println(c.add(2, 3, 4));           // 9       (three ints)
        System.out.println(c.add(1.5, 2.5));          // 4.0     (double, double)
        System.out.println(c.add("Java", "21"));      // Java21  (String, String)
        c.show("Himakshi", 90);                       // Himakshi scored 90
        c.show(90, "Himakshi");                       // 90 marks: Himakshi
    }
}`},
  {h: ["What does NOT count as overloading", "Kya overloading nahi mana jata"],
   p: ["Two methods with the same name and the same parameter types are the same method for Java, even if their return types, parameter names or access modifiers differ. Java cannot choose between them from a call like add(2, 3), because the return type is not part of the call. This is a compile error.",
       "Same naam aur same parameter types wale do methods Java ke liye ek hi method hain, chahe unke return types, parameter names ya access modifiers alag ho. Java add(2, 3) jaisi call se unme se chun nahi sakta, kyunki return type call ka hissa nahi hota. Ye compile error hai."],
   code: `class Wrong {
    int add(int a, int b) { return a + b; }

    // ERROR: method add(int, int) is already defined
    // double add(int a, int b) { return a + b; }       // only the return type differs

    // ERROR: same parameter types, only the names differ
    // int add(int x, int y) { return x + y; }

    // ERROR: only the access modifier differs
    // private int add(int a, int b) { return a - b; }

    // ERROR: only the exceptions differ
    // int add(int a, int b) throws Exception { return a + b; }
}

// Overloading is fine when the parameter types differ:
class Right {
    int add(int a, int b) { return a + b; }
    double add(double a, double b) { return a + b; }    // OK
}`,
   pts: [["Not enough: a different return type, different parameter names, different access modifier, different throws clause, or static versus non-static alone.", "Enough: a different number of parameters, a different type in any position, or a different order of types.", "int... (varargs) and int[] are the same signature, so you cannot have both."],
         ["Kaafi nahi: alag return type, alag parameter names, alag access modifier, alag throws clause, ya akela static versus non-static.", "Kaafi hai: parameters ki alag ginti, kisi bhi position par alag type, ya types ka alag order.", "int... (varargs) aur int[] ki signature same hai, isliye dono nahi rakh sakte."]]},
  {h: ["How Java chooses: the resolution order", "Java kaise chunta hai: resolution order"],
   p: ["When several overloads could accept the call, Java tries these steps in order and stops at the first one that works. Phase 1: an exact match or a widening of a primitive (int to long). Phase 2: boxing or unboxing (int to Integer). Phase 3: varargs. If more than one method fits equally well in the same phase, the call is ambiguous and the compiler refuses it.",
       "Kai overloads call accept kar sakte hon to Java ye steps order me try karta hai aur pehle chalne wale par ruk jata hai. Phase 1: exact match ya primitive ka widening (int se long). Phase 2: boxing ya unboxing (int se Integer). Phase 3: varargs. Ek hi phase me ek se zyada methods barabar fit hon to call ambiguous hoti hai aur compiler use mana kar deta hai."],
   code: `public class Resolve {
    static void show(long x)     { System.out.println("long"); }
    static void show(Integer x)  { System.out.println("Integer"); }
    static void show(int... x)   { System.out.println("varargs"); }

    static void print(int x)     { System.out.println("int " + x); }
    static void print(double x)  { System.out.println("double " + x); }
    static void print(char x)    { System.out.println("char " + x); }
    static void print(Object x)  { System.out.println("Object " + x); }
    static void print(String x)  { System.out.println("String " + x); }

    public static void main(String[] args) {
        show(5);        // long: widening wins over boxing and varargs
        // Remove show(long) and it prints Integer. Remove that too and it prints varargs.

        print(10);          // int 10      (exact match)
        print(10.5);        // double 10.5 (exact match)
        print('A');         // char A      (exact match, NOT int)
        print(10L);         // double 10.0 (long widens to double, no long version exists)
        print("hi");        // String hi   (the most specific type wins over Object)
        print(new int[0]);  // Object [I@...  (only Object accepts it)
        byte b = 7;
        print(b);           // int 7       (byte widens to int, the nearest wider type)
    }
}`,
   pts: [["Exact match always wins. Otherwise the NEAREST wider primitive is chosen (byte to short to int to long to float to double).", "Widening beats boxing, and boxing beats varargs.", "With classes, the MOST SPECIFIC type wins: String is more specific than Object.", "The decision uses the declared type of the variable, not the real object. Object o = \"hi\"; print(o) calls print(Object).", "char and int are different overloads. print('A') shows the letter, and print('A' + 1) shows the number 66, because the addition gives an int."],
         ["Exact match hamesha jeetta hai. Warna sabse NAZDIKI wider primitive chuna jata hai (byte se short se int se long se float se double).", "Widening boxing se jeetti hai, aur boxing varargs se.", "Classes me SABSE SPECIFIC type jeetta hai: String, Object se zyada specific hai.", "Decision variable ke declared type se hota hai, asli object se nahi. Object o = \"hi\"; print(o) print(Object) call karta hai.", "char aur int alag overloads hain. print('A') letter dikhata hai, aur print('A' + 1) number 66 dikhata hai, kyunki addition int deta hai."]]},
  {h: ["Ambiguity and null", "Ambiguity aur null"],
   p: ["The compiler gives an error when two overloads are equally good. The classic case is passing null when two reference types could take it, or passing arguments where each method fits one parameter better than the other. The fix is a cast that tells Java which one you mean, or redesigning the overloads.",
       "Jab do overloads barabar achhe hon to compiler error deta hai. Classic case null pass karna hai jab do reference types use le sakte hon, ya aise arguments jahan har method ek parameter ke liye behtar fit ho. Fix ek cast hai jo Java ko batata hai ki tum kaun sa chahte ho, ya overloads ko dobara design karna."],
   code: `public class Ambiguous {
    static void f(String s)  { System.out.println("String"); }
    static void f(Integer i) { System.out.println("Integer"); }

    static void g(int a, double b) { System.out.println("int, double"); }
    static void g(double a, int b) { System.out.println("double, int"); }

    static void h(Object o)  { System.out.println("Object"); }
    static void h(String s)  { System.out.println("String"); }

    public static void main(String[] args) {
        // f(null);              // ERROR: reference to f is ambiguous (String or Integer?)
        f((String) null);        // OK: the cast chooses String

        // g(1, 2);              // ERROR: both g methods need one widening, so neither is better
        g(1, 2.0);               // int, double
        g(1.0, 2);               // double, int

        h(null);                 // String: String is more specific than Object, so no error
    }
}`},
  {h: ["Overloading constructors, static methods, varargs and main", "Constructors, static methods, varargs aur main ki overloading"],
   p: ["Constructors can be overloaded in the same way (you saw this in the Constructors lesson). Static methods can be overloaded too. A varargs method (int... nums) can accept any number of values, so it replaces many overloads. You can even overload main, but the JVM only starts the program from the exact main(String[] args).",
       "Constructors ko bhi isi tarah overload kar sakte ho (Constructors lesson me dekha tha). Static methods bhi overload ho sakte hain. Varargs method (int... nums) kitni bhi values le sakta hai, isliye kai overloads ki jagah leta hai. main ko bhi overload kar sakte ho, par JVM program sirf exact main(String[] args) se shuru karta hai."],
   code: `public class Overloads {
    // constructors
    String label;
    Overloads()            { this("none"); }
    Overloads(String label) { this.label = label; }

    // static overloads
    static int max(int a, int b)             { return a > b ? a : b; }
    static int max(int a, int b, int c)      { return max(max(a, b), c); }
    static double max(double a, double b)    { return a > b ? a : b; }

    // varargs replaces a whole family of overloads
    static int sum(int... nums) {
        int t = 0;
        for (int n : nums) t += n;
        return t;
    }

    // an overloaded main: only the String[] version starts the program
    public static void main(String[] args) {
        System.out.println(max(3, 9));          // 9
        System.out.println(max(3, 9, 5));       // 9
        System.out.println(max(2.5, 1.5));      // 2.5
        System.out.println(sum());              // 0
        System.out.println(sum(1, 2, 3, 4));    // 10
        System.out.println(new Overloads().label);   // none
        main(5);                                 // calls the other main
    }

    static void main(int n) {
        System.out.println("Overloaded main with " + n);
    }
}`,
   pts: [["A varargs overload is chosen last, so a method with exact parameters wins over it.", "A class cannot have both sum(int... a) and sum(int[] a).", "Use varargs when the count really varies. Use separate overloads when each form does something different.", "Overloading is decided for each class, so a child class can add new overloads of an inherited method name."],
         ["Varargs overload sabse aakhir me chuna jata hai, isliye exact parameters wala method uspar jeetta hai.", "Ek class me sum(int... a) aur sum(int[] a) dono nahi ho sakte.", "Ginti sach me badalti ho to varargs use karo. Har form alag kaam karta ho to alag overloads use karo.", "Overloading har class ke liye tay hoti hai, isliye child class inherited method naam ke naye overloads jod sakti hai."]]},
  {h: ["Real examples: area and a formatter", "Real examples: area aur formatter"],
   p: ["Here overloading makes a clean API. One method name, area, works for a square, a rectangle and a circle, and a describe method accepts the data in whichever form the caller has it.",
       "Yahan overloading ek saaf API banati hai. Ek hi method naam, area, square, rectangle aur circle ke liye chalta hai, aur describe method data ko jis bhi form me caller ke paas ho usme leta hai."],
   code: `public class Geometry {
    static double area(double side) {                  // square
        return side * side;
    }

    static double area(double length, double width) {  // rectangle
        return length * width;
    }

    static double area(double radius, boolean isCircle) {   // circle, with a flag so it differs
        return Math.PI * radius * radius;
    }

    static String describe(int marks) {
        return marks + " marks";
    }

    static String describe(String name, int marks) {
        return name + " has " + marks + " marks";
    }

    static String describe(int[] marks) {
        int total = 0;
        for (int m : marks) total += m;
        return "Total " + total;
    }

    public static void main(String[] args) {
        System.out.println(area(4));                  // 16.0
        System.out.println(area(4, 5));               // 20.0
        System.out.printf("%.2f%n", area(3, true));   // 28.27
        System.out.println(describe(80));             // 80 marks
        System.out.println(describe("Mohit", 80));    // Mohit has 80 marks
        System.out.println(describe(new int[]{70, 80, 90}));   // Total 240
    }
}`},
  {h: ["Overloading versus overriding, and common mistakes", "Overloading vs overriding aur common mistakes"],
   p: ["Beginners mix up these two words all the time. Overloading: same name, different parameters, usually in ONE class, chosen at COMPILE time. Overriding: same name AND same parameters, in a CHILD class that redefines an inherited method, chosen at RUN time (next lesson). Remember it as: over-LOAD means more versions loaded in the same place, over-RIDE means riding over the parent's version.",
       "Beginners in do shabdon ko hamesha mix karte hain. Overloading: same naam, alag parameters, aam taur par EK class me, COMPILE time par chuna jata hai. Overriding: same naam AUR same parameters, CHILD class me jo inherited method ko dobara define karti hai, RUN time par chuna jata hai (agla lesson). Aise yaad rakho: over-LOAD ka matlab ek hi jagah zyada versions load hona, over-RIDE ka matlab parent ke version ke upar sawaar hona."],
   pts: [["Overloading: different parameter list, return type free, any class, compile-time (static) polymorphism.", "Overriding: same parameter list, return type same or narrower, parent and child, runtime (dynamic) polymorphism.", "Mistake: expecting a different return type alone to overload a method.", "Mistake: using many overloads that differ only in the order of the same types, which are easy to call by mistake.", "Mistake: forgetting that print(null) and similar calls can be ambiguous.", "Mistake: assuming Java picks the overload from the real object. It uses the declared type of the variable.", "Mistake: passing a char and getting an int version, or the other way around.", "Good habit: overloads should do the same job in different forms. If they do different jobs, give them different names."],
         ["Overloading: alag parameter list, return type free, koi bhi class, compile-time (static) polymorphism.", "Overriding: same parameter list, return type same ya narrower, parent aur child, runtime (dynamic) polymorphism.", "Galti: sirf alag return type se method overload hone ki ummeed.", "Galti: aise bahut saare overloads jo sirf same types ke order se alag ho, jinhe galti se call karna aasan hai.", "Galti: ye bhul jana ki print(null) jaisi calls ambiguous ho sakti hain.", "Galti: ye maanna ki Java asli object se overload chunta hai. Wo variable ka declared type use karta hai.", "Galti: char pass karke int version milna, ya ulta.", "Achhi aadat: overloads ek hi kaam alag forms me karein. Alag kaam karte ho to unhe alag naam do."]],
   tip: ["Interview question: can we overload main()? Yes, but the JVM calls only public static void main(String[] args) to start. Can we overload by return type only? No.", "Interview question: kya main() ko overload kar sakte hain? Haan, par JVM shuru karne ke liye sirf public static void main(String[] args) call karta hai. Kya sirf return type se overload kar sakte hain? Nahi."]}
 ]},
30: {
 def: ["Method overriding means a child class provides its OWN version of a method that it inherited from its parent, using the same name, the same parameters and a compatible return type. When you call that method on a child object, Java runs the child's version, and it decides this at run time from the real object, not from the variable type. This is runtime (dynamic) polymorphism.",
       "Method overriding ka matlab child class parent se inherit kiye hue method ka APNA version deti hai, same naam, same parameters aur compatible return type ke saath. Us method ko child object par call karne par Java child ka version chalata hai, aur ye run time par asli object se tay hota hai, variable ke type se nahi. Ye runtime (dynamic) polymorphism hai."],
 secs: [
  {h: ["Why override?", "Override kyun?"],
   p: ["The parent gives general behaviour that is not right for every child. An Animal can makeSound(), but a Dog barks, a Cat meows and a Cow moos. The parent defines the idea once, and each child fills in its own correct version. The big payoff comes later: code written for the parent type (a method taking an Animal) automatically does the right thing for every child, including children invented in the future.",
       "Parent general behaviour deta hai jo har child ke liye sahi nahi hota. Animal makeSound() kar sakta hai, par Dog bhaunkta hai, Cat meow karti hai aur Cow ambha karti hai. Parent idea ek baar define karta hai, aur har child apna sahi version bharta hai. Bada fayda aage milta hai: parent type ke liye likha code (jo Animal leta ho) har child ke liye, bhavishya me bane children ke liye bhi, apne aap sahi kaam karta hai."],
   code: `class Animal {
    void makeSound() {
        System.out.println("Some generic animal sound");
    }
}

class Dog extends Animal {
    @Override
    void makeSound() {                     // same name, same parameters
        System.out.println("Woof");
    }
}

class Cat extends Animal {
    @Override
    void makeSound() {
        System.out.println("Meow");
    }
}

class Fish extends Animal { }              // does not override: uses the parent's version

public class Main {
    public static void main(String[] args) {
        new Animal().makeSound();   // Some generic animal sound
        new Dog().makeSound();      // Woof
        new Cat().makeSound();      // Meow
        new Fish().makeSound();     // Some generic animal sound
    }
}`},
  {h: ["The rules of overriding", "Overriding ke rules"],
   p: ["Overriding has strict rules so that a child can always be used wherever its parent is expected. Break one of them and the compiler refuses the code.",
       "Overriding ke sakht rules hain taaki child ko hamesha wahan use kiya ja sake jahan parent ki ummeed ho. Inme se ek bhi todo to compiler code mana kar deta hai."],
   pts: [["Same method name and the same parameter list (same signature). Different parameters would be overloading, not overriding.", "The return type must be the same, or a subtype of the parent's return type (a covariant return, shown below). For primitives it must be exactly the same.", "The access level must be the same or MORE open. A public parent method cannot become protected or private in the child. A protected one can become public.", "The child cannot throw broader or new checked exceptions than the parent method declares. It may throw fewer or narrower ones. (Exceptions come in Phase 4.)", "The parent method must be inherited: it cannot be private, and it cannot be final or static (see the next sections).", "Only instance methods are overridden. Fields, constructors and static methods are not.", "A child can override a method from any ancestor, not only the direct parent."],
         ["Same method naam aur same parameter list (same signature). Alag parameters overloading hogi, overriding nahi.", "Return type same hona chahiye, ya parent ke return type ka subtype (covariant return, neeche dikhaya hai). Primitives ke liye bilkul same hona chahiye.", "Access level same ya ZYADA khula hona chahiye. Public parent method child me protected ya private nahi ho sakta. Protected wala public ban sakta hai.", "Child parent method ke declare kiye gaye se bade ya naye checked exceptions nahi fenk sakta. Kam ya narrower fenk sakta hai. (Exceptions Phase 4 me aate hain.)", "Parent method inherit hona chahiye: wo private nahi ho sakta, aur final ya static bhi nahi (aage ke sections dekho).", "Sirf instance methods override hote hain. Fields, constructors aur static methods nahi.", "Child kisi bhi ancestor ka method override kar sakta hai, sirf seedhe parent ka nahi."]]},
  {h: ["The @Override annotation", "@Override annotation"],
   p: ["@Override is a note you put above a method to tell the compiler 'I mean to override a parent method'. The compiler then checks it. If no matching parent method exists, because of a typo, a wrong parameter type or a wrong capital letter, you get an error at once. Without it, a tiny mistake silently creates a brand new method that overrides nothing, and your child's code is never called. It is not required, but you should ALWAYS write it.",
       "@Override ek note hai jo method ke upar lagate ho, compiler ko batane ke liye 'main parent ka method override karna chahta hoon'. Compiler fir use check karta hai. Typo, galat parameter type ya galat capital letter ki wajah se matching parent method na ho to turant error milta hai. Iske bina chhoti galti chupchap bilkul naya method bana deti hai jo kuch override nahi karta, aur child ka code kabhi call nahi hota. Ye zaroori nahi hai, par isse HAMESHA likho."],
   code: `class Parent {
    void showName(String name) {
        System.out.println("Parent: " + name);
    }
}

class Child extends Parent {
    // Typo: showname instead of showName. WITHOUT @Override this compiles quietly
    // and the parent's method is used instead. WITH @Override you get an error.
    // @Override
    // void showname(String name) { System.out.println("Child: " + name); }

    // Wrong parameter type: Integer instead of String. @Override would catch it.
    // @Override
    // void showName(Integer name) { }

    @Override
    void showName(String name) {                  // correct
        System.out.println("Child: " + name);
    }

    public static void main(String[] args) {
        new Child().showName("Gurleen");          // Child: Gurleen
    }
}`,
   tip: ["Compiler message 'method does not override or implement a method from a supertype' means your signature does not match any parent method. Compare the names and parameter types letter by letter.", "Compiler message 'method does not override or implement a method from a supertype' ka matlab hai tumhari signature kisi parent method se match nahi karti. Naam aur parameter types ko akshar-dar-akshar compare karo."]},
  {h: ["Runtime polymorphism: the real object decides", "Runtime polymorphism: asli object tay karta hai"],
   p: ["Here is the heart of the topic. When you call a method on a parent-type variable, Java does not look at the variable's type. At run time it looks at the REAL object that the variable points to and runs THAT class's version. This is called dynamic method dispatch. It lets you write one loop over a list of Animals that makes each one produce its own sound, without a single if statement.",
       "Ye topic ka dil hai. Parent-type variable par method call karte ho to Java variable ke type ko nahi dekhta. Run time par wo us ASLI object ko dekhta hai jise variable point karta hai aur USI class ka version chalata hai. Ise dynamic method dispatch kehte hain. Isse tum Animals ki list par ek hi loop likh sakte ho jo har animal se uski apni awaaz nikalwata hai, ek bhi if statement ke bina."],
   code: `class Shape {
    double area() { return 0; }
    String name() { return "Shape"; }
}

class Circle extends Shape {
    double r;
    Circle(double r) { this.r = r; }
    @Override double area() { return Math.PI * r * r; }
    @Override String name() { return "Circle"; }
}

class Rectangle extends Shape {
    double w, h;
    Rectangle(double w, double h) { this.w = w; this.h = h; }
    @Override double area() { return w * h; }
    @Override String name() { return "Rectangle"; }
}

class Triangle extends Shape {
    double b, h;
    Triangle(double b, double h) { this.b = b; this.h = h; }
    @Override double area() { return 0.5 * b * h; }
    @Override String name() { return "Triangle"; }
}

public class Main {
    public static void main(String[] args) {
        Shape[] shapes = { new Circle(2), new Rectangle(3, 4), new Triangle(5, 6) };

        double total = 0;
        for (Shape s : shapes) {                 // the variable type is Shape every time
            System.out.printf("%s area = %.2f%n", s.name(), s.area());   // the REAL object decides
            total += s.area();
        }
        System.out.printf("Total = %.2f%n", total);
        // Circle area = 12.57
        // Rectangle area = 12.00
        // Triangle area = 15.00
        // Total = 39.57
    }
}`,
   pts: [["Compile time: the compiler only checks that the parent type HAS the method (so s.area() is allowed).", "Run time: the JVM looks at the real object and runs its version of the method.", "To add a Hexagon, you write a new class and change nothing in the loop. This is the open-closed idea.", "A parent reference can call only methods the PARENT declares, even if the child has more."],
         ["Compile time: compiler sirf ye check karta hai ki parent type ke paas method HAI (isliye s.area() allowed hai).", "Run time: JVM asli object dekhta hai aur uska version chalata hai.", "Hexagon jodne ke liye nayi class likho aur loop me kuch mat badlo. Ye open-closed idea hai.", "Parent reference sirf wahi methods call kar sakta hai jo PARENT declare karta hai, chahe child ke paas zyada ho."]]},
  {h: ["super.method(): extend instead of replace", "super.method(): replace nahi, extend"],
   p: ["Inside an overriding method you can still run the parent's version with super.method(). This lets the child add to the parent's work instead of rewriting it, which keeps the shared logic in one place. toString() is the method you will override most. Object's version prints something like Student@1b6d3586, so you override it to print useful text.",
       "Overriding method ke andar bhi parent ka version super.method() se chala sakte ho. Isse child parent ke kaam me jodta hai, use dobara likhta nahi, aur shared logic ek hi jagah rehta hai. toString() wo method hai jise sabse zyada override karoge. Object ka version Student@1b6d3586 jaisa kuch print karta hai, isliye kaam ka text print karne ke liye use override karte ho."],
   code: `class Person {
    protected String name;
    Person(String name) { this.name = name; }

    @Override
    public String toString() {                      // overriding Object's toString()
        return "Person: " + name;
    }
}

class Student extends Person {
    private int rollNo;

    Student(String name, int rollNo) {
        super(name);
        this.rollNo = rollNo;
    }

    @Override
    public String toString() {
        return super.toString() + ", Roll no: " + rollNo;     // reuse + extend
    }

    public static void main(String[] args) {
        Student s = new Student("Rahul", 12);
        System.out.println(s);            // Person: Rahul, Roll no: 12
        Person p = s;                     // the same object seen as a Person
        System.out.println(p);            // Person: Rahul, Roll no: 12  (still the Student version)
    }
}`},
  {h: ["Covariant return types and widening access", "Covariant return types aur access ka widen hona"],
   p: ["Two small freedoms are allowed in an override. First, the child may return a MORE specific type than the parent promised (a covariant return): if the parent returns Animal, the child may return Dog. Second, the child may make the method MORE accessible (protected to public), but never less.",
       "Override me do chhoti azaadiyan allowed hain. Pehli, child parent ke vaade se ZYADA specific type return kar sakta hai (covariant return): parent Animal return kare to child Dog return kar sakta hai. Doosri, child method ko ZYADA accessible (protected se public) bana sakta hai, par kam kabhi nahi."],
   code: `class Animal {
    Animal create() {                          // returns Animal
        return new Animal();
    }
    protected void info() {
        System.out.println("Animal info");
    }
}

class Dog extends Animal {
    @Override
    Dog create() {                             // covariant: Dog is a kind of Animal
        return new Dog();
    }

    @Override
    public void info() {                       // widened: protected to public is allowed
        System.out.println("Dog info");
    }

    // @Override
    // private void info() { }                 // ERROR: weaker access than protected
    // @Override
    // int create() { return 1; }              // ERROR: int is not a subtype of Animal
}

public class Main {
    public static void main(String[] args) {
        Dog d = new Dog().create();            // no cast needed thanks to the covariant return
        d.info();                              // Dog info
    }
}`},
  {h: ["What cannot be overridden: final, static, private and constructors", "Kya override nahi ho sakta: final, static, private aur constructors"],
   p: ["A final method cannot be overridden: it is the parent's way of saying 'this behaviour must never change'. A private method is not inherited at all, so a child method with the same name is just a new, unrelated method. A static method belongs to the class, so a child's static method with the same signature HIDES the parent's one instead of overriding it, and the version chosen depends on the variable type, not the object. Constructors are never inherited, so they cannot be overridden.",
       "final method override nahi ho sakta: ye parent ka tareeka hai kehne ka ki 'ye behaviour kabhi nahi badalna chahiye'. private method inherit hi nahi hota, isliye child ka same naam ka method bas ek naya, alag method hai. static method class ka hota hai, isliye child ka same signature wala static method parent wale ko override nahi karta balki use CHHUPA deta hai, aur kaun sa version chalega wo variable ke type par nirbhar karta hai, object par nahi. Constructors kabhi inherit nahi hote, isliye override nahi ho sakte."],
   code: `class Parent {
    final void rule() { System.out.println("Parent rule: cannot change"); }
    private void secret() { System.out.println("Parent secret"); }
    static void hello() { System.out.println("Parent static hello"); }
    void normal() { System.out.println("Parent normal"); }
    void callSecret() { secret(); }
}

class Child extends Parent {
    // void rule() { }                        // ERROR: cannot override final method

    void secret() { System.out.println("Child secret"); }   // NOT an override: a new method

    static void hello() { System.out.println("Child static hello"); }   // hides, not overrides

    @Override
    void normal() { System.out.println("Child normal"); }   // a true override
}

public class Main {
    public static void main(String[] args) {
        Parent p = new Child();
        p.normal();        // Child normal          (overridden: object decides)
        p.hello();         // Parent static hello   (hidden: the VARIABLE type decides)
        p.callSecret();    // Parent secret         (private methods are never overridden)
        new Child().hello();   // Child static hello
    }
}`,
   tip: ["Quick rule: only non-private, non-static, non-final instance methods can be overridden. Everything else is hidden or simply separate.", "Quick rule: sirf non-private, non-static, non-final instance methods override ho sakte hain. Baaki sab hide hote hain ya bas alag hote hain."]},
  {h: ["Fields are not overridden", "Fields override nahi hote"],
   p: ["Polymorphism works for methods only. A field in a child with the same name as the parent's field does not replace it. Both exist, and which one you read depends on the type of the VARIABLE, not on the real object. This surprises many beginners. The safe habit is to keep fields private and use methods, so the overriding rules protect you.",
       "Polymorphism sirf methods ke liye chalta hai. Child ka field jiska naam parent ke field jaisa ho use replace nahi karta. Dono maujood rehte hain, aur kaun sa padhoge wo VARIABLE ke type par nirbhar karta hai, asli object par nahi. Ye kai beginners ko chaukata hai. Surakshit aadat ye hai ki fields private rakho aur methods use karo, taaki overriding ke rules tumhari raksha karein."],
   code: `class Parent {
    String type = "parent field";
    String getType() { return "parent method"; }
}

class Child extends Parent {
    String type = "child field";                     // hides, does not override
    @Override
    String getType() { return "child method"; }      // overrides
}

public class Main {
    public static void main(String[] args) {
        Parent p = new Child();
        System.out.println(p.type);         // parent field   (variable type decides)
        System.out.println(p.getType());    // child method   (real object decides)

        Child c = new Child();
        System.out.println(c.type);         // child field
        System.out.println(((Parent) c).type);   // parent field
    }
}`},
  {h: ["Overriding equals(), and overloading versus overriding", "equals() override karna, aur overloading vs overriding"],
   p: ["Object's equals(Object) compares references. To compare contents you override it, and the parameter MUST be Object. A famous bug is writing equals(Person other). That is an OVERLOAD (a new method), not an override, so collections and Object-typed calls ignore it. @Override catches this mistake immediately. When you override equals() you should also override hashCode() so that equal objects give the same hash code, because HashMap and HashSet (Phase 4) depend on it.",
       "Object ka equals(Object) references compare karta hai. Contents compare karne ke liye use override karte ho, aur parameter Object HI hona chahiye. Ek mashhoor bug equals(Person other) likhna hai. Ye OVERLOAD (naya method) hai, override nahi, isliye collections aur Object-type wali calls ise ignore karti hain. @Override ye galti turant pakad leta hai. equals() override karo to hashCode() bhi override karna chahiye taaki barabar objects ka hash code same ho, kyunki HashMap aur HashSet (Phase 4) isi par nirbhar hain."],
   code: `import java.util.Objects;

class Person {
    private String name;
    private int age;

    Person(String name, int age) {
        this.name = name;
        this.age = age;
    }

    // WRONG: this is an overload, not an override of equals(Object)
    // public boolean equals(Person other) { ... }

    @Override
    public boolean equals(Object o) {                 // parameter type is Object
        if (this == o) return true;
        if (!(o instanceof Person)) return false;
        Person other = (Person) o;
        return age == other.age && Objects.equals(name, other.name);
    }

    @Override
    public int hashCode() {
        return Objects.hash(name, age);               // same fields as equals()
    }

    @Override
    public String toString() {
        return name + " (" + age + ")";
    }

    public static void main(String[] args) {
        Person a = new Person("Gurleen", 21);
        Person b = new Person("Gurleen", 21);
        System.out.println(a == b);                   // false (different objects)
        System.out.println(a.equals(b));              // true  (same contents)
        System.out.println(a.hashCode() == b.hashCode());   // true
        System.out.println(a);                        // Gurleen (21)
    }
}`,
   pts: [["Overloading: same name, DIFFERENT parameters, chosen at compile time by the declared types.", "Overriding: same name, SAME parameters, chosen at run time by the real object.", "Overloading can happen in one class. Overriding needs a parent and a child.", "Mistake: a different parameter type or spelling, which creates an overload and not an override. Always use @Override.", "Mistake: weaker access (public to protected) or a broader checked exception.", "Mistake: trying to override static, private or final methods.", "Mistake: expecting fields to behave polymorphically.", "Mistake: overriding equals() but not hashCode().", "Good habit: use @Override every time, and use super.method() when you want to keep the parent's behaviour."],
         ["Overloading: same naam, ALAG parameters, compile time par declared types se chuna jata hai.", "Overriding: same naam, SAME parameters, run time par asli object se chuna jata hai.", "Overloading ek class me ho sakti hai. Overriding ke liye parent aur child chahiye.", "Galti: alag parameter type ya spelling, jo overload banata hai override nahi. Hamesha @Override use karo.", "Galti: kamzor access (public se protected) ya bada checked exception.", "Galti: static, private ya final methods ko override karne ki koshish.", "Galti: fields ke polymorphically behave karne ki ummeed.", "Galti: equals() override karna par hashCode() nahi.", "Achhi aadat: har baar @Override use karo, aur parent ka behaviour rakhna ho to super.method() use karo."]],
   tip: ["Interview question: can we override a static method? No. A static method with the same signature in the child hides the parent's one. Can we override a private or final method? No.", "Interview question: kya static method override kar sakte hain? Nahi. Child me same signature wala static method parent wale ko hide karta hai. Kya private ya final method override kar sakte hain? Nahi."]}
 ]}
});