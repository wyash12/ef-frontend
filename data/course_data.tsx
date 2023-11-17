import courseImg from "../public/course.png";
import CourseElementModel, { TrainingMode } from "@/models/CourseElementModel";

export let CourseData: Array<CourseElementModel> = [
  // skill booster course
  {
    id: "c1",
    title: "Construction Skill Development Internship Training",
    subTitle: "Signature Program",
    days: 60,
    features: [
      "Mock Interview",
      "Off-site and on-site training",
      "Construction Management",
    ],
    path: "/course/construction-skill-development-internship-training",
    courseImg: courseImg,
    next_program_date: "1st June",
    training_mode: TrainingMode.Offline,
    training_fees: 16000,
    about_trining: `Welcome to our Premium Master Stroke Program: the "Construction Skill Development Internship Training." customised for individuals in the Civil domain, this course is a game-changer for Civil Engineers, Contractors, Builders, BTech and MTech students, Diploma students, Architects,  Government Officers, and entrepreneurs. In this course, we come across Basic Civil Knowledge, Business Skills, all types of construction drawing reading skills, site execution, Estimation and costing, Plan drafting, Project Billing, Project management skills, and many more. But it's not just about acquiring skills and knowledge; it's about how you can apply those skills and knowledge in the real world. That's why we arrange a mock interview for our trainees to propelpropelling theiryour career to new heights. Join us to not only enhance your expertise but also witness a positive impact on your earning potential. Elevate your career with the "Construction Skill Development Internship Training " - where knowledge meets opportunity.`,
    course_content: [
      {
        id: "c1c1",
        title: "Phase 1",
        points: [
          {
            id: "c1c1s1",
            title: "Unit Conversions",
            points: [
              "Master the art of converting construction units seamlessly - from meters to feet, inches to cubic meters, square feet to hectares, and beyond. Gain expertise in diverse measurements like Cum, Cuft, Brass, Hectare, Acre, Guntha, War, Yard, and more effortlessly by our professional unit conversion tricks with a practical and engaging learning experience.",
            ],
          },
          {
            id: "c1c1s2",
            title: "Modes of Measurement",
            points: [
              "Precision measurements of trucks and dumpers for accurate brass volume calculations",
            ],
          },
          {
            id: "c1c1s3",
            title: "MS - Excel Training",
            points: [
              "Unlock the power of industry-Oriented MS-Excel Software revolutionising construction processes. From crafting budgets to billing, generating BOQs, and streamlining cash flow, it excels in quantity surveying and material estimations. Elevate your construction game with ME-Excel for Enhance construction project financial management with precision and efficiency.",
            ],
          },
          {
            id: "c1c1s4",
            title: "Business Skills",
            points: [
              "Master crucial business skills for successful deal-making. Explore Building By-laws, Layout Development, UDCPR-based Building Calculations, Sanction Drawing Area Calculations, and more in our comprehensive course. Elevate your expertise and seal deals with confidence.",
            ],
          },
          {
            id: "c1c1s5",
            title:
              "Introduction, Reading, interpreting & Execution of Various Types of Drawings",
            points: [
              "Structural Drawings",
              "Architectural Drawings",
              "Working Drawings",
              "MEP Drawings",
            ],
          },
          {
            id: "c1c1s6",
            title: "Measurement techniques for building Items",
            points: [
              "Measurement techniques for building items like excavation, PCC, RCC, reinforcement, brickwork, blockwork, plastering, flooring, painting, doors, windows, ventilators, and more",
            ],
          },
          {
            id: "c1c1s7",
            title:
              "BOQ Preparation for Various Items (Earth Work, Civil work, Finishing Work, Development Work, MEP, Infrastructure)",
            points: [
              "Earth Work - Excavation, Backfilling and Soiling",
              {
                id: "c1c1s7s1",
                title: "Civil work (Substructure & Superstructure)",
                points: [
                  "Bar Bending Schedule - Footing, Column, Stirrups, Beam, Slabs, Staircase, Lift and More",
                  "Concrete - Footing, Column, Beam, Slabs, Staircase, Lift and More",
                ],
              },
              "Finishing Work - Brickwork, Blockwork, Plastering, Putti, Primer, Painting, Flooring & Waterproofing Work.",
              "Development Work -  Pavement Block, Compound Wall and More",
            ],
          },
          {
            id: "c1c1s8",
            title: "Thumb Rules for Building Material Calculations",
            points: [
              "Learn Thumb Rules for precise calculations of building materials like Cement, Sand, Aggregate, Brick, Block, Flooring, Tiling, Plaster, Putty, Primer, and Painting. Simplify your construction processes with our professional guidelines, ensuring accuracy and efficiency in every project",
            ],
          },
          {
            id: "c1c1s9",
            title: "Construction-Related Documents Reading & Understanding",
            points: [
              "7/12 extract, Quotation, Work Order and Purchase Order, Estimation, DPR, MPR, Drafts of MOM, Construction Checklists, BOQ, and more, gain expertise in understanding and navigating crucial paperwork in the construction industry",
            ],
          },
          {
            id: "c1c1s10",
            title: "Industrial Oriented AutoCAD",
            points: [
              "Master Industrial-oriented AutoCAD 2D with our expert training, Learn clear strategies for speedy and accurate drafting of any plan. Elevate your skills seamlessly and professionally.",
            ],
          },
          {
            id: "c1c1s11",
            title: "Site Training",
            points: [
              "Project Execution",
              "Material Management",
              "Vendor Management",
              "Quality Management",
              "Safety Management",
            ],
          },
          {
            id: "c1c1s12",
            title: "Live Project Case Study from Start to Finish",
          },
          {
            id: "c1c1s13",
            title: "Computer Skills and Soft Skills",
          },
          {
            id: "c1c1s14",
            title: "Placement Detective",
            points: [
              "Resume Building Session, Company Searching, Company Approach, Job Searching, Interview Questions, Interview Selection Tips and Tricks",
            ],
          },
          {
            id: "c1c1s15",
            title: "Estimation Hacks",
            points: [
              "15 Minutes Calculation of any Building & Automation in MS Excel (Put the values and get the answer)",
            ],
          },
        ],
      },
      {
        id: "c1c2",
        title: "Phase 2",
        points: [
          {
            id: "c1c2s1",
            title: "Introduction to Construction Billing Management",
            points: [
              "Understanding the roles & responsibilities of a Professional Billing Engineer in the construction work.",
            ],
          },
          {
            id: "c1c2s2",
            title:
              "Decoding Work Order Terms & Conditions  (Importance of tender & Contract for Billing Engineer)",
            points: [
              "Understand how to read Work Order and from that define the Bills Payment Terms & conditions",
            ],
          },
          {
            id: "c1c2s3",
            title: "Review of BOQ",
            points: [
              "Master the art of understanding the Specification of Items in Bill of Quantities",
              "Master the art of Define the Scope of Work as per Specification",
            ],
          },
          {
            id: "c1c2s4",
            title: "Payment methods to contractors in Construction Bills",
            points: [
              "Procedure of payments against Billing.",
              "Construction Billing Procedures from client side as well as contractor side.",
              "Procedure of Payment against Billing.",
            ],
          },
          {
            id: "c1c2s5",
            title: "Standard Billing Procedure & Formats",
            points: [
              "Learn industry-standard billing practices for both Corporate and Government sectors.",
            ],
          },
          {
            id: "c1c2s6",
            title:
              "Mode of Measurement Rules for Construction Bills As per IS 1200 & CPWD",
            points: [
              "Learn Mode of Measurement Rules of Various Construction Items Like Earth Work, Concrete Work, Shuttering Work, Steel ﻿Work, Brickwork, Flooring, Plastering & Painting and More.",
            ],
          },
          {
            id: "c1c2s7",
            title: "Preparation of Summary of abstract sheet",
          },
          {
            id: "c1c2s8",
            title:
              "Preparing construction RA / Final bills during live training sessions",
          },
          {
            id: "c1c2s9",
            title: "Petty / sub-contractor Billing",
          },
          {
            id: "c1c2s10",
            title: "Joint Venture Companies Billing",
          },
          {
            id: "c1c2s11",
            title: "Taxation Calculation for Bills (TDS, GST and More)",
          },
          {
            id: "c1c2s12",
            title: "Calculation of COP (Certificate of Payment)",
          },
          {
            id: "c1c2s13",
            title: "Reconciliation Statement Report",
            points: [
              "Learn to Prepare reconciliation statements for key construction materials like cement and steel.",
            ],
          },
          {
            id: "c1c2s14",
            title: "Escalation & De-Escalation Claim",
          },
          {
            id: "c1c2s15",
            title: "Labor Cess & BOCW Act",
          },
          {
            id: "c1c2s16",
            title: "Material Management",
            points: ["Raw Material Calculation & Wastage"],
          },
          {
            id: "c1c2s17",
            title: "Lump sum and Build-up Area Contract Bills",
          },
          {
            id: "c1c2s18",
            title: "Business-oriented Rate Analysis",
            points: [
              "Rate Analysis of Complete Building Items with labour, Extra Charges from SSR/DSR + Private Project Rate Analysis",
            ],
          },
          {
            id: "c1c2s19",
            title: "Various Advances and their Recovery Statements",
            points: [
              "Preparation of recovery statements of Various Advances like Mobilisation advance, T&P Advance, Secured Advance & so on",
            ],
          },
          {
            id: "c1c2s20",
            title:
              "Derivation Of Quick Calculation Strategies of cost coefficient from final Bills",
          },
        ],
      },
      {
        id: "c1c3",
        title: "Phase 3",
        points: [
          {
            id: "c1c3s1",
            title: "Job Interview Preparation",
          },
          {
            id: "c1c3s2",
            title: "Live Project Practice (Residential & Commercial)",
          },
          {
            id: "c1c3s3",
            title: "Job Hunting Success Strategy",
          },
          {
            id: "c1c3s4",
            title: "Interview Test",
          },
          {
            id: "c1c2s5",
            title: "Mock Interview",
          },
        ],
      },
    ],
    why_program: [
      "Partnered with 80 + Construction Companies for placement.",
      "Be an expert in cracking deals of construction projects with smart business tricks",
      "Bar Bending Schedule & Project Estimation techniques from start to complete",
      "Deal with Legal, Technical and Documentations of Construction Project",
      "Gain invaluable on-site experience for a holistic learning approach.",
      "Learn clear strategies for speedy and accurate drafting of any plan",
      "Calculate Building Material Quantity Like a Pro By All Thumb Rules",
      "Create a Smart Calculator for Project Estimation.",
      "You can be Prepared for any Corporate & Govt. Project Bills.",
      "You are able to Make Lump Sum & Build Up Area Contract Bills.",
      "You are Able to make Petty / Sub Contractor Bills.",
      "Understand all types of work order and their terms & conditions",
      "Payment methods to contractors in Construction Bills",
      "Calculation of COP (Certificate of Payment)",
      "You are able to Reconcile all construction building materials like Cement & Steel and more.",
      "Understand the tender work order and rate analysis process so that you are well aware of the costing of your construction projects",
      "You are able to calculate any building materials.",
      "Rate Analysis of any Building item",
      "Get beyond books and theory. Our Practical Curriculum is designed as per market standards and on-site requirements.",
      "Enjoy assured placement assistance for your career advancement.",
      "Get beyond books and theory. Our Practical Curriculum is designed as per market standards and on-site requirements.",
      "Benefit from a limited batch size, ensuring personalized attention with a maximum of 15 students.",
    ],
    faq: [
      {
        id: "c1faq1",
        question:
          "Is this training only meant for Civil Engineers and architects ?",
        answer:
          "No! Our platform is for all enthusiasts not for professionals only. This course is open for Civil Engineers, Architects, Site Engineers, Quantity Surveyors Contractors, Sub-Contractors, Builders, Brokers, People having a construction or real estate-related background, or anyone who wants to start a new business in the construction sector.",
      },
      {
        id: "c1faq2",
        question: "Will I get Notes ?",
        answer:
          "Yes, Notes and drawings as per topic at the start of each session.",
      },
      {
        id: "c1faq3",
        question: "Is there Job Guarantee ?",
        answer:
          "Absolutely! We offer Assured placement assistance through our extensive network of company partnerships. Our comprehensive training also equips you with valuable skills in company searching, effective approach, job hunting, and mastering interview techniques. Your success journey starts here!",
      },
      {
        id: "c1faq4",
        question: "Will this Internship training be Online or Offline ?",
        answer:
          "Great question. It is an offline 60 Days Internship Training Program.",
      },
      {
        id: "c1faq5",
        question: "Is Doubt solving done after completion of course ?",
        answer:
          "Yes, you will be having lifetime support in technical doubts on our sessions and if any problem in your project during Job we assist you.",
      },
      {
        id: "c1faq6",
        question: "Session will be in which language ?",
        answer: "Session will be in Marathi, Hindi  & English.",
      },
      {
        id: "c1faq7",
        question: "Do you Provide food and accommodation ?",
        answer: `<ul>
        <li>We guide you with the best hostel list in our area, but we do not have accommodation.</li>
        <li>Food there are various places you can explore based on your choice.</li>
        </ul>`,
      },
      {
        id: "c1faq8",
        question: "Can I Pay Fees in Installments ?",
        answer: `<ul>
          <li>
          Secure Your Spot: Confirm your registration with a Rs. 2000/- fee (deducted from the total).
          </li>
          <li>
          Flexible Payment Options: Pay in 2 installments.
            <ul>
              <li>First Installment: In the First Week after Joining with Rs. 7000/-</li>
              <li>Second Instalment: Your second installment of Rs. 7000/- is due 15 days after joining.</li>
            </ul>
          </li>
        </ul>`,
      },
      {
        id: "c1faq9",
        question: "How many Students are in one Batch ?",
        answer:
          "Nice Question! It's an Industrial Internship Training Not a Seminar. In one batch we just take 15 students only. Because We Want To Make Experts With a Self-Learning Attitude.",
      },
      {
        id: "c1faq10",
        question: "I have some other queries. Who can help me ?",
        answer:
          "In case you have any further queries, feel free to reach out to us at +91 8830135459. Alternatively, you may email us at excellencefoundation.nk@gmail.com",
      },
    ],
  },
  {
    id: "c2",
    title: "Skill Booster Internship Training Program",
    subTitle: "Signature Program",
    days: 30,
    features: [
      "100% Assured placement assistance",
      "Classroom Learning & Site training",
      "Business skills & Industrial AutoCAD",
    ],
    path: "/course/skill-booster-internship-training-program",
    courseImg: courseImg,
    next_program_date: "1st June",
    training_mode: TrainingMode.Offline,
    training_fees: 8000,
    about_trining: `Welcome to our premium program: the "Skill Booster Internship Training." customized for individuals in the Civil domain, this course is a game-changer for Civil Engineers, Contractors, Builders, BTech and MTech students, Diploma students, Architects,  Government Officers, and entrepreneurs. In this course, we come across with  Basic Civil Knowledge, Business Skills, all types of construction drawing reading skills, site execution, Estimation and costing, Plan drafting, Billing, Project management skills, and many more. But it's not just about acquiring skills and knowledge; it's about propelling your career to new heights. Join us to not only enhance your expertise but also witness a positive impact on your earning potential. Elevate your career with the "Skill Booster Internship Training Program" - where knowledge meets opportunity.`,
    course_content: [
      {
        id: "c2c1",
        title: "Unit Conversions",
        points: [
          "Master the art of converting construction units seamlessly - from meters to feet, inches to cubic meters, square feet to hectares, and beyond. Gain expertise in diverse measurements like Cum, Cuft, Brass, Hectare, Acre, Guntha, War, Yard, and more effortlessly with our professional unit conversion tips & tricks with the practical and engaging learning experience.",
        ],
      },
      {
        id: "c2c2",
        title: " Modes of Measurement",
        points: [
          "Precision measurements of trucks and dumpers for accurate brass volume calculations",
        ],
      },
      {
        id: "c2c3",
        title: "MS - Excel Training",
        points: [
          "Unlock the power of industry-oriented MS-Excel Software revolutionizing construction processes. From crafting budgets to billing, generating BOQs, and streamlining cash flow, it excels in quantity surveying and material estimations. Elevate your construction game with ME-Excel to Enhance construction project financial management with precision and efficiency.",
        ],
      },
      {
        id: "c2c4",
        title: "Business Skills",
        points: [
          "Master crucial business skills for successful deal-making. Explore Building By-laws, Layout Development, UDCPR-based Building Calculations, Sanction Drawing Area Calculations, and more in our comprehensive course. Elevate your expertise and seal deals with confidence.",
        ],
      },
      {
        id: "c2c5",
        title:
          "Introduction, Reading, interpreting & Execution of Various Types of Drawings",
        points: [
          "Structural Drawings",
          "Architectural Drawings",
          "Working Drawings",
          "MEP Drawings",
        ],
      },
      {
        id: "c2c6",
        title: "Measurement techniques for building Items",
        points: [
          "Measurement techniques for building items like excavation, PCC, RCC, reinforcement, brickwork, blockwork, plastering, flooring, painting, doors, windows, ventilators, and many more",
        ],
      },
      {
        id: "c2c7",
        title:
          "BOQ Preparation for Various Items (Earth Work, Civil work, Finishing Work, Development Work, MEP, Infrastructure)",
        points: [
          "Earth work - Excavation, Backfilling and Soiling.",
          {
            id: "c2c7s1",
            title: "Civil work (Substructure & Superstructure)",
            points: [
              "Bar Bending Schedule - Footing, Column, Stirrups, Beam, Slabs, Staircase, Lift and many More",
              "Concrete - Footing, Column, Beam, Slabs, Staircase, Lift and More",
            ],
          },
          "Finishing Work - Brickwork, Blockwork, Plastering, Putti, Primer, Painting, Flooring & Waterproofing Work.",
          "Development Work -  Pavement Block, Compound Wall and More.",
        ],
      },
      {
        id: "c2c8",
        title: "Thumb Rules for Building Material Calculations",
        points: [
          "Learn Thumb Rules for precise calculations of building materials like Cement, Sand, Aggregate, Brick, Block, Flooring, Tiling, Plaster, Putty, Primer, and Painting. Simplify your construction processes with our professional guidelines, ensuring accuracy and efficiency in every project.",
        ],
      },
      {
        id: "c2c9",
        title: "Construction-Related Documents Reading & Understanding",
        points: [
          "7/12 extract, Quotation, Work Order and Purchase Order, Estimation, DPR, MPR, Drafts of MOM, Construction Checklists, BOQ, and more, gain expertise in understanding and navigating crucial paperwork in the construction industry.",
        ],
      },
      {
        id: "c2c10",
        title: "Industrial Oriented AutoCAD",
        points: [
          "Master Industrial-oriented AutoCAD 2D with our expert training, Learn clear strategies for speedy and accurate drafting of any plan. Elevate your skills seamlessly and professionally.",
        ],
      },
      {
        id: "c2c11",
        title: "Site Training",
        points: [
          "Project Execution",
          "Material Management",
          "Vendor Management",
          "Quality Management",
          "Safety Management",
        ],
      },
      {
        id: "c2c12",
        title: "Live Project Case Study from Start to Finish.",
      },
      {
        id: "c2c13",
        title: "Computer Skills and Soft Skills",
      },
      {
        id: "c2c14",
        title: "Placement Detective",
        points: [
          "Resume Building Session, Company Searching, Company Approach, Job Searching, Interview Questions, Interview Selection Tips and Tricks",
        ],
      },
      {
        id: "c2c15",
        title: "Estimation Hacks",
        points: [
          "15 Minutes Calculation of any Building & Automation in MS Excel (Put the values and get the answer)",
        ],
      },
    ],
    why_program: [
      "Be an expert in cracking deals of construction projects with smart business tricks",
      "Bar Bending Schedule & Project Estimation techniques from start to complete",
      "Deal with Legal, Technical and Documentations of Construction Project",
      "Gain invaluable on-site experience for a holistic learning approach.",
      "Learn clear strategies for speedy and accurate drafting of any plan",
      "Calculate Building Material Quantity Like a Pro By All Thumb Rules",
      "Create Smart Calculator for Project Estimation",
      "Enjoy assured placement assistance for your career advancement.",
      "Get beyond books and theory. Our Practical Curriculum is designed as per market standards and on-site requirements.",
      "Benefit from a limited batch size, ensuring personalised attention with a maximum of 15 students.",
    ],
    faq: [
      {
        id: "c2faq1",
        question:
          "Is this training only meant for Civil Engineers and architects ?",
        answer:
          "No! Our platform is for all enthusiasts not for professionals only. This course is open for Civil Engineers, Architects, Site Engineers, Quantity Surveyors Contractors, Sub-Contractors, Builders, Brokers, People having a construction or real estate-related background, or anyone who wants to start a new business in the construction sector.",
      },
      {
        id: "c2faq2",
        question: "Will I get Notes ?",
        answer:
          "Yes, Notes and Drawings as per topic at the start of each session.",
      },
      {
        id: "c2faq3",
        question: "Is there Job Guarantee ?",
        answer:
          "Absolutely! We offer Assured placement assistance through our extensive network of company partnerships. Our comprehensive training also equips you with valuable skills in company searching, effective approach, job hunting, and mastering interview techniques. Your success journey starts here!",
      },
      {
        id: "c2faq4",
        question: "Will this Internship training be Online or Offline ?",
        answer:
          "Great question. It is an offline 30 Days Internship Training Program.",
      },
      {
        id: "c2faq5",
        question: "Is Doubt solving done after completion of course ?",
        answer:
          "Yes, you will be having lifetime support in technical doubts on our sessions and if any problem in your project during Job we assist you.",
      },

      {
        id: "c2faq6",
        question: "Session will be in which language ?",
        answer: "Session will be in Marathi, Hindi  & English.",
      },

      {
        id: "c2faq7",
        question: "Do you Provide food and accommodation ?",
        answer: `<ul>
          <li>We guide you with the best hostel list in our area, but we do not have accommodation.</li>
          <li>Food there are various places you can explore based on your choice.</li>
        </ul>`,
      },
      {
        id: "c2faq8",
        question: "Can I Pay Fees in Instalments ?",
        answer:
          "Fees can be paid in Instalments but It will depend on the Conversation with Office admin. You have to pay a Registration fee of Rs. 1000/- for Confirmation (It will be deducted from your total Fees)",
      },
      {
        id: "c2faq9",
        question: "How many Students are in one Batch ?",
        answer:
          "Nice Question! It's an Industrial Internship Training Not a Seminar. In one batch we just take 15 students only. Because We Want To Make Experts With a Self-Learning Attitude.",
      },
      {
        id: "c2faq10",
        question: "I have some other queries. Who can help me ?",
        answer:
          "In case you have any further queries, feel free to reach out to us at +91-8830135459. Alternatively, you may mail us at excellencefoundation.nk@gmail.com",
      },
    ],
  },
  {
    id: "c3",
    title: "Professional Billing Course",
    subTitle: "Signature Program",
    days: 15,
    features: [
      "Hands-on preparing construction RA & Final Bills by standard Procedure",
      "Business Oriented Rate Analysis",
      "Taxation Calculation for Bills",
    ],
    path: "/course/professional-billing-course",
    courseImg: courseImg,
    next_program_date: "1st June",
    training_mode: TrainingMode.Offline && TrainingMode.Online,
    training_fees: 5000,
    about_trining:
      "Professional billing course by Excellence Foundation makes you an expert in the field of preparing bills and claims as per contract documents and IS Codes. Project Billing plays a vital role in the entire project from Execution to Project handover. Billing is the documentary aspect of the work done, through which payments can be made to the person involved in the contract and responsible for completing the work. Imperfect Billing can cause considerable losses to the contractor or the client. Hence, bills should be perfect and self-explanatory at any stage of the work. This extensive course gives students/Professionals a full understanding of billing engineering's core ideas and top practices. Immerse yourself in hands-on learning as our students gain real-world experience by preparing construction bills during live training sessions. In order to assure accurate and effective billing operations, reduce financial risks, and increase project profitability, students will acquire crucial information and abilities. The objective of the course is to recognize the function and significance of billing engineers in engineering and building projects. Develop your skills in cost monitoring, cost control, and estimation. Students will study contract management principles and how they affect billing procedures. Students will gain proficiency in the creation and review of change orders, progress reports, and project invoicing and learn about the related legal and regulatory obligations.",
    course_content: [
      {
        id: "c3c1",
        title: "Introduction to Construction Billing Management",
        points: [
          "Understanding the roles & responsibilities of Professional Billing Engineer in construction work.",
        ],
      },
      {
        id: "c3c2",
        title:
          "Decoding Work Order Terms & Conditions  (Importance of tender & Contract for Billing Engineer)",
        points: [
          "Understand how to read Work Order and from that define the Bills Payment Terms & conditions.",
        ],
      },
      {
        id: "c3c3",
        title: "Review of BOQ",
        points: [
          "Master the art of understanding the Specification of Items in Bill of Quantities.",
          "Master the art of Define the Scope of Work as per Specification",
        ],
      },
      {
        id: "c3c4",
        title: "Payment methods to contractors in Construction Bills",
        points: [
          "Procedure of payments against Billing.",
          "Construction Billing Procedures from client side as well as contractor side.",
          "Procedure of Payment against Billing.",
        ],
      },
      {
        id: "c3c5",
        title: "Standard Billing Procedure & Formats",
        points: [
          "Learn industry-standard billing practices for both Corporate and Government sectors.",
        ],
      },
      {
        id: "c3c6",
        title:
          "Mode of Measurement Rules for Construction Bills As per IS 1200 & CPWD",
        points: [
          "Learn Mode of Measurement Rules of Various Construction Items Like Earth Work, Concrete Work, Shuttering Work, Steel ﻿Work, Brickwork, Flooring, Plastering & Painting and More",
        ],
      },
      {
        id: "c3c7",
        title: "Preparation of Summary of Abstract sheet",
      },
      {
        id: "c3c8",
        title:
          "Preparing construction RA / Final bills during live training sessions.",
      },
      {
        id: "c3c9",
        title: "Petty / sub-contractor Billing",
      },
      {
        id: "c3c10",
        title: "Joint Venture Companies Billing",
      },
      {
        id: "c3c11",
        title: "Taxation Calculation for Bills (TDS, GST and More)",
      },
      {
        id: "c3c12",
        title: "Calculation of COP (Certificate of Payment)",
      },
      {
        id: "c3c13",
        title: "Reconciliation Statement Report",
        points: [
          "Learn to Prepare reconciliation statements for key construction materials like cement and steel.",
        ],
      },
      {
        id: "c3c14",
        title: "Escalation & De-Escalation Claim",
      },
      {
        id: "c3c15",
        title: "Labour Cess & BOCW Act",
      },
      {
        id: "c3c16",
        title: "Material Management",
        points: ["Raw Material Calculation & Wastage"],
      },
      {
        id: "c3c17",
        title: "Lump sum and Build-up Area Contract Bills",
      },
      {
        id: "c3c18",
        title: "Business-oriented Rate Analysis",
        points: [
          "Rate Analysis of Complete Building Items with labour, Extra Charges from SSR/DSR + Private Project Rate Analysis",
        ],
      },
      {
        id: "c3c19",
        title: "Various Advances and their Recovery Statements",
        points: [
          "Preparation of recovery statements of Various Advances like Mobilisation advance, T&P Advance, Secured Advance & so on",
        ],
      },
      {
        id: "c3c20",
        title:
          "Derivation Of Quick Calculation Strategies of cost coefficient from final Bills",
      },
    ],
    why_program: [
      "You can Prepare any Corporate & Govt. Project Bills.",
      "You are able to Make Lump Sum & Build Up Area Contract Bills.",
      "You are able to make Petty / Sub Contractor Bills.",
      "Understand all types of work order and their terms & conditions",
      "Payment methods to contractors in Construction Bills",
      "Calculation of COP (Certificate of Payment)",
      "You are able to Reconcile all construction building materials like Cement & Steel and more.",
      "Understand the tender work order and rate analysis process so that you are well aware of the costing of your construction projects",
      "You are able to calculate any building materials.",
      "Rate Analysis of any Building item",
      "Get beyond books and theory. Our Practical Curriculum is designed as per market standards and on-site requirements.",
      "Benefit from a limited batch size, ensuring personalised attention with a maximum of 15 students.",
    ],
    faq: [
      {
        id: "c3faq1",
        question:
          "Is this training only meant for Civil Engineers and architects ?",
        answer:
          "No! Our platform is for all enthusiasts not for professionals only. This course is open for Civil Engineers, Architects, Site Engineers, Quantity Surveyors Contractors, Sub-Contractors, Builders, Brokers, People having a construction or real estate-related background, or anyone who wants to start a new business in the construction sector.",
      },
      {
        id: "c3faq2",
        question: "Will I get Notes ?",
        answer:
          "Yes, Notes and Drawings as per topic at the start of each session.",
      },
      {
        id: "c3faq3",
        question: "Is there Job Guarantee ?",
        answer:
          "Absolutely! We offer Assured placement assistance through our extensive network of company partnerships. Our comprehensive training also equips you with valuable skills in company searching, effective approach, job hunting, and mastering interview techniques. Your success journey starts here!",
      },
      {
        id: "c3faq4",
        question: "Will this Internship training be Online or Offline ?",
        answer:
          "Great question. We have both a batch of online & offline 15 Days Training.",
      },
      {
        id: "c3faq5",
        question: "Is Doubt solving done after completion of the course ?",
        answer:
          "Yes, you will be having lifetime support in technical doubts on our sessions and if any problem in your project during Job we assist you.",
      },
      {
        id: "c3faq6",
        question: "Session will be in which language ?",
        answer: "Session will be in Marathi, Hindi & English.",
      },
      {
        id: "c3faq7",
        question:
          "I have a full-time job, not sure if I can make it. Will you be sharing recordings ?",
        answer:
          "Yes! You will receive recordings of both classes and live training sessions.",
      },
      {
        id: "c3faq8",
        question: "Will I get lifetime access to the videos ?",
        answer:
          "Its access is only for 30 days while training is going on, then after you are added to our Whatsapp Community group where you clear your doubts and you can also call us if you have any doubt in future. We are always with you. We provide you Hand-holding Support after Training.",
      },
      {
        id: "c3faq9",
        question: "How many Students are in one Batch ?",
        answer:
          "Nice Question! It's an Industrial Internship Training Not a Seminar. In one batch we just take 15 students only. Because We Want To Make Experts With a Self-Learning Attitude.",
      },
      {
        id: "c3faq10",
        question: "I have some other queries. Who can help me ?",
        answer:
          "In case you have any further queries, feel free to reach out to us at +91-8830135459. Alternatively, you may email us at excellencefoundation.nk@gmail.com",
      },
    ],
  },
  {
    id: "c4",
    title: "Professional Estimation & Costing Training",
    subTitle: "Signature Program",
    days: 15,
    features: [
      "Estimation & Costing Hacks",
      "Smart Calculator for Project Estimation",
      "Thumb Rules for Building Material Calculation",
    ],
    path: "/course/professional-estimation-and-costing-training",
    courseImg: courseImg,
    next_program_date: "1st June",
    training_mode: TrainingMode.Online,
    training_fees: 3500,
    about_trining: `The course "Professional Estimation & Costing Training" by Excellence Foundation customised for individuals in the Civil domain, this course is a game-changer for Civil Engineers, Contractors, Builders, BTech and MTech students, Diploma students, Architects,  Government Officers, and Entrepreneurs. In this course, We come across Basic Civil Knowledge, all types of construction drawing reading skills, Estimation and costing in Ms-Excel, Project management skills, Material Statement Report, Rate Analysis of Building Items and many more. You will also get to know the different methods of project estimation. The course is infused with practical Live Project examples and real photographs to understand different aspects of construction better. But it's not just about acquiring skills and knowledge; it's about propelling your career to new heights. Join us to not only enhance your expertise but also witness a positive impact on your earning potential. Elevate your career with the "Professional Estimation & Costing Training" - where knowledge meets opportunity.`,
    course_content: [
      {
        id: "c4c1",
        title: "MS - Excel Training",
        points: [
          "Unlock the power of industry-Oriented MS-Excel Software revolutionising construction processes. From crafting budgets to billing, generating BOQs, and streamlining cash flow, it excels in quantity surveying and material estimations. Elevate your construction game with ME-Excel to Enhance construction project financial management with precision and efficiency.",
        ],
      },
      {
        id: "c4c2",
        title:
          "Introduction, Reading, interpreting & Execution of Various Types of Drawings",
        points: [
          "Structural Drawings",
          "Architectural Drawings",
          "Working Drawings",
          "MEP Drawings",
        ],
      },
      {
        id: "c4c3",
        title: "Measurement techniques for building Items",
        points: [
          "Measurement techniques for building items like excavation, PCC, RCC, reinforcement, brickwork, blockwork, plastering, flooring, painting, doors, windows, ventilators, and more",
        ],
      },
      {
        id: "c4c4",
        title:
          "BOQ Preparation for Various Items in MS-Excel (Earth Work, Civil work, Finishing Work, Development Work, MEP, Infrastructure)",
        points: [
          "Earth Work - Excavation, Backfilling and Soiling.",
          {
            id: "c4c4s1",
            title: "Civil work (Substructure & Superstructure)",
            points: [
              "Bar Bending Schedule - Footing, Column, Stirrups, Beam, Slabs, Staircase, Lift and many More",
              "Concrete - Footing, Column, Beam, Slabs, Staircase, Lift and More",
            ],
          },
          "Finishing Work - Brickwork, Blockwork, Plastering, Putti, Primer, Painting, Flooring & Waterproofing Work.",
          "Development Work -  Pavement Block, Compound Wall and More.",
        ],
      },
      {
        id: "c4c5",
        title: "Thumb Rules for Building Material Calculations",
        points: [
          "Learn Thumb Rules for precise calculations of building materials like Cement, Sand, Aggregate, Brick, Block, Flooring, Tiling, Plaster, Putty, Primer, and Painting. Simplify your construction processes with our professional guidelines, ensuring accuracy and efficiency in every project.",
        ],
      },
      {
        id: "c4c6",
        title: "Material Statement Report in MS- Excel",
        points: [
          "Learn to calculate Floor-wise Material Statement Report for a Building in Ms- Excel.",
        ],
      },
      {
        id: "c4c7",
        title: "Learn to Prepare Smart Building Material Calculator",
      },
      {
        id: "c4c8",
        title: "Business-oriented Rate Analysis",
        points: [
          "Rate Analysis of Complete Building Items with labour, Extra Charges from SSR/DSR + Private Project Rate Analysis",
        ],
      },
      {
        id: "c4c9",
        title: "Live Project Case Study from Start to Finish.",
      },
      {
        id: "c4c10",
        title: "Computer Skills and Soft Skills",
      },
    ],
    why_program: [
      "Bar Bending Schedule & Project Estimation & Costing techniques from start to finish",
      "Calculate Building Material Quantity Like a Pro By All Thumb Rules",
      "Create Smart Calculator for Project Estimation",
      "You can analyse Rate of any Building Items",
      "Get beyond books and theory. Our Practical Curriculum is designed as per market standards and on-site requirements.",
      "Benefit from a limited batch size, ensuring personalised attention with a maximum of 15 students.",
    ],
    faq: [
      {
        id: "c4faq1",
        question:
          "Is this training only meant for Civil Engineers and architects ?",
        answer:
          "No! Our platform is for all enthusiasts not for professionals only. This course is open for Civil Engineers, Architects, Site Engineers, Quantity Surveyors Contractors, Sub-Contractors, Builders, Brokers, People having a construction or real estate-related background, or anyone who wants to start a new business in the construction sector.",
      },
      {
        id: "c4faq2",
        question: "Will I get Notes ?",
        answer:
          "Yes, Notes and Drawings as per topic at the start of each session.",
      },
      {
        id: "c4faq3",
        question: "What if I have doubts while availing online classes ?",
        answer:
          "If you don't have any doubts, you've not learned well! In the live Training Session, you are one-to-one with our experts where you solve the doubts of each and every student one by one. Every doubt will be considered no matter what the size of the doubt is, whether it's small or big.",
      },
      {
        id: "c4faq4",
        question: "Will this training be live or pre-recorded ?",
        answer:
          "Great question. It's a mix of both. In a 15 days live training Program, daily one-hour is live training where you solve the all-building estimation live with the trainer (We Believe in hand-to-hand experience) and you will receive a pre-recorded session for all topic explanation.",
      },
      {
        id: "c4faq5",
        question: "Is Doubt solving done after completion of course ?",
        answer:
          "Yes, you will be having lifetime support in technical doubts on our sessions and if any problem in your project during Job we assist you.",
      },
      {
        id: "c4faq6",
        question:
          "I have a full-time job, not sure if I can make it. Will you be sharing recordings ?",
        answer:
          "Yes! You will receive recordings of both classes and live training sessions.",
      },
      {
        id: "c3faq7",
        question: "Will I get lifetime access to the videos ?",
        answer:
          "Its Access is only for 30 days while training is going on, then after you are added to our Whatsapp Community group where you clear your doubts and you can also call us if you have any doubts in the future. We are always with you. We provide you with Hand-holding Support after Training.",
      },
      {
        id: "c3faq8",
        question: "Session will be in which language ?",
        answer: "Session will be in Marathi, Hindi  & English.",
      },
      {
        id: "c3faq9",
        question: "How many Students are in one Batch ?",
        answer:
          "Nice Question! It's an Industrial Internship Training Not a Seminar. In one batch we just take 15 students only. Because We Want To Make Experts With a Self-Learning Attitude.",
      },
      {
        id: "c3faq10",
        question: "I have some other queries. Who can help me ?",
        answer:
          "In case you have any further queries, feel free to reach out to us at +91-8830135459. Alternatively, you may email us at excellencefoundation.nk@gmail.com",
      },
    ],
  },
];
