/**
 * ============================================================================
 * ENGiTRACK by ENKKU - Google Apps Script (GAS) Master Integration (44 Students)
 * Faculty of Engineering, Khon Kaen University
 * ============================================================================
 * 
 * Instructions:
 * 1. Open your Google Sheet.
 * 2. Extensions (ส่วนขยาย) > Apps Script.
 * 3. Replace all code in Code.gs with this file.
 * 4. Run "initializeEngitrackSheets()" -> All 44 students across 7 tabs will be populated automatically!
 * 5. Deploy > New deployment > Web app > Anyone > Copy Web App URL.
 */

const TAB_STUDENTS = "Students_Master";
const TAB_THESIS = "Thesis_Records";
const TAB_VISA = "Visa_Tracking";
const TAB_SCHOLARSHIP = "Scholarship_Ledger";
const TAB_MILESTONES = "Academic_Milestones";
const TAB_HELPDESK = "HelpDesk_Tickets";
const TAB_NOTES = "Officer_Case_Notes";

const MASTER_STUDENTS_DATA = [
  [
    "675040001-2",
    "Nguyen Van Minh",
    "Vietnam (เวียดนาม)",
    "VN",
    "Ph.D.",
    "Computer Engineering",
    "วิศวกรรมคอมพิวเตอร์",
    3,
    "2025-06-15",
    3.65,
    "nguyen.van.minh@kkumail.com",
    "Assoc. Prof. Dr. Thanate Chaichana",
    "Dr. Natthaphol Sukumal",
    "รักษาสภาพ (Maintain) ใน 1/2026",
    72,
    "Critical (วิกฤต)"
  ],
  [
    "685040012-8",
    "Aye Myat Mon",
    "Myanmar (เมียนมา)",
    "MM",
    "M.Eng.",
    "Digital and AI Innovation Engineering",
    "วิศวกรรมนวัตกรรมดิจิทัลและปัญญาประดิษฐ์",
    2,
    "2025-06-15",
    3.42,
    "aye.myat.mon@kkumail.com",
    "Dr. Natthaphol Sukumal",
    "Assoc. Prof. Dr. Thanate Chaichana",
    "ลงทะเบียน (Enroll) ใน 1/2026",
    48,
    "Warning (ต้องติดตาม)"
  ],
  [
    "665040003-9",
    "Chen Wei",
    "China (จีน)",
    "CN",
    "Ph.D.",
    "Electrical Engineering",
    "วิศวกรรมไฟฟ้า",
    4,
    "2024-06-15",
    3.88,
    "chen.wei@kkumail.com",
    "Assoc. Prof. Dr. Wanida Ratanapan",
    "Dr. Sarawut Prasert",
    "ลาพักการเรียน (Semester Leave) ใน 1/2026",
    18,
    "Normal (ปกติ)"
  ],
  [
    "685040023-4",
    "Somxay Vongphachanh",
    "Laos (ลาว)",
    "LA",
    "B.Eng.",
    "Chemical Engineering",
    "วิศวกรรมเคมี",
    1,
    "2026-06-15",
    3.15,
    "somxay.vongphachanh@kkumail.com",
    "Asst. Prof. Dr. Pattaraporn Posoknistakul",
    "Assoc. Prof. Dr. Thanate Chaichana",
    "ลงทะเบียน (Enroll) ใน 1/2026",
    10,
    "Normal (ปกติ)"
  ],
  [
    "675040019-1",
    "Rathana Sok",
    "Cambodia (กัมพูชา)",
    "KH",
    "Ph.D.",
    "Civil Engineering",
    "วิศวกรรมโยธา",
    3,
    "2025-06-15",
    3.5,
    "rathana.sok@kkumail.com",
    "Assoc. Prof. Dr. Thanate Chaichana",
    "Dr. Sarawut Prasert",
    "รักษาสภาพ (Maintain) ใน 1/2026",
    35,
    "Monitor (เฝ้าระวัง)"
  ],
  [
    "685040006-1",
    "Do Hoang Long",
    "Vietnam (เวียดนาม)",
    "VN",
    "Ph.D.",
    "Computer Engineering",
    "วิศวกรรมคอมพิวเตอร์",
    1,
    "2026-06-15",
    3.0,
    "do.hoang.long@kkumail.com",
    "Assoc. Prof. Dr. Thanate Chaichana",
    "Asst. Prof. Dr. Pattaraporn Posoknistakul",
    "รักษาสภาพ (Maintain) ใน 1/2026",
    95,
    "Critical (วิกฤต)"
  ],
  [
    "685040007-4",
    "Sengchanh Keobouaphanh",
    "Laos (ลาว)",
    "LA",
    "Ph.D.",
    "Chemical Engineering",
    "วิศวกรรมเคมี",
    2,
    "2025-06-15",
    3.09,
    "sengchanh.keobouaphanh@kkumail.com",
    "Dr. Natthaphol Sukumal",
    "Dr. Sarawut Prasert",
    "ลงทะเบียน (Enroll) ใน 1/2026",
    35,
    "Monitor (เฝ้าระวัง)"
  ],
  [
    "675040008-7",
    "Wang Hao",
    "China (จีน)",
    "CN",
    "Ph.D.",
    "Electrical Engineering",
    "วิศวกรรมไฟฟ้า",
    3,
    "2025-06-15",
    3.18,
    "wang.hao@kkumail.com",
    "Assoc. Prof. Dr. Wanida Ratanapan",
    "Assoc. Prof. Dr. Thanate Chaichana",
    "ลงทะเบียน (Enroll) ใน 1/2026",
    35,
    "Monitor (เฝ้าระวัง)"
  ],
  [
    "675040009-1",
    "Aung Ko Lat",
    "Myanmar (เมียนมา)",
    "MM",
    "Ph.D.",
    "Civil Engineering",
    "วิศวกรรมโยธา",
    4,
    "2024-06-15",
    3.27,
    "aung.ko.lat@kkumail.com",
    "Asst. Prof. Dr. Pattaraporn Posoknistakul",
    "Dr. Natthaphol Sukumal",
    "ลงทะเบียน (Enroll) ใน 1/2026",
    55,
    "Warning (ต้องติดตาม)"
  ],
  [
    "685040010-4",
    "Chea Sambath",
    "Cambodia (กัมพูชา)",
    "KH",
    "M.Eng.",
    "Digital and AI Innovation Engineering",
    "วิศวกรรมนวัตกรรมดิจิทัลและปัญญาประดิษฐ์",
    1,
    "2026-06-15",
    3.36,
    "chea.sambath@kkumail.com",
    "Dr. Sarawut Prasert",
    "Assoc. Prof. Dr. Wanida Ratanapan",
    "ลงทะเบียน (Enroll) ใน 1/2026",
    15,
    "Normal (ปกติ)"
  ],
  [
    "685040011-7",
    "Nuralam Hossain",
    "Bangladesh (บังกลาเทศ)",
    "BD",
    "M.Eng.",
    "Industrial Engineering",
    "วิศวกรรมอุตสาหการ",
    2,
    "2025-06-15",
    3.45,
    "nuralam.hossain@kkumail.com",
    "Assoc. Prof. Dr. Thanate Chaichana",
    "Asst. Prof. Dr. Pattaraporn Posoknistakul",
    "ลงทะเบียน (Enroll) ใน 1/2026",
    50,
    "Warning (ต้องติดตาม)"
  ],
  [
    "675040012-1",
    "Rina Takahashi",
    "Japan (ญี่ปุ่น)",
    "JP",
    "M.Eng.",
    "Mechanical Engineering",
    "วิศวกรรมเครื่องกล",
    3,
    "2025-06-15",
    3.54,
    "rina.takahashi@kkumail.com",
    "Dr. Natthaphol Sukumal",
    "Dr. Sarawut Prasert",
    "รักษาสภาพ (Maintain) ใน 1/2026",
    60,
    "Warning (ต้องติดตาม)"
  ],
  [
    "675040013-4",
    "Kim Min-jun",
    "South Korea (เกาหลีใต้)",
    "KR",
    "M.Eng.",
    "Environmental Engineering",
    "วิศวกรรมสิ่งแวดล้อม",
    4,
    "2024-06-15",
    3.63,
    "kim.min-jun@kkumail.com",
    "Assoc. Prof. Dr. Wanida Ratanapan",
    "Assoc. Prof. Dr. Thanate Chaichana",
    "รักษาสภาพ (Maintain) ใน 1/2026",
    15,
    "Normal (ปกติ)"
  ],
  [
    "685040014-7",
    "Vu Thi Huong",
    "Vietnam (เวียดนาม)",
    "VN",
    "B.Eng.",
    "Telecommunications Engineering",
    "วิศวกรรมโทรคมนาคม",
    1,
    "2026-06-15",
    3.72,
    "vu.thi.huong@kkumail.com",
    "Asst. Prof. Dr. Pattaraporn Posoknistakul",
    "Dr. Natthaphol Sukumal",
    "ลงทะเบียน (Enroll) ใน 1/2026",
    50,
    "Warning (ต้องติดตาม)"
  ],
  [
    "685040015-1",
    "Zin Mar Oo",
    "Myanmar (เมียนมา)",
    "MM",
    "B.Eng.",
    "Chemical Engineering",
    "วิศวกรรมเคมี",
    2,
    "2025-06-15",
    3.81,
    "zin.mar.oo@kkumail.com",
    "Dr. Sarawut Prasert",
    "Assoc. Prof. Dr. Wanida Ratanapan",
    "ลาพักการเรียน (Semester Leave) ใน 1/2026",
    35,
    "Monitor (เฝ้าระวัง)"
  ],
  [
    "665040016-4",
    "Zhao Lei",
    "China (จีน)",
    "CN",
    "Ph.D.",
    "Computer Engineering",
    "วิศวกรรมคอมพิวเตอร์",
    5,
    "2024-06-15",
    3.0,
    "zhao.lei@kkumail.com",
    "Assoc. Prof. Dr. Thanate Chaichana",
    "Asst. Prof. Dr. Pattaraporn Posoknistakul",
    "รักษาสภาพ (Maintain) ใน 1/2026",
    95,
    "Critical (วิกฤต)"
  ],
  [
    "665040017-7",
    "Khamphay Phoumsavanh",
    "Laos (ลาว)",
    "LA",
    "Ph.D.",
    "Chemical Engineering",
    "วิศวกรรมเคมี",
    6,
    "2023-06-15",
    3.09,
    "khamphay.phoumsavanh@kkumail.com",
    "Dr. Natthaphol Sukumal",
    "Dr. Sarawut Prasert",
    "รักษาสภาพ (Maintain) ใน 1/2026",
    35,
    "Monitor (เฝ้าระวัง)"
  ],
  [
    "685040018-1",
    "Pramod Adhikari",
    "Nepal (เนปาล)",
    "NP",
    "Ph.D.",
    "Electrical Engineering",
    "วิศวกรรมไฟฟ้า",
    1,
    "2026-06-15",
    3.18,
    "pramod.adhikari@kkumail.com",
    "Assoc. Prof. Dr. Wanida Ratanapan",
    "Assoc. Prof. Dr. Thanate Chaichana",
    "รักษาสภาพ (Maintain) ใน 1/2026",
    80,
    "Critical (วิกฤต)"
  ],
  [
    "685040019-4",
    "Ibrahim Bello",
    "Nigeria (ไนจีเรีย)",
    "NG",
    "Ph.D.",
    "Civil Engineering",
    "วิศวกรรมโยธา",
    2,
    "2025-06-15",
    3.27,
    "ibrahim.bello@kkumail.com",
    "Asst. Prof. Dr. Pattaraporn Posoknistakul",
    "Dr. Natthaphol Sukumal",
    "ลงทะเบียน (Enroll) ใน 1/2026",
    15,
    "Normal (ปกติ)"
  ],
  [
    "675040020-7",
    "Nathalie Cruz",
    "Philippines (ฟิลิปปินส์)",
    "PH",
    "M.Eng.",
    "Digital and AI Innovation Engineering",
    "วิศวกรรมนวัตกรรมดิจิทัลและปัญญาประดิษฐ์",
    3,
    "2025-06-15",
    3.36,
    "nathalie.cruz@kkumail.com",
    "Dr. Sarawut Prasert",
    "Assoc. Prof. Dr. Wanida Ratanapan",
    "ลงทะเบียน (Enroll) ใน 1/2026",
    15,
    "Normal (ปกติ)"
  ],
  [
    "675040021-1",
    "Pich Sovann",
    "Cambodia (กัมพูชา)",
    "KH",
    "M.Eng.",
    "Industrial Engineering",
    "วิศวกรรมอุตสาหการ",
    4,
    "2024-06-15",
    3.45,
    "pich.sovann@kkumail.com",
    "Assoc. Prof. Dr. Thanate Chaichana",
    "Asst. Prof. Dr. Pattaraporn Posoknistakul",
    "รักษาสภาพ (Maintain) ใน 1/2026",
    50,
    "Warning (ต้องติดตาม)"
  ],
  [
    "685040022-4",
    "Dinh Quang Huy",
    "Vietnam (เวียดนาม)",
    "VN",
    "M.Eng.",
    "Mechanical Engineering",
    "วิศวกรรมเครื่องกล",
    1,
    "2026-06-15",
    3.54,
    "dinh.quang.huy@kkumail.com",
    "Dr. Natthaphol Sukumal",
    "Dr. Sarawut Prasert",
    "ลงทะเบียน (Enroll) ใน 1/2026",
    50,
    "Warning (ต้องติดตาม)"
  ],
  [
    "685040023-7",
    "Kyaw San Lwin",
    "Myanmar (เมียนมา)",
    "MM",
    "M.Eng.",
    "Environmental Engineering",
    "วิศวกรรมสิ่งแวดล้อม",
    2,
    "2025-06-15",
    3.63,
    "kyaw.san.lwin@kkumail.com",
    "Assoc. Prof. Dr. Wanida Ratanapan",
    "Assoc. Prof. Dr. Thanate Chaichana",
    "ลงทะเบียน (Enroll) ใน 1/2026",
    15,
    "Normal (ปกติ)"
  ],
  [
    "675040024-1",
    "Li Jing",
    "China (จีน)",
    "CN",
    "B.Eng.",
    "Telecommunications Engineering",
    "วิศวกรรมโทรคมนาคม",
    3,
    "2025-06-15",
    3.72,
    "li.jing@kkumail.com",
    "Asst. Prof. Dr. Pattaraporn Posoknistakul",
    "Dr. Natthaphol Sukumal",
    "รักษาสภาพ (Maintain) ใน 1/2026",
    60,
    "Warning (ต้องติดตาม)"
  ],
  [
    "675040025-4",
    "Abid Ali",
    "Pakistan (ปากีสถาน)",
    "PK",
    "B.Eng.",
    "Chemical Engineering",
    "วิศวกรรมเคมี",
    4,
    "2024-06-15",
    3.81,
    "abid.ali@kkumail.com",
    "Dr. Sarawut Prasert",
    "Assoc. Prof. Dr. Wanida Ratanapan",
    "รักษาสภาพ (Maintain) ใน 1/2026",
    15,
    "Normal (ปกติ)"
  ],
  [
    "675040026-7",
    "Keo Sophal",
    "Cambodia (กัมพูชา)",
    "KH",
    "Ph.D.",
    "Computer Engineering",
    "วิศวกรรมคอมพิวเตอร์",
    3,
    "2025-06-15",
    3.0,
    "keo.sophal@kkumail.com",
    "Assoc. Prof. Dr. Thanate Chaichana",
    "Asst. Prof. Dr. Pattaraporn Posoknistakul",
    "ลงทะเบียน (Enroll) ใน 1/2026",
    70,
    "Critical (วิกฤต)"
  ],
  [
    "675040027-1",
    "Bounmy Saysana",
    "Laos (ลาว)",
    "LA",
    "Ph.D.",
    "Chemical Engineering",
    "วิศวกรรมเคมี",
    4,
    "2024-06-15",
    3.09,
    "bounmy.saysana@kkumail.com",
    "Dr. Natthaphol Sukumal",
    "Dr. Sarawut Prasert",
    "ลงทะเบียน (Enroll) ใน 1/2026",
    75,
    "Critical (วิกฤต)"
  ],
  [
    "665040028-4",
    "Tran Duc Anh",
    "Vietnam (เวียดนาม)",
    "VN",
    "Ph.D.",
    "Electrical Engineering",
    "วิศวกรรมไฟฟ้า",
    5,
    "2024-06-15",
    3.18,
    "tran.duc.anh@kkumail.com",
    "Assoc. Prof. Dr. Wanida Ratanapan",
    "Assoc. Prof. Dr. Thanate Chaichana",
    "รักษาสภาพ (Maintain) ใน 1/2026",
    60,
    "Warning (ต้องติดตาม)"
  ],
  [
    "665040029-7",
    "Hla Hla Win",
    "Myanmar (เมียนมา)",
    "MM",
    "Ph.D.",
    "Civil Engineering",
    "วิศวกรรมโยธา",
    6,
    "2023-06-15",
    3.27,
    "hla.hla.win@kkumail.com",
    "Asst. Prof. Dr. Pattaraporn Posoknistakul",
    "Dr. Natthaphol Sukumal",
    "รักษาสภาพ (Maintain) ใน 1/2026",
    15,
    "Normal (ปกติ)"
  ],
  [
    "685040030-1",
    "Zhang Qian",
    "China (จีน)",
    "CN",
    "M.Eng.",
    "Digital and AI Innovation Engineering",
    "วิศวกรรมนวัตกรรมดิจิทัลและปัญญาประดิษฐ์",
    1,
    "2026-06-15",
    3.36,
    "zhang.qian@kkumail.com",
    "Dr. Sarawut Prasert",
    "Assoc. Prof. Dr. Wanida Ratanapan",
    "รักษาสภาพ (Maintain) ใน 1/2026",
    50,
    "Warning (ต้องติดตาม)"
  ],
  [
    "685040031-4",
    "Anurag Shrestha",
    "Nepal (เนปาล)",
    "NP",
    "M.Eng.",
    "Industrial Engineering",
    "วิศวกรรมอุตสาหการ",
    2,
    "2025-06-15",
    3.45,
    "anurag.shrestha@kkumail.com",
    "Assoc. Prof. Dr. Thanate Chaichana",
    "Asst. Prof. Dr. Pattaraporn Posoknistakul",
    "ลงทะเบียน (Enroll) ใน 1/2026",
    50,
    "Warning (ต้องติดตาม)"
  ],
  [
    "675040032-7",
    "Ezekiel Okafor",
    "Nigeria (ไนจีเรีย)",
    "NG",
    "M.Eng.",
    "Mechanical Engineering",
    "วิศวกรรมเครื่องกล",
    3,
    "2025-06-15",
    3.54,
    "ezekiel.okafor@kkumail.com",
    "Dr. Natthaphol Sukumal",
    "Dr. Sarawut Prasert",
    "ลงทะเบียน (Enroll) ใน 1/2026",
    40,
    "Monitor (เฝ้าระวัง)"
  ],
  [
    "675040033-1",
    "Kanya Phommasone",
    "Laos (ลาว)",
    "LA",
    "M.Eng.",
    "Environmental Engineering",
    "วิศวกรรมสิ่งแวดล้อม",
    4,
    "2024-06-15",
    3.63,
    "kanya.phommasone@kkumail.com",
    "Assoc. Prof. Dr. Wanida Ratanapan",
    "Assoc. Prof. Dr. Thanate Chaichana",
    "รักษาสภาพ (Maintain) ใน 1/2026",
    35,
    "Monitor (เฝ้าระวัง)"
  ],
  [
    "665040034-4",
    "Nguyen Thi Mai",
    "Vietnam (เวียดนาม)",
    "VN",
    "B.Eng.",
    "Telecommunications Engineering",
    "วิศวกรรมโทรคมนาคม",
    5,
    "2024-06-15",
    3.72,
    "nguyen.thi.mai@kkumail.com",
    "Asst. Prof. Dr. Pattaraporn Posoknistakul",
    "Dr. Natthaphol Sukumal",
    "รักษาสภาพ (Maintain) ใน 1/2026",
    15,
    "Normal (ปกติ)"
  ],
  [
    "665040035-7",
    "Zaw Min Tun",
    "Myanmar (เมียนมา)",
    "MM",
    "B.Eng.",
    "Chemical Engineering",
    "วิศวกรรมเคมี",
    6,
    "2023-06-15",
    3.81,
    "zaw.min.tun@kkumail.com",
    "Dr. Sarawut Prasert",
    "Assoc. Prof. Dr. Wanida Ratanapan",
    "รักษาสภาพ (Maintain) ใน 1/2026",
    15,
    "Normal (ปกติ)"
  ],
  [
    "685040036-1",
    "Liu Yang",
    "China (จีน)",
    "CN",
    "Ph.D.",
    "Computer Engineering",
    "วิศวกรรมคอมพิวเตอร์",
    1,
    "2026-06-15",
    3.0,
    "liu.yang@kkumail.com",
    "Assoc. Prof. Dr. Thanate Chaichana",
    "Asst. Prof. Dr. Pattaraporn Posoknistakul",
    "รักษาสภาพ (Maintain) ใน 1/2026",
    95,
    "Critical (วิกฤต)"
  ],
  [
    "685040037-4",
    "Sophea Chann",
    "Cambodia (กัมพูชา)",
    "KH",
    "Ph.D.",
    "Chemical Engineering",
    "วิศวกรรมเคมี",
    2,
    "2025-06-15",
    3.09,
    "sophea.chann@kkumail.com",
    "Dr. Natthaphol Sukumal",
    "Dr. Sarawut Prasert",
    "ลงทะเบียน (Enroll) ใน 1/2026",
    35,
    "Monitor (เฝ้าระวัง)"
  ],
  [
    "675040038-7",
    "Kazi Rahman",
    "Bangladesh (บังกลาเทศ)",
    "BD",
    "Ph.D.",
    "Electrical Engineering",
    "วิศวกรรมไฟฟ้า",
    3,
    "2025-06-15",
    3.18,
    "kazi.rahman@kkumail.com",
    "Assoc. Prof. Dr. Wanida Ratanapan",
    "Assoc. Prof. Dr. Thanate Chaichana",
    "ลงทะเบียน (Enroll) ใน 1/2026",
    70,
    "Critical (วิกฤต)"
  ],
  [
    "675040039-1",
    "Thurain Win",
    "Myanmar (เมียนมา)",
    "MM",
    "Ph.D.",
    "Civil Engineering",
    "วิศวกรรมโยธา",
    4,
    "2024-06-15",
    3.27,
    "thurain.win@kkumail.com",
    "Asst. Prof. Dr. Pattaraporn Posoknistakul",
    "Dr. Natthaphol Sukumal",
    "ลงทะเบียน (Enroll) ใน 1/2026",
    55,
    "Warning (ต้องติดตาม)"
  ],
  [
    "675040040-4",
    "Huang Jie",
    "China (จีน)",
    "CN",
    "M.Eng.",
    "Digital and AI Innovation Engineering",
    "วิศวกรรมนวัตกรรมดิจิทัลและปัญญาประดิษฐ์",
    3,
    "2025-06-15",
    3.36,
    "huang.jie@kkumail.com",
    "Dr. Sarawut Prasert",
    "Assoc. Prof. Dr. Wanida Ratanapan",
    "ลงทะเบียน (Enroll) ใน 1/2026",
    15,
    "Normal (ปกติ)"
  ],
  [
    "675040041-7",
    "Le Van Cuong",
    "Vietnam (เวียดนาม)",
    "VN",
    "M.Eng.",
    "Industrial Engineering",
    "วิศวกรรมอุตสาหการ",
    4,
    "2024-06-15",
    3.45,
    "le.van.cuong@kkumail.com",
    "Assoc. Prof. Dr. Thanate Chaichana",
    "Asst. Prof. Dr. Pattaraporn Posoknistakul",
    "รักษาสภาพ (Maintain) ใน 1/2026",
    50,
    "Warning (ต้องติดตาม)"
  ],
  [
    "685040042-1",
    "Phonethip Sisavath",
    "Laos (ลาว)",
    "LA",
    "M.Eng.",
    "Mechanical Engineering",
    "วิศวกรรมเครื่องกล",
    1,
    "2026-06-15",
    3.54,
    "phonethip.sisavath@kkumail.com",
    "Dr. Natthaphol Sukumal",
    "Dr. Sarawut Prasert",
    "รักษาสภาพ (Maintain) ใน 1/2026",
    60,
    "Warning (ต้องติดตาม)"
  ],
  [
    "685040043-4",
    "Tariq Mahmood",
    "Pakistan (ปากีสถาน)",
    "PK",
    "M.Eng.",
    "Environmental Engineering",
    "วิศวกรรมสิ่งแวดล้อม",
    2,
    "2025-06-15",
    3.63,
    "tariq.mahmood@kkumail.com",
    "Assoc. Prof. Dr. Wanida Ratanapan",
    "Assoc. Prof. Dr. Thanate Chaichana",
    "ลงทะเบียน (Enroll) ใน 1/2026",
    15,
    "Normal (ปกติ)"
  ],
  [
    "655040044-7",
    "Chen Xiao",
    "China (จีน)",
    "CN",
    "B.Eng.",
    "Telecommunications Engineering",
    "วิศวกรรมโทรคมนาคม",
    7,
    "2023-06-15",
    3.72,
    "chen.xiao@kkumail.com",
    "Asst. Prof. Dr. Pattaraporn Posoknistakul",
    "Dr. Natthaphol Sukumal",
    "รักษาสภาพ (Maintain) ใน 1/2026",
    40,
    "Monitor (เฝ้าระวัง)"
  ]
];
const MASTER_THESIS_DATA = [
  [
    "675040001-2",
    "Nguyen Van Minh",
    "Ph.D.",
    "HYBRID SELF REGENERATION ION EXCHANGE AND REVERSE OSMOSIS (HSIX-RO) FOR DESALINATION OF HIGH HARDNESS GROUNDWATER",
    "ระบบผสมผสานแลกเปลี่ยนประจุที่สามารถฟื้นฟูสภาพด้วยตัวเองและรีเวิร์สออสโมซิส (HSIX-RO) สำหรับการกำจัดเกลือในน้ำใต้ดินกระด้าง",
    "Assoc. Prof. Dr. Thanate Chaichana",
    "Dr. Natthaphol Sukumal",
    "Approved"
  ],
  [
    "685040012-8",
    "Aye Myat Mon",
    "M.Eng.",
    "DEEP LEARNING-BASED EDGE VISION SYSTEM FOR REAL-TIME FAULT DETECTION IN AUTOMATED MANUFACTURING",
    "ระบบประมวลผลภาพบนเอดจ์ด้วยการเรียนรู้เชิงลึกเพื่อการตรวจจับข้อผิดพลาดแบบเรียลไทม์ในสายการผลิตอัตโนมัติ",
    "Dr. Natthaphol Sukumal",
    "Assoc. Prof. Dr. Thanate Chaichana",
    "Pending"
  ],
  [
    "665040003-9",
    "Chen Wei",
    "Ph.D.",
    "OPTIMAL DISPATCH AND VOLTAGE STABILITY OF MICROGRIDS WITH HIGH-PENETRATION RENEWABLE ENERGY SOURCES",
    "การจ่ายโหลดที่เหมาะสมและความเสถียรของแรงดันไฟฟ้าสำหรับไมโครกริดที่มีการเชื่อมต่อพลังงานหมุนเวียนสัดส่วนสูง",
    "Assoc. Prof. Dr. Wanida Ratanapan",
    "Dr. Sarawut Prasert",
    "Approved"
  ],
  [
    "685040023-4",
    "Somxay Vongphachanh",
    "B.Eng.",
    "ANAEROBIC CO-DIGESTION OF FOOD WASTE AND AGRICULTURAL RESIDUES FOR ENHANCED BIOMETHANE PRODUCTION",
    "การหมักไร้อากาศร่วมระหว่างเศษอาหารและกากเหลือทางการเกษตรเพื่อเพิ่มประสิทธิภาพการผลิตก๊าซชีวภาพมีเทน",
    "Asst. Prof. Dr. Pattaraporn Posoknistakul",
    "Assoc. Prof. Dr. Thanate Chaichana",
    "Pending"
  ],
  [
    "675040019-1",
    "Rathana Sok",
    "Ph.D.",
    "APPLICATION OF GEOPOLYMER CONCRETE WITH INDUSTRIAL SLAG REPLACEMENT FOR SUSTAINABLE PAVEMENT INFRASTRUCTURE",
    "การประยุกต์ใช้คอนกรีตจีโอโพลิเมอร์ผสมกากตะกรันอุตสาหกรรมสำหรับโครงสร้างพื้นฐานถนนคอนกรีตอย่างยั่งยืน",
    "Assoc. Prof. Dr. Thanate Chaichana",
    "Dr. Sarawut Prasert",
    "Approved"
  ],
  [
    "685040006-1",
    "Do Hoang Long",
    "Ph.D.",
    "HYBRID SELF REGENERATION ION EXCHANGE AND REVERSE OSMOSIS (HSIX-RO) FOR DESALINATION OF HIGH HARDNESS GROUNDWATER",
    "ระบบผสมผสานแลกเปลี่ยนประจุที่สามารถฟื้นฟูสภาพด้วยตัวเองและรีเวิร์สออสโมซิส (HSIX-RO) สำหรับการกำจัดเกลือในน้ำใต้ดินกระด้าง",
    "Assoc. Prof. Dr. Thanate Chaichana",
    "Asst. Prof. Dr. Pattaraporn Posoknistakul",
    "Pending"
  ],
  [
    "685040007-4",
    "Sengchanh Keobouaphanh",
    "Ph.D.",
    "DEEP LEARNING-BASED EDGE VISION SYSTEM FOR REAL-TIME FAULT DETECTION IN AUTOMATED MANUFACTURING",
    "ระบบประมวลผลภาพบนเอดจ์ด้วยการเรียนรู้เชิงลึกเพื่อการตรวจจับข้อผิดพลาดแบบเรียลไทม์ในสายการผลิตอัตโนมัติ",
    "Dr. Natthaphol Sukumal",
    "Dr. Sarawut Prasert",
    "Pending"
  ],
  [
    "675040008-7",
    "Wang Hao",
    "Ph.D.",
    "OPTIMAL DISPATCH AND VOLTAGE STABILITY OF MICROGRIDS WITH HIGH-PENETRATION RENEWABLE ENERGY SOURCES",
    "การจ่ายโหลดที่เหมาะสมและความเสถียรของแรงดันไฟฟ้าสำหรับไมโครกริดที่มีการเชื่อมต่อพลังงานหมุนเวียนสัดส่วนสูง",
    "Assoc. Prof. Dr. Wanida Ratanapan",
    "Assoc. Prof. Dr. Thanate Chaichana",
    "Approved"
  ],
  [
    "675040009-1",
    "Aung Ko Lat",
    "Ph.D.",
    "ANAEROBIC CO-DIGESTION OF FOOD WASTE AND AGRICULTURAL RESIDUES FOR ENHANCED BIOMETHANE PRODUCTION",
    "การหมักไร้อากาศร่วมระหว่างเศษอาหารและกากเหลือทางการเกษตรเพื่อเพิ่มประสิทธิภาพการผลิตก๊าซชีวภาพมีเทน",
    "Asst. Prof. Dr. Pattaraporn Posoknistakul",
    "Dr. Natthaphol Sukumal",
    "Approved"
  ],
  [
    "685040010-4",
    "Chea Sambath",
    "M.Eng.",
    "APPLICATION OF GEOPOLYMER CONCRETE WITH INDUSTRIAL SLAG REPLACEMENT FOR SUSTAINABLE PAVEMENT INFRASTRUCTURE",
    "การประยุกต์ใช้คอนกรีตจีโอโพลิเมอร์ผสมกากตะกรันอุตสาหกรรมสำหรับโครงสร้างพื้นฐานถนนคอนกรีตอย่างยั่งยืน",
    "Dr. Sarawut Prasert",
    "Assoc. Prof. Dr. Wanida Ratanapan",
    "Pending"
  ],
  [
    "685040011-7",
    "Nuralam Hossain",
    "M.Eng.",
    "PREDICTIVE MAINTENANCE OF INDUSTRIAL MOTORS USING MULTI-SENSOR FUSION AND DIGITAL TWIN MODELING",
    "การบำรุงรักษาเชิงคาดการณ์ของมอเตอร์อุตสาหกรรมโดยใช้การผสานข้อมูลหลายเซนเซอร์และการสร้างแบบจำลองดิจิทัลทวิน",
    "Assoc. Prof. Dr. Thanate Chaichana",
    "Asst. Prof. Dr. Pattaraporn Posoknistakul",
    "Pending"
  ],
  [
    "675040012-1",
    "Rina Takahashi",
    "M.Eng.",
    "REINFORCEMENT LEARNING FOR AUTONOMOUS MOBILE ROBOT NAVIGATION IN DENSE AGRICULTURAL ENVIRONMENTS",
    "การเรียนรู้แบบเสริมกำลังสำหรับการนำทางหุ่นยนต์เคลื่อนที่อัตโนมัติในสภาพแวดล้อมพื้นที่เกษตรกรรมหนาแน่น",
    "Dr. Natthaphol Sukumal",
    "Dr. Sarawut Prasert",
    "Approved"
  ],
  [
    "675040013-4",
    "Kim Min-jun",
    "M.Eng.",
    "ADSORPTION AND CATALYTIC DEGRADATION OF PER- AND POLYFLUOROALKYL SUBSTANCES (PFAS) IN WATER MATRICES",
    "การดูดซับและการย่อยสลายด้วยตัวเร่งปฏิกิริยาของสารกลุ่มเพอร์และโพลีฟลูออโรอัลคิล (PFAS) ในระบบบำบัดน้ำ",
    "Assoc. Prof. Dr. Wanida Ratanapan",
    "Assoc. Prof. Dr. Thanate Chaichana",
    "Approved"
  ],
  [
    "685040014-7",
    "Vu Thi Huong",
    "B.Eng.",
    "HYBRID SELF REGENERATION ION EXCHANGE AND REVERSE OSMOSIS (HSIX-RO) FOR DESALINATION OF HIGH HARDNESS GROUNDWATER",
    "ระบบผสมผสานแลกเปลี่ยนประจุที่สามารถฟื้นฟูสภาพด้วยตัวเองและรีเวิร์สออสโมซิส (HSIX-RO) สำหรับการกำจัดเกลือในน้ำใต้ดินกระด้าง",
    "Asst. Prof. Dr. Pattaraporn Posoknistakul",
    "Dr. Natthaphol Sukumal",
    "Pending"
  ],
  [
    "685040015-1",
    "Zin Mar Oo",
    "B.Eng.",
    "DEEP LEARNING-BASED EDGE VISION SYSTEM FOR REAL-TIME FAULT DETECTION IN AUTOMATED MANUFACTURING",
    "ระบบประมวลผลภาพบนเอดจ์ด้วยการเรียนรู้เชิงลึกเพื่อการตรวจจับข้อผิดพลาดแบบเรียลไทม์ในสายการผลิตอัตโนมัติ",
    "Dr. Sarawut Prasert",
    "Assoc. Prof. Dr. Wanida Ratanapan",
    "Pending"
  ],
  [
    "665040016-4",
    "Zhao Lei",
    "Ph.D.",
    "OPTIMAL DISPATCH AND VOLTAGE STABILITY OF MICROGRIDS WITH HIGH-PENETRATION RENEWABLE ENERGY SOURCES",
    "การจ่ายโหลดที่เหมาะสมและความเสถียรของแรงดันไฟฟ้าสำหรับไมโครกริดที่มีการเชื่อมต่อพลังงานหมุนเวียนสัดส่วนสูง",
    "Assoc. Prof. Dr. Thanate Chaichana",
    "Asst. Prof. Dr. Pattaraporn Posoknistakul",
    "Approved"
  ],
  [
    "665040017-7",
    "Khamphay Phoumsavanh",
    "Ph.D.",
    "ANAEROBIC CO-DIGESTION OF FOOD WASTE AND AGRICULTURAL RESIDUES FOR ENHANCED BIOMETHANE PRODUCTION",
    "การหมักไร้อากาศร่วมระหว่างเศษอาหารและกากเหลือทางการเกษตรเพื่อเพิ่มประสิทธิภาพการผลิตก๊าซชีวภาพมีเทน",
    "Dr. Natthaphol Sukumal",
    "Dr. Sarawut Prasert",
    "Approved"
  ],
  [
    "685040018-1",
    "Pramod Adhikari",
    "Ph.D.",
    "APPLICATION OF GEOPOLYMER CONCRETE WITH INDUSTRIAL SLAG REPLACEMENT FOR SUSTAINABLE PAVEMENT INFRASTRUCTURE",
    "การประยุกต์ใช้คอนกรีตจีโอโพลิเมอร์ผสมกากตะกรันอุตสาหกรรมสำหรับโครงสร้างพื้นฐานถนนคอนกรีตอย่างยั่งยืน",
    "Assoc. Prof. Dr. Wanida Ratanapan",
    "Assoc. Prof. Dr. Thanate Chaichana",
    "Pending"
  ],
  [
    "685040019-4",
    "Ibrahim Bello",
    "Ph.D.",
    "PREDICTIVE MAINTENANCE OF INDUSTRIAL MOTORS USING MULTI-SENSOR FUSION AND DIGITAL TWIN MODELING",
    "การบำรุงรักษาเชิงคาดการณ์ของมอเตอร์อุตสาหกรรมโดยใช้การผสานข้อมูลหลายเซนเซอร์และการสร้างแบบจำลองดิจิทัลทวิน",
    "Asst. Prof. Dr. Pattaraporn Posoknistakul",
    "Dr. Natthaphol Sukumal",
    "Pending"
  ],
  [
    "675040020-7",
    "Nathalie Cruz",
    "M.Eng.",
    "REINFORCEMENT LEARNING FOR AUTONOMOUS MOBILE ROBOT NAVIGATION IN DENSE AGRICULTURAL ENVIRONMENTS",
    "การเรียนรู้แบบเสริมกำลังสำหรับการนำทางหุ่นยนต์เคลื่อนที่อัตโนมัติในสภาพแวดล้อมพื้นที่เกษตรกรรมหนาแน่น",
    "Dr. Sarawut Prasert",
    "Assoc. Prof. Dr. Wanida Ratanapan",
    "Approved"
  ],
  [
    "675040021-1",
    "Pich Sovann",
    "M.Eng.",
    "ADSORPTION AND CATALYTIC DEGRADATION OF PER- AND POLYFLUOROALKYL SUBSTANCES (PFAS) IN WATER MATRICES",
    "การดูดซับและการย่อยสลายด้วยตัวเร่งปฏิกิริยาของสารกลุ่มเพอร์และโพลีฟลูออโรอัลคิล (PFAS) ในระบบบำบัดน้ำ",
    "Assoc. Prof. Dr. Thanate Chaichana",
    "Asst. Prof. Dr. Pattaraporn Posoknistakul",
    "Approved"
  ],
  [
    "685040022-4",
    "Dinh Quang Huy",
    "M.Eng.",
    "HYBRID SELF REGENERATION ION EXCHANGE AND REVERSE OSMOSIS (HSIX-RO) FOR DESALINATION OF HIGH HARDNESS GROUNDWATER",
    "ระบบผสมผสานแลกเปลี่ยนประจุที่สามารถฟื้นฟูสภาพด้วยตัวเองและรีเวิร์สออสโมซิส (HSIX-RO) สำหรับการกำจัดเกลือในน้ำใต้ดินกระด้าง",
    "Dr. Natthaphol Sukumal",
    "Dr. Sarawut Prasert",
    "Pending"
  ],
  [
    "685040023-7",
    "Kyaw San Lwin",
    "M.Eng.",
    "DEEP LEARNING-BASED EDGE VISION SYSTEM FOR REAL-TIME FAULT DETECTION IN AUTOMATED MANUFACTURING",
    "ระบบประมวลผลภาพบนเอดจ์ด้วยการเรียนรู้เชิงลึกเพื่อการตรวจจับข้อผิดพลาดแบบเรียลไทม์ในสายการผลิตอัตโนมัติ",
    "Assoc. Prof. Dr. Wanida Ratanapan",
    "Assoc. Prof. Dr. Thanate Chaichana",
    "Pending"
  ],
  [
    "675040024-1",
    "Li Jing",
    "B.Eng.",
    "OPTIMAL DISPATCH AND VOLTAGE STABILITY OF MICROGRIDS WITH HIGH-PENETRATION RENEWABLE ENERGY SOURCES",
    "การจ่ายโหลดที่เหมาะสมและความเสถียรของแรงดันไฟฟ้าสำหรับไมโครกริดที่มีการเชื่อมต่อพลังงานหมุนเวียนสัดส่วนสูง",
    "Asst. Prof. Dr. Pattaraporn Posoknistakul",
    "Dr. Natthaphol Sukumal",
    "Approved"
  ],
  [
    "675040025-4",
    "Abid Ali",
    "B.Eng.",
    "ANAEROBIC CO-DIGESTION OF FOOD WASTE AND AGRICULTURAL RESIDUES FOR ENHANCED BIOMETHANE PRODUCTION",
    "การหมักไร้อากาศร่วมระหว่างเศษอาหารและกากเหลือทางการเกษตรเพื่อเพิ่มประสิทธิภาพการผลิตก๊าซชีวภาพมีเทน",
    "Dr. Sarawut Prasert",
    "Assoc. Prof. Dr. Wanida Ratanapan",
    "Approved"
  ],
  [
    "675040026-7",
    "Keo Sophal",
    "Ph.D.",
    "APPLICATION OF GEOPOLYMER CONCRETE WITH INDUSTRIAL SLAG REPLACEMENT FOR SUSTAINABLE PAVEMENT INFRASTRUCTURE",
    "การประยุกต์ใช้คอนกรีตจีโอโพลิเมอร์ผสมกากตะกรันอุตสาหกรรมสำหรับโครงสร้างพื้นฐานถนนคอนกรีตอย่างยั่งยืน",
    "Assoc. Prof. Dr. Thanate Chaichana",
    "Asst. Prof. Dr. Pattaraporn Posoknistakul",
    "Approved"
  ],
  [
    "675040027-1",
    "Bounmy Saysana",
    "Ph.D.",
    "PREDICTIVE MAINTENANCE OF INDUSTRIAL MOTORS USING MULTI-SENSOR FUSION AND DIGITAL TWIN MODELING",
    "การบำรุงรักษาเชิงคาดการณ์ของมอเตอร์อุตสาหกรรมโดยใช้การผสานข้อมูลหลายเซนเซอร์และการสร้างแบบจำลองดิจิทัลทวิน",
    "Dr. Natthaphol Sukumal",
    "Dr. Sarawut Prasert",
    "Approved"
  ],
  [
    "665040028-4",
    "Tran Duc Anh",
    "Ph.D.",
    "REINFORCEMENT LEARNING FOR AUTONOMOUS MOBILE ROBOT NAVIGATION IN DENSE AGRICULTURAL ENVIRONMENTS",
    "การเรียนรู้แบบเสริมกำลังสำหรับการนำทางหุ่นยนต์เคลื่อนที่อัตโนมัติในสภาพแวดล้อมพื้นที่เกษตรกรรมหนาแน่น",
    "Assoc. Prof. Dr. Wanida Ratanapan",
    "Assoc. Prof. Dr. Thanate Chaichana",
    "Approved"
  ],
  [
    "665040029-7",
    "Hla Hla Win",
    "Ph.D.",
    "ADSORPTION AND CATALYTIC DEGRADATION OF PER- AND POLYFLUOROALKYL SUBSTANCES (PFAS) IN WATER MATRICES",
    "การดูดซับและการย่อยสลายด้วยตัวเร่งปฏิกิริยาของสารกลุ่มเพอร์และโพลีฟลูออโรอัลคิล (PFAS) ในระบบบำบัดน้ำ",
    "Asst. Prof. Dr. Pattaraporn Posoknistakul",
    "Dr. Natthaphol Sukumal",
    "Approved"
  ],
  [
    "685040030-1",
    "Zhang Qian",
    "M.Eng.",
    "HYBRID SELF REGENERATION ION EXCHANGE AND REVERSE OSMOSIS (HSIX-RO) FOR DESALINATION OF HIGH HARDNESS GROUNDWATER",
    "ระบบผสมผสานแลกเปลี่ยนประจุที่สามารถฟื้นฟูสภาพด้วยตัวเองและรีเวิร์สออสโมซิส (HSIX-RO) สำหรับการกำจัดเกลือในน้ำใต้ดินกระด้าง",
    "Dr. Sarawut Prasert",
    "Assoc. Prof. Dr. Wanida Ratanapan",
    "Pending"
  ],
  [
    "685040031-4",
    "Anurag Shrestha",
    "M.Eng.",
    "DEEP LEARNING-BASED EDGE VISION SYSTEM FOR REAL-TIME FAULT DETECTION IN AUTOMATED MANUFACTURING",
    "ระบบประมวลผลภาพบนเอดจ์ด้วยการเรียนรู้เชิงลึกเพื่อการตรวจจับข้อผิดพลาดแบบเรียลไทม์ในสายการผลิตอัตโนมัติ",
    "Assoc. Prof. Dr. Thanate Chaichana",
    "Asst. Prof. Dr. Pattaraporn Posoknistakul",
    "Pending"
  ],
  [
    "675040032-7",
    "Ezekiel Okafor",
    "M.Eng.",
    "OPTIMAL DISPATCH AND VOLTAGE STABILITY OF MICROGRIDS WITH HIGH-PENETRATION RENEWABLE ENERGY SOURCES",
    "การจ่ายโหลดที่เหมาะสมและความเสถียรของแรงดันไฟฟ้าสำหรับไมโครกริดที่มีการเชื่อมต่อพลังงานหมุนเวียนสัดส่วนสูง",
    "Dr. Natthaphol Sukumal",
    "Dr. Sarawut Prasert",
    "Approved"
  ],
  [
    "675040033-1",
    "Kanya Phommasone",
    "M.Eng.",
    "ANAEROBIC CO-DIGESTION OF FOOD WASTE AND AGRICULTURAL RESIDUES FOR ENHANCED BIOMETHANE PRODUCTION",
    "การหมักไร้อากาศร่วมระหว่างเศษอาหารและกากเหลือทางการเกษตรเพื่อเพิ่มประสิทธิภาพการผลิตก๊าซชีวภาพมีเทน",
    "Assoc. Prof. Dr. Wanida Ratanapan",
    "Assoc. Prof. Dr. Thanate Chaichana",
    "Approved"
  ],
  [
    "665040034-4",
    "Nguyen Thi Mai",
    "B.Eng.",
    "APPLICATION OF GEOPOLYMER CONCRETE WITH INDUSTRIAL SLAG REPLACEMENT FOR SUSTAINABLE PAVEMENT INFRASTRUCTURE",
    "การประยุกต์ใช้คอนกรีตจีโอโพลิเมอร์ผสมกากตะกรันอุตสาหกรรมสำหรับโครงสร้างพื้นฐานถนนคอนกรีตอย่างยั่งยืน",
    "Asst. Prof. Dr. Pattaraporn Posoknistakul",
    "Dr. Natthaphol Sukumal",
    "Approved"
  ],
  [
    "665040035-7",
    "Zaw Min Tun",
    "B.Eng.",
    "PREDICTIVE MAINTENANCE OF INDUSTRIAL MOTORS USING MULTI-SENSOR FUSION AND DIGITAL TWIN MODELING",
    "การบำรุงรักษาเชิงคาดการณ์ของมอเตอร์อุตสาหกรรมโดยใช้การผสานข้อมูลหลายเซนเซอร์และการสร้างแบบจำลองดิจิทัลทวิน",
    "Dr. Sarawut Prasert",
    "Assoc. Prof. Dr. Wanida Ratanapan",
    "Approved"
  ],
  [
    "685040036-1",
    "Liu Yang",
    "Ph.D.",
    "REINFORCEMENT LEARNING FOR AUTONOMOUS MOBILE ROBOT NAVIGATION IN DENSE AGRICULTURAL ENVIRONMENTS",
    "การเรียนรู้แบบเสริมกำลังสำหรับการนำทางหุ่นยนต์เคลื่อนที่อัตโนมัติในสภาพแวดล้อมพื้นที่เกษตรกรรมหนาแน่น",
    "Assoc. Prof. Dr. Thanate Chaichana",
    "Asst. Prof. Dr. Pattaraporn Posoknistakul",
    "Pending"
  ],
  [
    "685040037-4",
    "Sophea Chann",
    "Ph.D.",
    "ADSORPTION AND CATALYTIC DEGRADATION OF PER- AND POLYFLUOROALKYL SUBSTANCES (PFAS) IN WATER MATRICES",
    "การดูดซับและการย่อยสลายด้วยตัวเร่งปฏิกิริยาของสารกลุ่มเพอร์และโพลีฟลูออโรอัลคิล (PFAS) ในระบบบำบัดน้ำ",
    "Dr. Natthaphol Sukumal",
    "Dr. Sarawut Prasert",
    "Pending"
  ],
  [
    "675040038-7",
    "Kazi Rahman",
    "Ph.D.",
    "HYBRID SELF REGENERATION ION EXCHANGE AND REVERSE OSMOSIS (HSIX-RO) FOR DESALINATION OF HIGH HARDNESS GROUNDWATER",
    "ระบบผสมผสานแลกเปลี่ยนประจุที่สามารถฟื้นฟูสภาพด้วยตัวเองและรีเวิร์สออสโมซิส (HSIX-RO) สำหรับการกำจัดเกลือในน้ำใต้ดินกระด้าง",
    "Assoc. Prof. Dr. Wanida Ratanapan",
    "Assoc. Prof. Dr. Thanate Chaichana",
    "Approved"
  ],
  [
    "675040039-1",
    "Thurain Win",
    "Ph.D.",
    "DEEP LEARNING-BASED EDGE VISION SYSTEM FOR REAL-TIME FAULT DETECTION IN AUTOMATED MANUFACTURING",
    "ระบบประมวลผลภาพบนเอดจ์ด้วยการเรียนรู้เชิงลึกเพื่อการตรวจจับข้อผิดพลาดแบบเรียลไทม์ในสายการผลิตอัตโนมัติ",
    "Asst. Prof. Dr. Pattaraporn Posoknistakul",
    "Dr. Natthaphol Sukumal",
    "Approved"
  ],
  [
    "675040040-4",
    "Huang Jie",
    "M.Eng.",
    "OPTIMAL DISPATCH AND VOLTAGE STABILITY OF MICROGRIDS WITH HIGH-PENETRATION RENEWABLE ENERGY SOURCES",
    "การจ่ายโหลดที่เหมาะสมและความเสถียรของแรงดันไฟฟ้าสำหรับไมโครกริดที่มีการเชื่อมต่อพลังงานหมุนเวียนสัดส่วนสูง",
    "Dr. Sarawut Prasert",
    "Assoc. Prof. Dr. Wanida Ratanapan",
    "Approved"
  ],
  [
    "675040041-7",
    "Le Van Cuong",
    "M.Eng.",
    "ANAEROBIC CO-DIGESTION OF FOOD WASTE AND AGRICULTURAL RESIDUES FOR ENHANCED BIOMETHANE PRODUCTION",
    "การหมักไร้อากาศร่วมระหว่างเศษอาหารและกากเหลือทางการเกษตรเพื่อเพิ่มประสิทธิภาพการผลิตก๊าซชีวภาพมีเทน",
    "Assoc. Prof. Dr. Thanate Chaichana",
    "Asst. Prof. Dr. Pattaraporn Posoknistakul",
    "Approved"
  ],
  [
    "685040042-1",
    "Phonethip Sisavath",
    "M.Eng.",
    "APPLICATION OF GEOPOLYMER CONCRETE WITH INDUSTRIAL SLAG REPLACEMENT FOR SUSTAINABLE PAVEMENT INFRASTRUCTURE",
    "การประยุกต์ใช้คอนกรีตจีโอโพลิเมอร์ผสมกากตะกรันอุตสาหกรรมสำหรับโครงสร้างพื้นฐานถนนคอนกรีตอย่างยั่งยืน",
    "Dr. Natthaphol Sukumal",
    "Dr. Sarawut Prasert",
    "Pending"
  ],
  [
    "685040043-4",
    "Tariq Mahmood",
    "M.Eng.",
    "PREDICTIVE MAINTENANCE OF INDUSTRIAL MOTORS USING MULTI-SENSOR FUSION AND DIGITAL TWIN MODELING",
    "การบำรุงรักษาเชิงคาดการณ์ของมอเตอร์อุตสาหกรรมโดยใช้การผสานข้อมูลหลายเซนเซอร์และการสร้างแบบจำลองดิจิทัลทวิน",
    "Assoc. Prof. Dr. Wanida Ratanapan",
    "Assoc. Prof. Dr. Thanate Chaichana",
    "Pending"
  ],
  [
    "655040044-7",
    "Chen Xiao",
    "B.Eng.",
    "REINFORCEMENT LEARNING FOR AUTONOMOUS MOBILE ROBOT NAVIGATION IN DENSE AGRICULTURAL ENVIRONMENTS",
    "การเรียนรู้แบบเสริมกำลังสำหรับการนำทางหุ่นยนต์เคลื่อนที่อัตโนมัติในสภาพแวดล้อมพื้นที่เกษตรกรรมหนาแน่น",
    "Asst. Prof. Dr. Pattaraporn Posoknistakul",
    "Dr. Natthaphol Sukumal",
    "Approved"
  ]
];
const MASTER_VISA_DATA = [
  [
    "675040001-2",
    "Nguyen Van Minh",
    "Non-ED",
    "2026-09-16",
    18,
    "Not Started",
    "Warning: 60-Day Window",
    "https://calendar.google.com"
  ],
  [
    "685040012-8",
    "Aye Myat Mon",
    "Non-ED",
    "2026-10-15",
    47,
    "In Progress",
    "Warning: 60-Day Window",
    "https://calendar.google.com"
  ],
  [
    "665040003-9",
    "Chen Wei",
    "Non-ED",
    "2027-01-18",
    142,
    "Completed",
    "Valid (ปกติ)",
    "https://calendar.google.com"
  ],
  [
    "685040023-4",
    "Somxay Vongphachanh",
    "Non-ED",
    "2027-03-27",
    210,
    "Completed",
    "Valid (ปกติ)",
    "https://calendar.google.com"
  ],
  [
    "675040019-1",
    "Rathana Sok",
    "Non-ED",
    "2026-10-23",
    55,
    "In Progress",
    "Warning: 60-Day Window",
    "https://calendar.google.com"
  ],
  [
    "685040006-1",
    "Do Hoang Long",
    "Non-ED",
    "2026-09-11",
    12,
    "Not Started (ยังไม่เริ่ม)",
    "CRITICAL: Expiring < 14 Days",
    "https://calendar.google.com"
  ],
  [
    "685040007-4",
    "Sengchanh Keobouaphanh",
    "Non-ED",
    "2027-01-22",
    145,
    "Completed (ต่อเรียบร้อย)",
    "Valid (ปกติ)",
    "https://calendar.google.com"
  ],
  [
    "675040008-7",
    "Wang Hao",
    "Non-ED",
    "2027-01-27",
    150,
    "Completed (ต่อเรียบร้อย)",
    "Valid (ปกติ)",
    "https://calendar.google.com"
  ],
  [
    "675040009-1",
    "Aung Ko Lat",
    "Non-ED",
    "2026-10-21",
    52,
    "In Progress (กำลังดำเนินการ)",
    "Warning: 60-Day Window",
    "https://calendar.google.com"
  ],
  [
    "685040010-4",
    "Chea Sambath",
    "Non-ED",
    "2027-02-06",
    160,
    "Completed (ต่อเรียบร้อย)",
    "Valid (ปกติ)",
    "https://calendar.google.com"
  ],
  [
    "685040011-7",
    "Nuralam Hossain",
    "Non-ED",
    "2026-09-27",
    28,
    "In Progress (กำลังดำเนินการ)",
    "Warning: 60-Day Window",
    "https://calendar.google.com"
  ],
  [
    "675040012-1",
    "Rina Takahashi",
    "Non-ED",
    "2026-10-21",
    52,
    "In Progress (กำลังดำเนินการ)",
    "Warning: 60-Day Window",
    "https://calendar.google.com"
  ],
  [
    "675040013-4",
    "Kim Min-jun",
    "Non-ED",
    "2026-11-13",
    75,
    "Completed (ต่อเรียบร้อย)",
    "Valid (ปกติ)",
    "https://calendar.google.com"
  ],
  [
    "685040014-7",
    "Vu Thi Huong",
    "Non-ED",
    "2026-09-11",
    12,
    "Not Started (ยังไม่เริ่ม)",
    "CRITICAL: Expiring < 14 Days",
    "https://calendar.google.com"
  ],
  [
    "685040015-1",
    "Zin Mar Oo",
    "Non-ED",
    "2026-10-21",
    52,
    "In Progress (กำลังดำเนินการ)",
    "Warning: 60-Day Window",
    "https://calendar.google.com"
  ],
  [
    "665040016-4",
    "Zhao Lei",
    "Non-ED",
    "2026-09-27",
    28,
    "In Progress (กำลังดำเนินการ)",
    "Warning: 60-Day Window",
    "https://calendar.google.com"
  ],
  [
    "665040017-7",
    "Khamphay Phoumsavanh",
    "Non-ED",
    "2027-03-13",
    195,
    "Completed (ต่อเรียบร้อย)",
    "Valid (ปกติ)",
    "https://calendar.google.com"
  ],
  [
    "685040018-1",
    "Pramod Adhikari",
    "Non-ED",
    "2026-10-21",
    52,
    "In Progress (กำลังดำเนินการ)",
    "Warning: 60-Day Window",
    "https://calendar.google.com"
  ],
  [
    "685040019-4",
    "Ibrahim Bello",
    "Non-ED",
    "2027-03-23",
    205,
    "Completed (ต่อเรียบร้อย)",
    "Valid (ปกติ)",
    "https://calendar.google.com"
  ],
  [
    "675040020-7",
    "Nathalie Cruz",
    "Non-ED",
    "2026-11-13",
    75,
    "Completed (ต่อเรียบร้อย)",
    "Valid (ปกติ)",
    "https://calendar.google.com"
  ],
  [
    "675040021-1",
    "Pich Sovann",
    "Non-ED",
    "2026-09-27",
    28,
    "In Progress (กำลังดำเนินการ)",
    "Warning: 60-Day Window",
    "https://calendar.google.com"
  ],
  [
    "685040022-4",
    "Dinh Quang Huy",
    "Non-ED",
    "2026-09-11",
    12,
    "Not Started (ยังไม่เริ่ม)",
    "CRITICAL: Expiring < 14 Days",
    "https://calendar.google.com"
  ],
  [
    "685040023-7",
    "Kyaw San Lwin",
    "Non-ED",
    "2027-04-12",
    225,
    "Completed (ต่อเรียบร้อย)",
    "Valid (ปกติ)",
    "https://calendar.google.com"
  ],
  [
    "675040024-1",
    "Li Jing",
    "Non-ED",
    "2026-10-21",
    52,
    "In Progress (กำลังดำเนินการ)",
    "Warning: 60-Day Window",
    "https://calendar.google.com"
  ],
  [
    "675040025-4",
    "Abid Ali",
    "Non-ED",
    "2027-04-22",
    235,
    "Completed (ต่อเรียบร้อย)",
    "Valid (ปกติ)",
    "https://calendar.google.com"
  ],
  [
    "675040026-7",
    "Keo Sophal",
    "Non-ED",
    "2026-09-27",
    28,
    "In Progress (กำลังดำเนินการ)",
    "Warning: 60-Day Window",
    "https://calendar.google.com"
  ],
  [
    "675040027-1",
    "Bounmy Saysana",
    "Non-ED",
    "2026-10-21",
    52,
    "In Progress (กำลังดำเนินการ)",
    "Warning: 60-Day Window",
    "https://calendar.google.com"
  ],
  [
    "665040028-4",
    "Tran Duc Anh",
    "Non-ED",
    "2027-05-07",
    250,
    "Completed (ต่อเรียบร้อย)",
    "Valid (ปกติ)",
    "https://calendar.google.com"
  ],
  [
    "665040029-7",
    "Hla Hla Win",
    "Non-ED",
    "2027-05-12",
    255,
    "Completed (ต่อเรียบร้อย)",
    "Valid (ปกติ)",
    "https://calendar.google.com"
  ],
  [
    "685040030-1",
    "Zhang Qian",
    "Non-ED",
    "2026-09-11",
    12,
    "Not Started (ยังไม่เริ่ม)",
    "CRITICAL: Expiring < 14 Days",
    "https://calendar.google.com"
  ],
  [
    "685040031-4",
    "Anurag Shrestha",
    "Non-ED",
    "2026-09-27",
    28,
    "In Progress (กำลังดำเนินการ)",
    "Warning: 60-Day Window",
    "https://calendar.google.com"
  ],
  [
    "675040032-7",
    "Ezekiel Okafor",
    "Non-ED",
    "2027-05-27",
    270,
    "Completed (ต่อเรียบร้อย)",
    "Valid (ปกติ)",
    "https://calendar.google.com"
  ],
  [
    "675040033-1",
    "Kanya Phommasone",
    "Non-ED",
    "2026-10-21",
    52,
    "In Progress (กำลังดำเนินการ)",
    "Warning: 60-Day Window",
    "https://calendar.google.com"
  ],
  [
    "665040034-4",
    "Nguyen Thi Mai",
    "Non-ED",
    "2026-11-13",
    75,
    "Completed (ต่อเรียบร้อย)",
    "Valid (ปกติ)",
    "https://calendar.google.com"
  ],
  [
    "665040035-7",
    "Zaw Min Tun",
    "Non-ED",
    "2027-06-11",
    285,
    "Completed (ต่อเรียบร้อย)",
    "Valid (ปกติ)",
    "https://calendar.google.com"
  ],
  [
    "685040036-1",
    "Liu Yang",
    "Non-ED",
    "2026-09-27",
    28,
    "In Progress (กำลังดำเนินการ)",
    "Warning: 60-Day Window",
    "https://calendar.google.com"
  ],
  [
    "685040037-4",
    "Sophea Chann",
    "Non-ED",
    "2027-06-21",
    295,
    "Completed (ต่อเรียบร้อย)",
    "Valid (ปกติ)",
    "https://calendar.google.com"
  ],
  [
    "675040038-7",
    "Kazi Rahman",
    "Non-ED",
    "2026-09-11",
    12,
    "Not Started (ยังไม่เริ่ม)",
    "CRITICAL: Expiring < 14 Days",
    "https://calendar.google.com"
  ],
  [
    "675040039-1",
    "Thurain Win",
    "Non-ED",
    "2026-10-21",
    52,
    "In Progress (กำลังดำเนินการ)",
    "Warning: 60-Day Window",
    "https://calendar.google.com"
  ],
  [
    "675040040-4",
    "Huang Jie",
    "Non-ED",
    "2027-07-06",
    310,
    "Completed (ต่อเรียบร้อย)",
    "Valid (ปกติ)",
    "https://calendar.google.com"
  ],
  [
    "675040041-7",
    "Le Van Cuong",
    "Non-ED",
    "2026-09-27",
    28,
    "In Progress (กำลังดำเนินการ)",
    "Warning: 60-Day Window",
    "https://calendar.google.com"
  ],
  [
    "685040042-1",
    "Phonethip Sisavath",
    "Non-ED",
    "2026-10-21",
    52,
    "In Progress (กำลังดำเนินการ)",
    "Warning: 60-Day Window",
    "https://calendar.google.com"
  ],
  [
    "685040043-4",
    "Tariq Mahmood",
    "Non-ED",
    "2027-07-21",
    325,
    "Completed (ต่อเรียบร้อย)",
    "Valid (ปกติ)",
    "https://calendar.google.com"
  ],
  [
    "655040044-7",
    "Chen Xiao",
    "Non-ED",
    "2027-07-26",
    330,
    "Completed (ต่อเรียบร้อย)",
    "Valid (ปกติ)",
    "https://calendar.google.com"
  ]
];
const MASTER_SCHOLARSHIP_DATA = [
  [
    "675040001-2",
    "Nguyen Van Minh",
    "KKU Active Recruitment Scholarship (ทุนรับตรง KKU)",
    "Active / Approved",
    1,
    "15,000 THB/Month",
    "Completed (เบิกจ่ายแล้ว)"
  ],
  [
    "685040012-8",
    "Aye Myat Mon",
    "ENKKU Excellence Fellowship (ทุนวิจัยคณะ)",
    "Active",
    1,
    "12,000 THB/Month",
    "Completed (เบิกจ่ายแล้ว)"
  ],
  [
    "665040003-9",
    "Chen Wei",
    "Royal Thai Government Scholarship (ทุนรัฐบาลไทย)",
    "Active",
    2,
    "18,000 THB/Month",
    "Completed (เบิกจ่ายแล้ว)"
  ],
  [
    "685040023-4",
    "Somxay Vongphachanh",
    "None (Self-Funded / ทุนส่วนตัว)",
    "Self-Funded",
    0,
    "0 THB (Self-Funded)",
    "N/A"
  ],
  [
    "675040019-1",
    "Rathana Sok",
    "ASEAN Scholarship (ทุนอาเซียน)",
    "Active",
    2,
    "15,000 THB/Month",
    "Completed (เบิกจ่ายแล้ว)"
  ],
  [
    "685040006-1",
    "Do Hoang Long",
    "KKU Active Recruitment Scholarship (ทุนรับตรง KKU)",
    "Active / Approved",
    1,
    "15,000 THB/Month",
    "Completed (เบิกจ่ายแล้ว)"
  ],
  [
    "685040007-4",
    "Sengchanh Keobouaphanh",
    "ENKKU Excellence Fellowship (ทุนวิจัยคณะ)",
    "Active / Approved",
    4,
    "15,000 THB/Month",
    "Completed (เบิกจ่ายแล้ว)"
  ],
  [
    "675040008-7",
    "Wang Hao",
    "ASEAN Scholarship (ทุนอาเซียน)",
    "Active / Approved",
    3,
    "14,000 THB/Month",
    "Completed (เบิกจ่ายแล้ว)"
  ],
  [
    "675040009-1",
    "Aung Ko Lat",
    "Royal Thai Government Scholarship (ทุนรัฐบาลไทย)",
    "Active / Approved",
    2,
    "18,000 THB/Month",
    "Completed (เบิกจ่ายแล้ว)"
  ],
  [
    "685040010-4",
    "Chea Sambath",
    "None (Self-Funded / ทุนส่วนตัว)",
    "Self-Funded",
    0,
    "0 THB (Self-Funded)",
    "N/A"
  ],
  [
    "685040011-7",
    "Nuralam Hossain",
    "KKU Active Recruitment Scholarship (ทุนรับตรง KKU)",
    "Active / Approved",
    2,
    "15,000 THB/Month",
    "Completed (เบิกจ่ายแล้ว)"
  ],
  [
    "675040012-1",
    "Rina Takahashi",
    "ENKKU Excellence Fellowship (ทุนวิจัยคณะ)",
    "Active / Approved",
    1,
    "15,000 THB/Month",
    "Completed (เบิกจ่ายแล้ว)"
  ],
  [
    "675040013-4",
    "Kim Min-jun",
    "ASEAN Scholarship (ทุนอาเซียน)",
    "Active / Approved",
    0,
    "14,000 THB/Month",
    "Completed (เบิกจ่ายแล้ว)"
  ],
  [
    "685040014-7",
    "Vu Thi Huong",
    "Royal Thai Government Scholarship (ทุนรัฐบาลไทย)",
    "Active / Approved",
    7,
    "18,000 THB/Month",
    "Completed (เบิกจ่ายแล้ว)"
  ],
  [
    "685040015-1",
    "Zin Mar Oo",
    "None (Self-Funded / ทุนส่วนตัว)",
    "Self-Funded",
    0,
    "0 THB (Self-Funded)",
    "N/A"
  ],
  [
    "665040016-4",
    "Zhao Lei",
    "KKU Active Recruitment Scholarship (ทุนรับตรง KKU)",
    "Active / Approved",
    1,
    "15,000 THB/Month",
    "Completed (เบิกจ่ายแล้ว)"
  ],
  [
    "665040017-7",
    "Khamphay Phoumsavanh",
    "ENKKU Excellence Fellowship (ทุนวิจัยคณะ)",
    "Active / Approved",
    0,
    "15,000 THB/Month",
    "Completed (เบิกจ่ายแล้ว)"
  ],
  [
    "685040018-1",
    "Pramod Adhikari",
    "ASEAN Scholarship (ทุนอาเซียน)",
    "Active / Approved",
    1,
    "14,000 THB/Month",
    "Completed (เบิกจ่ายแล้ว)"
  ],
  [
    "685040019-4",
    "Ibrahim Bello",
    "Royal Thai Government Scholarship (ทุนรัฐบาลไทย)",
    "Active / Approved",
    4,
    "18,000 THB/Month",
    "Completed (เบิกจ่ายแล้ว)"
  ],
  [
    "675040020-7",
    "Nathalie Cruz",
    "None (Self-Funded / ทุนส่วนตัว)",
    "Self-Funded",
    0,
    "0 THB (Self-Funded)",
    "N/A"
  ],
  [
    "675040021-1",
    "Pich Sovann",
    "KKU Active Recruitment Scholarship (ทุนรับตรง KKU)",
    "Active / Approved",
    0,
    "15,000 THB/Month",
    "Completed (เบิกจ่ายแล้ว)"
  ],
  [
    "685040022-4",
    "Dinh Quang Huy",
    "ENKKU Excellence Fellowship (ทุนวิจัยคณะ)",
    "Active / Approved",
    3,
    "15,000 THB/Month",
    "Completed (เบิกจ่ายแล้ว)"
  ],
  [
    "685040023-7",
    "Kyaw San Lwin",
    "ASEAN Scholarship (ทุนอาเซียน)",
    "Active / Approved",
    2,
    "14,000 THB/Month",
    "Completed (เบิกจ่ายแล้ว)"
  ],
  [
    "675040024-1",
    "Li Jing",
    "Royal Thai Government Scholarship (ทุนรัฐบาลไทย)",
    "Active / Approved",
    1,
    "18,000 THB/Month",
    "Completed (เบิกจ่ายแล้ว)"
  ],
  [
    "675040025-4",
    "Abid Ali",
    "None (Self-Funded / ทุนส่วนตัว)",
    "Self-Funded",
    0,
    "0 THB (Self-Funded)",
    "N/A"
  ],
  [
    "675040026-7",
    "Keo Sophal",
    "KKU Active Recruitment Scholarship (ทุนรับตรง KKU)",
    "Active / Approved",
    3,
    "15,000 THB/Month",
    "Completed (เบิกจ่ายแล้ว)"
  ],
  [
    "675040027-1",
    "Bounmy Saysana",
    "ENKKU Excellence Fellowship (ทุนวิจัยคณะ)",
    "Active / Approved",
    2,
    "15,000 THB/Month",
    "Completed (เบิกจ่ายแล้ว)"
  ],
  [
    "665040028-4",
    "Tran Duc Anh",
    "ASEAN Scholarship (ทุนอาเซียน)",
    "Active / Approved",
    1,
    "14,000 THB/Month",
    "Completed (เบิกจ่ายแล้ว)"
  ],
  [
    "665040029-7",
    "Hla Hla Win",
    "Royal Thai Government Scholarship (ทุนรัฐบาลไทย)",
    "Active / Approved",
    0,
    "18,000 THB/Month",
    "Completed (เบิกจ่ายแล้ว)"
  ],
  [
    "685040030-1",
    "Zhang Qian",
    "None (Self-Funded / ทุนส่วนตัว)",
    "Self-Funded",
    0,
    "0 THB (Self-Funded)",
    "N/A"
  ],
  [
    "685040031-4",
    "Anurag Shrestha",
    "KKU Active Recruitment Scholarship (ทุนรับตรง KKU)",
    "Active / Approved",
    2,
    "15,000 THB/Month",
    "Completed (เบิกจ่ายแล้ว)"
  ],
  [
    "675040032-7",
    "Ezekiel Okafor",
    "ENKKU Excellence Fellowship (ทุนวิจัยคณะ)",
    "Active / Approved",
    1,
    "15,000 THB/Month",
    "Completed (เบิกจ่ายแล้ว)"
  ],
  [
    "675040033-1",
    "Kanya Phommasone",
    "ASEAN Scholarship (ทุนอาเซียน)",
    "Active / Approved",
    0,
    "14,000 THB/Month",
    "Completed (เบิกจ่ายแล้ว)"
  ],
  [
    "665040034-4",
    "Nguyen Thi Mai",
    "Royal Thai Government Scholarship (ทุนรัฐบาลไทย)",
    "Active / Approved",
    3,
    "18,000 THB/Month",
    "Completed (เบิกจ่ายแล้ว)"
  ],
  [
    "665040035-7",
    "Zaw Min Tun",
    "None (Self-Funded / ทุนส่วนตัว)",
    "Self-Funded",
    0,
    "0 THB (Self-Funded)",
    "N/A"
  ],
  [
    "685040036-1",
    "Liu Yang",
    "KKU Active Recruitment Scholarship (ทุนรับตรง KKU)",
    "Active / Approved",
    1,
    "15,000 THB/Month",
    "Completed (เบิกจ่ายแล้ว)"
  ],
  [
    "685040037-4",
    "Sophea Chann",
    "ENKKU Excellence Fellowship (ทุนวิจัยคณะ)",
    "Active / Approved",
    4,
    "15,000 THB/Month",
    "Completed (เบิกจ่ายแล้ว)"
  ],
  [
    "675040038-7",
    "Kazi Rahman",
    "ASEAN Scholarship (ทุนอาเซียน)",
    "Active / Approved",
    3,
    "14,000 THB/Month",
    "Completed (เบิกจ่ายแล้ว)"
  ],
  [
    "675040039-1",
    "Thurain Win",
    "Royal Thai Government Scholarship (ทุนรัฐบาลไทย)",
    "Active / Approved",
    2,
    "18,000 THB/Month",
    "Completed (เบิกจ่ายแล้ว)"
  ],
  [
    "675040040-4",
    "Huang Jie",
    "None (Self-Funded / ทุนส่วนตัว)",
    "Self-Funded",
    0,
    "0 THB (Self-Funded)",
    "N/A"
  ],
  [
    "675040041-7",
    "Le Van Cuong",
    "KKU Active Recruitment Scholarship (ทุนรับตรง KKU)",
    "Active / Approved",
    0,
    "15,000 THB/Month",
    "Completed (เบิกจ่ายแล้ว)"
  ],
  [
    "685040042-1",
    "Phonethip Sisavath",
    "ENKKU Excellence Fellowship (ทุนวิจัยคณะ)",
    "Active / Approved",
    1,
    "15,000 THB/Month",
    "Completed (เบิกจ่ายแล้ว)"
  ],
  [
    "685040043-4",
    "Tariq Mahmood",
    "ASEAN Scholarship (ทุนอาเซียน)",
    "Active / Approved",
    2,
    "14,000 THB/Month",
    "Completed (เบิกจ่ายแล้ว)"
  ],
  [
    "655040044-7",
    "Chen Xiao",
    "Royal Thai Government Scholarship (ทุนรัฐบาลไทย)",
    "Active / Approved",
    1,
    "18,000 THB/Month",
    "Completed (เบิกจ่ายแล้ว)"
  ]
];
const MASTER_MILESTONES_DATA = [
  [
    "675040001-2",
    "Nguyen Van Minh",
    "Ph.D.",
    "Pass (KKU-AELT / IELTS)",
    "Pending (QE)",
    "Approved",
    "Not Due",
    "Not Due"
  ],
  [
    "685040012-8",
    "Aye Myat Mon",
    "M.Eng.",
    "Pass (KKU-AELT / IELTS)",
    "N/A",
    "Pending",
    "Not Due",
    "Not Due"
  ],
  [
    "665040003-9",
    "Chen Wei",
    "Ph.D.",
    "Pass (KKU-AELT / IELTS)",
    "Completed (QE)",
    "Approved",
    "Not Due",
    "Scopus Q1 Accepted"
  ],
  [
    "685040023-4",
    "Somxay Vongphachanh",
    "B.Eng.",
    "In Progress",
    "N/A",
    "Pending",
    "Not Due",
    "Not Due"
  ],
  [
    "675040019-1",
    "Rathana Sok",
    "Ph.D.",
    "Pass (KKU-AELT / IELTS)",
    "Completed (QE)",
    "Approved",
    "Not Due",
    "Not Due"
  ],
  [
    "685040006-1",
    "Do Hoang Long",
    "Ph.D.",
    "In Progress",
    "Pending (QE)",
    "Pending",
    "Not Due",
    "Not Due"
  ],
  [
    "685040007-4",
    "Sengchanh Keobouaphanh",
    "Ph.D.",
    "Pass (KKU-AELT / IELTS)",
    "Pending (QE)",
    "Pending",
    "Not Due",
    "Not Due"
  ],
  [
    "675040008-7",
    "Wang Hao",
    "Ph.D.",
    "Pass (KKU-AELT / IELTS)",
    "Completed (QE)",
    "Approved",
    "Not Due",
    "Not Due"
  ],
  [
    "675040009-1",
    "Aung Ko Lat",
    "Ph.D.",
    "Pass (KKU-AELT / IELTS)",
    "Pending (QE)",
    "Approved",
    "Not Due",
    "Scopus Q1 Accepted"
  ],
  [
    "685040010-4",
    "Chea Sambath",
    "M.Eng.",
    "In Progress",
    "N/A",
    "Pending",
    "Not Due",
    "Not Due"
  ],
  [
    "685040011-7",
    "Nuralam Hossain",
    "M.Eng.",
    "Pass (KKU-AELT / IELTS)",
    "N/A",
    "Pending",
    "Not Due",
    "Not Due"
  ],
  [
    "675040012-1",
    "Rina Takahashi",
    "M.Eng.",
    "Pass (KKU-AELT / IELTS)",
    "N/A",
    "Approved",
    "Not Due",
    "Not Due"
  ],
  [
    "675040013-4",
    "Kim Min-jun",
    "M.Eng.",
    "Pass (KKU-AELT / IELTS)",
    "N/A",
    "Approved",
    "Not Due",
    "Not Due"
  ],
  [
    "685040014-7",
    "Vu Thi Huong",
    "B.Eng.",
    "In Progress",
    "N/A",
    "Pending",
    "Not Due",
    "Not Due"
  ],
  [
    "685040015-1",
    "Zin Mar Oo",
    "B.Eng.",
    "Pass (KKU-AELT / IELTS)",
    "N/A",
    "Pending",
    "Not Due",
    "Not Due"
  ],
  [
    "665040016-4",
    "Zhao Lei",
    "Ph.D.",
    "Pass (KKU-AELT / IELTS)",
    "Pending (QE)",
    "Approved",
    "Approved",
    "Scopus Q1 Accepted"
  ],
  [
    "665040017-7",
    "Khamphay Phoumsavanh",
    "Ph.D.",
    "Pass (KKU-AELT / IELTS)",
    "Completed (QE)",
    "Approved",
    "Approved",
    "Scopus Q1 Accepted"
  ],
  [
    "685040018-1",
    "Pramod Adhikari",
    "Ph.D.",
    "In Progress",
    "Pending (QE)",
    "Pending",
    "Not Due",
    "Not Due"
  ],
  [
    "685040019-4",
    "Ibrahim Bello",
    "Ph.D.",
    "Pass (KKU-AELT / IELTS)",
    "Pending (QE)",
    "Pending",
    "Not Due",
    "Not Due"
  ],
  [
    "675040020-7",
    "Nathalie Cruz",
    "M.Eng.",
    "Pass (KKU-AELT / IELTS)",
    "N/A",
    "Approved",
    "Not Due",
    "Not Due"
  ],
  [
    "675040021-1",
    "Pich Sovann",
    "M.Eng.",
    "Pass (KKU-AELT / IELTS)",
    "N/A",
    "Approved",
    "Not Due",
    "Not Due"
  ],
  [
    "685040022-4",
    "Dinh Quang Huy",
    "M.Eng.",
    "In Progress",
    "N/A",
    "Pending",
    "Not Due",
    "Not Due"
  ],
  [
    "685040023-7",
    "Kyaw San Lwin",
    "M.Eng.",
    "Pass (KKU-AELT / IELTS)",
    "N/A",
    "Pending",
    "Not Due",
    "Not Due"
  ],
  [
    "675040024-1",
    "Li Jing",
    "B.Eng.",
    "Pass (KKU-AELT / IELTS)",
    "N/A",
    "Approved",
    "Not Due",
    "Not Due"
  ],
  [
    "675040025-4",
    "Abid Ali",
    "B.Eng.",
    "Pass (KKU-AELT / IELTS)",
    "N/A",
    "Approved",
    "Not Due",
    "Not Due"
  ],
  [
    "675040026-7",
    "Keo Sophal",
    "Ph.D.",
    "Pass (KKU-AELT / IELTS)",
    "Pending (QE)",
    "Approved",
    "Not Due",
    "Not Due"
  ],
  [
    "675040027-1",
    "Bounmy Saysana",
    "Ph.D.",
    "Pass (KKU-AELT / IELTS)",
    "Pending (QE)",
    "Approved",
    "Not Due",
    "Scopus Q1 Accepted"
  ],
  [
    "665040028-4",
    "Tran Duc Anh",
    "Ph.D.",
    "Pass (KKU-AELT / IELTS)",
    "Pending (QE)",
    "Approved",
    "Approved",
    "Scopus Q1 Accepted"
  ],
  [
    "665040029-7",
    "Hla Hla Win",
    "Ph.D.",
    "Pass (KKU-AELT / IELTS)",
    "Completed (QE)",
    "Approved",
    "Approved",
    "Scopus Q1 Accepted"
  ],
  [
    "685040030-1",
    "Zhang Qian",
    "M.Eng.",
    "In Progress",
    "N/A",
    "Pending",
    "Not Due",
    "Not Due"
  ],
  [
    "685040031-4",
    "Anurag Shrestha",
    "M.Eng.",
    "Pass (KKU-AELT / IELTS)",
    "N/A",
    "Pending",
    "Not Due",
    "Not Due"
  ],
  [
    "675040032-7",
    "Ezekiel Okafor",
    "M.Eng.",
    "Pass (KKU-AELT / IELTS)",
    "N/A",
    "Approved",
    "Not Due",
    "Not Due"
  ],
  [
    "675040033-1",
    "Kanya Phommasone",
    "M.Eng.",
    "Pass (KKU-AELT / IELTS)",
    "N/A",
    "Approved",
    "Not Due",
    "Not Due"
  ],
  [
    "665040034-4",
    "Nguyen Thi Mai",
    "B.Eng.",
    "Pass (KKU-AELT / IELTS)",
    "N/A",
    "Approved",
    "Approved",
    "Not Due"
  ],
  [
    "665040035-7",
    "Zaw Min Tun",
    "B.Eng.",
    "Pass (KKU-AELT / IELTS)",
    "N/A",
    "Approved",
    "Approved",
    "Not Due"
  ],
  [
    "685040036-1",
    "Liu Yang",
    "Ph.D.",
    "In Progress",
    "Pending (QE)",
    "Pending",
    "Not Due",
    "Not Due"
  ],
  [
    "685040037-4",
    "Sophea Chann",
    "Ph.D.",
    "Pass (KKU-AELT / IELTS)",
    "Pending (QE)",
    "Pending",
    "Not Due",
    "Not Due"
  ],
  [
    "675040038-7",
    "Kazi Rahman",
    "Ph.D.",
    "Pass (KKU-AELT / IELTS)",
    "Pending (QE)",
    "Approved",
    "Not Due",
    "Not Due"
  ],
  [
    "675040039-1",
    "Thurain Win",
    "Ph.D.",
    "Pass (KKU-AELT / IELTS)",
    "Pending (QE)",
    "Approved",
    "Not Due",
    "Scopus Q1 Accepted"
  ],
  [
    "675040040-4",
    "Huang Jie",
    "M.Eng.",
    "Pass (KKU-AELT / IELTS)",
    "N/A",
    "Approved",
    "Not Due",
    "Not Due"
  ],
  [
    "675040041-7",
    "Le Van Cuong",
    "M.Eng.",
    "Pass (KKU-AELT / IELTS)",
    "N/A",
    "Approved",
    "Not Due",
    "Not Due"
  ],
  [
    "685040042-1",
    "Phonethip Sisavath",
    "M.Eng.",
    "In Progress",
    "N/A",
    "Pending",
    "Not Due",
    "Not Due"
  ],
  [
    "685040043-4",
    "Tariq Mahmood",
    "M.Eng.",
    "Pass (KKU-AELT / IELTS)",
    "N/A",
    "Pending",
    "Not Due",
    "Not Due"
  ],
  [
    "655040044-7",
    "Chen Xiao",
    "B.Eng.",
    "Pass (KKU-AELT / IELTS)",
    "N/A",
    "Approved",
    "Approved",
    "Not Due"
  ]
];

