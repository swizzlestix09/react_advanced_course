import { memo, useState } from "react";


const Toggle = memo(function Toggle() {
  const [toggleState, setToogleState] = useState<boolean>(false);

  const toggle = () => setToogleState(prevState => !prevState)

  return (
    <div>
      Hello fwend
    </div>
  )
})

export default Toggle