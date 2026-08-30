# Script to generate 44-student CSV and Google Apps Script Code with full 44 rows
import json
import datetime

THESIS_TOPICS = [
    {
      'titleEn': 'HYBRID SELF REGENERATION ION EXCHANGE AND REVERSE OSMOSIS (HSIX-RO) FOR DESALINATION OF HIGH HARDNESS GROUNDWATER',
      'titleTh': 'ระบบผสมผสานแลกเปลี่ยนประจุที่สามารถฟื้นฟูสภาพด้วยตัวเองและรีเวิร์สออสโมซิส (HSIX-RO) สำหรับการกำจัดเกลือในน้ำใต้ดินกระด้าง'
    },
    {
      'titleEn': 'DEEP LEARNING-BASED EDGE VISION SYSTEM FOR REAL-TIME FAULT DETECTION IN AUTOMATED MANUFACTURING',
      'titleTh': 'ระบบประมวลผลภาพบนเอดจ์ด้วยการเรียนรู้เชิงลึกเพื่อการตรวจจับข้อผิดพลาดแบบเรียลไทม์ในสายการผลิตอัตโนมัติ'
    },
    {
      'titleEn': 'OPTIMAL DISPATCH AND VOLTAGE STABILITY OF MICROGRIDS WITH HIGH-PENETRATION RENEWABLE ENERGY SOURCES',
      'titleTh': 'การจ่ายโหลดที่เหมาะสมและความเสถียรของแรงดันไฟฟ้าสำหรับไมโครกริดที่มีการเชื่อมต่อพลังงานหมุนเวียนสัดส่วนสูง'
    },
    {
      'titleEn': 'ANAEROBIC CO-DIGESTION OF FOOD WASTE AND AGRICULTURAL RESIDUES FOR ENHANCED BIOMETHANE PRODUCTION',
      'titleTh': 'การหมักไร้อากาศร่วมระหว่างเศษอาหารและกากเหลือทางการเกษตรเพื่อเพิ่มประสิทธิภาพการผลิตก๊าซชีวภาพมีเทน'
    },
    {
      'titleEn': 'APPLICATION OF GEOPOLYMER CONCRETE WITH INDUSTRIAL SLAG REPLACEMENT FOR SUSTAINABLE PAVEMENT INFRASTRUCTURE',
      'titleTh': 'การประยุกต์ใช้คอนกรีตจีโอโพลิเมอร์ผสมกากตะกรันอุตสาหกรรมสำหรับโครงสร้างพื้นฐานถนนคอนกรีตอย่างยั่งยืน'
    },
    {
      'titleEn': 'PREDICTIVE MAINTENANCE OF INDUSTRIAL MOTORS USING MULTI-SENSOR FUSION AND DIGITAL TWIN MODELING',
      'titleTh': 'การบำรุงรักษาเชิงคาดการณ์ของมอเตอร์อุตสาหกรรมโดยใช้การผสานข้อมูลหลายเซนเซอร์และการสร้างแบบจำลองดิจิทัลทวิน'
    },
    {
      'titleEn': 'REINFORCEMENT LEARNING FOR AUTONOMOUS MOBILE ROBOT NAVIGATION IN DENSE AGRICULTURAL ENVIRONMENTS',
      'titleTh': 'การเรียนรู้แบบเสริมกำลังสำหรับการนำทางหุ่นยนต์เคลื่อนที่อัตโนมัติในสภาพแวดล้อมพื้นที่เกษตรกรรมหนาแน่น'
    },
    {
      'titleEn': 'ADSORPTION AND CATALYTIC DEGRADATION OF PER- AND POLYFLUOROALKYL SUBSTANCES (PFAS) IN WATER MATRICES',
      'titleTh': 'การดูดซับและการย่อยสลายด้วยตัวเร่งปฏิกิริยาของสารกลุ่มเพอร์และโพลีฟลูออโรอัลคิล (PFAS) ในระบบบำบัดน้ำ'
    }
]

