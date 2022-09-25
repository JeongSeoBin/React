//비구조화 할당
const dog = {
    name:'루시',
    age:10,
    weight:3.5
}

function print({name, age, weight}){
    console.log(`우리집 강아지 이름은 ${name}이며 나이는 ${age}살이고 몸무게는 ${weight}kg 입니다`);
}

print(dog);

const member = {'apple':'김사과', 'banana':'반하나'}
const {apple, banana} = member;
console.log(apple);
console.log(banana);

const users = ['김사과', '반하나'];
const [kim, ban] = users;
console.log(kim);
console.log(ban);
