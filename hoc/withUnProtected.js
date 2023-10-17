/* eslint-disable react/display-name */
import { useUser } from "../context/user";
import { useRouter } from "next/router";

const withUnProtected = (Pages) => {
  return (props) => {
    const router =useRouter()
    const user = useUser()
    const { uid } = user

    if (uid) {
        router.replace('/Dashboard')
        return <></>
    }
    return <Pages {...props}/>
  }
}

export default withUnProtected;