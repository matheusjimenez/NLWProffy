import React from 'react';

import './styles.css';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://scontent.faqa3-1.fna.fbcdn.net/v/t1.0-9/48356954_10215900096273500_8167988509395648512_n.jpg?_nc_cat=109&_nc_sid=85a577&_nc_ohc=ORZXu80JRj8AX884U8G&_nc_ht=scontent.faqa3-1.fna&oh=248c4bdaddb3a2760b4ff847b85d9d9b&oe=5F4F99D6" alt="" />
                <div>
                    <strong>Nome</strong>
                    <span>Química</span>
                </div>
            </header>

            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, dolorum reiciendis corporis facilis
                        <br /><br />
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo praesentium non aliquid deleniti assumenda
                    </p>

            <footer>
                <p>
                    Preço/hora
                            <strong>R$80,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="whatsApp icon" />
                            Entrar em contato
                        </button>
            </footer>
        </article>
    );
}

export default TeacherItem;