RAW_SYNTHETIC_STUDENTS = [
  { 'id': '675040001-2', 'name': 'Nguyen Van Minh', 'country': 'Vietnam (เวียดนาม)', 'countryClean': 'Vietnam', 'code': 'VN', 'degree': 'Ph.D.', 'majorEn': 'Computer Engineering', 'majorTh': 'วิศวกรรมคอมพิวเตอร์', 'semester': 3, 'gpa': 3.65, 'mainAdv': 'Assoc. Prof. Dr. Thanate Chaichana', 'coAdv': 'Dr. Natthaphol Sukumal', 'sch': 'KKU Active Recruitment Scholarship (ทุนรับตรง KKU)', 'schStat': 'Active / Approved', 'schRem': 1, 'schAmt': '15,000 THB/Month', 'visaDays': 18, 'visaExp': '2026-09-16', 'visaStat': 'Not Started', 'riskScore': 72, 'riskLvl': 'Critical (วิกฤต)', 'enroll': 'รักษาสภาพ (Maintain) ใน 1/2026', 'thesis': THESIS_TOPICS[0] },
  { 'id': '685040012-8', 'name': 'Aye Myat Mon', 'country': 'Myanmar (เมียนมา)', 'countryClean': 'Myanmar', 'code': 'MM', 'degree': 'M.Eng.', 'majorEn': 'Digital and AI Innovation Engineering', 'majorTh': 'วิศวกรรมนวัตกรรมดิจิทัลและปัญญาประดิษฐ์', 'semester': 2, 'gpa': 3.42, 'mainAdv': 'Dr. Natthaphol Sukumal', 'coAdv': 'Assoc. Prof. Dr. Thanate Chaichana', 'sch': 'ENKKU Excellence Fellowship (ทุนวิจัยคณะ)', 'schStat': 'Active', 'schRem': 1, 'schAmt': '12,000 THB/Month', 'visaDays': 47, 'visaExp': '2026-10-15', 'visaStat': 'In Progress', 'riskScore': 48, 'riskLvl': 'Warning (ต้องติดตาม)', 'enroll': 'ลงทะเบียน (Enroll) ใน 1/2026', 'thesis': THESIS_TOPICS[1] },
  { 'id': '665040003-9', 'name': 'Chen Wei', 'country': 'China (จีน)', 'countryClean': 'China', 'code': 'CN', 'degree': 'Ph.D.', 'majorEn': 'Electrical Engineering', 'majorTh': 'วิศวกรรมไฟฟ้า', 'semester': 4, 'gpa': 3.88, 'mainAdv': 'Assoc. Prof. Dr. Wanida Ratanapan', 'coAdv': 'Dr. Sarawut Prasert', 'sch': 'Royal Thai Government Scholarship (ทุนรัฐบาลไทย)', 'schStat': 'Active', 'schRem': 2, 'schAmt': '18,000 THB/Month', 'visaDays': 142, 'visaExp': '2027-01-18', 'visaStat': 'Completed', 'riskScore': 18, 'riskLvl': 'Normal (ปกติ)', 'enroll': 'ลาพักการเรียน (Semester Leave) ใน 1/2026', 'thesis': THESIS_TOPICS[2] },
  { 'id': '685040023-4', 'name': 'Somxay Vongphachanh', 'country': 'Laos (ลาว)', 'countryClean': 'Laos', 'code': 'LA', 'degree': 'B.Eng.', 'majorEn': 'Chemical Engineering', 'majorTh': 'วิศวกรรมเคมี', 'semester': 1, 'gpa': 3.15, 'mainAdv': 'Asst. Prof. Dr. Pattaraporn Posoknistakul', 'coAdv': 'Assoc. Prof. Dr. Thanate Chaichana', 'sch': 'None (Self-Funded / ทุนส่วนตัว)', 'schStat': 'Self-Funded', 'schRem': 0, 'schAmt': '0 THB (Self-Funded)', 'visaDays': 210, 'visaExp': '2027-03-27', 'visaStat': 'Completed', 'riskScore': 10, 'riskLvl': 'Normal (ปกติ)', 'enroll': 'ลงทะเบียน (Enroll) ใน 1/2026', 'thesis': THESIS_TOPICS[3] },
  { 'id': '675040019-1', 'name': 'Rathana Sok', 'country': 'Cambodia (กัมพูชา)', 'countryClean': 'Cambodia', 'code': 'KH', 'degree': 'Ph.D.', 'majorEn': 'Civil Engineering', 'majorTh': 'วิศวกรรมโยธา', 'semester': 3, 'gpa': 3.50, 'mainAdv': 'Assoc. Prof. Dr. Thanate Chaichana', 'coAdv': 'Dr. Sarawut Prasert', 'sch': 'ASEAN Scholarship (ทุนอาเซียน)', 'schStat': 'Active', 'schRem': 2, 'schAmt': '15,000 THB/Month', 'visaDays': 55, 'visaExp': '2026-10-23', 'visaStat': 'In Progress', 'riskScore': 35, 'riskLvl': 'Monitor (เฝ้าระวัง)', 'enroll': 'รักษาสภาพ (Maintain) ใน 1/2026', 'thesis': THESIS_TOPICS[4] }
]

