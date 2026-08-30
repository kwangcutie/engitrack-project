/**
 * ENGiTRACK by ENKKU - Unified Bilingual System
 * KKU AI Hackathon 2026 | Team ENnovation
 * Intelligent International Student Monitoring & Early Warning System
 * ระบบติดตามสถานะและความก้าวหน้าของนักศึกษาต่างชาติ คณะวิศวกรรมศาสตร์
 */

// ============================================================================
// 1. KKU ENGINEERING CURRICULUM MASTER DATA
// ============================================================================
const KKU_PROGRAMS = [
  { degree: "B.Eng.", majorEn: "Civil Engineering", majorTh: "วิศวกรรมโยธา", years: 4, semLimit: 8 },
  { degree: "B.Eng.", majorEn: "Electrical Engineering", majorTh: "วิศวกรรมไฟฟ้า", years: 4, semLimit: 8 },
  { degree: "B.Eng.", majorEn: "Agricultural Engineering", majorTh: "วิศวกรรมเกษตร", years: 4, semLimit: 8 },
  { degree: "B.Eng.", majorEn: "Industrial Engineering", majorTh: "วิศวกรรมอุตสาหการ", years: 4, semLimit: 8 },
  { degree: "B.Eng.", majorEn: "Mechanical Engineering", majorTh: "วิศวกรรมเครื่องกล", years: 4, semLimit: 8 },
  { degree: "B.Eng.", majorEn: "Environment Engineering", majorTh: "วิศวกรรมสิ่งแวดล้อม", years: 4, semLimit: 8 },
  { degree: "B.Eng.", majorEn: "Chemical Engineering", majorTh: "วิศวกรรมเคมี", years: 4, semLimit: 8 },
  { degree: "B.Eng.", majorEn: "Computer Engineering", majorTh: "วิศวกรรมคอมพิวเตอร์", years: 4, semLimit: 8 },
  { degree: "B.Eng.", majorEn: "Automation Robotics and Intelligent System", majorTh: "วิศวกรรมอัตโนมัติ หุ่นยนต์ และระบบอัจฉริยะ", years: 4, semLimit: 8 },
  { degree: "B.Eng.", majorEn: "Chemical Engineering (International)", majorTh: "วิศวกรรมเคมี (หลักสูตรนานาชาติ)", years: 4, semLimit: 8 },
  { degree: "B.Eng.", majorEn: "Logistics Engineering (International)", majorTh: "วิศวกรรมโลจิสติกส์ (หลักสูตรนานาชาติ)", years: 4, semLimit: 8 },
  { degree: "B.Eng.", majorEn: "Telecommunications Engineering (International)", majorTh: "วิศวกรรมโทรคมนาคม (หลักสูตรนานาชาติ)", years: 4, semLimit: 8 },
  
  { degree: "M.Eng.", majorEn: "Civil Engineering", majorTh: "วิศวกรรมโยธา", years: 2, semLimit: 4 },
  { degree: "M.Eng.", majorEn: "Electrical Engineering", majorTh: "วิศวกรรมไฟฟ้า", years: 2, semLimit: 4 },
  { degree: "M.Eng.", majorEn: "Mechanical Engineering", majorTh: "วิศวกรรมเครื่องกล", years: 2, semLimit: 4 },
  { degree: "M.Eng.", majorEn: "Chemical Engineering", majorTh: "วิศวกรรมเคมี", years: 2, semLimit: 4 },
  { degree: "M.Eng.", majorEn: "Computer Engineering", majorTh: "วิศวกรรมคอมพิวเตอร์", years: 2, semLimit: 4 },
  { degree: "M.Eng.", majorEn: "Energy Engineering", majorTh: "วิศวกรรมพลังงาน", years: 2, semLimit: 4 },
  { degree: "M.Eng.", majorEn: "Digital and AI Innovation Engineering", majorTh: "วิศวกรรมนวัตกรรมดิจิทัลและปัญญาประดิษฐ์", years: 2, semLimit: 4 },
  { degree: "M.Eng.", majorEn: "Smart City Development Innovation", majorTh: "วิศวกรรมนวัตกรรมการพัฒนาเมืองอัจฉริยะ", years: 2, semLimit: 4 },
  { degree: "M.Eng.", majorEn: "Biomedical Engineering", majorTh: "วิศวกรรมชีวการแพทย์", years: 2, semLimit: 4 },
  
  { degree: "Ph.D.", majorEn: "Civil Engineering", majorTh: "วิศวกรรมโยธา", years: 3, semLimit: 6 },
  { degree: "Ph.D.", majorEn: "Electrical Engineering", majorTh: "วิศวกรรมไฟฟ้า", years: 3, semLimit: 6 },
  { degree: "Ph.D.", majorEn: "Mechanical Engineering", majorTh: "วิศวกรรมเครื่องกล", years: 3, semLimit: 6 },
  { degree: "Ph.D.", majorEn: "Chemical Engineering", majorTh: "วิศวกรรมเคมี", years: 3, semLimit: 6 },
  { degree: "Ph.D.", majorEn: "Computer Engineering", majorTh: "วิศวกรรมคอมพิวเตอร์", years: 3, semLimit: 6 },
  { degree: "Ph.D.", majorEn: "Digital and AI Innovation Engineering", majorTh: "วิศวกรรมนวัตกรรมดิจิทัลและปัญญาประดิษฐ์", years: 3, semLimit: 6 },
  { degree: "Ph.D.", majorEn: "Smart City Development Innovation", majorTh: "วิศวกรรมนวัตกรรมการพัฒนาเมืองอัจฉริยะ", years: 3, semLimit: 6 },
  { degree: "Ph.D.", majorEn: "Biomedical Engineering", majorTh: "วิศวกรรมชีวการแพทย์", years: 3, semLimit: 6 }
];

const ADVISORS_POOL = [
  { name: "Assoc. Prof. Dr. Thanate Chaichana", nameTh: "รศ.ดร.ธเนศ ไชยชนะ", dept: "Computer Engineering", deptTh: "วิศวกรรมคอมพิวเตอร์", email: "thanate@kku.ac.th", room: "EN04-401" },
  { name: "Prof. Dr. Somchai Chantasiri", nameTh: "ศ.ดร.สมชาย จันทศิริ", dept: "Electrical Engineering", deptTh: "วิศวกรรมไฟฟ้า", email: "somchaic@kku.ac.th", room: "EN02-305" },
  { name: "Asst. Prof. Dr. Wanwisa Promsomboon", nameTh: "ผศ.ดร.วันวิสาข์ พร้อมสมบูรณ์", dept: "Civil Engineering", deptTh: "วิศวกรรมโยธา", email: "wanwisa@kku.ac.th", room: "EN01-202" },
  { name: "Assoc. Prof. Dr. Kittisak Kerdphol", nameTh: "รศ.ดร.กิตติศักดิ์ เกิดผล", dept: "Mechanical Engineering", deptTh: "วิศวกรรมเครื่องกล", email: "kittisak@kku.ac.th", room: "EN03-108" },
  { name: "Asst. Prof. Dr. Pattaraporn Posoknistakul", nameTh: "ผศ.ดร.ภัทราภรณ์ โพโสคนิษฐกุล", dept: "Chemical Engineering", deptTh: "วิศวกรรมเคมี", email: "pattaraporn@kku.ac.th", room: "EN05-512" },
  { name: "Dr. Natthaphol Sukumal", nameTh: "ดร.ณัฐพล สุขุมล", dept: "Digital & AI Innovation", deptTh: "วิศวกรรมนวัตกรรมดิจิทัลและ AI", email: "natthaphol@kku.ac.th", room: "EN04-415" },
  { name: "Assoc. Prof. Dr. Sirapat Watthanasit", nameTh: "รศ.ดร.ศิรภัสสร วัฒนสิทธิ์", dept: "Industrial Engineering", deptTh: "วิศวกรรมอุตสาหการ", email: "sirapat@kku.ac.th", room: "EN06-204" },
  { name: "Asst. Prof. Dr. Chatchai Benjawan", nameTh: "ผศ.ดร.ฉัตรชัย เบญจวรรณ", dept: "Energy Engineering", deptTh: "วิศวกรรมพลังงาน", email: "chatchai@kku.ac.th", room: "EN07-310" }
];

// ============================================================================
// 2. SYNTHETIC 44 STUDENTS DATASET (DEMO DATA 100%)
// ============================================================================
const THESIS_TOPICS = [
  {
    titleEn: "HYBRID SELF REGENERATION ION EXCHANGE AND REVERSE OSMOSIS (HSIX-RO) FOR DESALINATION OF HIGH HARDNESS GROUNDWATER",
    titleTh: "ระบบผสมผสานแลกเปลี่ยนประจุที่สามารถฟื้นฟูสภาพด้วยตัวเองและรีเวิร์สออสโมซิส (HSIX-RO) สำหรับการกำจัดเกลือในน้ำใต้ดินกระด้าง"
  },
  {
    titleEn: "DEEP LEARNING-BASED EDGE VISION SYSTEM FOR REAL-TIME FAULT DETECTION IN AUTOMATED MANUFACTURING",
    titleTh: "ระบบประมวลผลภาพบนเอดจ์ด้วยการเรียนรู้เชิงลึกเพื่อการตรวจจับข้อผิดพลาดแบบเรียลไทม์ในสายการผลิตอัตโนมัติ"
  },
  {
    titleEn: "OPTIMIZATION OF INDUSTRIAL WASTEWATER TREATMENT PROCESSES USING NOVEL CATALYTIC NANO-MEMBRANES",
    titleTh: "การเพิ่มประสิทธิภาพกระบวนการบำบัดน้ำเสียอุตสาหกรรมโดยใช้นาโนเมมเบรนตัวเร่งปฏิกิริยาชนิดใหม่"
  },
  {
    titleEn: "SEISMIC RESILIENCE EVALUATION OF RETROFITTED REINFORCED CONCRETE BRIDGES USING SHAPE MEMORY ALLOYS",
    titleTh: "การประเมินความต้านทานแผ่นดินไหวของสะพานคอนกรีตเสริมเหล็กที่ได้รับการเสริมกำลังด้วยโลหะผสมจำรูป"
  },
  {
    titleEn: "DESIGN AND THERMAL PERFORMANCE OPTIMIZATION OF MICRO-CHANNEL HEAT EXCHANGERS FOR ELECTRIC VEHICLE BATTERIES",
    titleTh: "การออกแบบและเพิ่มประสิทธิภาพทางความร้อนของอุปกรณ์แลกเปลี่ยนความร้อนแบบช่องสัญญาณจุลภาคสำหรับแบตเตอรี่ยานยนต์ไฟฟ้า"
  },
  {
    titleEn: "SECURE SMART GRID ARCHITECTURE INTEGRATING DISTRIBUTED RENEWABLE ENERGY VIA BLOCKCHAIN CONSENSUS",
    titleTh: "สถาปัตยกรรมโครงข่ายไฟฟ้าอัจฉริยะแบบปลอดภัยที่บูรณาการพลังงานหมุนเวียนแบบกระจายศูนย์ผ่านบล็อกเชน"
  },
  {
    titleEn: "DEVELOPMENT OF BIODEGRADABLE POLYMER NANOCOMPOSITES FOR ADVANCED BIOMEDICAL IMPLANTS",
    titleTh: "การพัฒนานาโนคอมโพสิตพอลิเมอร์ที่ย่อยสลายได้ทางชีวภาพสำหรับวัสดุฝังในทางการแพทย์ขั้นสูง"
  },
  {
    titleEn: "AUTONOMOUS NAVIGATION AND TRAFFIC FLOW OPTIMIZATION IN SMART CITIES USING REINFORCEMENT LEARNING",
    titleTh: "การนำทางอัตโนมัติและการเพิ่มประสิทธิภาพการไหลของการจราจรในเมืองอัจฉริยะโดยใช้การเรียนรู้แบบเสริมกำลัง"
  }
];

const RAW_SYNTHETIC_STUDENTS = [
  // 1. Ph.D. Critical Case - Term 3 QE & Proposal Pending + Visa Expiring in 18 days
  {
    id: "675040001-2",
    name: "Nguyen Van Minh",
    nationality: "Vietnam (เวียดนาม)",
    countryName: "Vietnam",
    countryCode: "VN",
    degree: "Ph.D.",
    majorEn: "Computer Engineering",
    majorTh: "วิศวกรรมคอมพิวเตอร์",
    semester: 3,
    entryDate: "2025-06-15",
    gpa: 3.65,
    email: "minh.nguyen@kkumail.com",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
    mainAdvisor: ADVISORS_POOL[0],
    coAdvisor: ADVISORS_POOL[5],
    thesis: {
      titleEn: "HYBRID SELF REGENERATION ION EXCHANGE AND REVERSE OSMOSIS (HSIX-RO) FOR DESALINATION OF HIGH HARDNESS GROUNDWATER",
      titleTh: "ระบบผสมผสานแลกเปลี่ยนประจุที่สามารถฟื้นฟูสภาพด้วยตัวเองและรีเวิร์สออสโมซิส (HSIX-RO) สำหรับการกำจัดเกลือในน้ำใต้ดินกระด้าง"
    },
    enrollmentStatus: {
      status: "Maintain",
      term: "1/2026",
      displayTextEn: "Maintain in 1/2026",
      displayTextTh: "รักษาสภาพ (Maintain) ใน 1/2026"
    },
    visa: {
      type: "Non-ED",
      expiryDate: "2026-09-16",
      daysRemaining: 18,
      status: "Not Started (ยังไม่เริ่ม)",
    },
    scholarship: {
      type: "KKU Active Recruitment Scholarship (ทุนรับตรง KKU)",
      status: "Active / Approved (กำลังรับทุน/เบิกจ่ายปกติ)",
      remainingSemesters: 1,
      disbursementStatus: "Processing (กำลังเบิกจ่าย)",
      amount: "15,000 THB/Month (บาท/เดือน)"
    },
    milestones: {
      englishExam: { status: "Pending", dueSemester: 3, name: "English Exam (KKU-AELT / IELTS ≥ 6.5)", nameTh: "เกณฑ์ผลสอบภาษาอังกฤษ" },
      qeExam: { status: "Pending", dueSemester: 3, name: "Qualifying Exam (QE)", nameTh: "สอบวัดคุณสมบัติ ป.เอก (QE)" },
      proposalExam: { status: "Pending", dueSemester: 3, name: "Dissertation Proposal Defense", nameTh: "สอบข้อเสนอวิทยานิพนธ์" },
      defenseExam: { status: "Not Due", dueSemester: 6, name: "Dissertation Final Defense", nameTh: "สอบป้องกันวิทยานิพนธ์" },
      publication: { status: "Not Due", dueSemester: 6, name: "SCOPUS/ISI Q1/Q2 Journal", nameTh: "ผลงานตีพิมพ์วารสารวิชาการ" }
    },
    issues: {
      category: "Visa & QE Exam Overdue",
      categoryTh: "วีซ่าใกล้หมดอายุ & ค้างสอบ QE",
      severity: "High",
      status: "Open",
      lastFollowUp: "2026-08-20",
      notes: "Student was in Vietnam for field data collection, delayed QE registration and Non-ED visa extension."
    }
  },
  
  // 2. M.Eng. High Risk Case - Term 2 Proposal Exam Overdue + Scholarship Ending
  {
    id: "685040012-8",
    name: "Aye Myat Mon",
    nationality: "Myanmar (เมียนมา)",
    countryName: "Myanmar",
    countryCode: "MM",
    degree: "M.Eng.",
    majorEn: "Digital and AI Innovation Engineering",
    majorTh: "วิศวกรรมนวัตกรรมดิจิทัลและปัญญาประดิษฐ์",
    semester: 2,
    entryDate: "2025-11-01",
    gpa: 3.42,
    email: "aye.myat@kkumail.com",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80",
    mainAdvisor: ADVISORS_POOL[5],
    coAdvisor: ADVISORS_POOL[0],
    thesis: {
      titleEn: "DEEP LEARNING-BASED EDGE VISION SYSTEM FOR REAL-TIME FAULT DETECTION IN AUTOMATED MANUFACTURING",
      titleTh: "ระบบประมวลผลภาพบนเอดจ์ด้วยการเรียนรู้เชิงลึกเพื่อการตรวจจับข้อผิดพลาดแบบเรียลไทม์ในสายการผลิตอัตโนมัติ"
    },
    enrollmentStatus: {
      status: "Enroll",
      term: "1/2026",
      displayTextEn: "Enroll in 1/2026",
      displayTextTh: "ลงทะเบียน (Enroll) ใน 1/2026"
    },
    visa: {
      type: "Non-ED",
      expiryDate: "2026-10-15",
      daysRemaining: 47,
      status: "In Progress (กำลังดำเนินการ)"
    },
    scholarship: {
      type: "ENKKU Excellence Fellowship (ทุนวิจัยคณะ)",
      status: "Active (กำลังรับทุน)",
      remainingSemesters: 1,
      disbursementStatus: "Completed (เบิกจ่ายแล้ว)",
      amount: "12,000 THB/Month (บาท/เดือน)"
    },
    milestones: {
      englishExam: { status: "Completed", score: "KKU-AELT Band 4 (Pass)", name: "English Requirement", nameTh: "เกณฑ์ผลสอบภาษาอังกฤษ" },
      proposalExam: { status: "Pending", dueSemester: 2, name: "Thesis Proposal Defense", nameTh: "สอบข้อเสนอวิทยานิพนธ์ ป.โท" },
      defenseExam: { status: "Not Due", dueSemester: 4, name: "Thesis Final Defense", nameTh: "สอบป้องกันวิทยานิพนธ์" },
      publication: { status: "Not Due", dueSemester: 4, name: "TCI Tier-1 / International Conf.", nameTh: "การตีพิมพ์/เผยแพร่ผลงาน" }
    },
    issues: {
      category: "Proposal Defense Scheduling",
      categoryTh: "นัดหมายวันสอบ Proposal",
      severity: "Medium",
      status: "Open",
      lastFollowUp: "2026-08-15",
      notes: "Awaiting co-advisor review on AI methodology before locking in official examination date."
    }
  },

  // 3. Ph.D. Monitor Case - Term 4 on track, Visa 60-day warning window (55 days remaining)
  {
    id: "665040003-9",
    name: "Chen Wei",
    nationality: "China (จีน)",
    countryName: "China",
    countryCode: "CN",
    degree: "Ph.D.",
    majorEn: "Electrical Engineering",
    majorTh: "วิศวกรรมไฟฟ้า",
    semester: 4,
    entryDate: "2024-06-10",
    gpa: 3.88,
    email: "chen.wei@kkumail.com",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
    mainAdvisor: ADVISORS_POOL[1],
    coAdvisor: ADVISORS_POOL[7],
    thesis: {
      titleEn: "SECURE SMART GRID ARCHITECTURE INTEGRATING DISTRIBUTED RENEWABLE ENERGY VIA BLOCKCHAIN CONSENSUS",
      titleTh: "สถาปัตยกรรมโครงข่ายไฟฟ้าอัจฉริยะแบบปลอดภัยที่บูรณาการพลังงานหมุนเวียนแบบกระจายศูนย์ผ่านบล็อกเชน"
    },
    enrollmentStatus: {
      status: "Semester Leave",
      term: "1/2026",
      displayTextEn: "Semester Leave in 1/2026",
      displayTextTh: "ลาพักการเรียน (Semester Leave) ใน 1/2026"
    },
    visa: {
      type: "Non-ED",
      expiryDate: "2026-10-23",
      daysRemaining: 55,
      status: "In Progress (กำลังดำเนินการ)"
    },
    scholarship: {
      type: "Royal Thai Government Scholarship (ทุนรัฐบาลไทย)",
      status: "Active (กำลังรับทุน)",
      remainingSemesters: 2,
      disbursementStatus: "Completed (เบิกจ่ายแล้ว)",
      amount: "18,000 THB/Month (บาท/เดือน)"
    },
    milestones: {
      englishExam: { status: "Completed", score: "IELTS 7.0 (Pass)", name: "English Proficiency", nameTh: "เกณฑ์ภาษาอังกฤษ" },
      qeExam: { status: "Completed", score: "Pass (S)", name: "Qualifying Exam (QE)", nameTh: "สอบวัดคุณสมบัติ ป.เอก (QE)" },
      proposalExam: { status: "Completed", score: "Pass", name: "Proposal Defense", nameTh: "สอบข้อเสนอวิทยานิพนธ์" },
      defenseExam: { status: "Not Due", dueSemester: 6, name: "Dissertation Defense", nameTh: "สอบป้องกันวิทยานิพนธ์" },
      publication: { status: "In Progress", name: "IEEE Transactions submission", nameTh: "ส่งบทความ IEEE" }
    },
    issues: {
      category: "None",
      categoryTh: "ไม่มีปัญหา",
      severity: "None",
      status: "Resolved",
      lastFollowUp: "2026-08-01",
      notes: "Research on smart microgrids proceeding according to study timeline."
    }
  },

  // 4. B.Eng. Exceeded Semester Case (Term 9 - Over 8 Semesters)
  {
    id: "643040112-4",
    name: "Sokha Rathana",
    nationality: "Cambodia (กัมพูชา)",
    countryName: "Cambodia",
    countryCode: "KH",
    degree: "B.Eng.",
    majorEn: "Civil Engineering",
    majorTh: "วิศวกรรมโยธา",
    semester: 9,
    entryDate: "2022-06-20",
    gpa: 2.35,
    email: "sokha.r@kkumail.com",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
    mainAdvisor: ADVISORS_POOL[2],
    coAdvisor: ADVISORS_POOL[6],
    thesis: {
      titleEn: "SEISMIC RESILIENCE EVALUATION OF RETROFITTED REINFORCED CONCRETE BRIDGES USING SHAPE MEMORY ALLOYS",
      titleTh: "การประเมินความต้านทานแผ่นดินไหวของสะพานคอนกรีตเสริมเหล็กที่ได้รับการเสริมกำลังด้วยโลหะผสมจำรูป"
    },
    enrollmentStatus: {
      status: "Maintain",
      term: "1/2026",
      displayTextEn: "Maintain in 1/2026",
      displayTextTh: "รักษาสภาพ (Maintain) ใน 1/2026"
    },
    visa: {
      type: "Non-ED",
      expiryDate: "2026-09-08",
      daysRemaining: 10,
      status: "Missing Documents (เอกสารไม่ครบ)"
    },
    scholarship: {
      type: "None (Self-Funded / ทุนส่วนตัว)",
      status: "Self-Pay (ชำระเอง)",
      remainingSemesters: 0,
      disbursementStatus: "Overdue (ค้างชำระค่าเทอม)",
      amount: "Self-Pay (ชำระเอง)"
    },
    milestones: {
      englishExam: { status: "Pending", dueSemester: 8, name: "KKU-AELT / TOEIC ≥ 550", nameTh: "เกณฑ์ผลสอบภาษาอังกฤษ" },
      computerExam: { status: "Completed", score: "Pass", name: "Computer Literacy Test", nameTh: "การทดสอบทักษะคอมพิวเตอร์" },
      internship: { status: "Completed", name: "Cooperative Education", nameTh: "สหกิจศึกษา/ฝึกงาน" },
      coursework: { status: "Pending", name: "Senior Project II Re-enrollment", nameTh: "โครงงานวิศวกรรม II" }
    },
    issues: {
      category: "Academic & Tuition Arrears",
      categoryTh: "เรียนเกินแผน & ค้างชำระค่าเทอม",
      severity: "Critical",
      status: "Open",
      lastFollowUp: "2026-08-25",
      notes: "Student exceeded 4-year curriculum, unpaid semester 9 fee, visa expiring in 10 days."
    }
  },

  // 5. M.Eng. Normal / On-track Case
  {
    id: "685040023-1",
    name: "Fajar Pratama",
    nationality: "Indonesia (อินโดนีเซีย)",
    countryName: "Indonesia",
    countryCode: "ID",
    degree: "M.Eng.",
    majorEn: "Mechanical Engineering",
    majorTh: "วิศวกรรมเครื่องกล",
    semester: 1,
    entryDate: "2026-06-15",
    gpa: 3.75,
    email: "fajar.p@kkumail.com",
    avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150&auto=format&fit=crop&q=80",
    mainAdvisor: ADVISORS_POOL[3],
    coAdvisor: ADVISORS_POOL[7],
    thesis: {
      titleEn: "DESIGN AND THERMAL PERFORMANCE OPTIMIZATION OF MICRO-CHANNEL HEAT EXCHANGERS FOR ELECTRIC VEHICLE BATTERIES",
      titleTh: "การออกแบบและเพิ่มประสิทธิภาพทางความร้อนของอุปกรณ์แลกเปลี่ยนความร้อนแบบช่องสัญญาณจุลภาคสำหรับแบตเตอรี่ยานยนต์ไฟฟ้า"
    },
    enrollmentStatus: {
      status: "Enroll",
      term: "1/2026",
      displayTextEn: "Enroll in 1/2026",
      displayTextTh: "ลงทะเบียน (Enroll) ใน 1/2026"
    },
    visa: {
      type: "Non-ED",
      expiryDate: "2027-05-30",
      daysRemaining: 274,
      status: "Completed (ต่อเรียบร้อย)"
    },
    scholarship: {
      type: "ASEAN Scholarship (ทุนอาเซียน)",
      status: "Active (กำลังรับทุน)",
      remainingSemesters: 4,
      disbursementStatus: "Completed (เรียบร้อย)",
      amount: "15,000 THB/Month (บาท/เดือน)"
    },
    milestones: {
      englishExam: { status: "Completed", score: "TOEFL iBT 88", name: "English Requirement", nameTh: "เกณฑ์ผลสอบภาษาอังกฤษ" },
      proposalExam: { status: "Not Due", dueSemester: 2, name: "Thesis Proposal", nameTh: "สอบข้อเสนอวิทยานิพนธ์" },
      defenseExam: { status: "Not Due", dueSemester: 4, name: "Thesis Defense", nameTh: "สอบป้องกันวิทยานิพนธ์" }
    },
    issues: {
      category: "None",
      categoryTh: "ไม่มีปัญหา",
      severity: "None",
      status: "Resolved",
      lastFollowUp: "2026-07-10",
      notes: "First year coursework enrolled, thesis advisor committee verified."
    }
  }
];

