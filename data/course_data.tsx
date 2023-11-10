import courseImg from "../public/course.png";
import CourseElementModel, { TrainingMode } from "@/models/CourseElementModel";

export let CourseData: Array<CourseElementModel> = [
  // skill booster course
  {
    id: "c1",
    title: "Skill Booster",
    subTitle: "Signature Program",
    days: 30,
    features: [
      "100%  Placement Assistance.",
      "Off-site & On-Site Training.",
      "Business Skills.",
    ],
    path: "/course/skill-booster",
    courseImg: courseImg,
    next_program_date: "1st June",
    training_mode: TrainingMode.Offline,
    training_fees: 8000,
    about_trining:
      "We are happy to announce the Skill Booster Internship Training Program for Civil Engineers: This Internship Training is especially designed to equip Civil Engineers , Contractors, Builders, B tech, Diploma, Mtech Students , Architects , Government Officers, and Entrepreneurs with Site Execution & Project Management Skills . This Internship Training will not only help the participants to gain the skills, but it will also help in uplifting the pay scale & Career Development.",
    course_content: [
      {
        id: "c1cc1",
        title: "Unit Conversions",
        points: [
          "All Construction related units Like Meter, feet, inches, Cum, Cuft, Brass, Hectare, Acre, Guntha, War",
        ],
      },
      {
        id: "c1cc2",
        title: " Modes of Measurement",
        points: [
          "Measurements of trucks, dumpers to find out volume in brass.",
        ],
      },
      {
        id: "c1cc3",
        title: "MS – Excel Training.",
      },
      {
        id: "c1cc4",
        title: "Business Skills",
        points: [
          "Building Bye-Laws",
          "Layout development",
          "Building Calculations",
          "Sanction drawing area Calculations",
        ],
      },
      {
        id: "c1cc5",
        title: "Introduction, Reading & Execution of Drawings",
        points: [
          "Structural Drawings",
          "Architectural Drawings",
          "Working Drawings",
        ],
      },
      {
        id: "c1cc6",
        title: "Measurement for Building works like",
        points: [
          "Excavation, PCC, RCC, Brickwork/Blockwork, Plastering, Flooring, Painting, Door / Windows",
        ],
      },
      {
        id: "c1cc7",
        title:
          "Quantity Surveying & Estimation of Complete Project in MS-Excel from Excavation to Finishing",
        points: [
          "Earth Work – Excavation & backfilling",
          {
            id: "c1ccs1",
            title: "Civil work (Sub-structure & Super-structure)",
            points: [
              "Bar Bending Schedule - Footing, Column, Stirrups, Beam, Slabs, Staircase",
              "Concrete - Footing, Column, Beam, Slabs, Staircase",
              "Finishing Work - Brick Work, Block work, Plaster, Putti, Primer, Painting & Flooring",
            ],
          },
        ],
      },
      {
        id: "c1cc8",
        title: "Thumb Rules for Building Material Calculations",
        points: [
          "Cement, Sand, Aggregate, Brick, Block, Flooring I Tiling, Plaster, Putti, Primer, Painting",
        ],
      },
      {
        id: "c1cc9",
        title: "Construction-Related Documents Reading & understanding",
        points: [
          "7/12 extract, Quotation, Work Order, Purchase Order, Estimation, DPR, MPR, Drafts of MOM, Construction Checklists, BOQ",
        ],
      },
      {
        id: "c1cc10",
        title: "AutoCAD",
        points: [
          "Industrial Oriented AutoCAD 2D Training with our lucid tricks for Speed and Accuracy.",
        ],
      },
      {
        id: "c1cc11",
        title: "Site Training",
      },
      {
        id: "c1cc12",
        title: "Placement Assistance",
        points: [
          "Resume Building Session, Company Searching, Company Approach, Job Searching, Interview Questions, Interview Selection Tips and Tricks",
        ],
      },
      {
        id: "c1cc13",
        title: "Estimation Hacks",
        points: [
          "15 Minutes Calculation of any Building & Automation in MS-Excel (Put the values and get the answer)",
        ],
      },
    ],
    why_program: [
      "Be an expert in cracking deals of construction projects with smart business tricks",
      "Bar Bending Schedule & Project Estimation techniques from start to complete",
      "Deal with Legal, Technical and Documentations of Construction Project",
      "Explore on Site Experience",
      "Expertise in AutoCAD with effective speed and accuracy",
      "Calculate Building Material Quantity Like a Pro By All Thumb Rules",
      "Assured Placement Assistance",
      "Limited Batch size of 15 students",
    ],
    faq: [
      {
        id: "c1faq1",
        question:
          "Is this training only meant for Civil Engineers & Architects ?",
        answer:
          "No! Our platform is for all enthusiasts not for professionals only. This course is open for Civil Engineers, Architects, site engineers, quantity surveyors contractors, sub-contractors., builders, brokers, people having a construction or real estate related background, or anyone who wants to start a new business in the construction sector.",
      },
      {
        id: "c1faq2",
        question: "Will this Internship training be Online or Offline ?",
        answer:
          "Great question. Its offline 30 Days Internship Training Program",
      },
      {
        id: "c1faq3",
        question: "How many Students in one Batch ?",
        answer:
          "Nice Question! Its a Industrial Internship Training Not a Seminar. In one batch we just take 20 students only. Because We want To Make Experts with Self Learning Attitude.",
      },
      {
        id: "c1faq4",
        question: "What would be the Training Language ?",
        answer:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi provident perferendis aliquid dolores quaerat vero doloribus laudantium, possimus velit optio accusamus sapiente reiciendis voluptates excepturi commodi soluta earum iure voluptatum unde. Dolor, quam ad!",
      },
      {
        id: "c1faq5",
        question: "I have some other queries. Who can help me ?",
        answer:
          "In case you have any further queries, feel free to reach out to us on +91 8830135459. Alternately, you may mail us on excellencefoundation.nk@gmail.com",
      },
    ],
  },
  {
    id: "c2",
    title: "Professional Billing Course",
    subTitle: "Signature Program",
    days: 15,
    features: [
      "100%  Placement Assistance.",
      "Off-site & On-Site Training.",
      "Business Skills.",
    ],
    path: "/course/professional-billing-course",
    courseImg: courseImg,
    next_program_date: "1st June",
    training_mode: TrainingMode.Offline,
    training_fees: 8000,
    about_trining:
      "We are happy to announce the Skill Booster Internship Training Program for Civil Engineers: This Internship Training is especially designed to equip Civil Engineers , Contractors, Builders, B tech, Diploma, Mtech Students , Architects , Government Officers, and Entrepreneurs with Site Execution & Project Management Skills . This Internship Training will not only help the participants to gain the skills, but it will also help in uplifting the pay scale & Career Development.",
    course_content: [
      {
        id: "c1cc1",
        title: "Unit Conversions",
        points: [
          "All Construction related units Like Meter, feet, inches, Cum, Cuft, Brass, Hectare, Acre, Guntha, War",
        ],
      },
      {
        id: "c2cc1",
        title: " Modes of Measurement",
        points: [
          "Measurements of trucks, dumpers to find out volume in brass.",
        ],
      },
      {
        id: "c2cc3",
        title: "MS – Excel Training.",
      },
      {
        id: "c2cc4",
        title: "Business Skills",
        points: [
          "Building Bye-Laws",
          "Layout development",
          "Building Calculations",
          "Sanction drawing area Calculations",
        ],
      },
      {
        id: "c2cc5",
        title: "Introduction, Reading & Execution of Drawings",
        points: [
          "Structural Drawings",
          "Architectural Drawings",
          "Working Drawings",
        ],
      },
      {
        id: "c2cc6",
        title: "Measurement for Building works like",
        points: [
          "Excavation, PCC, RCC, Brickwork/Blockwork, Plastering, Flooring, Painting, Door / Windows",
        ],
      },
      {
        id: "c2cc7",
        title:
          "Quantity Surveying & Estimation of Complete Project in MS-Excel from Excavation to Finishing",
        points: [
          "Earth Work – Excavation & backfilling",
          {
            id: "c2ccs1",
            title: "Civil work (Sub-structure & Super-structure)",
            points: [
              "Bar Bending Schedule - Footing, Column, Stirrups, Beam, Slabs, Staircase",
              "Concrete - Footing, Column, Beam, Slabs, Staircase",
              "Finishing Work - Brick Work, Block work, Plaster, Putti, Primer, Painting & Flooring",
            ],
          },
        ],
      },
      {
        id: "c2cc8",
        title: "Thumb Rules for Building Material Calculations",
        points: [
          "Cement, Sand, Aggregate, Brick, Block, Flooring I Tiling, Plaster, Putti, Primer, Painting",
        ],
      },
      {
        id: "c2cc9",
        title: "Construction-Related Documents Reading & understanding",
        points: [
          "7/12 extract, Quotation, Work Order, Purchase Order, Estimation, DPR, MPR, Drafts of MOM, Construction Checklists, BOQ",
        ],
      },
      {
        id: "c2cc10",
        title: "AutoCAD",
        points: [
          "Industrial Oriented AutoCAD 2D Training with our lucid tricks for Speed and Accuracy.",
        ],
      },
      {
        id: "c2cc11",
        title: "Site Training",
      },
      {
        id: "c2cc12",
        title: "Placement Assistance",
        points: [
          "Resume Building Session, Company Searching, Company Approach, Job Searching, Interview Questions, Interview Selection Tips and Tricks",
        ],
      },
      {
        id: "c2cc13",
        title: "Estimation Hacks",
        points: [
          "15 Minutes Calculation of any Building & Automation in MS-Excel (Put the values and get the answer)",
        ],
      },
    ],
    why_program: [
      "Be an expert in cracking deals of construction projects with smart business tricks",
      "Bar Bending Schedule & Project Estimation techniques from start to complete",
      "Deal with Legal, Technical and Documentations of Construction Project",
      "Explore on Site Experience",
      "Expertise in AutoCAD with effective speed and accuracy",
      "Calculate Building Material Quantity Like a Pro By All Thumb Rules",
      "Assured Placement Assistance",
      "Limited Batch size of 15 students",
    ],
    faq: [
      {
        id: "c2faq1",
        question:
          "Is this training only meant for Civil Engineers & Architects ?",
        answer:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi provident perferendis aliquid dolores quaerat vero doloribus laudantium, possimus velit optio accusamus sapiente reiciendis voluptates excepturi commodi soluta earum iure voluptatum unde. Dolor, quam ad!",
      },
      {
        id: "c2faq2",
        question: "Will this Internship training be Online or Offline ?",
        answer:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi provident perferendis aliquid dolores quaerat vero doloribus laudantium, possimus velit optio accusamus sapiente reiciendis voluptates excepturi commodi soluta earum iure voluptatum unde. Dolor, quam ad!",
      },
      {
        id: "c2faq3",
        question: "How many Students in one Batch ?",
        answer:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi provident perferendis aliquid dolores quaerat vero doloribus laudantium, possimus velit optio accusamus sapiente reiciendis voluptates excepturi commodi soluta earum iure voluptatum unde. Dolor, quam ad!",
      },
      {
        id: "c2faq4",
        question: "What would be the Training Language ?",
        answer:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi provident perferendis aliquid dolores quaerat vero doloribus laudantium, possimus velit optio accusamus sapiente reiciendis voluptates excepturi commodi soluta earum iure voluptatum unde. Dolor, quam ad!",
      },
      {
        id: "c2faq5",
        question: "I have some other queries. Who can help me ?",
        answer:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi provident perferendis aliquid dolores quaerat vero doloribus laudantium, possimus velit optio accusamus sapiente reiciendis voluptates excepturi commodi soluta earum iure voluptatum unde. Dolor, quam ad!",
      },
    ],
  },
  {
    id: "c3",
    title: "Professional Estimation & Costing Training Program",
    subTitle: "Signature Program",
    days: 15,
    features: [
      "100%  Placement Assistance.",
      "Off-site & On-Site Training.",
      "Business Skills.",
    ],
    path: "/course/professional-estimation-costing-tringing-program",
    courseImg: courseImg,
    next_program_date: "1st June",
    training_mode: TrainingMode.Offline,
    training_fees: 8000,
    about_trining:
      "We are happy to announce the Skill Booster Internship Training Program for Civil Engineers: This Internship Training is especially designed to equip Civil Engineers , Contractors, Builders, B tech, Diploma, Mtech Students , Architects , Government Officers, and Entrepreneurs with Site Execution & Project Management Skills . This Internship Training will not only help the participants to gain the skills, but it will also help in uplifting the pay scale & Career Development.",
    course_content: [
      {
        id: "c3cc1",
        title: "Unit Conversions",
        points: [
          "All Construction related units Like Meter, feet, inches, Cum, Cuft, Brass, Hectare, Acre, Guntha, War",
        ],
      },
      {
        id: "c3cc2",
        title: " Modes of Measurement",
        points: [
          "Measurements of trucks, dumpers to find out volume in brass.",
        ],
      },
      {
        id: "c3cc3",
        title: "MS – Excel Training.",
      },
      {
        id: "c3cc4",
        title: "Business Skills",
        points: [
          "Building Bye-Laws",
          "Layout development",
          "Building Calculations",
          "Sanction drawing area Calculations",
        ],
      },
      {
        id: "c3cc5",
        title: "Introduction, Reading & Execution of Drawings",
        points: [
          "Structural Drawings",
          "Architectural Drawings",
          "Working Drawings",
        ],
      },
      {
        id: "c3cc6",
        title: "Measurement for Building works like",
        points: [
          "Excavation, PCC, RCC, Brickwork/Blockwork, Plastering, Flooring, Painting, Door / Windows",
        ],
      },
      {
        id: "c3cc7",
        title:
          "Quantity Surveying & Estimation of Complete Project in MS-Excel from Excavation to Finishing",
        points: [
          "Earth Work – Excavation & backfilling",
          {
            id: "c3ccs1",
            title: "Civil work (Sub-structure & Super-structure)",
            points: [
              "Bar Bending Schedule - Footing, Column, Stirrups, Beam, Slabs, Staircase",
              "Concrete - Footing, Column, Beam, Slabs, Staircase",
              "Finishing Work - Brick Work, Block work, Plaster, Putti, Primer, Painting & Flooring",
            ],
          },
        ],
      },
      {
        id: "c3cc8",
        title: "Thumb Rules for Building Material Calculations",
        points: [
          "Cement, Sand, Aggregate, Brick, Block, Flooring I Tiling, Plaster, Putti, Primer, Painting",
        ],
      },
      {
        id: "c3cc9",
        title: "Construction-Related Documents Reading & understanding",
        points: [
          "7/12 extract, Quotation, Work Order, Purchase Order, Estimation, DPR, MPR, Drafts of MOM, Construction Checklists, BOQ",
        ],
      },
      {
        id: "c3cc10",
        title: "AutoCAD",
        points: [
          "Industrial Oriented AutoCAD 2D Training with our lucid tricks for Speed and Accuracy.",
        ],
      },
      {
        id: "c3cc11",
        title: "Site Training",
      },
      {
        id: "c3cc12",
        title: "Placement Assistance",
        points: [
          "Resume Building Session, Company Searching, Company Approach, Job Searching, Interview Questions, Interview Selection Tips and Tricks",
        ],
      },
      {
        id: "c3cc13",
        title: "Estimation Hacks",
        points: [
          "15 Minutes Calculation of any Building & Automation in MS-Excel (Put the values and get the answer)",
        ],
      },
    ],
    why_program: [
      "Be an expert in cracking deals of construction projects with smart business tricks",
      "Bar Bending Schedule & Project Estimation techniques from start to complete",
      "Deal with Legal, Technical and Documentations of Construction Project",
      "Explore on Site Experience",
      "Expertise in AutoCAD with effective speed and accuracy",
      "Calculate Building Material Quantity Like a Pro By All Thumb Rules",
      "Assured Placement Assistance",
      "Limited Batch size of 15 students",
    ],
    faq: [
      {
        id: "c3faq1",
        question:
          "Is this training only meant for Civil Engineers & Architects ?",
        answer:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi provident perferendis aliquid dolores quaerat vero doloribus laudantium, possimus velit optio accusamus sapiente reiciendis voluptates excepturi commodi soluta earum iure voluptatum unde. Dolor, quam ad!",
      },
      {
        id: "c3faq2",
        question: "Will this Internship training be Online or Offline ?",
        answer:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi provident perferendis aliquid dolores quaerat vero doloribus laudantium, possimus velit optio accusamus sapiente reiciendis voluptates excepturi commodi soluta earum iure voluptatum unde. Dolor, quam ad!",
      },
      {
        id: "c3faq3",
        question: "How many Students in one Batch ?",
        answer:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi provident perferendis aliquid dolores quaerat vero doloribus laudantium, possimus velit optio accusamus sapiente reiciendis voluptates excepturi commodi soluta earum iure voluptatum unde. Dolor, quam ad!",
      },
      {
        id: "c3faq4",
        question: "What would be the Training Language ?",
        answer:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi provident perferendis aliquid dolores quaerat vero doloribus laudantium, possimus velit optio accusamus sapiente reiciendis voluptates excepturi commodi soluta earum iure voluptatum unde. Dolor, quam ad!",
      },
      {
        id: "c3faq5",
        question: "I have some other queries. Who can help me ?",
        answer:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi provident perferendis aliquid dolores quaerat vero doloribus laudantium, possimus velit optio accusamus sapiente reiciendis voluptates excepturi commodi soluta earum iure voluptatum unde. Dolor, quam ad!",
      },
    ],
  },
];
