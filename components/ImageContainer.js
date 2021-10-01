export default function ImageContainer(props){
    return (
        <div className="imgContainer">
        <img src={props.imageSrc}/>
        </div>
    );
}