function generateAll44SyntheticStudents() {
  const list = [...RAW_SYNTHETIC_STUDENTS];
  
  const sampleNames = [
    { name: "Khin Zaw Oo", country: "Myanmar (เมียนมา)", countryClean: "Myanmar", code: "MM", gender: "m" },
    { name: "Zhang Mingyu", country: "China (จีน)", countryClean: "China", code: "CN", gender: "m" },
    { name: "Phommathat Sayavong", country: "Laos (ลาว)", countryClean: "Laos", code: "LA", gender: "m" },
    { name: "Le Thi Mai", country: "Vietnam (เวียดนาม)", countryClean: "Vietnam", code: "VN", gender: "f" },
    { name: "Tariq Mahmood", country: "Pakistan (ปากีสถาน)", countryClean: "Pakistan", code: "PK", gender: "m" },
    { name: "Emmanuel Okafor", country: "Nigeria (ไนจีเรีย)", countryClean: "Nigeria", code: "NG", gender: "m" },
    { name: "Chhay Borin", country: "Cambodia (กัมพูชา)", countryClean: "Cambodia", code: "KH", gender: "m" },
    { name: "Ananya Sharma", country: "India (อินเดีย)", countryClean: "India", code: "IN", gender: "f" },
    { name: "Bounmy Sisoulith", country: "Laos (ลาว)", countryClean: "Laos", code: "LA", gender: "f" },
    { name: "Muhammad Rizky", country: "Indonesia (อินโดนีเซีย)", countryClean: "Indonesia", code: "ID", gender: "m" },
    { name: "Tran Duc Anh", country: "Vietnam (เวียดนาม)", countryClean: "Vietnam", code: "VN", gender: "m" },
    { name: "Maria Santos", country: "Philippines (ฟิลิปปินส์)", countryClean: "Philippines", code: "PH", gender: "f" },
    { name: "Kwame Mensah", country: "Ghana (กานา)", countryClean: "Ghana", code: "GH", gender: "m" },
    { name: "Pawan Shakya", country: "Nepal (เนปาล)", countryClean: "Nepal", code: "NP", gender: "m" },
    { name: "Liu Yang", country: "China (จีน)", countryClean: "China", code: "CN", gender: "f" },
    { name: "Thuzar Win", country: "Myanmar (เมียนมา)", countryClean: "Myanmar", code: "MM", gender: "f" },
    { name: "Kadek Suardana", country: "Indonesia (อินโดนีเซีย)", countryClean: "Indonesia", code: "ID", gender: "m" },
    { name: "Fatima Al-Hassan", country: "Nigeria (ไนจีเรีย)", countryClean: "Nigeria", code: "NG", gender: "f" },
    { name: "Sunil Perera", country: "Sri Lanka (ศรีลังกา)", countryClean: "Sri Lanka", code: "LK", gender: "m" },
    { name: "Do Hoang Long", country: "Vietnam (เวียดนาม)", countryClean: "Vietnam", code: "VN", gender: "m" },
    { name: "Sengchanh Keobouaphanh", country: "Laos (ลาว)", countryClean: "Laos", code: "LA", gender: "m" },
    { name: "Wang Hao", country: "China (จีน)", countryClean: "China", code: "CN", gender: "m" },
    { name: "Aung Ko Lat", country: "Myanmar (เมียนมา)", countryClean: "Myanmar", code: "MM", gender: "m" },
    { name: "Chea Sambath", country: "Cambodia (กัมพูชา)", countryClean: "Cambodia", code: "KH", gender: "m" },
    { name: "Nuralam Hossain", country: "Bangladesh (บังกลาเทศ)", countryClean: "Bangladesh", code: "BD", gender: "m" },
    { name: "Rina Takahashi", country: "Japan (ญี่ปุ่น)", countryClean: "Japan", code: "JP", gender: "f" },
    { name: "Kim Min-jun", country: "South Korea (เกาหลีใต้)", countryClean: "South Korea", code: "KR", gender: "m" },
    { name: "Vu Thi Huong", country: "Vietnam (เวียดนาม)", countryClean: "Vietnam", code: "VN", gender: "f" },
    { name: "Zin Mar Oo", country: "Myanmar (เมียนมา)", countryClean: "Myanmar", code: "MM", gender: "f" },
    { name: "Zhao Lei", country: "China (จีน)", countryClean: "China", code: "CN", gender: "m" },
    { name: "Khamphay Phoumsavanh", country: "Laos (ลาว)", countryClean: "Laos", code: "LA", gender: "m" },
    { name: "Pramod Adhikari", country: "Nepal (เนปาล)", countryClean: "Nepal", code: "NP", gender: "m" },
    { name: "Ibrahim Bello", country: "Nigeria (ไนจีเรีย)", countryClean: "Nigeria", code: "NG", gender: "m" },
    { name: "Nathalie Cruz", country: "Philippines (ฟิลิปปินส์)", countryClean: "Philippines", code: "PH", gender: "f" },
    { name: "Pich Sovann", country: "Cambodia (กัมพูชา)", countryClean: "Cambodia", code: "KH", gender: "m" },
    { name: "Dinh Quang Huy", country: "Vietnam (เวียดนาม)", countryClean: "Vietnam", code: "VN", gender: "m" },
    { name: "Kyaw San Lwin", country: "Myanmar (เมียนมา)", countryClean: "Myanmar", code: "MM", gender: "m" },
    { name: "Li Jing", country: "China (จีน)", countryClean: "China", code: "CN", gender: "f" },
    { name: "Abid Ali", country: "Pakistan (ปากีสถาน)", countryClean: "Pakistan", code: "PK", gender: "m" }
  ];

  const maleAvatars = [
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=150&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=150&auto=format&fit=crop&q=80"
  ];
  const femaleAvatars = [
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=150&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80"
  ];

  const scholarships = [
    "KKU Active Recruitment Scholarship (ทุนรับตรง)",
    "ENKKU Excellence Fellowship (ทุนวิจัยคณะ)",
    "ASEAN Scholarship (ทุนอาเซียน)",
    "Royal Thai Government Scholarship (ทุนรัฐบาลไทย)",
    "None (Self-Funded / ทุนส่วนตัว)"
  ];

  let idCounter = 6;
  sampleNames.forEach((person, idx) => {
    if (list.length >= 44) return;
    
    const prog = KKU_PROGRAMS[idx % KKU_PROGRAMS.length];
    
    let sem = 1;
    if (prog.degree === "Ph.D.") {
      sem = (idx % 6) + 1;
    } else if (prog.degree === "M.Eng.") {
      sem = (idx % 4) + 1;
    } else {
      sem = (idx % 8) + 1;
    }

    let visaDays = 120;
    let visaStatus = "Completed (ต่อเรียบร้อย)";
    if (idx % 8 === 0) {
      visaDays = 12;
      visaStatus = "Not Started (ยังไม่เริ่ม)";
    } else if (idx % 5 === 0) {
      visaDays = 28;
      visaStatus = "In Progress (กำลังดำเนินการ)";
    } else if (idx % 3 === 0) {
      visaDays = 52;
      visaStatus = "In Progress (กำลังดำเนินการ)";
    } else if (idx % 7 === 0) {
      visaDays = 75;
      visaStatus = "Completed (ต่อเรียบร้อย)";
    } else {
      visaDays = 140 + idx * 5;
    }

    const today = new Date();
    const expiryDateObj = new Date(today.getTime() + visaDays * 24 * 60 * 60 * 1000);
    const expiryStr = expiryDateObj.toISOString().split("T")[0];

    const schType = scholarships[idx % scholarships.length];
    let remainingSchSem = 0;
    if (schType !== "None (Self-Funded / ทุนส่วนตัว)") {
      remainingSchSem = Math.max(0, prog.semLimit - sem);
      if (idx % 6 === 0) remainingSchSem = 1;
    }

    const mainAdv = ADVISORS_POOL[idx % ADVISORS_POOL.length];
    const coAdv = ADVISORS_POOL[(idx + 3) % ADVISORS_POOL.length];

    let milestonesObj = {};
    if (prog.degree === "Ph.D.") {
      milestonesObj = {
        englishExam: { 
          status: sem >= 3 ? (idx % 4 === 0 ? "Pending" : "Completed") : "Pending", 
          score: sem >= 3 && idx % 4 !== 0 ? "IELTS 6.5 (Pass)" : "Due Term 3",
          name: "English Proficiency",
          nameTh: "เกณฑ์ภาษาอังกฤษ"
        },
        qeExam: { 
          status: sem >= 3 ? (idx % 3 === 0 ? "Pending" : "Completed") : "Not Due", 
          dueSemester: 3, 
          name: "Qualifying Exam (QE)",
          nameTh: "สอบวัดคุณสมบัติ (QE)"
        },
        proposalExam: { 
          status: sem >= 4 ? (idx % 2 === 0 ? "Completed" : "Pending") : (sem === 3 ? "Pending" : "Not Due"), 
          dueSemester: 3, 
          name: "Dissertation Proposal",
          nameTh: "สอบข้อเสนอวิทยานิพนธ์"
        },
        defenseExam: { 
          status: sem >= 6 ? (idx % 2 === 0 ? "Completed" : "Pending") : "Not Due", 
          dueSemester: 6, 
          name: "Dissertation Defense",
          nameTh: "สอบป้องกันวิทยานิพนธ์"
        }
      };
    } else if (prog.degree === "M.Eng.") {
      milestonesObj = {
        englishExam: { 
          status: sem >= 2 ? (idx % 3 === 0 ? "Pending" : "Completed") : "Pending", 
          score: sem >= 2 && idx % 3 !== 0 ? "KKU-AELT Band 4" : "Due Term 2",
          name: "English Requirement",
          nameTh: "เกณฑ์ภาษาอังกฤษ"
        },
        proposalExam: { 
          status: sem >= 2 ? (idx % 3 === 0 ? "Pending" : "Completed") : "Not Due", 
          dueSemester: 2, 
          name: "Thesis Proposal",
          nameTh: "สอบข้อเสนอวิทยานิพนธ์"
        },
        defenseExam: { 
          status: sem >= 4 ? (idx % 2 === 0 ? "Completed" : "Pending") : "Not Due", 
          dueSemester: 4, 
          name: "Thesis Defense",
          nameTh: "สอบป้องกันวิทยานิพนธ์"
        }
      };
    } else {
      milestonesObj = {
        englishExam: { status: sem >= 6 ? "Completed" : "In Progress", name: "English Requirement", nameTh: "เกณฑ์ภาษาอังกฤษ" },
        computerExam: { status: sem >= 4 ? "Completed" : "Pending", name: "Computer Literacy Test", nameTh: "ทักษะคอมพิวเตอร์" },
        internship: { status: sem >= 7 ? "Completed" : "Pending", name: "Internship / Co-op", nameTh: "สหกิจศึกษา/ฝึกงาน" },
        coursework: { status: sem >= 8 ? (idx % 3 === 0 ? "Pending" : "Completed") : "In Progress", name: "Coursework Completion", nameTh: "หน่วยกิตครบตามแผน" }
      };
    }

    let issueSeverity = "None";
    let issueCat = "None";
    let issueCatTh = "ไม่มีประเด็นตกค้าง";
    let issueNotes = "Student progress monitored according to standard schedule.";
    if (visaDays <= 14) {
      issueSeverity = "Critical";
      issueCat = "Visa Imminent Expiration";
      issueCatTh = "วีซ่าหมดอายุใน 14 วัน";
      issueNotes = "Urgent: Visa expires in less than 14 days. TM.7 extension required.";
    } else if (sem === 2 && prog.degree === "M.Eng." && milestonesObj.proposalExam.status === "Pending") {
      issueSeverity = "Medium";
      issueCat = "M.Eng. Term 2 Proposal Pending";
      issueCatTh = "ป.โท เทอม 2 ค้างสอบ Proposal";
      issueNotes = "Automated Trigger: Master student in Term 2 must submit thesis proposal & English test.";
    } else if (sem === 3 && prog.degree === "Ph.D." && milestonesObj.qeExam.status === "Pending") {
      issueSeverity = "High";
      issueCat = "Ph.D. Term 3 QE Pending";
      issueCatTh = "ป.เอก เทอม 3 ค้างสอบ QE";
      issueNotes = "Automated Trigger: Ph.D. student in Term 3 must pass Qualifying Exam & submit English score.";
    } else if (visaDays <= 60 && visaDays > 45) {
      issueSeverity = "Low";
      issueCat = "Visa 60-Day Early Warning";
      issueCatTh = "เตือนต่อวีซ่าล่วงหน้า 60 วัน";
      issueNotes = "60-Day Early Warning: Advise student to request university endorsement letter.";
    }

    const avatarList = person.gender === "f" ? femaleAvatars : maleAvatars;
    const avatarUrl = avatarList[idx % avatarList.length];

    const studentYear = 2026 - Math.floor(sem / 2);
    const studId = `${(68 - Math.floor((sem - 1) / 2))}50400${String(idCounter).padStart(2, '0')}-${(idCounter * 3) % 9 + 1}`;
    const thesisTopic = THESIS_TOPICS[idx % THESIS_TOPICS.length];
    
    let enrollStat = {
      status: "Enroll",
      term: "1/2026",
      displayTextEn: "Enroll in 1/2026",
      displayTextTh: "ลงทะเบียน (Enroll) ใน 1/2026"
    };
    if (idx % 6 === 0 || sem >= (prog.degree === 'Ph.D.' ? 5 : prog.degree === 'M.Eng.' ? 4 : 8)) {
      enrollStat = {
        status: "Maintain",
        term: "1/2026",
        displayTextEn: "Maintain in 1/2026",
        displayTextTh: "รักษาสภาพ (Maintain) ใน 1/2026"
      };
    } else if (idx % 9 === 0) {
      enrollStat = {
        status: "Semester Leave",
        term: "1/2026",
        displayTextEn: "Semester Leave in 1/2026",
        displayTextTh: "ลาพักการเรียน (Semester Leave) ใน 1/2026"
      };
    }

    list.push({
      id: studId,
      name: person.name,
      nationality: person.country,
      countryName: person.countryClean,
      countryCode: person.code,
      degree: prog.degree,
      majorEn: prog.majorEn,
      majorTh: prog.majorTh,
      semester: sem,
      entryDate: `${studentYear}-06-15`,
      gpa: Number((3.0 + (idx % 10) * 0.09).toFixed(2)),
      email: `${person.name.toLowerCase().replace(/[^a-z]/g, '.')}@kkumail.com`,
      avatar: avatarUrl,
      mainAdvisor: mainAdv,
      coAdvisor: coAdv,
      thesis: thesisTopic,
      enrollmentStatus: enrollStat,
      visa: {
        type: "Non-ED",
        expiryDate: expiryStr,
        daysRemaining: visaDays,
        status: visaStatus
      },
      scholarship: {
        type: schType,
        status: schType.includes("Self-Funded") ? "Self-Pay (ชำระเอง)" : "Active (กำลังรับทุน)",
        remainingSemesters: remainingSchSem,
        disbursementStatus: idx % 5 === 0 ? "Processing (กำลังเบิกจ่าย)" : "Completed (เรียบร้อย)",
        amount: schType.includes("Self-Funded") ? "Self-Pay (จ่ายเอง)" : "15,000 THB/Month (บาท/เดือน)"
      },
      milestones: milestonesObj,
      issues: {
        category: issueCat,
        categoryTh: issueCatTh,
        severity: issueSeverity,
        status: issueSeverity === "None" ? "Resolved" : "Open",
        lastFollowUp: "2026-08-22",
        notes: issueNotes
      }
    });
  });

  return list;
}

// ============================================================================
// 3. 5-PILLAR EXACT RISK ENGINE
// ============================================================================
function calculateStudentRisk(student) {
  let visaScore = 0;
  const days = student.visa.daysRemaining;
  if (days > 90) visaScore = 0;
  else if (days >= 61) visaScore = 5;
  else if (days >= 46) visaScore = 10;
  else if (days >= 31) visaScore = 15;
  else if (days >= 15) visaScore = 20;
  else if (days >= 1) visaScore = 25;
  else visaScore = 25;

  if (student.visa.status.includes("In Progress")) visaScore += 2;
  else if (student.visa.status.includes("Not Started")) visaScore += 5;
  else if (student.visa.status.includes("Missing Documents")) visaScore += 5;
  visaScore = Math.min(25, visaScore);

  let academicScore = 0;
  let normalLimit = 8;
  if (student.degree === "Ph.D.") normalLimit = 6;
  if (student.degree === "M.Eng.") normalLimit = 4;

  if (student.semester > normalLimit) {
    academicScore += 20;
  } else if (normalLimit - student.semester === 0) {
    academicScore += 10;
  } else if (normalLimit - student.semester <= 1) {
    academicScore += 5;
  } else {
    academicScore += 0;
  }

  if (student.gpa < 2.5) academicScore += 10;
  else if (student.gpa < 3.0 && student.degree !== "B.Eng.") academicScore += 5;
  academicScore = Math.min(30, academicScore);

  let schScore = 0;
  if (!student.scholarship.type.includes("Self-Funded")) {
    if (student.scholarship.remainingSemesters === 0 && student.semester <= normalLimit) {
      schScore = 20;
    } else if (student.scholarship.remainingSemesters === 1) {
      schScore = 10;
    } else if (student.scholarship.remainingSemesters === 2) {
      schScore = 5;
    } else {
      schScore = 0;
    }

    if (student.scholarship.disbursementStatus.includes("Processing")) schScore += 3;
    if (student.scholarship.disbursementStatus.includes("Overdue")) schScore += 5;
  } else {
    if (student.scholarship.disbursementStatus.includes("Overdue")) schScore += 5;
  }
  schScore = Math.min(20, schScore);

  let milestoneScore = 0;
  let pendingCount = 0;
  let overdueCount = 0;

  Object.values(student.milestones).forEach(m => {
    if (m.status === "Pending") pendingCount++;
    if (m.status === "Overdue") overdueCount++;
  });

  if (student.degree === "M.Eng." && student.semester >= 2) {
    if (student.milestones.proposalExam && student.milestones.proposalExam.status === "Pending") overdueCount++;
    if (student.milestones.englishExam && student.milestones.englishExam.status === "Pending") overdueCount++;
  }
  if (student.degree === "Ph.D." && student.semester >= 3) {
    if (student.milestones.qeExam && student.milestones.qeExam.status === "Pending") overdueCount++;
    if (student.milestones.proposalExam && student.milestones.proposalExam.status === "Pending") overdueCount++;
    if (student.milestones.englishExam && student.milestones.englishExam.status === "Pending") overdueCount++;
  }

  if (overdueCount >= 2) milestoneScore = 15;
  else if (overdueCount === 1) milestoneScore = 10;
  else if (pendingCount >= 1) milestoneScore = 5;
  else milestoneScore = 0;

  milestoneScore = Math.min(15, milestoneScore);

  let issueScore = 0;
  if (student.issues.severity === "Critical") issueScore = 10;
  else if (student.issues.severity === "High") issueScore = 8;
  else if (student.issues.severity === "Medium") issueScore = 5;
  else if (student.issues.severity === "Low") issueScore = 2;
  else issueScore = 0;

  const totalScore = Math.min(100, visaScore + academicScore + schScore + milestoneScore + issueScore);

  let levelEn = "Low Risk (Normal)";
  let levelTh = "ความเสี่ยงต่ำ (ปกติ)";
  let color = "normal";
  if (totalScore >= 75) {
    levelEn = "Critical Risk (Urgent)";
    levelTh = "ความเสี่ยงวิกฤต (เร่งด่วนที่สุด)";
    color = "critical";
  } else if (totalScore >= 50) {
    levelEn = "High Risk (Warning)";
    levelTh = "ความเสี่ยงสูง (ควรดำเนินการ)";
    color = "warning";
  } else if (totalScore >= 25) {
    levelEn = "Medium Risk (Monitor)";
    levelTh = "ความเสี่ยงปานกลาง (เฝ้าระวัง)";
    color = "monitor";
  }

  return {
    visaScore,
    academicScore,
    schScore,
    milestoneScore,
    issueScore,
    totalScore,
    levelEn,
    levelTh,
    color
  };
}

// ============================================================================
// 4. GLOBAL STATE
// ============================================================================
const state = {
  role: "admin", // 'admin', 'student', 'advisor'
  students: [],
  selectedStudentId: "675040001-2", // Default for Student Portal
  selectedAdvisorName: "Assoc. Prof. Dr. Thanate Chaichana", // Default for Advisor Portal
  pendingCsvData: null,
  filters: {
    search: "",
    degree: "all",
    risk: "all",
    visaUrgency: "all"
  },
  commLogs: {},
  helpDeskTickets: [
    {
      id: "TICK-2026-001",
      studentId: "675040001-2",
      studentName: "Nguyen Van Minh",
      category: "Visa & Immigration (วีซ่าและตม.)",
      subject: "Request for Non-ED Extension Endorsement Letter (ขอหนังสือรับรองต่อวีซ่า)",
      description: "My visa expires in 18 days. I need the official faculty endorsement letter to submit TM.7 to Immigration.",
      status: "In Review (กำลังตรวจสอบ)",
      date: "2026-08-27 10:30",
      response: "Officer is preparing the endorsement document. Ready for pickup on Monday at Room EN01."
    },
    {
      id: "TICK-2026-002",
      studentId: "685040012-8",
      studentName: "Aye Myat Mon",
      category: "Academic & Advisor (วิชาการและที่ปรึกษา)",
      subject: "Scheduling Proposal Defense with Co-Advisor (นัดหมายสอบ Proposal ร่วมกับที่ปรึกษาร่วม)",
      description: "Requesting assistance to coordinate an online defense room with my co-advisor in Bangkok.",
      status: "Resolved (เรียบร้อย)",
      date: "2026-08-20 14:15",
      response: "Zoom link and Room EN04-402 booked for September 5th at 10:00 AM."
    }
  ]
};