function initializeEngitrackSheets() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();

  // 1. Students_Master (44 Students)
  createOrUpdateSheet(ss, TAB_STUDENTS, [
    "Student ID", "Full Name", "Nationality", "Country Code", "Degree",
    "Major (EN)", "Major (TH)", "Semester", "Entry Date", "GPA",
    "KKU Email", "Main Advisor", "Co-Advisor", "Enrollment Status 1/2026",
    "Overall Risk Score", "Risk Level"
  ], MASTER_STUDENTS_DATA);

  // 2. Thesis_Records
  createOrUpdateSheet(ss, TAB_THESIS, [
    "Student ID", "Full Name", "Degree", "Thesis Title (English)", "ชื่อวิทยานิพนธ์ (ภาษาไทย)",
    "Main Advisor", "Co-Advisor", "Status"
  ], MASTER_THESIS_DATA);

  // 3. Visa_Tracking
  createOrUpdateSheet(ss, TAB_VISA, [
    "Student ID", "Full Name", "Visa Type", "Expiry Date", "Days Remaining",
    "Renewal Status", "Immigration Alert", "Google Calendar Sync URL"
  ], MASTER_VISA_DATA);

  // 4. Scholarship_Ledger
  createOrUpdateSheet(ss, TAB_SCHOLARSHIP, [
    "Student ID", "Full Name", "Scholarship Name", "Status", "Remaining Semesters",
    "Monthly Allowance", "Disbursement Status"
  ], MASTER_SCHOLARSHIP_DATA);

  // 5. Academic_Milestones
  createOrUpdateSheet(ss, TAB_MILESTONES, [
    "Student ID", "Full Name", "Degree", "English Exam Status", "QE Exam Status",
    "Proposal Defense Status", "Final Defense Status", "Journal Publication Status"
  ], MASTER_MILESTONES_DATA);

  // 6. HelpDesk_Tickets
  createOrUpdateSheet(ss, TAB_HELPDESK, [
    "Ticket ID", "Student ID", "Student Name", "Category", "Subject",
    "Description", "Status", "Submitted Date", "Officer Response"
  ], [
    [
      "TICK-2026-001", "675040001-2", "Nguyen Van Minh", "Visa & Immigration",
      "Request for Faculty Endorsement Letter for Non-ED Visa Extension",
      "Need official endorsement letter for Immigration Office Khon Kaen before Sept 10.",
      "In Review", "2026-08-28 10:30", "Letter is being processed at Room EN01."
    ],
    [
      "TICK-2026-002", "685040012-8", "Aye Myat Mon", "Academic & Advisor",
      "Scheduling Proposal Defense with Co-Advisor",
      "Requesting assistance to coordinate an online defense room with my co-advisor in Bangkok.",
      "Resolved", "2026-08-20 14:15", "Zoom link and Room EN04-402 booked for September 5th at 10:00 AM."
    ]
  ]);

  // 7. Officer_Case_Notes
  createOrUpdateSheet(ss, TAB_NOTES, [
    "Note ID", "Student ID", "Note Content", "Priority", "Officer", "Timestamp"
  ], [
    [
      "NOTE-001", "675040001-2", "Followed up with student regarding field data collection and QE schedule.",
      "High", "EN01 Officer", "2026-08-20 14:00"
    ]
  ]);

  SpreadsheetApp.flush();
}

