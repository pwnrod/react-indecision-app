console.log('program is running.');

const appRoot = document.getElementById('app');

const app = {
    title: 'Visibility Toggle',
    details: 'Hey, man. Heard you like details.',
};

let shouldShowDetails = false;

const toggleDetails = () => {
    shouldShowDetails = !shouldShowDetails;
    render();
};

const render = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            <button onClick={toggleDetails}>{shouldShowDetails ? 'Hide Details' : 'Show Details'}</button>
            {
                <p>{shouldShowDetails && app.details}</p>
            }
        </div>
    );

    ReactDOM.render(template, appRoot);
};

render();

