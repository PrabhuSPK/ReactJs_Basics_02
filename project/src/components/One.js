import Four from "./Four";
import Two from "./Two";


function Name(){
  // const name="Prabhu"
  const bio = {"name":"prabhu","location":"musiri"}
  // const bio = {}
  const data = {"age":29,"city":"bangalore"}
  const office = true //Office is open
  // const office = false //Office is closed

  const fruitList=[
    { name : "apple",location : "red" },
    { name : "orange",location : "yellow" },
    { name : "pinapple",location : "green" },
  ]

    return(
      <>
      <h1>i am one</h1>
      
      {/* { bio.name !== undefined && bio.location !== undefined ?
       <Two bio={bio} /> : null } */}

       {/* { bio &&  <Two bio={bio} />  } */}
     
      <Four data={data} />
      { office ? <p>Office is open</p> : <p>Office is closed</p>}

      <ul>
        { fruitList.map((bio) => <li><Two bio={bio} /></li>) }
      </ul>
    </>
      )
  }

export default Name;