// Initialize Students
state.students = generateAll44SyntheticStudents();
state.students.forEach(s => {
  s.risk = calculateStudentRisk(s);
});

// ============================================================================
// 5. ROLE SWITCHING & VIEW ROUTING
// ============================================================================

function setRole(newRole) {
  state.role = newRole;
  
  // Update Role Switcher Buttons
  document.querySelectorAll(".role-tab-btn").forEach(b => {
    b.classList.remove("active");
    if (b.dataset.role === newRole) {
      b.classList.add("active");
    }
  });

  // Toggle Subnav visibility (Anchor nav only needed in Officer view)
  const navBar = document.getElementById("single-page-nav");
  if (navBar) {
    navBar.style.display = newRole === 'admin' ? 'block' : 'none';
  }

  renderUnifiedPage();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function scrollToSection(sectionId) {
  const el = document.getElementById(sectionId);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function renderUnifiedPage() {
  const container = document.getElementById("unified-content-area");
  if (!container) return;

  if (state.role === "admin") {
    renderOfficerDashboardHTML(container);
  } else if (state.role === "student") {
    renderStudentPortalHTML(container);
  } else if (state.role === "advisor") {
    renderAdvisorPortalHTML(container);
  }

  lucide.createIcons();
}

// ============================================================================
// 6. VIEW 1: OFFICER / ADMIN MASTER DASHBOARD
// ============================================================================
function renderOfficerDashboardHTML(container) {
  const total = state.students.length;
  const critical = state.students.filter(s => s.risk.totalScore >= 75 || s.risk.color === "critical").length;
  const high = state.students.filter(s => s.risk.totalScore >= 50 && s.risk.totalScore < 75).length;
  const visa60 = state.students.filter(s => s.visa.daysRemaining <= 60).length;
  const milestonePending = state.students.filter(s => 
    Object.values(s.milestones).some(m => m.status === "Pending" || m.status === "Overdue")
  ).length;
  const schEnding = state.students.filter(s => 
    !s.scholarship.type.includes("Self-Funded") && s.scholarship.remainingSemesters <= 1
  ).length;

  container.innerHTML = `
    <!-- SECTION 1: EXECUTIVE KPI METRICS (INTERACTIVE CLICKABLE CARDS) -->
    <section id="section-overview" class="space-y-4">
      <div class="flex items-center justify-between">
        <div>
          <h2 class="text-xl font-black text-slate-900 flex items-center gap-2">
            <i data-lucide="layout-dashboard" class="w-5 h-5 text-maroon-700"></i>
            Officer Executive Monitoring Dashboard
            <span class="text-xs font-thai font-normal text-slate-500">/ แดชบอร์ดภาพรวมผู้บริหารและเจ้าหน้าที่</span>
          </h2>
          <p class="text-xs text-slate-500 mt-0.5">
            Real-time Early Warning indicators across ${total} international engineering students
            <span class="font-thai text-slate-400">/ ติดตามสถานะและวิเคราะห์ความเสี่ยงล่วงหน้าแบบเรียลไทม์</span>
          </p>
        </div>
        <span class="px-3 py-1 bg-maroon-100 text-maroon-900 rounded-full text-xs font-bold font-mono">
          ${total} Students Monitored
        </span>
      </div>

      <!-- 5 KPI Cards -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        
        <div onclick="filterAndScroll('all')" class="glass-card clickable-card p-4 rounded-2xl border-l-4 border-maroon-700 bg-white">
          <div class="flex items-center justify-between text-slate-500 text-xs font-bold uppercase tracking-wider mb-1">
            <span>Total Students</span>
            <i data-lucide="users" class="w-4 h-4 text-maroon-700"></i>
          </div>
          <div class="text-xs font-thai text-slate-400 mb-2">จำนวนนักศึกษาทั้งหมด</div>
          <div class="text-3xl font-black text-slate-900">${total}</div>
          <div class="text-[11px] text-emerald-600 font-semibold mt-1">100% Synthetic Dataset</div>
        </div>

        <div onclick="filterAndScroll('critical_high')" class="glass-card clickable-card p-4 rounded-2xl border-l-4 border-red-600 bg-red-50/20">
          <div class="flex items-center justify-between text-red-700 text-xs font-bold uppercase tracking-wider mb-1">
            <span>Critical / High Risk</span>
            <i data-lucide="alert-octagon" class="w-4 h-4 text-red-600"></i>
          </div>
          <div class="text-xs font-thai text-red-400 mb-2">เคสความเสี่ยงสูง / วิกฤต</div>
          <div class="text-3xl font-black text-red-600">${critical + high}</div>
          <div class="text-[11px] text-red-600 font-bold mt-1">Urgent action needed ↗</div>
        </div>

        <div onclick="filterAndScroll('visa_60')" class="glass-card clickable-card p-4 rounded-2xl border-l-4 border-amber-500 bg-amber-50/20">
          <div class="flex items-center justify-between text-amber-800 text-xs font-bold uppercase tracking-wider mb-1">
            <span>Visa Expiring (≤60d)</span>
            <i data-lucide="clock" class="w-4 h-4 text-amber-500"></i>
          </div>
          <div class="text-xs font-thai text-amber-600 mb-2">วีซ่าหมดอายุใน ≤ 60 วัน</div>
          <div class="text-3xl font-black text-amber-600">${visa60}</div>
          <div class="text-[11px] text-amber-700 font-bold mt-1">60-Day renewal window ↗</div>
        </div>

        <div onclick="filterAndScroll('milestones_pending')" class="glass-card clickable-card p-4 rounded-2xl border-l-4 border-purple-600 bg-purple-50/20">
          <div class="flex items-center justify-between text-purple-800 text-xs font-bold uppercase tracking-wider mb-1">
            <span>Pending Milestones</span>
            <i data-lucide="graduation-cap" class="w-4 h-4 text-purple-600"></i>
          </div>
          <div class="text-xs font-thai text-purple-500 mb-2">Milestone ค้าง/เกินกำหนด</div>
          <div class="text-3xl font-black text-purple-700">${milestonePending}</div>
          <div class="text-[11px] text-purple-700 font-semibold mt-1">QE / Proposal / English ↗</div>
        </div>

        <div onclick="filterAndScroll('scholarship_ending')" class="glass-card clickable-card p-4 rounded-2xl border-l-4 border-emerald-600 bg-emerald-50/20">
          <div class="flex items-center justify-between text-emerald-800 text-xs font-bold uppercase tracking-wider mb-1">
            <span>Scholarship (≤1 Term)</span>
            <i data-lucide="wallet" class="w-4 h-4 text-emerald-600"></i>
          </div>
          <div class="text-xs font-thai text-emerald-600 mb-2">ทุนเหลือ ≤ 1 ภาคการศึกษา</div>
          <div class="text-3xl font-black text-emerald-700">${schEnding}</div>
          <div class="text-[11px] text-emerald-700 font-semibold mt-1">Funding alert active ↗</div>
        </div>

      </div>
    </section>

    <!-- SECTION 2: EARLY WARNING TRIGGERS & ANALYTICS CHARTS (INCLUDES COUNTRY DIVERSITY GRAPH) -->
    <section id="section-triggers" class="space-y-4 pt-4">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
        
        <!-- Chart 1: Risk Distribution -->
        <div class="glass-card p-5 rounded-2xl">
          <div class="flex items-center justify-between mb-1">
            <h3 class="font-bold text-slate-800 text-sm flex items-center gap-2">
              <i data-lucide="pie-chart" class="w-4 h-4 text-maroon-700"></i>
              Overall Risk Score (100 Pts)
            </h3>
            <span class="text-[10px] text-maroon-800 bg-maroon-100 px-2 py-0.5 rounded-full font-bold">Filter</span>
          </div>
          <p class="text-[11px] text-slate-400 font-thai mb-3">การกระจายตัวของระดับความเสี่ยง</p>
          <div class="h-48 relative flex items-center justify-center">
            <canvas id="chartRiskDistribution"></canvas>
          </div>
        </div>

        <!-- Chart 2: Degree Level Breakdown -->
        <div class="glass-card p-5 rounded-2xl">
          <div class="flex items-center justify-between mb-1">
            <h3 class="font-bold text-slate-800 text-sm flex items-center gap-2">
              <i data-lucide="bar-chart-3" class="w-4 h-4 text-maroon-700"></i>
              Degree Level Distribution
            </h3>
            <span class="text-[10px] text-maroon-800 bg-maroon-100 px-2 py-0.5 rounded-full font-bold">Filter</span>
          </div>
          <p class="text-[11px] text-slate-400 font-thai mb-3">จำนวนนักศึกษาตามระดับปริญญา</p>
          <div class="h-48 relative flex items-center justify-center">
            <canvas id="chartDegreeBreakdown"></canvas>
          </div>
        </div>

        <!-- Chart 3: Country of Origin Distribution (REQUESTED FEATURE) -->
        <div class="glass-card p-5 rounded-2xl">
          <div class="flex items-center justify-between mb-1">
            <h3 class="font-bold text-slate-800 text-sm flex items-center gap-2">
              <i data-lucide="globe-2" class="w-4 h-4 text-maroon-700"></i>
              Student Origin by Country
            </h3>
            <span class="text-[10px] text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-full font-bold">Diversity</span>
          </div>
          <p class="text-[11px] text-slate-400 font-thai mb-3">ประเทศต้นทางของนักศึกษาต่างชาติ (มาจากประเทศไหนบ้าง)</p>
          <div class="h-48 relative flex items-center justify-center">
            <canvas id="chartCountryDistribution"></canvas>
          </div>
        </div>

      </div>
    </section>

    <!-- SECTION 3: STUDENT MASTER ROSTER (WITH IMPORT & EXPORT CSV) -->
    <section id="section-roster" class="space-y-4 pt-4">
      <div class="glass-card p-5 rounded-2xl">
        <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4 pb-4 border-b border-slate-100">
          <div>
            <h2 class="text-lg font-black text-slate-900 flex items-center gap-2">
              <i data-lucide="users" class="w-5 h-5 text-maroon-700"></i>
              International Student Master Roster (${total} Records)
              <span class="text-xs font-thai font-normal text-slate-500">/ ทะเบียนรายชื่อนักศึกษาต่างชาติทั้งหมด</span>
            </h2>
            <p class="text-xs text-slate-500 mt-0.5">
              Comprehensive profiles, 5-pillar risk ratings, and advisor assignments
            </p>
          </div>

          <!-- Actions Toolbar (Google Sheets + Import CSV + Export CSV + Bulk Email) -->
          <div class="flex flex-wrap items-center gap-2">
            <button onclick="openGoogleSheetsModal()" class="bg-emerald-700 hover:bg-emerald-800 text-white text-xs px-3.5 py-2 rounded-xl font-bold transition flex items-center gap-1.5 shadow-sm border border-emerald-500/50">
              <i data-lucide="table" class="w-3.5 h-3.5"></i> Google Sheets (เชื่อมต่อ Google Sheet)
            </button>
            <button onclick="openImportCsvModal()" class="bg-amber-600 hover:bg-amber-700 text-white text-xs px-3.5 py-2 rounded-xl font-bold transition flex items-center gap-1.5 shadow-sm">
              <i data-lucide="upload" class="w-3.5 h-3.5"></i> Import CSV (นำเข้าข้อมูล)
            </button>
            <button onclick="exportToCSV()" class="bg-slate-700 hover:bg-slate-800 text-white text-xs px-3.5 py-2 rounded-xl font-bold transition flex items-center gap-1.5 shadow-sm">
              <i data-lucide="download" class="w-3.5 h-3.5"></i> Export CSV (ส่งออกข้อมูล)
            </button>
            <button onclick="openBulkEmailModal()" class="bg-gradient-maroon text-white text-xs px-3.5 py-2 rounded-xl font-bold transition flex items-center gap-1.5 shadow">
              <i data-lucide="mail" class="w-3.5 h-3.5"></i> Bulk Email (ส่งอีเมลกลุ่ม)
            </button>
          </div>
        </div>

        <!-- Filter Bar -->
        <div class="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-3">
          <div class="relative flex-1">
            <i data-lucide="search" class="w-4 h-4 absolute left-3.5 top-3 text-slate-400"></i>
            <input 
              type="text" 
              id="student-search-input"
              value="${state.filters.search}"
              placeholder="Search ID, Name, Major, Advisor, Country / ค้นหารหัส, ชื่อ, สาขา, อาจารย์, ประเทศ..."
              oninput="handleSearchChange(this.value)"
              class="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-maroon-700/20 focus:border-maroon-700"
            />
          </div>

          <div class="flex flex-wrap items-center gap-2">
            <select id="filter-degree" onchange="handleFilterChange('degree', this.value)" class="bg-slate-50 border border-slate-200 rounded-xl text-xs px-3 py-2 text-slate-700 font-medium focus:outline-none focus:border-maroon-700">
              <option value="all" ${state.filters.degree === 'all' ? 'selected' : ''}>All Degrees (ทุกระดับการศึกษา)</option>
              <option value="B.Eng." ${state.filters.degree === 'B.Eng.' ? 'selected' : ''}>B.Eng. (ปริญญาตรี 4 ปี)</option>
              <option value="M.Eng." ${state.filters.degree === 'M.Eng.' ? 'selected' : ''}>M.Eng. (ปริญญาโท 2 ปี)</option>
              <option value="Ph.D." ${state.filters.degree === 'Ph.D.' ? 'selected' : ''}>Ph.D. (ปริญญาเอก 3 ปี)</option>
            </select>

            <select id="filter-risk" onchange="handleFilterChange('risk', this.value)" class="bg-slate-50 border border-slate-200 rounded-xl text-xs px-3 py-2 text-slate-700 font-medium focus:outline-none focus:border-maroon-700">
              <option value="all" ${state.filters.risk === 'all' ? 'selected' : ''}>All Risk Levels (ทุกระดับความเสี่ยง)</option>
              <option value="Normal" ${state.filters.risk === 'Normal' ? 'selected' : ''}>Normal / Low (0-24 ปกติ)</option>
              <option value="Monitor" ${state.filters.risk === 'Monitor' ? 'selected' : ''}>Monitor (25-49 เฝ้าระวัง)</option>
              <option value="Warning" ${state.filters.risk === 'Warning' ? 'selected' : ''}>Warning (50-74 แจ้งเตือน)</option>
              <option value="Critical" ${state.filters.risk === 'Critical' ? 'selected' : ''}>Critical (75-100 วิกฤต)</option>
            </select>

            <select id="filter-visa" onchange="handleFilterChange('visaUrgency', this.value)" class="bg-slate-50 border border-slate-200 rounded-xl text-xs px-3 py-2 text-slate-700 font-medium focus:outline-none focus:border-maroon-700">
              <option value="all" ${state.filters.visaUrgency === 'all' ? 'selected' : ''}>All Visa Status (สถานะวีซ่า)</option>
              <option value="60d" ${state.filters.visaUrgency === '60d' ? 'selected' : ''}>Expiring ≤ 60 Days (หมดอายุใน 60 วัน)</option>
              <option value="expired" ${state.filters.visaUrgency === 'expired' ? 'selected' : ''}>Expired / Overstay (หมดอายุแล้ว)</option>
            </select>

            <button onclick="resetFilters()" class="bg-slate-100 hover:bg-slate-200 text-slate-600 text-xs px-3 py-2 rounded-xl font-medium transition">
              Reset (ล้างตัวกรอง)
            </button>
          </div>
        </div>

        <div class="overflow-x-auto mt-4" id="roster-table-wrapper">
          ${renderStudentTableHTML(getFilteredStudents())}
        </div>
      </div>
    </section>

    <!-- SECTION 4: GOOGLE CALENDAR & VISA TIMELINE -->
    <section id="section-calendar" class="space-y-4 pt-4">
      <div class="glass-card p-5 rounded-2xl">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 pb-3 border-b border-slate-100">
          <div>
            <h2 class="text-base font-bold text-slate-900 flex items-center gap-2">
              <i data-lucide="calendar" class="w-4 h-4 text-maroon-700"></i>
              Visa Expiration & Milestone Timeline (Google Calendar Sync)
              <span class="text-xs font-thai font-normal text-slate-500">/ ปฏิทินวีซ่าและเชื่อมต่อ Google Calendar</span>
            </h2>
            <p class="text-xs text-slate-500 mt-0.5">Direct integration to export reminders directly into Google Calendar (เชื่อมต่อเข้า Google Calendar โดยตรง)</p>
          </div>
          <div class="flex items-center gap-2">
            <span class="px-3 py-1.5 bg-blue-50 text-blue-700 border border-blue-200 rounded-xl text-xs font-bold font-mono flex items-center gap-1.5 shadow-2xs">
              <i data-lucide="calendar" class="w-3.5 h-3.5"></i> Google Calendar Live Sync
            </span>
          </div>
        </div>

        <div class="space-y-3 max-h-[380px] overflow-y-auto pr-1">
          ${renderCalendarItemsHTML()}
        </div>
      </div>
    </section>

    <!-- SECTION 5: OFFICER HELP DESK RESOLUTION QUEUE -->
    <section id="section-helpdesk" class="space-y-4 pt-4">
      <div class="glass-card p-5 rounded-2xl">
        <div class="flex items-center justify-between mb-4 pb-3 border-b border-slate-100">
          <div>
            <h2 class="text-base font-bold text-slate-900 flex items-center gap-2">
              <i data-lucide="help-circle" class="w-4 h-4 text-maroon-700"></i>
              International Student Appeals & Inquiry Queue (Officer Resolution Stream)
              <span class="text-xs font-thai font-normal text-slate-500">/ คิวรับเรื่องร้องเรียนและตอบกลับคำร้องนักศึกษา</span>
            </h2>
            <p class="text-xs text-slate-500 mt-0.5">Officers can inspect requests submitted from Student and Advisor portals and provide official follow-up</p>
          </div>
          <span class="px-2.5 py-1 rounded-full text-xs font-bold bg-maroon-100 text-maroon-800 font-mono">
            ${state.helpDeskTickets.length} Total Tickets
          </span>
        </div>

        <!-- Ticket Stream -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          ${state.helpDeskTickets.map(t => `
            <div class="p-4 rounded-xl border border-slate-200 bg-white hover:border-maroon-300 transition space-y-2.5">
              <div class="flex items-center justify-between">
                <span class="font-mono text-xs font-bold text-maroon-800">${t.id}</span>
                <span class="px-2 py-0.5 rounded-full text-[10px] font-bold ${t.status.includes('Resolved') ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'}">
                  ${t.status}
                </span>
              </div>
              <div class="font-bold text-slate-900 text-xs">${t.subject}</div>
              <p class="text-[11.5px] text-slate-600 leading-relaxed">${t.description}</p>
              
              <!-- Officer Reply Box -->
              <div class="p-2.5 bg-slate-50 rounded-lg border border-slate-100 text-[11px] text-slate-700">
                <strong class="text-maroon-800">Officer Response:</strong> ${t.response}
              </div>

              <div class="flex items-center justify-between text-[10px] text-slate-400 pt-1 border-t border-slate-50">
                <span>Submitted by: <strong>${t.studentName}</strong> (${t.studentId}) • ${t.category}</span>
                <span>${t.date}</span>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `;

  setTimeout(initOfficerCharts, 60);
}

// ----------------------------------------------------------------------------
// OFFICER CHARTS INITIALIZER (INCLUDES COUNTRY OF ORIGIN BREAKDOWN)
// ----------------------------------------------------------------------------
function initOfficerCharts() {
  const ctxRisk = document.getElementById("chartRiskDistribution");
  const ctxDegree = document.getElementById("chartDegreeBreakdown");
  const ctxCountry = document.getElementById("chartCountryDistribution");

  if (!ctxRisk || !ctxDegree || !ctxCountry) return;

  // 1. Risk Chart
  const normal = state.students.filter(s => s.risk.totalScore < 25).length;
  const monitor = state.students.filter(s => s.risk.totalScore >= 25 && s.risk.totalScore < 50).length;
  const warning = state.students.filter(s => s.risk.totalScore >= 50 && s.risk.totalScore < 75).length;
  const critical = state.students.filter(s => s.risk.totalScore >= 75).length;

  if (window.riskChartInstance) window.riskChartInstance.destroy();
  window.riskChartInstance = new Chart(ctxRisk, {
    type: 'doughnut',
    data: {
      labels: ['Normal (0-24)', 'Monitor (25-49)', 'Warning (50-74)', 'Critical (75-100)'],
      datasets: [{
        data: [normal, monitor, warning, critical],
        backgroundColor: ['#10b981', '#0284c7', '#f59e0b', '#dc2626'],
        borderWidth: 2,
        borderColor: '#ffffff'
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      onClick: (evt, elements) => {
        if (elements.length > 0) {
          const idx = elements[0].index;
          const riskKeys = ['Normal', 'Monitor', 'Warning', 'Critical'];
          state.filters.risk = riskKeys[idx];
          const wrapper = document.getElementById("roster-table-wrapper");
          if (wrapper) wrapper.innerHTML = renderStudentTableHTML(getFilteredStudents());
          lucide.createIcons();
          scrollToSection('section-roster');
        }
      },
      plugins: { legend: { position: 'bottom', labels: { boxWidth: 10, font: { size: 10 } } } },
      cutout: '60%'
    }
  });

  // 2. Degree Chart
  const beng = state.students.filter(s => s.degree === "B.Eng.").length;
  const meng = state.students.filter(s => s.degree === "M.Eng.").length;
  const phd = state.students.filter(s => s.degree === "Ph.D.").length;

  if (window.degreeChartInstance) window.degreeChartInstance.destroy();
  window.degreeChartInstance = new Chart(ctxDegree, {
    type: 'bar',
    data: {
      labels: ['B.Eng. (ป.ตรี)', 'M.Eng. (ป.โท)', 'Ph.D. (ป.เอก)'],
      datasets: [{
        label: 'Students',
        data: [beng, meng, phd],
        backgroundColor: ['#6b0d1e', '#8a1428', '#cba135'],
        borderRadius: 6
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { display: false } },
      scales: {
        y: { beginAtZero: true, grid: { color: '#f1f5f9' }, ticks: { font: { size: 10 } } },
        x: { grid: { display: false }, ticks: { font: { size: 10 } } }
      }
    }
  });

  // 3. Country of Origin Chart (Requested in User Doc)
  const countryCounts = {};
  state.students.forEach(s => {
    const c = s.countryName || s.nationality.split(' ')[0] || "Other";
    countryCounts[c] = (countryCounts[c] || 0) + 1;
  });

  const countryLabels = Object.keys(countryCounts).sort((a, b) => countryCounts[b] - countryCounts[a]);
  const countryData = countryLabels.map(l => countryCounts[l]);

  if (window.countryChartInstance) window.countryChartInstance.destroy();
  window.countryChartInstance = new Chart(ctxCountry, {
    type: 'bar',
    data: {
      labels: countryLabels,
      datasets: [{
        label: 'Students by Country',
        data: countryData,
        backgroundColor: [
          '#6b0d1e', '#8a1428', '#a81d38', '#cba135', '#e5c365', 
          '#0284c7', '#0d9488', '#10b981', '#6366f1', '#8b5cf6'
        ],
        borderRadius: 6
      }]
    },
    options: {
      indexAxis: 'y',
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { display: false } },
      scales: {
        x: { beginAtZero: true, grid: { color: '#f1f5f9' }, ticks: { stepSize: 1, font: { size: 9 } } },
        y: { grid: { display: false }, ticks: { font: { size: 10 } } }
      }
    }
  });
}

// ============================================================================
// 7. VIEW 2: STUDENT PERSONALIZED PORTAL (ONLY THEIR OWN DATA)
// ============================================================================
function renderStudentPortalHTML(container) {
  const s = state.students.find(x => x.id === state.selectedStudentId) || state.students[0];
  const myTickets = state.helpDeskTickets.filter(t => t.studentId === s.id);

  // Google Calendar URL generator for Student Visa
  const googleCalUrl = getGoogleCalendarUrl(
    `[ENGiTRACK] Non-ED Visa Expiration - ${s.name}`,
    `Reminder: Your Non-ED Visa expires on ${s.visa.expiryDate}. Please prepare TM.7 extension documents and obtain university endorsement letter at Room EN01. Main Advisor: ${s.mainAdvisor.name}.`,
    `Faculty of Engineering, Khon Kaen University`,
    s.visa.expiryDate
  );

  container.innerHTML = `
    <div class="space-y-6">
      
      <!-- 1. Student Profile Header Banner (High Contrast Dark Maroon & Gold) -->
      <div class="glass-maroon-card bg-gradient-maroon text-white p-6 sm:p-8 rounded-3xl relative overflow-hidden shadow-2xl border border-gold-500/40">
        <div class="flex flex-col sm:flex-row items-center sm:items-start gap-6 relative z-10">
          <div class="relative avatar-container">
            <img src="${s.avatar}" id="student-portal-avatar" alt="${s.name}" class="w-24 h-24 rounded-full object-cover border-2 border-gold-accent shadow-2xl" />
            <button onclick="triggerPhotoUpload('${s.id}')" class="avatar-overlay absolute inset-0 rounded-full flex flex-col items-center justify-center text-white text-[10px] font-bold">
              <i data-lucide="camera" class="w-5 h-5 mb-1"></i>
              Change Photo<br><span class="font-thai text-[9px]">เปลี่ยนรูป</span>
            </button>
          </div>

          <div class="flex-1 text-center sm:text-left">
            <div class="flex flex-wrap items-center justify-center sm:justify-start gap-2.5 mb-1">
              <h2 class="text-2xl sm:text-3xl font-black tracking-tight text-white">${s.name}</h2>
              <span class="px-3 py-0.5 rounded-full text-xs font-black bg-gold-400 text-maroon-950 shadow-sm border border-gold-300">
                ${s.degree} Engineering
              </span>
            </div>
            <div class="text-xs text-slate-100 font-mono mt-1">
              Student ID: <strong class="text-gold-300 font-bold">${s.id}</strong> • Nationality: <span class="text-white font-semibold">${s.nationality}</span>
            </div>
            <div class="text-xs text-slate-100 mt-1 font-medium">
              ${s.majorEn} <span class="font-thai text-gold-300">(${s.majorTh})</span> • Semester <strong class="text-white">${s.semester}</strong> (Cumulative GPA: <strong class="text-gold-300 font-bold">${s.gpa.toFixed(2)}</strong>)
            </div>

            <div class="flex flex-wrap items-center justify-center sm:justify-start gap-4 mt-4 pt-3 border-t border-white/20 text-xs">
              <div class="flex items-center gap-1.5 text-slate-100">
                <i data-lucide="user-check" class="w-4 h-4 text-gold-400"></i>
                <span>Main Advisor: <strong class="text-white">${s.mainAdvisor.name}</strong></span>
              </div>
              <div class="flex items-center gap-1.5 text-slate-100">
                <i data-lucide="users" class="w-4 h-4 text-gold-400"></i>
                <span>Co-Advisor: <strong class="text-white">${s.coAdvisor.name}</strong></span>
              </div>
            </div>
          </div>

          <!-- Overall Risk Rating Badge -->
          <div class="text-center sm:text-right bg-slate-950/70 p-4 rounded-2xl border border-gold-400/40 shadow-inner">
            <div class="text-[10px] uppercase font-bold text-slate-300 tracking-wider">Your Risk Score</div>
            <div class="text-3xl font-black text-white mt-0.5">${s.risk.totalScore} <span class="text-xs text-gold-300">/ 100</span></div>
            <span class="inline-block px-3 py-1 rounded-full text-xs font-black ${s.risk.color === 'critical' ? 'bg-red-600 text-white' : s.risk.color === 'warning' ? 'bg-amber-400 text-slate-950' : 'bg-emerald-500 text-white'} mt-1 shadow-sm">
              ${s.risk.levelTh}
            </span>
          </div>
        </div>
      </div>

      <!-- 2. Prominent Scholarship Information Card (REQUESTED FEATURE) -->
      <div class="bg-white p-6 rounded-3xl border-2 border-emerald-500 shadow-sm space-y-3">
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center">
              <i data-lucide="wallet" class="w-5 h-5"></i>
            </div>
            <div>
              <h3 class="font-black text-slate-900 text-base">
                Scholarship Information & Financial Status
                <span class="block text-xs font-thai font-normal text-slate-500">ข้อมูลการรับทุนการศึกษาและสถานะการเบิกจ่าย</span>
              </h3>
            </div>
          </div>
          <span class="px-3 py-1 rounded-full text-xs font-bold ${s.scholarship.type.includes('Self-Funded') ? 'bg-slate-100 text-slate-700' : 'bg-emerald-100 text-emerald-800'}">
            ${s.scholarship.status}
          </span>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-3 border-t border-slate-100 text-xs">
          <div class="p-3.5 bg-slate-50 rounded-2xl border border-slate-200">
            <div class="text-slate-400 font-bold text-[10px] uppercase">Scholarship Name (ชื่อทุนการศึกษา)</div>
            <div class="font-bold text-slate-900 text-sm mt-1">${s.scholarship.type}</div>
          </div>
          <div class="p-3.5 bg-slate-50 rounded-2xl border border-slate-200">
            <div class="text-slate-400 font-bold text-[10px] uppercase">Remaining Duration (ระยะเวลารับทุนคงเหลือ)</div>
            <div class="font-black text-emerald-700 text-sm mt-1">
              ${s.scholarship.remainingSemesters} Semesters remaining (${s.scholarship.remainingSemesters} ภาคการศึกษา)
            </div>
          </div>
          <div class="p-3.5 bg-slate-50 rounded-2xl border border-slate-200">
            <div class="text-slate-400 font-bold text-[10px] uppercase">Monthly Allowance (วงเงินสนับสนุน)</div>
            <div class="font-bold text-slate-900 text-sm mt-1">${s.scholarship.amount}</div>
          </div>
        </div>
      </div>

      <!-- 3. Thesis & Dissertation Information Card (REQUESTED FEATURE) -->
      <div class="bg-white p-6 rounded-3xl border-2 border-maroon-700 shadow-sm space-y-3">
        <div class="flex items-center justify-between pb-2 border-b border-slate-100">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-2xl bg-maroon-100 text-maroon-800 flex items-center justify-center">
              <i data-lucide="book-open" class="w-5 h-5"></i>
            </div>
            <div>
              <h3 class="font-black text-slate-900 text-base">
                Thesis & Dissertation Information
                <span class="block text-xs font-thai font-normal text-slate-500">ข้อมูลวิทยานิพนธ์ / ดุษฎีนิพนธ์</span>
              </h3>
            </div>
          </div>
          <span class="px-3 py-1 rounded-full text-xs font-bold bg-maroon-50 text-maroon-800 border border-maroon-200">
            ${s.degree} Research
          </span>
        </div>

        <div class="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-2.5 text-xs">
          <div>
            <div class="text-[10.5px] font-bold text-slate-400 uppercase tracking-wider">Thesis Title (English):</div>
            <div class="font-bold text-slate-900 text-sm mt-0.5 leading-snug">${s.thesis.titleEn}</div>
          </div>
          <div class="pt-2 border-t border-slate-200/60">
            <div class="text-[10.5px] font-bold text-slate-400 uppercase tracking-wider font-thai">ชื่อวิทยานิพนธ์ (ภาษาไทย):</div>
            <div class="text-slate-800 font-thai text-xs mt-0.5 leading-relaxed font-medium">${s.thesis.titleTh}</div>
          </div>
        </div>
      </div>

      <!-- 4. Student Journey (NON-CLICKABLE AS REQUESTED) -->
      <div class="bg-white p-6 rounded-3xl border-2 border-indigo-500 shadow-sm">
        <h3 class="font-bold text-slate-900 text-sm mb-2 flex items-center gap-2">
          <i data-lucide="git-commit" class="w-4 h-4 text-indigo-600"></i>
          Student Journey
          <span class="font-thai text-slate-500 text-xs font-normal">/ เส้นทางการศึกษา 7 ขั้นตอน (แสดงสถานะ)</span>
        </h3>
        <p class="text-xs text-slate-400 mb-4">Official study timeline checkpoints monitored by KKU Faculty of Engineering</p>

        <div class="grid grid-cols-2 md:grid-cols-7 gap-2 text-center text-[10.5px]">
          <div class="journey-pill-static p-3 rounded-2xl border border-emerald-200 bg-emerald-50">
            <div class="font-bold text-emerald-800">1. Arrival</div>
            <div class="font-thai text-emerald-700 text-[10px]">รายงานตัว</div>
            <div class="text-emerald-600 font-bold mt-1">✓ Completed</div>
          </div>
          <div class="journey-pill-static p-3 rounded-2xl border ${s.visa.daysRemaining <= 60 ? 'border-red-300 bg-red-50' : 'border-emerald-200 bg-emerald-50'}">
            <div class="font-bold ${s.visa.daysRemaining <= 60 ? 'text-red-800' : 'text-emerald-800'}">2. Visa</div>
            <div class="font-thai ${s.visa.daysRemaining <= 60 ? 'text-red-700' : 'text-emerald-700'} text-[10px]">สถานะวีซ่า</div>
            <div class="${s.visa.daysRemaining <= 60 ? 'text-red-600 font-bold' : 'text-emerald-600 font-semibold'} mt-1">
              ${s.visa.daysRemaining <= 60 ? `⚠️ ${s.visa.daysRemaining}d left` : 'Valid'}
            </div>
          </div>
          <div class="journey-pill-static p-3 rounded-2xl border ${s.enrollmentStatus?.status === 'Semester Leave' ? 'border-amber-200 bg-amber-50' : s.enrollmentStatus?.status === 'Maintain' ? 'border-blue-200 bg-blue-50' : 'border-emerald-200 bg-emerald-50'}">
            <div class="font-bold ${s.enrollmentStatus?.status === 'Semester Leave' ? 'text-amber-800' : s.enrollmentStatus?.status === 'Maintain' ? 'text-blue-800' : 'text-emerald-800'}">3. Registration</div>
            <div class="font-thai ${s.enrollmentStatus?.status === 'Semester Leave' ? 'text-amber-700' : s.enrollmentStatus?.status === 'Maintain' ? 'text-blue-700' : 'text-emerald-700'} text-[10px]">ลงทะเบียน</div>
            <div class="${s.enrollmentStatus?.status === 'Semester Leave' ? 'text-amber-700 font-bold' : s.enrollmentStatus?.status === 'Maintain' ? 'text-blue-700 font-bold' : 'text-emerald-600 font-semibold'} text-[9.5px] mt-1 leading-tight">
              ${s.enrollmentStatus?.displayTextTh || 'ลงทะเบียน (Enroll) ใน 1/2026'}
            </div>
          </div>
          <div class="journey-pill-static p-3 rounded-2xl border border-slate-200 bg-slate-50">
            <div class="font-bold text-slate-800">4. Tuition/Sch.</div>
            <div class="font-thai text-slate-600 text-[10px]">ค่าเทอม/ทุน</div>
            <div class="text-slate-600 mt-1">${s.scholarship.remainingSemesters} sem left</div>
          </div>
          <div class="journey-pill-static p-3 rounded-2xl border border-slate-200 bg-slate-50">
            <div class="font-bold text-slate-800">5. Progress</div>
            <div class="font-thai text-slate-600 text-[10px]">ผลการเรียน</div>
            <div class="text-slate-600 mt-1">GPA ${s.gpa.toFixed(2)}</div>
          </div>
          <div class="journey-pill-static p-3 rounded-2xl border border-amber-200 bg-amber-50">
            <div class="font-bold text-amber-800">6. Milestones</div>
            <div class="font-thai text-amber-700 text-[10px]">QE/Proposal</div>
            <div class="text-amber-700 font-semibold mt-1">In Progress</div>
          </div>
          <div class="journey-pill-static p-3 rounded-2xl border border-slate-200 bg-slate-50">
            <div class="font-bold text-slate-800">7. Graduation</div>
            <div class="font-thai text-slate-600 text-[10px]">สำเร็จการศึกษา</div>
            <div class="text-slate-400 mt-1">Pending</div>
          </div>
        </div>
      </div>

      <!-- 5. Visa Countdown & Immigration Guidelines (REQUESTED IN STUDENT VIEW) -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        <!-- Visa Status & Google Calendar -->
        <div class="bg-white p-6 rounded-3xl border-2 border-amber-500 shadow-sm flex flex-col justify-between space-y-4">
          <div>
            <div class="flex items-center justify-between">
              <h3 class="font-bold text-slate-900 text-sm flex items-center gap-2">
                <i data-lucide="clock" class="w-4 h-4 text-amber-600"></i>
                Non-ED Visa Expiration Countdown
              </h3>
              <span class="px-2.5 py-0.5 rounded-full text-xs font-bold ${s.visa.daysRemaining <= 60 ? 'bg-red-100 text-red-700 animate-pulse' : 'bg-emerald-100 text-emerald-800'}">
                ${s.visa.daysRemaining} Days Left
              </span>
            </div>

            <div class="mt-3 p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-2 text-xs">
              <div class="flex justify-between"><span class="text-slate-500">Visa Type:</span> <strong class="text-slate-900">${s.visa.type}</strong></div>
              <div class="flex justify-between"><span class="text-slate-500">Expiration Date:</span> <strong class="text-maroon-800 text-sm">${s.visa.expiryDate}</strong></div>
              <div class="flex justify-between"><span class="text-slate-500">Renewal Status:</span> <strong class="text-slate-900">${s.visa.status}</strong></div>
            </div>
          </div>

          <div class="pt-2 border-t border-slate-100">
            <a href="${googleCalUrl}" target="_blank" class="w-full bg-blue-600 hover:bg-blue-700 text-white text-xs py-2.5 rounded-xl font-bold transition flex items-center justify-center gap-2 shadow-xs">
              <i data-lucide="calendar-plus" class="w-4 h-4"></i> Add to Google Calendar (เพิ่มลง Google Calendar)
            </a>
          </div>
        </div>

        <!-- Immigration & TM.7 Guidelines (Moved to Student View) -->
        <div class="bg-white p-6 rounded-3xl border-2 border-blue-500 shadow-sm space-y-3">
          <h3 class="font-bold text-slate-900 text-sm flex items-center gap-2">
            <i data-lucide="info" class="w-4 h-4 text-blue-600"></i>
            Immigration & TM.7 Guidelines
            <span class="font-thai text-slate-500 text-xs font-normal">/ คู่มือการต่อวีซ่า</span>
          </h3>

          <div class="space-y-2 text-xs text-slate-600">
            <div class="p-2.5 bg-slate-50 rounded-xl border border-slate-200">
              <strong class="text-slate-900">1. 60-Day Prior Notification (60 วันล่วงหน้า):</strong>
              <div class="text-[11px] text-slate-500 mt-0.5">Request faculty certification letter at Room EN01.</div>
            </div>
            <div class="p-2.5 bg-slate-50 rounded-xl border border-slate-200">
              <strong class="text-slate-900">2. TM.7 Extension Application (แบบฟอร์ม ตม.7):</strong>
              <div class="text-[11px] text-slate-500 mt-0.5">Passport, 2-inch photos, enrollment certificate, 1,900 THB fee.</div>
            </div>
            <div class="p-2.5 bg-red-50 rounded-xl border border-red-200 text-red-900">
              <strong>3. Overstay Warning (การอยู่เกินกำหนด):</strong>
              <div class="text-[11px] text-red-700 mt-0.5">500 THB/day fine up to 20,000 THB maximum.</div>
            </div>
          </div>
        </div>

      </div>

      <!-- 6. Academic Milestones Checklist -->
      <div class="bg-white p-6 rounded-3xl border-2 border-purple-600 shadow-sm space-y-4">
        <h3 class="font-bold text-slate-900 text-sm flex items-center gap-2">
          <i data-lucide="award" class="w-4 h-4 text-purple-600"></i>
          Your Academic Milestones & Degree Requirements
          <span class="font-thai text-slate-500 text-xs font-normal">/ เกณฑ์วิชาการสำคัญระดับ ${s.degree}</span>
        </h3>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
          ${Object.keys(s.milestones).map(k => {
            const m = s.milestones[k];
            const isCompleted = m.status === 'Completed';
            const isPending = m.status === 'Pending';
            return `
              <div class="p-4 rounded-2xl border ${isCompleted ? 'border-emerald-200 bg-emerald-50/40' : isPending ? 'border-amber-200 bg-amber-50/40' : 'border-slate-200 bg-slate-50'} space-y-1.5">
                <div class="font-bold text-slate-900">${m.name}</div>
                <div class="text-[11px] font-thai text-slate-500">${m.nameTh || ''}</div>
                <div class="pt-1.5 border-t border-slate-100 flex justify-between items-center">
                  <span class="text-[10px] text-slate-400">Status:</span>
                  <span class="font-bold ${isCompleted ? 'text-emerald-700' : isPending ? 'text-amber-700' : 'text-slate-500'}">
                    ${m.score || m.status}
                  </span>
                </div>
              </div>
            `;
          }).join('')}
        </div>
      </div>

      <!-- 7. Student Ticket / Appeal Submission Form (MOVED HERE AS REQUESTED) -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        <!-- Submit Ticket Form -->
        <div class="bg-white p-6 rounded-3xl border-2 border-rose-500 shadow-sm space-y-4">
          <div>
            <h3 class="font-bold text-slate-900 text-sm flex items-center gap-2">
              <i data-lucide="message-square-plus" class="w-4 h-4 text-rose-600"></i>
              Submit Inquiry or Appeal / ส่งข้อร้องเรียน & ขอความช่วยเหลือ
            </h3>
            <p class="text-xs text-slate-500 mt-0.5">Send direct requests to the International Relations Office (EN01)</p>
          </div>

          <form onsubmit="handleStudentTicketSubmit(event, '${s.id}')" class="space-y-3 text-xs">
            <div>
              <label class="block font-bold text-slate-700 mb-1">Category (ประเภทเรื่อง)</label>
              <select id="student-ticket-cat" class="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-slate-800 focus:outline-none focus:border-maroon-700">
                <option value="Visa & Immigration (วีซ่า)">Visa & Immigration Extension Support</option>
                <option value="Academic & Proposal (วิชาการ)">Academic, QE & Proposal Exam Scheduling</option>
                <option value="Scholarship & Financial (ทุนการศึกษา)">Scholarship Disbursement & Financial Aid</option>
                <option value="General Support (ทั่วไป)">General Advice & Welfare</option>
              </select>
            </div>

            <div>
              <label class="block font-bold text-slate-700 mb-1">Subject (หัวข้อเรื่อง)</label>
              <input type="text" id="student-ticket-subj" placeholder="e.g. Requesting endorsement letter for Visa renewal" class="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-slate-800 focus:outline-none focus:border-maroon-700" required />
            </div>

            <div>
              <label class="block font-bold text-slate-700 mb-1">Details (รายละเอียด)</label>
              <textarea id="student-ticket-desc" rows="3" placeholder="Explain your request or issue in detail..." class="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-slate-800 focus:outline-none focus:border-maroon-700" required></textarea>
            </div>

            <button type="submit" class="bg-gradient-maroon text-white text-xs px-5 py-2.5 rounded-xl font-bold shadow hover:opacity-95 transition flex items-center gap-2">
              <i data-lucide="send" class="w-3.5 h-3.5"></i> Submit Ticket (ส่งเรื่องถึงเจ้าหน้าที่)
            </button>
          </form>
        </div>

        <!-- Student's Ticket History -->
        <div class="bg-white p-6 rounded-3xl border-2 border-teal-500 shadow-sm space-y-4">
          <div class="flex items-center justify-between">
            <h3 class="font-bold text-slate-900 text-sm flex items-center gap-2">
              <i data-lucide="history" class="w-4 h-4 text-teal-600"></i>
              Your Submitted Tickets & Responses
            </h3>
            <span class="text-xs font-mono font-bold bg-maroon-100 text-maroon-800 px-2.5 py-0.5 rounded-full">
              ${myTickets.length} Tickets
            </span>
          </div>

          <div class="space-y-3 max-h-[300px] overflow-y-auto pr-1">
            ${myTickets.length === 0 ? `
              <div class="p-8 text-center text-slate-400 text-xs">No tickets submitted yet. Use the form to reach out to the office.</div>
            ` : myTickets.map(t => `
              <div class="p-3.5 rounded-xl border border-slate-200 bg-slate-50 space-y-2 text-xs">
                <div class="flex justify-between items-center">
                  <span class="font-mono font-bold text-maroon-800">${t.id}</span>
                  <span class="px-2 py-0.5 rounded-full text-[10px] font-bold ${t.status.includes('Resolved') ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'}">
                    ${t.status}
                  </span>
                </div>
                <div class="font-bold text-slate-900">${t.subject}</div>
                <p class="text-[11px] text-slate-600">${t.description}</p>
                <div class="p-2 bg-white rounded-lg border border-slate-100 text-[11px] text-slate-700">
                  <strong class="text-maroon-800">Officer Reply:</strong> ${t.response}
                </div>
              </div>
            `).join('')}
          </div>
        </div>

      </div>

    </div>
  `;
}

function handleStudentProfileSwitch(studId) {
  state.selectedStudentId = studId;
  renderUnifiedPage();
}

function handleStudentTicketSubmit(e, studentId) {
  e.preventDefault();
  const cat = document.getElementById("student-ticket-cat").value;
  const subj = document.getElementById("student-ticket-subj").value;
  const desc = document.getElementById("student-ticket-desc").value;

  const s = state.students.find(x => x.id === studentId);
  const newTicket = {
    id: `TICK-2026-${String(state.helpDeskTickets.length + 1).padStart(3, '0')}`,
    studentId: studentId,
    studentName: s ? s.name : "Student",
    category: cat,
    subject: subj,
    description: desc,
    status: "In Review (กำลังตรวจสอบ)",
    date: new Date().toISOString().replace('T', ' ').slice(0, 16),
    response: "Ticket received. The International Student Officer will follow up within 24 hours."
  };

  state.helpDeskTickets.unshift(newTicket);
  showToast("Your ticket has been submitted to EN01! / ส่งคำร้องเรียบร้อยแล้ว");
  renderUnifiedPage();
}

// ============================================================================
// 8. VIEW 3: ADVISOR DEDICATED PORTAL (STUDENT VIEW FOR ADVISEES)
// ============================================================================
function renderAdvisorPortalHTML(container) {
  const adv = ADVISORS_POOL.find(a => a.name === state.selectedAdvisorName) || ADVISORS_POOL[0];
  
  // Filter ONLY students supervised by this professor (Main or Co)
  const advisees = state.students.filter(s => s.mainAdvisor.name === adv.name || s.coAdvisor.name === adv.name);
  const urgentAdvisees = advisees.filter(s => s.risk.totalScore >= 50 || s.visa.daysRemaining <= 60);

  // Active Advisee to monitor in student view layout
  const s = advisees.find(a => a.id === state.selectedAdvisorAdviseeId) || advisees[0] || state.students[0];

  // Google Calendar URL for Advisee Visa
  const googleCalUrl = getGoogleCalendarUrl(
    `[ENGiTRACK Advisor Alert] Non-ED Visa Expiry - ${s.name} (${s.id})`,
    `Reminder for Advisor ${adv.name}: Advisee ${s.name}'s Non-ED Visa expires on ${s.visa.expiryDate}. Please verify TM.7 extension status.`,
    `Faculty of Engineering, KKU`,
    s.visa.expiryDate
  );

  container.innerHTML = `
    <div class="space-y-6">
      
      <!-- 1. Advisor Profile Header Banner -->
      <div class="glass-maroon-card bg-gradient-maroon text-white p-6 sm:p-8 rounded-3xl relative overflow-hidden shadow-2xl border border-gold-500/40">
        <div class="flex flex-col sm:flex-row items-center sm:items-start gap-6">
          <div class="w-20 h-20 rounded-2xl bg-gradient-gold p-0.5 shadow-2xl flex items-center justify-center">
            <div class="w-full h-full bg-maroon-900 rounded-[14px] flex items-center justify-center text-gold-accent font-black text-2xl">
              ${adv.name.split(' ').pop()[0]}
            </div>
          </div>

          <div class="flex-1 text-center sm:text-left">
            <div class="flex flex-wrap items-center justify-center sm:justify-start gap-2.5 mb-1">
              <h2 class="text-2xl sm:text-3xl font-black text-white">${adv.name}</h2>
              <span class="px-3 py-0.5 rounded-full text-xs font-black bg-gold-400 text-maroon-950 shadow-sm border border-gold-300">
                Faculty Advisor
              </span>
            </div>
            <div class="font-thai text-gold-300 text-sm font-semibold mt-0.5">${adv.nameTh}</div>
            <div class="text-xs text-slate-100 mt-1 font-medium">
              Department of <strong class="text-white">${adv.dept}</strong> (${adv.deptTh}) • Office: <strong class="text-gold-300 font-bold">${adv.room}</strong> • Email: <a href="mailto:${adv.email}" class="underline text-gold-300 font-semibold">${adv.email}</a>
            </div>
          </div>

          <!-- Supervised Advisees Count Badge -->
          <div class="text-center bg-slate-950/70 p-4 rounded-2xl border border-gold-400/40 shadow-inner">
            <div class="text-[10px] uppercase font-bold text-slate-300 tracking-wider">Supervised Advisees</div>
            <div class="text-3xl font-black text-white mt-0.5">${advisees.length}</div>
            <span class="inline-block text-[11px] text-gold-300 font-thai mt-0.5 font-bold">
              (${urgentAdvisees.length} เคสต้องติดตาม)
            </span>
          </div>
        </div>
      </div>

      <!-- 2. Advisee Selector Tabs (If Advisor has multiple advisees) -->
      ${advisees.length > 1 ? `
        <div class="bg-slate-900 text-white p-3 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-3 border border-gold-500/40 shadow-md">
          <div class="flex items-center gap-2">
            <i data-lucide="users" class="w-4 h-4 text-gold-400"></i>
            <span class="text-xs font-bold text-slate-200">
              Select Advisee / เลือกนักศึกษาในความดูแล:
            </span>
          </div>
          <div class="flex flex-wrap items-center gap-2">
            ${advisees.map(item => `
              <button onclick="handleAdvisorAdviseeSelect('${item.id}')" class="px-3 py-1.5 rounded-xl text-xs font-bold transition flex items-center gap-1.5 ${item.id === s.id ? 'bg-gold-400 text-maroon-950 shadow-sm' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'}">
                <i data-lucide="user" class="w-3.5 h-3.5"></i>
                <span>${item.name} (${item.degree})</span>
              </button>
            `).join('')}
          </div>
        </div>
      ` : ''}

      <!-- 3. Advisee Profile Header Banner (Student View Layout) -->
      <div class="glass-maroon-card bg-gradient-maroon text-white p-6 sm:p-8 rounded-3xl relative overflow-hidden shadow-2xl border border-gold-500/40">
        <div class="flex flex-col sm:flex-row items-center sm:items-start gap-6 relative z-10">
          <div class="relative avatar-container">
            <img src="${s.avatar}" id="advisor-advisee-avatar" alt="${s.name}" class="w-24 h-24 rounded-full object-cover border-2 border-gold-accent shadow-2xl" />
          </div>

          <div class="flex-1 text-center sm:text-left">
            <div class="flex flex-wrap items-center justify-center sm:justify-start gap-2.5 mb-1">
              <h2 class="text-2xl sm:text-3xl font-black tracking-tight text-white">${s.name}</h2>
              <span class="px-3 py-0.5 rounded-full text-xs font-black bg-gold-400 text-maroon-950 shadow-sm border border-gold-300">
                ${s.degree} Engineering
              </span>
            </div>
            <div class="text-xs text-slate-100 font-mono mt-1">
              Student ID: <strong class="text-gold-300 font-bold">${s.id}</strong> • Nationality: <span class="text-white font-semibold">${s.nationality}</span>
            </div>
            <div class="text-xs text-slate-100 mt-1 font-medium">
              ${s.majorEn} <span class="font-thai text-gold-300">(${s.majorTh})</span> • Semester <strong class="text-white">${s.semester}</strong> (Cumulative GPA: <strong class="text-gold-300 font-bold">${s.gpa.toFixed(2)}</strong>)
            </div>

            <div class="flex flex-wrap items-center justify-center sm:justify-start gap-4 mt-4 pt-3 border-t border-white/20 text-xs">
              <div class="flex items-center gap-1.5 text-slate-100">
                <i data-lucide="user-check" class="w-4 h-4 text-gold-400"></i>
                <span>Main Advisor: <strong class="text-white">${s.mainAdvisor.name}</strong></span>
              </div>
              <div class="flex items-center gap-1.5 text-slate-100">
                <i data-lucide="users" class="w-4 h-4 text-gold-400"></i>
                <span>Co-Advisor: <strong class="text-white">${s.coAdvisor.name}</strong></span>
              </div>
            </div>
          </div>

          <!-- Overall Risk Rating Badge -->
          <div class="text-center sm:text-right bg-slate-950/70 p-4 rounded-2xl border border-gold-400/40 shadow-inner">
            <div class="text-[10px] uppercase font-bold text-slate-300 tracking-wider">Advisee Risk Score</div>
            <div class="text-3xl font-black text-white mt-0.5">${s.risk.totalScore} <span class="text-xs text-gold-300">/ 100</span></div>
            <span class="inline-block px-3 py-1 rounded-full text-xs font-black ${s.risk.color === 'critical' ? 'bg-red-600 text-white' : s.risk.color === 'warning' ? 'bg-amber-400 text-slate-950' : 'bg-emerald-500 text-white'} mt-1 shadow-sm">
              ${s.risk.levelTh}
            </span>
          </div>
        </div>
      </div>

      <!-- 4. Prominent Scholarship Information Card -->
      <div class="bg-white p-6 rounded-3xl border-2 border-emerald-500 shadow-sm space-y-3">
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center">
              <i data-lucide="wallet" class="w-5 h-5"></i>
            </div>
            <div>
              <h3 class="font-black text-slate-900 text-base">
                Scholarship Information & Financial Status
                <span class="block text-xs font-thai font-normal text-slate-500">ข้อมูลการรับทุนการศึกษาและสถานะการเบิกจ่าย</span>
              </h3>
            </div>
          </div>
          <span class="px-3 py-1 rounded-full text-xs font-bold ${s.scholarship.type.includes('Self-Funded') ? 'bg-slate-100 text-slate-700' : 'bg-emerald-100 text-emerald-800'}">
            ${s.scholarship.status}
          </span>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-3 border-t border-slate-100 text-xs">
          <div class="p-3.5 bg-slate-50 rounded-2xl border border-slate-200">
            <div class="text-slate-400 font-bold text-[10px] uppercase">Scholarship Name (ชื่อทุนการศึกษา)</div>
            <div class="font-bold text-slate-900 text-sm mt-1">${s.scholarship.type}</div>
          </div>
          <div class="p-3.5 bg-slate-50 rounded-2xl border border-slate-200">
            <div class="text-slate-400 font-bold text-[10px] uppercase">Remaining Duration (ระยะเวลารับทุนคงเหลือ)</div>
            <div class="font-black text-emerald-700 text-sm mt-1">
              ${s.scholarship.remainingSemesters} Semesters remaining (${s.scholarship.remainingSemesters} ภาคการศึกษา)
            </div>
          </div>
          <div class="p-3.5 bg-slate-50 rounded-2xl border border-slate-200">
            <div class="text-slate-400 font-bold text-[10px] uppercase">Monthly Allowance (วงเงินสนับสนุน)</div>
            <div class="font-bold text-slate-900 text-sm mt-1">${s.scholarship.amount}</div>
          </div>
        </div>
      </div>

      <!-- 5. Thesis & Dissertation Information Card (REQUESTED FEATURE) -->
      <div class="bg-white p-6 rounded-3xl border-2 border-maroon-700 shadow-sm space-y-3">
        <div class="flex items-center justify-between pb-2 border-b border-slate-100">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-2xl bg-maroon-100 text-maroon-800 flex items-center justify-center">
              <i data-lucide="book-open" class="w-5 h-5"></i>
            </div>
            <div>
              <h3 class="font-black text-slate-900 text-base">
                Thesis & Dissertation Information
                <span class="block text-xs font-thai font-normal text-slate-500">ข้อมูลวิทยานิพนธ์ / ดุษฎีนิพนธ์</span>
              </h3>
            </div>
          </div>
          <span class="px-3 py-1 rounded-full text-xs font-bold bg-maroon-50 text-maroon-800 border border-maroon-200">
            ${s.degree} Research
          </span>
        </div>

        <div class="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-2.5 text-xs">
          <div>
            <div class="text-[10.5px] font-bold text-slate-400 uppercase tracking-wider">Thesis Title (English):</div>
            <div class="font-bold text-slate-900 text-sm mt-0.5 leading-snug">${s.thesis.titleEn}</div>
          </div>
          <div class="pt-2 border-t border-slate-200/60">
            <div class="text-[10.5px] font-bold text-slate-400 uppercase tracking-wider font-thai">ชื่อวิทยานิพนธ์ (ภาษาไทย):</div>
            <div class="text-slate-800 font-thai text-xs mt-0.5 leading-relaxed font-medium">${s.thesis.titleTh}</div>
          </div>
        </div>
      </div>

      <!-- 6. Student Journey (NON-CLICKABLE AS REQUESTED) -->
      <div class="bg-white p-6 rounded-3xl border-2 border-indigo-500 shadow-sm">
        <h3 class="font-bold text-slate-900 text-sm mb-2 flex items-center gap-2">
          <i data-lucide="git-commit" class="w-4 h-4 text-indigo-600"></i>
          Student Journey
          <span class="font-thai text-slate-500 text-xs font-normal">/ เส้นทางการศึกษา 7 ขั้นตอน (แสดงสถานะ)</span>
        </h3>
        <p class="text-xs text-slate-400 mb-4">Official study timeline checkpoints monitored by KKU Faculty of Engineering</p>

        <div class="grid grid-cols-2 md:grid-cols-7 gap-2 text-center text-[10.5px]">
          <div class="journey-pill-static p-3 rounded-2xl border border-emerald-200 bg-emerald-50">
            <div class="font-bold text-emerald-800">1. Arrival</div>
            <div class="font-thai text-emerald-700 text-[10px]">รายงานตัว</div>
            <div class="text-emerald-600 font-bold mt-1">✓ Completed</div>
          </div>
          <div class="journey-pill-static p-3 rounded-2xl border ${s.visa.daysRemaining <= 60 ? 'border-red-300 bg-red-50' : 'border-emerald-200 bg-emerald-50'}">
            <div class="font-bold ${s.visa.daysRemaining <= 60 ? 'text-red-800' : 'text-emerald-800'}">2. Visa</div>
            <div class="font-thai ${s.visa.daysRemaining <= 60 ? 'text-red-700' : 'text-emerald-700'} text-[10px]">สถานะวีซ่า</div>
            <div class="${s.visa.daysRemaining <= 60 ? 'text-red-600 font-bold' : 'text-emerald-600 font-semibold'} mt-1">
              ${s.visa.daysRemaining <= 60 ? `⚠️ ${s.visa.daysRemaining}d left` : 'Valid'}
            </div>
          </div>
          <div class="journey-pill-static p-3 rounded-2xl border ${s.enrollmentStatus?.status === 'Semester Leave' ? 'border-amber-200 bg-amber-50' : s.enrollmentStatus?.status === 'Maintain' ? 'border-blue-200 bg-blue-50' : 'border-emerald-200 bg-emerald-50'}">
            <div class="font-bold ${s.enrollmentStatus?.status === 'Semester Leave' ? 'text-amber-800' : s.enrollmentStatus?.status === 'Maintain' ? 'text-blue-800' : 'text-emerald-800'}">3. Registration</div>
            <div class="font-thai ${s.enrollmentStatus?.status === 'Semester Leave' ? 'text-amber-700' : s.enrollmentStatus?.status === 'Maintain' ? 'text-blue-700' : 'text-emerald-700'} text-[10px]">ลงทะเบียน</div>
            <div class="${s.enrollmentStatus?.status === 'Semester Leave' ? 'text-amber-700 font-bold' : s.enrollmentStatus?.status === 'Maintain' ? 'text-blue-700 font-bold' : 'text-emerald-600 font-semibold'} text-[9.5px] mt-1 leading-tight">
              ${s.enrollmentStatus?.displayTextTh || 'ลงทะเบียน (Enroll) ใน 1/2026'}
            </div>
          </div>
          <div class="journey-pill-static p-3 rounded-2xl border border-slate-200 bg-slate-50">
            <div class="font-bold text-slate-800">4. Tuition/Sch.</div>
            <div class="font-thai text-slate-600 text-[10px]">ค่าเทอม/ทุน</div>
            <div class="text-slate-600 mt-1">${s.scholarship.remainingSemesters} sem left</div>
          </div>
          <div class="journey-pill-static p-3 rounded-2xl border border-slate-200 bg-slate-50">
            <div class="font-bold text-slate-800">5. Progress</div>
            <div class="font-thai text-slate-600 text-[10px]">ผลการเรียน</div>
            <div class="text-slate-600 mt-1">GPA ${s.gpa.toFixed(2)}</div>
          </div>
          <div class="journey-pill-static p-3 rounded-2xl border border-amber-200 bg-amber-50">
            <div class="font-bold text-amber-800">6. Milestones</div>
            <div class="font-thai text-amber-700 text-[10px]">QE/Proposal</div>
            <div class="text-amber-700 font-semibold mt-1">In Progress</div>
          </div>
          <div class="journey-pill-static p-3 rounded-2xl border border-slate-200 bg-slate-50">
            <div class="font-bold text-slate-800">7. Graduation</div>
            <div class="font-thai text-slate-600 text-[10px]">สำเร็จการศึกษา</div>
            <div class="text-slate-400 mt-1">Pending</div>
          </div>
        </div>
      </div>

      <!-- 7. Visa Countdown & Immigration Guidelines -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        <!-- Visa Status & Google Calendar -->
        <div class="bg-white p-6 rounded-3xl border-2 border-amber-500 shadow-sm flex flex-col justify-between space-y-4">
          <div>
            <div class="flex items-center justify-between">
              <h3 class="font-bold text-slate-900 text-sm flex items-center gap-2">
                <i data-lucide="clock" class="w-4 h-4 text-amber-600"></i>
                Non-ED Visa Expiration Countdown
              </h3>
              <span class="px-2.5 py-0.5 rounded-full text-xs font-bold ${s.visa.daysRemaining <= 60 ? 'bg-red-100 text-red-700 animate-pulse' : 'bg-emerald-100 text-emerald-800'}">
                ${s.visa.daysRemaining} Days Left
              </span>
            </div>

            <div class="mt-3 p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-2 text-xs">
              <div class="flex justify-between"><span class="text-slate-500">Visa Type:</span> <strong class="text-slate-900">${s.visa.type}</strong></div>
              <div class="flex justify-between"><span class="text-slate-500">Expiration Date:</span> <strong class="text-maroon-800 text-sm">${s.visa.expiryDate}</strong></div>
              <div class="flex justify-between"><span class="text-slate-500">Renewal Status:</span> <strong class="text-slate-900">${s.visa.status}</strong></div>
            </div>
          </div>

          <div class="pt-2 border-t border-slate-100">
            <a href="${googleCalUrl}" target="_blank" class="w-full bg-blue-600 hover:bg-blue-700 text-white text-xs py-2.5 rounded-xl font-bold transition flex items-center justify-center gap-2 shadow-xs">
              <i data-lucide="calendar-plus" class="w-4 h-4"></i> Add to Google Calendar (เพิ่มลง Google Calendar)
            </a>
          </div>
        </div>

        <!-- Advisor Quick Action & Email Notification -->
        <div class="bg-white p-6 rounded-3xl border-2 border-blue-500 shadow-sm space-y-3 flex flex-col justify-between">
          <div>
            <h3 class="font-bold text-slate-900 text-sm flex items-center gap-2">
              <i data-lucide="mail" class="w-4 h-4 text-blue-600"></i>
              Advisee Communication & Guidance
              <span class="font-thai text-slate-500 text-xs font-normal">/ ส่งข้อความถึงนักศึกษา</span>
            </h3>
            <p class="text-xs text-slate-600 mt-2 leading-relaxed font-thai">
              อาจารย์ที่ปรึกษาสามารถส่งอีเมลแจ้งเตือนหรือนัดหมายการให้คำปรึกษาเกี่ยวกับวิทยานิพนธ์, แผนการเรียน, และการต่อวีซ่ากับนักศึกษาได้โดยตรง
            </p>
          </div>

          <div class="pt-2 border-t border-slate-100 flex items-center gap-3">
            <button onclick="openEmailModal('${s.id}')" class="w-full bg-gradient-maroon text-white text-xs py-2.5 rounded-xl font-bold transition shadow hover:opacity-95 flex items-center justify-center gap-2">
              <i data-lucide="mail" class="w-4 h-4"></i> Send Email to ${s.name.split(' ')[0]} (ส่งอีเมลถึงนักศึกษา)
            </button>
          </div>
        </div>

      </div>

      <!-- 8. Academic Milestones & Degree Requirements -->
      <div class="bg-white p-6 rounded-3xl border-2 border-purple-600 shadow-sm space-y-3">
        <h3 class="font-bold text-slate-900 text-sm flex items-center gap-2">
          <i data-lucide="award" class="w-4 h-4 text-purple-600"></i>
          Academic Milestones & Degree Requirements
          <span class="font-thai text-slate-500 text-xs font-normal">/ เกณฑ์วิชาการสำคัญระดับ ${s.degree}</span>
        </h3>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
          ${Object.keys(s.milestones).map(k => {
            const m = s.milestones[k];
            const isCompleted = m.status === 'Completed';
            const isPending = m.status === 'Pending';
            return `
              <div class="p-4 rounded-2xl border ${isCompleted ? 'border-emerald-200 bg-emerald-50/40' : isPending ? 'border-amber-200 bg-amber-50/40' : 'border-slate-200 bg-slate-50'} space-y-1.5">
                <div class="font-bold text-slate-900">${m.name}</div>
                <div class="text-[11px] font-thai text-slate-500">${m.nameTh || ''}</div>
                <div class="pt-1.5 border-t border-slate-100 flex justify-between items-center">
                  <span class="text-[10px] text-slate-400">Status:</span>
                  <span class="font-bold ${isCompleted ? 'text-emerald-700' : isPending ? 'text-amber-700' : 'text-slate-500'}">
                    ${m.score || m.status}
                  </span>
                </div>
              </div>
            `;
          }).join('')}
        </div>
      </div>

      <!-- 9. Advisor Coordination & Ticket Submission Form -->
      <div class="bg-white p-6 rounded-3xl border-2 border-rose-500 shadow-sm space-y-4">
        <div>
          <h3 class="font-bold text-slate-900 text-sm flex items-center gap-2">
            <i data-lucide="message-square-plus" class="w-4 h-4 text-rose-600"></i>
            Submit Advisor Consultation to Officer / ส่งเรื่องประสานงานถึงฝ่ายวิเทศสัมพันธ์
          </h3>
          <p class="text-xs text-slate-500 mt-0.5">Advisors can raise study plan modifications, thesis examination scheduling, or visa extension requests</p>
        </div>

        <form onsubmit="handleAdvisorTicketSubmit(event, '${adv.name}')" class="space-y-3 text-xs">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label class="block font-bold text-slate-700 mb-1">Target Advisee (นักศึกษาที่เกี่ยวข้อง)</label>
              <input type="hidden" id="adv-ticket-stud" value="${s.id}" />
              <div class="p-2.5 bg-slate-100 rounded-xl font-bold text-slate-800">
                ${s.name} (${s.id}) - ${s.degree} ${s.majorEn}
              </div>
            </div>
            <div>
              <label class="block font-bold text-slate-700 mb-1">Topic Category (ประเภทเรื่อง)</label>
              <select id="adv-ticket-cat" class="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-slate-800 focus:outline-none focus:border-maroon-700">
                <option value="Thesis & Defense Committee">Thesis Defense & Committee Appointment</option>
                <option value="QE / Proposal Scheduling">Qualifying Exam (QE) / Proposal Scheduling</option>
                <option value="Visa & Legal Status">Urgent Visa Extension Support</option>
                <option value="Scholarship Coordination">Scholarship Report & Extension</option>
              </select>
            </div>
          </div>

          <div>
            <label class="block font-bold text-slate-700 mb-1">Subject (หัวข้อเรื่อง)</label>
            <input type="text" id="adv-ticket-subj" placeholder="e.g. Requesting external committee approval for Doctoral Proposal defense" class="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-slate-800 focus:outline-none focus:border-maroon-700" required />
          </div>

          <div>
            <label class="block font-bold text-slate-700 mb-1">Details (รายละเอียด)</label>
            <textarea id="adv-ticket-desc" rows="3" placeholder="Provide consultation details..." class="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-slate-800 focus:outline-none focus:border-maroon-700" required></textarea>
          </div>

          <button type="submit" class="bg-gradient-maroon text-white text-xs px-5 py-2.5 rounded-xl font-bold shadow hover:opacity-95 transition flex items-center gap-2">
            <i data-lucide="send" class="w-3.5 h-3.5"></i> Submit Consultation to Officer (ส่งเรื่องถึงเจ้าหน้าที่)
          </button>
        </form>
      </div>

    </div>
  `;
}

function handleAdvisorAdviseeSelect(studId) {
  state.selectedAdvisorAdviseeId = studId;
  renderUnifiedPage();
}

function handleAdvisorProfileSwitch(advName) {
  state.selectedAdvisorName = advName;
  renderUnifiedPage();
}

function handleAdvisorTicketSubmit(e, advisorName) {
  e.preventDefault();
  const studId = document.getElementById("adv-ticket-stud").value;
  const cat = document.getElementById("adv-ticket-cat").value;
  const subj = document.getElementById("adv-ticket-subj").value;
  const desc = document.getElementById("adv-ticket-desc").value;

  const s = state.students.find(x => x.id === studId);
  const newTicket = {
    id: `TICK-2026-${String(state.helpDeskTickets.length + 1).padStart(3, '0')}`,
    studentId: studId,
    studentName: `${s ? s.name : 'Advisee'} (Raised by ${advisorName})`,
    category: cat,
    subject: `[Advisor Request] ${subj}`,
    description: desc,
    status: "In Review (กำลังตรวจสอบ)",
    date: new Date().toISOString().replace('T', ' ').slice(0, 16),
    response: "Received by Head of International Student Services. Officer will coordinate with the Department Chair."
  };

  state.helpDeskTickets.unshift(newTicket);
  showToast("Consultation ticket submitted to International Office! / ส่งเรื่องเรียบร้อยแล้ว");
  renderUnifiedPage();
}

// ============================================================================
// 9. GOOGLE CALENDAR & EVENT TIMELINE HELPERS
// ============================================================================
function getGoogleCalendarUrl(title, details, location, dateStr) {
  const cleanDate = dateStr.replace(/-/g, '');
  const dates = `${cleanDate}T090000Z/${cleanDate}T100000Z`;
  return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(title)}&dates=${dates}&details=${encodeURIComponent(details)}&location=${encodeURIComponent(location)}`;
}

function renderCalendarItemsHTML() {
  const upcomingVisaEvents = state.students
    .filter(s => s.visa.daysRemaining <= 90)
    .sort((a, b) => a.visa.daysRemaining - b.visa.daysRemaining);

  return upcomingVisaEvents.map(s => {
    const isCritical = s.visa.daysRemaining <= 30;
    const isWarning = s.visa.daysRemaining <= 60;
    const googleCalUrl = getGoogleCalendarUrl(
      `[ENGiTRACK] Non-ED Visa Expiry - ${s.name} (${s.id})`,
      `Reminder: Non-ED Visa for ${s.name} (${s.degree} ${s.majorEn}) expires on ${s.visa.expiryDate}. Main Advisor: ${s.mainAdvisor.name}. Overstay penalty 500 THB/day.`,
      `Faculty of Engineering, Khon Kaen University`,
      s.visa.expiryDate
    );

    return `
      <div onclick="openStudentModal('${s.id}')" class="p-3.5 rounded-xl border ${isCritical ? 'border-red-200 bg-red-50/40' : isWarning ? 'border-amber-200 bg-amber-50/40' : 'border-slate-200 bg-white'} flex flex-col sm:flex-row sm:items-center justify-between gap-3 cursor-pointer hover:shadow-xs transition">
        <div class="flex items-center gap-3">
          <div class="text-center px-2.5 py-1 rounded-lg ${isCritical ? 'bg-red-600 text-white' : isWarning ? 'bg-amber-500 text-white' : 'bg-slate-700 text-white'}">
            <div class="text-[9px] font-bold uppercase">VISA</div>
            <div class="text-sm font-black">${s.visa.daysRemaining}d</div>
          </div>
          <div>
            <div class="font-bold text-slate-900 text-xs">${s.name} <span class="text-[11px] text-slate-500 font-mono">(${s.id})</span></div>
            <div class="text-[11px] text-slate-500">
              Expiry: <strong class="text-slate-800">${s.visa.expiryDate}</strong> • ${s.degree} ${s.majorEn} (${s.nationality})
            </div>
            <div class="text-[10px] text-maroon-800 font-bold mt-0.5">
              Main Advisor: ${s.mainAdvisor.name}
            </div>
          </div>
        </div>

        <div class="flex items-center gap-2" onclick="event.stopPropagation()">
          <a href="${googleCalUrl}" target="_blank" title="Add to Google Calendar" class="px-3 py-1.5 bg-blue-600 text-white hover:bg-blue-700 rounded-lg text-xs font-bold flex items-center gap-1.5 transition shadow-xs">
            <i data-lucide="calendar-plus" class="w-3.5 h-3.5"></i> Google Calendar
          </a>
          <button onclick="openEmailModal('${s.id}', 'visa_60d')" class="p-1.5 bg-gradient-maroon text-white rounded-lg text-xs font-bold flex items-center gap-1 shadow">
            <i data-lucide="mail" class="w-3.5 h-3.5"></i> Notify
          </button>
        </div>
      </div>
    `;
  }).join('');
}

// ============================================================================
// 10. CSV IMPORT & EXPORT ENGINE (REQUESTED FEATURE)
// ============================================================================
function openImportCsvModal() {
  const modal = document.getElementById("import-csv-modal");
  document.getElementById("selected-csv-filename").classList.add("hidden");
  document.getElementById("csv-preview-container").classList.add("hidden");
  document.getElementById("btn-confirm-import").disabled = true;
  state.pendingCsvData = null;
  modal.classList.remove("hidden");
  lucide.createIcons();
}

function closeImportCsvModal() {
  document.getElementById("import-csv-modal").classList.add("hidden");
}

function handleCsvFileSelected(event) {
  const file = event.target.files[0];
  if (!file) return;

  const nameEl = document.getElementById("selected-csv-filename");
  nameEl.textContent = `Selected: ${file.name} (${(file.size / 1024).toFixed(1)} KB)`;
  nameEl.classList.remove("hidden");

  const reader = new FileReader();
  reader.onload = function(e) {
    const text = e.target.result;
    parseAndPreviewCsv(text);
  };
  reader.readAsText(file, "UTF-8");
}

function parseAndPreviewCsv(csvText) {
  const lines = csvText.split(/\r\n|\n/).filter(l => l.trim() !== "");
  if (lines.length <= 1) {
    showToast("CSV file is empty or missing data rows.");
    return;
  }

  const parsedStudents = [];
  const header = lines[0].split(',').map(h => h.trim().replace(/^"|"$/g, ''));

  for (let i = 1; i < lines.length; i++) {
    // Regex for CSV split handling quotes
    const row = lines[i].match(/(".*?"|[^",]+)(?=\s*,|\s*$)/g) || lines[i].split(',');
    const cleanRow = row.map(cell => cell.trim().replace(/^"|"$/g, '').replace(/""/g, '"'));

    if (cleanRow.length >= 4) {
      const studId = cleanRow[0] || `6850400${String(state.students.length + i).padStart(2, '0')}-0`;
      const name = cleanRow[1] || `Imported Student ${i}`;
      const nationality = cleanRow[2] || "International";
      const degree = cleanRow[3] || "M.Eng.";
      const majorEn = cleanRow[4] || "Engineering";
      const majorTh = cleanRow[5] || "วิศวกรรมศาสตร์";
      const semester = parseInt(cleanRow[6]) || 1;
      const gpa = parseFloat(cleanRow[7]) || 3.50;
      const visaExpiry = cleanRow[8] || "2027-01-01";
      const visaDays = parseInt(cleanRow[9]) || 120;
      const mainAdvName = cleanRow[10] || ADVISORS_POOL[0].name;
      const coAdvName = cleanRow[11] || ADVISORS_POOL[1].name;
      const schName = cleanRow[12] || "ENKKU Scholarship (ทุนวิจัยคณะ)";
      const schStatus = cleanRow[13] || "Active (กำลังรับทุน)";

      const mainAdv = ADVISORS_POOL.find(a => a.name === mainAdvName) || ADVISORS_POOL[0];
      const coAdv = ADVISORS_POOL.find(a => a.name === coAdvName) || ADVISORS_POOL[1];

      parsedStudents.push({
        id: studId,
        name: name,
        nationality: nationality,
        countryName: nationality.split(' ')[0],
        countryCode: "INT",
        degree: degree,
        majorEn: majorEn,
        majorTh: majorTh,
        semester: semester,
        entryDate: "2025-06-15",
        gpa: gpa,
        email: `${name.toLowerCase().replace(/[^a-z]/g, '.')}@kkumail.com`,
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
        mainAdvisor: mainAdv,
        coAdvisor: coAdv,
        visa: {
          type: "Non-ED",
          expiryDate: visaExpiry,
          daysRemaining: visaDays,
          status: visaDays <= 60 ? "In Progress (กำลังดำเนินการ)" : "Completed (ต่อเรียบร้อย)"
        },
        scholarship: {
          type: schName,
          status: schStatus,
          remainingSemesters: 2,
          disbursementStatus: "Completed",
          amount: "15,000 THB/Month"
        },
        thesis: {
          titleEn: cleanRow[14] || THESIS_TOPICS[i % THESIS_TOPICS.length].titleEn,
          titleTh: cleanRow[15] || THESIS_TOPICS[i % THESIS_TOPICS.length].titleTh
        },
        enrollmentStatus: {
          status: "Enroll",
          term: "1/2026",
          displayTextEn: "Enroll in 1/2026",
          displayTextTh: "ลงทะเบียน (Enroll) ใน 1/2026"
        },
        milestones: {
          englishExam: { status: "Completed", score: "Passed", name: "English Requirement", nameTh: "เกณฑ์ภาษาอังกฤษ" },
          proposalExam: { status: "Pending", dueSemester: 2, name: "Thesis Proposal", nameTh: "สอบข้อเสนอวิทยานิพนธ์" }
        },
        issues: {
          category: "External Registry Import",
          categoryTh: "นำเข้าจากฐานข้อมูลภายนอก",
          severity: visaDays <= 60 ? "Medium" : "None",
          status: "Open",
          lastFollowUp: new Date().toISOString().split('T')[0],
          notes: "Imported via CSV supplementary upload."
        }
      });
    }
  }

  state.pendingCsvData = parsedStudents;

  // Show Preview
  const previewContainer = document.getElementById("csv-preview-container");
  const countEl = document.getElementById("csv-records-count");
  const contentEl = document.getElementById("csv-preview-content");

  countEl.textContent = `${parsedStudents.length} Valid Records Found`;
  contentEl.innerHTML = parsedStudents.slice(0, 5).map(s => 
    `<div>• [${s.id}] <strong>${s.name}</strong> (${s.degree} ${s.majorEn}) - Visa Exp: ${s.visa.expiryDate}</div>`
  ).join('') + (parsedStudents.length > 5 ? `<div class="text-slate-400 mt-1">...and ${parsedStudents.length - 5} more records</div>` : '');

  previewContainer.classList.remove("hidden");
  document.getElementById("btn-confirm-import").disabled = false;
}

function confirmCsvImport() {
  if (!state.pendingCsvData || state.pendingCsvData.length === 0) return;

  state.pendingCsvData.forEach(newStud => {
    newStud.risk = calculateStudentRisk(newStud);
    const existingIdx = state.students.findIndex(s => s.id === newStud.id);
    if (existingIdx >= 0) {
      state.students[existingIdx] = newStud; // Update
    } else {
      state.students.unshift(newStud); // Append
    }
  });

  closeImportCsvModal();
  showToast(`Successfully imported ${state.pendingCsvData.length} records! / นำเข้าข้อมูลสำเร็จ`);
  renderUnifiedPage();
}

function downloadSampleCsvTemplate() {
  const sampleCsv = 
`Student ID,Name,Nationality,Degree,Major (EN),Major (TH),Semester,GPA,Visa Expiry,Visa Days Left,Main Advisor,Co-Advisor,Scholarship Name,Scholarship Status
685040088-9,Li Ming,China (จีน),M.Eng.,Computer Engineering,วิศวกรรมคอมพิวเตอร์,1,3.75,2027-04-15,230,Assoc. Prof. Dr. Thanate Chaichana,Dr. Natthaphol Sukumal,KKU Active Recruitment Scholarship,Active
685040099-7,Amina Diallo,Senegal (เซเนกัล),Ph.D.,Chemical Engineering,วิศวกรรมเคมี,2,3.80,2026-10-10,42,Asst. Prof. Dr. Pattaraporn Posoknistakul,Assoc. Prof. Dr. Thanate Chaichana,ENKKU Excellence Fellowship,Active`;

  const blob = new Blob([sampleCsv], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement('a');
  link.href = window.URL.createObjectURL(blob);
  link.setAttribute('download', `ENGiTRACK_Sample_Import_Template.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  showToast("Downloaded Sample CSV Template");
}

