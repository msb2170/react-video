export default function Menu(props) {
    return (
        <div>
            <form onClick={(e) => props.handleSelectVideo(e.target.value)} />
            {props.videoNames.map((video, i) => (
                <div className="video-inputs">
                <input key={i} type="radio" name="src" value={video} />
                {video}
                </div>
            ))}
        </div>
    )
}