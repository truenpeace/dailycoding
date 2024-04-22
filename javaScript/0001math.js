let x = 1;
let y = 3;
let z = 5;

console.log("x="+x+", y="+y+", z="+z+"일 때");
console.log("=============================================================");
console.log();

console.log("Math.pow(2,53): 2의 53승=> "+Math.pow(2,53));
console.log("Math.round(.6): 가장 가까운 정수로 반올림=> "+Math.round(.6));
console.log("Math.ceil(.6): 정수로 올림=> "+Math.ceil(.6));
console.log("Math.floor(.6): 정수로 내림=> "+Math.floor(.6));
console.log("Math.abs(-5): 절대값=> "+Math.abs(-5));
console.log("Math.max(x,y,z): 인자 중 가장 큰 것을 반환함=> "+Math.max(x,y,z));
console.log("Math.min(x,y,z): 가장 작은 인자를 반환함.=> "+Math.min(x,y,z));
console.log("Math.random(): 0 이상 1.0 미만의 랜덤한 숫자 *=> "+Math.random());
console.log("Math.PI: 원주율=> "+Math.PI);
console.log("Math.E: 자연 로그의 밑=> "+Math.E);
console.log("Math.sqrt(3): 3**0.5 : 3의 제곱근=> "+Math.sqrt(3));
console.log("Math.pow(3, 1/3): 3**(1/3) : 3의 세제곱근=> "+Math.pow(3, 1/3));
console.log("Math.sin(10): 삼각함수. Math.cos, Math.atan도 있음=> "+Math.sin(10));
console.log("Math.log(10): 10의 자연 로그=> "+Math.log(10));
console.log("Math.log(100)/Math.LN10: 100의 상용 로그=> "+Math.log(100)/Math.LN10);
console.log("Math.log(512)/Math.LN2: 512의 이진 로그=> "+Math.log(512)/Math.LN2);
console.log("Math.exp(3): Math.E의 세제곱=> "+Math.exp(3));
console.log("=============================================================");
console.log();
console.log();
console.log();

// ES6에서 추가된 함수
console.log("ES6에서 추가된 함수>");
console.log("Math.cbrt(27): 세제곱근=> "+Math.cbrt(27));
console.log("Math.hypot(3, 4): 인자의 제곱의 합의 제곱근=> "+Math.hypot(3, 4));
console.log("Math.log10(100): 상용 로그=> "+Math.log10(100));
console.log("Math.log2(1024): 이진 로그=> "+Math.log2(1024));
console.log("Math.log1p(x): 1+x의 자연 로그. x가 아주 작아야 정확함=> "+Math.log1p(x));
console.log("Math.expm1(x): Math.exp(x)-1: Math.log1p()의 역=> "+Math.expm1(x));
console.log("Math.sign(x): 인자의 부호에 따라 -1, 0, 1을 반환함=> "+Math.sign(x));
console.log("Math.imul(2,3): C 언어의 방식을 차용한 32비트 정수의 곱셈=> "+Math.imul(2,3));
console.log("Math.clz32(0xf): 32비트 정수에서 맨 앞의 0비트 개수=> "+Math.clz32(0xf));
console.log("Math.trunc(3.9): 소수점 아래를 잘라 내어 정수로 변환함=> "+Math.trunc(3.9));
console.log("Math.fround(x): 가장 가까운 32비트 부동 소수점 숫자로 반올림함=> "+Math.fround(x));
console.log("Math.sinh(x): 하이퍼볼릭 사인. Math.cosh(), Math.tanh()도 있음=> "+Math.sinh(x));
console.log("Math.asinh(x): 하이퍼볼릭 아크사인.Math.acosh(), Math.atanh()도 있음=> "+Math.asinh(x));
console.log("=============================================================");
console.log();
console.log();
console.log();

