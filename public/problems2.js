PROBLEMS.push(
[1,"Operators","Swap Two Numbers","Easy","Read a and b. Print them swapped.\nInput: a b\nOutput: b a","Use a temporary variable.",
`int a=sc.nextInt(),b=sc.nextInt();
int t=a;a=b;b=t;
System.out.println(a+" "+b);`,[["3 5","5 3"],["10 -2","-2 10"],["7 7","7 7"]]],
[1,"If-Else","Leap Year","Easy","Check if a year is a leap year.\nInput: year\nOutput: Leap or Not leap","Divisible by 4, but not by 100, unless also by 400.",
`int y=sc.nextInt();
boolean l=(y%4==0&&y%100!=0)||y%400==0;
System.out.println(l?"Leap":"Not leap");`,[["2024","Leap"],["1900","Not leap"],["2000","Leap"]]],
[1,"Loops","Armstrong Number","Medium","A number is Armstrong if the sum of its digits, each raised to the number of digits, equals the number (153 = 1+125+27).\nInput: n\nOutput: Armstrong or Not armstrong","Count the digits first, then use Math.pow on each digit.",
`int n=sc.nextInt();
int d=String.valueOf(n).length(),t=n,s=0;
while(t>0){s+=(int)Math.pow(t%10,d);t/=10;}
System.out.println(s==n?"Armstrong":"Not armstrong");`,[["153","Armstrong"],["123","Not armstrong"],["9474","Armstrong"]]],
[1,"Methods","GCD of Two Numbers","Medium","Print the greatest common divisor.\nInput: a b\nOutput: gcd","Euclid: while b is not 0, replace (a, b) by (b, a % b).",
`int a=sc.nextInt(),b=sc.nextInt();
while(b!=0){int t=b;b=a%b;a=t;}
System.out.println(a);`,[["48 18","6"],["7 13","1"],["100 25","25"]]],
[1,"Pattern Printing","Star Pyramid","Medium","Print a centred pyramid of n rows.\nInput: n\nOutput (n=3):\n  *\n ***\n*****","Row i has n-i spaces and 2*i-1 stars.",
`int n=sc.nextInt();
for(int i=1;i<=n;i++){
  for(int s=1;s<=n-i;s++)System.out.print(" ");
  for(int k=1;k<=2*i-1;k++)System.out.print("*");
  System.out.println();
}`,[["3","  *\n ***\n*****"],["1","*"],["2"," *\n***"]]],

[2,"Arrays","Sum and Average","Easy","Print the sum and the average (2 decimals).\nInput: line 1 n, line 2 n integers\nOutput: Sum=<s> Avg=<a>","Use (double) sum / n.",
`int n=sc.nextInt(),s=0;
for(int i=0;i<n;i++)s+=sc.nextInt();
System.out.printf("Sum=%d Avg=%.2f%n",s,(double)s/n);`,[["4\n1 2 3 4","Sum=10 Avg=2.50"],["1\n5","Sum=5 Avg=5.00"],["3\n1 2 2","Sum=5 Avg=1.67"]]],
[2,"Array Traversal","Remove Duplicates","Medium","Print the distinct numbers in the order they first appeared.\nInput: line 1 n, line 2 n integers\nOutput: distinct numbers separated by spaces","A LinkedHashSet keeps insertion order and ignores repeats.",
`int n=sc.nextInt();
Set<Integer> s=new LinkedHashSet<>();
for(int i=0;i<n;i++)s.add(sc.nextInt());
StringBuilder sb=new StringBuilder();
for(int x:s)sb.append(sb.length()>0?" ":"").append(x);
System.out.println(sb);`,[["6\n1 2 2 3 1 4","1 2 3 4"],["3\n5 5 5","5"],["2\n7 8","7 8"]]],
[2,"Two-Dimensional Arrays","Matrix Transpose","Medium","Print the transpose of a matrix.\nInput: r c, then r lines of c integers\nOutput: c lines of r integers","Result[j][i] = original[i][j]. Just loop columns first.",
`int r=sc.nextInt(),c=sc.nextInt();
int[][] m=new int[r][c];
for(int i=0;i<r;i++)for(int j=0;j<c;j++)m[i][j]=sc.nextInt();
for(int j=0;j<c;j++){
  StringBuilder sb=new StringBuilder();
  for(int i=0;i<r;i++)sb.append(i>0?" ":"").append(m[i][j]);
  System.out.println(sb);
}`,[["2 3\n1 2 3\n4 5 6","1 4\n2 5\n3 6"],["1 2\n7 8","7\n8"],["2 2\n1 2\n3 4","1 3\n2 4"]]],
[2,"String Methods","Character Frequency","Medium","Print each distinct character with its count, in the order of first appearance.\nInput: one word\nOutput: like b=1 a=3 n=2","LinkedHashMap + merge(c, 1, Integer::sum).",
`String s=sc.next();
Map<Character,Integer> m=new LinkedHashMap<>();
for(char c:s.toCharArray())m.merge(c,1,Integer::sum);
StringBuilder sb=new StringBuilder();
for(Map.Entry<Character,Integer> e:m.entrySet())sb.append(sb.length()>0?" ":"").append(e.getKey()).append("=").append(e.getValue());
System.out.println(sb);`,[["banana","b=1 a=3 n=2"],["aab","a=2 b=1"],["x","x=1"]]],

[3,"Classes & Objects","Bank Account Class","Medium","Make a class Account with deposit and withdraw. A withdraw of more than the balance prints Insufficient and changes nothing.\nInput: line 1 opening balance and n, then n lines: D amount (deposit) or W amount (withdraw)\nOutput: Insufficient lines (if any), then Balance: <b>","Keep balance private. withdraw can return false when the money is not enough.",
`import java.util.*;
class Account{
  private long bal;
  Account(long b){bal=b;}
  void deposit(long a){bal+=a;}
  boolean withdraw(long a){if(a>bal)return false;bal-=a;return true;}
  long getBal(){return bal;}
}
public class Main{
  public static void main(String[] args){
    Scanner sc=new Scanner(System.in);
    Account a=new Account(sc.nextLong());
    int n=sc.nextInt();
    for(int i=0;i<n;i++){
      String op=sc.next();long v=sc.nextLong();
      if(op.equals("D"))a.deposit(v);
      else if(!a.withdraw(v))System.out.println("Insufficient");
    }
    System.out.println("Balance: "+a.getBal());
  }
}`,[["100 3\nD 50\nW 30\nW 500","Insufficient\nBalance: 120"],["0 1\nD 10","Balance: 10"],["50 2\nW 50\nW 1","Insufficient\nBalance: 0"]]],
[3,"Interfaces","Payment Methods","Medium","Create an interface Payment with pay(int amount) and three classes Upi, Card and Cash. Print the message for the chosen method.\nInput: method (upi, card or cash) and amount\nOutput: Paid <amount> using UPI | Card | Cash","Use one Payment variable for all three classes.",
`import java.util.*;
interface Payment{void pay(int a);}
class Upi implements Payment{public void pay(int a){System.out.println("Paid "+a+" using UPI");}}
class Card implements Payment{public void pay(int a){System.out.println("Paid "+a+" using Card");}}
class Cash implements Payment{public void pay(int a){System.out.println("Paid "+a+" using Cash");}}
public class Main{
  public static void main(String[] args){
    Scanner sc=new Scanner(System.in);
    String t=sc.next();int a=sc.nextInt();
    Payment p=t.equals("upi")?new Upi():t.equals("card")?new Card():new Cash();
    p.pay(a);
  }
}`,[["upi 250","Paid 250 using UPI"],["card 1200","Paid 1200 using Card"],["cash 80","Paid 80 using Cash"]]],

[4,"Collections Framework","Balanced Brackets","Hard","Check if a string of ( ) [ ] { } is balanced.\nInput: one string\nOutput: Balanced or Not balanced","Push opening brackets on a stack. For a closing bracket, the popped one must match.",
`String s=sc.next();
Deque<Character> st=new ArrayDeque<>();
boolean ok=true;
for(char c:s.toCharArray()){
  if("([{".indexOf(c)>=0)st.push(c);
  else{
    if(st.isEmpty()){ok=false;break;}
    char o=st.pop();
    if("([{".indexOf(o)!=")]}".indexOf(c))ok=false;
  }
}
System.out.println(ok&&st.isEmpty()?"Balanced":"Not balanced");`,[["{[()]}","Balanced"],["([)]","Not balanced"],["((","Not balanced"],["()","Balanced"]]],
[4,"Stream API","Long Words in Capitals","Medium","Using a stream: print the words longer than 3 letters in capital letters, sorted alphabetically.\nInput: line 1 n, line 2 n words\nOutput: words separated by a space","filter, map(String::toUpperCase), sorted, Collectors.joining.",
`int n=sc.nextInt();
List<String> l=new ArrayList<>();
for(int i=0;i<n;i++)l.add(sc.next());
System.out.println(l.stream().filter(w->w.length()>3).map(String::toUpperCase).sorted().collect(java.util.stream.Collectors.joining(" ")));`,[["4\njava is fun stream","JAVA STREAM"],["2\nhello world","HELLO WORLD"],["3\nzoo java ant","JAVA"]]],
[4,"Custom Exceptions","Age Validator","Easy","Create a custom exception InvalidAgeException. Valid age is 0 to 120.\nInput: age\nOutput: Valid age: <a>  OR  Invalid age: <a>","Throw it inside a method and catch it in main.",
`import java.util.*;
class InvalidAgeException extends Exception{
  InvalidAgeException(String m){super(m);}
}
public class Main{
  static void check(int a)throws InvalidAgeException{
    if(a<0||a>120)throw new InvalidAgeException("Invalid age: "+a);
  }
  public static void main(String[] args){
    int a=new Scanner(System.in).nextInt();
    try{check(a);System.out.println("Valid age: "+a);}
    catch(InvalidAgeException e){System.out.println(e.getMessage());}
  }
}`,[["25","Valid age: 25"],["-5","Invalid age: -5"],["150","Invalid age: 150"]]],
[4,"Multithreading","Sum with Two Threads","Hard","Print the sum of 1 to n. Let thread 1 add the first half and thread 2 the second half, then join both.\nInput: n\nOutput: the sum","Start both threads, then call join() on each before adding the two partial sums.",
`import java.util.*;
public class Main{
  static long s1,s2;
  public static void main(String[] args)throws Exception{
    int n=new Scanner(System.in).nextInt();
    Thread t1=new Thread(()->{for(int i=1;i<=n/2;i++)s1+=i;});
    Thread t2=new Thread(()->{for(int i=n/2+1;i<=n;i++)s2+=i;});
    t1.start();t2.start();
    t1.join();t2.join();
    System.out.println(s1+s2);
  }
}`,[["100","5050"],["10","55"],["1","1"]]],
[4,"Date & Time API","Age from Birth Date","Medium","Print the age in complete years.\nInput: birth date and today's date (yyyy-MM-dd) on two lines\nOutput: <n> years","Period.between(birth, today).getYears()",
`java.time.LocalDate b=java.time.LocalDate.parse(sc.next()),t=java.time.LocalDate.parse(sc.next());
System.out.println(java.time.Period.between(b,t).getYears()+" years");`,[["2005-03-15\n2026-11-01","21 years"],["2000-11-01\n2026-11-01","26 years"],["2008-12-20\n2026-11-01","17 years"]]]
);