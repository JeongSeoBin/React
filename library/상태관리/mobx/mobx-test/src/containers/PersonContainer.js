import { inject, observer } from "mobx-react"
import { useCallback } from "react";
import Person from '../components/Person';

const PersonContainer = ({personStore}) => {
    const age10_computed = personStore.age10_computed;
    const plus = useCallback(() => {
        personStore.plus()
    }, [personStore]);

    return <Person age10_computed={age10_computed} plus={plus}/>
}

export default inject('personStore')(observer(PersonContainer))