/* eslint-disable no-unused-vars */
import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <Container>
            <h3>Terms and Conditions</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam veritatis sint inventore eum ut mollitia nobis itaque vitae iure quas nostrum obcaecati quos quis alias, dolores sapiente nihil minima tenetur?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, provident illum, nobis quibusdam facere dicta repudiandae quae porro dolorum corrupti perferendis modi! Ducimus pariatur at culpa enim, quidem vel adipisci.
            Consequuntur, reprehenderit. Odit laboriosam sunt qui esse, nulla amet dolorem laudantium alias nesciunt quibusdam veritatis. Consectetur ad eaque temporibus, rerum cum voluptate optio minima, quas sequi incidunt doloribus, vitae at?
            Labore maxime eveniet corrupti laudantium quam provident corporis tempore iure! Pariatur alias eaque ducimus culpa laboriosam sapiente earum magni sunt? Minima est quaerat veritatis ea quos aperiam quibusdam doloribus consequatur!
            Aperiam ipsam voluptate veritatis? Magni nemo expedita nobis repellendus ullam dolorem sint, voluptatibus accusamus itaque dolore natus consequuntur ipsum doloribus temporibus modi quod sunt optio consequatur atque quo facilis a.</p>
            <p>Go back to <Link to={'/register'}>Register</Link> </p>
        </Container>
    );
};

export default Terms;