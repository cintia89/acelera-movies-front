export const ButtonComponent = ({ onClick, name, className }) => {
  return (
    <>
      <button className={className} onClick={onClick} >{name}</button>
    </>
  )
}
