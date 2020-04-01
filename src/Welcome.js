import React from 'react';

const styles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'column',
    width: '100vw',
    height: '100vh'
}

export const Welcome = () => 
    <div style={styles}>
        <img alt="Milk Moovement" src="https://milk-moovement.s3.ca-central-1.amazonaws.com/MM-Support.png"/>
        <div>Select a story from the left-hand panel to get mooving</div>
    </div>