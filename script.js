function encrypt() {
    const input = document.getElementById('inputText').value;
    const status = document.getElementById('status');
    const output = document.getElementById('outputText');

    if (!input) {
        status.style.color = "#ef4444";
        status.innerText = "⚠️ فضلاً اكتب الإعلان أولاً";
        return;
    }

    // خريطة حروف "مرئية" بسيطة جداً (بتغير شكل الحرف بس بيفضل مفهوم)
    const simpleMap = {
        'ا': 'آ', 'أ': 'آ', 'إ': 'إ', 'ه': 'هـ', 'و': 'وُ', 'ي': 'يـ',
        'a': 'а', 'e': 'е', 'o': 'ο', 'i': 'і', 's': 'ѕ'
    };

    let lines = input.split('\n');
    let processedLines = lines.map(line => {
        // لو السطر فيه رابط، سيبه زي ما هو تماماً
        if (line.includes('http') || line.includes('discord.gg')) {
            return line;
        }

        // تشفير مرئي بسيط للكلمات العادية
        return line.split('').map(char => {
            return simpleMap[char] || char;
        }).join('\u200B'); // رمز مخفي بين الحروف لزيادة الأمان
    });

    output.innerText = processedLines.join('\n');
    status.style.color = "#10b981";
    status.innerText = "✅ تم التحديث: تشفير مرئي بسيط + روابط سليمة";
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
