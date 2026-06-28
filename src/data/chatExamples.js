/**
 * Few-shot examples for the Yeabtsega AI chatbot.
 * These are prepended to every Groq request so the model learns
 * the exact tone, style, and facts to use — without fine-tuning.
 */
export const FEW_SHOT_EXAMPLES = [
  {
    role: 'user',
    content: 'Who is Yeabtsega Tolera?',
  },
  {
    role: 'assistant',
    content:
      'Yeabtsega Tolera is a software developer and Computer Science undergraduate from Ethiopia, expected to graduate in 2027. He builds everything from low-level Linux shells in C/C++ to full-stack web apps and SaaS platforms.',
  },
  {
    role: 'user',
    content: 'What programming languages does Yeabtsega know?',
  },
  {
    role: 'assistant',
    content:
      'Yeabtsega is proficient in C, C++, Java, Python, JavaScript, HTML, and CSS. He is comfortable working at both the systems level and in full-stack web development.',
  },
  {
    role: 'user',
    content: 'What tech stack does he use?',
  },
  {
    role: 'assistant',
    content:
      'Yeabtsega uses React for frontend development, MySQL and Supabase for databases, and languages like C, C++, Java, Python, and JavaScript across his projects. He is experienced in both systems programming and web development.',
  },
  {
    role: 'user',
    content: 'Tell me about his projects.',
  },
  {
    role: 'assistant',
    content:
      'Yeabtsega has built four notable projects: a School Management SaaS system, a movie streaming site called MovieXD, a mini Linux shell called OShell written in C/C++, and a furniture business website. His work spans from low-level systems programming all the way to full-stack web applications.',
  },
  {
    role: 'user',
    content: 'What is OShell?',
  },
  {
    role: 'assistant',
    content:
      'OShell is a mini Linux shell Yeabtsega built from scratch using C and C++. It implements core shell features like command execution and piping, and it showcases his deep understanding of operating systems and low-level programming.',
  },
  {
    role: 'user',
    content: 'Tell me about MovieXD.',
  },
  {
    role: 'assistant',
    content:
      'MovieXD is a movie streaming website Yeabtsega built where users can browse and watch movies online. It demonstrates his ability to build real-world, user-facing web applications.',
  },
  {
    role: 'user',
    content: 'What is the School Management System?',
  },
  {
    role: 'assistant',
    content:
      'The School Management System is a SaaS platform Yeabtsega built to manage school operations including students, teachers, classes, and administration. It is designed to help digitize and streamline school management.',
  },
  {
    role: 'user',
    content: 'What is the furniture website project?',
  },
  {
    role: 'assistant',
    content:
      'Yeabtsega built a professional website for a furniture business to showcase and sell their products online. It helped the business establish a strong online presence.',
  },
  {
    role: 'user',
    content: 'What is his educational background?',
  },
  {
    role: 'assistant',
    content:
      'Yeabtsega is currently pursuing a Bachelor of Science in Computer Science in Ethiopia, with an expected graduation in 2027. His studies focus on software development, systems programming, and web technologies.',
  },
  {
    role: 'user',
    content: 'Is Yeabtsega available for freelance work?',
  },
  {
    role: 'assistant',
    content:
      'Yes! Yeabtsega is open to freelance projects, internships, and collaborations. Feel free to reach out to him at yabuxd56@gmail.com or on Telegram at @yabuxd56.',
  },
  {
    role: 'user',
    content: 'How can I contact Yeabtsega?',
  },
  {
    role: 'assistant',
    content:
      'You can reach Yeabtsega by email at yabuxd56@gmail.com, by phone at +251982108763, or on Telegram at @yabuxd56. He is always open to new opportunities and conversations.',
  },
  {
    role: 'user',
    content: 'Is he open to remote work?',
  },
  {
    role: 'assistant',
    content:
      'Yes, Yeabtsega is open to remote work, freelance projects, internships, and collaborations with other developers anywhere in the world.',
  },
  {
    role: 'user',
    content: 'What kind of developer is Yeabtsega?',
  },
  {
    role: 'assistant',
    content:
      'Yeabtsega is a versatile developer who works across both systems programming and full-stack web development. He has built everything from a Linux shell in C/C++ to SaaS platforms and streaming websites, showing both depth and breadth in his skills.',
  },
  {
    role: 'user',
    content: 'Does Yeabtsega know React?',
  },
  {
    role: 'assistant',
    content:
      'Yes, Yeabtsega uses React for frontend development and has applied it in real projects including his School Management SaaS system and other web applications.',
  },
  {
    role: 'user',
    content: 'What databases does he work with?',
  },
  {
    role: 'assistant',
    content:
      'Yeabtsega works with MySQL and Supabase for database management. He has used them in his web and SaaS projects to handle data storage and backend functionality.',
  },
  {
    role: 'user',
    content: 'Where is Yeabtsega from?',
  },
  {
    role: 'assistant',
    content:
      'Yeabtsega Tolera is from Ethiopia, where he is currently studying Computer Science and building software projects.',
  },
  {
    role: 'user',
    content: 'When does he graduate?',
  },
  {
    role: 'assistant',
    content:
      'Yeabtsega is expected to graduate with his B.Sc. in Computer Science in 2027. He is currently in his undergraduate studies in Ethiopia.',
  },
  {
    role: 'user',
    content: 'Can I hire Yeabtsega?',
  },
  {
    role: 'assistant',
    content:
      'Absolutely! Yeabtsega is open to freelance work, internships, and collaborations. You can contact him directly at yabuxd56@gmail.com or on Telegram at @yabuxd56 to discuss opportunities.',
  },
  {
    role: 'user',
    content: 'Does he know Python?',
  },
  {
    role: 'assistant',
    content:
      'Yes, Python is one of Yeabtsega\'s programming languages. He uses it alongside C, C++, Java, and JavaScript depending on the project requirements.',
  },
  {
    role: 'user',
    content: 'What is his strongest skill?',
  },
  {
    role: 'assistant',
    content:
      'Yeabtsega\'s strength lies in his versatility — he is equally comfortable with low-level systems programming in C/C++ and high-level full-stack web development using React and JavaScript. His OShell project particularly demonstrates strong depth in systems programming.',
  },
];
