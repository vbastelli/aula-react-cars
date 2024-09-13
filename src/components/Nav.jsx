import { NavStyle } from '../css/NavStyle'

const Nav = () => {
    return (
        <>
        <NavStyle>
            <section className="header">
                <div className='header-container'>
                    <h1 className='logo'>CityCars</h1>
                    <ul className='link'>
                        <li>Home</li>
                        <li>Sobre</li>
                        <li>Carros</li>
                    </ul>
                    
                </div>
            </section>
        </NavStyle>
        </>
    )

}

export default Nav