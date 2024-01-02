import Four from "./Four";
import Two from "./Two";


function Name(){
  // const name="Prabhu"
  const bio = {"name":"prabhu","location":"musiri"}
  const data = {"age":29,"city":"bangalore"}
    return(
      <>
      <h1>i am one</h1>
      
      <Two bio={bio} />
      <Four data={data} />
    </>
      )
  }

export default Name;