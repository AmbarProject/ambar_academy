import "./PitchSection.css";

export function PitchSection() {
    return(
        <div id="pitch" className="pitchSection">
            <div className="pitchVideo">
                <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/3RXUyhMomso" 
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen>
            </iframe>
            </div>
            
        </div>
    )
}
