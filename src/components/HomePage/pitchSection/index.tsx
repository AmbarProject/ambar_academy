import "./PitchSection.css";

export function PitchSection({id}: {id: string}) {
    return(
        <div id={id} className="pitchSection">
            <div className="pitchVideo">
                <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/qI7qxTSbjLg" 
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen>
            </iframe>
            </div>
            
        </div>
    )
}