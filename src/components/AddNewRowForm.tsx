import { Row } from '@/models'

type Props = {
    id: string
    onSubmit: () => void
}

export default function AddNewRowForm(props: Props) {
    

    const handleSubmit = (evt: SubmitEvent) => {
        console.log('this is being submitted')
        evt.preventDefault();
        props.onSubmit()
    }

    return (
        <form className='sd-form' id={props.id} onSubmit={() => handleSubmit}>
            WIP~ Need inputs here
        </form>
    )
}