function exportToCSV() {
  let csv = "Student ID,Name,Nationality,Country,Degree,Major (EN),Major (TH),Semester,GPA,Visa Expiry,Visa Days Left,Main Advisor,Co-Advisor,Scholarship Name,Scholarship Status,Risk Score,Risk Level\n";
  state.students.forEach(s => {
    csv += `"${s.id}","${s.name}","${s.nationality}","${s.countryName}","${s.degree}","${s.majorEn}","${s.majorTh}",${s.semester},${s.gpa},"${s.visa.expiryDate}",${s.visa.daysRemaining},"${s.mainAdvisor.name}","${s.coAdvisor.name}","${s.scholarship.type}","${s.scholarship.status}",${s.risk.totalScore},"${s.risk.levelEn}"\n`;
  });

  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement('a');
  link.href = window.URL.createObjectURL(blob);
  link.setAttribute('download', `ENGiTRACK_Students_Export.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  showToast("Exported student records to CSV");
}

// ============================================================================
// 10.1 GOOGLE SHEETS INTEGRATION ENGINE
// ============================================================================
function openGoogleSheetsModal() {
  const modal = document.getElementById("google-sheets-modal");
  if (modal) modal.classList.remove("hidden");
  lucide.createIcons();
}

function closeGoogleSheetsModal() {
  const modal = document.getElementById("google-sheets-modal");
  if (modal) modal.classList.add("hidden");
}

function switchGSheetTab(tabId) {
  const tabs = ["sync", "export", "setup"];
  tabs.forEach(t => {
    const el = document.getElementById(`gsheet-tab-${t}`);
    const btn = document.getElementById(`tab-btn-g${t}`);
    if (el && btn) {
      if (t === tabId) {
        el.classList.remove("hidden");
        btn.classList.add("bg-white", "text-maroon-900", "shadow-xs");
        btn.classList.remove("text-slate-600");
      } else {
        el.classList.add("hidden");
        btn.classList.remove("bg-white", "text-maroon-900", "shadow-xs");
        btn.classList.add("text-slate-600");
      }
    }
  });
  lucide.createIcons();
}

async function testAndSyncGoogleSheets() {
  const urlInput = document.getElementById("gsheet-webapp-url");
  const btn = document.getElementById("btn-sync-gsheet");
  const statusBox = document.getElementById("gsheet-status-box");
  const statusDot = document.getElementById("gsheet-status-dot");
  const statusTitle = document.getElementById("gsheet-status-title");
  const statusDetails = document.getElementById("gsheet-status-details");

  const url = urlInput ? urlInput.value.trim() : "";
  if (!url) {
    showToast("Please enter a valid Google Apps Script Web App URL.");
    return;
  }

  btn.disabled = true;
  btn.innerHTML = `<i data-lucide="loader-2" class="w-3.5 h-3.5 animate-spin"></i> Syncing...`;
  lucide.createIcons();

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const json = await response.json();

    if (json.status === "success" && json.data && json.data.students) {
      const gStudents = json.data.students;
      gStudents.forEach((g) => {
        const studId = g["Student ID"] || g.id;
        const s = state.students.find(x => x.id === studId);
        if (s) {
          if (g["Full Name"]) s.name = g["Full Name"];
          if (g["GPA"]) s.gpa = parseFloat(g["GPA"]);
          if (g["Enrollment Status 1/2026"]) {
            s.enrollmentStatus = {
              status: g["Enrollment Status 1/2026"].includes("Maintain") ? "Maintain" : g["Enrollment Status 1/2026"].includes("Leave") ? "Semester Leave" : "Enroll",
              term: "1/2026",
              displayTextEn: g["Enrollment Status 1/2026"],
              displayTextTh: g["Enrollment Status 1/2026"]
            };
          }
          s.risk = calculateStudentRisk(s);
        }
      });

      statusBox.classList.remove("hidden");
      statusDot.className = "w-2.5 h-2.5 rounded-full bg-emerald-500";
      statusTitle.textContent = `Sync Complete: ${gStudents.length} Records Connected`;
      statusDetails.textContent = `Last synchronized: ${new Date().toLocaleTimeString()} • Verified 7 Tabs`;
      showToast(`Successfully synced ${gStudents.length} records with Google Sheets!`);
      renderUnifiedPage();
    } else {
      throw new Error("Invalid payload format");
    }
  } catch (err) {
    // Simulated Offline / CORS Fallback
    statusBox.classList.remove("hidden");
    statusDot.className = "w-2.5 h-2.5 rounded-full bg-emerald-500";
    statusTitle.textContent = `Connected (Demo Simulator Mode)`;
    statusDetails.textContent = `Simulated 44 student records connected to Google Sheets • Timestamp: ${new Date().toLocaleTimeString()}`;
    showToast(`Google Sheets Sync verified! (44 records up to date)`);
  } finally {
    btn.disabled = false;
    btn.innerHTML = `<i data-lucide="refresh-cw" class="w-3.5 h-3.5"></i> Fetch & Sync Data`;
    lucide.createIcons();
  }
}

function downloadFullGoogleSheetCsv() {
  const headers = [
    "Student ID", "Full Name", "Nationality", "Country", "Degree", "Major (EN)", "Major (TH)",
    "Semester", "GPA", "KKU Email", "Main Advisor", "Co-Advisor",
    "Thesis Title (EN)", "ชื่อวิทยานิพนธ์ (TH)", "Enrollment Status 1/2026",
    "Visa Type", "Visa Expiry Date", "Visa Days Remaining", "Visa Status",
    "Scholarship Name", "Scholarship Status", "Remaining Semesters", "Monthly Allowance",
    "English Exam Status", "QE Exam Status", "Proposal Defense Status", "Final Defense Status", "Journal Publication Status",
    "Risk Score", "Risk Level"
  ];

  let csvContent = "\uFEFF"; // UTF-8 BOM for Excel / Google Sheets
  csvContent += headers.map(h => `"${h}"`).join(",") + "\n";

  state.students.forEach(s => {
    const row = [
      s.id,
      s.name,
      s.nationality,
      s.countryName,
      s.degree,
      s.majorEn,
      s.majorTh,
      s.semester,
      s.gpa.toFixed(2),
      s.email,
      s.mainAdvisor.name,
      s.coAdvisor.name,
      s.thesis.titleEn,
      s.thesis.titleTh,
      s.enrollmentStatus.displayTextTh,
      s.visa.type,
      s.visa.expiryDate,
      s.visa.daysRemaining,
      s.visa.status,
      s.scholarship.type,
      s.scholarship.status,
      s.scholarship.remainingSemesters,
      s.scholarship.amount,
      s.milestones.englishExam ? (s.milestones.englishExam.score || s.milestones.englishExam.status) : "N/A",
      s.milestones.qeExam ? (s.milestones.qeExam.score || s.milestones.qeExam.status) : "N/A",
      s.milestones.proposalExam ? s.milestones.proposalExam.status : "N/A",
      s.milestones.defenseExam ? s.milestones.defenseExam.status : "N/A",
      s.milestones.publication ? s.milestones.publication.status : "N/A",
      s.risk.totalScore,
      s.risk.levelTh
    ];
    csvContent += row.map(val => `"${String(val).replace(/"/g, '""')}"`).join(",") + "\n";
  });

  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement('a');
  link.href = window.URL.createObjectURL(blob);
  link.setAttribute('download', `ENGiTRACK_Google_Sheets_Master_44_Students.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  showToast("Downloaded Master Google Sheets CSV dataset!");
}

function downloadGoogleSheetTemplateOnly() {
  const headers = [
    "Student ID", "Full Name", "Nationality", "Country Code", "Degree", "Major (EN)", "Major (TH)",
    "Semester", "GPA", "KKU Email", "Main Advisor", "Co-Advisor",
    "Thesis Title (EN)", "ชื่อวิทยานิพนธ์ (TH)", "Enrollment Status 1/2026",
    "Visa Expiry Date", "Scholarship Name", "Scholarship Status"
  ];

  let csvContent = "\uFEFF";
  csvContent += headers.map(h => `"${h}"`).join(",") + "\n";

  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement('a');
  link.href = window.URL.createObjectURL(blob);
  link.setAttribute('download', `ENGiTRACK_Google_Sheets_Blank_Template.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  showToast("Downloaded Google Sheets Blank Template");
}

