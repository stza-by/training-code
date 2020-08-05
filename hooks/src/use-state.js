import React, {useState} from 'react';

const colors = Object.freeze({
    LIGHT: "#ced5e0",
    DARK: '#1b2536',
})

const UseState = () => {

    const [color, setColor] = useState(colors.LIGHT);
    const [fontSize, setFontSize] = useState(14);

    const styles = {
        container: {
            height: '100vh',
            backgroundColor: color,
            fontSize: `${fontSize}px`
        },
        text: {
            color: color === colors.LIGHT ? 'black' : 'white'
        }
    };

    const changeFont = (action) => {
        switch (action) {
            case 'up':
                return setFontSize(size => size + 2);
            case 'down':
                return setFontSize(size => size - 2);
            default:
                return;
        }
    }

    return (
        <div className='container' style={styles.container}>
            <div>
                <button onClick={() => setColor(colors.DARK)}>
                    Dark
                </button>

                <button onClick={() => setColor(colors.LIGHT)}>
                    Light
                </button>

                <button onClick={() => changeFont('up')}>
                    +
                </button>

                <button onClick={() => changeFont('down')}>
                    -
                </button>
            </div>

            <h1 style={styles.text}>Hello</h1>
        </div>)
}

export default UseState;