sampleNames = [
    ('Do Hoang Long', 'Vietnam (เวียดนาม)', 'Vietnam', 'VN', 'm'),
    ('Sengchanh Keobouaphanh', 'Laos (ลาว)', 'Laos', 'LA', 'm'),
    ('Wang Hao', 'China (จีน)', 'China', 'CN', 'm'),
    ('Aung Ko Lat', 'Myanmar (เมียนมา)', 'Myanmar', 'MM', 'm'),
    ('Chea Sambath', 'Cambodia (กัมพูชา)', 'Cambodia', 'KH', 'm'),
    ('Nuralam Hossain', 'Bangladesh (บังกลาเทศ)', 'Bangladesh', 'BD', 'm'),
    ('Rina Takahashi', 'Japan (ญี่ปุ่น)', 'Japan', 'JP', 'f'),
    ('Kim Min-jun', 'South Korea (เกาหลีใต้)', 'South Korea', 'KR', 'm'),
    ('Vu Thi Huong', 'Vietnam (เวียดนาม)', 'Vietnam', 'VN', 'f'),
    ('Zin Mar Oo', 'Myanmar (เมียนมา)', 'Myanmar', 'MM', 'f'),
    ('Zhao Lei', 'China (จีน)', 'China', 'CN', 'm'),
    ('Khamphay Phoumsavanh', 'Laos (ลาว)', 'Laos', 'LA', 'm'),
    ('Pramod Adhikari', 'Nepal (เนปาล)', 'Nepal', 'NP', 'm'),
    ('Ibrahim Bello', 'Nigeria (ไนจีเรีย)', 'Nigeria', 'NG', 'm'),
    ('Nathalie Cruz', 'Philippines (ฟิลิปปินส์)', 'Philippines', 'PH', 'f'),
    ('Pich Sovann', 'Cambodia (กัมพูชา)', 'Cambodia', 'KH', 'm'),
    ('Dinh Quang Huy', 'Vietnam (เวียดนาม)', 'Vietnam', 'VN', 'm'),
    ('Kyaw San Lwin', 'Myanmar (เมียนมา)', 'Myanmar', 'MM', 'm'),
    ('Li Jing', 'China (จีน)', 'China', 'CN', 'f'),
    ('Abid Ali', 'Pakistan (ปากีสถาน)', 'Pakistan', 'PK', 'm'),
    ('Keo Sophal', 'Cambodia (กัมพูชา)', 'Cambodia', 'KH', 'm'),
    ('Bounmy Saysana', 'Laos (ลาว)', 'Laos', 'LA', 'm'),
    ('Tran Duc Anh', 'Vietnam (เวียดนาม)', 'Vietnam', 'VN', 'm'),
    ('Hla Hla Win', 'Myanmar (เมียนมา)', 'Myanmar', 'MM', 'f'),
    ('Zhang Qian', 'China (จีน)', 'China', 'CN', 'f'),
    ('Anurag Shrestha', 'Nepal (เนปาล)', 'Nepal', 'NP', 'm'),
    ('Ezekiel Okafor', 'Nigeria (ไนจีเรีย)', 'Nigeria', 'NG', 'm'),
    ('Kanya Phommasone', 'Laos (ลาว)', 'Laos', 'LA', 'f'),
    ('Nguyen Thi Mai', 'Vietnam (เวียดนาม)', 'Vietnam', 'VN', 'f'),
    ('Zaw Min Tun', 'Myanmar (เมียนมา)', 'Myanmar', 'MM', 'm'),
    ('Liu Yang', 'China (จีน)', 'China', 'CN', 'm'),
    ('Sophea Chann', 'Cambodia (กัมพูชา)', 'Cambodia', 'KH', 'f'),
    ('Kazi Rahman', 'Bangladesh (บังกลาเทศ)', 'Bangladesh', 'BD', 'm'),
    ('Thurain Win', 'Myanmar (เมียนมา)', 'Myanmar', 'MM', 'm'),
    ('Huang Jie', 'China (จีน)', 'China', 'CN', 'm'),
    ('Le Van Cuong', 'Vietnam (เวียดนาม)', 'Vietnam', 'VN', 'm'),
    ('Phonethip Sisavath', 'Laos (ลาว)', 'Laos', 'LA', 'f'),
    ('Tariq Mahmood', 'Pakistan (ปากีสถาน)', 'Pakistan', 'PK', 'm'),
    ('Chen Xiao', 'China (จีน)', 'China', 'CN', 'f')
]

