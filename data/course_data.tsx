import courseImg from "../public/course.png";
import CourseElementModel, { TrainingMode } from "@/models/CourseElementModel";
import { c1f, c2f, c3f, c4f } from "./course/course_features";
import { c1cc, c2cc, c3cc, c4cc } from "./course/course_content";
import { c1wp, c2wp, c3wp, c4wp } from "./course/course_why_program";
import { c1faq, c2faq, c3faq, c4faq } from "./course/course_faq";

export let CourseData: Array<CourseElementModel> = [
  {
    id: "c1",
    title: "Construction Skill Development Internship Training",
    subTitle: "Signature Program",
    days: 60,
    features: c1f,
    path: "/course/construction-skill-development-internship-training",
    courseImg: courseImg,
    next_program_date: [
      {
        id: "c1npd1",
        date: "1st June 2024",
      },
      {
        id: "c1npd2",
        date: "1st Jully 2024",
        time: "7:30am to 10:00am",
      },
    ],
    training_mode: TrainingMode.Offline,
    training_fees: 16000,
    about_trining: `Welcome to our Premium Master Stroke Program: the "Construction Skill Development Internship Training." customised for individuals in the Civil domain, this course is a game-changer for Civil Engineers, Contractors, Builders, BTech and MTech students, Diploma students, Architects,  Government Officers, and entrepreneurs. In this course, we come across Basic Civil Knowledge, Business Skills, all types of construction drawing reading skills, site execution, Estimation and costing, Plan drafting, Project Billing, Project management skills, and many more. But it's not just about acquiring skills and knowledge; it's about how you can apply those skills and knowledge in the real world. That's why we arrange a mock interview for our trainees to propelpropelling theiryour career to new heights. Join us to not only enhance your expertise but also witness a positive impact on your earning potential. Elevate your career with the "Construction Skill Development Internship Training " - where knowledge meets opportunity.`,
    course_content: c1cc,
    why_program: c1wp,
    faq: c1faq,
    training_description: `In this course, we come across Basic Civil Knowledge, Business Skills, all types of construction drawing reading skills, site execution, Estimation and costing, Plan drafting, Project Billing, Project management skills, and many more. But it's not just about acquiring skills and knowledge; it's about how you can apply those skills and knowledge in the real world. That's why we arrange a mock interview for our trainees to propel propelling their your career to new heights.`,
    fees_breakup: `We are glad to say that we are coming with the Fees for "Construction Skill Development Internship Training!" is 16,000/- only\n* Secure Your Spot: Confirm your registration with a Rs. 2000/- fee (deducted from the total).\n* Flexible Payment Options: Pay in 2 installments.\n1) First Installment: In the First Week after Joining with Rs. 7000/-\n2) Second Instalment: Your second installment of Rs. 7000/- is due 15 days after joining.`,
  },
  {
    id: "c2",
    title: "Skill Booster Internship Training Program",
    subTitle: "Signature Program",
    days: 30,
    features: c2f,
    path: "/course/skill-booster-internship-training-program",
    courseImg: courseImg,
    next_program_date: [
      {
        id: "c1npd1",
        date: "1st June 2024",
        time: "7:30am to 10:00am",
      },
      {
        id: "c1npd2",
        date: "1st Jully 2024",
        time: "7:30am to 10:00am",
      },
    ],
    training_mode: TrainingMode.Offline,
    training_fees: 8000,
    about_trining: `Welcome to our premium program: the "Skill Booster Internship Training." customized for individuals in the Civil domain, this course is a game-changer for Civil Engineers, Contractors, Builders, BTech and MTech students, Diploma students, Architects,  Government Officers, and entrepreneurs. In this course, we come across with  Basic Civil Knowledge, Business Skills, all types of construction drawing reading skills, site execution, Estimation and costing, Plan drafting, Billing, Project management skills, and many more. But it's not just about acquiring skills and knowledge; it's about propelling your career to new heights. Join us to not only enhance your expertise but also witness a positive impact on your earning potential. Elevate your career with the "Skill Booster Internship Training Program" - where knowledge meets opportunity.`,
    course_content: c2cc,
    why_program: c2wp,
    faq: c2faq,
    training_description: `Skill Booster Internship Training Program is a blend of technical and professional elements proven to be a gateway to a strong civil engineering career.`,
    fees_breakup: `We are glad to say that we are coming with the Fees for "SKILL BOOSTER PROGRAM FOR CIVIL ENGINEERS!" is 8,000/- only\n1)Registration Fees - Rs 1,000/-\n2) Remaining Fees - Rs 7,000/- You have to pay in the first week after after joining.`,
  },
  {
    id: "c3",
    title: "Professional Billing Course",
    subTitle: "Signature Program",
    days: 15,
    features: c3f,
    path: "/course/professional-billing-course",
    courseImg: courseImg,
    next_program_date: [
      {
        id: "c1npd1",
        date: "1st June 2024",
        time: "7:30am to 10:00am",
      },
      {
        id: "c1npd2",
        date: "1st Jully 2024",
        time: "7:30am to 10:00am",
      },
    ],
    training_mode: TrainingMode.Offline && TrainingMode.Online,
    training_fees: 5000,
    about_trining:
      "Professional billing course by Excellence Foundation makes you an expert in the field of preparing bills and claims as per contract documents and IS Codes. Project Billing plays a vital role in the entire project from Execution to Project handover. Billing is the documentary aspect of the work done, through which payments can be made to the person involved in the contract and responsible for completing the work. Imperfect Billing can cause considerable losses to the contractor or the client. Hence, bills should be perfect and self-explanatory at any stage of the work. This extensive course gives students/Professionals a full understanding of billing engineering's core ideas and top practices. Immerse yourself in hands-on learning as our students gain real-world experience by preparing construction bills during live training sessions. In order to assure accurate and effective billing operations, reduce financial risks, and increase project profitability, students will acquire crucial information and abilities. The objective of the course is to recognize the function and significance of billing engineers in engineering and building projects. Develop your skills in cost monitoring, cost control, and estimation. Students will study contract management principles and how they affect billing procedures. Students will gain proficiency in the creation and review of change orders, progress reports, and project invoicing and learn about the related legal and regulatory obligations.",
    course_content: c3cc,
    why_program: c3wp,
    faq: c3faq,
    training_description: `Professional billing course by Excellence Foundation makes you an expert in the field of preparing bills and claims as per contract documents and IS Codes. This extensive course gives students/Professionals a full understanding of billing engineering's core ideas and top practices.`,
    fees_breakup: `We are glad to say that we are coming with the Fees for "Professional Billing Course" is 5,000/- only\n1)Registration Fees - Rs 1,000/-\n2) Remaining Fees - Rs 4,000/- You have to pay in the first week after after joining.`,
  },
  {
    id: "c4",
    title: "Professional Estimation & Costing Training",
    subTitle: "Signature Program",
    days: 15,
    features: c4f,
    path: "/course/professional-estimation-and-costing-training",
    courseImg: courseImg,
    next_program_date: [
      {
        id: "c1npd1",
        date: "1st June 2024",
        time: "7:30am to 10:00am",
      },
      {
        id: "c1npd2",
        date: "1st Jully 2024",
        time: "7:30am to 10:00am",
      },
    ],
    training_mode: TrainingMode.Online,
    training_fees: 3500,
    about_trining: `The course "Professional Estimation & Costing Training" by Excellence Foundation customised for individuals in the Civil domain, this course is a game-changer for Civil Engineers, Contractors, Builders, BTech and MTech students, Diploma students, Architects,  Government Officers, and Entrepreneurs. In this course, We come across Basic Civil Knowledge, all types of construction drawing reading skills, Estimation and costing in Ms-Excel, Project management skills, Material Statement Report, Rate Analysis of Building Items and many more. You will also get to know the different methods of project estimation. The course is infused with practical Live Project examples and real photographs to understand different aspects of construction better. But it's not just about acquiring skills and knowledge; it's about propelling your career to new heights. Join us to not only enhance your expertise but also witness a positive impact on your earning potential. Elevate your career with the "Professional Estimation & Costing Training" - where knowledge meets opportunity.`,
    course_content: c4cc,
    why_program: c4wp,
    faq: c4faq,
    training_description: `This training makes you expert in estimation & Costing of any Building from Substructure to Superstructure. In this Training, you have to solve the project live with a trainer. You will also get to know the different methods of project estimation. The course is infused with Real Project Case study, photographs and Videos to understand different aspects of construction better. This Training will not only help the participants to gain the skills, but it will also help in uplifting the pay scale & Career Development.`,
    fees_breakup: `We are glad to say that we are coming with the Fees for "Professional Estimation & Costing Training Program!" is 3,500/- only`,
  },
];
