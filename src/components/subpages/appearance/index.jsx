import { useContext } from "react"
import Context from "../../context"
import ThemeSettings from "./ThemeSettings"
import BasicHeader from "../../sections/BasicHeader"
import SubpageButton from "../../fragments/SubpageButton"
import SubpageLink from "../../fragments/SubpageLink"

const Appearance = () => {

  const [{appearance}, dispatch] = useContext(Context)

  return (
    <>
      <BasicHeader linkPath="/settings" titleType="h3" titleText="Apariencia"/>

      <section>
        <ThemeSettings context={[appearance.theme, dispatch]}/>

        <SubpageLink to="chat-color" title="Color y fondo del chat"/>

        <SubpageButton title="Tamaño de fuente del mensaje">
          Normal
        </SubpageButton>

        <SubpageButton title ="Idioma">
          Predeterminado del sitema
        </SubpageButton>
      </section>
    </>
  )
}

export default Appearance