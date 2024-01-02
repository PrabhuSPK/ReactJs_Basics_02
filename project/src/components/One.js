import Four from "./Four";
import Two from "./Two";


function Name(){
  // const name="Prabhu"
  // const bio = {"name":"prabhu","location":"musiri"}
  const bio = {}
  const data = {"age":29,"city":"bangalore"}
    return(
      <>
      <h1>i am one</h1>
      
      { bio.name !== undefined && bio.location !== undefined ?
       <Two bio={bio} /> : null }
     
      <Four data={data} />
    </>
      )
  }

export default Name;