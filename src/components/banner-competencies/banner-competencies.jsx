import React from 'react'
import competenciesBanner from '../../assets/images/competencies-banner.jpeg'

const bannerCompetencies = () => {
    return (
        <div className="competencies-banner">
			<img className="banner-competencies" src={competenciesBanner} alt="LV Consulting" />
		</div>
    )
};

export default bannerCompetencies;