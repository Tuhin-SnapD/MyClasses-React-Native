const courseImages = [
  "https://cdn-icons-png.flaticon.com/512/2436/2436636.png", // Education
  "https://cdn-icons-png.flaticon.com/512/2436/2436636.png", // Book
  "https://cdn-icons-png.flaticon.com/512/2436/2436636.png", // Graduation
  "https://cdn-icons-png.flaticon.com/512/2436/2436636.png", // Study
  "https://cdn-icons-png.flaticon.com/512/2436/2436636.png", // Learning
  "https://cdn-icons-png.flaticon.com/512/2436/2436636.png", // Course
  "https://cdn-icons-png.flaticon.com/512/2436/2436636.png", // Online Learning
];

const courseTitles = [
  "Complete JEE Mains Bootcamp",
  "Advanced Physics Course",
  "Chemistry Fundamentals",
  "Mathematics Masterclass",
  "Biology for NEET",
  "Computer Science Basics",
  "English Literature",
];

const courseDescriptions = [
  "Comprehensive preparation for JEE Mains with expert guidance and practice tests.",
  "Master physics concepts with hands-on experiments and problem-solving techniques.",
  "Learn chemistry fundamentals with practical applications and real-world examples.",
  "Advanced mathematics course covering calculus, algebra, and trigonometry.",
  "Complete biology preparation for NEET with detailed explanations and diagrams.",
  "Introduction to computer science with programming fundamentals and algorithms.",
  "Explore classic literature and develop critical thinking and analytical skills.",
];

const courseData = {
  id: "1",
  course1: "Physics",
  course2: "Chemistry",
  course3: "Maths",
  price: 3000,
};

const Courses = Array.from({ length: 7 }, (_, index) => ({
  ...courseData,
  id: (index + 1).toString(),
  title: courseTitles[index],
  description: courseDescriptions[index],
  image: {
    uri: courseImages[index % courseImages.length]
  },
}));

export default Courses;