import aboutme from '../assets/data/aboutme.json'
import parse from 'html-react-parser';

export default function AboutMe () {
    return (<>
            <article className='container-md card my-5 p-3 shadow'>
            <h2 className='text-center p-3 fw-bold'>{aboutme.title}</h2>
            <div className='row p-4'>
                <div className='col-md-9'>
                    <p className='fs-5'>{parse(aboutme.text)}</p>
                </div>
                <div id='profile' className='col-md-3'>
                    <picture>
                    <source media="(max-width: 767px)" srcSet="src/assets/images/profile-mobile.jpg" />
                    <img className='img-thumbnail shadow' src="src/assets/images/profile.jpeg" alt="profile" />
                    </picture>
                </div>
            </div>
        </article>
    </>)
}