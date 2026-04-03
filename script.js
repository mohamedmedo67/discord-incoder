function encrypt() {
    const input = document.getElementById('inputText').value;
    const status = document.getElementById('status');
    const output = document.getElementById('outputText');

    if (!input) {
        status.innerText = "❌ الرجاء كتابة نص أولاً!";
        return;
    }

    // تقنية التشفير: إضافة رمز غير مرئي بين كل حرف وحرف
    // هذا الرمز (\u200b) لا يظهر للعين لكن يكسر قراءة البوتات للنص
    let encrypted = input.split('').join('\u200b');

    // تشفير الروابط بشكل خاص (تغيير النقاط لرموز مشابهة)
    encrypted = encrypted.replace(/\./g, " ﹒ ");

    output.innerText = encrypted;
    status.innerText = "✅ تم التشفير بنجاح!";
}

function copyResult() {
    const result = document.getElementById('outputText').innerText;
    if (result === "النتيجة ستظهر هنا...") return;

    navigator.clipboard.writeText(result);
    document.getElementById('status').innerText = "📋 تم النسخ للحافظة!";
}
