class Figure{
    #x;
    #y;
    constructor(x,y){
        this.#x=x;
        this.#y=y;
    }
    square(){
        return undefined;
    }
    center(){
        return {x: this.#x, y: this.#y};
    }
}
class Circle extends Figure{
    #r;
    constructor(x,y,r){
        super(x,y);
        this.#r=r;
    }
    square(){
        return Math.PI*this.#r**2;
    }
}
class Rectangle extends Figure{
    #h;
    #w;
    constructor(x,y,h,w){
        super(x,y);
        this.#h=h;
        this.#w=w;
    }
    square(){
        return this.#h*this.#w; 
    }
}
function createCircle() {
    const x = parseFloat(prompt("Введите координату x центра круга:"));
    const y = parseFloat(prompt("Введите координату y центра круга:"));
    const r = parseFloat(prompt("Введите радиус круга:"));  
    const circle = new Circle(x, y, r);
    console.log(`Площадь круга: ${circle.square()}`);
    const center = circle.center();
    console.log(`Центр круга: x = ${center.x}, y = ${center.y}`);
}
function createRectangle() {
    const x = parseFloat(prompt("Введите координату x:"));
    const y = parseFloat(prompt("Введите координату y:"));
    const h = parseFloat(prompt("Введите высоту прямоугольника:"));
    const w = parseFloat(prompt("Введите ширину прямоугольника:"));
    const rectangle = new Rectangle(x, y, h, w);
    console.log(`Площадь прямоугольника: ${rectangle.square()}`);
    const center = rectangle.center();
    console.log(`Центр прямоугольника: x = ${center.x}, y = ${center.y}`);
}
const shapeType = prompt("Какую фигуру вы хотите создать? (круг/прямоугольник)").toLowerCase();
if (shapeType === "круг") {
    createCircle();
} else if (shapeType === "прямоугольник") {
    createRectangle();
} else {
    console.log("Неверный выбор фигуры.");
}