KKU_PROGRAMS = [
    { 'degree': 'Ph.D.', 'majorEn': 'Computer Engineering', 'majorTh': 'วิศวกรรมคอมพิวเตอร์', 'semLimit': 6 },
    { 'degree': 'Ph.D.', 'majorEn': 'Chemical Engineering', 'majorTh': 'วิศวกรรมเคมี', 'semLimit': 6 },
    { 'degree': 'Ph.D.', 'majorEn': 'Electrical Engineering', 'majorTh': 'วิศวกรรมไฟฟ้า', 'semLimit': 6 },
    { 'degree': 'Ph.D.', 'majorEn': 'Civil Engineering', 'majorTh': 'วิศวกรรมโยธา', 'semLimit': 6 },
    { 'degree': 'M.Eng.', 'majorEn': 'Digital and AI Innovation Engineering', 'majorTh': 'วิศวกรรมนวัตกรรมดิจิทัลและปัญญาประดิษฐ์', 'semLimit': 4 },
    { 'degree': 'M.Eng.', 'majorEn': 'Industrial Engineering', 'majorTh': 'วิศวกรรมอุตสาหการ', 'semLimit': 4 },
    { 'degree': 'M.Eng.', 'majorEn': 'Mechanical Engineering', 'majorTh': 'วิศวกรรมเครื่องกล', 'semLimit': 4 },
    { 'degree': 'M.Eng.', 'majorEn': 'Environmental Engineering', 'majorTh': 'วิศวกรรมสิ่งแวดล้อม', 'semLimit': 4 },
    { 'degree': 'B.Eng.', 'majorEn': 'Telecommunications Engineering', 'majorTh': 'วิศวกรรมโทรคมนาคม', 'semLimit': 8 },
    { 'degree': 'B.Eng.', 'majorEn': 'Chemical Engineering', 'majorTh': 'วิศวกรรมเคมี', 'semLimit': 8 }
]

ADVISORS_POOL = [
    'Assoc. Prof. Dr. Thanate Chaichana',
    'Dr. Natthaphol Sukumal',
    'Assoc. Prof. Dr. Wanida Ratanapan',
    'Asst. Prof. Dr. Pattaraporn Posoknistakul',
    'Dr. Sarawut Prasert'
]

scholarships = [
    'KKU Active Recruitment Scholarship (ทุนรับตรง KKU)',
    'ENKKU Excellence Fellowship (ทุนวิจัยคณะ)',
    'ASEAN Scholarship (ทุนอาเซียน)',
    'Royal Thai Government Scholarship (ทุนรัฐบาลไทย)',
    'None (Self-Funded / ทุนส่วนตัว)'
]

all_students = []
for s in RAW_SYNTHETIC_STUDENTS:
    all_students.append(s)

