import styles from './styles.module.scss'
import { FaGithub } from 'react-icons/fa'
import { FiX } from 'react-icons/fi'
import { signIn, signOut, useSession } from 'next-auth/react'

function SignInButton() {
  const { data: session} = useSession()

  return session ? (
    <button 
    type="button" 
    className={styles.signInButton}
    onClick={() => signOut()}>
      <FaGithub color="#04D361"/>
      {session.user.name}
      <FiX color="#737380" className={styles.rightIcon}/>
    </button>
  ) : (
    <button 
    type="button"
    className={styles.signInButton}
    onClick={() => signIn('github')}>
      <FaGithub color="#eba417"/>
      Sign in with GitHub
   </button>
  )


}

export default SignInButton