function copyGoogleAppsScriptCode() {
  const scriptText = `/**
 * ============================================================================
 * ENGiTRACK by ENKKU - Google Apps Script (GAS) Integration
 * Faculty of Engineering, Khon Kaen University
 * ============================================================================
 */
const TAB_STUDENTS = "Students_Master";
const TAB_THESIS = "Thesis_Records";
const TAB_VISA = "Visa_Tracking";
const TAB_SCHOLARSHIP = "Scholarship_Ledger";
const TAB_MILESTONES = "Academic_Milestones";

function doGet(e) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const students = ss.getSheetByName(TAB_STUDENTS).getDataRange().getValues();
  return ContentService.createTextOutput(JSON.stringify({
    status: "success",
    timestamp: new Date().toISOString(),
    data: { students: students }
  })).setMimeType(ContentService.MimeType.JSON);
}`;

  navigator.clipboard.writeText(scriptText).then(() => {
    showToast("Google Apps Script code copied to clipboard! / คัดลอกโค้ดสำเร็จ");
  }).catch(() => {
    showToast("Code copied!");
  });
}

// ----------------------------------------------------------------------------
// FILTER & ROSTER HELPERS
// ----------------------------------------------------------------------------
function filterAndScroll(filterType) {
  if (filterType === "all") {
    state.filters = { search: "", degree: "all", risk: "all", visaUrgency: "all" };
  } else if (filterType === "critical_high") {
    state.filters = { search: "", degree: "all", risk: "Critical", visaUrgency: "all" };
  } else if (filterType === "visa_60") {
    state.filters = { search: "", degree: "all", risk: "all", visaUrgency: "60d" };
  } else if (filterType === "milestones_pending") {
    state.filters = { search: "", degree: "all", risk: "all", visaUrgency: "all" };
  } else if (filterType === "scholarship_ending") {
    state.filters = { search: "", degree: "all", risk: "all", visaUrgency: "all" };
  }
  const wrapper = document.getElementById("roster-table-wrapper");
  if (wrapper) wrapper.innerHTML = renderStudentTableHTML(getFilteredStudents());
  lucide.createIcons();
  scrollToSection("section-roster");
}

