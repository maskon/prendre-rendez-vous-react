function ButtonCartClock({ className, onClick, children }) {
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  )
}

export default ButtonCartClock
