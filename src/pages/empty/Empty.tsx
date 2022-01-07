import { Helmet } from 'react-helmet';

function Empty() {
    return (
        <div className="container mx-auto py-10 px-8">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Главная</title>
            </Helmet>
        </div>
    );
}

export default Empty;