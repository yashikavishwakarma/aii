import { Link } from 'react-router-dom'

const LogoContainer = () => {
  return (
    <Link to={"/"}>
        <img src="/assets/svg/logo.svg" alt="Logo" className="min-w-10 min-h-10 object-contain" />
    </Link>
  )
}

export default LogoContainer