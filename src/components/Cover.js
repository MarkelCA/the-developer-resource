//import './Cover.css';
import coverImage from '../img/undraw.png';

const Cover = () => {
    return (
        <div id="cover" className='w-full'>
            <h3 className='text-center my-auto text-3xl'>The best resources for developers</h3>
            <img src={coverImage} alt="cover" className='w-6/12 m-auto' />
        </div>
    );
}

export default Cover;
