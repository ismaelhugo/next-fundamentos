import style from "../styles/About.module.scss"

export default function About(props) {
    return (
        <section className={style.container}>
            <h1 className={style.title}>Quem somos?</h1>
            <p className={style.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sagittis lectus ac orci sodales, ut fermentum sem tristique. Duis condimentum est elit, dignissim ornare elit efficitur id. Donec vel erat purus. Curabitur at nulla lacus. Curabitur pharetra purus eros, sodales facilisis dolor gravida at. Etiam sit amet risus cursus nunc ultricies semper. Ut condimentum, dolor sit amet pharetra aliquam, leo odio vulputate quam, non rhoncus justo elit id arcu. Duis et libero ut nisi tristique scelerisque sit amet et ligula. Nulla et lobortis nibh, vel mattis erat. Curabitur sagittis placerat venenatis. Nullam vehicula convallis porttitor.

In ac dui sit amet tellus ultricies rhoncus id at mauris. Nulla cursus lacus nec libero vestibulum condimentum. Nunc posuere ligula neque, non tempus neque eleifend nec. Mauris rhoncus commodo aliquam. Donec efficitur nisi ut sapien mattis, sed tincidunt tortor pellentesque. Fusce facilisis vulputate rhoncus. Vestibulum sit amet nulla ligula. Aliquam erat volutpat. Aliquam augue mauris, lacinia eget suscipit a, euismod eget lorem. Quisque vulputate tortor quis metus convallis, feugiat sagittis massa venenatis. Duis tortor libero, porttitor sit amet mauris et, ultrices semper odio. Suspendisse hendrerit nisi odio, nec varius odio pellentesque ac.</p>
        </section>
    )
}