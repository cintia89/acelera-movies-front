import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const iconComponent = ({ icon }) => {
  if (icon) {
    return (<FontAwesomeIcon icon={icon} />)
  }
  return null
}
