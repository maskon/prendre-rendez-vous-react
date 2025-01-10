import { AiTwotoneStar } from "react-icons/ai"

function ButtonTabs({ children, onClick, isActive }) {
  return (
    <button className={isActive} onClick={onClick}>
      <AiTwotoneStar style={{ marginRight: 5, fontSize: 20 }} />
      {children}
    </button>
  )
}

export default ButtonTabs
