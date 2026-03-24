import './App.css'
import Header from './components/header'


function App() {
  const obj={
    anun:'Ani',
    surname: 'Harutyunyan',
    age: 36
    
  }
  console.log(obj.age + 10)
    const name= 'Nare'
    const surname ='Harutyunyan'
    const age = 36

    let num = 5
    let num1 = 2
    let num2 = 4


  return (
  <div>
    <Header name={obj.anun}/>
    <Header name='Pesinch esinchyan'/>
    <h1 className='x'>hello ,{obj.name + " " + obj.surname}</h1>
    <p>Age {obj.age +20}</p>
    <p>Es {name + " "+ surname} em {age} tarekan em</p>
    <p>{num + num1 +num2}</p>

    
    <footer>footer</footer>
  </div>
     
  )
}

export default App

//unenal 3  popoxakan im tariqov,anun azganun mi toxov domum grel es esinch esinchs esqan tarekan em
// 3 hat tiv jsx um gumarel irar ev ardyunq@ cuyc tal domum

