const PROJECTS = [
["Student Manager","Easy","A console menu program that keeps a list of students with their marks. The starter code already works: add students, list them and show the average. Run it with the sample input first, then extend it.",
["Option 4: show the topper","Option 5: delete a student by name","Option 6: sort students by marks (highest first)","Check that marks are between 0 and 100","Bonus: save the list to a file"],
"Use a for loop with a 'best' variable for the topper. list.removeIf(s -> s.name.equals(name)) deletes by name. list.sort(...) with a Comparator sorts the list.",
`import java.util.*;

public class Main {
    static class Student {
        String name;
        int marks;
        Student(String name, int marks) { this.name = name; this.marks = marks; }
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        List<Student> list = new ArrayList<>();
        while (true) {
            System.out.println("1 Add  2 List  3 Average  0 Exit");
            if (!sc.hasNextInt()) break;
            int c = sc.nextInt();
            if (c == 0) break;
            if (c == 1) {
                String name = sc.next();
                int marks = sc.nextInt();
                list.add(new Student(name, marks));
                System.out.println("Added " + name);
            } else if (c == 2) {
                for (Student s : list) System.out.println(s.name + " - " + s.marks);
            } else if (c == 3) {
                double t = 0;
                for (Student s : list) t += s.marks;
                System.out.println(list.isEmpty() ? "No students" : "Average: " + t / list.size());
            }
            // TODO: add options 4, 5 and 6 here
        }
        System.out.println("Bye");
    }
}`,"1\nRahul\n80\n1\nGurleen\n91\n2\n3\n0"],

["Quiz Game","Easy","A multiple-choice quiz that reads the answers, counts the score and prints a result with a grade. The starter has 3 questions. Add more and improve the feedback.",
["Add at least 5 more questions","Show the correct answer when the user is wrong","Print a grade: A (90% or more), B (60%+), C","Accept capital and small letters (A or a)","Bonus: shuffle the order of the questions"],
"Keep questions, options and answers in arrays. Use equalsIgnoreCase for the comparison.",
`import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String[] q = {
            "Which keyword creates an object?\\n a) new  b) make  c) create",
            "Which loop runs at least once?\\n a) for  b) while  c) do-while",
            "Which one is NOT a primitive type?\\n a) int  b) String  c) char"
        };
        String[] ans = {"a", "c", "b"};
        int score = 0;
        for (int i = 0; i < q.length; i++) {
            System.out.println((i + 1) + ". " + q[i]);
            String a = sc.next();
            if (a.equalsIgnoreCase(ans[i])) {
                score++;
                System.out.println("Correct!");
            } else {
                System.out.println("Wrong.");
            }
        }
        System.out.println("Score: " + score + " / " + q.length);
        // TODO: print a grade based on the percentage
    }
}`,"a\nc\nb"],

["Library Manager","Medium","A small library: list books, borrow a book by id and return it. It uses a class, a list and a menu loop (the OOPs ideas of Phase 3). Extend it with more rules.",
["A member can borrow at most 3 books","Option 4: search a book by part of its title","Show who borrowed each book","Print a message when the id does not exist","Bonus: a custom exception BookNotAvailableException"],
"Add a String borrowedBy field (null means available). For the limit, count the books whose borrowedBy equals the member name.",
`import java.util.*;

public class Main {
    static class Book {
        int id;
        String title;
        boolean available = true;
        Book(int id, String title) { this.id = id; this.title = title; }
    }

    static Book find(List<Book> books, int id) {
        for (Book b : books) if (b.id == id) return b;
        return null;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        List<Book> books = new ArrayList<>();
        books.add(new Book(1, "Java Basics"));
        books.add(new Book(2, "Data Structures"));
        books.add(new Book(3, "Learn OOP"));
        while (true) {
            System.out.println("1 List  2 Borrow  3 Return  0 Exit");
            if (!sc.hasNextInt()) break;
            int c = sc.nextInt();
            if (c == 0) break;
            if (c == 1) {
                for (Book b : books) System.out.println(b.id + " " + b.title + (b.available ? "" : " (borrowed)"));
            } else if (c == 2 || c == 3) {
                int id = sc.nextInt();
                Book b = find(books, id);
                if (b == null) System.out.println("No such book");
                else if (c == 2 && !b.available) System.out.println("Already borrowed");
                else if (c == 3 && b.available) System.out.println("This book was not borrowed");
                else { b.available = (c == 3); System.out.println(c == 2 ? "Borrowed" : "Returned"); }
            }
        }
        System.out.println("Bye");
    }
}`,"1\n2\n1\n1\n3\n1\n1\n0"],

["Text Analyzer","Medium","Reads one line of text and reports statistics: characters, words and how often each word appears. It uses String methods and a TreeMap (Phase 2 and Phase 4 ideas).",
["Show the most frequent word","Show the longest word","Count vowels and consonants","Ignore capital letters and punctuation","Bonus: read the text from a file with Files.readString"],
"split(\" +\") breaks the line into words. map.merge(word, 1, Integer::sum) counts. Loop over map.entrySet() to find the maximum.",
`import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String text = sc.nextLine().trim();
        String[] words = text.isEmpty() ? new String[0] : text.split(" +");

        System.out.println("Characters: " + text.length());
        System.out.println("Words: " + words.length);

        Map<String, Integer> freq = new TreeMap<>();
        for (String w : words) freq.merge(w.toLowerCase(), 1, Integer::sum);
        for (Map.Entry<String, Integer> e : freq.entrySet()) {
            System.out.println(e.getKey() + " = " + e.getValue());
        }
        // TODO: print the most frequent word and the longest word
    }
}`,"To be or not to be that is the question"]
];