import { createGlobalStyle } from 'styled-components'
import 'react-toastify/dist/ReactToastify.css'

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
        outline: none;
        text-decoration: none;
    }

    html {
  scroll-behavior: smooth;
}
    ul{
        list-style: none;
    }
    .section {
  padding: 6rem 0 2rem;
}
.container {
  max-width: 968px;
  margin-left: auto;
  margin-right: auto;
}
.grid {
  display: grid;
  gap: 7rem;
}
`
