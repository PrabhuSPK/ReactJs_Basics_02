import Two from "./Two";


function Name(){
  // const name="Prabhu"
  const bio = {"name":"prabhu","location":"musiri"}
    return(
      <>
      <h1>i am one</h1>
      
      <Two bio={bio} />
    </>
      )
  }

export default Name;