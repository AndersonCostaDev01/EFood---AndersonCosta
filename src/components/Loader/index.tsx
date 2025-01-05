import { DotLoader } from "react-spinners";
import { cores } from "../../globalStyles";
import {LoaderContainer} from './styles'

const Loader = () => {
    return (
        <LoaderContainer>
            <DotLoader
            color={cores.laranja}
            loading
            speedMultiplier={0.8}
            size={250}
            />
        </LoaderContainer>
    );
};

export default Loader