import { AzureOpenAI } from "openai";
import { DefaultAzureCredential, getBearerTokenProvider } from "@azure/identity";
import { NextResponse } from "next/server";

const endpoint = process.env.AZURE_OPENAI_ENDPOINT;
const deployment = process.env.AZURE_OPENAI_MODEL;
const credential = new DefaultAzureCredential();
const scope = "https://cognitiveservices.azure.com/.default";
const azureADTokenProvider = getBearerTokenProvider(credential, scope);

const client = new AzureOpenAI({ apiVersion: "2024-05-01-preview" });

export async function POST(req) {
  const { messages } = await req.json();

  messages.unshift({
    role: 'assistant',
    content: `You are PortfolioGPT, answering only questions based on the resume provided.
    Resume: ${DATA_RESUME}
    Help users learn more about Tony from his resume.`
  })

  const response = await client.chat.completions.create({
    model: deployment,
    messages,
    max_tokens: 128,
  });

  return NextResponse.json({
    message: response.choices[0].message.content,
  });
}
const DATA_RESUME = `Tony Li
lizhongxian23@gmail.com | (415) 741-6345
https://www.linkedin.com/in/tony-li-17b169305
https://github.com/tonyzx0816
EDUCATION BACKGROUND
San Jose State University San Jose, CA
Bachelor of Software Engineering Aug 2024 – Dec 2026
Major: Software Engineering GPA: 3.95/4.00
Courses: Object-oriented Design, Computer & Human Interaction, Engineering Report, Engineering Statistics
City College of San Francisco The Dean's Honor List in Fall 2022~2023 San Francisco, CA
Jan 2022 – May 2024
Major: Computer Science GPA: 3.96/4.00
Courses: Data Structure & Algorithm in Java, Mathematics
PROFESSIONAL EXPERIENCE
Cashier-UI: Java-Based Cashier & Inventory Management System Oct 2024 - Dec 2024
Java, AWT, JSON, OOP, MVC
• Developed a cashier application with a GUI using Java AWT, featuring inventory management, invoice
processing, and receipt generation.
• Integrated JSON-based inventory data storage, enabling real-time product search, stock tracking, and
transaction processing.
• Applied OOP principles and Singleton Design Pattern for session management and followed MVC
architecture for scalability.
Capped Linked List: Java-Based Bounded Linked List Implementation Oct 2023 - Nov 2023
Java, Data Structures, OOP, Generics, Linked List
• Designed and implemented a bounded linked list (Front Back Capped List) in Java, allowing insertions
and deletions only from the front or back with a fixed capacity.
• Developed a linked list-based data structure (Linked Front Back Capped List) with Comparable interface,
supporting element comparisons and efficient indexing operations.
• Created a comprehensive test suite (Project B Driver) to validate list operations, including addition,
removal, indexing, and capacity constraints, ensuring robust functionality.
Crime Analyzer: Binary Search Tree-Based Crime Data Processing System Nov 2023 - Dec 2023
Java, Data Structures, Binary Search Tree (BST), OOP, File I/O, CSV Parsing
• Developed a Binary Search Tree (BST)-based system to efficiently store, search, and analyze police
reports from large datasets.
• Implemented duplicate-aware BST (BinarySearchTreeWithDups) to optimize crime incident tracking,
frequency analysis, and custom search operations.
• Processed and analyzed police report data from CSV files using Java I/O, enabling efficient retrieval and
statistical crime trend analysis.
• Designed and optimized tree traversal algorithms to improve search efficiency, data structure testing, and
real-time crime analysis.
ADDITIONAL INFORMATION
Skills: AI Fundamentals, Machine Learning, Java & Python (Programming Language), Project Management
Languages: Mandarin (native), English (proficient)`
