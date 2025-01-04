import PersonaylInformation from '../PersonalInformation/PersonalInformation'
import classes from './ContainerPersonayInformation.module.scss'

function ContainerPersonayInformation() {
    return (
        <div className={classes.container}>
            <PersonaylInformation />
        </div>
    )
}

export default ContainerPersonayInformation