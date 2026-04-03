function encrypt() {
    const input = document.getElementById('inputText').value;
    const status = document.getElementById('status');
    const output = document.getElementById('outputText');

    if (!input) {
        status.style.color = "#ef4444";
        status.innerText = "⚠️ فضلاً اكتب الإعلان أولاً";
        return;
    }

    // خريطة حروف بديلة تشبه الأصلية 100% لكنها برمجياً مختلفة
    const simpleMap = {
        'ا': 'ﺍ', 'ه': 'ﻫ', 'و': 'ﻭ', 'ي': 'ﻲ', 'ل': 'ﻞ',
        'a': 'а', 'e': 'е', 'o': 'ο', 'p': 'р', 'c': 'с'
    };

    let lines = input.split('\n');
    let processedLines = lines.map(line => {
        // إذا كان السطر يحتوي على رابط، اتركه كما هو تماماً
        if (line.includes('http') || line.includes('discord.gg') || line.includes('.com')) {
            return line;
        }

        // تشفير مرئي بسيط للأسطر العادية
        return line.split('').map(char => {
            return simpleMap[char] || char;
        }).join('\u200B'); // إضافة رمز مخفي أيضاً لزيادة الأمان
    });

    output.innerText = processedLines.join('\n');
    status.style.color = "#10b981";
    status.innerText = "✅ تم التشفير المرئي البسيط!";
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
