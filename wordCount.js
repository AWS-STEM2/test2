// word_counter.js
function wordCount(text) {
    if (!text.trim()) return {}; // 공백 입력 방지
    const words = text.toLowerCase().match(/\b\w+\b/g); // 정규표현식으로 단어 추출
    const wordMap = new Map();
    words.forEach(word => {
        wordMap.set(word, (wordMap.get(word) || 0) + 1);
    });
    return Object.fromEntries(wordMap);
}
const text = "Hello world! Hello, AI. Hello AI world!";
console.log(wordCount(text));
