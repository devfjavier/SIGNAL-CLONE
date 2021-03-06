import { container, active, menu } from "./index.module.scss"

const FixedContainer = ({ title, containerRef, children }) => {
  const closeMenu = e => {
    if (e.target.matches(`.${container}`)) {
      containerRef.current.classList.remove(active)
    }
  }

  return (
    <div ref={containerRef} onClick={closeMenu} className={container}>
      <div className={menu}>
        <span>{title}</span>
        <ul>
          { children }
        </ul>
      </div>
    </div>
  )
}

export default FixedContainer
