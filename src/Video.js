export default function Video(props) {
    return (
        <div>
            <video loop controls autostart="true" autoPlay muted src={props.videoSource} />
        </div>
    )
}