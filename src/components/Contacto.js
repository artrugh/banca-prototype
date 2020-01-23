import { mail } from './../key.js';

export const Contacto = () => {
    
    return `
    <section id= "contacto">
    <div class="contact-section">
        <div class="container" id = "contact-form">
        <h3 class = "contact-title">CONTACTENOS</h3>
        <form action="https://formspree.io/${mail}" method="POST">
                <div class="lebels">
                    <div class="form-group">
                        <input type="text" class="form-control"  placeholder="  Nombre">
                    </div>
                    <div class="form-group">
                        <input type="email" class="form-control" placeholder="  Email">
                    </div>
                    <div class="form-group">
                        <input type="tel" class="form-control" placeholder="  Movil*">
                    </div>
                    <div class="form-group">
                        <textarea class="form-control" class="description" placeholder="  Mensaje"></textarea>
                    </div>
                </div>
                <div class="send">
                <button type="submit" value="Send" class = "submit">ENVIAR</button>
                </div>
            </form>
        </div>
</section>`
}