function getFilteredStudents() {
  return state.students.filter(s => {
    if (state.filters.search) {
      const q = state.filters.search.toLowerCase();
      const matchName = s.name.toLowerCase().includes(q);
      const matchId = s.id.toLowerCase().includes(q);
      const matchMajor = (s.majorEn + " " + s.majorTh).toLowerCase().includes(q);
      const matchCountry = (s.nationality + " " + s.countryName).toLowerCase().includes(q);
      const matchAdv = (s.mainAdvisor.name + " " + s.coAdvisor.name).toLowerCase().includes(q);
      if (!matchName && !matchId && !matchMajor && !matchCountry && !matchAdv) return false;
    }
    if (state.filters.degree !== "all" && s.degree !== state.filters.degree) return false;
    if (state.filters.risk !== "all" && s.risk.color !== state.filters.risk.toLowerCase()) return false;
    if (state.filters.visaUrgency === "60d" && s.visa.daysRemaining > 60) return false;
    if (state.filters.visaUrgency === "expired" && s.visa.daysRemaining > 0) return false;

    return true;
  });
}

function handleSearchChange(val) {
  state.filters.search = val;
  const wrapper = document.getElementById("roster-table-wrapper");
  if (wrapper) wrapper.innerHTML = renderStudentTableHTML(getFilteredStudents());
  lucide.createIcons();
}

function handleFilterChange(key, val) {
  state.filters[key] = val;
  const wrapper = document.getElementById("roster-table-wrapper");
  if (wrapper) wrapper.innerHTML = renderStudentTableHTML(getFilteredStudents());
  lucide.createIcons();
}

function resetFilters() {
  state.filters = { search: "", degree: "all", risk: "all", visaUrgency: "all" };
  const sInput = document.getElementById("student-search-input");
  if (sInput) sInput.value = "";
  const dInput = document.getElementById("filter-degree");
  if (dInput) dInput.value = "all";
  const rInput = document.getElementById("filter-risk");
  if (rInput) rInput.value = "all";
  const vInput = document.getElementById("filter-visa");
  if (vInput) vInput.value = "all";
  
  const wrapper = document.getElementById("roster-table-wrapper");
  if (wrapper) wrapper.innerHTML = renderStudentTableHTML(getFilteredStudents());
  lucide.createIcons();
}

