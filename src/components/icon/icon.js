import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Icon = ({ icon }) => {
  if (icon) {
    return (<FontAwesomeIcon icon={icon} />)
  }
  return null
}
