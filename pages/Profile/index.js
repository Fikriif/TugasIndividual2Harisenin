import withProtected from "../../hoc/withProtected"
import AuthLayout from "../../components/Layout/AuthLayout"


const Profile = () => {
  return (
    <AuthLayout title="Profile">d</AuthLayout>
  )
}

export default withProtected(Profile)