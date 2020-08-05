import React, {Component, useState, useEffect} from "react";

const UseEffect = () => {

    const [value, setValue] = useState(0);
    const [visible, setVisible] = useState(true);

    if (visible) {
        return (
            <div>
                <button onClick={() => setValue(v => v + 1)}>
                    +
                </button>

                <button onClick={() => setVisible(false)}>
                    hide
                </button>

                <HookCounter value={value}/>
                <ClassCounter value={value}/>

                <Notification/>

                <PlanetInfo id={value}/>
            </div>
        )
    } else {
        return (
            <button onClick={() => setVisible(true)}>
                show
            </button>)
    }
}

const PlanetInfo = ({id}) => {

    const [planetName, setPlanetName] = useState(null);

    useEffect(() => {

        const getPlanetName = async () => {
            const res = await fetch(`https://swapi.dev/api/planets/${id}`);
            const planet = await res.json();
            setPlanetName(planet.name);
        }

        getPlanetName();

    }, [id]);

    return <div> {id} -- {planetName}</div>
}

const HookCounter = ({value}) => {

    useEffect(() => {
        console.log('use effect');

        return () => console.log('clear');
    }, [value])

    return (<p>{value}</p>);
}

const Notification = () => {

    const [show, setShow] = useState(true);

    useEffect(() => {
        const timeOut = setTimeout(() => setShow(false), 1500);
        return () => clearTimeout(timeOut);
    })

    return show ? <p>Hello</p> : null
}

class ClassCounter extends Component {

    componentDidMount() {
        console.log('class: mount');
    }

    componentDidUpdate() {
        console.log('class: update');
    }

    componentWillUnmount() {
        console.log('class: unmount');
    }

    render() {
        return <p>{this.props.value}</p>;
    }
}

export default UseEffect;