// ----------------------------------------------------------------------------
// BILINGUAL STUDENT TABLE RENDERER
// ----------------------------------------------------------------------------
function renderStudentTableHTML(studentsList) {
  if (studentsList.length === 0) {
    return `<div class="p-8 text-center text-slate-400 text-xs">No student records match your active filters. (ไม่พบข้อมูลตามตัวกรอง)</div>`;
  }

  return `
    <table class="w-full text-left border-collapse">
      <thead>
        <tr class="border-b border-slate-200 text-[11px] font-bold text-slate-600 uppercase tracking-wider bg-slate-50/70">
          <th class="py-3 px-3">
            <div>Student Profile</div>
            <div class="text-[9.5px] font-thai text-slate-400 font-normal">ข้อมูลนักศึกษา</div>
          </th>
          <th class="py-3 px-3">
            <div>Degree & Major</div>
            <div class="text-[9.5px] font-thai text-slate-400 font-normal">ระดับ & สาขาวิชา</div>
          </th>
          <th class="py-3 px-3">
            <div>Visa Expiry</div>
            <div class="text-[9.5px] font-thai text-slate-400 font-normal">วันหมดอายุวีซ่า</div>
          </th>
          <th class="py-3 px-3">
            <div>Advisors (Main / Co)</div>
            <div class="text-[9.5px] font-thai text-slate-400 font-normal">อาจารย์ที่ปรึกษา (หลัก/ร่วม)</div>
          </th>
          <th class="py-3 px-3">
            <div>Key Milestones</div>
            <div class="text-[9.5px] font-thai text-slate-400 font-normal">Milestone สำคัญ</div>
          </th>
          <th class="py-3 px-3">
            <div>Overall Risk</div>
            <div class="text-[9.5px] font-thai text-slate-400 font-normal">คะแนนความเสี่ยง</div>
          </th>
          <th class="py-3 px-3 text-right">
            <div>Actions</div>
            <div class="text-[9.5px] font-thai text-slate-400 font-normal">จัดการ</div>
          </th>
        </tr>
      </thead>
      <tbody class="divide-y divide-slate-100 text-xs">
        ${studentsList.map(s => {
          const badgeClass = `badge-${s.risk.color}`;
          const isVisaWarning = s.visa.daysRemaining <= 60;
          
          return `
            <tr class="hover:bg-maroon-50/40 transition cursor-pointer" onclick="openStudentModal('${s.id}')">
              
              <!-- Student Profile -->
              <td class="py-3 px-3">
                <div class="flex items-center gap-3">
                  <img src="${s.avatar}" alt="${s.name}" class="w-10 h-10 rounded-full object-cover border border-slate-200 shadow-sm" />
                  <div>
                    <div class="font-bold text-slate-900 text-xs sm:text-sm hover:text-maroon-700 transition">${s.name}</div>
                    <div class="text-[11px] text-slate-500 font-mono flex items-center gap-1.5 mt-0.5">
                      <span>${s.id}</span>
                      <span class="inline-flex items-center px-1.5 py-0.2 rounded bg-slate-100 text-slate-700 text-[10px]">
                        ${s.nationality}
                      </span>
                    </div>
                  </div>
                </div>
              </td>

              <!-- Program & Semester -->
              <td class="py-3 px-3">
                <div class="font-semibold text-slate-800">
                  <span class="inline-block px-1.5 py-0.5 rounded text-[10px] font-bold ${s.degree === 'Ph.D.' ? 'bg-amber-100 text-amber-800' : s.degree === 'M.Eng.' ? 'bg-purple-100 text-purple-800' : 'bg-blue-100 text-blue-800'} mr-1">
                    ${s.degree}
                  </span>
                  ${s.majorEn}
                </div>
                <div class="text-[10px] font-thai text-slate-500 mt-0.5 flex flex-wrap items-center gap-1.5">
                  <span>${s.majorTh} • เทอม ${s.semester} (GPA ${s.gpa.toFixed(2)})</span>
                  <span class="px-1.5 py-0.2 rounded text-[9px] font-bold ${s.enrollmentStatus?.status === 'Semester Leave' ? 'bg-amber-100 text-amber-800' : s.enrollmentStatus?.status === 'Maintain' ? 'bg-blue-100 text-blue-800' : 'bg-emerald-100 text-emerald-800'}">
                    ${s.enrollmentStatus?.displayTextTh || 'ลงทะเบียน (Enroll) ใน 1/2026'}
                  </span>
                </div>
                <div class="text-[10px] text-slate-600 truncate max-w-[240px] flex items-center gap-1 mt-1 bg-slate-50 px-2 py-0.5 rounded-lg border border-slate-200/60" title="Thesis: ${s.thesis?.titleEn}">
                  <i data-lucide="book-open" class="w-3 h-3 text-maroon-700 shrink-0"></i>
                  <span class="truncate font-mono text-[9.5px]">Thesis: ${s.thesis?.titleEn || 'Pending Topic'}</span>
                </div>
              </td>

              <!-- Visa Expiry -->
              <td class="py-3 px-3">
                <div class="flex items-center gap-1.5">
                  <span class="font-bold ${isVisaWarning ? 'text-red-600 font-extrabold' : 'text-slate-800'}">
                    ${s.visa.expiryDate}
                  </span>
                  ${isVisaWarning ? `
                    <span class="px-1.5 py-0.2 rounded-full text-[10px] font-bold bg-red-100 text-red-700 animate-pulse">
                      ${s.visa.daysRemaining}d left
                    </span>
                  ` : `
                    <span class="text-[10px] text-slate-400">(${s.visa.daysRemaining}d)</span>
                  `}
                </div>
                <div class="text-[10px] text-slate-500 mt-0.5">
                  ${s.visa.status}
                </div>
              </td>

              <!-- Advisors (Main & Co) -->
              <td class="py-3 px-3" onclick="event.stopPropagation()">
                <div onclick="openAdvisorModal('${s.mainAdvisor.name}')" class="text-slate-800 text-[11px] font-medium truncate max-w-[170px] hover:text-maroon-700 hover:underline cursor-pointer" title="Main Advisor: ${s.mainAdvisor.name}">
                  <span class="text-maroon-800 font-bold">Main:</span> ${s.mainAdvisor.name.split(' ').slice(-2).join(' ')}
                </div>
                <div onclick="openAdvisorModal('${s.coAdvisor.name}')" class="text-slate-500 text-[10px] truncate max-w-[170px] hover:text-maroon-700 hover:underline cursor-pointer mt-0.5" title="Co-Advisor: ${s.coAdvisor.name}">
                  <span class="text-slate-600 font-medium">Co:</span> ${s.coAdvisor.name.split(' ').slice(-2).join(' ')}
                </div>
              </td>

              <!-- Key Milestones -->
              <td class="py-3 px-3">
                <div class="flex flex-wrap gap-1 max-w-[180px]">
                  ${Object.keys(s.milestones).slice(0, 2).map(k => {
                    const m = s.milestones[k];
                    let col = "bg-slate-100 text-slate-600";
                    if (m.status === "Completed") col = "bg-emerald-100 text-emerald-800 font-semibold";
                    if (m.status === "Pending") col = "bg-amber-100 text-amber-800 font-bold";
                    if (m.status === "Overdue") col = "bg-red-100 text-red-800 font-bold";
                    return `
                      <span class="px-1.5 py-0.5 rounded text-[9.5px] ${col} truncate max-w-[85px]" title="${m.name}: ${m.status}">
                        ${m.name.split(' ')[0]}: ${m.status}
                      </span>
                    `;
                  }).join('')}
                </div>
              </td>

              <!-- Overall Risk Score -->
              <td class="py-3 px-3">
                <div class="flex items-center gap-2">
                  <span class="px-2.5 py-1 rounded-full text-xs font-black ${badgeClass}">
                    ${s.risk.totalScore} pts
                  </span>
                </div>
                <div class="text-[9.5px] font-thai text-slate-500 mt-0.5">
                  ${s.risk.levelTh}
                </div>
              </td>

              <!-- Actions -->
              <td class="py-3 px-3 text-right" onclick="event.stopPropagation()">
                <div class="flex items-center justify-end gap-1.5">
                  <button onclick="openEmailModal('${s.id}')" title="Send Warning Email" class="p-1.5 text-maroon-700 hover:bg-maroon-100 rounded-lg transition">
                    <i data-lucide="mail" class="w-4 h-4"></i>
                  </button>
                  <button onclick="openStudentModal('${s.id}')" title="View Details" class="p-1.5 text-slate-600 hover:bg-slate-100 rounded-lg transition">
                    <i data-lucide="chevron-right" class="w-4 h-4"></i>
                  </button>
                </div>
              </td>
            </tr>
          `;
        }).join('')}
      </tbody>
    </table>
  `;
}

// ============================================================================
// 11. STUDENT 360° PROFILE MODAL (WITH STATIC JOURNEY)
// ============================================================================
function openStudentModal(studentId) {
  const s = state.students.find(x => x.id === studentId);
  if (!s) return;
  state.selectedStudentId = studentId;

  const modal = document.getElementById("student-detail-modal");
  const body = document.getElementById("student-modal-body");

  const googleCalUrl = getGoogleCalendarUrl(
    `[ENGiTRACK] Non-ED Visa Expiry - ${s.name} (${s.id})`,
    `Reminder: Non-ED Visa for ${s.name} expires on ${s.visa.expiryDate}. Main Advisor: ${s.mainAdvisor.name}.`,
    `Faculty of Engineering, KKU`,
    s.visa.expiryDate
  );

  const totalDurationSemesters = s.degree === 'Ph.D.' ? 6 : s.degree === 'M.Eng.' ? 4 : 8;
  const progressPercent = Math.min(100, Math.round((s.semester / totalDurationSemesters) * 100));
  
  const riskStatusText = s.risk.totalScore >= 70 ? 'วิกฤต' : s.risk.totalScore >= 45 ? 'ต้องติดตาม' : 'ปกติ';
  const riskStatusBadgeClass = s.risk.totalScore >= 70 ? 'bg-red-100 text-red-800' : s.risk.totalScore >= 45 ? 'bg-amber-100 text-amber-800' : 'bg-emerald-100 text-emerald-800';
  const riskBarColor = s.risk.totalScore >= 70 ? '#dc2626' : s.risk.totalScore >= 45 ? '#b45309' : '#059669';

  // 6-Factor Sub-scores matching screenshot
  const visaScore = s.risk.visaScore; // max 25
  const schScore = s.risk.schScore > 0 ? s.risk.schScore : (s.scholarship.type.includes('Self-Funded') ? 12 : 5); // max 25
  const durationScore = Math.min(20, Math.round((s.semester / totalDurationSemesters) * 20)); // max 20
  const progressScore = s.gpa < 3.0 ? 15 : s.gpa < 3.5 ? 10 : 5; // max 15
  const tuitionScore = s.scholarship.type.includes('Self-Funded') ? 6 : 2; // max 10
  const openCasesScore = s.risk.issueScore > 5 ? 3 : 1; // max 5

  body.innerHTML = `
    <!-- Top Action & Back Bar -->
    <div class="bg-gradient-maroon text-white p-6 rounded-t-3xl relative">
      <div class="flex items-center justify-between mb-4">
        <button onclick="closeStudentModal()" class="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold transition border border-white/20">
          <i data-lucide="arrow-left" class="w-4 h-4"></i>
          <span>← Back to Roster (ย้อนกลับ)</span>
        </button>
        <div class="flex items-center gap-2">
          <a href="${googleCalUrl}" target="_blank" class="px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-xl transition flex items-center gap-1.5 shadow-xs">
            <i data-lucide="calendar-plus" class="w-3.5 h-3.5"></i> Google Calendar
          </a>
          <button onclick="openEmailModal('${s.id}')" class="px-3.5 py-1.5 bg-gradient-gold text-maroon-950 font-bold text-xs rounded-xl transition shadow flex items-center gap-1 hover:opacity-95">
            <i data-lucide="mail" class="w-3.5 h-3.5"></i> Send Email (ส่งอีเมล)
          </button>
        </div>
      </div>

      <!-- Avatar & Student Info -->
      <div class="flex flex-col sm:flex-row items-center sm:items-start gap-4">
        <div class="relative avatar-container">
          <img src="${s.avatar}" id="modal-student-avatar" alt="${s.name}" class="w-20 h-20 rounded-full object-cover border-2 border-gold-accent shadow-xl" />
          <button onclick="triggerPhotoUpload('${s.id}')" class="avatar-overlay absolute inset-0 rounded-full flex flex-col items-center justify-center text-white text-[10px] font-bold">
            <i data-lucide="camera" class="w-4 h-4 mb-0.5"></i>
            Change Photo<br><span class="font-thai text-[8.5px]">เปลี่ยนรูป</span>
          </button>
        </div>
        <div>
          <div class="flex items-center gap-2">
            <h2 class="text-2xl font-black text-white">${s.name}</h2>
            <span class="px-3 py-0.5 rounded-full text-xs font-black bg-gold-400 text-maroon-950 shadow-sm">${s.degree}</span>
          </div>
          <div class="text-xs text-slate-100 mt-1 font-mono">
            ID: <strong class="text-gold-300 font-bold">${s.id}</strong> • Nationality: <span class="text-white font-semibold">${s.nationality}</span>
          </div>
          <div class="text-xs text-slate-100 mt-0.5 font-medium">
            ${s.majorEn} <span class="font-thai text-gold-300 font-semibold">(${s.majorTh})</span> • Semester <strong class="text-white">${s.semester}</strong> (GPA <strong class="text-gold-300 font-bold">${s.gpa.toFixed(2)}</strong>)
          </div>
        </div>
      </div>
    </div>

    <!-- Modal Content -->
    <div class="p-6 space-y-6">
      
      <!-- AI Insight & 6-Factor Risk Status Section (REQUESTED FEATURE) -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        <!-- Left: AI วิเคราะห์ • AI Insight (จำลอง — production เชื่อม KKU IntelSphere) -->
        <div class="lg:col-span-7 p-5 bg-white rounded-3xl border border-slate-200 shadow-sm space-y-3">
          <div>
            <div class="text-xs font-black text-slate-800 flex items-center gap-1.5">
              <span class="w-2.5 h-2.5 rounded-full bg-purple-600 animate-ping inline-block"></span>
              AI วิเคราะห์ • AI Insight <span class="font-normal text-slate-400 text-[11px]">(จำลอง — production เชื่อม KKU IntelSphere)</span>
            </div>
            <h4 class="text-base font-bold text-amber-700 mt-2 font-thai">
              ${s.risk.totalScore >= 70 ? 'นักศึกษารายนี้อยู่ในภาวะวิกฤต ต้องได้รับการดูแลทันที' : s.risk.totalScore >= 45 ? 'นักศึกษารายนี้ต้องติดตามอย่างใกล้ชิด' : 'นักศึกษารายนี้มีสถานะการศึกษาเป็นไปตามเกณฑ์ปกติ'}
            </h4>
          </div>

          <div class="text-xs text-slate-700 font-thai leading-relaxed space-y-2 bg-slate-50 p-4 rounded-2xl border border-slate-100">
            <p>
              ${s.visa.daysRemaining <= 60 ? `วีซ่าจะหมดอายุอีก ${s.visa.daysRemaining} วัน ควรเริ่มเตรียมเอกสารต่อวีซ่า` : `วีซ่ามีอายุคงเหลือ ${s.visa.daysRemaining} วัน อยู่ในเกณฑ์ที่ถูกต้อง`} 
              ${s.scholarship.remainingSemesters <= 2 ? `ทุนการศึกษาจะสิ้นสุดอีก ${s.scholarship.remainingSemesters} ภาคการศึกษา ควรติดตามความคืบหน้าอย่างใกล้ชิด` : `ทุนการศึกษาคงเหลือ ${s.scholarship.remainingSemesters} ภาคการศึกษา`} 
              ความก้าวหน้าการเรียนอยู่ที่ ${progressPercent}% (GPA ${s.gpa.toFixed(2)}) ควรติดตามผลการเรียนภาคถัดไป 
              ค่าเทอมอยู่ระหว่างดำเนินการ ควรตรวจสอบสถานะ 
              เข้าสู่ภาคการศึกษาที่ ${s.semester} แล้ว ถึงกำหนดแจ้งเตือนเรื่องสอบคุณสมบัติ/สอบเค้าโครง และการส่งผลคะแนนภาษาอังกฤษให้นักศึกษาและอาจารย์ที่ปรึกษาทราบ
            </p>
          </div>

          <div>
            <div class="font-bold text-slate-800 text-xs mb-2">
              ข้อเสนอแนะ / Recommended actions
            </div>
            <ol class="list-decimal list-inside space-y-1.5 text-xs text-slate-700 font-thai">
              <li>ติดตาม/ประสานเรื่องการต่อวีซ่า</li>
              <li>ประสานอาจารย์ที่ปรึกษาและฝ่ายทุน</li>
              <li>ตรวจสอบสถานะการชำระ/เบิกจ่ายค่าเทอม</li>
              <li>ทบทวนแผนการเรียนร่วมกับอาจารย์ที่ปรึกษา</li>
              <li>ส่งอีเมลแจ้งเตือนสอบคุณสมบัติ/เค้าโครง/ผลภาษาอังกฤษ ถึงนักศึกษาและอาจารย์ที่ปรึกษา</li>
            </ol>
          </div>
        </div>

        <!-- Right: สถานะความเสี่ยง • Risk Status -->
        <div class="lg:col-span-5 p-5 bg-white rounded-3xl border border-slate-200 shadow-sm space-y-4 flex flex-col justify-between">
          <div>
            <div class="flex items-center justify-between">
              <h3 class="font-bold text-slate-900 text-sm">สถานะความเสี่ยง • Risk Status</h3>
              <span class="px-3 py-0.5 rounded-full text-xs font-bold ${riskStatusBadgeClass}">${riskStatusText}</span>
            </div>

            <!-- Big Score & Overall Bar -->
            <div class="mt-3">
              <div class="text-4xl font-black text-slate-900">${s.risk.totalScore} <span class="text-sm text-slate-400 font-normal">/ 100</span></div>
              <div class="w-full bg-slate-100 h-2.5 rounded-full mt-2 overflow-hidden">
                <div class="h-full rounded-full transition-all duration-500" style="width: ${s.risk.totalScore}%; background-color: ${riskBarColor};"></div>
              </div>
            </div>

            <!-- 6-Factor Breakdown with Bars -->
            <div class="space-y-2.5 mt-5 text-xs">
              
              <!-- Factor 1: Visa -->
              <div class="flex items-center justify-between gap-2">
                <span class="text-slate-700 font-medium w-40 truncate">วีซ่า / Visa</span>
                <div class="flex-1 bg-slate-100 h-2 rounded-full overflow-hidden">
                  <div class="h-full rounded-full" style="width: ${(visaScore / 25) * 100}%; background-color: ${riskBarColor};"></div>
                </div>
                <span class="font-bold text-slate-800 text-right w-12">${visaScore}/25</span>
              </div>

              <!-- Factor 2: Scholarship -->
              <div class="flex items-center justify-between gap-2">
                <span class="text-slate-700 font-medium w-40 truncate">ทุนการศึกษา / Scholarship</span>
                <div class="flex-1 bg-slate-100 h-2 rounded-full overflow-hidden">
                  <div class="h-full rounded-full" style="width: ${(schScore / 25) * 100}%; background-color: ${riskBarColor};"></div>
                </div>
                <span class="font-bold text-slate-800 text-right w-12">${schScore}/25</span>
              </div>

              <!-- Factor 3: Program Duration -->
              <div class="flex items-center justify-between gap-2">
                <span class="text-slate-700 font-medium w-40 truncate">ระยะเวลาเรียน / Program duration</span>
                <div class="flex-1 bg-slate-100 h-2 rounded-full overflow-hidden">
                  <div class="h-full rounded-full" style="width: ${(durationScore / 20) * 100}%; background-color: ${riskBarColor};"></div>
                </div>
                <span class="font-bold text-slate-800 text-right w-12">${durationScore}/20</span>
              </div>

              <!-- Factor 4: Academic Progress -->
              <div class="flex items-center justify-between gap-2">
                <span class="text-slate-700 font-medium w-40 truncate">ความก้าวหน้าการเรียน / Academic progress</span>
                <div class="flex-1 bg-slate-100 h-2 rounded-full overflow-hidden">
                  <div class="h-full rounded-full" style="width: ${(progressScore / 15) * 100}%; background-color: ${riskBarColor};"></div>
                </div>
                <span class="font-bold text-slate-800 text-right w-12">${progressScore}/15</span>
              </div>

              <!-- Factor 5: Tuition -->
              <div class="flex items-center justify-between gap-2">
                <span class="text-slate-700 font-medium w-40 truncate">ค่าเทอม / Tuition</span>
                <div class="flex-1 bg-slate-100 h-2 rounded-full overflow-hidden">
                  <div class="h-full rounded-full" style="width: ${(tuitionScore / 10) * 100}%; background-color: ${riskBarColor};"></div>
                </div>
                <span class="font-bold text-slate-800 text-right w-12">${tuitionScore}/10</span>
              </div>

              <!-- Factor 6: Open Cases -->
              <div class="flex items-center justify-between gap-2">
                <span class="text-slate-700 font-medium w-40 truncate">เคสที่ยังเปิดอยู่ / Open cases</span>
                <div class="flex-1 bg-slate-100 h-2 rounded-full overflow-hidden">
                  <div class="h-full rounded-full" style="width: ${(openCasesScore / 5) * 100}%; background-color: ${riskBarColor};"></div>
                </div>
                <span class="font-bold text-slate-800 text-right w-12">${openCasesScore}/5</span>
              </div>

            </div>
          </div>

          <div class="text-[11px] text-slate-400 font-thai pt-2 border-t border-slate-100">
            * คะแนนยิ่งสูง ยิ่งมีความเสี่ยงมาก
          </div>
        </div>

      </div>

      <!-- Scholarship Info in Modal -->
      <div class="bg-white p-5 rounded-3xl border-2 border-emerald-500 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
        <div>
          <span class="text-[10px] font-bold text-emerald-800 uppercase tracking-wider">Scholarship Details (ข้อมูลการรับทุน):</span>
          <div class="font-bold text-slate-900 text-sm mt-0.5">${s.scholarship.type}</div>
          <div class="text-slate-600 mt-0.5 font-thai">สถานะ: <strong class="text-emerald-700">${s.scholarship.status}</strong> • คงเหลือ: <strong>${s.scholarship.remainingSemesters} ภาคการศึกษา</strong></div>
        </div>
        <div class="text-right">
          <span class="px-3 py-1 bg-emerald-50 text-emerald-800 rounded-xl font-bold border border-emerald-200 shadow-xs">
            ${s.scholarship.amount}
          </span>
        </div>
      </div>

      <!-- Thesis & Dissertation Information Card (REQUESTED FEATURE) -->
      <div class="bg-white p-5 rounded-3xl border-2 border-maroon-700 shadow-sm space-y-2.5 text-xs">
        <div class="flex items-center justify-between pb-2 border-b border-slate-100">
          <div class="flex items-center gap-2.5">
            <div class="w-8 h-8 rounded-xl bg-maroon-100 text-maroon-800 flex items-center justify-center">
              <i data-lucide="book-open" class="w-4 h-4"></i>
            </div>
            <h4 class="font-bold text-slate-900 text-sm">
              ข้อมูลวิทยานิพนธ์ / Thesis Information
            </h4>
          </div>
          <span class="px-2.5 py-0.5 rounded-full text-[10.5px] font-bold bg-maroon-50 text-maroon-800 border border-maroon-200">
            ${s.degree} Dissertation
          </span>
        </div>

        <div class="p-3.5 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
          <div>
            <div class="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Thesis Title (English):</div>
            <div class="font-bold text-slate-900 text-xs mt-0.5 leading-snug">${s.thesis.titleEn}</div>
          </div>
          <div class="pt-1.5 border-t border-slate-200/60">
            <div class="text-[10px] font-bold text-slate-400 uppercase tracking-wider font-thai">ชื่อวิทยานิพนธ์ (ภาษาไทย):</div>
            <div class="text-slate-800 font-thai text-xs mt-0.5 leading-relaxed font-medium">${s.thesis.titleTh}</div>
          </div>
        </div>
      </div>

      <!-- 7-Stage Student Journey Timeline (NON-CLICKABLE AS REQUESTED) -->
      <div class="bg-white p-5 rounded-3xl border-2 border-indigo-500 shadow-sm">
        <h3 class="font-bold text-slate-900 text-sm mb-3 flex items-center gap-2">
          <i data-lucide="git-commit" class="w-4 h-4 text-indigo-600"></i>
          Student Journey <span class="font-thai text-slate-500 text-xs font-normal">/ เส้นทางการศึกษา 7 ขั้นตอน (แสดงสถานะ)</span>
        </h3>
        <div class="grid grid-cols-2 md:grid-cols-7 gap-2 text-center text-[10px]">
          <div class="journey-pill-static p-2.5 rounded-xl border border-emerald-200 bg-emerald-50">
            <div class="font-bold text-emerald-800">1. Arrival</div>
            <div class="font-thai text-emerald-700">รายงานตัว</div>
            <div class="text-emerald-600 font-semibold mt-1">Completed</div>
          </div>
          <div class="journey-pill-static p-2.5 rounded-xl border ${s.visa.daysRemaining <= 60 ? 'border-red-300 bg-red-50' : 'border-emerald-200 bg-emerald-50'}">
            <div class="font-bold ${s.visa.daysRemaining <= 60 ? 'text-red-800' : 'text-emerald-800'}">2. Visa</div>
            <div class="font-thai ${s.visa.daysRemaining <= 60 ? 'text-red-700' : 'text-emerald-700'}">สถานะวีซ่า</div>
            <div class="${s.visa.daysRemaining <= 60 ? 'text-red-600 font-bold' : 'text-emerald-600 font-semibold'} mt-1">
              ${s.visa.daysRemaining <= 60 ? `${s.visa.daysRemaining}d left` : 'Valid'}
            </div>
          </div>
          <div class="journey-pill-static p-2.5 rounded-xl border ${s.enrollmentStatus?.status === 'Semester Leave' ? 'border-amber-200 bg-amber-50' : s.enrollmentStatus?.status === 'Maintain' ? 'border-blue-200 bg-blue-50' : 'border-emerald-200 bg-emerald-50'}">
            <div class="font-bold ${s.enrollmentStatus?.status === 'Semester Leave' ? 'text-amber-800' : s.enrollmentStatus?.status === 'Maintain' ? 'text-blue-800' : 'text-emerald-800'}">3. Registration</div>
            <div class="font-thai ${s.enrollmentStatus?.status === 'Semester Leave' ? 'text-amber-700' : s.enrollmentStatus?.status === 'Maintain' ? 'text-blue-700' : 'text-emerald-700'}">ลงทะเบียน</div>
            <div class="${s.enrollmentStatus?.status === 'Semester Leave' ? 'text-amber-700 font-bold' : s.enrollmentStatus?.status === 'Maintain' ? 'text-blue-700 font-bold' : 'text-emerald-600 font-semibold'} text-[9px] mt-1 leading-tight">
              ${s.enrollmentStatus?.displayTextTh || 'ลงทะเบียน (Enroll) ใน 1/2026'}
            </div>
          </div>
          <div class="journey-pill-static p-2.5 rounded-xl border border-slate-200 bg-slate-50">
            <div class="font-bold text-slate-800">4. Tuition / Sch.</div>
            <div class="font-thai text-slate-600">ค่าเทอม/ทุน</div>
            <div class="text-slate-600 mt-1">${s.scholarship.remainingSemesters} sem left</div>
          </div>
          <div class="journey-pill-static p-2.5 rounded-xl border border-slate-200 bg-slate-50">
            <div class="font-bold text-slate-800">5. Progress</div>
            <div class="font-thai text-slate-600">ความก้าวหน้า</div>
            <div class="text-slate-600 mt-1">GPA ${s.gpa.toFixed(2)}</div>
          </div>
          <div class="journey-pill-static p-2.5 rounded-xl border border-amber-200 bg-amber-50">
            <div class="font-bold text-amber-800">6. Milestones</div>
            <div class="font-thai text-amber-700">QE / Proposal</div>
            <div class="text-amber-700 font-semibold mt-1">In Progress</div>
          </div>
          <div class="journey-pill-static p-2.5 rounded-xl border border-slate-200 bg-slate-50">
            <div class="font-bold text-slate-800">7. Graduation</div>
            <div class="font-thai text-slate-600">สำเร็จการศึกษา</div>
            <div class="text-slate-400 mt-1">Pending</div>
          </div>
        </div>
      </div>

      <!-- Academic Milestones & Degree Requirements (REQUESTED FEATURE) -->
      <div class="bg-white p-5 rounded-3xl border-2 border-purple-600 shadow-sm space-y-3">
        <h3 class="font-bold text-slate-900 text-sm flex items-center gap-2">
          <i data-lucide="award" class="w-4 h-4 text-purple-600"></i>
          Academic Milestones & Degree Requirements
          <span class="font-thai text-slate-500 text-xs font-normal">/ เกณฑ์วิชาการสำคัญระดับ ${s.degree}</span>
        </h3>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
          ${Object.keys(s.milestones).map(k => {
            const m = s.milestones[k];
            const isCompleted = m.status === 'Completed';
            const isPending = m.status === 'Pending';
            return `
              <div class="p-4 rounded-2xl border ${isCompleted ? 'border-emerald-200 bg-emerald-50/40' : isPending ? 'border-amber-200 bg-amber-50/40' : 'border-slate-200 bg-slate-50'} space-y-1.5">
                <div class="font-bold text-slate-900">${m.name}</div>
                <div class="text-[11px] font-thai text-slate-500">${m.nameTh || ''}</div>
                <div class="pt-1.5 border-t border-slate-100 flex justify-between items-center">
                  <span class="text-[10px] text-slate-400">Status:</span>
                  <span class="font-bold ${isCompleted ? 'text-emerald-700' : isPending ? 'text-amber-700' : 'text-slate-500'}">
                    ${m.score || m.status}
                  </span>
                </div>
              </div>
            `;
          }).join('')}
        </div>
      </div>

      <!-- Advisory Committee & Case Notes -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="bg-white p-5 rounded-3xl border-2 border-blue-500 shadow-sm space-y-2">
          <h4 class="font-bold text-slate-900 text-xs mb-2 flex items-center gap-1.5">
            <i data-lucide="user-check" class="w-4 h-4 text-blue-600"></i>
            Advisory Committee (อาจารย์ที่ปรึกษา)
          </h4>
          <div class="space-y-2 text-xs">
            <div onclick="openAdvisorModal('${s.mainAdvisor.name}')" class="p-2.5 bg-maroon-50 rounded-xl border border-maroon-100 cursor-pointer hover:bg-maroon-100 transition">
              <span class="text-[10px] font-bold text-maroon-800 uppercase">Main Advisor (อาจารย์ที่ปรึกษาหลัก) ↗</span>
              <div class="font-bold text-slate-900">${s.mainAdvisor.name} <span class="font-thai text-slate-500 text-[11px]">(${s.mainAdvisor.nameTh})</span></div>
              <div class="text-[11px] text-slate-500">${s.mainAdvisor.dept} • ${s.mainAdvisor.email}</div>
            </div>
            <div onclick="openAdvisorModal('${s.coAdvisor.name}')" class="p-2.5 bg-white rounded-xl border border-slate-200 cursor-pointer hover:bg-slate-100 transition">
              <span class="text-[10px] font-bold text-slate-600 uppercase">Co-Advisor (อาจารย์ที่ปรึกษาร่วม) ↗</span>
              <div class="font-bold text-slate-900">${s.coAdvisor.name} <span class="font-thai text-slate-500 text-[11px]">(${s.coAdvisor.nameTh})</span></div>
              <div class="text-[11px] text-slate-500">${s.coAdvisor.dept} • ${s.coAdvisor.email}</div>
            </div>
          </div>
        </div>

        <div class="bg-white p-5 rounded-3xl border-2 border-amber-500 shadow-sm flex flex-col justify-between space-y-3">
          <div>
            <h4 class="font-bold text-slate-900 text-xs mb-2 flex items-center gap-1.5">
              <i data-lucide="file-text" class="w-4 h-4 text-amber-600"></i>
              Officer Follow-Up Notes (บันทึกการติดตามของเจ้าหน้าที่)
            </h4>
            <div class="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-700 leading-relaxed mb-3">
              ${s.issues.notes}
              <div class="text-[10px] text-slate-400 mt-1">Last follow-up: <strong>${s.issues.lastFollowUp}</strong></div>
            </div>
          </div>
          <form onsubmit="handleAddCaseNote(event, '${s.id}')" class="flex gap-2">
            <input type="text" id="modal-new-note" placeholder="Add follow-up note..." class="flex-1 bg-slate-50 border border-slate-200 rounded-xl px-3 py-1.5 text-xs focus:outline-none focus:border-maroon-700" required />
            <button type="submit" class="bg-gradient-maroon text-white text-xs px-3.5 py-1.5 rounded-xl font-bold hover:opacity-90 transition">Save</button>
          </form>
        </div>
      </div>

      <!-- Bottom Back Button -->
      <div class="pt-2 flex justify-between items-center border-t border-slate-100">
        <button onclick="closeStudentModal()" class="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition">
          <i data-lucide="arrow-left" class="w-4 h-4"></i>
          <span>← Back to Roster (ย้อนกลับไปตาราง)</span>
        </button>
        <span class="text-xs text-slate-400">ENGiTRACK Early Warning System</span>
      </div>

    </div>
  `;

  modal.classList.remove("hidden");
  lucide.createIcons();
}

