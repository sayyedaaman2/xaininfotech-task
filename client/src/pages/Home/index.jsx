import Button from '../../components/common/Button'
import HeroImg from '../../assets/images/hero.png'
import './styles.css'
function Home() {
    return (
        <main id="hero">

            <div className="wrapper">
                <div className="hero-details">
                    <h1 className='fs-900 fw-600'>Power and <span className='text-yellow-400'>Success
                        Inspired</span> Life</h1>
                    <p>
                        Knowledge is the greatest wealth. Financial security is the foundation of a peaceful life. Along with this, when there is mutual cooperation and mutual trust, our life becomes very beautiful.
                    </p>
                    <p>
                        Thank you for choosing us as your gateway to a secure life.
                    </p>
                    <p>
                        Let's travel together, have a better tomorrow.
                    </p>
                    <div className='action'>
                        <Button buttonSize='large' color='white' backgroundColor={'blue'} borderColor={'blue'}>Online Course</Button>
                        <Button buttonSize='large'>Videos</Button>

                    </div>
                </div>
                <div className="hero-img">
                    <img src={HeroImg} />
                </div>
            </div>
        </main>
    )
}

export default Home;