idCounter = 6
for idx, p in enumerate(sampleNames):
    if len(all_students) >= 44:
        break
    prog = KKU_PROGRAMS[idx % len(KKU_PROGRAMS)]
    if prog['degree'] == 'Ph.D.':
        sem = (idx % 6) + 1
    elif prog['degree'] == 'M.Eng.':
        sem = (idx % 4) + 1
    else:
        sem = (idx % 8) + 1

    if idx % 8 == 0:
        visaDays = 12
        visaStat = 'Not Started (ยังไม่เริ่ม)'
    elif idx % 5 == 0:
        visaDays = 28
        visaStat = 'In Progress (กำลังดำเนินการ)'
    elif idx % 3 == 0:
        visaDays = 52
        visaStat = 'In Progress (กำลังดำเนินการ)'
    elif idx % 7 == 0:
        visaDays = 75
        visaStat = 'Completed (ต่อเรียบร้อย)'
    else:
        visaDays = 140 + idx * 5
        visaStat = 'Completed (ต่อเรียบร้อย)'

    expiryDate = (datetime.date.today() + datetime.timedelta(days=visaDays)).strftime('%Y-%m-%d')
    schType = scholarships[idx % len(scholarships)]
    remSch = max(0, prog['semLimit'] - sem) if 'None' not in schType else 0
    if idx % 6 == 0 and 'None' not in schType:
        remSch = 1
    schAmt = '15,000 THB/Month' if 'KKU' in schType else ('12,000 THB/Month' if 'ENKKU' in schType else ('18,000 THB/Month' if 'Royal' in schType else ('14,000 THB/Month' if 'ASEAN' in schType else '0 THB (Self-Funded)')))

    mainAdv = ADVISORS_POOL[idx % len(ADVISORS_POOL)]
    coAdv = ADVISORS_POOL[(idx + 3) % len(ADVISORS_POOL)]

    studYear = 2026 - (sem // 2)
    studId = f'{68 - ((sem - 1) // 2)}50400{str(idCounter).zfill(2)}-{(idCounter * 3) % 9 + 1}'
    idCounter += 1

    thesisTopic = THESIS_TOPICS[idx % len(THESIS_TOPICS)]
    if idx % 6 == 0 or sem >= (5 if prog['degree'] == 'Ph.D.' else 4):
        enrollStat = 'รักษาสภาพ (Maintain) ใน 1/2026'
    elif idx % 9 == 0:
        enrollStat = 'ลาพักการเรียน (Semester Leave) ใน 1/2026'
    else:
        enrollStat = 'ลงทะเบียน (Enroll) ใน 1/2026'

    gpa = round(3.0 + (idx % 10) * 0.09, 2)
    riskScore = 15
    if visaDays <= 30: riskScore += 35
    elif visaDays <= 60: riskScore += 20
    if remSch == 1: riskScore += 25
    if gpa < 3.25: riskScore += 20
    if sem >= 3 and prog['degree'] == 'Ph.D.' and idx % 3 == 0: riskScore += 20

    if riskScore >= 70: riskLvl = 'Critical (วิกฤต)'
    elif riskScore >= 45: riskLvl = 'Warning (ต้องติดตาม)'
    elif riskScore >= 25: riskLvl = 'Monitor (เฝ้าระวัง)'
    else: riskLvl = 'Normal (ปกติ)'

    all_students.append({
        'id': studId,
        'name': p[0],
        'country': p[1],
        'countryClean': p[2],
        'code': p[3],
        'degree': prog['degree'],
        'majorEn': prog['majorEn'],
        'majorTh': prog['majorTh'],
        'semester': sem,
        'gpa': gpa,
        'mainAdv': mainAdv,
        'coAdv': coAdv,
        'sch': schType,
        'schStat': 'Active / Approved' if 'None' not in schType else 'Self-Funded',
        'schRem': remSch,
        'schAmt': schAmt,
        'visaDays': visaDays,
        'visaExp': expiryDate,
        'visaStat': visaStat,
        'riskScore': min(100, riskScore),
        'riskLvl': riskLvl,
        'enroll': enrollStat,
        'thesis': thesisTopic
    })

print(f'Total students processed: {len(all_students)}')

# 1. Generate Full Master CSV
csv_headers = [
    'Student ID', 'Full Name', 'Nationality', 'Country', 'Degree', 'Major (EN)', 'Major (TH)',
    'Semester', 'GPA', 'KKU Email', 'Main Advisor', 'Co-Advisor',
    'Thesis Title (EN)', 'ชื่อวิทยานิพนธ์ (TH)', 'Enrollment Status 1/2026',
    'Visa Type', 'Visa Expiry Date', 'Visa Days Remaining', 'Visa Status',
    'Scholarship Name', 'Scholarship Status', 'Remaining Semesters', 'Monthly Allowance',
    'English Exam Status', 'QE Exam Status', 'Proposal Defense Status', 'Final Defense Status', 'Journal Publication Status',
    'Risk Score', 'Risk Level'
]

csv_lines = ['\ufeff' + ','.join([f'"{h}"' for h in csv_headers])]
for s in all_students:
    email = s['name'].lower().replace(' ', '.') + '@kkumail.com'
    engExam = 'Pass (KKU-AELT / IELTS)' if s['semester'] >= 2 else 'In Progress'
    qeExam = 'Completed (QE)' if s['degree'] == 'Ph.D.' and s['semester'] >= 3 and s['riskScore'] < 50 else ('Pending (QE)' if s['degree'] == 'Ph.D.' else 'N/A')
    propExam = 'Approved' if s['semester'] >= 3 else 'Pending'
    defExam = 'Approved' if s['semester'] >= 5 else 'Not Due'
    pubExam = 'Scopus Q1 Accepted' if s['semester'] >= 4 and s['degree'] == 'Ph.D.' else 'Not Due'

    row = [
        s['id'], s['name'], s['country'], s['countryClean'], s['degree'], s['majorEn'], s['majorTh'],
        str(s['semester']), f"{s['gpa']:.2f}", email, s['mainAdv'], s['coAdv'],
        s['thesis']['titleEn'], s['thesis']['titleTh'], s['enroll'],
        'Non-ED', s['visaExp'], str(s['visaDays']), s['visaStat'],
        s['sch'], s['schStat'], str(s['schRem']), s['schAmt'],
        engExam, qeExam, propExam, defExam, pubExam,
        str(s['riskScore']), s['riskLvl']
    ]
    csv_lines.append(','.join([f'"{str(x).replace(chr(34), chr(34)+chr(34))}"' for x in row]))

with open('ENGiTRACK_Google_Sheets_Master_44_Students.csv', 'w', encoding='utf-8') as f:
    f.write('\n'.join(csv_lines))

print('Saved ENGiTRACK_Google_Sheets_Master_44_Students.csv')

# 2. Build full google_apps_script.js with all 44 rows embedded
gas_students_rows = []
gas_thesis_rows = []
gas_visa_rows = []
gas_sch_rows = []
gas_milestones_rows = []

for s in all_students:
    email = s['name'].lower().replace(' ', '.') + '@kkumail.com'
    engExam = 'Pass (KKU-AELT / IELTS)' if s['semester'] >= 2 else 'In Progress'
    qeExam = 'Completed (QE)' if s['degree'] == 'Ph.D.' and s['semester'] >= 3 and s['riskScore'] < 50 else ('Pending (QE)' if s['degree'] == 'Ph.D.' else 'N/A')
    propExam = 'Approved' if s['semester'] >= 3 else 'Pending'
    defExam = 'Approved' if s['semester'] >= 5 else 'Not Due'
    pubExam = 'Scopus Q1 Accepted' if s['semester'] >= 4 and s['degree'] == 'Ph.D.' else 'Not Due'

    # Students Master
    gas_students_rows.append([
        s['id'], s['name'], s['country'], s['code'], s['degree'],
        s['majorEn'], s['majorTh'], s['semester'], f"{2026 - (s['semester']//2)}-06-15", s['gpa'],
        email, s['mainAdv'], s['coAdv'], s['enroll'],
        s['riskScore'], s['riskLvl']
    ])

    # Thesis Records
    gas_thesis_rows.append([
        s['id'], s['name'], s['degree'], s['thesis']['titleEn'], s['thesis']['titleTh'],
        s['mainAdv'], s['coAdv'], propExam
    ])

    # Visa Tracking
    alertText = 'CRITICAL: Expiring < 14 Days' if s['visaDays'] <= 14 else ('Warning: 60-Day Window' if s['visaDays'] <= 60 else 'Valid (ปกติ)')
    gas_visa_rows.append([
        s['id'], s['name'], 'Non-ED', s['visaExp'], s['visaDays'],
        s['visaStat'], alertText, 'https://calendar.google.com'
    ])

    # Scholarship Ledger
    gas_sch_rows.append([
        s['id'], s['name'], s['sch'], s['schStat'], s['schRem'],
        s['schAmt'], 'Completed (เบิกจ่ายแล้ว)' if 'Active' in s['schStat'] else 'N/A'
    ])

    # Milestones
    gas_milestones_rows.append([
        s['id'], s['name'], s['degree'], engExam, qeExam, propExam, defExam, pubExam
    ])

gas_template = f"""/**
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

const MASTER_STUDENTS_DATA = {json.dumps(gas_students_rows, ensure_ascii=False, indent=2)};
const MASTER_THESIS_DATA = {json.dumps(gas_thesis_rows, ensure_ascii=False, indent=2)};
const MASTER_VISA_DATA = {json.dumps(gas_visa_rows, ensure_ascii=False, indent=2)};
const MASTER_SCHOLARSHIP_DATA = {json.dumps(gas_sch_rows, ensure_ascii=False, indent=2)};
const MASTER_MILESTONES_DATA = {json.dumps(gas_milestones_rows, ensure_ascii=False, indent=2)};

function initializeEngitrackSheets() {{
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
}}

function createOrUpdateSheet(ss, name, headers, rows) {{
  let sheet = ss.getSheetByName(name);
  if (!sheet) {{
    sheet = ss.insertSheet(name);
  }}
  sheet.clear();

  const headerRange = sheet.getRange(1, 1, 1, headers.length);
  headerRange.setValues([headers]);
  headerRange.setBackground("#6b0d1e");
  headerRange.setFontColor("#ffffff");
  headerRange.setFontWeight("bold");
  headerRange.setHorizontalAlignment("center");

  if (rows && rows.length > 0) {{
    const dataRange = sheet.getRange(2, 1, rows.length, headers.length);
    dataRange.setValues(rows);
    dataRange.setFontFamily("Plus Jakarta Sans");
    dataRange.setFontSize(10);
  }}

  sheet.setFrozenRows(1);
  for (let c = 1; c <= headers.length; c++) {{
    sheet.autoResizeColumn(c);
  }}
}}

function doGet(e) {{
  try {{
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

    const payload = {{
      status: "success",
      timestamp: new Date().toISOString(),
      counts: studentsData.length,
      data: {{
        students: studentsData,
        thesis: thesisData,
        visa: visaData,
        scholarships: schData,
        milestones: milesData
      }}
    }};

    return ContentService
      .createTextOutput(JSON.stringify(payload))
      .setMimeType(ContentService.MimeType.JSON);
  }} catch (err) {{
    return ContentService
      .createTextOutput(JSON.stringify({{ status: "error", message: err.toString() }}))
      .setMimeType(ContentService.MimeType.JSON);
  }}
}}

function doPost(e) {{
  try {{
    const body = JSON.parse(e.postData.contents);
    const action = body.action;
    const ss = SpreadsheetApp.getActiveSpreadsheet();

    if (action === "submit_ticket") {{
      const sheet = ss.getSheetByName(TAB_HELPDESK);
      const ticket = body.ticket;
      sheet.appendRow([
        ticket.id, ticket.studentId, ticket.studentName, ticket.category,
        ticket.subject, ticket.description, ticket.status, ticket.date, ticket.response
      ]);
    }} else if (action === "add_note") {{
      const sheet = ss.getSheetByName(TAB_NOTES);
      sheet.appendRow([
        `NOTE-${{Date.now()}}`, body.studentId, body.note, "Normal", "Officer", new Date().toISOString()
      ]);
    }}

    return ContentService
      .createTextOutput(JSON.stringify({{ status: "success", message: "Record updated successfully" }}))
      .setMimeType(ContentService.MimeType.JSON);
  }} catch (err) {{
    return ContentService
      .createTextOutput(JSON.stringify({{ status: "error", message: err.toString() }}))
      .setMimeType(ContentService.MimeType.JSON);
  }}
}}

function getSheetRowsAsJson(sheet) {{
  if (!sheet) return [];
  const data = sheet.getDataRange().getValues();
  if (data.length <= 1) return [];

  const headers = data[0];
  const rows = [];

  for (let i = 1; i < data.length; i++) {{
    const rowObj = {{}};
    for (let h = 0; h < headers.length; h++) {{
      rowObj[headers[h]] = data[i][h];
    }}
    rows.push(rowObj);
  }}

  return rows;
}}
"""

with open('google_apps_script.js', 'w', encoding='utf-8') as f:
    f.write(gas_template)

print('Updated google_apps_script.js with full 44 student rows')
