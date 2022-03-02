//Class 1
const country = function (countryName, continent, language) {
    this.countryName = countryName;
    this.continent = continent;
    this.language = language;
}

let country1 = new country("Uganda", "Africa", "English");
let country2 = new country("France", "Europe", "French");
let country3 = new country("China", "Asia", "Mandrin");


//Class 2
const school = function (schName, section, minimumAge) {
    this.schName = schName;
    this.section = section;
    this.minimumAge = minimumAge;
}

let school1 = new school("Greenville", "Primary", "5");
let school2 = new school("Cradle", "Nursery", "2");
let school3 = new school("Namagunga", "Secondary", "10");

//Class 3

function shoe(shoeColor, brandName, size) {
    this.shoeColor = shoeColor;
    this.brandName = brandName;
    this.size = size;
}

let shoe1 = new shoe("black", "Regal", "8")
let shoe2 = new shoe("brown", "Reebok", "6")
let shoe3 = new shoe("silver", "nike", "10")

console.log(shoe1, shoe2, shoe3);

//Class 4
const employee = function (id, username, department) {
    this.id = id;
    this.username = username;
    this.department = department;

}

let employee1 = new employee("S-170", "doe@mukwano.sales.co.go", "Sales");
let employee2 = new employee("A-005", "jane@mukwano.accounts.co.go", "Accounts");
let employee3 = new employee("M-014", "john@mukwano.markets.co.go", "Marketeer");


//Class 5
const Lake = function (lakeName, fishType, waterType, location, size) {
    this.lakeName = lakeName;
    this.fishType = fishType;
    this.waterType = waterType;
    this.location = location;
    this.size = size;
}
let lake1 = new Lake("L.Victoria", "tilapia", "fresh", "Central Uganda", "68,000 sq. kms");
let lake2 = new Lake("L.Kyoga", "Star Fish", "Fresh", "Upper Central Uganda", "1,700 sq.kms");
console.log(lake2.lakeName);
console.log(lake2);

//Class 6
const person = function (colourName, tribe, region) {
    this.colourName = colourName;
    this.tribe = tribe;
    this.region = region;

}
let person1 = new person("dark-cmplextion", "lango", "lira")
let person2 = new person("light-complextion", "kiga", "kabale")

//Class 7
function Laptop(laptopBrand, generation, OS) {
    this.laptopBrand = laptopBrand;
    this.generation = generation;
    this.OS = OS;

}

let laptop1 = new Laptop("HP", "i7 7th gen", "windows11");
let laptop2 = new Laptop("Dell", "i3 8th gen", "ubuntu-linux");
let laptop3 = new Laptop("Mac-Book Air", "i5 7th gen", "Mac-OS");

console.log(laptop1);
console.log(laptop2);
console.log(laptop3);
