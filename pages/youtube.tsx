import Container from 'components/container'
import YouTube from 'react-youtube';
import Layout from 'components/layout'


export default () => {
    const opts = {
        height: '390',
        width: '640',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
        },
    };

    return (<>
        <Layout preview={true}>
            <Container>
                <div>
                    <YouTube videoId="2g811Eo7K8U" opts={opts} />
                </div>
            </Container>
        </Layout>
    </>)
}