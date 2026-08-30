import os

with open('app.js', 'r', encoding='utf-8') as f:
    content = f.read()

checks = [
    "calculateStudentRisk",
    "generateAll44SyntheticStudents",
    "const i18n = {",
    "openEmailModal",
    "triggerPhotoUpload",
    "downloadStudentICS",
    "openStudentModal",
    "toggleChatbot",
    "sendChatbotQuery",
    "handleStudentTicketSubmit"
]

print("=== Validation Results ===")
for ch in checks:
    print(f"Check '{ch}': {ch in content}")

with open('index.html', 'r', encoding='utf-8') as f:
    html_content = f.read()

html_checks = [
    "app.js",
    "styles.css",
    "chartRiskDistribution",
    "student-detail-modal",
    "email-preview-modal",
    "engibot-panel",
    "avatar-file-input",
    "app-toast"
]

print("\n=== HTML Validation Results ===")
for ch in html_checks:
    print(f"Check '{ch}': {ch in html_content}")
