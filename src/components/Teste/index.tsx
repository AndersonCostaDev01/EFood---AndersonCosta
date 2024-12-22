import { useGetRestauranteQuery } from "../../services/api"

const Teste = () => {

    const {data} = useGetRestauranteQuery('2')
    return (
        <>
            {data?.capa}
        </>
    )
}
export default Teste