
function About({image, about}) {
    const placeholder = "https://via.placeholder.com/215";

    return (<aside>
        <img alt={"blog logo"} src={image ? image : placeholder} />
        <p>{about}</p>
    </aside>);

}

export default About;