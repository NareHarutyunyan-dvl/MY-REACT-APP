import "../Home.css";
// import Header from "./components/header";
// import Footer from "./components/footer";
// import Button from "./button";
// import Number from "./number";
// import Card from "./card";
import { useState } from "react";
import ToDo from "../components/ToDo";
import Navigation from "../components/navigation";

function Home() {
  // const [count,setCount] = useState(12) //useState Hook

  const [isOpen, setIsOpen] = useState(false);

  const [names, setNames] = useState("Anna");

  const [text, setText] = useState("");

  const [value, setValue] = useState("");
  const [number, setNumber] = useState(null);
  const [name, setName] = useState("");

  const [age, setAge] = useState("");
  const [count, setCount] = useState(0);

  const [rtext, setRtext] = useState();

  const [color, setColor] = useState("");

  const fruits = ["apple", "banana", "orange"];

  const [textL, setTextL] = useState("like");

  const num = [2, 4, 5, 6];

  const words = ["Anna", "sun", "spring"];

  const users = [
    {
      name: "Ani",
      id: 1,
      age: 22,
    },
    {
      name: "Anahit",
      id: 2,
      age: 25,
    },
  ];

  function handleClikText() {
    setTextL(textL === "like" ? "dislike" : "like");
  }

  function handleClikButton() {
    if (number) {
      alert(number * 2);
    } else {
      alert("empty");
    }
  }

  function handleClikInput(number) {}

  function handleToggle(text) {
    alert(text);
  }

  function numCount(clikType) {
    if (clikType === "plus") {
      setCount(count + 1);
    } else {
      if (count > 0) {
        setCount(count - 1);
      }
    }
  }

  const user = [
    {
      name: "Anna",
      surname: "Asatryan",
      age: 22,
    },

    {
      name: "Poxos",
      surname: "Poxosyan",
      age: 30,
    },

    {
      name: "Gevorg",
      surname: "Gevorgyan",
      age: 44,
    },
    {
      name: "Anahit",
      surname: "Grigoryan",
      age: 10,
    },
  ];

  let totalAge = 0;
  user.forEach((u) => {
    totalAge += u.age;
  });

  let oldest = user[0];
  user.forEach((old) => {
    if (old.age > oldest.age) {
      oldest = old;
    }
  });

  let userAge = [];
  user.forEach((u) => {
    if (u.age > 25) userAge.push(u);
    console.log(userAge);
  });

  let userCount = 0;
  user.forEach(() => {
    if (user.length - 1) {
      userCount++;
    }
  });
  console.log(userCount);

  let sortUser = user.sort((a, b) => a.age - b.age);
  console.log(sortUser, "sort ");

  // const total = user.reduce((sum, u) => sum + u.age, 0);
  // console.log(total, "total");

  // const DynamicInput = () =>{
  //   const [placeholderText ,setPlaceholderText] =useState('Enter your name')
  //   const handleSelectChange =(e)=>{
  //     if (e.target.value  ==='name'){
  //       setPlaceholderText('Enter your name')
  //     }
  //   }

  // }

  function handleSelectChange(e) {
    setText(e.target.value);
  }

  // function handleClik(){
  //   alert('Hello Spring')

  // }

  // function handleChenchInput(e){
  //   setText(e.target.value)

  // }

  // const obj={
  //   name:'Ani',
  //   surname: 'Harutyunyan',
  //   age: 36

  // }

  //   const name= 'Nare'
  //   const surname ='Harutyunyan'
  //   const age = 36

  //   const num = 5
  //   const num1 = 2
  //   const num2 = 4

  //   num + '78' //578
  //   '78' + num //785

  return (
    <div style={{ background: color }}>
      <Navigation />
      {/* //list rendering */}
      <ToDo />

      <div>
        {fruits.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </div>

      <div>
        {user.map((users, index) => (
          <p key={index}>
            {user.name}
            {user.surname}
            {user.age}
          </p>
        ))}
        <h1>total Age{totalAge}</h1>
      </div>

      <div>
        {num.map((item, index) => (
          <p key={index}>{item * 2}</p>
        ))}
      </div>

      <div>
        {users.map((user) => (
          <p key={user.id}>
            {user.name}-{user.age}
          </p>
        ))}
      </div>

      <div>
        {words.map((item, index) => (
          <h1 key={index}>{item.toUpperCase()}</h1>
        ))}
        <h1>Oldest user {oldest.name}</h1>
      </div>

      <input
        type="text"
        placeholder="Enter your name"
        onChange={(e) => handleSelectChange(e)}
      />
      <h1>{text}</h1>

      <button onClick={() => handleToggle("Hello")}>Toggle</button>
      <button onClick={() => handleToggle("Bye")}>Toggle</button>
      <button onClick={() => console.log("Nare")}>Toggle</button>

      <input onChange={(e) => setNumber(e.target.value)} />
      <button onClick={handleClikButton}>Clik</button>

      <input onChange={(e) => setName(e.target.value)} />
      <input onChange={(e) => setAge(e.target.value)} />
      {name && (
        <p>
          im anun@ {name},es {age}tarekan em
        </p>
      )}

      <footer>
        <button onClick={() => numCount("plus")}>+</button>
        <h1>{count}</h1>
        <button onClick={() => numCount("minus")}>-</button>
        <button onClick={() => setCount(0)}>Reset</button>

        <input type="text" onChange={(e) => setRtext(e.target.value)} />
        <h1>{(rtext || "").toUpperCase()}</h1>

        <input onChange={(e) => setColor(e.target.value)} />

        <h1>{textL}</h1>
        <button onClick={handleClikText}>Change</button>
      </footer>

      {/* <Card className='card'>
      <h1>Hi</h1>
      <p>How are you</p>
    </Card>
    <Card className='cardBlue'>

      <button onClick={() => setCount(count +1)}>+</button>
      <p>{count}</p>
      <button onClick={() => setCount(count -1)}>-</button> */}

      {/* </Card>
   
    <Header name={obj.anun}/>
    <Header name='Pesinch esinchyan'/>
    <h1 className='x'>hello ,{obj.name + " " + obj.surname}</h1>
    <Number num1={5} num2={10}/>
    <p>Age {obj.age +20}</p>
    <p>Es {name + " "+ surname} em {age} tarekan em</p>
    <p>{num + num1 + num2}</p>
   
    <Button text='Login'/>
    <Button text='Registration'/>
    <Button text='Forget Password'/>
    <Footer name='Poxos Poxosyan '/>

<button onClick={()=>setIsOpen(!isOpen)}>
  Toggle
</button>

<p>{isOpen ? "Open":'Closed'}</p>

<button onClick={() => alert('Hello Spring')}>Toggle</button>
<p>{names}</p> */}

      {/* <footer>footer</footer> */}

      {/* <input onChange={(e)=> handleChenchInput(e)}/>
  <p>{text}</p> */}
    </div>
  );
}

export default Home;
