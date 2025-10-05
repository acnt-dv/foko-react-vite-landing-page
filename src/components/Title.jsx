import image from '../statics/png/main-title.png';

export const Title = () => {
    return (<div
        className="h-screen w-full bg-cover bg-center bg-red-400"
        style={{backgroundImage: `url(${image})`}}>
    </div>)
}

export default Title;