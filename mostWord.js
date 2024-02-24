function repeatedWord(sentence) {
    // เปลี่ยนข้อความที่รับมาให้เป็นตัวเล็กทั้งหมด
    sentence = sentence.toLowerCase();
    
    // แยกข้อความ
    const words = sentence.split(/\s+/);

    // ใช้เก็บจำนวนคำแต่ละตัวที่มีในประโยค
    const wordFrequency = {};

    // นับจำนวนคำ
    words.forEach(word => {
        word = word.replace(/\W/g, '');
        
        if (word.length > 0) {
            if (wordFrequency[word]) {
                wordFrequency[word]++;
            } else {
                wordFrequency[word] = 1;
            }
        }
    });

    // หาจำนวนคำที่มีมากที่สุด
    let mostWord = '';
    let highestFrequency = 0;

    for (const word in wordFrequency) {
        if (wordFrequency[word] > highestFrequency) {
            mostWord = word;
            highestFrequency = wordFrequency[word];
        }
    }

    return mostWord;
}

// เรียกใช้งาน
const sentence = "This sentence has five words. Here are five more words. Five-word sentences are fine. But several together become monotonous.";
const a = repeatedWord(sentence);
console.log(a);
