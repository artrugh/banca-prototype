// <script src="https://player.vimeo.com/api/player.js"></script>
// iframe = webkitallowfullscreen
// mozallowfullscreen
// allowfullscreen

export const Launch = () => {
    return `
    <div id="launch">
    <iframe class = "frame" src="https://player.vimeo.com/video/174380139?title=0&byline=0&portrait=0" frameborder="0"></iframe>
    </div>
    <p class="video">
    <a href="https://vimeo.com/174380139" class = "video-link">Banca - Lanzamiento comercial en Madrid.</a>
    </p>
    `
}  