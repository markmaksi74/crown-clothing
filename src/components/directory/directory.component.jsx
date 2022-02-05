import React from './react'

import './directory.styles.scss'

class Directory extends React.component {
    constructor() {
        super()

        this.state = {
            section: []
        }
    }
    render() {
        return <div className="directory-menu"></div>;
    }
}

export default Directory