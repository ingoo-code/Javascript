console.log('Hello prototype'); // Node prototype


function Person2(){
    this.eyes = 2;
    this.nose = 1;
}

let kim2 = new Person2();
let park2 = new Person2();

console.log(kim2.eyes);
console.log(kim2.nose);
console.log(park2.eyes);
console.log(park2.nose);

/*
    Person2 에 대해서 설명
    Person2 Function 선언하여 각각
    kim2와 park2를 객체 를 생성하였습니다.
    그래서 kim2와 park2에는 각각 2개의 변수를 
    컴퓨터가 메모리에 할당을하여 총 4개의 변수를 할당했습니다.
    이 방법을 최소한의 메모리를 상용하기 위해서 
    Javascript는 ProtoType을 사용합니다.
*/


function Person() {}

Person.prototype.eyes = 2;
Person.prototype.nose = 1;

let kim  = new Person();
let park = new Person();


console.log(kim.eyes);
console.log(kim.nose);

console.log(park.eyes);
console.log(park.nose);

console.dir(park);

/*
    Person.prototype은 어딘가에 존재하는 빈 Object를 참조하고.
    Person으로 부터 생성되는 객체는 (kim,park)은 
    어딘가에 존재하는 Person의 Object의 값을 사용할수있습니다.

    사용방법은 이게전부이지만. 이론을 정확히 아셔야 겠죠?
*/


/*
    Prototype Link , Prototype Object = Prototype

    Javascript는 객체는 언제나 함수(Function)입니다. 

    함수에 Constructor(생성자) 자격 부여
    Constructor 자격이 부여되면 new를 통해 객체를 만들어 낼 수 있게 됩니다. 
    이것이 함수만 new 키워드를 사용할 수 있는 이유입니다.

    일반적으로 함수를 만들게되면.
    ex) function Person(){} 만들어서 생성하게되면. 2가지를 만듭니다.
    function Person(){} 안에 Prototype 
    Person Prototype Object 안에 Constructor 와 __proto___ 가 만들어집니다.

    그래서 function Person(){} 안에 있는 Prototype은 Person Prototype Object 참조하고 
    Person Prototype Object 안에 있는 Constructor은 function Person(){} 을 참조합니다.

    그리고 Person Prototype Object 안에있는 __proto__ 가 바로 Prototype Link 입니다.

    그러면 어떻게 kim과 park이 function Person() 안에있는 prototype 객체 안에있는 eyes와 nose를 참조할수있었을까요?

    그것은바로 kim 과 park이 공통적으로 가지고있는 __proto__떄문입니다.
    __proto__ 모든 객체에 공통적으로 가지고있습니다. kim도 가지고있구요. park도 가지고있고 person() 또한 가지고있습니다.
    
    그래서 __proto__는 무슨값을 가지고있냐면. 생성될 때 조상이었던 함수의 prototype Object 안에있는 Constructor를 가르키고있습니다.
    그리고 Constructor은 당연 function Person(){}을 가리키고있구요.

    그래서 결론은 kim은 자신의 조상인 Prototype Object를 가르킵니다.


*/