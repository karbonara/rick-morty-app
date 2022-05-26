import React from "react"
import ContentLoader from "react-content-loader"

function Skeleton() {
    return (
        <ContentLoader
            speed={10}
            width={280}
            height={460}
            viewBox="0 0 280 460"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
        >
            <rect x="8" y="13" rx="0" ry="0" width="258" height="203" />
            <rect x="6" y="228" rx="0" ry="0" width="258" height="31" />
        </ContentLoader>
    );
}

export default Skeleton;