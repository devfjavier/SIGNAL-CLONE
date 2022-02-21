import SubpageLink from "../../fragments/SubpageLink"
import TextButton from "../../fragments/TextButton"
import BasicHeader from "../../sections/BasicHeader"

const Account = () => {
  return (
    <>
      <BasicHeader linkPath="/settings" titleType="h3" titleText="Cuenta"/>

      <section className="cuenta">
        <h4 className="section-subtitle">PIN de Signal</h4>
        <SubpageLink to="" title="Modificar PIN"/>

        <TextButton toggle title="Recordatorios de PIN">
          Te lo soliitaremos menos a menudo con el pasar del tiempo
        </TextButton>

        <TextButton toggle title="Bloqueo de registro">
          Requerir tu PIN de signal al volver a registrar tu numero con signal
        </TextButton>
        <SubpageLink to="" title="Ajustes avanzados del PIN"/>

        <hr />

        <h4 className="section-subtitle">Cuenta</h4>
        <SubpageLink to="" title="Transferir cuenta">
          Transferir cuenta a otro dispositivo nuevo
        </SubpageLink>
        
        <SubpageLink to="" title="Eliminar cuenta"/>
      </section>
    </>
  )
}

export default Account