function encrypt() {
    const input = document.getElementById('inputText').value;
    const status = document.getElementById('status');
    const output = document.getElementById('outputText');

    if (!input) {
        status.style.color = "#ef4444";
        status.innerText = "⚠️ فضلاً اكتب الإعلان أولاً";
        return;
    }

    // خريطة التشفير العنيف المرئي (على طريقة الصور)
    const aggressiveMap = {
        'ا': 'ﺍ', 'ب': 'بـ', 'ت': 't', 'ث': 'ثـ', 'ج': 'جـ', 'ح': 'حـ', 'خ': 'خـ',
        'د': 'ﺩ', 'ذ': 'ﺫ', 'ر': 'ـر', 'ز': 'ـز', 'س': 'سـ', 'ش': 'شـ', 'ص': 'صـ',
        'ض': 'ضـ', 'ط': 'طـ', 'ظ': 'ظـ', 'ع': 'عـ', 'غ': 'غـ', 'ف': 'f', 'ق': 'قـ',
        'ك': 'k', 'ل': 'ـل', 'م': 'ـم', 'ن': 'نـ', 'ه': 'ﻫ', 'و': 'ﻭ', 'ي': 'ﻲ',
        'ة': '9', 'ى': 'ى', 'لا': 'ﻻ', ' ': ' ',
        '.': '_', ',': '/', ' ': '   ' // مسافات أكبر بين الكلمات
    };

    let lines = input.split('\n');
    let processedLines = lines.map(line => {
        // إذا كان السطر يحتوي على رابط (http أو discord.gg)، اتركه كما هو تماماً
        if (line.includes('http') || line.includes('discord.gg') || line.includes('uri')) {
            return line;
        }

        // تشفير عنيف مرئي للكلمات العادية
        let encryptedLine = line.split('').map(char => {
            // استبدال الحرف أو الرمز من الخريطة العنيفة
            return aggressiveMap[char] || char;
        }).join('\u200B'); // إضافة الرمز المخفي لمضاعفة الأمان

        // إضافة رموز تقطيع إضافية بين الحروف لكسر الكلمات تماماً
        return encryptedLine.split('\u200B').join('\u200B//\u200B');
    });

    let result = processedLines.join('\n');

    // تأمين الرموز الخاصة مثل @ و # لتجنب الإشارة العشوائية
    result = result.replace(/@/g, '@\u200B');
    result = result.replace(/#/g, '#\u200B');

    output.innerText = result;
    status.style.color = "#10b981";
    status.innerText = "✅ تم التشفير العنيف (الروابط سليمة)!";
}

function copyResult() {
    const result = document.getElementById('outputText').innerText;
    if (result === "النتيجة ستظهر هنا...") return;

    const textArea = document.createElement("textarea");
    textArea.value = result;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);
    
    document.getElementById('status').innerText = "📋 تم النسخ بنجاح!";
}