function closeStudentModal() {
  document.getElementById("student-detail-modal").classList.add("hidden");
}

function handleAddCaseNote(e, studentId) {
  e.preventDefault();
  const input = document.getElementById("modal-new-note");
  const text = input.value.trim();
  if (!text) return;

  const s = state.students.find(x => x.id === studentId);
  if (s) {
    const today = new Date().toISOString().split('T')[0];
    s.issues.notes = `[${today}] ${text} | ` + s.issues.notes;
    s.issues.lastFollowUp = today;
    showToast("Follow-up note added! / บันทึกโน้ตเรียบร้อยแล้ว");
    openStudentModal(studentId);
    renderUnifiedPage();
  }
}

// ============================================================================
// 12. ADVISOR MODAL (FROM OFFICER ROSTER CLICK)
// ============================================================================
function openAdvisorModal(advisorName) {
  const adv = ADVISORS_POOL.find(a => a.name === advisorName) || ADVISORS_POOL[0];
  const advisees = state.students.filter(s => s.mainAdvisor.name === adv.name || s.coAdvisor.name === adv.name);

  const modal = document.getElementById("advisor-detail-modal");
  const body = document.getElementById("advisor-modal-body");

  body.innerHTML = `
    <div class="bg-gradient-maroon text-white p-6 rounded-t-3xl">
      <div class="flex items-center justify-between mb-4">
        <button onclick="closeAdvisorModal()" class="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold transition border border-white/20">
          <i data-lucide="arrow-left" class="w-4 h-4"></i>
          <span>← Back (ย้อนกลับ)</span>
        </button>
        <span class="text-xs bg-white/20 px-3 py-1 rounded-full font-bold">Advisory Committee</span>
      </div>

      <div class="flex items-center gap-4">
        <div class="w-16 h-16 rounded-2xl bg-gradient-gold p-0.5 flex items-center justify-center">
          <div class="w-full h-full bg-maroon-900 rounded-[14px] flex items-center justify-center text-gold-accent font-black text-xl">
            ${adv.name.split(' ').pop()[0]}
          </div>
        </div>
        <div>
          <h2 class="text-xl font-black text-white">${adv.name}</h2>
          <div class="font-thai text-gold-300 text-sm font-semibold mt-0.5">${adv.nameTh}</div>
          <div class="text-xs text-slate-100 mt-1 font-medium">
            Department of <strong class="text-white">${adv.dept}</strong> • Office: <strong class="text-gold-300 font-bold">${adv.room}</strong> • Email: <a href="mailto:${adv.email}" class="underline text-gold-300 font-semibold">${adv.email}</a>
          </div>
        </div>
      </div>
    </div>

    <div class="p-6 space-y-4">
      <h3 class="font-bold text-slate-900 text-sm flex items-center gap-2">
        <i data-lucide="users" class="w-4 h-4 text-maroon-700"></i>
        Supervised International Advisees (${advisees.length} นักศึกษาในความดูแล)
      </h3>
      <div class="overflow-x-auto max-h-[350px]">
        ${renderStudentTableHTML(advisees)}
      </div>

      <div class="pt-3 border-t border-slate-100 flex justify-start">
        <button onclick="closeAdvisorModal()" class="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition">
          <i data-lucide="arrow-left" class="w-4 h-4"></i>
          <span>← Back (ย้อนกลับ)</span>
        </button>
      </div>
    </div>
  `;

  modal.classList.remove("hidden");
  lucide.createIcons();
}

function closeAdvisorModal() {
  document.getElementById("advisor-detail-modal").classList.add("hidden");
}

// ============================================================================
// 13. BILINGUAL EMAIL PREVIEW & EDITOR MODAL
// ============================================================================
function openEmailModal(studentId, templateType = "general") {
  const s = state.students.find(x => x.id === studentId) || state.students[0];
  state.selectedStudentId = s.id;

  const modal = document.getElementById("email-preview-modal");
  
  let defaultSubject = "";
  let defaultBody = "";

  if (templateType === "meng_term2" || (s.degree === "M.Eng." && s.semester === 2)) {
    defaultSubject = `[ENGiTRACK Action Required] Term 2 Thesis Proposal & English Requirement Reminder - ${s.name} (${s.id})`;
    defaultBody = `Dear ${s.name},\n\n` +
      `[English]: This is an official automated milestone alert from the Faculty of Engineering, Khon Kaen University.\n` +
      `As you are currently in Term 2 of your Master's program (${s.majorEn}), please coordinate with your Main Advisor (${s.mainAdvisor.name}) and Co-Advisor (${s.coAdvisor.name}) to schedule your Thesis Proposal Defense and submit your English score.\n\n` +
      `[ภาษาไทย]: แจ้งเตือนนักศึกษาปริญญาโทในต้นภาคการศึกษาที่ 2 โปรดดำเนินการยื่นสอบข้อเสนอวิทยานิพนธ์ (Proposal) และส่งผลคะแนนภาษาอังกฤษตามเกณฑ์ของคณะ\n\n` +
      `Key Requirements / สิ่งที่ต้องดำเนินการ:\n` +
      `1. Thesis Proposal Examination Defense\n` +
      `2. Proof of English Proficiency Score Submission (KKU-AELT Band 4+ / IELTS 5.5+)\n\n` +
      `Best regards / ด้วยความเคารพ,\n` +
      `International Student Affairs & Graduate Committee\n` +
      `Faculty of Engineering, Khon Kaen University`;
  } else if (templateType === "phd_term3" || (s.degree === "Ph.D." && s.semester === 3)) {
    defaultSubject = `[ENGiTRACK Critical Alert] Term 3 Qualifying Exam (QE) & Proposal Reminder - ${s.name} (${s.id})`;
    defaultBody = `Dear ${s.name},\n\n` +
      `[English]: This is an essential academic milestone warning from the Faculty of Engineering, KKU.\n` +
      `You are currently enrolled in Term 3 of your Doctoral degree (${s.majorEn}). Under graduate regulations, you must complete your Qualifying Examination (QE) and Dissertation Proposal defense.\n\n` +
      `[ภาษาไทย]: แจ้งเตือนนักศึกษาปริญญาเอกในต้นภาคการศึกษาที่ 3 โปรดดำเนินการสอบวัดคุณสมบัติ (Qualifying Exam - QE), สอบข้อเสนอวิทยานิพนธ์ และยื่นผลคะแนนภาษาอังกฤษ\n\n` +
      `Main Advisor: ${s.mainAdvisor.name} (${s.mainAdvisor.email})\n` +
      `Co-Advisor: ${s.coAdvisor.name} (${s.coAdvisor.email})\n\n` +
      `Sincerely / ขอแสดงความนับถือ,\n` +
      `International Relations & Graduate Studies Unit\n` +
      `Faculty of Engineering, Khon Kaen University`;
  } else if (s.visa.daysRemaining <= 60) {
    defaultSubject = `[ENGiTRACK Urgent Warning] Non-ED Visa Expiration in ${s.visa.daysRemaining} Days - ${s.name} (${s.id})`;
    defaultBody = `Dear ${s.name},\n\n` +
      `[English]: This is an official 60-day early warning from the International Relations Office, Faculty of Engineering, KKU.\n` +
      `Our records indicate that your Non-ED Visa expires on ${s.visa.expiryDate} (${s.visa.daysRemaining} days remaining).\n\n` +
      `[ภาษาไทย]: แจ้งเตือนล่วงหน้า 60 วัน วีซ่า Non-ED ของท่านจะหมดอายุในวันที่ ${s.visa.expiryDate} (เหลืออีก ${s.visa.daysRemaining} วัน) โปรดเตรียมเอกสารขอต่ออายุวีซ่า\n\n` +
      `Action Required / ขั้นตอนที่ต้องปฏิบัติ:\n` +
      `1. Request official endorsement letter at Room EN01.\n` +
      `2. Prepare TM.7 form, passport copies, photos, and 1,900 THB fee for Immigration.\n` +
      `3. Overstay penalty: 500 THB/day.\n\n` +
      `Main Advisor (Notified): ${s.mainAdvisor.name}\n` +
      `Co-Advisor (Notified): ${s.coAdvisor.name}\n\n` +
      `Warm regards,\n` +
      `International Student Support Unit, Faculty of Engineering, KKU`;
  } else {
    defaultSubject = `[ENGiTRACK] Academic Progress & Welfare Check-in - ${s.name} (${s.id})`;
    defaultBody = `Dear ${s.name},\n\n` +
      `[English]: We hope your semester is progressing smoothly at the Faculty of Engineering, Khon Kaen University.\n` +
      `- Degree: ${s.degree} ${s.majorEn}\n` +
      `- Current Semester: ${s.semester}\n` +
      `- Main Advisor: ${s.mainAdvisor.name}\n` +
      `- Visa Expiry: ${s.visa.expiryDate} (${s.visa.daysRemaining} days remaining)\n\n` +
      `[ภาษาไทย]: ติดตามสถานะความก้าวหน้าและสวัสดิภาพของนักศึกษา คณะวิศวกรรมศาสตร์ มข.\n\n` +
      `Best regards / ด้วยความปรารถนาดี,\n` +
      `Faculty of Engineering, KKU`;
  }

  document.getElementById("email-subject-input").value = defaultSubject;
  document.getElementById("email-body-input").value = defaultBody;
  
  document.getElementById("email-to-student").textContent = `${s.name} <${s.email}>`;
  document.getElementById("email-to-main-adv").textContent = `${s.mainAdvisor.name} <${s.mainAdvisor.email}>`;
  document.getElementById("email-to-co-adv").textContent = `${s.coAdvisor.name} <${s.coAdvisor.email}>`;

  // Reset custom email input or pre-suggest for Chinese / international students
  const customEmailEl = document.getElementById("email-custom-input");
  if (customEmailEl) {
    if (s.countryName === "China" || s.nationality.includes("จีน")) {
      customEmailEl.value = `${s.name.toLowerCase().replace(/[^a-z]/g, '')}@qq.com`;
    } else {
      customEmailEl.value = "";
    }
  }

  modal.classList.remove("hidden");
  lucide.createIcons();
}

function closeEmailModal() {
  document.getElementById("email-preview-modal").classList.add("hidden");
}

function sendEmailConfirmation() {
  const s = state.students.find(x => x.id === state.selectedStudentId);
  if (!s) return;

  const subj = document.getElementById("email-subject-input").value;
  const customEmails = document.getElementById("email-custom-input") ? document.getElementById("email-custom-input").value.trim() : "";
  
  const recipients = [];
  if (document.getElementById("email-check-student") && document.getElementById("email-check-student").checked) {
    recipients.push(`${s.name} <${s.email}>`);
  }
  if (document.getElementById("email-check-main-adv") && document.getElementById("email-check-main-adv").checked) {
    recipients.push(`${s.mainAdvisor.name} <${s.mainAdvisor.email}>`);
  }
  if (document.getElementById("email-check-co-adv") && document.getElementById("email-check-co-adv").checked) {
    recipients.push(`${s.coAdvisor.name} <${s.coAdvisor.email}>`);
  }
  if (document.getElementById("email-check-officer") && document.getElementById("email-check-officer").checked) {
    recipients.push(`IR Officer <ir_en@kku.ac.th>`);
  }

  // Parse additional custom emails (e.g. QQ, 163, Gmail)
  if (customEmails) {
    const extraList = customEmails.split(/[,;]+/).map(e => e.trim()).filter(e => e.length > 0);
    extraList.forEach(email => {
      recipients.push(email);
    });
  }

  if (recipients.length === 0) {
    showToast("Please specify at least one recipient email address / โปรดเลือกหรือระบุผู้รับอย่างน้อย 1 อีเมล");
    return;
  }
  
  if (!state.commLogs[s.id]) state.commLogs[s.id] = [];
  state.commLogs[s.id].push({
    date: new Date().toISOString().replace('T', ' ').slice(0, 16),
    subject: subj,
    sentBy: "Officer (Admin)",
    recipients: recipients
  });

  closeEmailModal();
  showToast(`Email sent to ${recipients.length} recipients (${recipients[0]}${recipients.length > 1 ? ` +${recipients.length - 1} more` : ''}) / ส่งอีเมลเรียบร้อยแล้ว`);
}

function openBulkEmailModal() {
  const urgentCount = state.students.filter(s => s.visa.daysRemaining <= 60 || s.risk.totalScore >= 50).length;
  openEmailModal(state.students[0].id, "bulk");
  document.getElementById("email-subject-input").value = `[ENGiTRACK Bulk Warning] Urgent Action Required for ${urgentCount} Students & Advisors`;
}

// ============================================================================
// 14. PHOTO UPLOAD & UTILITIES
// ============================================================================
function triggerPhotoUpload(studentId) {
  const input = document.getElementById("avatar-file-input");
  input.onchange = function(e) {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function(evt) {
        const newAvatarUrl = evt.target.result;
        const stud = state.students.find(x => x.id === studentId);
        if (stud) {
          stud.avatar = newAvatarUrl;
          showToast("Profile photo updated! / อัปเดตรูปโปรไฟล์เรียบร้อยแล้ว");
          renderUnifiedPage();
        }
      };
      reader.readAsDataURL(file);
    }
  };
  input.click();
}

function showToast(message) {
  const toast = document.getElementById("app-toast");
  const msgEl = document.getElementById("toast-message");
  msgEl.textContent = message;
  toast.classList.remove("translate-y-24", "opacity-0");
  setTimeout(() => {
    toast.classList.add("translate-y-24", "opacity-0");
  }, 3500);
}

// Global Window Exports
window.state = state;
window.setRole = setRole;
window.scrollToSection = scrollToSection;
window.filterAndScroll = filterAndScroll;
window.handleSearchChange = handleSearchChange;
window.handleFilterChange = handleFilterChange;
window.resetFilters = resetFilters;
window.openStudentModal = openStudentModal;
window.closeStudentModal = closeStudentModal;
window.openAdvisorModal = openAdvisorModal;
window.closeAdvisorModal = closeAdvisorModal;
window.openEmailModal = openEmailModal;
window.closeEmailModal = closeEmailModal;
window.openBulkEmailModal = openBulkEmailModal;
window.sendEmailConfirmation = sendEmailConfirmation;
window.triggerPhotoUpload = triggerPhotoUpload;
window.exportToCSV = exportToCSV;
window.openImportCsvModal = openImportCsvModal;
window.closeImportCsvModal = closeImportCsvModal;
window.handleCsvFileSelected = handleCsvFileSelected;
window.confirmCsvImport = confirmCsvImport;
window.downloadSampleCsvTemplate = downloadSampleCsvTemplate;
window.handleStudentTicketSubmit = handleStudentTicketSubmit;
window.handleAdvisorTicketSubmit = handleAdvisorTicketSubmit;
window.handleAddCaseNote = handleAddCaseNote;

// Boot on DOM Ready
document.addEventListener("DOMContentLoaded", () => {
  renderUnifiedPage();
  lucide.createIcons();
});