console.log("Infinity: 표현하기엔 너무 큰 양수=> "+Infinity);
console.log("Number.POSITIVE_INFINITY: 같은 값=> "+Number.POSITIVE_INFINITY);
console.log("1/0=> "+1/0);
console.log("Number.Max_VALUE*2: 오버플로=> "+Number.MAX_VALUE*2);
console.log();
console.log("-Infinity: 표현하기엔 절댓값이 너무 큰 음수=> "+-Infinity);
console.log("Number.NEGATIVE_INFINITY: 같은 값=> "+Number.NEGATIVE_INFINITY);
console.log("-1/0=> "+-1/0);
console.log("-Number.MAX_VALUE*2=> "+-Number.MAX_VALUE*2);
console.log();
console.log("NaN: 숫자가 아닌 값=> "+NaN);
console.log("Number.NaN: NaN과 같은 값이며 표현만 다르다=> "+Number.NaN);
console.log("0/0=> "+0/0);
console.log("Infinity/Infinity=> "+Infinity/Infinity);
console.log();
console.log("Number.MIN_VALUE/2: 언더플로=> "+Number.MIN_VALUE/2);
console.log("-Number.MIN_VALUE/2: 음의 0=> "+-Number.MIN_VALUE/2);
console.log("-1/Infinity: 음의 0=> "+-1/Infinity);
console.log("-0=>"+-0);
console.log("=============================================================");
console.log();
console.log();
console.log();

console.log("Number 프로퍼티의 정의>");
console.log("Number.parseInt() = 전역 함수 parseInt()와 같음");
console.log("Number.parseFloat() = 전역 함수 parseFloat()와 같음");
console.log("Number.isNaN(x): x는 NaN인가?=> "+Number.isNaN(x));
console.log("Number.isFinite(x): x는 유한한 숫자인가?=> "+Number.isFinite(x));
console.log("Number.isInteger(x): x는 정수인가?=> "+Number.isInteger(x));
console.log("Number.isSafeInteger(x): x는 -(2**53)보다 크고 2**53보다 작은 정수인가?=> "+Number.isSafeInteger(x));
console.log("Number.MIN_SAFE_INTEGER: -(2**53 - 1)=> "+Number.MIN_SAFE_INTEGER);
console.log("Number.MAX_SAFE_INTEGER: 2**53 - 1=> "+Number.MAX_SAFE_INTEGER);
console.log("Number.EPSILON: 2**-52 숫자를 구별할 수 있는 가장 작은 차이=> "+Number.EPSILON);
console.log("=============================================================");
console.log();

console.log("음의 0에 대해>");
let zero = 0;       // 일반적인 0
let negZ = -0;      // 음의 0
console.log(zero === negZ);      // => true: 0과 음의 0은 일치함.
console.log(1/zero === 1/negZ);  // => false: Infinity와 -Infinity는 일치하지 않음
console.log("=============================================================");
console.log();
console.log();
console.log();

console.log("이진 부동 소수점 숫자와 반올림 오류>");
let a = .3 - .2;        // 0.3 빼기 0.2
let b = .2 - .1;        // 0.2 빼기 0.1
console.log("a= "+a);
console.log("b= "+b);
console.log(a === b);   // => false: 두 값은 같지 x
console.log(a === .1);  // => false: 0.3 - 0.2는 0.1과 같지 X
console.log(b === .1);  // => true: 0.2 - 0.1은 0.1
console.log("=============================================================");
console.log();
console.log();
console.log();

console.log("BigInt로 임의 정확도를 부여한 정수>");
console.log("그렇게 크지는 않은 BigInt 리터럴=> "+1234n);
console.log("이진 BigInt=> "+0b111111n); 
console.log("8진 BigInt=> "+0o7777n);
console.log("2n**63n: 64비트 정수=> "+0x8000000000000000n);
console.log("=============================================================");
console.log();
console.log();
console.log();

console.log("BigInt(Number.MAX_SAFE_INTEGER)=> "+BigInt(Number.MAX_SAFE_INTEGER)); 
let string ="1" + "0".repeat(100);  // 1 뒤에 0이 1개 있습니다.
console.log(string);
console.log();
console.log(1000n + 2000n);         // => 3000n
console.log(3000n - 2000n);         // => 1000n
console.log(2000n * 3000n);         // => 6000000n
console.log(3000n / 997n);          // => 3n: 몫은 3입니다.
console.log(3000n % 997n);          // => 9n: 나머지는 9입니다.
// console.log((2n ** 131071n) - 1n);  // 39457 자리의 메르센 소수
console.log("=============================================================");
console.log();
console.log();
console.log();

console.log("1 < 2n result:");
console.log(1 < 2n);
console.log("2 > 1n result:");
console.log(2 < 1n);
console.log("0 == 0n result:");
console.log(0 == 0n);
console.log("0 === 0n result:");
console.log(0 === 0n);
console.log("===는 타입까지 같은지 체크합니다");