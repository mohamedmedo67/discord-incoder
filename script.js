function encrypt() {
    const input = document.getElementById('inputText').value;
    const status = document.getElementById('status');
    const output = document.getElementById('outputText');

    if (!input) {
        status.style.color = "#ef4444";
        status.innerText = "⚠️ فضلاً اكتب الإعلان أولاً";
        return;
    }

    // خريطة استبدال الحروف لتشفير مرئي (زخرفة برمجية)
    const map = {
        'ا': 'آ', 'أ': 'آ', 'إ': 'إ', 'ب': 'بּ', 'ت': 'تּ', 'ث': 'ثּ', 'ج': 'جـ', 
        'ح': 'حـ', 'خ': 'خـ', 'د': 'دّ', 'ذ': 'ذّ', 'ر': 'رّ', 'ز': 'زّ', 'س': 'سּ', 
        'ش': 'شּ', 'ص': 'صּ', 'ض': 'ضּ', 'ط': 'طּ', 'ظ': 'ظּ', 'ع': 'عـ', 'غ': 'غـ', 
        'ف': 'فּ', 'ق': 'قּ', 'ك': 'كּ', 'ل': 'لּ', 'م': 'مּ', 'ن': 'نּ', 'ه': 'هـ', 
        'و': 'وّ', 'ي': 'يּ', 'ة': 'ةּ', 'ى': 'ىּ',
        'a': 'α', 'e': 'є', 'i': 'Ꭵ', 'o': 'ο', 'u': 'υ', 's': 'ѕ', 'k': 'к', 'n': 'η'
    };

    let encryptedText = "";
    for (let char of input) {
        // استبدال الحرف إذا كان موجوداً في الخريطة، وإلا نضعه كما هو مع رمز مخفي
        encryptedText += (map[char] || char) + '\u200B';
    }

    // تشفير الروابط بوضع رموز تفصل بين النقطة والدومين
    encryptedText = encryptedText.replace(/\./g, " ﹒ ");

    output.innerText = encryptedText;
    status.style.color = "#10b981";
    status.innerText = "✅ تم التشفير المرئي بنجاح!";
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
