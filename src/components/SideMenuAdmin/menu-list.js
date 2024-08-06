import AddToPhotosIcon from '@mui/icons-material/AddToPhotos'
import AddToQueueRoundedIcon from '@mui/icons-material/AddToQueueRounded'
import DevicesRoundedIcon from '@mui/icons-material/DevicesRounded'
import DomainAddSharpIcon from '@mui/icons-material/DomainAddSharp'
import LaptopWindowsIcon from '@mui/icons-material/LaptopWindows'
import LocationCityIcon from '@mui/icons-material/LocationCity'
import PersonSharpIcon from '@mui/icons-material/PersonSharp'

import paths from '../../constants/paths'
const listLink = [
  {
    id: 1,
    label: 'Usuários',
    link: paths.Users,
    icon: PersonSharpIcon,
  },

  {
    id: 2,
    label: 'Listar-Maquinários',
    link: paths.Machinery,
    icon: LaptopWindowsIcon,
  },
  {
    id: 3,
    label: 'Novo-Maquinário',
    link: paths.NewMachinery,
    icon: AddToQueueRoundedIcon,
  },
  {
    id: 4,
    label: 'Listar-Equipamentos',
    link: paths.Equipment,
    icon: DevicesRoundedIcon,
  },
  {
    id: 5,
    label: 'Novo-Equipamento',
    link: paths.NewEquipment,
    icon: AddToPhotosIcon,
  },
  {
    id: 6,
    label: 'Listar-Setores',
    link: paths.Sector,
    icon: LocationCityIcon,
  },
  {
    id: 7,
    label: 'Novo-Setor',
    link: paths.NewSector,
    icon: DomainAddSharpIcon,
  },
]

export default listLink
