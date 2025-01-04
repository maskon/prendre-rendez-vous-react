import { AiTwotoneStar } from "react-icons/ai"

export default function ButtonTabs({ children, onClick, isActive }) {
  return (
    <button className={isActive} onClick={onClick}>
      <AiTwotoneStar style={{ marginRight: 5, fontSize: 20 }} />
      {children}
    </button>
  )
}