function createOrUpdateSheet(ss, name, headers, rows) {
  let sheet = ss.getSheetByName(name);
  if (!sheet) {
    sheet = ss.insertSheet(name);
  }
  sheet.clear();

  const headerRange = sheet.getRange(1, 1, 1, headers.length);
  headerRange.setValues([headers]);
  headerRange.setBackground("#6b0d1e");
  headerRange.setFontColor("#ffffff");
  headerRange.setFontWeight("bold");
  headerRange.setHorizontalAlignment("center");

  if (rows && rows.length > 0) {
    const dataRange = sheet.getRange(2, 1, rows.length, headers.length);
    dataRange.setValues(rows);
    dataRange.setFontFamily("Plus Jakarta Sans");
    dataRange.setFontSize(10);
  }

  sheet.setFrozenRows(1);
  for (let c = 1; c <= headers.length; c++) {
    sheet.autoResizeColumn(c);
  }
}

function doGet(e) {
  try {
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const studentsSheet = ss.getSheetByName(TAB_STUDENTS);
    const thesisSheet = ss.getSheetByName(TAB_THESIS);
    const visaSheet = ss.getSheetByName(TAB_VISA);
    const schSheet = ss.getSheetByName(TAB_SCHOLARSHIP);
    const milesSheet = ss.getSheetByName(TAB_MILESTONES);

    const studentsData = getSheetRowsAsJson(studentsSheet);
    const thesisData = getSheetRowsAsJson(thesisSheet);
    const visaData = getSheetRowsAsJson(visaSheet);
    const schData = getSheetRowsAsJson(schSheet);
    const milesData = getSheetRowsAsJson(milesSheet);

    const payload = {
      status: "success",
      timestamp: new Date().toISOString(),
      counts: studentsData.length,
      data: {
        students: studentsData,
        thesis: thesisData,
        visa: visaData,
        scholarships: schData,
        milestones: milesData
      }
    };

    return ContentService
      .createTextOutput(JSON.stringify(payload))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ status: "error", message: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doPost(e) {
  try {
    const body = JSON.parse(e.postData.contents);
    const action = body.action;
    const ss = SpreadsheetApp.getActiveSpreadsheet();

    if (action === "submit_ticket") {
      const sheet = ss.getSheetByName(TAB_HELPDESK);
      const ticket = body.ticket;
      sheet.appendRow([
        ticket.id, ticket.studentId, ticket.studentName, ticket.category,
        ticket.subject, ticket.description, ticket.status, ticket.date, ticket.response
      ]);
    } else if (action === "add_note") {
      const sheet = ss.getSheetByName(TAB_NOTES);
      sheet.appendRow([
        `NOTE-${Date.now()}`, body.studentId, body.note, "Normal", "Officer", new Date().toISOString()
      ]);
    }

    return ContentService
      .createTextOutput(JSON.stringify({ status: "success", message: "Record updated successfully" }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ status: "error", message: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function getSheetRowsAsJson(sheet) {
  if (!sheet) return [];
  const data = sheet.getDataRange().getValues();
  if (data.length <= 1) return [];

  const headers = data[0];
  const rows = [];

  for (let i = 1; i < data.length; i++) {
    const rowObj = {};
    for (let h = 0; h < headers.length; h++) {
      rowObj[headers[h]] = data[i][h];
    }
    rows.push(rowObj);
  }

  return rows;
}
