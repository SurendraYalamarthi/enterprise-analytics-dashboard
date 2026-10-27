import type { User } from "../../types/users";

type UserEditFormProps = {
    selectedUser: User,
    open: boolean,
    onClose: (x: User) => void
}

const UserEditForm = (props: UserEditFormProps) => {

    console.log(props);

    return (
        <div>UserEditForm</div>
    )
}

export default UserEditForm;