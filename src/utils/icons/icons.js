import CaloriesIcon from '../../assets/energy.svg'
import ProteinsIcon from '../../assets/chicken.svg'
import GlucidesIcon from '../../assets/apple.svg'
import LipidesIcon from '../../assets/cheeseburger.svg'

export function getIcon(name) {
  switch (name) {
    case 'Calories':
      return { iconSource: CaloriesIcon, unit: 'kCal', color: '#FF0000' }
    case 'Proteines':
      return { iconSource: ProteinsIcon, unit: 'g', color: '#4AB8FF' }
    case 'Glucides':
      return { iconSource: GlucidesIcon, unit: 'g', color: '#FDCC0C' }
    case 'Lipides':
      return { iconSource: LipidesIcon, unit: 'g', color: '#FD5181' }
    default:
      return { iconSource: CaloriesIcon, unit: 'kCal' }
  }
}
