console.log("===날짜와 시간===");

let timestamp = Date.now();     // 현재 시간을 타임스탬프(숫자) 형식으로 표시
console.log("timestamp: ");
console.log(timestamp);
console.log();

let now = new Date();           // 현재 시간을 Date 객체로 표시
console.log("now: ");
console.log(now);
console.log();

let ms = now.getTime();         // 밀리초 타임스탬프로 변환
console.log("ms: ");
console.log(ms);
console.log();

let iso = now.toISOString();    // 표준 형식의 문자열로 변환
console.log("iso: ");
console.log(iso);