const ERR_RULES = [
 [/cannot find symbol[\s\S]*?symbol:\s+(?:variable|method|class)\s+([^\s(]+)/, "Naam nahi mila: `$1`", "Java ko `$1` naam samajh nahi aaya. Aam wajah: spelling galat (Java case-sensitive hai: `System`, `String`, `Scanner` capital se likhte hain), variable declare nahi kiya, ya `import java.util.*;` chhoot gaya.", "Spelling aur capital letters check karo, variable pehle declare karo, aur file ke upar `import java.util.*;` lagao."],
 [/is public, should be declared in a file named/, "Class ka naam `Main` hona chahiye", "Yahan code `Main.java` file me save hota hai, isliye public class ka naam `Main` hi hona chahiye.", "Class ko `public class Main` likho."],
 [/error: '([^']+)' expected/, "`$1` missing hai", "Java ko yahan `$1` chahiye tha par mila nahi. Aksar line ke end me semicolon `;` ya koi bracket band karna bhool jate hain. Error aksar reported line ya usse pichhli line me hoti hai.", "Reported line aur uski pichhli line dekho aur `$1` laga do."],
 [/class, interface, enum, or record expected/, "Curly braces gadbad hain", "Kisi method ya class ke baad extra `}` hai, ya koi `{` band nahi hua, isliye Java ko class ke bahar kuch alag mila.", "Har `{` ke liye ek `}` hona chahiye. Code ko ek-ek block me indent karke braces gino."],
 [/reached end of file while parsing/, "File ke end tak `}` kam pad gaya", "Koi `{` band nahi hua, isliye Java file ke aakhir tak pahunch gaya aur uska jodi wala `}` nahi mila.", "Neeche ek `}` jodo. Dhyan se dekho ki class, method aur loop teeno band hue ya nahi."],
 [/possible lossy conversion from (\w+) to (\w+)/, "`$1` ko `$2` me seedhe nahi daal sakte", "Badi range ka type (`$1`) chhote type (`$2`) me jaa raha hai, isme data kat sakta hai (jaise decimal ka hissa), isliye Java mana karta hai.", "Cast likho: `(int) value`, ya variable ka type bada karo (jaise `int` ki jagah `double`)."],
 [/incompatible types: ([^\n]+) cannot be converted to ([^\n]+)/, "Type match nahi hua: `$1` se `$2`", "Tum `$1` value ko `$2` type ke variable me rakh rahe ho, jo allowed nahi hai.", "Sahi type use karo, ya convert karo: text se number ke liye `Integer.parseInt(...)`, number se text ke liye `String.valueOf(...)`."],
 [/missing return statement/, "`return` missing hai", "Method ko value return karni thi, par kisi raste (jaise `if` ke baad) return nahi mila.", "Method ke end me `return` jodo, ya `else` me bhi return likho."],
 [/variable (\w+) might not have been initialized/, "`$1` ko value nahi di gayi", "Local variable `$1` ko use karne se pehle koi value nahi mili (local variables ki default value nahi hoti).", "Declare karte hi value do: `int $1 = 0;`"],
 [/variable (\w+) is already defined/, "`$1` do baar declare hua", "Ek hi scope me `$1` naam ka variable pehle se hai.", "Dusre variable ka naam badlo, ya dobara type likhe bina sirf `$1 = ...;` likho."],
 [/non-static (?:method|variable) ([^\n]+?) cannot be referenced from a static context/, "Static `main` se non-static cheez use ho rahi hai", "`main` static hai, isliye wo object banaye bina `$1` ko call nahi kar sakta.", "Us method ya variable ko `static` bana do, ya pehle object banao: `Main m = new Main(); m.method();`"],
 [/unreported exception (\w+)/, "`$1` ko sambhalna zaroori hai", "Ye checked exception hai. Java kehta hai ya to `try-catch` se pakdo, ya method par `throws` likho.", "Code ko `try { ... } catch ($1 e) { ... }` me lapeto, ya method ke naam ke baad `throws $1` likho."],
 [/illegal start of expression/, "Galat jagah par code", "Aksar method ke andar dusra method likha hai, ya pichhli line me `}` ya `;` ka dhyan nahi rakha.", "Pichhli lines ke braces aur semicolons check karo. Method ek dusre ke andar nahi likhte."],
 [/<identifier> expected/, "Naam ya type chahiye", "Class ke andar sidha statement (jaise `System.out.println(...)`) likh diya jo method ke bahar hai.", "Statement ko `main` ya kisi method ke andar rakho."],
 [/unclosed string literal/, "String band nahi hua", "Text ke shuru me `\"` hai par end me nahi.", "Text ke end me bhi `\"` lagao."],
 [/not a statement/, "Ye line statement nahi hai", "Akela expression (jaise `x + 1;` ya `5;`) likha hai jo koi kaam nahi karta.", "Value ko variable me rakho (`x = x + 1;`) ya print karo."],
 [/cannot be applied to given types|no suitable (?:method|constructor)/, "Method ko galat arguments diye", "Method ya constructor ko jitne ya jis type ke arguments chahiye the, tumne alag diye.", "Method ka definition dekho: kitne parameters hain aur kaun se types, aur utne hi sahi type ke arguments do."],
 [/bad operand types for binary operator/, "Operator ke liye galat types", "Aise do values ke beech operator lagaya jinke liye wo allowed nahi hai (jaise `String - int` ya `boolean + int`).", "Types check karo. Text ko compare karne ke liye `.equals()` use karo."],
 [/(\w+) cannot be dereferenced/, "`$1` par dot (.) nahi laga sakte", "`$1` primitive type hai (`int`, `double` waghera), isme methods nahi hote.", "String banakar use karo (`String.valueOf(x)`), ya wrapper class `Integer` use karo."],
 [/cannot assign a value to final variable (\w+)/, "`$1` badal nahi sakte", "`$1` ko `final` kiya hai, uski value ek baar hi set hoti hai.", "Ya to `final` hata do, ya dobara assign mat karo."],
 [/error: package ([\w.]+) does not exist/, "Package `$1` nahi mila", "Import me package ka naam galat hai ya wo package yahan available nahi hai.", "Spelling check karo (jaise `java.util.List`) aur sahi import likho."],
 [/Time limit exceeded/, "Program ruka nahi (time limit)", "Program 5 second me khatam nahi hua. Aksar infinite loop hota hai, ya Scanner se aisa input maang raha hai jo diya hi nahi.", "Loop ki condition aur update check karo (kya `i++` hai?). Custom Input me jitna input chahiye utna do."],
 [/ArithmeticException/, "Zero se divide hua", "Integer ko `0` se divide ya mod kiya gaya (`/ by zero`).", "Divide karne se pehle check karo: `if (b != 0) { ... }`"],
 [/ArrayIndexOutOfBoundsException/, "Array ke bahar ka index", "Array ke size se bahar ka index use hua (jaise size 3 hai aur `a[3]` ya `a[-1]` likh diya). Valid index 0 se length-1 tak hote hain.", "Loop me `i < a.length` likho (`<=` nahi) aur index ko check karo."],
 [/StringIndexOutOfBoundsException/, "String ke bahar ka position", "`charAt` ya `substring` me aisi position di jo String me hai hi nahi.", "Position 0 se `length() - 1` ke beech rakho aur pehle `length()` check karo."],
 [/IndexOutOfBoundsException/, "List ke bahar ka index", "List me jitne items hain usse zyada ya negative index use hua.", "`list.size()` check karo. Valid index 0 se size-1 tak hote hain."],
 [/NullPointerException/, "`null` par method call hua", "Kisi aise variable par method ya field use hua jisme object tha hi nahi (`null` tha).", "Object `new` se banao ya use karne se pehle `if (x != null)` check lagao."],
 [/NumberFormatException(?:[^\n]*For input string: "([^"]*)")?/, "Text number nahi hai: `$1`", "`Integer.parseInt` ko aisa text mila jo number nahi hai (extra space, letter, decimal point ya khali).", "`.trim()` lagao, ya `try-catch (NumberFormatException e)` me lapeto. Decimal ke liye `Double.parseDouble` use karo."],
 [/InputMismatchException/, "Input ka type galat", "`nextInt()` ko number chahiye tha par input me text ya decimal mila.", "Custom Input me sahi type ka data likho, ya `sc.next()` se text padho."],
 [/NoSuchElementException/, "Input khatam ho gaya", "Program ko aur input padhna tha par Custom Input me utna data tha hi nahi.", "Custom Input me program ke maange hisaab se saari values likho (har value naye line ya space se alag)."],
 [/ClassCastException/, "Galat type me cast", "Object ko aise type me badla jo wo hai hi nahi.", "Cast se pehle `if (x instanceof Type)` se check karo."],
 [/StackOverflowError/, "Recursion kabhi ruki nahi", "Method khud ko baar-baar call karta raha aur base case kabhi nahi aaya.", "Recursion me ek base case likho jo ruk jaye, aur har call input ko chhota kare."],
 [/OutOfMemoryError/, "Memory khatam ho gayi", "Bahut bada array ya list bana di ya loop me data jama hota raha.", "Size check karo aur loop ko rokne ki condition dekho."],
 [/Main method not found|Could not find or load main class|no main method/i, "`main` method nahi mila", "Program ko shuru karne ke liye bilkul ye line chahiye.", "Likho: `public static void main(String[] args)` aur class ka naam `Main` rakho."],
 [/Exception in thread "main" ([\w.]+)/, "Runtime error: `$1`", "Program chalte waqt kisi line par exception aayi aur program ruk gaya.", "Upar ke message me exception ka naam aur line number dekho, usi line ko check karo."]
];

function explainError(t) {
  if (!t) return null;
  const lm = t.match(/Main\.java:(\d+)/);
  for (const r of ERR_RULES) {
    const m = t.match(r[0]);
    if (m) {
      const f = s => s.replace(/\$(\d)/g, (_, i) => m[i] || "");
      return {title: f(r[1]), why: f(r[2]), fix: f(r[3]), line: lm ? +lm[1] : null};
    }
  }
  return {title: "Error aayi hai",
    why: "Upar ke output ka pehla error message padho. Compile error me file ka naam aur line number likha hota hai.",
    fix: "Sirf PEHLI error theek karo aur dobara Run karo, kyunki baad ki errors aksar pehli ki wajah se aati hain.",
    line: lm ? +lm[1] : null};
}